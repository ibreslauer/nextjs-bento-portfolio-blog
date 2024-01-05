import React from "react";
import Link from "next/link";
import Image from "next/legacy/image";
import type { Post } from "../../types/blog";

const BlogPostCard = ({ post }: { post: Post }) => {
  return (
    <>
      <div className="hidden sm:flex flex-col container-bg rounded-3xl text-3xl md:text-4xl lg:text-5xl font-medium p-2">
        <Link
          as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
          href={`/blog/[slug]`}
        >
          <div className="flex">
            <div className="relative w-full rounded-3xl overflow-hidden md:w-72 min-h-[12rem]">
              <Image
                src={post.data.coverImage}
                className="object-center object-cover"
                layout="fill"
                alt="Cover image"
              />
            </div>
            <div className="flex flex-col w-full px-4 py-2">
              <div className="pt-2 text-3xl font-barlowCondensed font-semibold leading-none mb-2">
                {post.data.title}
              </div>
              <div className="text-sm opacity-50 font-extralight">
                {post.data.readingTime} min read
              </div>
            </div>
          </div>
        </Link>
      </div>
      <div className="block sm:hidden container-bg rounded-3xl text-xl font-medium p-2">
        <Link
          as={`/blog/${post.filePath.replace(/\.mdx?$/, "")}`}
          href={`/blog/[slug]`}
        >
          <div className="flex flex-col w-full p-4">
            <div className="font-barlowCondensed font-semibold leading-none mb-2">
              {post.data.title}
            </div>
            <div className="text-sm opacity-50 font-extralight">
              {post.data.readingTime} min read
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default BlogPostCard;
