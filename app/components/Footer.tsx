export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-6 mt-auto text-center">
      <div className="max-w-6xl mx-auto px-4">
        <p>&copy; {new Date().getFullYear()} Yash Gawankar. All rights reserved.</p>
        <p className="mt-2">
          Built with ❤️ using Next.js. Follow my journey on{" "}
          <a href="https://github.com/yashgawankar" className="text-blue-400 hover:text-blue-500 transition">
            GitHub
          </a> and{" "}
          <a href="https://linkedin.com/in/yashgawankar" className="text-blue-400 hover:text-blue-500 transition">
            LinkedIn
          </a>.
        </p>
      </div>
    </footer>
  );
}
