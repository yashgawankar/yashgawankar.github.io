import type { Metadata } from "next";
import Navbar from "../app/components/Navbar";
import Footer from "../app/components/Footer";
import "../app/globals.css";

export const metadata: Metadata = {
  title: "Yash Gawankar | Recommender Systems Portfolio",
  description: "Innovative and scalable recommender systems using AI & ML.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-background text-white flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
