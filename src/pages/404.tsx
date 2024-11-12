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
          <Link href="/" className="font-normal text-sm underline underline-offset-2 md:text-base hover:text-primary">
            take me back to eden
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
