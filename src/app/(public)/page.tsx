
"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { format } from "date-fns"
import { id } from "date-fns/locale"
import HeroCarousel from "@/components/home/HeroCarousel"
import WhatsappButton from "@/components/layout/WhatsappButton"

export default function Home() {
  const [testimonials, setTestimonials] = useState<any[]>([])
  const [articles, setArticles] = useState<any[]>([])
  const [galleries, setGalleries] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const supabase = createClient()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [testimonialsRes, articlesRes, galleriesRes] = await Promise.all([
          supabase
            .from('testimonials')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(2),
          supabase
            .from('articles')
            .select('*')
            .eq('is_published', true)
            .order('published_at', { ascending: false })
            .limit(3),
          supabase
            .from('galleries')
            .select('*')
            .order('created_at', { ascending: false })
            .limit(4)
        ])

        if (testimonialsRes.data) setTestimonials(testimonialsRes.data)
        if (articlesRes.data) setArticles(articlesRes.data)
        if (galleriesRes.data) setGalleries(galleriesRes.data)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setIsLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <>
      <HeroCarousel />

      {/* Stats Section */}
      <div className="bg-white border-b border-gray-100 relative z-30 -mt-8 mx-4 md:mx-auto max-w-5xl rounded-xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <h3 className="text-3xl font-display font-bold text-primary">1.2k+</h3>
          <p className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">Santri Aktif</p>
        </div>
        <div className="text-center border-l border-gray-100">
          <h3 className="text-3xl font-display font-bold text-primary">50+</h3>
          <p className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">Pengajar Ahli</p>
        </div>
        <div className="text-center border-l border-gray-100">
          <h3 className="text-3xl font-display font-bold text-primary">15</h3>
          <p className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">Ekstrakurikuler</p>
        </div>
        <div className="text-center border-l border-gray-100">
          <h3 className="text-3xl font-display font-bold text-primary">100%</h3>
          <p className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">Lulusan Terbaik</p>
        </div>
      </div>

      {/* Facilities Section */}
      <section className="py-24 bg-background-light relative" id="fasilitas">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%233d5c5b\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-2 block">Lingkungan Belajar</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Fasilitas Unggulan</h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 text-lg">
              Kami menyediakan sarana dan prasarana terbaik untuk mendukung kenyamanan dan fokus belajar para santri.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Facility 1 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-[4/3] w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Modern clean dormitory room interior" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1YY9LQ_9AoIJPHOICxwb0kcT7Ki1f-J2elNLVmaux1xZ8_4LLr3_zSMSnFt_xs6M2J7Jb__trgHz6m3gRoshs-pZWdbkiM7lLkes8kq9juPuMFe16yKjcQjs09PgsKgoOoMq--44qlz96MYTlu3xeFK6MMeWQW8v-DtnujshQY3AQjXQOIImx5WWA29TuKaah_coFkP77CSn5WKju3ABklrOf19kUuUQLpXaFPUqJzfb8mz32OZUmPT2IDQwKh-elMzcnTlofQZ8l')" }}></div>
              <div className="p-8 relative">
                <div className="absolute -top-6 right-8 size-12 bg-accent text-white rounded-lg flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined">bed</span>
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">Asrama Putra &amp; Putri</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Lingkungan asrama yang nyaman, bersih, dan terpisah dengan pengawasan 24 jam untuk keamanan santri.
                </p>
                <Link className="inline-flex items-center text-primary font-bold text-sm group-hover:text-accent transition-colors" href="#">
                  Lihat Detail <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </Link>
              </div>
            </div>
            {/* Facility 2 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-[4/3] w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Rows of books in a quiet library" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCih-m3ItJfsZ_MAtbBTASK08H_8qTFbUNOGJT3k_9jtA9dlBJrn_cEV-Al30_MVdGupJCp16iY_9f-wGVmlHzIb9RrM8v9rwZK7t9FTMVuXJvM-hZWRAlsYz6kptPkLetddR6HdXwQxsj1PVMJhvLmLZE2xVv9NH0qVpgtihmdvmpWXJrDDFCI9qx13En464RemODaFJGRcAsxQBEhSsL7yhL70s59C-QMPLqpt_OYRi9SMmYib7O8xidDpYaPtL-FSa3tPSirWxNW')" }}></div>
              <div className="p-8 relative">
                <div className="absolute -top-6 right-8 size-12 bg-accent text-white rounded-lg flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined">menu_book</span>
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">Perpustakaan Digital</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Akses ke ribuan kitab kuning klasik dan buku pengetahuan modern dalam format fisik maupun digital.
                </p>
                <Link className="inline-flex items-center text-primary font-bold text-sm group-hover:text-accent transition-colors" href="#">
                  Lihat Detail <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </Link>
              </div>
            </div>
            {/* Facility 3 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-[4/3] w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Outdoor sports field with grass" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1NhpWtJJ8XlpENqiHdveeIzvuAUS96J1L8UunlAojGq_ygSJMSCO1LA2jB1_uBpLW5Z8yRvgSNuRxeLaeIWIigmJnsKi8qzdJ1Ax7GTMz67Se69XR2jYZ11YU7Ubcb_J18HqgsihYvrlwqvMaCMngMxTenjRONbZWlN_hNPTnInSKNB71eDbgPvhLZv6UBQIkB-ntweeHQOK7BSspgwier3aDTw0QyR7rQuJEiRFKwvmFjEBNoi-KXZQ4hhL5qYt5v-TCBCoCZflQ')" }}></div>
              <div className="p-8 relative">
                <div className="absolute -top-6 right-8 size-12 bg-accent text-white rounded-lg flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined">sports_soccer</span>
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">Sport Center</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Fasilitas olahraga lengkap meliputi lapangan futsal, basket, dan area memanah untuk kesehatan jasmani.
                </p>
                <Link className="inline-flex items-center text-primary font-bold text-sm group-hover:text-accent transition-colors" href="#">
                  Lihat Detail <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-24 bg-white" id="berita">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-display font-bold text-primary mb-2">Kabar Pesantren</h2>
              <p className="text-slate-600">Berita terbaru, artikel islami, dan informasi kegiatan.</p>
            </div>
            <Link className="text-primary hover:text-accent font-bold inline-flex items-center gap-1 transition-colors" href="/articles">
              Lihat Semua Berita <span className="material-symbols-outlined">arrow_right_alt</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.length > 0 ? (
              articles.map((article) => (
                <Link href={`/articles/${article.slug}`} key={article.id} className="block">
                  <article className="flex flex-col gap-4 group cursor-pointer h-full">
                    <div className="w-full aspect-[16/10] rounded-xl overflow-hidden relative">
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                      <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700" style={{ backgroundImage: `url('${article.image_url}')` }}></div>
                      <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-primary uppercase tracking-wide">
                        {article.category || 'Berita'}
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-slate-400 text-sm font-medium flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">calendar_today</span>
                        {article.published_at ? format(new Date(article.published_at), 'd MMMM yyyy', { locale: id }) : '-'}
                      </span>
                      <h3 className="text-xl font-display font-bold text-slate-800 group-hover:text-accent transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-slate-600 line-clamp-2">
                        {article.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))
            ) : (
              <div className="col-span-3 text-center py-10 text-gray-500">Belum ada berita terbaru</div>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">Galeri Kegiatan</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Potret keseharian santri dalam menuntut ilmu dan bersosialisasi.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
            {galleries.length > 0 && (
              <>
                {/* Large Item (Item 0) */}
                <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
                  <div
                    className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                    style={{ backgroundImage: `url('${galleries[0]?.image_url}')` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white font-medium">{galleries[0]?.title}</p>
                  </div>
                </div>

                {/* Small Item (Item 1) */}
                {galleries[1] && (
                  <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url('${galleries[1]?.image_url}')` }}
                    ></div>
                  </div>
                )}

                {/* Small Item (Item 2) */}
                {galleries[2] && (
                  <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url('${galleries[2]?.image_url}')` }}
                    ></div>
                  </div>
                )}

                {/* Wide Item (Item 3) */}
                {galleries[3] && (
                  <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden relative group">
                    <div
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url('${galleries[3]?.image_url}')` }}
                    ></div>
                  </div>
                )}
              </>
            )}

            {galleries.length === 0 && !isLoading && (
              <div className="col-span-4 row-span-2 flex items-center justify-center text-gray-500">
                Belum ada foto di galeri.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Islamic Pattern Background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%233d5c5b\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">Kata Alumni &amp; Wali Santri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {testimonials.length > 0 ? (
              testimonials.map((item) => (
                <div key={item.id} className="bg-primary-dark/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 relative">
                  <span className="material-symbols-outlined absolute top-6 right-6 text-accent opacity-30 text-6xl">format_quote</span>
                  <p className="font-display text-xl md:text-2xl leading-relaxed mb-6 text-gray-100">
                    &quot;{item.content}&quot;
                  </p>
                  <div className="flex items-center gap-4">
                    {item.avatar_url ? (
                      <div className="size-12 rounded-full bg-gray-300 bg-cover bg-center" style={{ backgroundImage: `url('${item.avatar_url}')` }}></div>
                    ) : (
                      <div className="size-12 rounded-full bg-gray-600 flex items-center justify-center">
                        <span className="material-symbols-outlined text-white">person</span>
                      </div>
                    )}
                    <div>
                      <h4 className="font-bold text-white">{item.name}</h4>
                      <p className="text-sm text-accent">{item.role}</p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-2 text-center text-white/70">Belum ada testimoni.</div>
            )}
          </div>
        </div>
      </section>
      <WhatsappButton />
    </>
  )
}
