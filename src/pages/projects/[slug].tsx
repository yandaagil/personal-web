import Link from "next/link";
import Image from "next/image";
import Title from "@/components/title";
import { ProjectsList, Project } from "@/projectsList";
import LightGallery from "lightgallery/react";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import lgZoom from "lightgallery/plugins/zoom";
import { GetStaticPaths, GetStaticProps } from "next";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ExternalLink, Github } from "lucide-react";

type ProjectDetailProps = {
  project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const { title, slug, desc, stack, web, repo, image, video, team } = project

  return (
    <>
      <Title title={title} />

      <section id={slug} className="container px-4 space-y-9 md:max-w-2xl">
        <div className="flex items-center justify-between">
          <div className="space-y-3">
            <h1 className="text-2xl font-bold">{title}</h1>
            <ul className="flex items-center space-x-2">
              {stack.map((tech) => (
                <li key={tech}>
                  <span className="font-normal rounded-md bg-muted px-2 py-1 text-xs">{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-5">
            {web &&
              <Link href={web} target="__blank" aria-label={`${slug} web`}>
                <TooltipProvider>
                  <Tooltip delayDuration={0}>
                    <TooltipTrigger asChild>
                      <ExternalLink size={20} className="text-foreground/60 hover:text-primary transition-all duration-300 ease-in-out" />
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
                    <Github size={20} className="text-foreground/60 hover:text-primary transition-all duration-300 ease-in-out" />
                  </TooltipTrigger>
                  <TooltipContent>
                    Repo
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Link>
          </div>
        </div>

        <article className="space-y-9">
          <p className="font-normal text-sm md:text-base">{desc}</p>

          {image &&
            <LightGallery plugins={[lgZoom]} mode="lg-fade">
              {image.map((img, index) => (
                <Image
                  key={title}
                  className={`h-auto w-auto cursor-pointer ${index > 0 && 'mt-5'}`}
                  src={img}
                  alt={title}
                  priority
                />
              ))}
            </LightGallery>
          }

          {video &&
            <iframe
              src={video}
              title="Infinite Scroll.mp4"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-[200px] md:h-[400px]">
            </iframe>
          }

          {team &&
            <div className="space-y-3">
              <h2 className="text-xl font-bold">Team</h2>
              <ul className="space-y-5">
                {team.map((member) => (
                  <Link href={member.link} key={member.name} target="__blank" className="group">
                    <li className="flex items-center justify-between">
                      <div className="flex flex-col space-y-1">
                        <h3 className="font-medium transition-all duration-300 ease-in-out text-sm md:text-base group-hover:opacity-70">
                          {member.name}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="font-medium text-foreground/60 transition-all duration-300 ease-in-out text-sm md:text-base group-hover:opacity-70">
                          {member.role}
                        </span>
                      </div>
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          }
        </article>
      </section>
    </>
  );
};

export default ProjectDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = ProjectsList;
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ProjectDetailProps> = async ({ params }) => {
  const projects = ProjectsList;
  const project = projects.find((p) => p.slug === params?.slug);

  return {
    props: {
      project,
    },
  };
};
