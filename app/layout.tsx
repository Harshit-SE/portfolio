import type { Metadata } from "next";
import "./globals.css";
import { ModeProvider } from "@/context/ModeContext";

export const metadata: Metadata = {
  title: "Harshit Mishra — Backend Developer & Flutter Engineer",
  description:
    "CSE undergraduate building backend systems, AI-powered applications, and cross-platform mobile apps. Open for Backend, Software Engineering & Flutter internships.",
  keywords: [
    "Harshit Mishra", "Backend Developer", "Flutter Developer",
    "Software Engineer", "NIT Manipur", "Node.js", "Python", "AI", "Portfolio",
  ],
  authors: [{ name: "Harshit Mishra" }],
  openGraph: {
    title: "Harshit Mishra — Backend Developer & Flutter Engineer",
    description: "CSE undergraduate building backend systems, AI-powered apps, and Flutter mobile apps.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harshit Mishra — Backend Developer & Flutter Engineer",
    description: "CSE undergraduate building backend systems and Flutter mobile apps.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="dev">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;900&family=Share+Tech+Mono&family=Rajdhani:wght@300;400;500;600;700&family=Orbitron:wght@400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <ModeProvider>{children}</ModeProvider>
      </body>
    </html>
  );
}
