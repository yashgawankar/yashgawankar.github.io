'use client'

import Link from 'next/link'

export default function Navbar() {
  return (
    <nav
      className="w-full px-6 md:px-16 py-4 flex justify-between items-center shadow-sm fixed top-0 z-50"
      style={{
        background: 'var(--background)',
        color: 'var(--foreground)',
        borderBottom: '1px solid #333',
      }}
    >
      <h1 className="text-xl font-semibold">Yash Gawankar</h1>
      <div className="flex gap-6 text-sm">
        <Link href="/" className="hover:text-blue-400 transition">Home</Link>
        <Link href="/projects" className="hover:text-blue-400 transition">Projects</Link>
        <Link href="/blog" className="hover:text-blue-400 transition">Blog</Link>
        <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
      </div>
    </nav>
  )
}
