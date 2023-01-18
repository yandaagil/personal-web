import Navbar from "./components/navbar";
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
            <h1 className="title">Portofolio</h1>
            <p className="description">
              Incididunt in cillum magna occaecat nisi qui in.
            </p>

            <div className="portfolio-wrapper">
              <div className="portfolio-item">
                <Image
                  src={kajian}
                  alt="kajian-app"
                  className="portfolio-image"
                ></Image>

                <h4 className="portfolio-name">Kajian App</h4>
                <div className="portfolio-category">Mobile Dev</div>
              </div>

              <div className="portfolio-item">
                <Image
                  src={chat}
                  alt="chat-app"
                  className="portfolio-image"
                ></Image>

                <h4 className="portfolio-name">Chat App Exploration</h4>
                <div className="portfolio-category">Mobile Dev</div>
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
