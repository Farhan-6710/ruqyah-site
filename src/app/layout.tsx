import type { Metadata } from "next";
import localFont from "next/font/local";
import { Eczar } from "next/font/google"; // Importing the Eczar font
import Head from "next/head";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  weight: "100 900",
});

// Initialize Eczar font with desired styles
const eczar = Eczar({
  subsets: ["latin"],
  weight: ["400", "700"], // Specify the weights you want to use
});

export const metadata: Metadata = {
  title: "Ruqyah Website",
  description: "A website to explore about Ruqyah",
  icons: {
    icon: "/favicon.ico", // Path to your favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        {/* Add any other meta tags or links here */}
      </Head>
      <body
        className={`${geistSans.className} ${geistMono.className} ${eczar.className} antialiased`}
      >
        <HeaderTop />
        <Header
          logoSrc="/logo.png"
          logoAlt="Logo"
          logoWidth={150}
          logoHeight={50}
        />
        {children}
        <Footer />
      </body>
    </html>
  );
}
