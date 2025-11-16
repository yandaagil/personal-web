import Link from "next/link"
import Title from "@/components/title"

const NotFound = () => {
  return (
    <>
      <Title title="X__X" />
      <section id="not-found" className="space-y-3 mt-8 text-center">
        <h1 className="mb-10 text-3xl font-semibold">
          wHAt r U LookInG 4?
        </h1>
        <Link href="/" className="hover:text-[#6699FF] dark:hover:text-[#FF66CC]">
          take me back to eden
        </Link>
      </section>
    </>
  )
}

export default NotFound
