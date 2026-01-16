
"use client"

import Link from "next/link"

export default function ArticlesPage() {
    return (
        <>
            {/* Hero / Heading Section */}
            <div className="bg-surface-light dark:bg-surface-dark border-b border-[#ecefee] dark:border-[#2f3535]">
                <div className="container mx-auto max-w-[1200px] px-4 md:px-8 py-12 md:py-16">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="h-px w-8 bg-accent"></span>
                                <span className="text-accent font-bold uppercase tracking-widest text-xs">Our Journal</span>
                            </div>
                            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-text-main dark:text-white leading-tight mb-4">
                                Knowledge &amp; Insights
                            </h2>
                            <p className="text-text-muted dark:text-gray-400 text-lg md:text-xl font-display leading-relaxed max-w-xl">
                                Scholarly articles, community updates, and reflections from the students and teachers of Al-Hikmah.
                            </p>
                        </div>
                        {/* Search Bar within Hero */}
                        <div className="w-full md:w-auto md:min-w-[320px]">
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-accent">search</span>
                                </div>
                                <input
                                    className="block w-full pl-10 pr-4 py-3 border-none ring-1 ring-[#ecefee] dark:ring-[#444] rounded-lg bg-background-light dark:bg-background-dark text-text-main dark:text-white placeholder-text-muted focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:outline-none transition-shadow shadow-sm"
                                    placeholder="Search topic or title..."
                                    type="text"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Filter Sticky Bar */}
            <div className="sticky top-[80px] z-40 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-[#ecefee] dark:border-[#2f3535]">
                <div className="container mx-auto max-w-[1200px] px-4 md:px-8 py-4">
                    <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar mask-gradient">
                        <button className="flex-shrink-0 px-4 py-1.5 rounded-full bg-primary text-white text-sm font-medium transition-transform hover:scale-105">
                            All Posts
                        </button>
                        <button className="flex-shrink-0 px-4 py-1.5 rounded-full bg-surface-light dark:bg-surface-dark border border-[#ecefee] dark:border-[#444] text-text-muted dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:border-primary/30 dark:hover:border-accent/30 text-sm font-medium transition-all hover:shadow-sm">
                            News &amp; Updates
                        </button>
                        <button className="flex-shrink-0 px-4 py-1.5 rounded-full bg-surface-light dark:bg-surface-dark border border-[#ecefee] dark:border-[#444] text-text-muted dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:border-primary/30 dark:hover:border-accent/30 text-sm font-medium transition-all hover:shadow-sm">
                            Islamic Jurisprudence (Fiqh)
                        </button>
                        <button className="flex-shrink-0 px-4 py-1.5 rounded-full bg-surface-light dark:bg-surface-dark border border-[#ecefee] dark:border-[#444] text-text-muted dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:border-primary/30 dark:hover:border-accent/30 text-sm font-medium transition-all hover:shadow-sm">
                            Education
                        </button>
                        <button className="flex-shrink-0 px-4 py-1.5 rounded-full bg-surface-light dark:bg-surface-dark border border-[#ecefee] dark:border-[#444] text-text-muted dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:border-primary/30 dark:hover:border-accent/30 text-sm font-medium transition-all hover:shadow-sm">
                            Student Life
                        </button>
                        <button className="flex-shrink-0 px-4 py-1.5 rounded-full bg-surface-light dark:bg-surface-dark border border-[#ecefee] dark:border-[#444] text-text-muted dark:text-gray-300 hover:text-primary dark:hover:text-accent hover:border-primary/30 dark:hover:border-accent/30 text-sm font-medium transition-all hover:shadow-sm">
                            Events
                        </button>
                    </div>
                </div>
            </div>

            {/* Articles Grid */}
            <div className="container mx-auto max-w-[1200px] px-4 md:px-8 py-12">
                {/* Featured Article (Wide) */}
                <div className="mb-12">
                    <article className="group relative grid grid-cols-1 md:grid-cols-12 gap-0 overflow-hidden rounded-xl bg-surface-light dark:bg-surface-dark shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:shadow-none hover:shadow-lg transition-all duration-300 border border-transparent dark:border-[#2f3535]">
                        <div className="md:col-span-7 h-64 md:h-auto relative overflow-hidden">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10"></div>
                            <div
                                className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                data-alt="Students reciting Quran in the mosque courtyard during sunset"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD09xZhhVLzrHqXUSvYYAVfNMQiRlAPAbMxqlBgbQ3tb577jaVkVs3HVuu-LmAzfpGeQ7xmiHd3zEzxDiOCjDj9Eo1dpC8s2FPpMwbi5dRkkjbAq07C0wG1lF02x6BQFdQ1G2BjSCI92S6L62ctCJjNWX-90I0MiOMpGQCWaCDKPKx3GrpehMa4kIJ-LHPpwVTZjSUQBmY2Jh3d-iW9EKEt4pcuYnqBDuCGbNc_7uv1UFYe83QZWw3Uem1YTNRYHXmSpRgcdrrVEs2q')" }}
                            >
                            </div>
                        </div>
                        <div className="md:col-span-5 p-6 md:p-10 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-4 text-xs font-bold tracking-wider text-accent uppercase">
                                <span>Featured</span>
                                <span className="w-1 h-1 rounded-full bg-accent"></span>
                                <span>Education</span>
                            </div>
                            <h3 className="font-display text-2xl md:text-3xl font-bold text-text-main dark:text-white mb-4 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                                The Importance of Adab Before Knowledge in Modern Learning
                            </h3>
                            <p className="text-text-muted dark:text-gray-400 mb-6 line-clamp-3 leading-relaxed">
                                Exploring the foundational principles of Islamic education and why character building must precede academic achievement in our curriculum structure for the digital age.
                            </p>
                            <div className="mt-auto flex items-center justify-between border-t border-[#ecefee] dark:border-[#2f3535] pt-4">
                                <div className="text-sm text-text-muted dark:text-gray-500">
                                    <span className="font-medium text-text-main dark:text-gray-300">Ust. Ahmad Zulkifli</span> • Oct 24, 2023
                                </div>
                                <span className="flex items-center text-primary dark:text-accent font-bold text-sm group-hover:translate-x-1 transition-transform">
                                    Read Article <span className="material-symbols-outlined text-base ml-1">arrow_forward</span>
                                </span>
                            </div>
                        </div>
                    </article>
                </div>

                {/* Standard Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Article Card 1 */}
                    <article className="flex flex-col h-full group bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-transparent dark:border-[#2f3535]">
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute top-3 left-3 z-10">
                                <span className="px-2 py-1 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur text-xs font-bold text-text-main dark:text-white rounded shadow-sm">
                                    Fiqh
                                </span>
                            </div>
                            <div
                                className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                                data-alt="Open Kitab kuning book with arabic text on wooden rahal"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGYIQCwd1rC7u4Px1eAWbaenBNNLTuFpr9i-cqlV1xTU2y5uvGm3WjOD3xYt-uRqlBzP2MCdLgPEaKOmLveZmg0PSW5W9DhjSR728ChT_5TrCwxQDMYl8DW7g13CQFDiyAaedWbEDBfZ4QEEpAXELMRxwrXTcLEabKys7FTPtPENSmZ_4mdiUNET9hj2Im_4D54H1PoHnbT6l7WLRhCfabIQiatit0BJJGfEUDKzKHdtim_bACdPnUbjvcDSMaR7YmkrgVasOI68wT')" }}
                            >
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow p-6">
                            <div className="text-xs text-text-muted dark:text-gray-500 mb-2">October 20, 2023</div>
                            <h3 className="font-display text-xl font-bold text-text-main dark:text-white mb-3 leading-tight group-hover:text-primary dark:group-hover:text-accent transition-colors">
                                Understanding the Fiqh of Transaction in the Digital Era
                            </h3>
                            <p className="text-text-muted dark:text-gray-400 text-sm line-clamp-3 mb-4 leading-relaxed flex-grow">
                                How classical Islamic jurisprudence applies to modern e-commerce, crypto-assets, and digital marketplaces.
                            </p>
                            <Link className="inline-flex items-center text-primary dark:text-accent font-semibold text-sm hover:underline mt-auto" href="#">
                                Read More <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                            </Link>
                        </div>
                    </article>

                    {/* Article Card 2 */}
                    <article className="flex flex-col h-full group bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-transparent dark:border-[#2f3535]">
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute top-3 left-3 z-10">
                                <span className="px-2 py-1 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur text-xs font-bold text-text-main dark:text-white rounded shadow-sm">
                                    Community
                                </span>
                            </div>
                            <div
                                className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                                data-alt="Group of students wearing peci cap smiling together after class"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkfMxLEDYmAr4EOm8l9aKV4kXpuWQ1EOcoJKwaVnKXPVja2tKyujiHosHIZJeUdpX2rmTg3TUJviXZIA_j1OiR8GkxYk7BmVKC01pe-K1kTj9_r6YsvcXI5D6XgfLji0mHA_3EgPCoPK8EkeF1QvRzTrJiLr9_AeW4LtglmOw0KYXl0DyZ0PhQZIMf4oh-S38UieduBOL_t6QhLibCXnHWE80-UgPd2n7t0coy63ln3hp1lxpRfplCvXkC0emern7udldPOk3VdwJa')" }}
                            >
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow p-6">
                            <div className="text-xs text-text-muted dark:text-gray-500 mb-2">October 15, 2023</div>
                            <h3 className="font-display text-xl font-bold text-text-main dark:text-white mb-3 leading-tight group-hover:text-primary dark:group-hover:text-accent transition-colors">
                                Alumni Gathering 2023: Strengthening Bonds
                            </h3>
                            <p className="text-text-muted dark:text-gray-400 text-sm line-clamp-3 mb-4 leading-relaxed flex-grow">
                                Highlights from our annual alumni reunion, featuring speeches from senior Kyai and networking sessions.
                            </p>
                            <Link className="inline-flex items-center text-primary dark:text-accent font-semibold text-sm hover:underline mt-auto" href="#">
                                Read More <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                            </Link>
                        </div>
                    </article>

                    {/* Article Card 3 */}
                    <article className="flex flex-col h-full group bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-transparent dark:border-[#2f3535]">
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute top-3 left-3 z-10">
                                <span className="px-2 py-1 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur text-xs font-bold text-text-main dark:text-white rounded shadow-sm">
                                    Events
                                </span>
                            </div>
                            <div
                                className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                                data-alt="Night view of the mosque with green lighting decoration"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC51WOR0ZCrsj5OYwrNMw700bCCNRIB2wvOTnSgx3fKiy2Xr04d4Udzz6KAmUo8Q-OHEvkDKMzz5UaxALeeA8-M89UdWigOQQ_nMyioXQYiWQBdOY9DyXprvC8kyP45ckVqrxbQ6JE4gu8sapFUOmo4pir7kD6brNyXWZrExU9KyiE-HXFlKooL7R_UHb9_w2YnzozVLWi9YccVxXlc3RTYcirEaQdnZZt6JFmhACobfKSWbcYbYpvta7vHdbRmPfbeAPISHIQ9Ane2')" }}
                            >
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow p-6">
                            <div className="text-xs text-text-muted dark:text-gray-500 mb-2">October 12, 2023</div>
                            <h3 className="font-display text-xl font-bold text-text-main dark:text-white mb-3 leading-tight group-hover:text-primary dark:group-hover:text-accent transition-colors">
                                Upcoming Event: National Santri Day Celebration
                            </h3>
                            <p className="text-text-muted dark:text-gray-400 text-sm line-clamp-3 mb-4 leading-relaxed flex-grow">
                                Join us for a week of competitions, seminars, and spiritual reflection as we celebrate Hari Santri Nasional.
                            </p>
                            <Link className="inline-flex items-center text-primary dark:text-accent font-semibold text-sm hover:underline mt-auto" href="#">
                                Read More <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                            </Link>
                        </div>
                    </article>

                    {/* Article Card 4 (Text Only Variation) */}
                    <article className="flex flex-col h-full group bg-primary dark:bg-primary-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
                        <div className="flex flex-col flex-grow p-8 justify-between relative">
                            {/* Pattern Overlay */}
                            <div className="absolute top-0 right-0 p-4 opacity-10">
                                <span className="material-symbols-outlined !text-[120px] text-white">format_quote</span>
                            </div>
                            <div>
                                <div className="inline-block px-2 py-1 border border-white/30 text-xs font-bold text-white rounded mb-4">
                                    Reflection
                                </div>
                                <h3 className="font-display text-2xl font-bold text-white mb-4 leading-tight">
                                    &quot;Knowledge without action is insanity, and action without knowledge is vanity.&quot;
                                </h3>
                                <p className="text-white/80 text-sm leading-relaxed mb-6 font-display italic">
                                    — Imam Al-Ghazali
                                </p>
                                <p className="text-white/90 text-sm line-clamp-3 leading-relaxed">
                                    A short reflection on the wisdom of Imam Al-Ghazali regarding the balance of seeking knowledge and practicing it.
                                </p>
                            </div>
                            <Link className="inline-flex items-center text-accent font-semibold text-sm hover:text-white transition-colors mt-6" href="#">
                                Read Reflection <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                            </Link>
                        </div>
                    </article>

                    {/* Article Card 5 */}
                    <article className="flex flex-col h-full group bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-transparent dark:border-[#2f3535]">
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute top-3 left-3 z-10">
                                <span className="px-2 py-1 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur text-xs font-bold text-text-main dark:text-white rounded shadow-sm">
                                    News
                                </span>
                            </div>
                            <div
                                className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                                data-alt="New library building architecture interior with bookshelves"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDAGa7eAAfErUGpklMV6qlcoWKOmzQG7plmDTWp2Kf3JYhHfdYw_aSzXyzJGOZJ0JunSQKSdJYNsubncKzrsLsXXVPzrTqk2HPN7CZZjxs_AXTgtJ-92kUPs87x1PqxMP0kxuwEbScHqpuN_optqWkY4Xjh7cOZtJ5iMswSDb5isyctCS2AApOfkMYSIB99e-FcHF2qBZfDCMv6dpkVseZjkEWQ6g3jn9Pxl1whJ8NNhg7x4ij_iHlN5fhRvsBj3cTZdCxYXz4uXbn3')" }}
                            >
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow p-6">
                            <div className="text-xs text-text-muted dark:text-gray-500 mb-2">October 05, 2023</div>
                            <h3 className="font-display text-xl font-bold text-text-main dark:text-white mb-3 leading-tight group-hover:text-primary dark:group-hover:text-accent transition-colors">
                                New Library Wing Opens for Students
                            </h3>
                            <p className="text-text-muted dark:text-gray-400 text-sm line-clamp-3 mb-4 leading-relaxed flex-grow">
                                We are thrilled to announce the opening of the Al-Farabi Library wing, adding over 5,000 volumes to our collection.
                            </p>
                            <Link className="inline-flex items-center text-primary dark:text-accent font-semibold text-sm hover:underline mt-auto" href="#">
                                Read More <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                            </Link>
                        </div>
                    </article>

                    {/* Article Card 6 */}
                    <article className="flex flex-col h-full group bg-surface-light dark:bg-surface-dark rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-transparent dark:border-[#2f3535]">
                        <div className="h-48 overflow-hidden relative">
                            <div className="absolute top-3 left-3 z-10">
                                <span className="px-2 py-1 bg-surface-light/90 dark:bg-surface-dark/90 backdrop-blur text-xs font-bold text-text-main dark:text-white rounded shadow-sm">
                                    Health
                                </span>
                            </div>
                            <div
                                className="w-full h-full bg-cover bg-center transform group-hover:scale-105 transition-transform duration-500"
                                data-alt="Fresh vegetables and fruits arranged on a table representing sunnah foods"
                                style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCg4ltS4uuRQ_cS6ztqCXSz3_pr0qmCjT-JWqAiueddAlv0Hlv5Dh10aY4dpAkgLdsqdNpcT7JwUlug9miVI5BGvGuboyoZwUFAdBj3hLCdeSwO_EkASa3HnW_h7FHn2PclwyHRs55zGA7gLid83Q6j5RtThuB7b0LTFFdvBd_eidKJX_jrbO68ANhBIh5A2_PY8-4p5dWwuPtlNM1FFs0nPtRopaduNvqZvzHVLtQxoEJOKNf60cFHscsokM-AtLmzQ8mX0kA7n4Rg')" }}
                            >
                            </div>
                        </div>
                        <div className="flex flex-col flex-grow p-6">
                            <div className="text-xs text-text-muted dark:text-gray-500 mb-2">October 01, 2023</div>
                            <h3 className="font-display text-xl font-bold text-text-main dark:text-white mb-3 leading-tight group-hover:text-primary dark:group-hover:text-accent transition-colors">
                                Tibb an-Nabawi: Prophetic Medicine for Daily Life
                            </h3>
                            <p className="text-text-muted dark:text-gray-400 text-sm line-clamp-3 mb-4 leading-relaxed flex-grow">
                                Incorporating healthy habits from the Sunnah into our daily routine for better physical and spiritual health.
                            </p>
                            <Link className="inline-flex items-center text-primary dark:text-accent font-semibold text-sm hover:underline mt-auto" href="#">
                                Read More <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                            </Link>
                        </div>
                    </article>
                </div>

                {/* Pagination */}
                <div className="mt-16 flex justify-center">
                    <nav className="flex items-center gap-1 bg-surface-light dark:bg-surface-dark p-2 rounded-lg shadow-sm border border-[#ecefee] dark:border-[#2f3535]">
                        <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-text-muted dark:text-gray-400 disabled:opacity-50">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-md bg-primary text-white font-medium text-sm shadow-sm">
                            1
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-text-muted dark:text-gray-400 font-medium text-sm transition-colors">
                            2
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-text-muted dark:text-gray-400 font-medium text-sm transition-colors">
                            3
                        </button>
                        <span className="w-10 h-10 flex items-center justify-center text-text-muted dark:text-gray-400">...</span>
                        <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-text-muted dark:text-gray-400 font-medium text-sm transition-colors">
                            12
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-text-muted dark:text-gray-400">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </nav>
                </div>
            </div>

            {/* Newsletter CTA */}
            <section className="bg-[#ecefee] dark:bg-[#1a1d1d] py-16 mt-12">
                <div className="container mx-auto max-w-[1200px] px-4 md:px-8 text-center">
                    <span className="material-symbols-outlined text-4xl text-primary dark:text-accent mb-4">mail</span>
                    <h2 className="font-display text-3xl font-bold text-text-main dark:text-white mb-4">Subscribe to Our Newsletter</h2>
                    <p className="text-text-muted dark:text-gray-400 max-w-lg mx-auto mb-8">
                        Get the latest articles, event updates, and spiritual insights delivered directly to your inbox every Friday.
                    </p>
                    <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                        <input
                            className="flex-grow px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-surface-dark focus:ring-2 focus:ring-primary focus:outline-none"
                            placeholder="Your email address"
                            type="email"
                        />
                        <button className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-dark transition-colors shadow-sm" type="button">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </>
    )
}
