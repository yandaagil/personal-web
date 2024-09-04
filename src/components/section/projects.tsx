import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { ProjectsList } from "@/projectsList";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="container px-4 space-y-5 md:max-w-2xl">
      <h2 className="text-lg font-bold">projects</h2>
      <ul className="space-y-4">
        {ProjectsList.map(({ title, repo, web }) => (
          <li className="flex flex-col space-y-3" key={title}>
            <div className="flex items-center justify-between">
              <Link href={repo} className="w-full" target="_blank">
                <h2 className="font-normal text-sm underline underline-offset-2 md:text-base hover:text-blue-700">
                  {title}
                </h2>
              </Link>
              <div className="flex items-center space-x-3">
                {web &&
                  <Link href={web} target="__blank" aria-label={`${title} web`}>
                    <TooltipProvider>
                      <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                          <ExternalLink size={18} className="text-foreground/60 hover:text-blue-700" />
                        </TooltipTrigger>
                        <TooltipContent>
                          live preview
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                }
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
