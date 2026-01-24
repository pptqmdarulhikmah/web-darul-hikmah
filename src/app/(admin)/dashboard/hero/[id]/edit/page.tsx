"use client"

import Link from "next/link"
import { useRouter, useParams } from "next/navigation"
import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Loader2, UploadCloud } from "lucide-react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"

export default function EditHeroPage() {
    const router = useRouter()
    const { id } = useParams()
    const supabase = createClient()
    const [loading, setLoading] = useState(false)
    const [fetching, setFetching] = useState(true)

    // Form States
    const [imageFile, setImageFile] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [title, setTitle] = useState("")
    const [subtitle, setSubtitle] = useState("")
    const [buttonText, setButtonText] = useState("")
    const [buttonLink, setButtonLink] = useState("")
    const [sortOrder, setSortOrder] = useState(0)
    const [isActive, setIsActive] = useState(true)

    useEffect(() => {
        const fetchSlide = async () => {
            const { data, error } = await supabase
                .from('hero_slides')
                .select('*')
                .eq('id', id)
                .single()

            if (error) {
                alert('Error: ' + error.message)
                router.push('/dashboard/hero')
                return
            }

            if (data) {
                setTitle(data.title || "")
                setSubtitle(data.subtitle || "")
                setButtonText(data.button_text || "")
                setButtonLink(data.button_link || "")
                setSortOrder(data.sort_order || 0)
                setIsActive(data.is_active)
                setPreviewUrl(data.image_url)
            }
            setFetching(false)
        }
        fetchSlide()
    }, [id])

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            setImageFile(file)
            setPreviewUrl(URL.createObjectURL(file))
        }
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        setLoading(true)
        try {
            let publicUrl = previewUrl

            // 1. Upload New Image if Selected
            if (imageFile) {
                const fileExt = imageFile.name.split('.').pop()
                const fileName = `hero-${Date.now()}.${fileExt}`
                const filePath = `hero/${fileName}`

                const { error: uploadError } = await supabase.storage
                    .from('images')
                    .upload(filePath, imageFile)

                if (uploadError) throw uploadError

                const { data } = supabase.storage
                    .from('images')
                    .getPublicUrl(filePath)

                publicUrl = data.publicUrl
            }

            // 2. Update Record
            const { error: updateError } = await supabase
                .from('hero_slides')
                .update({
                    title,
                    subtitle,
                    image_url: publicUrl,
                    button_text: buttonText,
                    button_link: buttonLink,
                    sort_order: sortOrder,
                    is_active: isActive,
                    updated_at: new Date().toISOString()
                })
                .eq('id', id)

            if (updateError) throw updateError

            router.push('/dashboard/hero')
            router.refresh()

        } catch (error: any) {
            console.error(error)
            alert('Gagal menyimpan perubahan: ' + error.message)
        } finally {
            setLoading(false)
        }
    }

    if (fetching) {
        return <div className="text-center py-12">Memuat data slide...</div>
    }

    return (
        <div className="max-w-2xl mx-auto space-y-6">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/dashboard/hero">
                        <ArrowLeft className="w-5 h-5" />
                    </Link>
                </Button>
                <h2 className="text-2xl font-bold tracking-tight">Edit Slide</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8 bg-card p-6 rounded-xl border shadow-sm">

                {/* Image Upload */}
                <div className="space-y-4">
                    <Label>Gambar Banner</Label>
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                        <div
                            onClick={() => document.getElementById('image-upload')?.click()}
                            className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-muted/50 transition-colors bg-muted/20 aspect-video relative overflow-hidden"
                        >
                            {previewUrl ? (
                                <img src={previewUrl} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
                            ) : (
                                <>
                                    <UploadCloud className="w-10 h-10 text-muted-foreground mb-2" />
                                    <span className="text-sm text-muted-foreground">Klik untuk ganti gambar</span>
                                </>
                            )}
                            <Input
                                id="image-upload"
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handleImageChange}
                            />
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="grid gap-2">
                        <Label htmlFor="title">Judul Utama</Label>
                        <Input
                            id="title"
                            placeholder="Contoh: Membangun Generasi Rabbani"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>

                    <div className="grid gap-2">
                        <Label htmlFor="subtitle">Sub Judul / Deskripsi</Label>
                        <Textarea
                            id="subtitle"
                            placeholder="Deskripsi singkat..."
                            value={subtitle}
                            onChange={(e) => setSubtitle(e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="btn_text">Teks Tombol</Label>
                        <Input
                            id="btn_text"
                            placeholder="Contoh: Daftar Sekarang"
                            value={buttonText}
                            onChange={(e) => setButtonText(e.target.value)}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="btn_link">Link Tombol</Label>
                        <Input
                            id="btn_link"
                            placeholder="Contoh: /pendaftaran"
                            value={buttonLink}
                            onChange={(e) => setButtonLink(e.target.value)}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="sort_order">Urutan</Label>
                        <Input
                            id="sort_order"
                            type="number"
                            value={sortOrder}
                            onChange={(e) => setSortOrder(parseInt(e.target.value))}
                        />
                    </div>
                    <div className="flex items-center gap-2 pt-8">
                        <Switch
                            id="active-mode"
                            checked={isActive}
                            onCheckedChange={setIsActive}
                        />
                        <Label htmlFor="active-mode">Aktifkan Slide</Label>
                    </div>
                </div>

                <div className="flex justify-end gap-3 pt-4">
                    <Button variant="outline" type="button" asChild>
                        <Link href="/dashboard/hero">Batal</Link>
                    </Button>
                    <Button type="submit" disabled={loading}>
                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Simpan Perubahan
                    </Button>
                </div>

            </form>
        </div>
    )
}
