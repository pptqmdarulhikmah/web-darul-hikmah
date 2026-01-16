
"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function UploadGalleryPage() {
    return (
        <div className="space-y-6 max-w-xl">
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" asChild>
                    <Link href="/dashboard/gallery"><ArrowLeft className="w-5 h-5" /></Link>
                </Button>
                <div>
                    <h2 className="text-2xl font-bold tracking-tight">Upload Foto Baru</h2>
                    <p className="text-muted-foreground">Tambahkan dokumentasi kegiatan.</p>
                </div>
            </div>

            <div className="space-y-4 rounded-xl border bg-card p-6">
                <div className="space-y-2">
                    <Label htmlFor="title">Judul / Keterangan</Label>
                    <Input id="title" placeholder="Kegiatan santri..." />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="file">Pilih Foto</Label>
                    <Input id="file" type="file" />
                </div>

                <div className="flex justify-end gap-4 pt-4">
                    <Button variant="outline" asChild>
                        <Link href="/dashboard/gallery">Batal</Link>
                    </Button>
                    <Button>Upload</Button>
                </div>
            </div>
        </div>
    )
}
