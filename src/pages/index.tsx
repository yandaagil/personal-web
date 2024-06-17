import Title from "@/components/title";
import Header from "@/components/section/header";
import HomeView from "@/components/home";
import { Toaster } from "@/components/ui/toaster"

export default function Home() {
  return (
    <>
      <Title title="Yanda Agil" />
      <Header />
      <HomeView />
      <Toaster />
    </>
  );
}
