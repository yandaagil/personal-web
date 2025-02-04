import Link from "next/link";
import Title from "@/components/title";

const NotFound = () => {
  return (
    <>
      <Title title="X__X" />
      <section id="projects" className="space-y-3 mt-8 text-center">
        <h1 className="mb-10 text-3xl font-semibold">
          wHAt r U LookInG 4?
        </h1>
        <Link href="/" className="text-gray-400 hover:text-blue-500 transition-colors">
          take me back to eden
        </Link>
      </section>
    </>
  );
};

export default NotFound;
