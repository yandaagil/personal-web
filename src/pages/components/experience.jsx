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
              <li>
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
                <p>
                  Lid est laborum et dolorum fuga. Et harum quidem rerum facilis
                  est et expeditasi distinctio. Nam libero tempore. Lid est
                  laborum et dolorum fuga. Et harum quidem rerum facilis est et
                  expeditasi distinctio. Nam libero tempore.
                </p>
              </li>
              <li className="last">
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
                <p>
                  Lid est laborum et dolorum fuga. Et harum quidem rerum facilis
                  est et expeditasi distinctio. Nam libero tempore. Lid est
                  laborum et dolorum fuga. Et harum quidem rerum facilis est et
                  expeditasi distinctio. Nam libero tempore.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
