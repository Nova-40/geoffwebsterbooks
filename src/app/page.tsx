
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-neutral-50">
        <section className="mx-auto max-w-6xl px-4 py-14 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl mb-4">Welcome to Geoff Webster Books</h1>
          <p className="text-lg text-neutral-700 max-w-2xl mx-auto mb-8">Fantasy realms, 1930s intrigue, and interactive fiction. Explore The Gorstan Chronicles, Inspector Bowley, and the Gorstan game.</p>
        </section>
        <section id="about" className="mx-auto max-w-6xl px-4 py-14 grid gap-8 lg:grid-cols-2 items-center">
          <div className="flex justify-center lg:justify-start">
            <Image
              src="/author.webp"
              alt="Geoff Webster"
              width={400}
              height={400}
              className="rounded-2xl object-cover w-full max-w-[320px] sm:max-w-[400px] h-auto"
              priority
            />
          </div>
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl mb-4">About Geoff</h2>
            <p className="leading-7 mb-4">
              Strategist, reformer, and storyteller—equally at home in Whitehall and fractured kingdoms.
            </p>
            <ul className="space-y-2 list-disc pl-5 mb-4">
              <li>Led cross-government programmes (DWP → Cabinet Office; SR2025 capability agenda).</li>
              <li>International delivery: Kuwait leadership, Bahrain banking reform, AUK academic transformation.</li>
              <li>Writes The Gorstan Chronicles and Inspector Bowley.</li>
            </ul>
            <div className="rounded-2xl bg-white p-6 border shadow-sm mb-6">
              <h3 className="font-serif text-xl mb-2">What I’m building</h3>
              <p className="mt-3">Interactive fiction and AI-aware NPCs in the Gorstan game. Side quests included.</p>
            </div>
            {/* Newsletter/Testimonials placeholder */}
            <div className="rounded-2xl bg-neutral-100 p-6 border border-dashed text-left">
              <h3 className="font-serif text-lg mb-2">Stay in touch</h3>
              <p className="mb-2">Sign up for updates, new releases, and exclusive content.</p>
              <form className="flex flex-col sm:flex-row gap-2" aria-label="Newsletter signup">
                <input type="email" placeholder="Your email" className="rounded px-3 py-2 border flex-1" aria-label="Email address" />
                <button type="submit" className="rounded bg-black text-white px-4 py-2 hover:bg-neutral-800 focus:bg-neutral-900">Notify me</button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
