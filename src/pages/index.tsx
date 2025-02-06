import Title from "@/components/title";
import { getAllPosts } from "@/lib/mdx";
import { Post } from "@/types/post.type";
import { format } from "date-fns";
import { GetStaticProps } from "next";
import Link from "next/link";

type HomeProps = {
  posts: Post[];
}

const Home: React.FC<HomeProps> = ({ posts }) => {
  return (
    <>
      <Title title="Yanda Agil" />
      <section id="thoughts" className="space-y-3 mt-8">
        <h2 className="font-medium">Thoughts</h2>
        <ul className="space-y-1 list-disc pl-5">
          {posts.map(({ title, slug, date }) => (
            <li key={title}>
              <Link href={`/t/${slug}`} className="group justify-between flex flex-row">
                <p className="text-blue-500 group-hover:text-blue-700 truncate">
                  {title}
                </p>
                <span className="text-gray-400 group-hover:text-gray-500">
                  {format(new Date(date), 'd MMMM yyyy')}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts();
  return {
    props: { posts },
  };
};

export default Home
