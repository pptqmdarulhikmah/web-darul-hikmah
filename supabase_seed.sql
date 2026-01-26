-- Seed Data for Darul Hikmah

-- Hero Slides
INSERT INTO hero_slides (title, subtitle, image_url, button_text, button_link, sort_order, is_active) VALUES
(
  'Membangun Generasi Rabbani yang Berilmu & Berakhlak',
  'Pondok Pesantren Al-Hikmah menggabungkan kurikulum modern dengan nilai-nilai salaf untuk mencetak pemimpin masa depan.',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBhhXtG-00hhwKZ_9oMXjBg-Y3ptKxz5rQcQNQ1NgoTx_-h67zu0ISVOqkmTgAIyf0Z1cSPciT_sMI0DhLEabVhvlOC7dn7x7NpJVcf50vnMpd4uoFu7eiZTDRWFPm9-zUkJJ8qqbM-GjmmdMCPWy-zEOYzGCcnCJAv_FX-GoTHMZh2Rls1hwggEqP1K0VjPnbSRIqctdD_oeDCJp3mnzYau3x8pNAojp4DF6CDM-HO2k56qfA4JIh5TyNBPQsiLCtJYodRJaySmlG3',
  'Daftar Sekarang',
  '#',
  1,
  true
);

-- Articles
INSERT INTO articles (title, slug, category, excerpt, content, image_url, published_at, is_published) VALUES
(
  'Al-Hikmah Raih Juara Umum Lomba Musabaqah Tilawatil Quran Tingkat Provinsi',
  'al-hikmah-raih-juara-umum-mtq',
  'Pendidikan',
  'Prestasi membanggakan kembali diraih oleh santri Pondok Pesantren Al-Hikmah dalam ajang MTQ tahun ini...',
  'Prestasi membanggakan kembali diraih oleh santri Pondok Pesantren Al-Hikmah dalam ajang MTQ tahun ini. Para santri berhasil menyabet juara umum setelah memenangkan berbagai kategori perlombaan.',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCUbxHwevMd0zmVTkaKwukGMHdvlqvP6hVGCBhkPGHq6HQrYSOYuRhxMo98Op51yZ41EJ0FXz_iu82euf1dfHDHMgGXVxNMJMJAthlX_GMPQuO5mMVavg0sMKjEUzRwsuVzsOgxxJkzPwGZeFdypGwZKlTXsRd2HKnnBngCx9DbD6vIEG-YC0m434c6_hLyMc1Zx4L9VIuurZvRStdjbU3K8Ie1Gkjf-iQqCPt95tRZl1vKeoGOiFTTQzPmigYMAcaBXTgv5bqu6lE7',
  '2023-10-12 10:00:00+07',
  true
),
(
  'Kajian Akbar: Meneladani Akhlak Rasulullah SAW di Era Digital',
  'kajian-akbar-meneladani-akhlak-rasulullah',
  'Kajian',
  'Ribuan jamaah memadati masjid utama Al-Hikmah untuk mendengarkan tausiyah tentang tantangan zaman modern...',
  'Ribuan jamaah memadati masjid utama Al-Hikmah untuk mendengarkan tausiyah tentang tantangan zaman modern. Pemateri mengingatkan pentingnya menjaga akhlak mulia di tengah gempuran teknologi.',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDXai1TQNF6PaMnm9eyp25fHXnZgRe91M0-_5l7VXK_JpSEy05zEfdDSQjVSAI8MmSC2qVJqHBaU439hXNt5BknLaIJtZzFxnHLhRKHCVb5i07mrckf8OxROI7MnbUmTWSQ0kukz0K7lZ__8oa6QaRp8wkWbiJLcgrLYZN4nKHyFmh2Npm7Uygtt-6LicWhQ3Tb86FrkPOYzmPfK2Pf5kILS-ihfhrNodz0Qez90f4Dn9-NBmRlkx7vvjHyXzL26A8CAFUw8jFULpKW',
  '2023-10-05 14:00:00+07',
  true
),
(
  'Peresmian Gedung Laboratorium Bahasa Baru',
  'peresmian-gedung-laboratorium-bahasa-baru',
  'Fasilitas',
  'Untuk menunjang kemampuan bahasa asing santri, Al-Hikmah meresmikan fasilitas laboratorium multimedia terbaru...',
  'Untuk menunjang kemampuan bahasa asing santri, Al-Hikmah meresmikan fasilitas laboratorium multimedia terbaru. Gedung ini dilengkapi dengan perangkat audio visual canggih untuk pembelajaran Bahasa Arab dan Inggris.',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuATucYqMvMtsJ1ShYzgqJs73HnQsL7X4noyOePZnnZrO7Vz_Bs1cSIXuUz6cDhoUeANvzm-ku21fF7NzyKDHKTkLGRPalfVLUILtIhjYNYMvZFcO1gb8HT90z8nyMjqtntdQOgOCzuuu5B6dHLE_2ryAuq_b-zH10mgHzEHYaqB5ETpm_rYeTvASanI4rVL1Mkn7vH2w3VBf3pnwIZqoHIINr92lj03iEMt9RhE3jioP9fu_kx-8aMiptSLTahi-N1bzcD0UW-BtHKo',
  '2023-09-28 09:00:00+07',
  true
);

-- Testimonials
INSERT INTO testimonials (name, role, content, avatar_url) VALUES
(
  'Bapak H. Ahmad Fauzi',
  'Wali Santri',
  'Alhamdulillah, anak saya mengalami perubahan akhlak yang sangat positif. Tidak hanya hafal Quran, tapi juga mandiri dan santun kepada orang tua.',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCbcoqPfraz0Hyy61uSVjfwX_IUvGXZLkqimNzoOwBVeRyU7z-hjdkusJjIkOeIQdAb_sDgqDyJocapfU0rBpL79RKEt15mvK3iLeqoWLxYcaS-etKDJAAFIE2pkjQ_y1X0qCY234ObCCkguX-3KgekU7ijwFdylJ5rb536e21TkQoAVi7Nws0bDCqMXw6SKjNrV89Pc8G4PZe7FyypEhRgGz0FoUa5DpS6CjnvCVZ9QLYSiEp4NQH8b3Zd8Fgm6rHt6xNWH_0r8NgA'
),
(
  'Muhammad Rizky, S.T.',
  'Alumni Angkatan 2018',
  'Pondok ini mengajarkan saya keseimbangan antara ilmu agama dan umum. Fasilitasnya sangat mendukung untuk mengembangkan potensi diri.',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBHHIjdYihb6ASkpmQburKGY1wvWB1hWpl-LMfDbQIvzEHBJgBpGN6pgvaBBJCGS9YIAUyIe8amvAEhhGNZl1N5f19EeORjyh3UvEdVqyolVdSO1p1WG3H-mcHf2PGaMNODR7DtNFftCmPW13LWLPiuG4EaphYS1zgj5BhECIjA3GRbxG9fESMs7wSa5hbyfuGHYnubApq6Iva7YofVouPdBC-4rDdqCy7bBeRZZImlv1MbsInIrKRB9lJDNLzyCEsDGSmMyeW2eVdh'
);

-- Galleries
INSERT INTO galleries (title, category, image_url) VALUES
(
  'Kegiatan Belajar Mengajar',
  'Kegiatan',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuADKnRrsTVRU4_28en7NWsA2-q6BdONcnpXx5veFu2oshoS6jN9aGAGQxnWvp7yI8qZNJADXJHj36GlTHXtxkEiUd5vMGWvglVyHckTaUr1WXzwrpgal3oETmzfD6sPAG8V0ANtDSl167l_YoqTj5J94iYLYmL3NeHNlkJL74SHs1zdifLZhu-pEzjHe0pTXSX2di0GlwmpnkreWk6uw9YsE-mMdmBazYRh9I_NPdwhnKxGcKFBDTZQdgV3sdWuzLUR99lgzao3B0n9'
),
(
  'Hafalan Quran',
  'Kegiatan',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBI7Pvlb3YCFKjpZr2XouGMtKVhXyAx8KdCNaOGdwYXZzyVTZ77XF8IaAFv29Ee0iHNE7baf2dr2bcKr-60knoJSvsj9acXzv2UBkCjRzx6dQFmdTfLvnYI-P2KFs0mjGk8hc63WRp2gvaaGKsVNaIRKHVn3V61OVFTPg1L_2dNlz3G3U9_udTExQAJS3Vmuik3db1KGwOZVo1sd382dArdYg8Rs8YX3cxMpQDelj4jdXx0cUNuD0i0Vn8HB4Kc5SXVcooOKAafu_ve'
),
(
  'Olahraga',
  'Kegiatan',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCmiUaeOeobw_kV3szhsnl0bcJgfCgQCtTZPCmcoRXR1vgjpy8LTddvQ0_EcXS7x7K9tP1p_wHvkq9NanaWxfBGmJPBZmWElxAd8AhpAw2KIjAFun4VGihsVlIomD5tow3mEaoxkQ6W-_s2SreRykASl-TGwqcSSF49QEnIgmOgZ8uWOMDqAS3yrRzKpsLclXOSVHoYnZXDDvz5Uy9lLbB8c9K5LihrZTOxW6340Bfs38dlPqlMfZ4Oin1hVV00uHKtUy_Op6IHqhny'
),
(
  'Diskusi Kelompok',
  'Kegiatan',
  'https://lh3.googleusercontent.com/aida-public/AB6AXuDPcBiFJOjM2iCAtXM1yKmEjbC7S7SAQ9X2U0XkN-s_DeQV0G9fMV__WJa-C7-2VFH9j0Dp0vgjCCgLKfOlBcJEO5eLejnLodNv1owY51RgCgZ_ehJSeA2ysKfClL0H07ShaCr23uEM7reqZX3cKXgf_W2gsey1LsJByz1Xbp4SnekbER0pDXk3j29VcQFaAcm20KsIk26dKsna72LKvkit6sMVyjWt2ft_vq5tlW7XZ07esOvaa1nTAxil79ntDBNyT8vN8zn7Si6b'
);
