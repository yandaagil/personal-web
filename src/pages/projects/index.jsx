import Link from "next/link";
import Title from "../components/section/title";
import Footer from "../components/section/footer";
import { projectLists } from "../../projectLists";
import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";
import Tippy from "../components/tooltip";
import Cursor from "../components/cursor";

const Projects = () => {
  // const projectLists = [
  //   {
  //     title: "Inventory Management",
  //     desc: "A PHP native and MySQL-based inventory management application with features for adding incoming items, recording outgoing items, efficiently managing stock levels, and maintaining a comprehensive history of item movements for each product.",
  //     link: "./projects/inventory",
  //     repo: "https://github.com/yandaagil/inventory-management",
  //     web: "",
  //   },
  //   {
  //     title: "Star Wars",
  //     desc: "A React.js website that uses APIs to display information about Star Wars characters, planets, and films. Explore the Star Wars universe with ease and learn about your favorite characters, fascinating planets, and iconic films on a single platform.",
  //     link: "./projects/starwars",
  //     repo: "https://github.com/yandaagil/star-wars",
  //     web: "https://star-wars-yanda.vercel.app/",
  //   },
  //   {
  //     title: "Todo App",
  //     desc: "A simple todo list application crafted using HTML, JavaScript, and Bootstrap. Users can effortlessly input a list of tasks along with their respective dates. As tasks are completed, they can be seamlessly moved to the 'Done' section. This user-friendly application streamlines task management and organization.",
  //     link: "./projects/todo",
  //     repo: "https://github.com/yandaagil/todoapps",
  //     web: "https://todoapps-yanda.vercel.app/",
  //   },
  //   {
  //     title: "Bookshelf App",
  //     desc: "An intuitive book management application created using HTML, JavaScript, and Bootstrap. Users can easily add books, including their titles, publication years, and authors, and categorize them into either 'Read' or 'Unread' sections. This application simplifies book organization and tracking, enhancing the reading experience.",
  //     link: "./projects/bookshelf",
  //     repo: "https://github.com/yandaagil/bookshelf-app",
  //     web: "https://bookshelf-app-yanda.vercel.app/",
  //   },
  //   {
  //     title: "Tic~Tac~Toe",
  //     desc: "A basic tic-tac-toe game built using React.js and Vanilla CSS. This game features a history functionality, allowing players to step back to previous moves. Enjoy a classic gaming experience with the ability to track your gameplay and rewind to earlier turns in the match.",
  //     link: "./projects/tictactoe",
  //     repo: "https://github.com/yandaagil/tic-tac-toe",
  //     web: "https://tic-tac-toe-yanda.vercel.app/",
  //   },
  // ];

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
              {projectLists().map((item, index) => (
                <li
                  className={`li pl-10 pb-10 text-text relative border-l-2 border-dashed text-sm before:w-8 lg:text-base lg:before:w-[2.125rem] ${
                    index === projectLists.length - 1
                      ? "border-background"
                      : "border-grey "
                  }`}
                  key={index}
                >
                  <div className="flex items-center">
                    <h3 className="m-0">
                      <Link
                        href={item.link}
                        className="head-link text-sm lg:text-base"
                      >
                        {item.title}
                      </Link>
                    </h3>
                    <Tippy
                      text="Check the source code"
                      element={
                        <Link
                          href={item.repo}
                          className="ml-5 flex items-center"
                          target="__blank"
                        >
                          <GithubLogo size={20} className="text-textgrey" />
                        </Link>
                      }
                    />
                    {item.web !== "" ? (
                      <Tippy
                        text="Visit live preview"
                        element={
                          <Link
                            href={item.web}
                            className="ml-2.5 flex items-center"
                            target="__blank"
                          >
                            <ArrowSquareOut
                              size={20}
                              className="text-textgrey"
                            />
                          </Link>
                        }
                      />
                    ) : null}
                  </div>
                  <p className="mt-4 mb-0 text-sm text-textgrey line-clamp-3 lg:text-base">
                    {item.desc}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Footer />
      <Cursor />
    </>
  );
};

export default Projects;
