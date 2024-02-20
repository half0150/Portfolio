import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from './providers'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Halfdan Monie",
  description: "Portfolio for Halfdan Monie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}


