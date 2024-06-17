import Projects from "@/components/section/projects";
import About from "@/components/section/about";
import Skills from "@/components/section/skills";

const HomeView = () => {
  return (
    <main className="space-y-10 md:space-y-16">
      <About />
      <Skills />
      <Projects />
    </main>
  )
}

export default HomeView