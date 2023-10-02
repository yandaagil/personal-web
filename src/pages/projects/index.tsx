import Link from "next/link";
import Title from "@/components/section/title";
import Footer from "@/components/section/footer";
import { projectLists } from "@/components/projectLists";
import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Cursor from "@/components/cursor";

const Projects = () => {
  return (
    <>
      <Title title="Projects" />

      <section className="min-h-screen border-b-[1px] border-solid border-muted">
        <div className="w-4/5 min-h-screen my-0 mx-auto flex flex-col justify-start lg:w-11/12 2xl:w-7/12">
          <div className="flex flex-col pt-10 pb-20 min-h-min lg:border-l-[1px] lg:border-solid lg:border-muted lg:px-20">
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
                  className={`li pl-10 text-text relative border-l-2 border-dashed text-sm before:w-8 lg:text-base lg:before:w-[2.125rem] 
                  ${index === projectLists().length - 1
                      ? "border-background"
                      : "border-grey pb-10"
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
                    <TooltipProvider>
                      <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                          <Link
                            href={item.repo}
                            className="ml-5 flex items-center"
                            target="__blank"
                          >
                            <GithubLogo size={20} className="text-textgrey" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Check the source code</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    {item.web &&
                      <TooltipProvider>
                        <Tooltip delayDuration={0}>
                          <TooltipTrigger asChild>
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
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Visit live preview</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    }
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
