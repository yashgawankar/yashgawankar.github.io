import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-[calc(100vh-64px)] flex flex-col md:flex-row items-center justify-center px-6 md:px-16">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl">
        {/* Left Side - Text */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold">Yash Gawankar</h1>
          <h2 className="text-xl md:text-2xl">
            AI Engineer | Recommender Systems | Generative AI
          </h2>
          <p className="text-md md:text-lg max-w-xl">
            I design and build intelligent systems at the intersection of AI, user experience, and real-world impact.
          </p>
          <div className="flex flex-col md:flex-row items-center gap-4 pt-4">
            <Link href="/projects">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-xl shadow hover:bg-blue-700 transition">
                View Projects
              </button>
            </Link>
            <a
              href="/Yash Gawankar - Internship Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="border border-blue-500 text-blue-500 px-6 py-2 rounded-xl hover:bg-blue-500 hover:text-white transition">
                Download Resume
              </button>
            </a>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0">
          <Image
            src="/profile.png"
            alt="Yash Gawankar"
            width={700}
            height={800}
            className="object-contain rounded-2xl shadow-xl"
            priority
          />
        </div>
      </div>
    </main>
  )
}
