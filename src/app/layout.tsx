import type { Metadata } from "next";
import { Inter, VT323 } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ClientImageLoader from "./components/client-image-loader";
import { SoundProvider } from "@/lib/useSoundContext";

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: ["400"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zero hour",
  description:
    "Helping systems strategically tokenize, dedicated to growing Web-3 roots into your IP",
};
const sentex = localFont({
  src: "../../public/fonts/Sentex-Regular.ttf",
  variable: "--font-sentex",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical resources for ultra-fast loading */}
        <link rel="preload" href="/loader-hero.svg" as="image" />
        <link rel="preload" href="/hero.svg" as="image" />
        <link rel="preload" href="/zero.svg" as="image" />
        <link rel="preload" href="/sub-hero.svg" as="image" />
        <link rel="preload" href="/mask.svg" as="image" />

        {/* DNS prefetch for faster connections */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${vt323.variable} ${sentex.variable} ${inter.variable} antialiased`}
      >
        <SoundProvider>
          <ClientImageLoader>{children}</ClientImageLoader>
        </SoundProvider>
      </body>
    </html>
  );
}
