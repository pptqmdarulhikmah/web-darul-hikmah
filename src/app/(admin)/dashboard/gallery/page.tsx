
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Plus, Trash2 } from "lucide-react"

// Mock Data
const galleryItems = [
    { id: 1, title: "Kegiatan Tahfizh", image: "/placeholder.jpg" },
    { id: 1, title: "Olahraga Santri", image: "/placeholder.jpg" },
    { id: 1, title: "Belajar di Kelas", image: "/placeholder.jpg" },
    { id: 1, title: "Rihlah Alam", image: "/placeholder.jpg" },
]

export default function GalleryPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Galeri</h2>
                    <p className="text-muted-foreground">Kelola foto kegiatan pesantren.</p>
                </div>
                <Button asChild>
                    <Link href="/dashboard/gallery/upload">
                        <Plus className="mr-2 h-4 w-4" /> Upload Foto
                    </Link>
                </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {galleryItems.map((item, i) => (
                    <div key={i} className="group relative aspect-square rounded-xl overflow-hidden bg-muted border">
                        <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                            {item.title}
                        </div>
                        {/* Overlay for actions */}
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <Button variant="destructive" size="icon">
                                <Trash2 className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
