import Link from "next/link";

const Experience = () => {
  return (
    <section className="section-experience">
      <div className="container">
        <div className="experience">
          <div className="experience-left">
            <h2>Experience</h2>
          </div>
          <div className="experience-right">
            <ol>
              <li className="lists">
                <h2>IT Staff and Web Developer</h2>
                <h4>
                  <Link
                    href="https://diskominfo.karanganyarkab.go.id/"
                    className="place"
                    target="__blank"
                  >
                    <span>
                      Dinas Komunikasi dan Informatika Kabupaten Karanganyar
                    </span>
                  </Link>{" "}
                  • Internship
                </h4>
                <h5>Oct 2022 - Nov 2022</h5>
                <ul>
                  <li>Develop SPPD Web Application.</li>
                  <li>Maintaining DISKOMINFO website.</li>
                  <li>Optimize website performance.</li>
                </ul>
              </li>
              <li className="lists last">
                <h2>Front-End Engineer</h2>
                <h4>
                  <Link
                    href="https://www.ruangguru.com/"
                    className="place"
                    target="__blank"
                  >
                    <span>Ruangguru</span>
                  </Link>{" "}
                  • Apprenticeship
                </h4>
                <h5>Feb 2022 - Jul 2022</h5>
                <ul>
                  <li>
                    Build responsive and interactive website applications using
                    the ReactJS framework.
                  </li>
                  <li>
                    Website and earch engine optimization using SEO and Web
                    Performance.
                  </li>
                  <li>Create API and Consume API.</li>
                </ul>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
