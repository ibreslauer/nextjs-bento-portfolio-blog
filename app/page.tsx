import Hero from "./components/Hero";
import Badges from "./components/Badges";
import Bio from "./components/Bio";
import Testimonials from "./components/Testimonials";
import Work from "./components/Work";
import Contact from "./components/Contact";

import type { Metadata } from "next";
import resume from "./resume.json";

const { author } = resume;

export const metadata: Metadata = {
  title: `${author.name} | ${author.current_role} | Portfolio`,
  description: `${author.meta_summary}`,
};

export default function Home() {
  return (
    <div className="flex flex-col gap-2">
      <Hero />
      <Badges />
      <Bio />
      <Testimonials />
      <Work />
      <Contact />
    </div>
  );
}
