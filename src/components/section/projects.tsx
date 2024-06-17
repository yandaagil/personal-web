import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import { ProjectsList } from "@/projectsList";
import { Separator } from "../ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import React from "react";
import SectionLayout from "../layout";

const Projects = () => {
  return (
    <SectionLayout id="projects" title="Projects">
      <ul className="space-y-3">
        {ProjectsList.map(({ title, slug, web, repo }, index) => (
          <li className="flex flex-col space-y-3" key={slug}>
            <div className="flex items-center justify-between">
              <Link href={`/projects/${slug}`} className="w-full">
                <h2 className="font-medium transition-all duration-300 ease-in-out text-sm md:text-base hover:opacity-70">
                  {title}
                </h2>
              </Link>
              <div className="flex items-center space-x-3">
                {web &&
                  <Link href={web} target="__blank" aria-label={`${slug} web`}>
                    <TooltipProvider>
                      <Tooltip delayDuration={0}>
                        <TooltipTrigger asChild>
                          <ExternalLink size={18} className="text-foreground/60 transition-all duration-300 ease-in-out hover:text-primary" />
                        </TooltipTrigger>
                        <TooltipContent>
                          Live Preview
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                }
                <Link href={repo} target="__blank" aria-label={`${slug} repo`}>
                  <TooltipProvider>
                    <Tooltip delayDuration={0}>
                      <TooltipTrigger asChild>
                        <Github size={18} className="text-foreground/60 transition-all duration-300 ease-in-out hover:text-primary" />
                      </TooltipTrigger>
                      <TooltipContent>
                        Repo
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
            {index !== ProjectsList.length - 1 && <Separator />}
          </li>
        ))}
      </ul>
    </SectionLayout>
  );
};

export default Projects;
