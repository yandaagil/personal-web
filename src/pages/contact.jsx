import Navbar from "./components/navbar";
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
            <h1 className="title">Kontak</h1>
            <p className="description">
              Incididunt in cillum magna occaecat nisi qui in exercitation
              labore anim adipisicing amet irure tempor.
            </p>
            <Link href="/contact" className="btn center" target="__blank">
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
      </section>

      <Footer />
    </>
  );
};

export default Contact;
