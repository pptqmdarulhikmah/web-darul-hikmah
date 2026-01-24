"use client"

import { useState, useEffect } from "react"
import { createClient } from "@/lib/supabase/client"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

interface HeroSlide {
    id: string
    title: string
    subtitle: string
    image_url: string
    button_text: string
    button_link: string
    sort_order: number
}

export default function HeroCarousel() {
    const [slides, setSlides] = useState<HeroSlide[]>([])
    const [currentSlide, setCurrentSlide] = useState(0)
    const [loading, setLoading] = useState(true)
    const supabase = createClient()

    useEffect(() => {
        const fetchSlides = async () => {
            const { data } = await supabase
                .from('hero_slides')
                .select('*')
                .eq('is_active', true)
                .order('sort_order', { ascending: true })

            if (data && data.length > 0) {
                setSlides(data)
            } else {
                // Fallback static slide if no data
                setSlides([{
                    id: 'default',
                    title: 'Membangun Generasi Rabbani',
                    subtitle: 'Pondok Pesantren Al-Hikmah menggabungkan kurikulum modern dengan nilai-nilai salaf untuk mencetak pemimpin masa depan.',
                    image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhhXtG-00hhwKZ_9oMXjBg-Y3ptKxz5rQcQNQ1NgoTx_-h67zu0ISVOqkmTgAIyf0Z1cSPciT_sMI0DhLEabVhvlOC7dn7x7NpJVcf50vnMpd4uoFu7eiZTDRWFPm9-zUkJJ8qqbM-GjmmdMCPWy-zEOYzGCcnCJAv_FX-GoTHMZh2Rls1hwggEqP1K0VjPnbSRIqctdD_oeDCJp3mnzYau3x8pNAojp4DF6CDM-HO2k56qfA4JIh5TyNBPQsiLCtJYodRJaySmlG3',
                    button_text: 'Daftar Sekarang',
                    button_link: '#',
                    sort_order: 0
                }])
            }
            setLoading(false)
        }
        fetchSlides()
    }, [])

    useEffect(() => {
        if (slides.length <= 1) return

        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [slides.length])

    if (loading) return <div className="min-h-[600px] bg-primary animate-pulse"></div>

    return (
        <header className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute inset-0 z-0"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent z-10"></div>
                    <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${slides[currentSlide].image_url}')` }}
                    ></div>
                </motion.div>
            </AnimatePresence>

            <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
                <div className="max-w-2xl flex flex-col gap-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 w-fit backdrop-blur-sm">
                        <span className="size-2 rounded-full bg-accent"></span>
                        <span className="text-accent-50 text-white/90 text-xs font-semibold tracking-wide uppercase">Penerimaan Santri Baru 2024</span>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] mb-6">
                                {slides[currentSlide].title}
                            </h1>
                            <p className="text-lg text-gray-200 font-light max-w-lg leading-relaxed">
                                {slides[currentSlide].subtitle}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    <div className="flex flex-wrap gap-4 pt-4">
                        {slides[currentSlide].button_text && (
                            <Link href={slides[currentSlide].button_link || "#"}>
                                <button className="bg-accent hover:bg-[#a3814d] text-white text-base font-bold h-12 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                                    {slides[currentSlide].button_text}
                                </button>
                            </Link>
                        )}
                        <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-base font-bold h-12 px-8 rounded-lg transition-all flex items-center gap-2">
                            <span className="material-symbols-outlined">play_circle</span>
                            Lihat Profil
                        </button>
                    </div>
                </div>
            </div>

            {/* Pagination Dots */}
            {slides.length > 1 && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'w-8 bg-accent' : 'w-2 bg-white/50 hover:bg-white'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Decorative Islamic Pattern Overlay */}
            <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%233d5c5b\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] z-0 mix-blend-overlay"></div>
        </header>
    )
}
