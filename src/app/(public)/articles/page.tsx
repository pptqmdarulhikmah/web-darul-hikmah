
"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { format } from "date-fns"
import { id as idLocale } from "date-fns/locale"

interface Article {
    id: string
    title: string
    slug: string
    content: string
    image_url: string
    category: string
    created_at: string
    published_at: string
    excerpt?: string
}

export default function ArticlesPage() {
    const [articles, setArticles] = useState<Article[]>([])
    const [loading, setLoading] = useState(true)
    const [selectedCategory, setSelectedCategory] = useState("All Posts")
    const [searchQuery, setSearchQuery] = useState("")

    const supabase = createClient()

    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true)
            const { data, error } = await supabase
                .from('articles')
                .select('*')
                .eq('is_published', true)
                .order('published_at', { ascending: false })

            if (data) {
                setArticles(data)
            }
            setLoading(false)
        }
        fetchArticles()
    }, [])

    const categories = ["All Posts", "Berita", "Artikel", "Pengumuman", "Kegiatan"]

    const filteredArticles = articles.filter(article => {
        const matchesCategory = selectedCategory === "All Posts" || article.category === selectedCategory
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    const featuredArticle = filteredArticles.length > 0 ? filteredArticles[0] : null
    const gridArticles = filteredArticles.length > 0 ? filteredArticles.slice(1) : []

    // Helper to strip HTML tags for excerpt
    const getExcerpt = (html: string) => {
        const tmp = document.createElement("DIV")
        tmp.innerHTML = html
        return tmp.textContent || tmp.innerText || ""
    }

    return (
        <>
            {/* Hero / Heading Section */}
            <div className="bg-surface-light dark:bg-surface-dark border-b border-[#ecefee] dark:border-[#2f3535]">
                <div className="container mx-auto max-w-[1200px] px-4 md:px-8 py-12 md:py-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="h-px w-8 bg-accent"></span>
                                <span className="text-accent font-bold uppercase tracking-widest text-xs">Jurnal Kami</span>
                            </div>
                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-main dark:text-white leading-tight mb-4">
                                Wawasan &amp; Pengetahuan
                            </h2>
                            <p className="text-text-muted dark:text-gray-400 text-lg md:text-xl font-display leading-relaxed max-w-xl">
                                Artikel ilmiah, pembaruan komunitas, dan refleksi dari santri dan asatidz Darul Hikmah.
                            </p>
                        </div>
                        {/* Search Bar within Hero */}
                        <div className="w-full md:w-auto md:min-w-[320px]">
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-accent">search</span>
                                </div>
                                <input
                                    className="block w-full pl-10 pr-4 py-3 border-none ring-1 ring-[#ecefee] dark:ring-[#444] rounded-lg bg-background-light dark:bg-background-dark text-text-main dark:text-white placeholder-text-muted focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:outline-none transition-shadow shadow-sm"
                                    placeholder="Cari topik atau judul..."
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filter Sticky Bar */}
            <div className="sticky top-[80px] z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-[#ecefee] dark:border-[#2f3535]">
                <div className="container mx-auto max-w-[1200px] px-4 md:px-8 py-4">
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar mask-gradient">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setSelectedCategory(cat)}
                                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${selectedCategory === cat
                                        ? "bg-primary text-white scale-105"
                                        : "bg-surface-light dark:bg-surface-dark border border-[#ecefee] dark:border-[#444] text-text-muted dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:border-primary/30 dark:hover:border-accent/30 hover:shadow-sm"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Articles Grid */}
            <div className="container mx-auto max-w-[1200px] px-4 md:px-8 py-12">
                {loading ? (
                    <div className="text-center py-20 text-muted-foreground">Memuat artikel...</div>
                ) : filteredArticles.length === 0 ? (
                    <div className="text-center py-20 text-muted-foreground">Tidak ada artikel ditemukan.</div>
                ) : (
                    <>
                        {/* Featured Article (Wide) - Only show if current page is 1 or just show first of filtered */}
                        {featuredArticle && (
                            <div className="mb-12">
                                <article className="group relative grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-none hover:shadow-lg transition-all duration-300 border border-transparent dark:border-[#2f3535]">
                                    <div className="md:col-span-7 h-64 md:h-auto relative overflow-hidden">
                                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                                        {featuredArticle.image_url ? (
                                            <div
                                                className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                                style={{ backgroundImage: `url('${featuredArticle.image_url}')` }}
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                                                No Image
                                            </div>
                                        )}
                                    </div>
                                    <div className="md:col-span-5 p-6 md:p-10 flex flex-col justify-center">
                                        <div className="flex items-center gap-2 mb-4 text-xs font-bold tracking-wider text-accent uppercase">
                                            <span>Featured</span>
                                            <span className="w-1 h-1 rounded-full bg-accent"></span>
                                            <span>{featuredArticle.category || 'Umum'}</span>
                                        </div>
                                        <h3 className="font-display text-2xl md:text-3xl font-bold text-text-main dark:text-white mb-4 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                                            {featuredArticle.title}
                                        </h3>
                                        <p className="text-text-muted dark:text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                                            {getExcerpt(featuredArticle.content).substring(0, 150)}...
                                        </p>
                                        <div className="mt-auto flex items-center justify-between border-t border-[#ecefee] dark:border-[#2f3535] pt-4">
                                            <div className="text-sm text-text-muted dark:text-gray-500">
                                                <span className="font-medium text-text-main dark:text-gray-300">Admin</span> • {featuredArticle.published_at ? format(new Date(featuredArticle.published_at), "d MMMM yyyy", { locale: idLocale }) : "-"}
                                            </div>
                                            <Link href={`/articles/${featuredArticle.slug}`} className="flex items-center text-primary dark:text-accent font-bold text-sm group-hover:translate-x-1 transition-transform">
                                                Baca Artikel <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
                                            </Link>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        )}

                        {/* Standard Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {gridArticles.map((article) => (
                                <article key={article.id} className="flex flex-col h-full group bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-transparent dark:border-[#2f3535]">
                                    <div className="h-48 overflow-hidden relative">
                                        <div className="absolute top-3 left-3 z-10">
                                            <span className="px-2 py-1 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur text-xs font-bold text-text-main dark:text-white rounded shadow-sm">
                                                {article.category || 'Umum'}
                                            </span>
                                        </div>
                                        {article.image_url ? (
                                            <div
                                                className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                                                style={{ backgroundImage: `url('${article.image_url}')` }}
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-muted flex items-center justify-center text-muted-foreground">
                                                No Image
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex flex-col flex-grow p-6">
                                        <div className="text-xs text-text-muted dark:text-gray-500 mb-2">
                                            {article.published_at ? format(new Date(article.published_at), "d MMMM yyyy", { locale: idLocale }) : "-"}
                                        </div>
                                        <h3 className="font-display text-xl font-bold text-text-main dark:text-white mb-3 leading-tight group-hover:text-primary dark:group-hover:text-accent transition-colors">
                                            {article.title}
                                        </h3>
                                        <p className="text-text-muted dark:text-gray-400 text-sm line-clamp-3 mb-4 leading-relaxed flex-grow">
                                            {getExcerpt(article.content).substring(0, 100)}...
                                        </p>
                                        <Link className="inline-flex items-center text-primary dark:text-accent font-semibold text-sm hover:underline mt-auto" href={`/articles/${article.slug}`}>
                                            Baca Selengkapnya <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    )
}
