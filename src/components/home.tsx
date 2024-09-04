import Title from "@/components/title";
import Header from "@/components/section/header";
import { Toaster } from "@/components/ui/toaster"
import Projects from "@/components/section/projects";

const HomeView = () => {
  return (
    <>
      <Title title="Yanda Agil" />
      <Header />
      <main className="space-y-10 md:space-y-16">
        <Projects />
      </main>
      <Toaster />
    </>
  )
}

export default HomeView