import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row items-center justify-center min-h-screen max-w-6xl mx-auto px-6 text-center md:text-left space-y-10 md:space-y-0">
      {/* Left Section - Text */}
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Hi, I'm Yash Gawankar 👋
        </h1>
        <p className="text-lg text-gray-400 mt-4">
          I specialize in building <span className="font-semibold text-blue-400">intelligent and scalable Recommender Systems</span>.
          Passionate about AI, ML, and deploying real-time solutions at scale.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
          <a href="/projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition">
            View My Projects
          </a>
          <a href="/contact" className="px-6 py-3 border border-gray-300 text-gray-300 hover:bg-gray-700 rounded-lg transition">
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Section - Profile Image */}
      <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 mt-6 md:mt-0 rounded-full overflow-hidden border-4 border-gray-700 shadow-xl">
        <Image
          src="/profile.png"
          alt="Yash Gawankar"
          fill
          className="object-cover"
        />
      </div>
    </main>
  );
}
