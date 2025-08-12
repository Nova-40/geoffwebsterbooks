import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Geoff Webster Books",
  url: "https://www.geoffwebsterbooks.com",
  description:
    "Author of The Gorstan Chronicles and the Bowley mysteries. Fantasy realms, 1930s intrigue, and interactive fiction.",
  social: {
    email: "mail@example.com",
  },
  ctas: {
    books: "#books",
    playGorstan: {
      href: "/game",
      label: "Play Gorstan",
      className:
        "rounded-2xl bg-black/70 text-white px-5 py-3 text-sm font-medium hover:bg-black/85",
    },
  },
};
