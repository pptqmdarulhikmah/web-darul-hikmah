
"use client"

import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar } from "lucide-react"

// Mock Data
const articles = [
    {
        id: 1,
        title: "Prestasi Santri Darul Hikmah di Ajang MHQ Nasional",
        excerpt: "Santri PPTQ Darul Hikmah kembali menorehkan prestasi gemilang dalam Musabaqah Hifzhil Qur'an tingkat nasional.",
        date: "12 Januari 2024",
        category: "Prestasi",
        image: "/article-1.jpg" // Placeholder
    },
    {
        id: 2,
        title: "Penerimaan Peserta Didik Baru (PPDB) Tahun Ajaran 2024/2025",
        excerpt: "PPTQ Darul Hikmah membuka pendaftaran santri baru program Tahfizh Intensif dan Reguler. Segera daftarkan diri Anda.",
        date: "01 Januari 2024",
        category: "Informasi",
        image: "/article-2.jpg"
    },
    {
        id: 3,
        title: "Kajian Rutin Tafsir Al-Qur'an Bersama Syaikh dari Timur Tengah",
        excerpt: "Jangan lewatkan kajian rutin tafsir Al-Qur'an setiap selasa malam bersama Syaikh Abdullah.",
        date: "28 Desember 2023",
        category: "Dakwah",
        image: "/article-3.jpg"
    }
]

const Articles = () => {
    return (
        <section className="py-20 bg-background">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-4">Berita & Artikel</h2>
                        <p className="text-muted-foreground text-lg">
                            Ikuti perkembangan terbaru dan wawasan keislaman dari lingkungan pesantren.
                        </p>
                    </div>
                    <Button variant="outline" asChild>
                        <Link href="/articles">Lihat Semua <ArrowRight className="ml-2 w-4 h-4" /></Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-all group border-muted">
                            <div className="aspect-video bg-muted relative overflow-hidden">
                                {/* Image Placeholder */}
                                <div className="absolute inset-0 bg-secondary/20 flex items-center justify-center text-muted-foreground group-hover:scale-105 transition-transform duration-500">
                                    Image {article.id}
                                </div>
                            </div>
                            <CardHeader className="p-6 pb-2">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">{article.category}</span>
                                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> {article.date}
                                    </span>
                                </div>
                                <CardTitle className="leading-tight hover:text-primary transition-colors cursor-pointer line-clamp-2">
                                    <Link href={`/articles/${article.id}`}>{article.title}</Link>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="p-6 pt-2">
                                <CardDescription className="line-clamp-3">
                                    {article.excerpt}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Articles
