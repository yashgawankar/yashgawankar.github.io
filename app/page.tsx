// app/page.tsx
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-96px)] flex flex-col md:flex-row px-6 py-12 max-w-7xl mx-auto gap-6 md:gap-12">
      {/* Left: Text */}
      <div className="md:w-1/2 flex flex-col justify-start">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Hi, I'm <span className="text-blue-400">Yash Gawankar</span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          ML/AI engineer passionate about building real-time, generative, and recommender systems.
          Currently pursuing my Master’s in CS-AI at USC with a perfect GPA.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mb-6">
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

        <p className="text-gray-400 text-sm mt-4">Specialized in:</p>
        <ul className="list-disc list-inside text-gray-300 text-base space-y-1 mt-2">
          <li>🧠 Recommender Systems (Batch + Real-time)</li>
          <li>🎯 LLM Fine-tuning & RLHF with DPO/LoRA</li>
          <li>🎥 Multimodal & Generative AI (Diffusion, Vision, Audio)</li>
        </ul>

        <p className="text-gray-400 text-sm mt-6">Currently working on:</p>
        <ul className="list-disc list-inside text-gray-300 text-base space-y-1 mt-2">
          <li>🚀 Real-time recommender system using streaming + batch fusion</li>
          <li>🧪 Blog series on GenAI, scalable ML, and RLHF for RecSys</li>
          <li>📖 Preparing for ML/AI internships — open to opportunities</li>
        </ul>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-2 mt-6">
          {['Next.js', 'Tailwind CSS', 'PyTorch', 'LangChain', 'LLMs', 'FastAPI'].map((tag) => (
            <span
              key={tag}
              className="text-sm bg-gray-800 border border-gray-700 px-3 py-1 rounded text-blue-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Right: Full-height image */}
      <div className="md:w-1/2 flex justify-center md:justify-end items-start">
        <div className="w-full h-full flex items-start">
          <Image
            src="/profile.png"
            alt="Profile"
            width={500}
            height={800}
            className="object-cover rounded-lg h-full max-h-[calc(100vh-96px)]"
            priority
          />
        </div>
      </div>
    </div>
  );
}
