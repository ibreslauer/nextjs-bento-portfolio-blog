import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { orderBy } from "lodash";
import { postFilePaths, BLOG_POSTS_PATH } from "../../utils/mdxUtils";
import BlogPostCard from "../components/BlogPostCard";
import { Post } from "../../types/blog";

export const metadata = {
  title: "Blog",
};

const getAllPosts = () => {
  const posts: Post[] = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(BLOG_POSTS_PATH, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return posts;
};

export default function BlogPage() {
  const posts = getAllPosts();
  const orderedPosts = orderBy(posts, ["data.lastUpdated"], ["asc"]);

  return (
    <div className="grid grid-cols-2 gap-2">
      {orderedPosts.map((post) => (
        <div className="grow" key={post.filePath}>
          <BlogPostCard key={post.filePath} post={post} />
        </div>
      ))}
    </div>
  );
}
