import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { format } from 'date-fns';
import Link from 'next/link';
import Title from '@/components/title';
import Header from '@/components/section/header';

interface Props {
  post: {
    slug: string;
    title: string;
    date: string;
    content: MDXRemoteSerializeResult;
  }
}

export default function BlogPost({ post }: Props) {
  return (
    <div className="min-h-screen p-8 max-w-[700px] mx-auto">
      <Title title={`${post.title} | Yanda Agil`} />
      <Header />
      <main className="md:pb-12 space-y-10 md:space-y-16">
        <article className='mt-6'>
          <h1 className='font-medium'>{post.title}</h1>
          <span className='text-gray-400'>{format(new Date(post.date), 'd MMMM yyyy')}</span>
          <div className='postContent'>
            <MDXRemote {...post.content} />
          </div>
        </article>
      </main>
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

  if (!post) {
    return {
      notFound: true,
    };
  }

  const mdxSource = await serialize(post.content);

  return {
    props: {
      post: {
        ...post,
        content: mdxSource
      },
    },
  };
};