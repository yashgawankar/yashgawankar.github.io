// app/components/Navbar.tsx
'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="w-full px-6 py-4 flex justify-between items-center border-b border-gray-800">
      <span className="text-xl font-semibold">Yash Gawankar</span>
      <div className="space-x-6">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`hover:text-blue-400 transition ${
              pathname === link.path ? 'text-blue-400' : ''
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
