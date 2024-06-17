type SectionLayoutProps = {
  id: string
  title: string
  children: React.ReactNode
}

const SectionLayout = ({ id, title, children }: SectionLayoutProps) => {
  return (
    <section id={id} className="container px-4 space-y-5 md:max-w-2xl">
      <h1 className="text-2xl font-bold">{title}</h1>
      {children}
    </section>
  )
}

export default SectionLayout