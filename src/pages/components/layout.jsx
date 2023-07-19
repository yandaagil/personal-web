import Link from "next/link";
import Title from "./title";
import Footer from "../components/footer";
import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";

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
            <h3 className="project-title">{props.title}</h3>
            <div className="button-container">
              <Link href={props.repo} className="button" target="__blank">
                Repository{" "}
                <span>
                  <GithubLogo size={20} />
                </span>
              </Link>
              <Link
                href={props.web}
                className="button preview"
                target="__blank"
              >
                Live Preview{" "}
                <span>
                  <ArrowSquareOut size={20} />
                </span>
              </Link>
            </div>
            <p className="project-desc">{props.desc}</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Layout;
