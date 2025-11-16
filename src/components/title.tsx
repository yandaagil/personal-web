import Head from "next/head"

const Title = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Personal website of Yanda Agil, a Software Engineer sharing thoughts and projects" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="author" content="Yanda Agil" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content="Personal website of Yanda Agil, a Software Engineer" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <link rel="icon" href="/Favicon.png" />
    </Head>
  )
}

export default Title
