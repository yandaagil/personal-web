import Title from "./components/section/title";
import Hero from "./components/section/hero";
import Project from "./components/section/project";
import Experience from "./components/section/experience";
import About from "./components/section/about";
import Footer from "./components/section/footer";
import Cursor from "./components/cursor";

export default function Home() {
  return (
    <>
      <Title title="Yanda Agil" />

      <Hero />

      <main>
        <Project />
        <Experience />
        <About />
      </main>

      <Footer />
      <Cursor />
    </>
  );
}
