import Head from "next/head";

const Title = ({ title }: { title: string }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Portfolio" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Title;
