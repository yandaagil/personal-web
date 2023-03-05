import Title from "./components/title";
import Hero from "./components/hero";
import Work from "./components/work";
import About from "./components/about";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Title title="Yanda Agil" />

      <Hero />

      <main className="main">
        <Work />
        <About />
      </main>

      <Footer />
    </>
  );
}
