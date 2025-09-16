import "@/styles/globals.css";

import Link from "next/link";
import { type Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeToggle } from "@/components/theme-toggle";
import TextLink from "@/components/text-link";

export const metadata: Metadata = {
  title: "Sam Walsh",
  description: "Personal Site",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* SSR theme init to prevent flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(){
  try {
    var s = localStorage.getItem('theme');
    var t = s === 'dark' || (!s && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', t);
  } catch (e) { document.documentElement.setAttribute('data-theme', 'light'); }
})();
          `,
          }}
        />
      </head>
      <body className="font-mono antialiased" data-theme="light">
        {/* Header */}
        <header className="sticky top-0 z-40 border-b-2 border-black bg-[var(--card-bg)] shadow-[6px_6px_0_0_var(--elev)]">
          <div className="mx-auto flex max-w-5xl items-center justify-between overflow-clip px-6 py-4">
            <Link
              href="/"
              className="mr-4 font-medium tracking-tight hover:opacity-80"
            >
              Sam Walsh
            </Link>
            <nav className="flex items-center gap-4 text-sm">
              <ThemeToggle />
              <TextLink
                external
                text="GitHub"
                link="https://github.com/samjwalsh"
              />
              <TextLink
                external
                text="LinkedIn"
                link="https://www.linkedin.com/in/sam-walsh-019855296/"
              />
              <a href="mailto:sam@samjw.ie" className="neo-btn">
                Contact
              </a>
            </nav>
          </div>
          <div className="absolute top-0 right-0 m-4"></div>
        </header>

        {/* Main content */}
        <main className="mx-auto max-w-5xl px-6 py-16">{children}</main>

        {/* Footer */}
        <footer className="border-t-2 border-black bg-[var(--card-bg)]">
          <div className="mx-auto max-w-5xl px-6 py-8 text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} Sam Walsh. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
