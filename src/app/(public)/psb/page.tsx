"use client";

import { Lexend } from "next/font/google";

const lexend = Lexend({ subsets: ["latin"] });

export default function PSBPage() {
    return (
        <div className={`${lexend.className} bg-background text-foreground transition-colors duration-300 min-h-screen`}>
            {/* Hero Section */}
            <section className="relative px-6 py-10 lg:px-20 max-w-[1280px] mx-auto" id="beranda">
                <div
                    className="relative overflow-hidden rounded-3xl min-h-[520px] flex flex-col justify-center bg-cover bg-center"
                    style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDHF6njcD8jPDJdThWGvfmhbwzKg7con2St9CsHsnh0QAaquba-YCWEvM3h4Vj3mOri-LieIvr1KJWZUBPtvMQS_-mCK_eYdr9xEwo86WpgP8kaB9jKYP3mvnQzoxu4P3Ra8MT5tRcUbIYgUe4eMbWRB0W1MEZbnxOwdFxfUD0r6sk-upyc4s0nf2xe7aKuy_bLVe21Dn7sr4zdiS2U4vtWJKL4xvpDluAeSWEhlZ_gP4R6-pQNvlaBZax_skYKzMNlxMgd_IdbEA")' }}
                >
                    <div className="p-8 md:p-16 max-w-[700px] flex flex-col gap-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 border border-accent text-accent rounded-full w-fit">
                            <span className="material-symbols-outlined text-sm">verified</span>
                            <span className="text-xs font-bold uppercase tracking-widest">Pendaftaran 2024/2025 Dibuka</span>
                        </div>
                        <h1 className="text-white text-4xl md:text-6xl font-black leading-[1.1] tracking-tight">
                            Membentuk Generasi <span className="text-primary">Qur’ani</span> &amp; Berwawasan Global
                        </h1>
                        <p className="text-gray-200 text-lg leading-relaxed">
                            Kami mengintegrasikan nilai-nilai Islam yang mendalam dengan kurikulum akademik berstandar internasional untuk mencetak pemimpin masa depan.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="flex items-center justify-center gap-2 min-w-[180px] rounded-xl h-14 bg-primary text-white font-bold text-lg hover:bg-primary/90 transition-all">
                                Daftar Sekarang
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                            <button className="flex items-center justify-center gap-2 min-w-[180px] rounded-xl h-14 bg-white/10 backdrop-blur-md border border-white/20 text-white font-bold text-lg hover:bg-white/20 transition-all">
                                Unduh Brosur
                                <span className="material-symbols-outlined">download</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Feature/Keunggulan Section */}
            <section className="py-20 px-6 lg:px-20 max-w-[1280px] mx-auto" id="keunggulan">
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col gap-4 text-center items-center">
                        <h2 className="text-3xl md:text-4xl font-black text-foreground">Mengapa Memilih Kami?</h2>
                        <p className="text-muted-foreground max-w-[600px] text-lg font-medium">Investasi terbaik untuk pendidikan dunia dan akhirat putra-putri Anda.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-4xl">auto_stories</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl font-bold">Tahfidz Qur'an Bersanad</h3>
                                <p className="text-muted-foreground leading-relaxed">Program akselerasi hafalan dengan bimbingan ustadz mutqin untuk memastikan kualitas tajwid dan kelancaran.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-4xl">language</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl font-bold">Kurikulum Cambridge</h3>
                                <p className="text-muted-foreground leading-relaxed">Menggunakan kurikulum internasional (Cambridge) yang dipadukan dengan standar pendidikan Nasional.</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-8 hover:shadow-xl hover:-translate-y-1 transition-all">
                            <div className="size-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined text-4xl">psychology</span>
                            </div>
                            <div className="flex flex-col gap-3">
                                <h3 className="text-xl font-bold">Adab &amp; Karakter</h3>
                                <p className="text-muted-foreground leading-relaxed">Pendidikan karakter berbasis adab Islami dan kepemimpinan untuk mencetak pribadi yang berakhlak mulia.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 bg-primary/5 dark:bg-white/5" id="timeline">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
                    <div className="mb-12">
                        <h2 className="text-3xl font-black mb-4">Timeline Pendaftaran</h2>
                        <p className="text-muted-foreground">Ikuti tahapan seleksi masuk santri baru berikut ini.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                        {/* Step 1 */}
                        <div className="relative flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="z-10 size-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">1</div>
                                <div className="hidden lg:block absolute left-12 right-0 h-[2px] bg-primary/20 top-6"></div>
                            </div>
                            <div className="pt-2">
                                <h4 className="font-bold text-lg">Pendaftaran Online</h4>
                                <p className="text-sm text-primary font-medium">1 Jan - 28 Feb 2024</p>
                                <p className="text-sm mt-2 opacity-70">Pengisian formulir dan unggah dokumen administrasi.</p>
                            </div>
                        </div>
                        {/* Step 2 */}
                        <div className="relative flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="z-10 size-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">2</div>
                                <div className="hidden lg:block absolute left-12 right-0 h-[2px] bg-primary/20 top-6"></div>
                            </div>
                            <div className="pt-2">
                                <h4 className="font-bold text-lg">Tes Seleksi</h4>
                                <p className="text-sm text-primary font-medium">5 Maret 2024</p>
                                <p className="text-sm mt-2 opacity-70">Ujian akademik, tes lisan Al-Qur'an, dan wawancara orang tua.</p>
                            </div>
                        </div>
                        {/* Step 3 */}
                        <div className="relative flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="z-10 size-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">3</div>
                                <div className="hidden lg:block absolute left-12 right-0 h-[2px] bg-primary/20 top-6"></div>
                            </div>
                            <div className="pt-2">
                                <h4 className="font-bold text-lg">Pengumuman</h4>
                                <p className="text-sm text-primary font-medium">15 Maret 2024</p>
                                <p className="text-sm mt-2 opacity-70">Hasil seleksi akan diinfokan melalui website dan WhatsApp.</p>
                            </div>
                        </div>
                        {/* Step 4 */}
                        <div className="relative flex flex-col gap-4">
                            <div className="flex items-center gap-4">
                                <div className="z-10 size-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">4</div>
                            </div>
                            <div className="pt-2">
                                <h4 className="font-bold text-lg">Daftar Ulang</h4>
                                <p className="text-sm text-primary font-medium">20 - 30 Maret 2024</p>
                                <p className="text-sm mt-2 opacity-70">Penyelesaian biaya pendidikan dan penyerahan berkas fisik.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Requirements Section */}
            <section className="py-20 px-6 lg:px-20 max-w-[1280px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl font-black mb-6">Persyaratan Pendaftaran</h2>
                        <p className="text-muted-foreground mb-8">Pastikan seluruh dokumen berikut telah siap sebelum melakukan pendaftaran online.</p>
                        <ul className="space-y-4">
                            {[
                                "Fotokopi Akta Kelahiran & Kartu Keluarga (KK)",
                                "Fotokopi Rapor 3 Semester Terakhir",
                                "Pas Foto berwarna 3x4 (4 Lembar)",
                                "Surat Keterangan Sehat dari Dokter",
                                "Piagam Penghargaan (Jika ada)"
                            ].map((item, index) => (
                                <li key={index} className="flex gap-4 items-start">
                                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded">check</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="lg:w-1/2 w-full rounded-2xl overflow-hidden shadow-2xl relative">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            alt="Requirements illustration"
                            className="w-full h-auto"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMgD4iOQd92ehv8gwxwsGfIlSWAdPyJEkkkobjG6ijqn7P7iq4b7ARaDPUg0i5lUK8TjmS8KTi1HP2x8b7r7J1Qxy3_3hGK90RPRpTMarQo1nSVJ79cnad8atfzV5uzH3qpo7Tx1x9pJs_XitX3aQd1GrDQEgNjAyZwqlrB2GuSLoepxI-d82ksrXRC0p_XivEbXV4-l5PqaGHubqpRsWhApLXbCu5UwW7G0Rb99EmpXcDMdBlQZO08_qbjQ03ItgvlFa4J5T-Jg"
                        />
                        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20 bg-background" id="biaya">
                <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-black mb-4">Investasi Pendidikan</h2>
                        <p className="text-muted-foreground">Transparansi biaya pendidikan untuk kenyamanan orang tua santri.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {/* Entry Fee */}
                        <div className="bg-card p-10 rounded-3xl border border-primary/20 shadow-sm relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4">
                                <span className="material-symbols-outlined text-primary/20 text-6xl">payments</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Uang Pangkal</h3>
                            <p className="text-sm text-gray-500 mb-6">Dibayarkan 1x saat pendaftaran ulang</p>
                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-4xl font-black text-primary">Rp 12.500k</span>
                            </div>
                            <ul className="space-y-3 border-t border-gray-100 dark:border-white/10 pt-6">
                                <li className="flex justify-between text-sm"><span>Gedung &amp; Sarana</span> <span className="font-bold">Rp 7jt</span></li>
                                <li className="flex justify-between text-sm"><span>Seragam (5 Stell)</span> <span className="font-bold">Rp 2.5jt</span></li>
                                <li className="flex justify-between text-sm"><span>Buku &amp; Lab</span> <span className="font-bold">Rp 3jt</span></li>
                            </ul>
                        </div>
                        {/* Monthly Fee */}
                        <div className="bg-primary text-white p-10 rounded-3xl shadow-xl shadow-primary/20 relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-4">
                                <span className="material-symbols-outlined text-white/20 text-6xl">calendar_month</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Iuran Bulanan (SPP)</h3>
                            <p className="text-white/70 text-sm mb-6">Sudah termasuk asrama &amp; makan 3x</p>
                            <div className="flex items-baseline gap-2 mb-8">
                                <span className="text-4xl font-black">Rp 1.750k</span>
                                <span className="text-sm text-white/70">/bulan</span>
                            </div>
                            <ul className="space-y-3 border-t border-white/20 pt-6">
                                <li className="flex justify-between text-sm"><span>Katering (Higiene)</span> <span className="font-bold">Included</span></li>
                                <li className="flex justify-between text-sm"><span>Laundry &amp; Kebersihan</span> <span className="font-bold">Included</span></li>
                                <li className="flex justify-between text-sm"><span>Program Tahfidz Extra</span> <span className="font-bold">Included</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-6">
                <div className="max-w-[1000px] mx-auto bg-card rounded-[40px] p-12 text-center flex flex-col items-center gap-8 overflow-hidden relative border border-border">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                    <div className="absolute bottom-0 right-0 w-48 h-48 bg-accent/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
                    <h2 className="text-foreground text-3xl md:text-5xl font-black leading-tight">Siap Memulai Perjalanan <br /> <span className="text-primary">Terbaik</span> Anak Anda?</h2>
                    <p className="text-muted-foreground max-w-2xl text-lg">Kuota sangat terbatas untuk setiap tahun ajaran. Segera amankan kursi untuk pendidikan terbaik buah hati Anda.</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="bg-primary hover:bg-primary/90 text-white font-bold px-10 py-5 rounded-2xl text-xl shadow-2xl shadow-primary/40 transition-all active:scale-95">Daftar Sekarang</button>
                        <button className="bg-transparent border-2 border-primary text-primary font-bold px-10 py-5 rounded-2xl text-xl hover:bg-primary hover:text-white transition-all">Hubungi Admin</button>
                    </div>
                </div>
            </section>

            {/* Floating WhatsApp Button */}
            
        </div>
    );
}
