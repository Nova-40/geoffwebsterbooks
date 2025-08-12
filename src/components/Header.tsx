import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-black/70 border-b">
      <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between" aria-label="Main navigation">
        <Link href="/" className="font-serif text-xl">Geoff Webster</Link>
        <ul className="space-x-6 text-sm hidden md:flex">
          <li><Link href="/#books" className="hover:underline focus:underline">Books</Link></li>
          <li><Link href="/#about" className="hover:underline focus:underline">About</Link></li>
          <li><Link href="/game" className="hover:underline focus:underline">Game</Link></li>
          <li><Link href="/#contact" className="hover:underline focus:underline">Contact</Link></li>
        </ul>
        {/* Mobile menu button (hamburger) */}
        <button className="md:hidden p-2" aria-label="Open menu">
          <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-black dark:bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-black dark:bg-white"></span>
        </button>
      </nav>
    </header>
  );
}
