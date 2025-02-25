import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white py-4 px-6 fixed top-0 left-0 w-full shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Yash Gawankar
        </Link>
        <div className="space-x-6">
          <Link href="/about" className="hover:text-gray-400 transition">About</Link>
          <Link href="/projects" className="hover:text-gray-400 transition">Projects</Link>
          <Link href="/blogs" className="hover:text-gray-400 transition">Blogs</Link>
          <Link href="/contact" className="hover:text-gray-400 transition">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
