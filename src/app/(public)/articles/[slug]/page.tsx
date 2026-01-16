
"use client"

import Link from "next/link"

export default function ArticleDetailPage() {
    return (
        <>
            {/* Main Content Layout */}
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* Left Column: Article (8 cols) */}
                    <article className="lg:col-span-8 flex flex-col">
                        {/* Breadcrumbs */}
                        <nav aria-label="Breadcrumb" className="flex mb-6 text-sm font-sans">
                            <ol className="inline-flex items-center space-x-1 md:space-x-2 text-gray-500 dark:text-gray-400">
                                <li className="inline-flex items-center">
                                    <Link className="hover:text-primary dark:hover:text-white" href="/">Home</Link>
                                </li>
                                <li>
                                    <span className="material-symbols-outlined text-[16px] align-middle">chevron_right</span>
                                </li>
                                <li>
                                    <Link className="hover:text-primary dark:hover:text-white" href="/articles">Journal</Link>
                                </li>
                                <li>
                                    <span className="material-symbols-outlined text-[16px] align-middle">chevron_right</span>
                                </li>
                                <li aria-current="page">
                                    <span className="text-gray-900 dark:text-white font-medium">Education</span>
                                </li>
                            </ol>
                        </nav>

                        {/* Page Heading */}
                        <h1 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tight text-gray-900 dark:text-white mb-6 font-display">
                            The Importance of Adab Before Knowledge in Modern Education
                        </h1>

                        {/* Meta Data */}
                        <div className="flex flex-wrap items-center gap-4 mb-8 font-sans text-sm text-gray-600 dark:text-gray-400 border-b border-gray-200 dark:border-gray-800 pb-6">
                            <div className="flex items-center gap-2">
                                <div className="size-8 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
                                    <div className="w-full h-full bg-cover bg-center" data-alt="Portrait of Ustadz Ahmad" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDODg_FES9A_Kb2OziYps3-n8pUYKe-ZUaf4cqwzfVjY_xO-ce2_Gh5kBRGajkAB5SZVhvJKYWjcYkDJZUKALRy_Liz2ZQcRKg63GomcP5_HQPX-gx1pJbNA5w5xlKdq3-JNdNZQnEH1KZZ_GJ43ztiSpKplA1BeaQrn9kA1qZJ98wDrzHTjo8rIpJ4A5BRxnrOJmg36l99J2OY_h68cupapPQbj4-A1qUstAmbpMzEFKt90tZAbxpWYXLQ8YUHlXwO2G-WObgya8b8')" }}></div>
                                </div>
                                <span className="font-medium text-gray-900 dark:text-white">Ustadz Ahmad</span>
                            </div>
                            <span className="text-gray-300 dark:text-gray-700">|</span>
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                                <span>Oct 24, 2023</span>
                            </div>
                            <span className="text-gray-300 dark:text-gray-700">|</span>
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-[18px]">schedule</span>
                                <span>5 min read</span>
                            </div>
                            <span className="text-gray-300 dark:text-gray-700">|</span>
                            <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-semibold uppercase tracking-wide">Tarbiyah</span>
                        </div>

                        {/* Featured Image */}
                        <div className="w-full rounded-xl overflow-hidden mb-10 shadow-lg">
                            <div className="w-full aspect-video bg-cover bg-center" data-alt="Students studying in a mosque with warm lighting" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPhu02usjJCwNKd_W220zu_Ma7RCdNNucetoQ6lEt6F7EQ6vU8qWSndu7LhJgaQR84FS5oRX_6EZcOjpnB0lTwhjdhAOBgSKx8a_ei5rwubIGTW-sCMHTKn4RUZaIojw_sP0HzwVWoonkYfDsiCEGvyt28kJGAbu4bAtz7ZzjetSnBCNut6jwE9NIRZHmE17Rz6T4Ce4MW-3HvBH7y3nVwUdJ-ooAkD9Fy-jgNMqjx8ZoXhmnj4tXFgsxr39-REypWiF5BeBkMA90v')" }}></div>
                            <div className="bg-gray-50 dark:bg-surface-dark px-4 py-2 text-xs text-gray-500 dark:text-gray-400 font-sans border-t border-gray-100 dark:border-gray-800">
                                Students gathering for morning studies at Al-Hikmah Mosque.
                            </div>
                        </div>

                        {/* Article Body */}
                        <div className="article-content font-display">
                            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-primary first-letter:float-left first-letter:mr-3 first-letter:mt-[-10px]">
                                In the illustrious tradition of Islamic scholarship, the concept of <em>Adab</em> (etiquette/manners) has always held a position of primacy over the mere acquisition of <em>&apos;Ilm</em> (knowledge). As we navigate the complexities of the 21st century, where information is abundant but wisdom is scarce, the educational philosophy of our Pesantren remains rooted in the timeless wisdom of Imam Malik (RA), who advised a young man of Quraysh: &quot;Learn adab before you learn knowledge.&quot;
                            </p>
                            <p>
                                The modern educational landscape often prioritizes cognitive skills—critical thinking, memorization, and technical proficiency—while sidelining the moral formation of the student. However, at Al-Hikmah, we believe that an intellect sharpened without a polished soul is a dangerous tool.
                            </p>
                            <h2>The Foundation of Character</h2>
                            <p>
                                Adab is not merely about politeness; it is a spiritual discipline that governs how one interacts with their Creator, their teachers, their peers, and knowledge itself. When a student approaches learning with humility and respect, the knowledge they acquire becomes a light (Nur) rather than just data.
                            </p>
                            <blockquote>
                                &quot;Make your Adab flour and your knowledge salt.&quot; — This profound metaphor suggests that the bulk of our character should be composed of excellent manners, with knowledge serving as the seasoning that enhances it.
                            </blockquote>
                            <p>
                                In our classrooms, this translates to practical behaviors: standing when a teacher enters, listening without interrupting, and keeping one&apos;s books clean and organized. These small acts cultivate a state of inner receptivity.
                            </p>
                            <h3>Integrating Tradition with Modernity</h3>
                            <p>
                                Critics might argue that such emphasis on traditional etiquette stifles creativity. On the contrary, we find that structure provides the safety necessary for intellectual exploration. A student who respects boundaries is more capable of understanding the nuances of Fiqh, Science, and Humanities.
                            </p>
                            <p>
                                We have observed that alumni who excelled in Adab during their time at the boarding school have gone on to become not just successful professionals, but community leaders who lead with empathy and integrity.
                            </p>
                            <div className="my-8 rounded-lg overflow-hidden">
                                <div className="w-full h-64 bg-cover bg-center" data-alt="Close up of an open Quran on a wooden stand" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDoD3jlmTsGeQgr3xYkk1THetFUuALsRm2b0u9KALFrDKeR4_XuP_Audn8w8_ONWw1vTReS_59QOri1J7cfRowTJ5CBl6EWN7D3sOpfNfzPq02c1M5z6oZaET7tt_wM2vROMQ2V0tCMdsPo17n_3OWFa-N7vbIvCzSRtnE_nU4x90xlcR6L0zeL5sKbshzBhXQ8mHz2MVno1Cr-q5ahUqYE4WNkFZCxFjd4MMGYwstfBPPCH57yKqScLQsLWU67LPWPpeq1s65itbSz')" }}></div>
                            </div>
                            <h2>Conclusion</h2>
                            <p>
                                As we prepare the next generation for a world that is increasingly digitized and disconnected, the human element of Adab becomes our most valuable currency. It is what separates education from mere instruction. Let us continue to strive for a balance where our manners beautify our knowledge, and our knowledge guides our manners.
                            </p>
                        </div>

                        {/* Social Share */}
                        <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-800">
                            <h4 className="font-sans text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Share this article</h4>
                            <div className="flex gap-3">
                                <button className="flex items-center gap-2 px-4 py-2 bg-[#25D366] text-white rounded-lg hover:bg-opacity-90 transition font-sans text-sm font-medium">
                                    WhatsApp
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] text-white rounded-lg hover:bg-opacity-90 transition font-sans text-sm font-medium">
                                    Twitter
                                </button>
                                <button className="flex items-center gap-2 px-4 py-2 bg-[#4267B2] text-white rounded-lg hover:bg-opacity-90 transition font-sans text-sm font-medium">
                                    Facebook
                                </button>
                                <button className="p-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition text-gray-600 dark:text-gray-400">
                                    <span className="material-symbols-outlined">link</span>
                                </button>
                            </div>
                        </div>
                    </article>

                    {/* Right Column: Sidebar (4 cols) */}
                    <aside className="lg:col-span-4 space-y-8">
                        {/* Search Widget */}
                        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                            <label className="relative block">
                                <span className="sr-only">Search</span>
                                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                                    <span className="material-symbols-outlined">search</span>
                                </span>
                                <input className="placeholder:text-gray-400 block bg-gray-50 dark:bg-background-dark w-full border border-gray-200 dark:border-gray-700 rounded-lg py-2 pl-10 pr-3 shadow-sm focus:outline-none focus:border-primary focus:ring-primary sm:text-sm font-sans" name="search" placeholder="Search articles..." type="text" />
                            </label>
                        </div>

                        {/* Latest Articles Widget */}
                        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800 sticky top-24">
                            <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">feed</span>
                                Latest Updates
                            </h3>
                            <div className="space-y-6">
                                {/* Item 1 */}
                                <Link className="group flex gap-4 items-start" href="#">
                                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 relative">
                                        <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500" data-alt="School building exterior" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAcuKHefymlkbvbFaaQlcabIZ0utfbGRHuO4nzum59XEQmsgELw-IUIRilirhrpR44cEHyrCjFkRGFxWe_CLvTafsxIPWGCSpnkr-XK1ehsKOhHbFcMuWwm7jgKmiMUbGT2hXHpavT6x9v7wx8fK1eTR-qQGLeRYRUWtfQNnuMcMugxt5NqZAl6vNvyk4raWpT1RTrzfFlfRaLkh9YfUPvrou4yHAV-l2qpfq5QpZLnN8YVf0pBQPow4yibOKm9Xj6LjnhtrQSlRyau')" }}></div>
                                    </div>
                                    <div>
                                        <h4 className="font-display font-semibold text-gray-900 dark:text-gray-100 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                            Registration Open for 2024 Academic Year
                                        </h4>
                                        <span className="text-xs text-gray-500 font-sans mt-2 block">Nov 12, 2023</span>
                                    </div>
                                </Link>
                                {/* Item 2 */}
                                <Link className="group flex gap-4 items-start" href="#">
                                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 relative">
                                        <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500" data-alt="Crowd of people at an event" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBpLHwTfrV1aW2QKqNiNZCT-o-of_TgJgEvL7877a9Ydn3L5AtOW1UDClG9pqkYqyn2YEAWmntAPL83uzSk-Qh8HFni98wAgeU6NdUmCDXOOt8qfTRtwYOmTE0CPfDykPeH3Js8Cz01gR4Db3WIYezyKsbn2qVNWEgIb-2VPSgJRSfN710txfBleJ_dox8zZNOUYpPR5uQD-uktdGLuzGpJaDz-mqY6H7XMYvz4x6VEDaDYt-IMM5CNEYy-UBdmaO0YtIZZ9LWXcw25')" }}></div>
                                    </div>
                                    <div>
                                        <h4 className="font-display font-semibold text-gray-900 dark:text-gray-100 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                            Annual Alumni Gathering: A Night to Remember
                                        </h4>
                                        <span className="text-xs text-gray-500 font-sans mt-2 block">Nov 05, 2023</span>
                                    </div>
                                </Link>
                                {/* Item 3 */}
                                <Link className="group flex gap-4 items-start" href="#">
                                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 relative">
                                        <div className="w-full h-full bg-cover bg-center group-hover:scale-110 transition-transform duration-500" data-alt="Open book with glasses" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB4NCkoL-iLJcugSSNmMnNVIO_hLYY2x10vpCspkLlJCEqCniMaTnSuum3c0XEjniS4GNAb6iC2CaTdHVyqA5BrfMupQe6WjFrop3ECtO4JQMPaIfeH0f5f0mdClV-GcUBhmEtutv1eMdPOS1IOZQl6hBKdWu_aMNvSELMgth9OAfFC6YDOfLbDJSqwSXE1VrK4QVgqfOMCD0p7tT1je-IIYXW0I8F_EVhGop2xtGPW-I_Tyt6sHJAjDpmJcBv6bQW9T_Pin6t4fP1V')" }}></div>
                                    </div>
                                    <div>
                                        <h4 className="font-display font-semibold text-gray-900 dark:text-gray-100 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                            Friday Khutbah Summary: Patience in Adversity
                                        </h4>
                                        <span className="text-xs text-gray-500 font-sans mt-2 block">Oct 28, 2023</span>
                                    </div>
                                </Link>
                            </div>
                            <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                                <Link className="text-primary font-sans text-sm font-bold flex items-center hover:underline" href="/articles">
                                    View all articles <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                                </Link>
                            </div>
                        </div>

                        {/* Categories Widget */}
                        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
                            <h3 className="font-display text-xl font-bold text-gray-900 dark:text-white mb-4">Categories</h3>
                            <ul className="space-y-2 font-sans text-sm">
                                <li>
                                    <Link className="flex justify-between items-center py-2 px-3 rounded hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors" href="#">
                                        <span>Academic News</span>
                                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 py-0.5 px-2 rounded-full text-xs">12</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="flex justify-between items-center py-2 px-3 rounded hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors" href="#">
                                        <span>Fiqh &amp; Studies</span>
                                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 py-0.5 px-2 rounded-full text-xs">8</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="flex justify-between items-center py-2 px-3 rounded hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors" href="#">
                                        <span>Student Life</span>
                                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 py-0.5 px-2 rounded-full text-xs">24</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link className="flex justify-between items-center py-2 px-3 rounded hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors" href="#">
                                        <span>Events</span>
                                        <span className="bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 py-0.5 px-2 rounded-full text-xs">5</span>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="bg-primary p-6 rounded-xl shadow-lg text-white">
                            <h3 className="font-display text-xl font-bold mb-2">Subscribe to our Journal</h3>
                            <p className="font-sans text-sm text-white/80 mb-4">Get the latest articles and updates from Al-Hikmah directly to your inbox.</p>
                            <form className="flex flex-col gap-2">
                                <input className="w-full rounded-lg px-4 py-2 text-gray-900 border-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-primary focus:ring-white" placeholder="Your email address" type="email" />
                                <button className="w-full bg-white text-primary font-bold py-2 rounded-lg hover:bg-gray-50 transition-colors" type="button">Subscribe</button>
                            </form>
                        </div>
                    </aside>
                </div>

                {/* Related Articles Section */}
                <section className="mt-20 pt-10 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold font-display text-gray-900 dark:text-white">Related Readings</h2>
                        <div className="flex gap-2">
                            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 transition"><span className="material-symbols-outlined">arrow_back</span></button>
                            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 dark:border-gray-700 dark:hover:bg-gray-800 transition"><span className="material-symbols-outlined">arrow_forward</span></button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Related Card 1 */}
                        <div className="group cursor-pointer">
                            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 mb-4">
                                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Stack of old books" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuABCHujtq6FdrLwHT9pnaxvAmsGn4Jx9hubRy9Lpb5e-1tT9YIvY--0VBVYdUyuR1Sb06PpDWxS_M5qYb6Wl1FfUJay1gVEYeqwWKGi2g1nE7RDIuVOiO_nt4o6hHQNryqCem8jRTfz1HOP9ejYTiB3P2DVLtGMd2N_sZTPmXXnIwr0kvf3WMu-ZQwXgoCHQcVgm58XRuy7IipDURn9F7pEjkvCOFz7ZFkJyQSbzqUYxN-32qb84s94SsLSaI-VjJVM6ydKf1-px5Ga')" }}></div>
                            </div>
                            <div className="flex items-center gap-2 mb-2 text-xs font-bold text-primary uppercase tracking-wide">
                                <span>Education</span>
                            </div>
                            <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                                5 Study Techniques for Memorizing Quran
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 font-sans text-sm line-clamp-2">
                                Explore time-tested methods used by Hufaz throughout history to retain the sacred text.
                            </p>
                        </div>
                        {/* Related Card 2 */}
                        <div className="group cursor-pointer">
                            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 mb-4">
                                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Mosque interior dome" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAbB6Tb_1l4Y_lUP1RikS-6HxwOWgBvGRYTuIG7SW52wGh3vXAtSQr_SxZgFDi1b317KJ1ZmvWhuQ8gsFZHg4U-iZyy3w_a7DW0vcMgblzm3XXpJQe3M_JO94yLXJYC6agDdYtfgR63JZclQVbE8Sk_69ctVg7qsQiY1QKFg_QrrCGDP7OZiFc48yF_VVRw_5p1bt7MdZ0KjpWGsSoSigXudr_39CBnQnH4XjNcrV-ajTBnIZ86AfpWX6VCItecc60NPeFCevLbD10k')" }}></div>
                            </div>
                            <div className="flex items-center gap-2 mb-2 text-xs font-bold text-primary uppercase tracking-wide">
                                <span>Spirituality</span>
                            </div>
                            <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                                Connecting with the Community Through Service
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 font-sans text-sm line-clamp-2">
                                Why community service is an integral part of the curriculum at Al-Hikmah Pesantren.
                            </p>
                        </div>
                        {/* Related Card 3 */}
                        <div className="group cursor-pointer">
                            <div className="aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 mb-4">
                                <div className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-500" data-alt="Student writing in notebook" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBkjeahwEtCsvyuLneS5qRMRfJp1NV66P7sLtbMYuy7rTd8hZfogkJi1x9LI4PbArSC91Vr5xINDTavT2uDmRshVTOgRkhFSODwJeLAqx_UR6VHuiX8HXU7KSQK2Aet2qmiNdqc17AATmVGTNEToxLcfCg0tYkfYPH3RiFMmk-2PnNbstEgIcFIyA3nOJM60vUmTrl9sIofc-ImH-n8eHa-hzGzF6R5HKiUP4jh2-KFZ7u6LaXRGgrQlj6JZG1NfnzSogX_9QJRsbrm')" }}></div>
                            </div>
                            <div className="flex items-center gap-2 mb-2 text-xs font-bold text-primary uppercase tracking-wide">
                                <span>Student Life</span>
                            </div>
                            <h3 className="text-xl font-bold font-display text-gray-900 dark:text-white mb-2 group-hover:text-primary transition-colors">
                                A Day in the Life of a Santri
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 font-sans text-sm line-clamp-2">
                                From Tahajjud to lights out, experience the routine that builds discipline and character.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
