import { Dithering } from "@paper-design/shaders-react"
import Footer from "./section/footer"
import Header from "./section/header"
import Title from "./title"
import { useTheme } from "next-themes"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { theme } = useTheme()

  return (
    <main>
      <Title title="Yanda Agil" />
      <div className="relative min-h-screen overflow-auto flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4 sm:p-8 flex flex-col justify-between gap-8 z-10 min-h-screen">
          <Header />

          {children}

          <Footer />
        </div>

        <div className="hidden md:block md:w-1/2 fixed top-0 right-0 h-full">
          <Dithering
            style={{ height: "100%", width: "100%" }}
            colorBack={theme === "dark" ? "hsl(0, 0%, 4%)" : "hsl(0, 0%, 100%)"}
            colorFront={theme === "dark" ? "hsl(320, 100%, 70%)" : "hsl(220, 100%, 70%)"}
            shape="warp"
            type="4x4"
            size={3}
            offsetX={0}
            offsetY={0}
            scale={0.8}
            rotation={0}
            speed={0.1}
          />
        </div>
      </div>
    </main>
  )
}

export default Layout