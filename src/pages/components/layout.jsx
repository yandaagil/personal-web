import Link from "next/link";
import Title from "./title";
import Footer from "../components/footer";

const Layout = (props) => {
  return (
    <>
      <Title title="Yanda Agil | Projects" />

      <section className="hero">
        <div className="container work">
          <div className="project">
            <Link href="/" className="back">
              <span>Back to Home</span>
            </Link>
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
