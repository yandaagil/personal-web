import { GetStaticProps, GetStaticPaths } from 'next';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';
import { getAllPosts, getPostBySlug } from '@/lib/mdx';
import { format } from 'date-fns';
import Title from '@/components/title';

type PostProps = {
  post: {
    slug: string;
    title: string;
    date: string;
    content: MDXRemoteSerializeResult;
  }
}

export default function BlogPost({ post }: PostProps) {
  return (
    <>
      <Title title={`${post.title} | Yanda Agil`} />
      <article className='mt-8'>
        <h1 className='font-medium'>{post.title}</h1>
        <span className='text-gray-400'>{format(new Date(post.date), 'd MMMM yyyy')}</span>
        <div className='postContent'>
          <MDXRemote {...post.content} />
        </div>
      </article>
    </>
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