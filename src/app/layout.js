import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar/Navbar";
import Footer from "@/components/shared/Footer/Footer";
import ScrollToTopComponent from "@/components/common/ScrollToTop/ScrollToTop";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Northway Global",
  description: "Study In USA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        {children}
        <Footer/>
        <ScrollToTopComponent/>
        </body>
    </html>
  );
}
