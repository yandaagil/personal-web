import Title from "@/components/title";
import Hero from "@/components/section/hero";
import Projects from "@/components/section/projects";
import Experiences from "@/components/section/experiences";
import About from "@/components/section/about";

export default function Home() {
  return (
    <>
      <Title title="Yanda Agil" />
      <Hero />
      <Projects />
      <Experiences />
      <About />
    </>
  );
}
