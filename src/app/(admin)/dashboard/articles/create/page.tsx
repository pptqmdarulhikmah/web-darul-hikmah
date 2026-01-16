
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function CreateArticlePage() {
    return (
        <div className="space-y-6 max-w-2xl">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/dashboard/articles"><ArrowLeft className="w-5 h-5" /></Link>
                </Button>
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Buat Artikel Baru</h2>
                    <p className="text-muted-foreground">Tulis artikel atau berita terbaru.</p>
                </div>
            </div>

            <div className="space-y-4 rounded-xl border bg-card p-6">
                <div className="space-y-2">
                    <Label htmlFor="title">Judul Artikel</Label>
                    <Input id="title" placeholder="Masukkan judul..." />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="slug">Slug (URL)</Label>
                    <Input id="slug" placeholder="judul-artikel-anda" />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="content">Konten</Label>
                    <Textarea id="content" className="min-h-[200px]" placeholder="Tulis konten artikel di sini..." />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="image">Gambar Utama (URL)</Label>
                    <Input id="image" placeholder="https://..." />
                </div>

                <div className="flex justify-end gap-4 pt-4">
                    <Button variant="outline" asChild>
                        <Link href="/dashboard/articles">Batal</Link>
                    </Button>
                    <Button>Simpan Artikel</Button>
                </div>
            </div>
        </div>
    )
}
