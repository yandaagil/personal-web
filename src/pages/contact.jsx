import Link from "next/link";
import Head from "next/head";
import Footer from "./footer";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Kontak</title>
      </Head>

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title smaller">Kontak</h1>
            <p className="description paragraph">
              Berikut ini adalah kontak saya yang dapat dihubungi.
            </p>
            <div className="button-container center">
              <Link href="" className="btn center" target="">
                Email
              </Link>
              <Link
                href="https://www.linkedin.com/in/yandaagil/"
                className="btn center"
                target="__blank"
              >
                LinkedIn
              </Link>
              <Link
                href="https://github.com/yandaagil"
                className="btn center"
                target="__blank"
              >
                GitHub
              </Link>
              <Link
                href="https://www.instagram.com/yandaagil/"
                className="btn center"
                target="__blank"
              >
                Instagram
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
