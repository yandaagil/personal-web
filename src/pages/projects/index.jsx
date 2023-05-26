import Link from "next/link";
import Title from "../components/title";
import Footer from "../components/footer";

const Projects = (props) => {
  return (
    <>
      <Title title="Projects" />

      <section className="hero">
        <div className="container work">
          <div className="project">
            <ul className="breadcrumbs">
              <li className="breadcrumbs-item first">
                <Link href="/" className="breadcrumbs-content">
                  <span>Home</span>
                </Link>
              </li>
              <li className="breadcrumbs-item">
                <Link href="/projects" className="breadcrumbs-content">
                  <span>Projects</span>
                </Link>
              </li>
            </ul>
            <ol className="ol">
              <li className="li">
                <h3>
                  <Link href="" className="title">
                    Inventory Management
                  </Link>
                </h3>
                <p>
                  Lid est laborum et dolorum fuga. Et harum quidem rerum facilis
                  est et expeditasi distinctio. Nam libero tempore.
                </p>
              </li>
              <li className="li">
                <h3>
                  <Link href="" className="title">
                    Inventory Management
                  </Link>
                </h3>
                <p>
                  Lid est laborum et dolorum fuga. Et harum quidem rerum facilis
                  est et expeditasi distinctio. Nam libero tempore.
                </p>
              </li>
              <li className="li last">
                <h3>
                  <Link href="" className="title">
                    Inventory Management
                  </Link>
                </h3>
                <p>
                  Lid est laborum et dolorum fuga. Et harum quidem rerum facilis
                  est et expeditasi distinctio. Nam libero tempore.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Projects;
