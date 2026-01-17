
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus, Trash2, Edit, ImageIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { AspectRatio } from "@/components/ui/aspect-ratio"

interface GalleryItem {
    id: string
    title: string
    image_url: string
    category: string
}

export default function GalleryPage() {
    const [items, setItems] = useState<GalleryItem[]>([])
    const [loading, setLoading] = useState(true)
    const supabase = createClient()

    const fetchGallery = async () => {
        setLoading(true)
        const { data, error } = await supabase
            .from('galleries')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) {
            alert('Gagal mengambil data galeri: ' + error.message)
        } else {
            setItems(data || [])
        }
        setLoading(false)
    }

    const deleteItem = async (id: string) => {
        if (!confirm('Apakah anda yakin ingin menghapus foto ini?')) return

        const { error } = await supabase
            .from('galleries')
            .delete()
            .eq('id', id)

        if (error) {
            alert('Gagal menghapus foto: ' + error.message)
        } else {
            fetchGallery()
        }
    }

    useEffect(() => {
        fetchGallery()
    }, [])

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Galeri</h2>
                    <p className="text-muted-foreground">Kelola foto kegiatan pesantren.</p>
                </div>
                <Button asChild>
                    <Link href="/dashboard/gallery/upload">
                        <Plus className="mr-2 h-4 w-4" /> Tambah Foto
                    </Link>
                </Button>
            </div>

            {loading ? (
                <div className="text-center py-12 text-muted-foreground">Memuat galeri...</div>
            ) : items.length === 0 ? (
                <div className="text-center py-12 border-2 border-dashed rounded-xl">
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <div className="p-4 bg-muted rounded-full">
                            <ImageIcon className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <h3 className="font-semibold text-lg">Belum ada foto</h3>
                        <p className="text-muted-foreground">Mulai dengan mengupload foto baru.</p>
                    </div>
                </div>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {items.map((item) => (
                        <div key={item.id} className="group relative rounded-xl overflow-hidden bg-muted border shadow-sm">
                            <AspectRatio ratio={1 / 1}>
                                <img
                                    src={item.image_url}
                                    alt={item.title}
                                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                                />
                            </AspectRatio>

                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3 pt-8">
                                <p className="text-white text-sm font-medium truncate">{item.title}</p>
                                <p className="text-white/70 text-xs truncate">{item.category}</p>
                            </div>

                            {/* Overlay for actions */}
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                                <Button variant="secondary" size="icon" asChild>
                                    <Link href={`/dashboard/gallery/${item.id}/edit`}>
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
