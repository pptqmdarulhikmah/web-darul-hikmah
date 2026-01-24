
import Link from "next/link"
import Image from "next/image"

const Footer = () => {
    return (
        <footer className="bg-background-light text-white border-t border-white/10 pt-20 pb-10" id="kontak">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Info */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-3">
                            <Image src="/logo_vertical.webp" alt="Logo" width={100} height={100} />

                        </div>
                        <p className="text-black text-sm leading-relaxed">
                            Membangun peradaban Islam melalui pendidikan yang berkualitas, berkarakter, dan berwawasan global.
                        </p>
                        <div className="flex gap-4">
                            <Link className="text-black hover:text-white transition-colors" href="#">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>
                            </Link>
                            <Link className="text-black hover:text-white transition-colors" href="#">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
                            </Link>
                        </div>
                    </div>
                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold font-display text-black mb-6">Tautan Cepat</h4>
                        <ul className="space-y-4 text-sm text-black grid grid-cols-2">
                            <li><Link className="hover:text-accent transition-colors" href="#">Profil Pesantren</Link></li>
                            <li><Link className="hover:text-accent transition-colors" href="#">Pendaftaran (PSB)</Link></li>
                            <li><Link className="hover:text-accent transition-colors" href="#">Informasi Biaya</Link></li>
                            <li><Link className="hover:text-accent transition-colors" href="#">Karir Pengajar</Link></li>
                            <li><Link className="hover:text-accent transition-colors" href="#">Donasi &amp; Wakaf</Link></li>
                        </ul>
                    </div>
                    {/* Contact */}
                    <div></div>
                    <div>
                        <h4 className="text-lg font-bold font-display text-black mb-6">Hubungi Kami</h4>
                        <ul className="space-y-4 text-sm text-black">
                            <li className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-accent shrink-0">location_on</span>
                                <span>Jl. Pesantren No. 99, Sukabumi, Jawa Barat, Indonesia 43111</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-accent shrink-0">call</span>
                                <span>+62 812 3456 7890</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-accent shrink-0">mail</span>
                                <span>info@alhikmah.ponpes.id</span>
                            </li>
                        </ul>
                    </div>
                    {/* Newsletter */}
                    {/* <div>
                        <h4 className="text-lg font-bold font-display text-black mb-6">Buletin</h4>
                        <p className="text-sm text-black mb-4">Dapatkan info kajian dan berita terbaru.</p>
                        <form className="flex flex-col gap-3">
                            <input className="w-full bg-white/5 border border-white/10 rounded px-4 py-2 text-sm text-black focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent" placeholder="Alamat Email" type="email" />
                            <button className="bg-primary hover:bg-primary-dark border border-white/20 text-white text-sm font-bold py-2 rounded transition-colors">Langganan</button>
                        </form>
                    </div> */}
                </div>
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">© 2024 Pondok Pesantren Al-Hikmah. All rights reserved.</p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <Link className="hover:text-white" href="#">Privacy Policy</Link>
                        <Link className="hover:text-white" href="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
