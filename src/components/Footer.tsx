export default function Footer() {
  return (
    <footer className="border-t bg-white/80 dark:bg-black/80 py-8 mt-12">
      <div className="mx-auto max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <div>
          © {new Date().getFullYear()} geoffwebsterbooks.com
        </div>
        <div className="flex gap-4">
          <a href="mailto:mail@example.com" className="hover:underline focus:underline">Email</a>
          <a href="https://twitter.com/" className="hover:underline focus:underline" rel="noopener noreferrer" target="_blank">Twitter</a>
        </div>
      </div>
    </footer>
  );
}
