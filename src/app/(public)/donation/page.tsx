import type { Metadata } from "next";
import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Support Our Vision | Islamic Boarding School",
};

export default function DonationPage() {
    return (
        <div className={`${lexend.className} bg-background text-foreground transition-colors duration-300 min-h-screen`}>
            <style>{`
        @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-100%); }
        }
        .animate-scroll {
            animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
            animation-play-state: paused;
        }
      `}</style>

            <main className="max-w-[1200px] mx-auto px-6 lg:px-10 py-10 space-y-16">
                {/* Hero Section */}
                <div className="flex flex-col lg:flex-row gap-10 items-center">
                    <div className="flex-1 space-y-6">
                        <p className="text-foreground text-5xl font-black leading-tight tracking-[-0.033em]">
                            Membangun Masa Depan Umat
                        </p>
                        <p className="text-muted-foreground text-lg font-normal">
                            Dukung visi kami untuk menyediakan pendidikan berkualitas dan fasilitas modern bagi generasi pemimpin masa depan. Kontribusi Anda berhak menerima zakat dan menjadi Amal Jariyah.
                        </p>
                        <div className="flex gap-4">
                            <span className="flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary dark:text-white border border-primary/20 rounded-full text-xs font-bold uppercase tracking-wider">
                                <span className="material-symbols-outlined text-sm">verified</span> Menerima Zakat
                            </span>
                            <span className="flex items-center gap-2 px-3 py-1 bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/20 rounded-full text-xs font-bold uppercase tracking-wider">
                                <span className="material-symbols-outlined text-sm">auto_awesome</span> Amal Jariyah
                            </span>
                        </div>
                    </div>
                    <div className="flex-1 w-full">
                        <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                alt="Islamic Boarding School Campus"
                                className="w-full h-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5rH_APadOI-Q40BpAeBtIjq6IcnAof-3LpcBKq6ZSmcOvwMJ7OnjsNKTeneEOTgxt41SK7kkTjjO-MpWcjLm6nAqt81inHzTdzG9CvV2GAzBY1XflJnHDxhYDgT_Ks9yL6es81za9MxnacIDxnoxoDEcxKprJGaAF_GRbG9-yLTkaMc8yZF6XYFZ2e22Rb9mWFK-9E1MaV2kLoYOtPkPC9uHuU8OQS9G6H1RBCDGjVyOj9kSuaLz4-XWyx80zQd_biJuW4U0zlQ"
                            />
                        </div>
                    </div>
                </div>

                {/* Campaigns Section */}
                <section className="space-y-8">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-4">
                        <div>
                            <h2 className="text-foreground text-3xl font-bold">Kampanye Aktif</h2>
                            <p className="text-muted-foreground mt-2 text-lg">Salurkan Sadaqah Anda untuk tujuan yang paling membutuhkan.</p>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Campaign 1 */}
                        <div className="group flex flex-col bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-[#e7f3eb] dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="relative h-56 overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt="Mosque Construction"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5rH_APadOI-Q40BpAeBtIjq6IcnAof-3LpcBKq6ZSmcOvwMJ7OnjsNKTeneEOTgxt41SK7kkTjjO-MpWcjLm6nAqt81inHzTdzG9CvV2GAzBY1XflJnHDxhYDgT_Ks9yL6es81za9MxnacIDxnoxoDEcxKprJGaAF_GRbG9-yLTkaMc8yZF6XYFZ2e22Rb9mWFK-9E1MaV2kLoYOtPkPC9uHuU8OQS9G6H1RBCDGjVyOj9kSuaLz4-XWyx80zQd_biJuW4U0zlQ"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute top-4 right-4">
                                    <span className="inline-block px-3 py-1 bg-accent text-black text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                                        Prioritas
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-1 gap-5">
                                <div>
                                    <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary dark:group-hover:text-white transition-colors">
                                        Pembangunan Masjid Baru
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Memperluas ruang salat untuk menampung 500+ santri dan masyarakat untuk salat Jumat dan salat harian.
                                    </p>
                                </div>
                                <div className="mt-auto space-y-3">
                                    <div className="flex justify-between items-end text-sm">
                                        <span className="font-bold text-primary dark:text-white">Terkumpul $45,000</span>
                                        <span className="text-gray-400 font-medium text-xs">Target: $100,000</span>
                                    </div>
                                    <div className="h-2 w-full bg-[#e7f3eb] dark:bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary rounded-full relative overflow-hidden" style={{ width: "45%" }}>
                                            <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_infinite]"></div>
                                        </div>
                                    </div>
                                    <div className="text-right text-xs text-muted-foreground">45% Tercapai</div>
                                </div>
                                <a
                                    className="mt-2 flex items-center justify-center gap-2.5 w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
                                    href="https://wa.me/1234567890?text=I%20would%20like%20to%20donate%20to%20the%20New%20Mosque%20Construction"
                                    target="_blank"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382C17.117 14.205 15.368 13.35 15.042 13.235C14.717 13.12 14.478 13.35 14.265 13.676C14.053 14.002 13.454 14.706 13.273 14.922C13.093 15.138 12.914 15.163 12.56 14.986C12.206 14.809 11.065 14.437 9.712 13.235C8.653 12.296 7.938 11.135 7.761 10.83C7.584 10.525 7.742 10.362 7.92 10.186C8.079 10.027 8.274 9.771 8.452 9.564C8.63 9.358 8.697 9.206 8.816 8.969C8.935 8.732 8.875 8.526 8.816 8.407C8.757 8.289 8.274 7.096 8.079 6.611C7.884 6.136 7.69 6.2 7.527 6.2H7.135C6.958 6.2 6.663 6.265 6.416 6.536C6.168 6.807 5.474 7.456 5.474 8.776C5.474 10.096 6.444 11.373 6.582 11.558C6.72 11.743 8.536 14.536 11.312 15.727C11.972 16.01 12.488 16.179 12.892 16.307C13.567 16.519 14.188 16.49 14.685 16.416C15.234 16.334 16.368 15.733 16.604 15.068C16.84 14.403 16.84 13.834 16.766 13.709C16.691 13.585 16.497 13.497 16.143 13.32H17.472V14.382Z"></path>
                                        <path
                                            clipRule="evenodd"
                                            d="M12.008 0C5.385 0 0 5.385 0 12.008C0 14.126 0.552 16.19 1.603 18.009L0.548 21.855L4.484 20.822C6.191 21.751 8.121 22.24 10.106 22.24H12.008C18.631 22.24 24.016 16.855 24.016 10.232C24.016 3.609 18.631 0 12.008 0ZM12.008 20.218H10.111C8.428 20.218 6.786 19.764 5.352 18.914L5.011 18.711L2.68 19.323L3.303 17.05L3.08 16.697C2.162 15.244 1.677 13.557 1.677 11.826C1.677 6.131 6.313 1.495 12.008 1.495C17.703 1.495 22.339 6.131 22.339 11.826C22.339 17.521 17.703 20.218 12.008 20.218Z"
                                            fillRule="evenodd"
                                        ></path>
                                    </svg>
                                    <span>Donasi via WhatsApp</span>
                                </a>
                            </div>
                        </div>

                        {/* Campaign 2 */}
                        <div className="group flex flex-col bg-white dark:bg-white/5 rounded-2xl overflow-hidden border border-[#e7f3eb] dark:border-white/10 shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="relative h-56 overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt="Scholarship Fund"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB5XkbTH484bHkkvVP72xhmHDF7pkPqlNdPn1MzXEp2vB-fmMd2TmICVWZTc7mzV38Pir2m77MpkliHKsdRXR7bpeE6EIiTLQaUCWv9BDWt31hSqFr9dFcD7bLQnNvYZKjsZi2IRfMYtuac7yRTQinxLITorZspya3UpU29bq5qLu4X-a28A-GZvIUeU7JuluPZlx72q4Wv6jT0Ul1M4WeCwT5OU9adS4I2NP1TgJPfTBonjnoMUxhr-EvLDhOCItb9fqBDUR_qlw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute top-4 right-4">
                                    <span className="inline-block px-3 py-1 bg-white/90 text-black text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                                        Menerima Zakat
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-1 gap-5">
                                <div>
                                    <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary dark:group-hover:text-white transition-colors">
                                        Dana Beasiswa Santri
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Menyediakan biaya pendidikan penuh, buku pelajaran, dan seragam untuk anak yatim dan santri kurang mampu.
                                    </p>
                                </div>
                                <div className="mt-auto space-y-3">
                                    <div className="flex justify-between items-end text-sm">
                                        <span className="font-bold text-primary dark:text-white">Terkumpul $35,000</span>
                                        <span className="text-muted-foreground font-medium text-xs">Target: $50,000</span>
                                    </div>
                                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                        <div className="h-full bg-primary rounded-full relative overflow-hidden" style={{ width: "70%" }}>
                                            <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_infinite]"></div>
                                        </div>
                                    </div>
                                    <div className="text-right text-xs text-muted-foreground">70% Tercapai</div>
                                </div>
                                <a
                                    className="mt-2 flex items-center justify-center gap-2.5 w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
                                    href="https://wa.me/1234567890?text=I%20would%20like%20to%20donate%20to%20the%20Scholarship%20Fund"
                                    target="_blank"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382C17.117 14.205 15.368 13.35 15.042 13.235C14.717 13.12 14.478 13.35 14.265 13.676C14.053 14.002 13.454 14.706 13.273 14.922C13.093 15.138 12.914 15.163 12.56 14.986C12.206 14.809 11.065 14.437 9.712 13.235C8.653 12.296 7.938 11.135 7.761 10.83C7.584 10.525 7.742 10.362 7.92 10.186C8.079 10.027 8.274 9.771 8.452 9.564C8.63 9.358 8.697 9.206 8.816 8.969C8.935 8.732 8.875 8.526 8.816 8.407C8.757 8.289 8.274 7.096 8.079 6.611C7.884 6.136 7.69 6.2 7.527 6.2H7.135C6.958 6.2 6.663 6.265 6.416 6.536C6.168 6.807 5.474 7.456 5.474 8.776C5.474 10.096 6.444 11.373 6.582 11.558C6.72 11.743 8.536 14.536 11.312 15.727C11.972 16.01 12.488 16.179 12.892 16.307C13.567 16.519 14.188 16.49 14.685 16.416C15.234 16.334 16.368 15.733 16.604 15.068C16.84 14.403 16.84 13.834 16.766 13.709C16.691 13.585 16.497 13.497 16.143 13.32H17.472V14.382Z"></path>
                                        <path
                                            clipRule="evenodd"
                                            d="M12.008 0C5.385 0 0 5.385 0 12.008C0 14.126 0.552 16.19 1.603 18.009L0.548 21.855L4.484 20.822C6.191 21.751 8.121 22.24 10.106 22.24H12.008C18.631 22.24 24.016 16.855 24.016 10.232C24.016 3.609 18.631 0 12.008 0ZM12.008 20.218H10.111C8.428 20.218 6.786 19.764 5.352 18.914L5.011 18.711L2.68 19.323L3.303 17.05L3.08 16.697C2.162 15.244 1.677 13.557 1.677 11.826C1.677 6.131 6.313 1.495 12.008 1.495C17.703 1.495 22.339 6.131 22.339 11.826C22.339 17.521 17.703 20.218 12.008 20.218Z"
                                            fillRule="evenodd"
                                        ></path>
                                    </svg>
                                    <span>Donate via WhatsApp</span>
                                </a>
                            </div>
                        </div>

                        {/* Campaign 3 */}
                        <div className="group flex flex-col bg-card rounded-2xl overflow-hidden border border-border shadow-lg hover:shadow-xl transition-all duration-300">
                            <div className="relative h-56 overflow-hidden">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    alt="Library Fund"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwW45r47CSnWeWub529QRrB1ve5AOE2tPb4UvqloBWuQFDmBUUw3dUmVWSFrnGrM36uSyPRQHfJyYfXKxEKvN9J2rWWNiYRNiMpj5r_h7UtBL0FECumdNyHZsWVQMsBf0GvQJm9bBklCG7D24LGv7Wg-F23SlSg0_bRABOaZ6Bsrriu-5a2JQeMoCC2dpr23t8c729QvHStBSFcixMvdQ38PvI2IsSnddTpVPjFmogZfRrMxHy9il_ULPJKfeklh6_vRWL2FxVMA"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-60"></div>
                                <div className="absolute top-4 right-4">
                                    <span className="inline-block px-3 py-1 bg-white/90 text-black text-xs font-bold uppercase tracking-wider rounded-full shadow-md">
                                        Amal Jariyah
                                    </span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-1 gap-5">
                                <div>
                                    <h3 className="text-xl font-bold text-card-foreground mb-2 group-hover:text-primary dark:group-hover:text-white transition-colors">
                                        Perpustakaan & Pendidikan
                                    </h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        Merenoovasi perpustakaan sekolah dan mengadakan 1.000+ buku Islam dan akademik baru.
                                    </p>
                                </div>
                                <div className="mt-auto space-y-3">
                                    <div className="flex justify-between items-end text-sm">
                                        <span className="font-bold text-primary dark:text-white">Terkumpul $5,000</span>
                                        <span className="text-gray-400 font-medium text-xs">Target: $25,000</span>
                                    </div>
                                    <div className="h-2 w-full bg-[#e7f3eb] dark:bg-white/10 rounded-full overflow-hidden">
                                        <div className="h-full bg-primary rounded-full relative overflow-hidden" style={{ width: "20%" }}>
                                            <div className="absolute inset-0 bg-white/20 animate-[pulse_2s_infinite]"></div>
                                        </div>
                                    </div>
                                    <div className="text-right text-xs text-muted-foreground">20% Tercapai</div>
                                </div>
                                <a
                                    className="mt-2 flex items-center justify-center gap-2.5 w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3.5 rounded-xl font-bold transition-all shadow-lg shadow-primary/20 active:scale-[0.98]"
                                    href="https://wa.me/1234567890?text=I%20would%20like%20to%20donate%20to%20the%20Library%20Fund"
                                    target="_blank"
                                >
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17.472 14.382C17.117 14.205 15.368 13.35 15.042 13.235C14.717 13.12 14.478 13.35 14.265 13.676C14.053 14.002 13.454 14.706 13.273 14.922C13.093 15.138 12.914 15.163 12.56 14.986C12.206 14.809 11.065 14.437 9.712 13.235C8.653 12.296 7.938 11.135 7.761 10.83C7.584 10.525 7.742 10.362 7.92 10.186C8.079 10.027 8.274 9.771 8.452 9.564C8.63 9.358 8.697 9.206 8.816 8.969C8.935 8.732 8.875 8.526 8.816 8.407C8.757 8.289 8.274 7.096 8.079 6.611C7.884 6.136 7.69 6.2 7.527 6.2H7.135C6.958 6.2 6.663 6.265 6.416 6.536C6.168 6.807 5.474 7.456 5.474 8.776C5.474 10.096 6.444 11.373 6.582 11.558C6.72 11.743 8.536 14.536 11.312 15.727C11.972 16.01 12.488 16.179 12.892 16.307C13.567 16.519 14.188 16.49 14.685 16.416C15.234 16.334 16.368 15.733 16.604 15.068C16.84 14.403 16.84 13.834 16.766 13.709C16.691 13.585 16.497 13.497 16.143 13.32H17.472V14.382Z"></path>
                                        <path
                                            clipRule="evenodd"
                                            d="M12.008 0C5.385 0 0 5.385 0 12.008C0 14.126 0.552 16.19 1.603 18.009L0.548 21.855L4.484 20.822C6.191 21.751 8.121 22.24 10.106 22.24H12.008C18.631 22.24 24.016 16.855 24.016 10.232C24.016 3.609 18.631 0 12.008 0ZM12.008 20.218H10.111C8.428 20.218 6.786 19.764 5.352 18.914L5.011 18.711L2.68 19.323L3.303 17.05L3.08 16.697C2.162 15.244 1.677 13.557 1.677 11.826C1.677 6.131 6.313 1.495 12.008 1.495C17.703 1.495 22.339 6.131 22.339 11.826C22.339 17.521 17.703 20.218 12.008 20.218Z"
                                            fillRule="evenodd"
                                        ></path>
                                    </svg>
                                    <span>Donate via WhatsApp</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recent Donors Section */}
                <section className="space-y-6 pb-20">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-foreground">Donatur Terbaru</h2>
                        <div className="flex items-center gap-2 text-primary dark:text-white">
                            <span className="material-symbols-outlined">favorite</span>
                            <span className="font-bold">1,248 Pendukung</span>
                        </div>
                    </div>
                    <div className="flex overflow-hidden relative group">
                        <div className="flex gap-6 animate-scroll whitespace-nowrap py-4">
                            {/* Duplicate the items for infinite scroll effect if needed, but per snippet just one list */}
                            <div className="flex items-center gap-3 bg-card px-6 py-3 rounded-full border border-border shadow-sm">
                                <div className="size-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                                    AH
                                </div>
                                <span className="text-sm font-bold text-foreground">Ahmed H.</span>
                                <span className="text-xs text-primary dark:text-white">$1,000</span>
                            </div>
                            <div className="flex items-center gap-3 bg-card px-6 py-3 rounded-full border border-border shadow-sm">
                                <div className="size-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-white text-xs font-bold">
                                    FK
                                </div>
                                <span className="text-sm font-bold text-foreground">Fatima K.</span>
                                <span className="text-xs text-primary dark:text-white">$250</span>
                            </div>
                            <div className="flex items-center gap-3 bg-card px-6 py-3 rounded-full border border-border shadow-sm">
                                <div className="size-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 text-xs font-bold">
                                    ?
                                </div>
                                <span className="text-sm font-bold text-foreground italic">Hamba Allah</span>
                                <span className="text-xs text-primary dark:text-white">$100</span>
                            </div>
                            <div className="flex items-center gap-3 bg-card px-6 py-3 rounded-full border border-border shadow-sm">
                                <div className="size-8 rounded-full bg-primary/40 flex items-center justify-center text-primary-foreground text-xs font-bold">
                                    ZM
                                </div>
                                <span className="text-sm font-bold text-foreground">Zayd M.</span>
                                <span className="text-xs text-primary dark:text-white">$500</span>
                            </div>
                            <div className="flex items-center gap-3 bg-card px-6 py-3 rounded-full border border-border shadow-sm">
                                <div className="size-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xs font-bold">
                                    SA
                                </div>
                                <span className="text-sm font-bold text-foreground">Sara A.</span>
                                <span className="text-xs text-primary dark:text-white">$50</span>
                            </div>
                            <div className="flex items-center gap-3 bg-card px-6 py-3 rounded-full border border-border shadow-sm">
                                <div className="size-8 rounded-full bg-[#D4AF37] flex items-center justify-center text-white text-xs font-bold">
                                    MS
                                </div>
                                <span className="text-sm font-bold text-foreground">Mohamed S.</span>
                                <span className="text-xs text-primary dark:text-white">$1,500</span>
                            </div>
                        </div>
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>
                    </div>
                </section>
            </main>
        </div>
    );
}
