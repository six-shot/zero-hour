import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import ClientImageLoader from "./components/client-image-loader";
import { SoundProvider } from "@/lib/useSoundContext";

const vt323 = VT323({
  variable: "--font-vt323",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Zero hour",
  description: "Helping systems strategically tokenize, dedicated to growing Web-3 roots into your IP",
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
      <body className={`${vt323.variable} ${sentex.variable} antialiased`}>
        <SoundProvider>
          <ClientImageLoader>{children}</ClientImageLoader>
        </SoundProvider>
      </body>
    </html>
  );
}
