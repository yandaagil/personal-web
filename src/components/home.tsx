import Title from "@/components/title";
import Header from "@/components/section/header";
import Projects from "@/components/section/projects";

const HomeView = () => {
  return (
    <div className="min-h-screen p-8 max-w-[700px] mx-auto">
      <Title title="Yanda Agil" />
      <Header />
      <main className="md:pb-12 space-y-10 md:space-y-16">
        <Projects />
      </main>
    </div>
  )
}

export default HomeView