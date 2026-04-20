import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
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
      className={`${geistSans.variable} ${geistMono.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-black text-white flex flex-col">

        {/* 🔥 Main Content */}
        <main className="flex-1">{children}</main>

        {/* ✅ WhatsApp Floating Logo (Premium) */}
        <a
          href="https://wa.me/917018796714?text=Hi%20I%20want%20to%20book%20at%20Cafe%2098"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 group"
        >
          <div className="relative">
            
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              width={55}
              height={55}
              priority
              className="drop-shadow-xl transition-transform duration-300 group-hover:scale-110"
            />

            {/* 🟢 Pulse Animation */}
           
          </div>
        </a>

      </body>
    </html>
  );
}