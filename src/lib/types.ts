export interface SiteConfig {
  name: string;
  url: string;
  description: string;
  social: {
    email: string;
    twitter?: string;
  };
  ctas: {
    books: string;
    playGorstan: {
      href: string;
      label: string;
      className: string;
    };
  };
}
