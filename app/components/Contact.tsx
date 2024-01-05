import Link from "next/link";
import { ContactShape } from "../icons";
import resume from "../resume.json";

export default function Contact() {
  const { author } = resume;
  return (
    <div
      id="contact"
      className="w-[1240px] max-w-full mx-auto container-bg rounded-3xl text-4xl md:text-5xl lg:text-6xl font-medium p-10 py-8 flex flex-col justify-between gap-14 items-center text-center"
    >
      <ContactShape />
      <div>Turn your idea into reality.</div>
      <Link
        href={`mailto:${author.email}?subject=${
          author.name.split(" ")?.[0] || "Hey"
        }, I need your help with my project...`}
        className="text-3xl md:text-4xl lg:text-5xl font-medium bg-red-500 rounded-full px-6 py-4"
      >
        Let&apos;s talk.
      </Link>
    </div>
  );
}
