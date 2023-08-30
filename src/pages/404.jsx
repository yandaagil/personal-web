import Link from "next/link";
import Title from "./components/section/title";

const NotFound = () => {
  return (
    <>
      <Title title="X__X" />

      <section className="h-96 lg:min-h-screen error">
        <div className="w-4/5 h-full my-0 py-10 mx-auto flex flex-col items-center justify-center lg:w-11/12 2xl:w-7/12">
          <h1 className="mb-10 text-3xl font-semibold text-text lg:text-6xl">
            😔 | Page Not Found
          </h1>
          <Link href="/" className="font-bold head-link">
            <span>Back to Home</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
