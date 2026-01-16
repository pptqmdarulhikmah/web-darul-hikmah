
import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react"

const Footer = () => {
    return (
        <footer className="bg-muted/50 border-t border-border pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                                DH
                            </div>
                            <div className="flex flex-col">
                                <span className="font-bold text-lg leading-none">Darul Hikmah</span>
                                <span className="text-xs text-muted-foreground">Sragen</span>
                            </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-6">
                            Mewujudkan generasi Qur'ani berjiwa da'i, beraqidah shahihah, berakhlaqul karimah dan berilmu pengetahuan.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors border shadow-sm">
                                <Instagram size={18} />
                            </Link>
                            <Link href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors border shadow-sm">
                                <Facebook size={18} />
                            </Link>
                            <Link href="#" className="p-2 bg-background rounded-full hover:text-primary transition-colors border shadow-sm">
                                <Youtube size={18} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-foreground">Navigasi</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/" className="hover:text-primary">Beranda</Link></li>
                            <li><Link href="/#profile" className="hover:text-primary">Profil</Link></li>
                            <li><Link href="/articles" className="hover:text-primary">Artikel & Berita</Link></li>
                            <li><Link href="/gallery" className="hover:text-primary">Galeri Kegiatan</Link></li>
                            <li><Link href="/#contact" className="hover:text-primary">Kontak Kami</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-foreground">Program Unggulan</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>Tahfizh Al-Qur'an Intensif</li>
                            <li>Metode UMMI</li>
                            <li>Leadership & Life Skill</li>
                            <li>Public Speaking</li>
                            <li>Pendidikan Formal & Pesantren</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4 text-foreground">Kontak</h3>
                        <ul className="space-y-4 text-sm text-muted-foreground">
                            <li className="flex gap-3 items-start">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>
                                    Jl. Grompol - Jambangan No.7, Gondang RT.22/RW.07, Jirapan, Masaran (57282), Sragen
                                </span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+62 812-3456-7890</span>
                            </li>
                            <li className="flex gap-3 items-center">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>info@darulhikmahsragen.sch.id</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
                    <p>&copy; {new Date().getFullYear()} PPTQ Muhammadiyah Darul Hikmah Sragen. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
