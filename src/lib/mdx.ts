import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post, PostFrontmatter } from '@/types/post.type';

const POSTS_PATH = path.join(process.cwd(), 'src/posts');

export const getAllPosts = (): Post[] => {
  const files = fs.readdirSync(POSTS_PATH);
  
  const posts = files
    .filter((file) => /\.mdx?$/.test(file))
    .map((file) => {
      const filePath = path.join(POSTS_PATH, file);
      const source = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(source);
      const slug = file.replace(/\.mdx?$/, '');
      
      return {
        ...(data as PostFrontmatter),
        slug,
        content,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
};

export const getPostBySlug = (slug: string): Post | undefined => {
  const posts = getAllPosts();
  return posts.find((post) => post.slug === slug);
};