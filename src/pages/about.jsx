import Link from "next/link";
import Head from "next/head";
import Footer from "./footer";

const About = () => {
  return (
    <>
      <Head>
        <title>Profil</title>
      </Head>

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title">Profil</h1>
            <p className="description">
              Lid est laborum et dolorum fuga. Et harum quidem rerum facilis est
              et expeditasi distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihilse impedit quo minus id quod amets
              untra dolor amet sad. Sed ut perspser iciatis unde omnis iste
              natus error sit voluptatem accusantium doloremque laste. Dolores
              sadips ipsums sits.
            </p>
            <Link href="public/cv.pdf" className="btn" target="__blank">
              Curriculum Vitae
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
