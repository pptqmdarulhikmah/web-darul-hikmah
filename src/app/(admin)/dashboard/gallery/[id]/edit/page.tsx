
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { useRouter, useParams } from "next/navigation"

export default function EditGalleryPage() {
    const params = useParams()
    const id = params.id as string

    const [loading, setLoading] = useState(false)
    const [fetching, setFetching] = useState(true)
    const router = useRouter()
    const supabase = createClient()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("Kegiatan")
    const [image_url, setImageUrl] = useState("")

    useEffect(() => {
        const fetchItem = async () => {
            const { data, error } = await supabase
                .from('galleries')
                .select('*')
                .eq('id', id)
                .single()

            if (error) {
                alert("Gagal mengambil data: " + error.message)
                router.push('/dashboard/gallery')
            } else if (data) {
                setTitle(data.title)
                setDescription(data.description || "")
                setCategory(data.category || "Kegiatan")
                setImageUrl(data.image_url)
            }
            setFetching(false)
        }

        if (id) fetchItem()
    }, [id, router, supabase])

    const handleSubmit = async () => {
        if (!title || !image_url) {
            alert("Judul dan URL Gambar harus diisi!")
            return
        }

        setLoading(true)

        const { error } = await supabase
            .from('galleries')
            .update({
                title,
                description,
                category,
                image_url,
            })
            .eq('id', id)

        if (error) {
            alert("Gagal memperbarui foto: " + error.message)
            setLoading(false)
        } else {
            alert("Foto berhasil diperbarui!")
            router.push('/dashboard/gallery')
        }
    }

    if (fetching) {
        return <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
    }

    return (
        <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/dashboard/gallery"><ArrowLeft className="w-5 h-5" /></Link>
                </Button>
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Edit Foto</h2>
                    <p className="text-muted-foreground">Perbarui informasi foto galeri.</p>
                </div>
            </div>

            <div className="space-y-4 rounded-xl border bg-card p-6 shadow-sm">
                <div className="space-y-2">
                    <Label htmlFor="title">Judul Foto <span className="text-red-500">*</span></Label>
                    <Input
                        id="title"
                        placeholder="Contoh: Kegiatan Tahfizh Pagi"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="category">Kategori</Label>
                    <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger>
                            <SelectValue placeholder="Pilih kategori" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="Kegiatan">Kegiatan Santri</SelectItem>
                            <SelectItem value="Fasilitas">Fasilitas</SelectItem>
                            <SelectItem value="Prestasi">Prestasi</SelectItem>
                            <SelectItem value="Acara">Acara & Event</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="image">URL Gambar <span className="text-red-500">*</span></Label>
                    <Input
                        id="image"
                        placeholder="https://..."
                        value={image_url}
                        onChange={(e) => setImageUrl(e.target.value)}
                    />
                    {image_url && (
                        <div className="mt-2 aspect-video w-full rounded-lg overflow-hidden border bg-muted">
                            <img src={image_url} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="description">Deskripsi (Opsional)</Label>
                    <Textarea
                        id="description"
                        placeholder="Ceritakan sedikit tentang foto ini..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <div className="flex justify-end gap-4 pt-4 border-t mt-6">
                    <Button variant="outline" asChild disabled={loading}>
                        <Link href="/dashboard/gallery">Batal</Link>
                    </Button>
                    <Button onClick={handleSubmit} disabled={loading}>
                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Simpan Perubahan
                    </Button>
                </div>
            </div>
        </div>
    )
}
