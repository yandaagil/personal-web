import Link from "next/link";
import Title from "@/components/title";

const NotFound = () => {
  return (
    <>
      <Title title="X__X" />

      <section className="container px-4 flex items-center justify-center md:max-w-2xl">
        <div className="h-full text-center">
          <h1 className="mb-10 text-3xl font-semibold">
            wHAt r U LookInG 4?
          </h1>
          <Link href="/" className="font-medium transition-all duration-300 ease-in-out underline decoration-solid underline-offset-4 decoration-primary text-sm md:text-base hover:decoration-2">
            Take Me Back to Eden
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
