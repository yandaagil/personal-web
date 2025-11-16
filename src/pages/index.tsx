import Thoughts from "@/components/section/thoughts"
import { GetStaticProps } from "next"
import { getAllPosts } from "@/lib/mdx"
import { Post } from "@/types/post.type"

const Home: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Thoughts posts={posts} />
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts()
  return {
    props: { posts },
  }
}

export default Home
