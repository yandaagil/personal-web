import Title from "./components/title";
import Hero from "./components/hero";
import Work from "./components/work";
import Experience from "./components/experience";
import About from "./components/about";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Title title="Yanda Agil" />

      <Hero />

      <main className="main">
        <Work />
        <Experience />
        <About />
      </main>

      <Footer />
    </>
  );
}
