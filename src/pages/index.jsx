import Link from "next/link";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yanda Agil</title>
        <meta name="description" content="Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <section className="hero">
        <div className="container">
          <div className="head">
            <h1
              className="head-title glitch is-glitching"
              data-text="Hi! I'm Yanda Agil,"
            >
              Hi! I&apos;m Yanda Agil, <br /> a front-end web developer based in
              Indonesia.
            </h1>
            <p className="head-desc">
              I am a web developer focusing on front-end and web applications.
            </p>
          </div>
        </div>
      </section>

      <main className="main">
        <section className="section-work">
          <div className="container">
            <div className="work">
              <div className="work-container">
                <div className="work-item">
                  <h3>Inventory Management</h3>
                  <p>
                    Lid est laborum et dolorum fuga. Et harum quidem rerum
                    facilis est et expeditasi distinctio. Nam libero tempore.
                  </p>
                  <a
                    href="https://github.com/yandaagil/personal-web/blob/main/public/cv.pdf"
                    className="button"
                    target="__blank"
                  >
                    Read more
                  </a>
                </div>

                <div className="work-item">
                  <h3>Portfolio Website</h3>
                  <p>
                    Incididunt in cillum magna occaecat nisi qui in exercitation
                    labore anim adipisicing amet irure tempor.
                  </p>
                  <a
                    href="https://github.com/yandaagil/personal-web/blob/main/public/cv.pdf"
                    className="button"
                    target="__blank"
                  >
                    Read more
                  </a>
                </div>

                <div className="work-item">
                  <h3>Todo Apps</h3>
                  <p>
                    Incididunt in cillum magna occaecat nisi qui in exercitation
                    labore anim adipisicing amet irure tempor.
                  </p>
                  <a
                    href="https://github.com/yandaagil/personal-web/blob/main/public/cv.pdf"
                    className="button"
                    target="__blank"
                  >
                    Read more
                  </a>
                </div>

                <div className="work-item">
                  <h3>Todo Apps</h3>
                  <p>
                    Incididunt in cillum magna occaecat nisi qui in exercitation
                    labore anim adipisicing amet irure tempor.
                  </p>
                  <a
                    href="https://github.com/yandaagil/personal-web/blob/main/public/cv.pdf"
                    className="button"
                    target="__blank"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-about">
          <div className="container">
            <div className="about">
              <div className="about-left">
                <h2>About</h2>
              </div>
              <div className="about-right">
                <p>
                  I am an undergraduate student majoring in Informatics
                  Engineering with a focus on Front-end development. Skilled in
                  HTML, CSS, JavaScript, and various front-end frameworks.
                  Proficient in creating visually appealing and user-friendly
                  websites, and have a solid understanding of web design
                  principles, responsive design, and web development best
                  practices.
                </p>
                <p>
                  Looking for internship or work opportunities to gain hands-on
                  experience and contribute to real-world projects while
                  continuing to develop my skills and knowledge in the field of
                  front-end development.
                </p>
                <Link
                  href="https://github.com/yandaagil/personal-web/blob/main/public/cv.pdf"
                  className="button"
                  target="__blank"
                >
                  Curriculum Vitae
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="content">
            <div className="button-container">
              <a href="" className="btn" target="">
                Email
              </a>
              <a
                href="https://www.linkedin.com/in/yandaagil/"
                className="btn"
                target="__blank"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/yandaagil"
                className="btn"
                target="__blank"
              >
                GitHub
              </a>
              <a
                href="https://www.instagram.com/yandaagil/"
                className="btn"
                target="__blank"
              >
                Instagram
              </a>
            </div>
            <p>
              Copyright © MMIII @yandaagil • Created with{" "}
              <a href="https://nextjs.org/" className="btn" target="__blank">
                NextJS
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
