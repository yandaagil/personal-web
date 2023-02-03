import Head from "next/head";
import Hero from "./components/hero";
import Work from "./components/work";
import About from "./components/about";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yanda Agil</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />

      <main className="main">
        <Work />
        <About />
      </main>

      <Footer />
    </>
  );
}
