import Link from "next/link";
import { Github, Globe } from "lucide-react";
import { projectLists } from "@/components/projectLists";
import { Separator } from "../ui/separator";
import React from "react";

const Projects = () => {
  return (
    <section
      id="work"
      className="container mt-16 mb-10 px-4 space-y-5 md:mb-16 md:max-w-2xl"
    >
      <h1 className="text-2xl font-bold">Projects</h1>
      <ul className="space-y-3">
        {projectLists().map((project, index) => (
          <li className="flex flex-col space-y-3" key={index}>
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
            {index !== projectLists().length - 1 && <Separator />}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
