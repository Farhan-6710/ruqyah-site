// app/layout.tsx (or pages/_app.tsx if applicable)
import type { Metadata } from "next";
import localFont from "next/font/local";
import Head from "next/head";
import "./globals.css";
import HeaderTop from "@/components/HeaderTop";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import QueryClientProviderWrapper from "@/components/QueryClientProviderWrapper"; // Import your new component

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  weight: "100 900",
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
        className={`${geistSans.className} ${geistMono.className} antialiased`}
        style={{ fontFamily: "'Bookman Old Style', serif" }} // Set the font to Bookman Old Style
      >
        <QueryClientProviderWrapper>
          <HeaderTop />
          <Header />
          {children}
          <Footer />
        </QueryClientProviderWrapper>
      </body>
    </html>
  );
}
