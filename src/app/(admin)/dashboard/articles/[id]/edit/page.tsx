
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { RichTextEditor } from "@/components/ui/rich-text-editor"
import { createClient } from "@/lib/supabase/client"
import { useRouter, useParams } from "next/navigation"
import { Switch } from "@/components/ui/switch"

function Tabs({ children }: { children: React.ReactNode }) {
    return <div className="w-full">{children}</div>
}

function TabsList({ children }: { children: React.ReactNode }) {
    return <div className="flex gap-2 border-b mb-4">{children}</div>
}

function TabsTrigger({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
    return (
        <button
            onClick={onClick}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${active ? "border-primary text-primary" : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
        >
            {children}
        </button>
    )
}

export default function EditArticlePage() {
    const params = useParams()
    const id = params.id as string

    const [activeTab, setActiveTab] = useState<"content" | "seo">("content")
    const [loading, setLoading] = useState(false)
    const [fetching, setFetching] = useState(true)
    const router = useRouter()
    const supabase = createClient()

    // Form States
    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("Berita")
    const [content, setContent] = useState("")
    const [image_url, setImageUrl] = useState("")
    const [slug, setSlug] = useState("")
    const [is_published, setIsPublished] = useState(false)

    // SEO States
    const [seo_title, setSeoTitle] = useState("")
    const [seo_description, setSeoDescription] = useState("")
    const [seo_keywords, setSeoKeywords] = useState("")

    useEffect(() => {
        const fetchArticle = async () => {
            const { data, error } = await supabase
                .from('articles')
                .select('*')
                .eq('id', id)
                .single()

            if (error) {
                alert("Gagal mengambil data artikel: " + error.message)
                router.push('/dashboard/articles')
            } else if (data) {
                setTitle(data.title)
                setCategory(data.category || "Berita")
                setContent(data.content)
                setImageUrl(data.image_url || "")
                setSlug(data.slug)
                setIsPublished(data.is_published)
                setSeoTitle(data.seo_title || "")
                setSeoDescription(data.seo_description || "")
                setSeoKeywords(data.seo_keywords || "")
            }
            setFetching(false)
        }

        if (id) fetchArticle()
    }, [id, router, supabase])

    const generateSlug = (text: string) => {
        return text
            .toLowerCase()
            .replace(/[^\w\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/--+/g, '-')
            .trim()
    }

    const handleSubmit = async () => {
        if (!title || !content || !slug) {
            alert("Judul, Slug, dan Konten harus diisi!")
            return
        }

        setLoading(true)

        const { error } = await supabase
            .from('articles')
            .update({
                title,
                slug,
                category,
                content,
                image_url,
                is_published,
                seo_title,
                seo_description,
                seo_keywords,
                updated_at: new Date().toISOString()
            })
            .eq('id', id)

        if (error) {
            alert("Gagal memperbarui artikel: " + error.message)
            setLoading(false)
        } else {
            alert("Artikel berhasil diperbarui!")
            router.push('/dashboard/articles')
        }
    }

    if (fetching) {
        return <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
    }

    return (
        <div className="space-y-6 max-w-4xl">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/dashboard/articles"><ArrowLeft className="w-5 h-5" /></Link>
                </Button>
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Edit Artikel</h2>
                    <p className="text-muted-foreground">Perbarui konten artikel ini.</p>
                </div>
            </div>

            <div className="space-y-4 rounded-xl border bg-card p-6 shadow-sm">
                <div className="flex items-center justify-between mb-4 bg-muted/30 p-4 rounded-lg">
                    <div className="space-y-0.5">
                        <Label className="text-base">Status Publikasi</Label>
                        <p className="text-sm text-muted-foreground">Artikel akan langsung tampil jika diaktifkan.</p>
                    </div>
                    <Switch checked={is_published} onCheckedChange={setIsPublished} />
                </div>

                <Tabs>
                    <TabsList>
                        <TabsTrigger active={activeTab === "content"} onClick={() => setActiveTab("content")}>
                            Konten Utama
                        </TabsTrigger>
                        <TabsTrigger active={activeTab === "seo"} onClick={() => setActiveTab("seo")}>
                            SEO & Metadata
                        </TabsTrigger>
                    </TabsList>

                    <div className={activeTab === "content" ? "space-y-4" : "hidden"}>
                        <div className="space-y-2">
                            <Label htmlFor="title">Judul Artikel <span className="text-red-500">*</span></Label>
                            <Input
                                id="title"
                                placeholder="Masukkan judul..."
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
                                    <SelectItem value="Berita">Berita</SelectItem>
                                    <SelectItem value="Artikel">Artikel Islami</SelectItem>
                                    <SelectItem value="Pengumuman">Pengumuman</SelectItem>
                                    <SelectItem value="Kegiatan">Laporan Kegiatan</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="image">Gambar Utama (URL)</Label>
                            <Input
                                id="image"
                                placeholder="https://..."
                                value={image_url}
                                onChange={(e) => setImageUrl(e.target.value)}
                            />
                            {image_url && (
                                <div className="mt-2 aspect-video w-40 rounded-lg overflow-hidden border bg-muted">
                                    <img src={image_url} alt="Preview" className="w-full h-full object-cover" />
                                </div>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label>Konten <span className="text-red-500">*</span></Label>
                            <RichTextEditor
                                value={content}
                                onChange={setContent}
                                placeholder="Mulai tulis artikel anda disini..."
                            />
                        </div>
                    </div>

                    <div className={activeTab === "seo" ? "space-y-4" : "hidden"}>
                        <div className="space-y-2">
                            <Label htmlFor="slug">Slug (URL) <span className="text-red-500">*</span></Label>
                            <div className="flex items-center gap-2 text-muted-foreground text-sm">
                                <span>.../articles/</span>
                                <Input
                                    id="slug"
                                    placeholder="judul-artikel-anda"
                                    className="flex-1"
                                    value={slug}
                                    onChange={(e) => setSlug(e.target.value)}
                                />
                            </div>
                            <p className="text-xs text-muted-foreground">URL yang ramah mesin pencari (gunakan huruf kecil dan tanda hubung).</p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="seo_title">SEO Title (Meta Title)</Label>
                            <Input
                                id="seo_title"
                                placeholder="Judul yang tampil di Google..."
                                value={seo_title}
                                onChange={(e) => setSeoTitle(e.target.value)}
                            />
                            <p className="text-xs text-muted-foreground">Disarankan maksimal 60 karakter.</p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="seo_description">Meta Description</Label>
                            <Textarea
                                id="seo_description"
                                placeholder="Deskripsi singkat untuk hasil pencarian..."
                                value={seo_description}
                                onChange={(e) => setSeoDescription(e.target.value)}
                            />
                            <p className="text-xs text-muted-foreground">Ringkasan artikel untuk menarik klik dari mesin pencari (maksimal 160 karakter).</p>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="seo_keywords">Keywords</Label>
                            <Input
                                id="seo_keywords"
                                placeholder="pendidikan, pesantren, tahfidz..."
                                value={seo_keywords}
                                onChange={(e) => setSeoKeywords(e.target.value)}
                            />
                            <p className="text-xs text-muted-foreground">Kata kunci utama dipisahkan dengan koma.</p>
                        </div>
                    </div>
                </Tabs>

                <div className="flex justify-end gap-4 pt-4 border-t mt-6">
                    <Button variant="outline" asChild disabled={loading}>
                        <Link href="/dashboard/articles">Batal</Link>
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
