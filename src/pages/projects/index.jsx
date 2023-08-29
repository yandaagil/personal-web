import Link from "next/link";
import Title from "../components/title";
import Footer from "../components/footer";
import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";

const Projects = () => {
  return (
    <>
      <Title title="Projects" />

      <section className="min-h-screen border-b-[1px] border-solid border-grey">
        <div className="w-4/5 min-h-screen my-0 mx-auto flex flex-col justify-start">
          <div className="flex flex-col pt-10 pb-20 min-h-min lg:border-l-[1px] lg:border-solid lg:border-grey lg:px-20">
            <ul className="mb-10 flex list-none p-0 gap-3">
              <li className="text-sm text-textgrey before:content-none before:mr-0 lg:text-base">
                <Link href="/">
                  <span className="text-textgrey">Home</span>
                </Link>
              </li>
              <li className="text-sm text-textgrey before:content-['/'] before:mr-2.5 lg:text-base">
                <Link href="/projects">
                  <span className="text-textgrey">Projects</span>
                </Link>
              </li>
            </ul>
            <h3 className="mx-0 mt-0 mb-2.5 text-text font-bold text-4xl lg:text-6xl">
              Projects
            </h3>
            <ol className="ol mt-10">
              <li className="li pl-10 pb-10 text-text relative border-l-2 border-dashed border-grey text-sm before:w-8 lg:text-base lg:before:w-[2.125rem]">
                <div className="flex items-center">
                  <h3 className="m-0">
                    <Link
                      href="./projects/inventory"
                      className="head-link text-sm lg:text-base"
                    >
                      Inventory Management
                    </Link>
                  </h3>
                  <Link
                    href="https://github.com/yandaagil/inventory-management"
                    className="ml-5 flex items-center"
                    target="__blank"
                  >
                    <GithubLogo size={20} className="text-textgrey" />
                  </Link>
                  <Link
                    href=""
                    className="ml-2.5 flex items-center"
                    target="__blank"
                  >
                    <ArrowSquareOut size={20} className="text-textgrey" />
                  </Link>
                </div>
                <p className="mt-4 mb-0 text-sm text-textgrey line-clamp-3 lg:text-base">
                  An Inventory Management where you can manage your goods,
                  adding and removing goods, manage stock, view history per
                  item. Made with PHP Native. This is a final project for my
                  Pemrograman Web Dinamis subject in college.
                </p>
              </li>
              <li className="li pl-10 pb-10 text-text relative border-l-2 border-dashed border-grey text-sm before:w-8 lg:text-base lg:before:w-[2.125rem]">
                <div className="flex items-center">
                  <h3>
                    <Link
                      href="./projects/portfolio"
                      className="head-link text-sm lg:text-base"
                    >
                      Portfolio Website
                    </Link>
                  </h3>
                  <Link
                    href=""
                    className="ml-5 flex items-center"
                    target="__blank"
                  >
                    <GithubLogo size={20} className="text-textgrey" />
                  </Link>
                  <Link
                    href=""
                    className="ml-2.5 flex items-center"
                    target="__blank"
                  >
                    <ArrowSquareOut size={20} className="text-textgrey" />
                  </Link>
                </div>
                <p className="mt-4 mb-0 text-sm text-textgrey line-clamp-3 lg:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Architecto, et eligendi aliquam ad, consequatur a nisi illum
                  culpa autem voluptates distinctio? Aliquam molestias similique
                  sequi distinctio harum officiis adipisci a?
                </p>
              </li>
              <li className="li pl-10 pb-10 text-text relative border-l-2 border-dashed border-grey text-sm before:w-8 lg:text-base lg:before:w-[2.125rem]">
                <div className="flex items-center">
                  <h3>
                    <Link
                      href="./projects/todo"
                      className="head-link text-sm lg:text-base"
                    >
                      Todo App
                    </Link>
                  </h3>
                  <Link
                    href="https://github.com/yandaagil/todoapps"
                    className="ml-5 flex items-center"
                    target="__blank"
                  >
                    <GithubLogo size={20} className="text-textgrey" />
                  </Link>
                  <Link
                    href="https://todoapps-yanda.vercel.app/"
                    className="ml-2.5 flex items-center"
                    target="__blank"
                  >
                    <ArrowSquareOut size={20} className="text-textgrey" />
                  </Link>
                </div>
                <p className="mt-4 mb-0 text-sm text-textgrey line-clamp-3 lg:text-base">
                  A very simple to do list app made with HTML and JavaScript and
                  styled with CSS. This is a learning outcome from Dicoding
                  Academy.
                </p>
              </li>
              <li className="li pl-10 pb-10 text-text relative border-l-2 border-dashed border-grey text-sm before:w-8 lg:text-base lg:before:w-[2.125rem]">
                <div className="flex items-center">
                  <h3>
                    <Link
                      href="./projects/bookshelf"
                      className="head-link text-sm lg:text-base"
                    >
                      Bookshelf App
                    </Link>
                  </h3>
                  <Link
                    href="https://github.com/yandaagil/bookshelf-app"
                    className="ml-5 flex items-center"
                    target="__blank"
                  >
                    <GithubLogo size={20} className="text-textgrey" />
                  </Link>
                  <Link
                    href="https://bookshelf-app-yanda.vercel.app/"
                    className="ml-2.5 flex items-center"
                    target="__blank"
                  >
                    <ArrowSquareOut size={20} className="text-textgrey" />
                  </Link>
                </div>
                <p className="mt-4 mb-0 text-sm text-textgrey line-clamp-3 lg:text-base">
                  A very simple bookshelf app where you can store your read,
                  made with HTML and JavaScript styled with Bootstrap. This is a
                  learning outcome from Dicoding Academy.
                </p>
              </li>
              <li className="li mb-0 pl-10 pb-0 text-text relative border-l-2 border-dashed border-background text-sm before:w-8 lg:text-base lg:before:w-[2.125rem]">
                <div className="flex items-center">
                  <h3>
                    <Link
                      href="./projects/sppd"
                      className="head-link text-sm lg:text-base"
                    >
                      SPPD App
                    </Link>
                  </h3>
                  <Link
                    href=""
                    className="ml-5 flex items-center"
                    target="__blank"
                  >
                    <GithubLogo size={20} className="text-textgrey" />
                  </Link>
                  <Link
                    href=""
                    className="ml-2.5 flex items-center"
                    target="__blank"
                  >
                    <ArrowSquareOut size={20} className="text-textgrey" />
                  </Link>
                </div>
                <p className="mt-4 mb-0 text-sm text-textgrey line-clamp-3 lg:text-base">
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
