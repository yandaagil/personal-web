import Title from "@/components/title";
import Projects from "@/components/section/projects";
import About from "@/components/section/about";
import Header from "@/components/section/header";
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <>
      <Title title="Yanda Agil" />
      <Header />
      <main>
        <About />
        <Projects />
      </main>
      <Toaster />
    </>
  );
}
