import { getAllPosts } from "@/lib/mdx";
import { Post } from "@/types/post.type";
import { GetStaticProps } from "next";
import Link from "next/link";

interface Props {
  posts: Post[];
}

const Writing: React.FC<Props> = ({ posts }) => {
  return (
    <section id="projects" className="space-y-3 mt-8">
      <h2 className="font-medium">Projects</h2>
      <ul className="space-y-1 list-disc pl-5">
        {posts.map(({ title, slug }) => (
          <li key={title}>
            <Link href={`/blog/${slug}`} className="text-blue-500 hover:text-blue-700">
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return { props: { posts } };
};

export default Writing;
