import Head from "next/head";
import Footer from "./footer";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>X__X</title>
      </Head>

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title smaller center">404 | Mau cari apa bang?</h1>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default NotFound;
