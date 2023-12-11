import Link from "next/link";
import Title from "@/components/title";

const NotFound = () => {
  return (
    <>
      <Title title="X__X" />

      <section className="min-h-screen container px-4 flex items-center justify-center md:max-w-2xl">
        <div className="h-full text-center">
          <h1 className="mb-10 text-3xl font-semibold">
            what do you want from me?
          </h1>
          <Link href="/" className="font-medium transition-all duration-300 ease-in-out underline decoration-solid underline-offset-4 decoration-[#5e6365] text-sm md:text-base hover:opacity-70">
            Take Me Back to Eden
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
