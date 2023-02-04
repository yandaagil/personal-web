import Head from "next/head";

const NotFound = () => {
  return (
    <>
      <Head>
        <title>X__X</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="hero error">
        <div className="container">
          <div className="head">
            <h1
              className="head-title glitch is-glitching"
              data-text="#404 | Not Found"
            >
              #404 | Not Found
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
