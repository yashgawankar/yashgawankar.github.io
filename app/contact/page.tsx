// app/contact/page.tsx
export default function Contact() {
  return (
    <div className="max-w-xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>
      <p className="text-gray-300 mb-6">
        I'm open to collaborations, internships, and full-time opportunities in ML/AI. Feel free to reach out via
        this form or directly at{' '}
        <a
          href="mailto:yashgawankar@gmail.com"
          className="text-blue-400 underline"
        >
          yashgawankar@gmail.com
        </a>.
      </p>

      <form
        action="https://formspree.io/f/your-form-id"
        method="POST"
        className="space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your message"
          required
          className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
