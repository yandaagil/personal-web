import Link from "next/link";
import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";
import projectLists from "../projectLists";
import Tippy from "../tooltip";

const Project = () => {
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
