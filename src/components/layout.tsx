import { useRouter } from "next/router"
import Header from "./section/header"

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useRouter()

  return (
    <>
      {pathname !== '/404' && <Header />}
      <main className="md:pb-12 space-y-10 md:space-y-16">
        {children}
      </main>
    </>
  )
}

export default Layout