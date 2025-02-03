import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Post } from "@/types/post.type";

const POSTS_DIRECTORY = path.join(process.cwd(), "src/posts");

export const getAllPosts = (): Post[] => {
  const fileNames = fs.readdirSync(POSTS_DIRECTORY);

  const allPosts = fileNames
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => {
      const fullPath = path.join(POSTS_DIRECTORY, file);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const slug = file.replace(/\.mdx?$/, "");

      return {
        ...(data as Post),
        slug,
        content,
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1));

  return allPosts;
};

export const getPostBySlug = (slug: string): Post | null => {
  try {
    const fullPath = path.join(POSTS_DIRECTORY, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      ...(data as Post),
      slug,
      content,
    };
  } catch (error) {
    return null;
  }
};
