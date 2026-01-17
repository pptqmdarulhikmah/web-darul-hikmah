
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { useRouter, useParams } from "next/navigation"

export default function EditTestimonialPage() {
    const params = useParams()
    const id = params.id as string

    const [loading, setLoading] = useState(false)
    const [fetching, setFetching] = useState(true)
    const router = useRouter()
    const supabase = createClient()

    const [name, setName] = useState("")
    const [role, setRole] = useState("")
    const [content, setContent] = useState("")
    const [avatar_url, setAvatarUrl] = useState("")

    useEffect(() => {
        const fetchTestimonial = async () => {
            const { data, error } = await supabase
                .from('testimonials')
                .select('*')
                .eq('id', id)
                .single()

            if (error) {
                alert("Gagal mengambil data: " + error.message)
                router.push('/dashboard/testimonials')
            } else if (data) {
                setName(data.name)
                setRole(data.role)
                setContent(data.content)
                setAvatarUrl(data.avatar_url || "")
            }
            setFetching(false)
        }

        if (id) fetchTestimonial()
    }, [id, router, supabase])

    const handleSubmit = async () => {
        if (!name || !content || !role) {
            alert("Nama, Peran, dan Konten harus diisi!")
            return
        }

        setLoading(true)

        const { error } = await supabase
            .from('testimonials')
            .update({
                name,
                role,
                content,
                avatar_url,
            })
            .eq('id', id)

        if (error) {
            alert("Gagal memperbarui testimoni: " + error.message)
            setLoading(false)
        } else {
            alert("Testimoni berhasil diperbarui!")
            router.push('/dashboard/testimonials')
        }
    }

    if (fetching) {
        return <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
    }

    return (
        <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/dashboard/testimonials"><ArrowLeft className="w-5 h-5" /></Link>
                </Button>
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Edit Testimoni</h2>
                    <p className="text-muted-foreground">Perbarui data ulasan.</p>
                </div>
            </div>

            <div className="space-y-4 rounded-xl border bg-card p-6 shadow-sm">
                <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap <span className="text-red-500">*</span></Label>
                    <Input
                        id="name"
                        placeholder="Nama pemberi testimoni..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="role">Peran / Status <span className="text-red-500">*</span></Label>
                    <Input
                        id="role"
                        placeholder="Contoh: Wali Santri, Alumni 2023..."
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="avatar">Foto Profil (URL)</Label>
                    <Input
                        id="avatar"
                        placeholder="https://..."
                        value={avatar_url}
                        onChange={(e) => setAvatarUrl(e.target.value)}
                    />
                    {avatar_url && (
                        <div className="mt-2 w-16 h-16 rounded-full overflow-hidden border bg-muted">
                            <img src={avatar_url} alt="Preview" className="w-full h-full object-cover" />
                        </div>
                    )}
                </div>

                <div className="space-y-2">
                    <Label htmlFor="content">Isi Testimoni <span className="text-red-500">*</span></Label>
                    <Textarea
                        id="content"
                        placeholder="Tuliskan pengalaman atau ulasan mereka..."
                        rows={4}
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    />
                </div>

                <div className="flex justify-end gap-4 pt-4 border-t mt-6">
                    <Button variant="outline" asChild disabled={loading}>
                        <Link href="/dashboard/testimonials">Batal</Link>
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
