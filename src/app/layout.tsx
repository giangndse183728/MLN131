

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import { Noto_Serif_Display, Be_Vietnam_Pro } from 'next/font/google';
import Script from "next/script";
import ChatSpeedDial from "@/features/chatbot/components/chat-speed-dial";
import MusicPlayer from "@/components/ui/music-player";


export const metadata = {
  title: "MLN131 | Dân Chủ XHCN & Nhà Nước Pháp Quyền XHCN",
  description: "Dân Chủ Xã Hội Chủ Nghĩa và Nhà Nước Pháp Quyền XHCN Ở Việt Nam",
  keywords: ["dân chủ xã hội chủ nghĩa", "nhà nước pháp quyền", "xhcn", "việt nam"],
  image: {
    url: "/vn.png",
    width: 1200,
    height: 630,
    alt: "Dân Chủ Xã Hội Chủ Nghĩa và Nhà Nước Pháp Quyền XHCN Ở Việt Nam",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});


const notoSerifDisplay = Noto_Serif_Display({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-noto-serif-display',
  display: 'swap',
  preload: true,
});

const beVietnamPro = Be_Vietnam_Pro({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-be-vietnam-pro',
  display: 'swap',
  preload: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="/background.jpg" as="image" />
        <link rel="icon" type="image/png" href="/vn.png" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${notoSerifDisplay.variable} ${beVietnamPro.variable} antialiased text-gray-900 overlay-scroll`}>
   
          <div className="flex flex-col min-h-screen relative">
            <div className="fixed bottom-0 left-0 w-[150px] h-[150px] pointer-events-none z-20">
              <div className="absolute bottom-0 left-0 w-[3px] h-[60px] bg-gradient-to-t from-[rgba(190,0,0,0.8)] to-transparent"></div>
              <div className="absolute bottom-0 left-0 w-[60px] h-[3px] bg-gradient-to-r from-[rgba(190,0,0,0.8)] to-transparent"></div>
            </div>
            <div className="fixed bottom-0 right-0 w-[150px] h-[150px] pointer-events-none z-20">
              <div className="absolute bottom-0 right-0 w-[3px] h-[60px] bg-gradient-to-t from-[rgba(190,0,0,0.8)] to-transparent"></div>
              <div className="absolute bottom-0 right-0 w-[60px] h-[3px] bg-gradient-to-l from-[rgba(190,0,0,0.8)] to-transparent"></div>
            </div>
            
            <Navbar />
            
            <main className="flex-1 relative z-10">
              <div className="absolute inset-0 bg-[url('/background.jpg')] bg-cover bg-center bg-fixed opacity-95 pointer-events-none"></div>
              <div className="relative z-10 py-8">
                {children}
              </div>
            </main>
            <Footer />
            <ChatSpeedDial />
            <MusicPlayer />
          </div>
        
        
        <Script id="font-optimization" strategy="afterInteractive">
          {`
            if (document.fonts && document.fonts.ready) {
              document.fonts.ready.then(() => {
                const style = document.createElement('style');
                style.textContent = '@font-face { font-display: swap !important; }';
                document.head.appendChild(style);
              });
            }
          `}
        </Script>
        
      </body>
    </html>
  );
}
