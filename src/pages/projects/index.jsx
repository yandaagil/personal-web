import Link from "next/link";
import Title from "../components/title";
import Footer from "../components/footer";
import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";

const Projects = () => {
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
            <h3 className="project-title">Projects</h3>
            <ol className="ol">
              <li className="li">
                <div className="main-title">
                  <h3>
                    <Link href="./projects/inventory" className="title">
                      Inventory Management
                    </Link>
                  </h3>
                  <Link
                    href="https://github.com/yandaagil/inventory-management"
                    className="github"
                    target="__blank"
                  >
                    <GithubLogo size={20} />
                  </Link>
                  <Link href="" className="arrow" target="__blank">
                    <ArrowSquareOut size={20} />
                  </Link>
                </div>
                <p>
                  An Inventory Management where you can manage your goods,
                  adding and removing goods, manage stock, view history per
                  item. Made with PHP Native. This is a final project for my
                  Pemrograman Web Dinamis subject in college.
                </p>
              </li>
              <li className="li">
                <div className="main-title">
                  <h3>
                    <Link href="./projects/portfolio" className="title">
                      Portfolio Website
                    </Link>
                  </h3>
                  <Link href="" className="github" target="__blank">
                    <GithubLogo size={20} />
                  </Link>
                  <Link href="" className="arrow" target="__blank">
                    <ArrowSquareOut size={20} />
                  </Link>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto, et eligendi aliquam ad, consequatur a nisi illum
                  culpa autem voluptates distinctio? Aliquam molestias similique
                  sequi distinctio harum officiis adipisci a?
                </p>
              </li>
              <li className="li">
                <div className="main-title">
                  <h3>
                    <Link href="./projects/todo" className="title">
                      Todo App
                    </Link>
                  </h3>
                  <Link
                    href="https://github.com/yandaagil/todoapps"
                    className="github"
                    target="__blank"
                  >
                    <GithubLogo size={20} />
                  </Link>
                  <Link
                    href="https://todoapps-yanda.vercel.app/"
                    className="arrow"
                    target="__blank"
                  >
                    <ArrowSquareOut size={20} />
                  </Link>
                </div>
                <p>
                  A very simple to do list app made with HTML and JavaScript and
                  styled with CSS. This is a learning outcome from Dicoding
                  Academy.
                </p>
              </li>
              <li className="li">
                <div className="main-title">
                  <h3>
                    <Link href="./projects/bookshelf" className="title">
                      Bookshelf App
                    </Link>
                  </h3>
                  <Link
                    href="https://github.com/yandaagil/bookshelf-app"
                    className="github"
                    target="__blank"
                  >
                    <GithubLogo size={20} />
                  </Link>
                  <Link
                    href="https://bookshelf-app-yanda.vercel.app/"
                    className="arrow"
                    target="__blank"
                  >
                    <ArrowSquareOut size={20} />
                  </Link>
                </div>
                <p>
                  A very simple bookshelf app where you can store your read,
                  made with HTML and JavaScript styled with Bootstrap. This is a
                  learning outcome from Dicoding Academy.
                </p>
              </li>
              <li className="li last">
                <div className="main-title">
                  <h3>
                    <Link href="./projects/sppd" className="title">
                      SPPD App
                    </Link>
                  </h3>
                  <Link href="" className="github" target="__blank">
                    <GithubLogo size={20} />
                  </Link>
                  <Link href="" className="arrow" target="__blank">
                    <ArrowSquareOut size={20} />
                  </Link>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Soluta, eligendi voluptatum fugit ipsam, quam fuga deleniti,
                  nesciunt sit aliquam suscipit enim. Minima facilis nihil sed
                  iusto voluptatibus. Nam, iure voluptatibus.
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
