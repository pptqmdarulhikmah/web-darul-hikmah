
"use client"

import { BookOpen, Users, MessageCircle, Star, GraduationCap, Mic } from "lucide-react"
import { motion } from "framer-motion"

const programs = [
    {
        title: "Tahsin Metode UMMI",
        description: "Pembelajaran membaca Al-Qur'an yang sistematis dan berkualitas.",
        icon: BookOpen,
    },
    {
        title: "Tahfizh Intensif",
        description: "Program menghafal Al-Qur'an dengan target mutqin.",
        icon: Star,
    },
    {
        title: "Kurikulum Terpadu",
        description: "Perpaduan pendidikan formal dan kepesantrenan.",
        icon: GraduationCap,
    },
    {
        title: "Bina Akhlak & Adab",
        description: "Pembinaan intensif oleh Asatidz dan Ustadzah.",
        icon: Users,
    },
    {
        title: "Bahasa & Public Speaking",
        description: "Pengembangan kemampuan komunikasi bahasa Arab/Inggris.",
        icon: Mic,
    },
    {
        title: "Leadership & Life Skill",
        description: "Membekali santri dengan keterampilan kepemimpinan.",
        icon: MessageCircle, // Using MessageCircle as placeholder for Leadership
    },
]

const Programs = () => {
    return (
        <section id="programs" className="py-20 bg-muted/30">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Program Unggulan</h2>
                    <p className="text-muted-foreground text-lg">
                        Kami menyediakan berbagai program unggulan untuk mencetak generasi pemimpin masa depan.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-card p-8 rounded-2xl shadow-sm border hover:shadow-md transition-shadow group"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                <program.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{program.title}</h3>
                            <p className="text-muted-foreground">{program.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Programs
