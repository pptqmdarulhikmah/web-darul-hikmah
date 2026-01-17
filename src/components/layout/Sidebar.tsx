
"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, FileText, Image as ImageIcon, Settings, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"

const Sidebar = () => {
    const pathname = usePathname()

    const links = [
        { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
        { name: "Artikel", href: "/dashboard/articles", icon: FileText },
        { name: "Galeri", href: "/dashboard/gallery", icon: ImageIcon },
        { name: "Testimoni", href: "/dashboard/testimonials", icon: FileText },
        { name: "Pengaturan", href: "/dashboard/settings", icon: Settings },
    ]

    return (
        <aside className="w-64 bg-card border-r border-border min-h-screen flex flex-col">
            <div className="p-6 border-b border-border">
                <h1 className="font-bold text-xl">Admin Panel</h1>
                <p className="text-xs text-muted-foreground">Darul Hikmah</p>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {links.map((link) => {
                    const isActive = pathname === link.href
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
                                isActive
                                    ? "bg-primary text-primary-foreground"
                                    : "hover:bg-muted text-muted-foreground hover:text-foreground"
                            )}
                        >
                            <link.icon size={18} />
                            <span>{link.name}</span>
                        </Link>
                    )
                })}
            </nav>
            <div className="p-4 border-t border-border">
                <button className="flex items-center gap-3 px-3 py-2 w-full text-red-500 hover:bg-red-50 rounded-md transition-colors">
                    <LogOut size={18} />
                    <span>Keluar</span>
                </button>
            </div>
        </aside>
    )
}

export default Sidebar
