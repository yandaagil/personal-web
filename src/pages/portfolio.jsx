import Image from "next/image";
import Head from "next/head";
import Footer from "./footer";
import kajian from "../../public/kajian.jpg";
import chat from "../../public/chat.png";

const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Portofolio</title>
      </Head>

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="title smaller">Portofolio</h1>
            <p className="description paragraph">
              Ini adalah beberapa proyek yang pernah saya buat.
            </p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <Image
                  src={kajian}
                  alt="kajian-app"
                  className="portfolio-image"
                ></Image>
                <div className="portfolio-category">Web Application</div>
                <h4 className="portfolio-name">Sistem Manajemen Gudang</h4>
                <p className="portfolio-desc">
                  Lid est laborum et dolorum fuga. Et harum quidem rerum facilis
                  est et expeditasi distinctio. Nam libero tempore, cum soluta
                  nobis est eligendi optio cumque nihilse impedit quo minus id
                  quod amets untra dolor amet sad. Sed ut perspser iciatis unde
                  omnis iste natus error sit voluptatem accusantium doloremque
                  laste. Dolores sadips ipsums sits.
                </p>
                <div className="tag-container">
                  <p className="tag-item">PHP</p>
                  <p className="tag-item">HTML</p>
                  <p className="tag-item">Bootstrap</p>
                </div>
              </div>

              <div className="portfolio-item">
                <Image
                  src={kajian}
                  alt="kajian-app"
                  className="portfolio-image"
                ></Image>
                <div className="portfolio-category">Web Application</div>
                <h4 className="portfolio-name">Aplikasi SPPD</h4>
                <p className="portfolio-desc">
                  Incididunt in cillum magna occaecat nisi qui in exercitation
                  labore anim adipisicing amet irure tempor.
                </p>
                <div className="tag-container">
                  <p className="tag-item">Laravel</p>
                  <p className="tag-item">HTML</p>
                  <p className="tag-item">Bootstrap</p>
                </div>
              </div>

              <div className="portfolio-item">
                <Image
                  src={kajian}
                  alt="kajian-app"
                  className="portfolio-image"
                ></Image>
                <div className="portfolio-category">Landing Page</div>
                <h4 className="portfolio-name">Portfolio Website</h4>
                <p className="portfolio-desc">
                  Incididunt in cillum magna occaecat nisi qui in exercitation
                  labore anim adipisicing amet irure tempor.
                </p>
                <div className="tag-container">
                  <p className="tag-item">ReactJS</p>
                  <p className="tag-item">HTML</p>
                  <p className="tag-item">CSS</p>
                </div>
              </div>

              <div className="portfolio-item">
                <Image
                  src={kajian}
                  alt="kajian-app"
                  className="portfolio-image"
                ></Image>
                <div className="portfolio-category">Landing Page</div>
                <h4 className="portfolio-name">Kajian App</h4>
                <p className="portfolio-desc">
                  Incididunt in cillum magna occaecat nisi qui in exercitation
                  labore anim adipisicing amet irure tempor.
                </p>
                <div className="tag-container">
                  <p className="tag-item">Laravel</p>
                  <p className="tag-item">HTML</p>
                  <p className="tag-item">CSS</p>
                </div>
              </div>

              <div className="portfolio-item">
                <Image
                  src={kajian}
                  alt="kajian-app"
                  className="portfolio-image"
                ></Image>
                <div className="portfolio-category">Landing Page</div>
                <h4 className="portfolio-name">Kajian App</h4>
                <p className="portfolio-desc">
                  Incididunt in cillum magna occaecat nisi qui in exercitation
                  labore anim adipisicing amet irure tempor.
                </p>
                <div className="tag-container">
                  <p className="tag-item">Laravel</p>
                  <p className="tag-item">HTML</p>
                  <p className="tag-item">CSS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Portfolio;
