import Link from "next/link";
import { Github, Globe } from "lucide-react";
import { projectsList } from "@/projectsList";
import { Separator } from "../ui/separator";
import React from "react";
import SectionLayout from "../layout";

const Projects = () => {
  return (
    <SectionLayout id="projects" title="Projects" className="mb-10 md:mb-16">
      <ul className="space-y-3">
        {projectsList().map((project, index) => (
          <li className="flex flex-col space-y-3" key={project.title}>
            <div className="flex items-center justify-between">
              <Link href={`/projects/${project.slug}`} className="w-full">
                <h2 className="font-medium transition-all duration-300 ease-in-out text-sm md:text-base hover:opacity-70">
                  {project.title}
                </h2>
              </Link>
              <div className="flex items-center space-x-3">
                {project.web &&
                  <Link href={project.web} target="__blank" aria-label={`${project.slug} web`}>
                    <Globe size={18} className="text-grey transition-all duration-300 ease-in-out hover:text-foreground" />
                  </Link>
                }
                <Link href={project.repo} target="__blank" aria-label={`${project.slug} repo`}>
                  <Github size={18} className="text-grey transition-all duration-300 ease-in-out hover:text-foreground" />
                </Link>
              </div>
            </div>
            {index !== projectsList().length - 1 && <Separator />}
          </li>
        ))}
      </ul>
    </SectionLayout>
  );
};

export default Projects;
