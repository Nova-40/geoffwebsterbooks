// Simple analytics placeholder (e.g., Vercel Analytics, Plausible, or Google Analytics)
import Script from "next/script";

export default function Analytics() {
  return (
    <>
      {/* Example: Google Analytics (replace with your own ID) */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>
    </>
  );
}
