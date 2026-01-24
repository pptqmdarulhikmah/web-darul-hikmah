"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus, Trash2, Edit, ImageIcon, MoveUp, MoveDown } from "lucide-react"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface HeroSlide {
    id: string
    title: string
    subtitle: string
    image_url: string
    is_active: boolean
    sort_order: number
}

export default function HeroPage() {
    const [items, setItems] = useState<HeroSlide[]>([])
    const [loading, setLoading] = useState(true)
    const supabase = createClient()

    const fetchSlides = async () => {
        setLoading(true)
        const { data, error } = await supabase
            .from('hero_slides')
            .select('*')
            .order('sort_order', { ascending: true })

        if (error) {
            console.error('Gagal mengambil data slide: ' + error.message)
        } else {
            setItems(data || [])
        }
        setLoading(false)
    }

    const deleteItem = async (id: string) => {
        if (!confirm('Apakah anda yakin ingin menghapus slide ini?')) return

        const { error } = await supabase
            .from('hero_slides')
            .delete()
            .eq('id', id)

        if (error) {
            alert('Gagal menghapus slide: ' + error.message)
        } else {
            fetchSlides()
        }
    }

    useEffect(() => {
        fetchSlides()
    }, [])

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Hero Carousel</h2>
                    <p className="text-muted-foreground">Kelola banner halaman depan.</p>
                </div>
                <Button asChild>
                    <Link href="/dashboard/hero/create">
                        <Plus className="mr-2 h-4 w-4" /> Tambah Slide
                    </Link>
                </Button>
            </div>

            {loading ? (
                <div className="text-center py-12 text-muted-foreground">Memuat slides...</div>
            ) : items.length === 0 ? (
                <div className="text-center py-12 border-2 border-dashed rounded-xl">
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="p-4 bg-muted rounded-full">
                            <ImageIcon className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <h3 className="font-semibold text-lg">Belum ada slide</h3>
                        <p className="text-muted-foreground">Mulai dengan menambahkan slide baru.</p>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-1 gap-4">
                    {items.map((item) => (
                        <div key={item.id} className="group relative flex items-center gap-4 p-4 rounded-xl bg-muted/50 border shadow-sm">
                            <div className="w-48 shrink-0">
                                <AspectRatio ratio={16 / 9} className="bg-muted rounded-md overflow-hidden">
                                    <img
                                        src={item.image_url}
                                        alt={item.title || "Hero Image"}
                                        className="object-cover w-full h-full"
                                    />
                                </AspectRatio>
                            </div>

                            <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-lg truncate">{item.title || '(Tanpa Judul)'}</h3>
                                <p className="text-muted-foreground text-sm truncate">{item.subtitle}</p>
                                <div className="mt-2 flex gap-2">
                                    {item.is_active ? (
                                        <span className="text-xs px-2 py-0.5 rounded-full bg-green-100 text-green-700 font-medium">Aktif</span>
                                    ) : (
                                        <span className="text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 font-medium">Tidak Aktif</span>
                                    )}
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <Button variant="outline" size="icon" asChild>
                                    <Link href={`/dashboard/hero/${item.id}/edit`}>
                                        <Edit className="w-4 h-4" />
                                    </Link>
                                </Button>
                                <Button variant="destructive" size="icon" onClick={() => deleteItem(item.id)}>
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
