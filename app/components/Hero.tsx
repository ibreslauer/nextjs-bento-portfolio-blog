import Image from "next/image";
import Link from "next/link";
import { ContactShape } from "../icons";
import resume from "../resume.json";

export default function Hero() {
  const { author } = resume;
  return (
    <div
      id="headline-row"
      className="w-[1240px] max-w-full mx-auto flex flex-col md:flex-row items-stretch gap-2"
    >
      <div
        id="intro"
        className="flex-[3] container-bg rounded-3xl flex flex-col justify-between gap-6 p-10 py-12"
      >
        <div className="w-36 h-36 rounded-full overflow-hidden">
          <Image
            src={author.avatar_url}
            alt={`Portrait photo of ${author.name}`}
            width={150}
            height={150}
            className="scale-110 translate-x-1 translate-y-1 grayscale"
          />
        </div>
        <p className="text-4xl md:text-5xl lg:text-6xl font-medium">
          {author.name}
          <br /> is a {author.current_role.toLowerCase()}{" "}
          <span className="text-white/50">
            currently working at{" "}
            <Link href={author.current_job_url} target="_blank">
              {author.current_job}
            </Link>
            .
          </span>
        </p>
      </div>
      <div
        id="contact-hero"
        className="flex-[2] container-bg text-3xl md:text-4xl lg:text-5xl font-medium rounded-3xl p-10 py-12 flex flex-col justify-between gap-10 items-center text-center"
      >
        <div className="flex flex-col gap-4 md:gap-10 items-center">
          <ContactShape />
          <div>Need help with your project?</div>
        </div>
        <Link
          href={`mailto:${author.email}?subject=${
            author.name.split(" ")?.[0] || "Hey"
          }, I need your help with my project...`}
          className="font-medium bg-red-500 rounded-full px-6 py-4"
        >
          Let&apos;s talk.
        </Link>
      </div>
    </div>
  );
}
