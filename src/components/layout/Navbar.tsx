
"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav className={cn(
            "sticky top-0 z-50 w-full transition-all duration-300 border-b border-transparent",
            scrolled ? "bg-background-light/90 backdrop-blur-md border-gray-200" : "bg-transparent"
        )}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white">
                            <span className="material-symbols-outlined">mosque</span>
                        </div>
                        <div>
                            <h1 className="flex flex-col text-primary text-xl font-bold font-display tracking-tight leading-none">Pesantren<span className="text-accent text-lg font-medium font-display tracking-tight leading-none">Al-Hikmah</span></h1>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link className="text-slate-600 hover:text-primary font-medium text-sm transition-colors" href="/#hero">Beranda</Link>
                        <Link className="text-slate-600 hover:text-primary font-medium text-sm transition-colors" href="/#profil">Profil</Link>
                        <Link className="text-slate-600 hover:text-primary font-medium text-sm transition-colors" href="/#fasilitas">Fasilitas</Link>
                        <Link className="text-slate-600 hover:text-primary font-medium text-sm transition-colors" href="/articles">Berita</Link>
                        <Link className="text-slate-600 hover:text-primary font-medium text-sm transition-colors" href="/#kontak">Kontak</Link>
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:flex">
                        <button className="bg-primary hover:bg-primary-dark text-white text-sm font-bold py-2.5 px-6 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                            <span>Daftar Sekarang</span>
                            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                        </button>
                        {/* Admin Access - Hidden in new design but kept for functionality */}
                        <Link href="/dashboard" className="ml-4 text-xs text-muted-foreground hover:text-primary pt-2">
                            Admin
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="text-primary hover:text-primary-dark p-2"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <div className="md:hidden bg-background-light border-b border-gray-200 p-4">
                    <div className="flex flex-col space-y-4">
                        <Link onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-primary font-medium text-sm transition-colors" href="/#hero">Beranda</Link>
                        <Link onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-primary font-medium text-sm transition-colors" href="/#profil">Profil</Link>
                        <Link onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-primary font-medium text-sm transition-colors" href="/#fasilitas">Fasilitas</Link>
                        <Link onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-primary font-medium text-sm transition-colors" href="/#berita">Berita</Link>
                        <Link onClick={() => setIsOpen(false)} className="text-slate-600 hover:text-primary font-medium text-sm transition-colors" href="/#kontak">Kontak</Link>
                        <button className="bg-primary hover:bg-primary-dark text-white text-sm font-bold py-2.5 px-6 rounded-lg w-full">
                            Daftar Sekarang
                        </button>
                        <Link href="/dashboard" className="text-center text-xs text-muted-foreground">Admin Login</Link>
                    </div>
                </div>
            )}
        </nav>
    )
}

export default Navbar
