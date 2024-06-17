type SectionLayoutProps = {
  id: string
  title: string
  children: React.ReactNode
  className?: string
}

const SectionLayout = ({ id, title, children, className }: SectionLayoutProps) => {
  return (
    <section id={id} className={`container mt-16 px-4 space-y-5 md:max-w-2xl ${className}`}>
      <h1 className="text-2xl font-bold">{title}</h1>
      {children}
    </section>
  )
}

export default SectionLayout