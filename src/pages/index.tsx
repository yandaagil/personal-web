import Header from "@/components/section/header";
import Title from "@/components/title";
import { getAllPosts } from "@/lib/mdx";
import { Post } from "@/types/post.type";
import { GetStaticProps } from "next";
import Link from "next/link";

interface Props {
  posts: Post[];
}

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <div className="min-h-screen p-8 max-w-[700px] mx-auto">
      <Title title="Yanda Agil" />
      <Header />
      <main className="md:pb-12 space-y-10 md:space-y-16">
        <section id="projects" className="space-y-3 mt-8">
          <h2 className="font-medium">Writing</h2>
          <ul className="space-y-1 list-disc pl-5">
            {posts.map(({ title, slug }) => (
              <li key={title}>
                <Link href={`/posts/${slug}`} className="text-blue-500 hover:text-blue-700">
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
};

export default Home
