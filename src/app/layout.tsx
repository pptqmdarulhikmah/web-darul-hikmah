import type { Metadata } from "next";
import { Newsreader, Manrope, Public_Sans } from "next/font/google"; // Import new fonts
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pesantren Al-Hikmah - Membangun Generasi Rabbani",
  description: "Pondok Pesantren Tahfizhul Qur’an Darul Hikmah Muhammadiyah Cabang Masaran Sragen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${newsreader.variable} ${manrope.variable} ${publicSans.variable} antialiased min-h-screen flex flex-col font-body bg-background-light`}
      >
        {children}
      </body>
    </html>
  );
}
