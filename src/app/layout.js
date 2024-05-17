// "use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../app/Navbar";
import Footer from "../app/footer";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Halfdan Monie",
  description: "Portfolio for Halfdan Monie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Halfdan Monie</title>
        <meta name="description" content="Portfolio for Halfdan Monie" />
        <link rel="icon" href="/favicon.ico" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-SFNND2N4NF`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SFNND2N4NF');
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
