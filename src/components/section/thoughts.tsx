import { Post } from '@/types/post.type'
import Link from 'next/link'
import React from 'react'
import { format } from "date-fns"

const Thoughts: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <section id="thoughts" className="space-y-3 mt-8">
      <ul className="space-y-2">
        {posts.length > 0 && posts.map(({ title, slug, date }) => (
          <li key={slug}>
            <Link href={`/t/${slug}`} className="flex flex-col sm:flex-row sm:justify-between gap-1 sm:gap-4 group">
              <p className="line-clamp-2 group-hover:text-[#6699FF] dark:group-hover:text-[#FF66CC]">{title}</p>
              <span className="text-sm sm:text-base text-gray-500 dark:text-gray-400 shrink-0">{format(new Date(date), 'dd/MM/yyyy')}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Thoughts