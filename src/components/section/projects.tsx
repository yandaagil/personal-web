import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { ProjectsList } from "@/constants/projects.constant";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const Projects = () => {
  return (
    <section id="projects" className="space-y-3 mt-8">
      <h2 className="font-medium">Projects</h2>
      <ul className="space-y-1 list-disc pl-5">
        {ProjectsList.map(({ title, repo, web }) => (
          <li key={title}>
            <Link href={repo} target="_blank" className="text-blue-500 hover:text-blue-700">
              {title}
            </Link>
            {/* <div className="flex items-center space-x-3">
              {web &&
                <Link href={web} target="_blank" aria-label={`${title} web`}>
                  <TooltipProvider>
                    <Tooltip delayDuration={0}>
                      <TooltipTrigger asChild>
                        <ExternalLink size={18} className="text-foreground/60 hover:text-primary" />
                      </TooltipTrigger>
                      <TooltipContent>
                        live preview
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              }
            </div> */}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
