import Link from "next/link";
import Image from "next/image";
import {
  MaterialSymbolsArrowOutward,
  MaterialSymbolsLocationOn,
} from "../icons";

import resume from "../resume.json";

type Reference = {
  id: string;
  title: string;
  description: string;
  role: string;
  location: string;
  responsibilities: string[];
  skills: string[];
  image?: string | undefined;
  imagePosition?: string | undefined;
  imageAlt?: string | undefined;
  href: string;
};

export default function Work() {
  const { work_experience: references } = resume;
  return (
    <div
      id="work"
      className="w-[1240px] max-w-full mx-auto flex flex-col gap-2"
    >
      {references.map((ref: Reference, index) => (
        <div
          key={`${index}-${ref.id}`}
          id={ref.id}
          className="w-[1240px] max-w-full mx-auto flex flex-col container-bg rounded-3xl text-3xl md:text-4xl lg:text-5xl font-medium p-2 pb-8"
        >
          <div className="flex justify-between items-center">
            <div className="flex flex-col w-full">
              {ref.image && ref.imageAlt && (
                <div className="relative h-[20rem] md:h-[32rem] mb-4 rounded-3xl overflow-hidden">
                  <Image
                    src={ref.image}
                    alt={ref.imageAlt}
                    fill
                    style={{
                      objectFit: "cover",
                      objectPosition: ref.imagePosition || "center",
                    }}
                  />
                </div>
              )}

              <div className="flex justify-between items-start p-2 pb-4 md:px-4">
                <div>
                  <div>{ref.title}</div>
                  <div className="text-white/50 text-lg md:text-xl md:leading-loose font-normal">
                    {ref.description}
                  </div>
                </div>
                <Link
                  className="min-w-14 h-14 md:w-20 md:h-20 bg-transparent hover:bg-white hover:text-black transition-colors duration-300 rounded-full flex justify-center items-center"
                  href={ref.href}
                  target="_blank"
                >
                  <MaterialSymbolsArrowOutward />
                </Link>
              </div>

              <div className="text-white/50 text-lg md:text-xl md:leading-loose font-normal px-2 md:px-4">
                <div className="text-white/90 leading-tight mb-3">
                  {ref.role}
                  <br />
                  <div className="flex items-center gap-1 text-white/50 text-sm md:text-base">
                    <MaterialSymbolsLocationOn />
                    {ref.location}
                  </div>
                </div>
                <ul className="mb-8 pl-10 py-4 text-white/50 list-disc list-outside">
                  {ref.responsibilities.map((resp) => (
                    <li
                      key={resp}
                      className="text-lg md:text-xl md:leading-normal font-normal"
                    >
                      {resp}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-2 flex-wrap text-white/50 text-lg md:text-xl md:leading-relaxed font-normal">
                  {ref.skills.map((skill) => (
                    <div
                      key={skill}
                      className="flex items-center px-2 rounded-md bg-white/15 font-mono font-normal text-sm md:text-base"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
