import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { GoogleAnalytics } from '@next/third-parties/google';
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Halfdan Monie",
  description: "Portfolio for Halfdan Monie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Portfolio for Halfdan Monie" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <SpeedInsights />
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID} />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
