import Link from 'next/link'
import React, { useState } from 'react'

const CONNECT = [
  { name: "Instagram", url: "https://www.instagram.com/yandaagil/" },
  { name: "Github", url: "https://github.com/yandaagil/" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/yandaagil/" }
]

const Footer = () => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [isCopied, setIsCopied] = useState<boolean>(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('yandaagil@gmail.com')
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 2000)
  }

  return (
    <footer className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4'>
      <ul className="flex flex-wrap gap-3 sm:gap-4 text-base sm:text-lg">
        {CONNECT.map((item, index) => (
          <li key={index}>
            <Link
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#6699FF] dark:hover:text-[#FF66CC]"
              aria-label={`Visit ${item.name} profile`}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      <div
        className="relative cursor-pointer text-sm sm:text-base"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleCopy}
      >
        <p className={`hover:text-[#6699FF] dark:hover:text-[#FF66CC] transition-all duration-200 ${isHovered || isCopied ? 'blur-sm' : ''}`}>
          yandaagil@gmail.com
        </p>
        {(isHovered || isCopied) && (
          <span className="absolute inset-0 flex items-center justify-center text-[#6699FF] dark:text-[#FF66CC] font-medium pointer-events-none">
            {isCopied ? 'email copied!' : 'copy?'}
          </span>
        )}
      </div>
    </footer>
  )
}

export default Footer