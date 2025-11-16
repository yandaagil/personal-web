import { GetStaticProps, GetStaticPaths } from 'next'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { getAllPosts, getPostBySlug } from '@/lib/mdx'
import { format } from 'date-fns'
import Title from '@/components/title'
import remarkGfm from 'remark-gfm'
import rehypePrism from 'rehype-prism-plus'
import rehypeCodeTitles from 'rehype-code-titles'

type PostProps = {
  post: {
    slug: string
    title: string
    date: string
    content: MDXRemoteSerializeResult
  }
}

export default function BlogPost({ post }: PostProps) {
  return (
    <>
      <Title title={`${post.title} | Yanda Agil`} />
      <article>
        <h1 className='font-medium'>{post.title}</h1>
        <time className='text-gray-400 text-sm sm:text-base' dateTime={post.date}>
          {format(new Date(post.date), 'd MMMM yyyy')}
        </time>
        <div className='mdxContent mt-6'>
          <MDXRemote {...post.content} />
        </div>
      </article>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts()
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = getPostBySlug(params?.slug as string)

  if (!post) {
    return {
      notFound: true,
    }
  }

  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeCodeTitles,
        rehypePrism
      ]
    }
  })

  return {
    props: {
      post: {
        ...post,
        content: mdxSource
      },
    },
  }
}