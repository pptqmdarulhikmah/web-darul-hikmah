
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Plus, Pencil, Trash2 } from "lucide-react"

// Mock Data
const articles = [
    { id: 1, title: "Prestasi Santri Darul Hikmah di Ajang MHQ Nasional", date: "12 Januari 2024", status: "Published" },
    { id: 2, title: "Penerimaan Peserta Didik Baru (PPDB)", date: "01 Januari 2024", status: "Published" },
    { id: 3, title: "Kajian Rutin Tafsir Al-Qur'an", date: "28 Desember 2023", status: "Draft" },
]

export default function ArticlesPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-bold tracking-tight">Artikel</h2>
                    <p className="text-muted-foreground">Kelola berita dan artikel pesantren.</p>
                </div>
                <Button asChild>
                    <Link href="/dashboard/articles/create">
                        <Plus className="mr-2 h-4 w-4" /> Tambah Artikel
                    </Link>
                </Button>
            </div>

            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Judul</TableHead>
                            <TableHead>Tanggal</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead className="text-right">Aksi</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {articles.map((article) => (
                            <TableRow key={article.id}>
                                <TableCell className="font-medium">{article.title}</TableCell>
                                <TableCell>{article.date}</TableCell>
                                <TableCell>
                                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${article.status === 'Published' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                                        }`}>
                                        {article.status}
                                    </span>
                                </TableCell>
                                <TableCell className="text-right">
                                    <div className="flex justify-end gap-2">
                                        <Button variant="ghost" size="icon">
                                            <Pencil className="h-4 w-4" />
                                        </Button>
                                        <Button variant="ghost" size="icon" className="text-destructive hover:text-destructive">
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}
