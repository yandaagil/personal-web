import Link from "next/link";
import Title from "@/components/title";

const NotFound = () => {
  return (
    <div className="min-h-screen p-8 max-w-[700px] mx-auto">
      <Title title="X__X" />
      <main className="md:pb-12 space-y-10 md:space-y-16">
        <section id="projects" className="space-y-3 mt-8 text-center">
          <h1 className="mb-10 text-3xl font-semibold">
            wHAt r U LookInG 4?
          </h1>
          <Link href="/" className="text-gray-400 hover:text-blue-500">
            take me back to eden
          </Link>
        </section>
      </main>
    </div>
  );
};

export default NotFound;
