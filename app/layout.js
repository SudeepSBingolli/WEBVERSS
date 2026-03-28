import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmartChatbot from "@/components/SmartChatbot";
import Background3D from "@/components/Background3D";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SJBIT - Transforming Ideas into Real-World Innovation",
  description: "SJB Institute of Technology. Premier technical education with industry collaborations, research, and 95%+ placements. 200+ papers, 30+ patents.",
  keywords: "SJBIT, technical education, engineering, research, innovation, placements, Bengaluru",
  openGraph: {
    title: "SJBIT - Transforming Ideas into Real-World Innovation",
    description: "Premier technical institute with cutting-edge education, research labs, and industry partnerships.",
    type: "website",
    locale: "en_IN",
  },
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full flex flex-col">
        <Background3D />
        <main className="relative z-10 flex-1">{children}</main>
        <SmartChatbot />
      </body>
    </html>
  );
}
