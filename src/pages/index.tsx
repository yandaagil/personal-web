import Title from "@/components/title";
import Projects from "@/components/section/projects";
import About from "@/components/section/about";
import Header from "@/components/section/header";
import Skills from "@/components/section/skills";
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <>
      <Title title="Yanda Agil" />
      <Header />
      <main>
        <About />
        <Skills />
        <Projects />
      </main>
      <Toaster />
    </>
  );
}
