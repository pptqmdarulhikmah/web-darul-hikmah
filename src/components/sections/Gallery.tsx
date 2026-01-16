
"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

// Mock Data
const galleryItems = [
    { id: 1, title: "Kegiatan Tahfizh", cols: 2, rows: 2 },
    { id: 2, title: "Olahraga Santri", cols: 1, rows: 1 },
    { id: 3, title: "Belajar di Kelas", cols: 1, rows: 1 },
    { id: 4, title: "Rihlah Alam", cols: 1, rows: 1 },
    { id: 5, title: "Makan Bersama", cols: 1, rows: 1 },
]

const Gallery = () => {
    return (
        <section className="py-20 bg-muted/20">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Galeri Kegiatan</h2>
                    <p className="text-muted-foreground text-lg">
                        Dokumentasi aktivitas santri dalam menuntut ilmu dan kegiatan sehari-hari.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] gap-4">
                    {galleryItems.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            className={`relative rounded-2xl overflow-hidden group ${item.cols === 2 ? "col-span-2 row-span-2" : "col-span-1 row-span-1"
                                }`}
                        >
                            <div className="absolute inset-0 bg-muted/50 flex items-center justify-center text-muted-foreground font-medium group-hover:bg-primary/20 transition-colors">
                                {item.title}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Gallery
