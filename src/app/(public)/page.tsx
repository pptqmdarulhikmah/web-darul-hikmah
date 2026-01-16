
"use client"

import Link from "next/link"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative w-full min-h-[600px] flex items-center justify-center overflow-hidden bg-primary">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent z-10"></div>
          <div
            className="w-full h-full bg-cover bg-center"
            data-alt="Beautiful mosque architecture with golden sunlight"
            style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBhhXtG-00hhwKZ_9oMXjBg-Y3ptKxz5rQcQNQ1NgoTx_-h67zu0ISVOqkmTgAIyf0Z1cSPciT_sMI0DhLEabVhvlOC7dn7x7NpJVcf50vnMpd4uoFu7eiZTDRWFPm9-zUkJJ8qqbM-GjmmdMCPWy-zEOYzGCcnCJAv_FX-GoTHMZh2Rls1hwggEqP1K0VjPnbSRIqctdD_oeDCJp3mnzYau3x8pNAojp4DF6CDM-HO2k56qfA4JIh5TyNBPQsiLCtJYodRJaySmlG3')" }}
          ></div>
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="max-w-2xl flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 w-fit backdrop-blur-sm">
              <span className="size-2 rounded-full bg-accent"></span>
              <span className="text-accent-50 text-white/90 text-xs font-semibold tracking-wide uppercase">Penerimaan Santri Baru 2024</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1]">
              Membangun Generasi <span className="text-accent italic">Rabbani</span> yang Berilmu &amp; Berakhlak
            </h1>
            <p className="text-lg text-gray-200 font-light max-w-lg leading-relaxed">
              Pondok Pesantren Al-Hikmah menggabungkan kurikulum modern dengan nilai-nilai salaf untuk mencetak pemimpin masa depan.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="bg-accent hover:bg-[#a3814d] text-white text-base font-bold h-12 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
                Daftar Sekarang
              </button>
              <button className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white text-base font-bold h-12 px-8 rounded-lg transition-all flex items-center gap-2">
                <span className="material-symbols-outlined">play_circle</span>
                Lihat Profil
              </button>
            </div>
          </div>
        </div>
        {/* Decorative Islamic Pattern Overlay */}
        <div className="absolute bottom-0 right-0 w-1/3 h-full opacity-10 pointer-events-none bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%233d5c5b\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] z-0 mix-blend-overlay"></div>
      </header>

      {/* Stats Section */}
      <div className="bg-white border-b border-gray-100 relative z-30 -mt-8 mx-4 md:mx-auto max-w-5xl rounded-xl shadow-xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="text-center">
          <h3 className="text-3xl font-display font-bold text-primary">1.2k+</h3>
          <p className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">Santri Aktif</p>
        </div>
        <div className="text-center border-l border-gray-100">
          <h3 className="text-3xl font-display font-bold text-primary">50+</h3>
          <p className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">Pengajar Ahli</p>
        </div>
        <div className="text-center border-l border-gray-100">
          <h3 className="text-3xl font-display font-bold text-primary">15</h3>
          <p className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">Ekstrakurikuler</p>
        </div>
        <div className="text-center border-l border-gray-100">
          <h3 className="text-3xl font-display font-bold text-primary">100%</h3>
          <p className="text-sm text-slate-500 font-medium uppercase tracking-wide mt-1">Lulusan Terbaik</p>
        </div>
      </div>

      {/* Facilities Section */}
      <section className="py-24 bg-background-light relative" id="fasilitas">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%233d5c5b\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-accent font-bold tracking-widest uppercase text-xs mb-2 block">Lingkungan Belajar</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">Fasilitas Unggulan</h2>
            <div className="h-1 w-20 bg-accent mx-auto rounded-full mb-6"></div>
            <p className="text-slate-600 text-lg">
              Kami menyediakan sarana dan prasarana terbaik untuk mendukung kenyamanan dan fokus belajar para santri.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Facility 1 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-[4/3] w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Modern clean dormitory room interior" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD1YY9LQ_9AoIJPHOICxwb0kcT7Ki1f-J2elNLVmaux1xZ8_4LLr3_zSMSnFt_xs6M2J7Jb__trgHz6m3gRoshs-pZWdbkiM7lLkes8kq9juPuMFe16yKjcQjs09PgsKgoOoMq--44qlz96MYTlu3xeFK6MMeWQW8v-DtnujshQY3AQjXQOIImx5WWA29TuKaah_coFkP77CSn5WKju3ABklrOf19kUuUQLpXaFPUqJzfb8mz32OZUmPT2IDQwKh-elMzcnTlofQZ8l')" }}></div>
              <div className="p-8 relative">
                <div className="absolute -top-6 right-8 size-12 bg-accent text-white rounded-lg flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined">bed</span>
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">Asrama Putra &amp; Putri</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Lingkungan asrama yang nyaman, bersih, dan terpisah dengan pengawasan 24 jam untuk keamanan santri.
                </p>
                <Link className="inline-flex items-center text-primary font-bold text-sm group-hover:text-accent transition-colors" href="#">
                  Lihat Detail <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </Link>
              </div>
            </div>
            {/* Facility 2 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-[4/3] w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Rows of books in a quiet library" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCih-m3ItJfsZ_MAtbBTASK08H_8qTFbUNOGJT3k_9jtA9dlBJrn_cEV-Al30_MVdGupJCp16iY_9f-wGVmlHzIb9RrM8v9rwZK7t9FTMVuXJvM-hZWRAlsYz6kptPkLetddR6HdXwQxsj1PVMJhvLmLZE2xVv9NH0qVpgtihmdvmpWXJrDDFCI9qx13En464RemODaFJGRcAsxQBEhSsL7yhL70s59C-QMPLqpt_OYRi9SMmYib7O8xidDpYaPtL-FSa3tPSirWxNW')" }}></div>
              <div className="p-8 relative">
                <div className="absolute -top-6 right-8 size-12 bg-accent text-white rounded-lg flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined">menu_book</span>
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">Perpustakaan Digital</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Akses ke ribuan kitab kuning klasik dan buku pengetahuan modern dalam format fisik maupun digital.
                </p>
                <Link className="inline-flex items-center text-primary font-bold text-sm group-hover:text-accent transition-colors" href="#">
                  Lihat Detail <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </Link>
              </div>
            </div>
            {/* Facility 3 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
              <div className="aspect-[4/3] w-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Outdoor sports field with grass" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB1NhpWtJJ8XlpENqiHdveeIzvuAUS96J1L8UunlAojGq_ygSJMSCO1LA2jB1_uBpLW5Z8yRvgSNuRxeLaeIWIigmJnsKi8qzdJ1Ax7GTMz67Se69XR2jYZ11YU7Ubcb_J18HqgsihYvrlwqvMaCMngMxTenjRONbZWlN_hNPTnInSKNB71eDbgPvhLZv6UBQIkB-ntweeHQOK7BSspgwier3aDTw0QyR7rQuJEiRFKwvmFjEBNoi-KXZQ4hhL5qYt5v-TCBCoCZflQ')" }}></div>
              <div className="p-8 relative">
                <div className="absolute -top-6 right-8 size-12 bg-accent text-white rounded-lg flex items-center justify-center shadow-lg">
                  <span className="material-symbols-outlined">sports_soccer</span>
                </div>
                <h3 className="text-xl font-display font-bold text-primary mb-3">Sport Center</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Fasilitas olahraga lengkap meliputi lapangan futsal, basket, dan area memanah untuk kesehatan jasmani.
                </p>
                <Link className="inline-flex items-center text-primary font-bold text-sm group-hover:text-accent transition-colors" href="#">
                  Lihat Detail <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-24 bg-white" id="berita">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl font-display font-bold text-primary mb-2">Kabar Pesantren</h2>
              <p className="text-slate-600">Berita terbaru, artikel islami, dan informasi kegiatan.</p>
            </div>
            <Link className="text-primary hover:text-accent font-bold inline-flex items-center gap-1 transition-colors" href="#">
              Lihat Semua Berita <span className="material-symbols-outlined">arrow_right_alt</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Article 1 */}
            <article className="flex flex-col gap-4 group cursor-pointer">
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700" data-alt="Students studying together in a classroom" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUbxHwevMd0zmVTkaKwukGMHdvlqvP6hVGCBhkPGHq6HQrYSOYuRhxMo98Op51yZ41EJ0FXz_iu82euf1dfHDHMgGXVxNMJMJAthlX_GMPQuO5mMVavg0sMKjEUzRwsuVzsOgxxJkzPwGZeFdypGwZKlTXsRd2HKnnBngCx9DbD6vIEG-YC0m434c6_hLyMc1Zx4L9VIuurZvRStdjbU3K8Ie1Gkjf-iQqCPt95tRZl1vKeoGOiFTTQzPmigYMAcaBXTgv5bqu6lE7')" }}></div>
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-primary uppercase tracking-wide">
                  Pendidikan
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-slate-400 text-sm font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span> 12 Oktober 2023
                </span>
                <h3 className="text-xl font-display font-bold text-slate-800 group-hover:text-accent transition-colors">
                  Al-Hikmah Raih Juara Umum Lomba Musabaqah Tilawatil Quran Tingkat Provinsi
                </h3>
                <p className="text-slate-600 line-clamp-2">
                  Prestasi membanggakan kembali diraih oleh santri Pondok Pesantren Al-Hikmah dalam ajang MTQ tahun ini...
                </p>
              </div>
            </article>
            {/* Article 2 */}
            <article className="flex flex-col gap-4 group cursor-pointer">
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700" data-alt="Group of people in religious gathering" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXai1TQNF6PaMnm9eyp25fHXnZgRe91M0-_5l7VXK_JpSEy05zEfdDSQjVSAI8MmSC2qVJqHBaU439hXNt5BknLaIJtZzFxnHLhRKHCVb5i07mrckf8OxROI7MnbUmTWSQ0kukz0K7lZ__8oa6QaRp8wkWbiJLcgrLYZN4nKHyFmh2Npm7Uygtt-6LicWhQ3Tb86FrkPOYzmPfK2Pf5kILS-ihfhrNodz0Qez90f4Dn9-NBmRlkx7vvjHyXzL26A8CAFUw8jFULpKW')" }}></div>
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-primary uppercase tracking-wide">
                  Kajian
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-slate-400 text-sm font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span> 05 Oktober 2023
                </span>
                <h3 className="text-xl font-display font-bold text-slate-800 group-hover:text-accent transition-colors">
                  Kajian Akbar: Meneladani Akhlak Rasulullah SAW di Era Digital
                </h3>
                <p className="text-slate-600 line-clamp-2">
                  Ribuan jamaah memadati masjid utama Al-Hikmah untuk mendengarkan tausiyah tentang tantangan zaman modern...
                </p>
              </div>
            </article>
            {/* Article 3 */}
            <article className="flex flex-col gap-4 group cursor-pointer">
              <div className="w-full aspect-[16/10] rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10"></div>
                <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-700" data-alt="Modern architecture building of the school" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuATucYqMvMtsJ1ShYzgqJs73HnQsL7X4noyOePZnnZrO7Vz_Bs1cSIXuUz6cDhoUeANvzm-ku21fF7NzyKDHKTkLGRPalfVLUILtIhjYNYMvZFcO1gb8HT90z8nyMjqtntdQOgOCzuuu5B6dHLE_2ryAuq_b-zH10mgHzEHYaqB5ETpm_rYeTvASanI4rVL1Mkn7vH2w3VBf3pnwIZqoHIINr92lj03iEMt9RhE3jioP9fu_kx-8aMiptSLTahi-N1bzcD0UW-BtHKo')" }}></div>
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded text-xs font-bold text-primary uppercase tracking-wide">
                  Fasilitas
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-slate-400 text-sm font-medium flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">calendar_today</span> 28 September 2023
                </span>
                <h3 className="text-xl font-display font-bold text-slate-800 group-hover:text-accent transition-colors">
                  Peresmian Gedung Laboratorium Bahasa Baru
                </h3>
                <p className="text-slate-600 line-clamp-2">
                  Untuk menunjang kemampuan bahasa asing santri, Al-Hikmah meresmikan fasilitas laboratorium multimedia terbaru...
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-background-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-display font-bold text-primary mb-4">Galeri Kegiatan</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">Potret keseharian santri dalam menuntut ilmu dan bersosialisasi.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
            <div className="col-span-2 row-span-2 rounded-2xl overflow-hidden relative group">
              <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" data-alt="Large gathering of students studying" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuADKnRrsTVRU4_28en7NWsA2-q6BdONcnpXx5veFu2oshoS6jN9aGAGQxnWvp7yI8qZNJADXJHj36GlTHXtxkEiUd5vMGWvglVyHckTaUr1WXzwrpgal3oETmzfD6sPAG8V0ANtDSl167l_YoqTj5J94iYLYmL3NeHNlkJL74SHs1zdifLZhu-pEzjHe0pTXSX2di0GlwmpnkreWk6uw9YsE-mMdmBazYRh9I_NPdwhnKxGcKFBDTZQdgV3sdWuzLUR99lgzao3B0n9')" }}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-medium">Kegiatan Belajar Mengajar</p>
              </div>
            </div>
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
              <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" data-alt="Student reading Quran close up" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBI7Pvlb3YCFKjpZr2XouGMtKVhXyAx8KdCNaOGdwYXZzyVTZ77XF8IaAFv29Ee0iHNE7baf2dr2bcKr-60knoJSvsj9acXzv2UBkCjRzx6dQFmdTfLvnYI-P2KFs0mjGk8hc63WRp2gvaaGKsVNaIRKHVn3V61OVFTPg1L_2dNlz3G3U9_udTExQAJS3Vmuik3db1KGwOZVo1sd382dArdYg8Rs8YX3cxMpQDelj4jdXx0cUNuD0i0Vn8HB4Kc5SXVcooOKAafu_ve')" }}></div>
            </div>
            <div className="col-span-1 row-span-1 rounded-2xl overflow-hidden relative group">
              <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" data-alt="Students playing soccer" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCmiUaeOeobw_kV3szhsnl0bcJgfCgQCtTZPCmcoRXR1vgjpy8LTddvQ0_EcXS7x7K9tP1p_wHvkq9NanaWxfBGmJPBZmWElxAd8AhpAw2KIjAFun4VGihsVlIomD5tow3mEaoxkQ6W-_s2SreRykASl-TGwqcSSF49QEnIgmOgZ8uWOMDqAS3yrRzKpsLclXOSVHoYnZXDDvz5Uy9lLbB8c9K5LihrZTOxW6340Bfs38dlPqlMfZ4Oin1hVV00uHKtUy_Op6IHqhny')" }}></div>
            </div>
            <div className="col-span-2 row-span-1 rounded-2xl overflow-hidden relative group">
              <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700" data-alt="Students having discussion outdoor" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDPcBiFJOjM2iCAtXM1yKmEjbC7S7SAQ9X2U0XkN-s_DeQV0G9fMV__WJa-C7-2VFH9j0Dp0vgjCCgLKfOlBcJEO5eLejnLodNv1owY51RgCgZ_ehJSeA2ysKfClL0H07ShaCr23uEM7reqZX3cKXgf_W2gsey1LsJByz1Xbp4SnekbER0pDXk3j29VcQFaAcm20KsIk26dKsna72LKvkit6sMVyjWt2ft_vq5tlW7XZ07esOvaa1nTAxil79ntDBNyT8vN8zn7Si6b')" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-primary text-white relative overflow-hidden">
        {/* Islamic Pattern Background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%233d5c5b\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-center mb-16">Kata Alumni &amp; Wali Santri</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Testimonial 1 */}
            <div className="bg-primary-dark/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 relative">
              <span className="material-symbols-outlined absolute top-6 right-6 text-accent opacity-30 text-6xl">format_quote</span>
              <p className="font-display text-xl md:text-2xl leading-relaxed mb-6 text-gray-100">
                &quot;Alhamdulillah, anak saya mengalami perubahan akhlak yang sangat positif. Tidak hanya hafal Quran, tapi juga mandiri dan santun kepada orang tua.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-gray-300 bg-cover bg-center" data-alt="Portrait of a father" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCbcoqPfraz0Hyy61uSVjfwX_IUvGXZLkqimNzoOwBVeRyU7z-hjdkusJjIkOeIQdAb_sDgqDyJocapfU0rBpL79RKEt15mvK3iLeqoWLxYcaS-etKDJAAFIE2pkjQ_y1X0qCY234ObCCkguX-3KgekU7ijwFdylJ5rb536e21TkQoAVi7Nws0bDCqMXw6SKjNrV89Pc8G4PZe7FyypEhRgGz0FoUa5DpS6CjnvCVZ9QLYSiEp4NQH8b3Zd8Fgm6rHt6xNWH_0r8NgA')" }}></div>
                <div>
                  <h4 className="font-bold text-white">Bapak H. Ahmad Fauzi</h4>
                  <p className="text-sm text-accent">Wali Santri</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-primary-dark/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 relative">
              <span className="material-symbols-outlined absolute top-6 right-6 text-accent opacity-30 text-6xl">format_quote</span>
              <p className="font-display text-xl md:text-2xl leading-relaxed mb-6 text-gray-100">
                &quot;Pondok ini mengajarkan saya keseimbangan antara ilmu agama dan umum. Fasilitasnya sangat mendukung untuk mengembangkan potensi diri.&quot;
              </p>
              <div className="flex items-center gap-4">
                <div className="size-12 rounded-full bg-gray-300 bg-cover bg-center" data-alt="Portrait of a young male graduate" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBHHIjdYihb6ASkpmQburKGY1wvWB1hWpl-LMfDbQIvzEHBJgBpGN6pgvaBBJCGS9YIAUyIe8amvAEhhGNZl1N5f19EeORjyh3UvEdVqyolVdSO1p1WG3H-mcHf2PGaMNODR7DtNFftCmPW13LWLPiuG4EaphYS1zgj5BhECIjA3GRbxG9fESMs7wSa5hbyfuGHYnubApq6Iva7YofVouPdBC-4rDdqCy7bBeRZZImlv1MbsInIrKRB9lJDNLzyCEsDGSmMyeW2eVdh')" }}></div>
                <div>
                  <h4 className="font-bold text-white">Muhammad Rizky, S.T.</h4>
                  <p className="text-sm text-accent">Alumni Angkatan 2018</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
