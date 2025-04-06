export default function Footer() {
  return (
    <footer
      className="w-full text-center text-sm py-6 border-t"
      style={{
        background: 'var(--background)',
        color: 'var(--foreground)',
        borderColor: '#333',
      }}
    >
      <p>© {new Date().getFullYear()} Yash Gawankar. All rights reserved.</p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="mailto:yashgawankar@gmail.com" className="hover:text-blue-400">Email</a>
        <a href="https://www.linkedin.com/in/yashgawankar/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
          LinkedIn
        </a>
      </div>
    </footer>
  )
}
