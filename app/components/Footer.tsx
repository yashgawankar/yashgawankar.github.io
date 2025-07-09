// app/components/Footer.tsx
export function Footer() {
  return (
    <footer className="w-full py-6 text-center border-t border-gray-800 mt-12">
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Yash Gawankar •{' '}
        <a href="mailto:yashgawankar@gmail.com" className="hover:underline text-blue-400">
          yashgawankar@gmail.com
        </a>{' '}
        • <a href="https://linkedin.com/in/yashgawankar" target="_blank" className="hover:underline text-blue-400">LinkedIn</a>
      </p>
    </footer>
  );
}
