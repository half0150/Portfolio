// "use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../app/Navbar";
import Footer from "../app/footer";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Halfdan Monie",
  description: "Portfolio for Halfdan Monie",
};

// document.title = "Halfdan Monie"

// useEffect (()=>{
  
// }, [])

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      <Footer/>
      </body>
    </html>
  );
}
