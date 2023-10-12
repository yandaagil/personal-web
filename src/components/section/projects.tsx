import Link from "next/link";
import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";
import { projectLists } from "@/components/projectLists";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import TechIcons from "../techIcons";

const Projects = () => {
  return (
    <section
      id="work"
      className="w-full border-t-[1px] border-b-[1px] border-solid border-muted"
    >
      <div className="w-4/5 my-0 mx-auto flex flex-col justify-center min-[2200px]:w-7/12">
        <div className="flex flex-col pt-20 px-0 pb-0">
          <div className="flex flex-row flex-wrap justify-center w-full ml-0.5 mt-0.5">
            {projectLists().slice(0, 6).map((item, index) => (
              <div
                className="flex-auto h-auto flex flex-col justify-between p-5 ml-[-2px] mt-[-2px] border-2 border-solid border-muted lg:grow lg:shrink lg:basis-1/3 lg:p-10"
                key={index}
              >
                <h2 className="mt-0 mr-auto">
                  <Link
                    href={`/projects/${item.slug}`}
                    className="pb-1 text-sm font-bold head-link lg:text-base"
                  >
                    <span>{item.title}</span>
                  </Link>
                </h2>
                <p className="mt-5 mb-2 text-textgrey text-sm line-clamp-3 lg:text-base">
                  {item.desc}
                </p>
                <TechIcons techs={item.stack} className="w-5 h-5 text-textgrey transition-all duration-100 ease-in-out hover:text-foreground" />
                <div className="mt-5 flex justify-between items-center">
                  <Link
                    href={`/projects/${item.slug}`}
                    className="flex mr-auto items-center subhead-link text-sm lg:text-base"
                  >
                    <span>Detailed project</span>
                  </Link>
                  <TooltipProvider>
                    <Tooltip delayDuration={0}>
                      <TooltipTrigger asChild>
                        <Link href={item.repo} target="__blank" aria-label={`${item.title} repo`}>
                          <GithubLogo size={20} className="text-textgrey transition-all duration-100 ease-in-out hover:text-grey" />
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
                            className="ml-2.5"
                            target="__blank"
                            aria-label={`${item.title} live preview`}
                          >
                            <ArrowSquareOut size={20} className="text-textgrey transition-all duration-100 ease-in-out hover:text-grey" />
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Visit live preview</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  }
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="ml-0.5 pb-20">
          <div className="flex p-5 mx-[-2px] mt-[-2px] mb-0 border-2 border-solid border-muted lg:p-10">
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

export default Projects;
