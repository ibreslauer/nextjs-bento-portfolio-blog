import fs from "fs";
import path from "path";

// POSTS_PATH is useful when you want to get the path to a specific file
export const BLOG_POSTS_PATH = path.join(process.cwd(), "blog-posts");

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(BLOG_POSTS_PATH)
  // Only include md(x) files
  .filter((path) => /\.mdx?$/.test(path));
