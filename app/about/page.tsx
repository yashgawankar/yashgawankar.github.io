// app/about/page.tsx
export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <p className="text-lg text-gray-300 mb-4">
        I'm a Computer Science graduate student at the University of Southern California (USC),
        specializing in Artificial Intelligence. I’m passionate about building intelligent systems
        that are real-time, scalable, and deeply grounded in user experience.
      </p>

      <p className="text-lg text-gray-300 mb-4">
        With industry experience at Affinsys AI, I’ve developed full-scale AI products integrating
        LLMs, GenAI analytics, and recommendation engines. I’ve also conducted academic research in
        recommender systems, diffusion models, and multimodal learning, and authored work accepted
        at international conferences.
      </p>

      <p className="text-lg text-gray-300 mb-4">
        I enjoy working on technically challenging projects that combine AI, product thinking, and
        system design — especially recommender systems, generative models, and RLHF fine-tuning.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Quick Facts</h2>
      <ul className="list-disc list-inside text-gray-300 space-y-2">
        <li>
          🎓 <strong>USC CS-AI (2026)</strong> • GPA: 4.0
        </li>
        <li>
          🏆 Top 2% undergrad at PES University with CNR Rao and MRD scholarships
        </li>
        <li>
          🤖 Focus: Recommender Systems, LLMs, Diffusion, Multimodal ML
        </li>
        <li>
          ⚽ Semi-professional soccer player, zonal league champion
        </li>
        <li>
          🌍 Volunteered with Rotary Bangalore North for social impact
        </li>
      </ul>
    </div>
  );
}
