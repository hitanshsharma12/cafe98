import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Cafe 98 | Eat • Drink • Stay",
  description:
    "Cafe 98 in Rohru - Enjoy food, drinks, and comfortable room stays. Book now online!",
  keywords: ["Cafe 98", "Rohru cafe", "Bar in Rohru", "Room stay Rohru"],
  authors: [{ name: "Cafe 98" }],
  openGraph: {
    title: "Cafe 98",
    description: "Eat • Drink • Stay in Rohru",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`
        ${geistSans.variable} 
        ${geistMono.variable} 
        ${playfair.variable} 
        h-full scroll-smooth
      `}
    >
      <body className="min-h-full bg-black text-white flex flex-col font-[var(--font-geist-sans)]">

        {/* 🔥 Main Content */}
        <main className="flex-1">{children}</main>

      </body>
    </html>
  );
}