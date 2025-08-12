
import { site } from "@/lib/site";
import Link from "next/link";

export default function GamePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <header className="bg-neutral-900 text-white py-3 px-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-lg">Geoff Webster</Link>
        <nav className="space-x-4 text-sm">
          <Link href="/#books" className="hover:underline">Books</Link>
          <Link href="/#about" className="hover:underline">About</Link>
          <Link href="/game" className="underline">Game</Link>
          <Link href="/#contact" className="hover:underline">Contact</Link>
        </nav>
      </header>
      <div className="flex-1">
        <iframe
          src={site.ctas.playGorstan.href}
          title="Gorstan Game"
          className="w-full h-[calc(100vh-3rem)] border-none"
        />
      </div>
    </main>
  );
}
