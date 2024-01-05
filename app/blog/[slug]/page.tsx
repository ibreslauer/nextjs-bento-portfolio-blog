import Image from "next/image";
import path from "path";

import fs from "fs";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import rehypeHighlight from "rehype-highlight";

import { postFilePaths, BLOG_POSTS_PATH } from "../../../utils/mdxUtils";
import { MDXRemoteClient } from "../../components/MDXRemoteClient";

import "@/styles/highlight-js.css";
import { formatDate } from "@/utils/date";

const components = {
  Image,
};

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const postFilePath = path.join(BLOG_POSTS_PATH, `${params.slug}.mdx`);
  const source = fs.readFileSync(postFilePath);
  const { content, data } = matter(source);
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [rehypeHighlight] as any,
    },
    scope: data,
  });

  return (
    <article className="w-[48rem] max-w-full mx-auto">
      <div className="mb-4">
        <h1 className="text-3xl sm:text-5xl text-center">{data.title}</h1>
        <div className="w-max mx-auto text-xs sm:text-sm text-white/50">
          Last updated:{" "}
          <span className="text-white/75">{formatDate(data.lastUpdated)}</span>{" "}
          | <span className="text-white/75">{data.readingTime} min read</span>
        </div>
      </div>
      <main className="px-2 md:px-4 pt-3 flex flex-col text-white/60 mb-8">
        <Image
          src={data.coverImage}
          alt="Cover image"
          width={1200}
          height={600}
          className="object-center object-cover rounded-3xl overflow-hidden mb-4"
        />
        <MDXRemoteClient source={mdxSource} components={components} />
      </main>
    </article>
  );
}

export async function generateStaticParams() {
  const paths = postFilePaths.map((path) => path.replace(/\.mdx?$/, ""));
  return paths.map((slug) => ({ slug }));
}
