import Head from "next/head";

const Title = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Personal Web" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/Favicon.png" />
    </Head>
  );
};

export default Title;
