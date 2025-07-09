// app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 gap-12">
      {/* Left: Text */}
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Yash Gawankar</h1>
        <p className="text-lg text-gray-300 mb-6">
          ML/AI engineer passionate about building real-time, generative, and recommender systems.
          Currently pursuing my Master’s in CS-AI at USC with a perfect GPA.
        </p>
        <div className="flex gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
          >
            View Resume
          </a>
          <a
            href="/#contact"
            className="border border-blue-500 text-blue-400 px-5 py-2 rounded hover:bg-blue-500 hover:text-white transition"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Right: Profile Image */}
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/profile.png"
          alt="Profile"
          width={400}
          height={400}
          className="rounded-lg object-contain max-h-[80vh]"
          priority
        />
      </div>
    </div>
  );
}
