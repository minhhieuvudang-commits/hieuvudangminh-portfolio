import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PERSONAL_INFO } from "@/data/portfolioData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#176B9F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://hieuvudangminh.com"),
  title: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.title} | Portfolio`,
  description: `${PERSONAL_INFO.title} with 3+ years of experience across CFD & finance, venture, and corporate environments — managing cross-functional projects from planning and stakeholder alignment to execution and delivery.`,
  keywords: [
    "Hieu Vu Dang Minh",
    "Marketing Project Coordinator",
    "Project Coordinator",
    "Marketing Operations",
    "STARTRADER",
    "CFD Marketing",
    "Forex Marketing",
    "Fintech Project Management",
    "Ho Chi Minh City",
    "Vietnam",
  ],
  authors: [{ name: PERSONAL_INFO.name }],
  creator: PERSONAL_INFO.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hieuvudangminh.com",
    title: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}`,
    description: "From objective to delivery. Explore 40+ verified projects across CFD marketing, trader education, corporate events, and digital media.",
    siteName: `${PERSONAL_INFO.name} Portfolio`,
    images: [
      {
        url: "/images/portrait.jpg",
        width: 1200,
        height: 630,
        alt: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${PERSONAL_INFO.name} — ${PERSONAL_INFO.title}`,
    description: "From objective to delivery. Explore 40+ verified projects across CFD marketing, trader education, and corporate events.",
    images: ["/images/portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FBFDFF] text-[#123A5A]">
        {children}
      </body>
    </html>
  );
}
