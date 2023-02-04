import Link from "next/link";
import Head from "next/head";
import Footer from "../components/footer";

const Inventory = () => {
  return (
    <>
      <Head>
        <title>Projects | Yanda Agil</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="hero">
        <div className="container work">
          <div className="project">
            <Link href="/" className="back">
              <span>Back to Home</span>
            </Link>
            <h className="project-title">Inventory Management</h>
            <p className="project-desc">
              Lid est laborum et dolorum fuga. Et harum quidem rerum facilis est
              et expeditasi distinctio. Nam libero tempore. Lid est laborum et
              dolorum fuga. Et harum quidem rerum facilis est et expeditasi
              distinctio. Nam libero tempore. Lid est laborum et dolorum fuga.
              Et harum quidem rerum facilis est et expeditasi distinctio. Nam
              libero tempore. Lid est laborum et dolorum fuga. Et harum quidem
              rerum facilis est et expeditasi distinctio. Nam libero tempore.
              Lid est laborum et dolorum fuga. Et harum quidem rerum facilis est
              et expeditasi distinctio. Nam libero tempore. Lid est laborum et
              dolorum fuga. Et harum quidem rerum facilis est et expeditasi
              distinctio. Nam libero tempore.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Inventory;
