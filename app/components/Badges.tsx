import Link from "next/link";
import {
  MdiReact,
  MdiNodejs,
  MdiSass,
  SimpleIconsPostgresql,
  NextJs,
  MdiLinkedin,
  MdiGithub,
  MdiTailwind,
  MdiDocker,
  FileIconsRedux,
} from "../icons";
import resume from "../resume.json";

export default function Badges() {
  const { author } = resume;
  return (
    <div
      id="links"
      className="w-[1240px] max-w-full mx-auto flex flex-col md:flex-row flex-wrap justify-between items-center gap-2"
    >
      <div
        id="skills"
        className="flex flex-wrap md:flex-nowrap gap-1 text-white/30"
      >
        {[
          { icon: <MdiReact />, text: "React" },
          { icon: <MdiNodejs />, text: "Node.js" },
          { icon: <FileIconsRedux />, text: "Redux" },
          { icon: <MdiTailwind />, text: "TailwindCSS" },
          { icon: <MdiSass />, text: "Sass" },
          { icon: <SimpleIconsPostgresql />, text: "PostgreSQL" },
          { icon: <MdiDocker />, text: "Docker" },
          { icon: <NextJs />, text: "Next.js" },
        ].map((item, index) => (
          <div
            key={`${index}-${item.text}`}
            className="text-base container-bg rounded-3xl grow flex justify-center items-center gap-1 px-8 py-3"
            title={item.text}
          >
            <span className="text-2xl">{item.icon}</span>
          </div>
        ))}
      </div>

      <div id="social-links" className="flex flex-wrap md:flex-nowrap gap-1">
        <Link
          href={author.linkedin_url}
          target="_blank"
          className="grow text-base container-bg rounded-3xl text-white/50 hover:text-white flex justify-center items-center gap-1 px-10 py-3"
        >
          <MdiLinkedin className="text-2xl" />
        </Link>
        <Link
          href={author.github_url}
          target="_blank"
          className="grow text-base container-bg rounded-3xl text-white/50 hover:text-white flex justify-center items-center gap-1 px-10 py-3"
        >
          <MdiGithub className="text-2xl" />
        </Link>
      </div>
    </div>
  );
}
