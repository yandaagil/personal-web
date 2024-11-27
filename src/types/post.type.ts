export interface PostFrontmatter {
  title: string;
  date: string;
}

export interface Post extends PostFrontmatter {
  slug: string;
  content: string;
}