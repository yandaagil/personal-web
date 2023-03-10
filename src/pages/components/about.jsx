import Link from "next/link";

const About = () => {
  return (
    <section className="section-about">
      <div className="container">
        <div className="about">
          <div className="about-left">
            <h2>About</h2>
          </div>
          <div className="about-right">
            <p>
              I am a final year student majoring in Informatics Engineering with
              a focus on Front-end development. Skilled in HTML, CSS,
              JavaScript, and various front-end frameworks. Proficient in
              creating visually appealing and user-friendly websites, and have a
              solid understanding of web design principles, responsive design,
              and web development best practices.
            </p>
            <p>
              I am looking for an internship or work opportunities to gain
              hands-on experience and contribute to real-world projects while
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
  );
};

export default About;
