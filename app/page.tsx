import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row items-stretch justify-between min-h-screen max-w-7xl mx-auto px-6 pt-20">
      {/* Left Section - Aligns with Profile Image */}
      <div className="md:w-1/2 flex items-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-white leading-tight">
            Hi, I&aposm Yash Gawankar 👋
          </h1>
          <p className="text-lg text-gray-300">
            I specialize in Recommender Systems, AI, and scalable ML solutions. Passionate about real-time AI, personalization, and large-scale deployment.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="/projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition">
              View My Work
            </a>
            <a href="/contact" className="px-6 py-3 border border-blue-600 text-white hover:bg-blue-600 rounded-lg transition">
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Right Section - Responsive Profile Image, Limited Below Navbar */}
      <div className="md:w-1/2 flex justify-end items-end">
        <Image
          src="/profile.png"
          alt="Yash Gawankar"
          width={500}
          height={700}
          className="object-contain h-auto max-h-[calc(100vh-80px)] w-full"
        />
      </div>
    </main>
  );
}
