// app/layout.tsx
import './globals.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yash Gawankar | ML/AI Portfolio',
  description: 'Portfolio website of Yash Gawankar – ML/AI Engineer & Researcher',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-black text-white min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
