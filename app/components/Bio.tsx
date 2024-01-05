import { Globe } from "../icons";
import resume from "../resume.json";

export default function Bio() {
  const { author } = resume;
  return (
    <div
      id="more-info"
      className="w-[1240px] max-w-full mx-auto flex flex-col md:flex-row justify-stretch items-stretch gap-2"
    >
      <div
        id="about"
        className="flex-[2] container-bg rounded-3xl flex flex-col gap-8 p-10 pt-6 pb-4"
      >
        <Globe />
        <p className="text-4xl md:text-5xl lg:text-6xl font-medium">
          Based in
          <br />
          {author.city},
          <br />
          {author.country}
          <br />
          <span className="text-white/50 leading-tight">{author.timezone}</span>
        </p>
      </div>
      <div
        id="bio"
        className="flex-[5] container-bg rounded-3xl p-10 py-12 flex flex-col justify-start gap-2 items-center"
      >
        <p className="text-3xl md:text-4xl lg:text-5xl font-medium">
          As a {author.current_role}
          <br />
          {author.brief_1}
        </p>
        <p className="text-3xl md:text-4xl lg:text-5xl font-medium text-white/50">
          {author.brief_2}
        </p>
      </div>
    </div>
  );
}
