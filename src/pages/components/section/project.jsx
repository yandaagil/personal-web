import Link from "next/link";
import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";
import { projectLists } from "../projectLists";
import Tippy from "../tooltip";

const Project = () => {
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
    <section
      id="work"
      className="w-full border-t-[1px] border-b-[1px] border-solid border-grey"
    >
      <div className="w-4/5 my-0 mx-auto flex flex-col justify-center 2xl:w-7/12">
        <div className="flex flex-col pt-20 px-0 pb-0">
          <div className="flex flex-row flex-wrap justify-center w-full ml-0.5 mt-0.5">
            {projectLists.map((item, index) => (
              <div
                className="flex-auto h-auto flex flex-col justify-between p-5 ml-[-2px] mt-[-2px] border-2 border-solid border-text lg:grow lg:shrink lg:basis-1/3 lg:p-10"
                key={index}
              >
                <h3 className="mt-0 mr-auto">
                  <Link
                    href={item.link}
                    className="pb-1 text-sm font-bold head-link lg:text-base"
                  >
                    <span>{item.title}</span>
                  </Link>
                </h3>
                <p className="my-5 text-textgrey text-sm line-clamp-3 lg:text-base">
                  {item.desc}
                </p>
                <div className="flex justify-between items-center">
                  <Link
                    href={item.link}
                    className="flex mr-auto items-center subhead-link text-sm lg:text-base"
                  >
                    <span>Read more</span>
                  </Link>
                  <Tippy
                    text="Check the source code"
                    element={
                      <Link href={item.repo} target="__blank">
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
                          className="ml-2.5"
                          target="__blank"
                        >
                          <ArrowSquareOut size={20} className="text-textgrey" />
                        </Link>
                      }
                    />
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="ml-0.5 pb-20">
          <div className="flex p-5 mx-[-2px] mt-[-2px] mb-0 border-2 border-solid border-text lg:p-10">
            <Link
              href="/projects"
              className="flex mr-auto items-center subhead-link text-sm lg:text-base"
            >
              <span>See all projects . . .</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
