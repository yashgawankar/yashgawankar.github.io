import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-12 bg-white">
      {/* Left Text Section */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900">Yash Gawankar</h1>
        <h2 className="text-xl md:text-2xl text-gray-700">AI Engineer | Recommender Systems | Generative AI</h2>
        <p className="text-md md:text-lg text-gray-600 max-w-xl">
          I design and build intelligent systems at the intersection of AI, user experience, and real-world impact.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-4 pt-4">
          <Link href="/projects">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition">
              View Projects
            </button>
          </Link>
          <a
            href="/Yash%20Gawankar%20-%20Internship%20Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-xl hover:bg-blue-50 transition">
              Download Resume
            </button>
          </a>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <Image
          src="/profile.png"
          alt="Profile"
          width={400}
          height={400}
          className="object-contain rounded-2xl shadow-lg"
          priority
        />
      </div>
    </main>
  );
}
