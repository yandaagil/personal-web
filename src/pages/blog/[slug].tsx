import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { Post } from '@/types/post.type';
import Link from 'next/link';

interface Props {
  post: Post;
  mdxSource: MDXRemoteSerializeResult;
}

export default function BlogPost({ post, mdxSource }: Props) {
  const postDate = new Date(post.date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <div className="container">
      <Link href='/'>
        <h1 className='font-medium'>Yanda Agil</h1>
      </Link>
      <article className='mt-6'>
        <h1 className='font-medium'>{post.title}</h1>
        <span className='text-gray-400'>{postDate}</span>
        <div className='postContent'>
          <MDXRemote {...mdxSource} />
        </div>
      </article>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.slug as string);
  const mdxSource = await serialize(post?.content || '');

  return {
    props: {
      post,
      mdxSource,
    },
  };
};