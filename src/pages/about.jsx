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
            <h1 className="title smaller">Profil</h1>
            <p className="description paragraph">
              Lid est laborum et dolorum fuga. Et harum quidem rerum facilis est
              et expeditasi distinctio. Nam libero tempore, cum soluta nobis est
              eligendi optio cumque nihilse impedit quo minus id quod amets
              untra dolor amet sad. Sed ut perspser iciatis unde omnis iste
              natus error sit voluptatem accusantium doloremque laste. Dolores
              sadips ipsums sits.
            </p>
            <div className="button-container center">
              <Link
                href="https://github.com/yandaagil/personal-web/blob/main/public/cv.pdf"
                className="btn center"
                target="__blank"
              >
                Curriculum Vitae
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
