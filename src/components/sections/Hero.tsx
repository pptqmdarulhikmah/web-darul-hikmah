
"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-primary/5">
            {/* Background Pattern or Image could go here */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />

            <div className="container px-4 md:px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="inline-block px-3 py-1 mb-4 text-xs font-medium tracking-wider text-primary uppercase bg-primary/10 rounded-full">
                        Ahlan Wa Sahlan
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                        PPTQ Darul Hikmah
                        <br />
                        Muhammadiyah Sragen
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Mewujudkan generasi Qur'ani berjiwa da'i, beraqidah shahihah, berakhlaqul karimah dan berilmu pengetahuan.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="rounded-full text-lg h-12 px-8" asChild>
                            <Link href="/#programs">
                                Lihat Program <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" className="rounded-full text-lg h-12 px-8" asChild>
                            <Link href="/#contact">
                                Hubungi Kami
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
