// app/experience/page.tsx
export default function Experience() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Experience</h1>

      {/* Full-Time Role */}
      <div className="mb-8 border border-gray-700 rounded-lg p-6 bg-gray-900 shadow">
        <h2 className="text-xl font-semibold text-blue-400">Affinsys AI</h2>
        <p className="text-sm text-gray-400 mb-2">Software Development Engineer – ML/AI | June 2022 – July 2024</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Led development of an AI-powered Campaign Manager using LLMs, reducing manual effort by 25%.</li>
          <li>Created AmigoX GenAI Analytics for natural language data visualization, improving analysis efficiency by 30%.</li>
          <li>Designed AmigoX Picsum – a GenAI tool that converts designs into dynamic HTML templates.</li>
          <li>Optimized prompts and metrics for GPT, LLaMA, Mistral chatbots, improving accuracy across RAG pipelines.</li>
        </ul>
      </div>

      {/* Internship */}
      <div className="mb-8 border border-gray-700 rounded-lg p-6 bg-gray-900 shadow">
        <h2 className="text-xl font-semibold text-blue-400">Affinsys AI</h2>
        <p className="text-sm text-gray-400 mb-2">Software Developer Intern – ML/AI | June 2021 – June 2022</p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Developed the Cognitive Recommendation Engine for cross-sell/upsell and churn reduction.</li>
          <li>Implemented a RoBERTa-based spelling correction model for chatbot inputs.</li>
          <li>Built deep learning–based 3D facial reconstruction for metaverse banking UX.</li>
        </ul>
      </div>
    </div>
  );
}
