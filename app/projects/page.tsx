// app/projects/page.tsx
export default function Projects() {
  const projects = [
    {
      title: 'ReMoDiff — Restoring Missing Modalities with Diffusion',
      date: 'Jan 2025 – May 2025',
      description:
        'Designed a diffusion-based framework to reconstruct missing modalities (audio, video, text) for personality trait inference. Integrated with multimodal fusion for robust inference.',
      tags: ['Diffusion Models', 'Multimodal', 'Personality Inference'],
    },
    {
      title: 'RLHF-based Optimization of Recommendations using LLMs',
      date: 'Sept 2024 – Dec 2024',
      description:
        'Engineered an RLHF-based recommender using DPO and LoRA-tuned LLMs, achieving 170–200% boost over baseline on NDCG@K, Precision@K, and Recall@K.',
      tags: ['Recommender Systems', 'LLMs', 'RLHF', 'LoRA'],
    },
    {
      title: 'Overcoming Catastrophic Forgetting in Recommender Systems',
      date: 'Sept 2024 – Dec 2024',
      description:
        'Applied continual learning techniques (EWC, ER) to SASRec-based sequential recommenders, improving recall by 20% using exemplar replay and distillation.',
      tags: ['Continual Learning', 'RecSys', 'SASRec'],
    },
    {
      title: 'Talking Head Video Generation with TransGANs (Capstone)',
      date: 'Jan 2021 – Dec 2021',
      description:
        'Synthesized realistic talking-head videos using ViTs, GANs, and autoencoders. Co-authored a survey paper accepted at ICICT 2022, London.',
      tags: ['Video Synthesis', 'GANs', 'Vision Transformers'],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="space-y-8">
        {projects.map((proj, idx) => (
          <div key={idx} className="border border-gray-700 rounded-lg p-6 bg-gray-900 shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold text-blue-400">{proj.title}</h2>
            <p className="text-sm text-gray-400 mb-2">{proj.date}</p>
            <p className="text-gray-300 mb-2">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {proj.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-800 text-sm text-blue-300 px-2 py-1 rounded border border-blue-500"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
