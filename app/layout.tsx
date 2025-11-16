import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/base/Navbar";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Level Up Labs",
  description: "Level Up Labs is a platform for learning and growing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${spaceGrotesk.variable} 
          ${inter.variable} 
          antialiased 
          min-h-screen 
          relative 
          overflow-x-hidden
        `}
      >
        {/* BACKGROUND LAYERS */}
        <div className="fixed inset-0 -z-50 pointer-events-none">
          {/* TRICOLOUR GRADIENT ONLY */}
          <div
            className="absolute inset-0"
            style={{
              background: `
                radial-gradient(circle at 0% 100%, rgba(255,153,51,0.45) 0%, rgba(255,153,51,0.25) 30%, transparent 70%),
                radial-gradient(circle at 50% 50%, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0.12) 40%, transparent 70%),
                radial-gradient(circle at 100% 0%, rgba(19,136,8,0.45) 0%, rgba(19,136,8,0.20) 30%, transparent 70%)
              `,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          />
        </div>

        {/* BLUR OVERLAY */}
        <div className="fixed inset-0 -z-40 backdrop-blur-2xl pointer-events-none" />

        {/* FIXED LOGOS */}
        <div className="hidden md:block fixed top-30 left-4 z-[10000]">
          <img
            src="/logo-left.png"
            alt="Left Logo"
            className="w-24 h-auto drop-shadow-xl"
          />
        </div>

        <div className="hidden md:block fixed top-30 right-4 z-[10000]">
          <img
            src="/logo-right.png"
            alt="Right Logo"
            className="w-24 h-auto drop-shadow-xl"
          />
        </div>

        {/* NAVBAR + CONTENT */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
