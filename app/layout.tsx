import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

import resume from "./resume.json";

const { author } = resume;

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: `${author.name} (${author.current_role})`,
  description: `Portfolio of ${author.name}, ${author.current_role} currently working at ${author.current_job}.`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        <main className="relative flex flex-col min-h-screen w-[1240px] max-w-full mx-auto items-center justify-start gap-2 p-3 cursor-default overflow-hidden">
          <Header />
          <div className="grow w-full">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
