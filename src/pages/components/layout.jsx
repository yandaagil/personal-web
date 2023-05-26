import Link from "next/link";
import Title from "./title";
import Footer from "../components/footer";

const Layout = (props) => {
  return (
    <>
      <Title title={props.title} />

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
              <li className="breadcrumbs-item">
                <Link href="" className="breadcrumbs-content">
                  <span>{props.title}</span>
                </Link>
              </li>
            </ul>
            <h className="project-title">{props.title}</h>
            <p className="project-desc">{props.desc}</p>
            <div className="button-container">
              <Link href="" className="button" target="__blank">
                Source Code
              </Link>
              <Link href="" className="button preview" target="__blank">
                Live Preview
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Layout;
