import Link from "next/link";
import Image from "next/image";
import Title from "@/components/title";
import { projectsList, Project } from "@/projectsList";
import LightGallery from "lightgallery/react";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import lgZoom from "lightgallery/plugins/zoom";
import { GetStaticPaths, GetStaticProps } from "next";
import { Globe, Github } from "lucide-react";

type ProjectDetailProps = {
  project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <>
      <Title title={project.title} />

      <section id={project.slug} className="container mt-10 mb-10 px-4 space-y-9 md:mb-16 md:max-w-2xl">
        <div className="flex items-center justify-between">
          <div className="space-y-3">
            <h1 className="text-2xl font-bold">{project.title}</h1>
            <ul className="flex items-center space-x-2">
              {project.stack.map((tech) => (
                <li key={tech}>
                  <span className="font-normal rounded-md bg-muted px-2 py-1 text-textgrey text-xs">{tech}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-5">
            {project.web &&
              <Link href={project.web} target="__blank" aria-label={`${project.slug} web`}>
                <Globe size={20} className="hover:text-muted-foreground transition-all duration-300 ease-in-out" />
              </Link>
            }
            <Link href={project.repo} target="__blank" aria-label={`${project.slug} repo`}>
              <Github size={20} className="hover:text-muted-foreground transition-all duration-300 ease-in-out" />
            </Link>
          </div>
        </div>

        <article className="space-y-9">
          <p className="font-normal text-textgrey text-sm md:text-base">{project.desc}</p>

          {project.image &&
            <LightGallery plugins={[lgZoom]} mode="lg-fade">
              {project.image.map((img, index) => (
                <Image
                  key={project.title}
                  className={`h-auto w-auto cursor-pointer ${index > 0 && 'mt-5'}`}
                  src={img}
                  alt={project.title}
                  priority
                />
              ))}
            </LightGallery>
          }

          {project.video &&
            <iframe
              src={project.video}
              title="Infinite Scroll.mp4"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-[200px] md:h-[400px]">
            </iframe>
          }

          {project.team &&
            <div className="space-y-3">
              <h2 className="text-xl font-bold">Team</h2>
              <ul className="space-y-5">
                {project.team.map((member, index) => (
                  <Link href={member.link} key={member.name} target="__blank" className="group">
                    <li className="flex items-center justify-between">
                      <div className="flex flex-col space-y-1">
                        <h3 className="font-medium transition-all duration-300 ease-in-out text-sm md:text-base group-hover:opacity-70">
                          {member.name}
                        </h3>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="font-medium transition-all duration-300 ease-in-out text-grey text-sm md:text-base group-hover:opacity-70">
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
  const projects = projectsList();
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ProjectDetailProps> = async ({ params }) => {
  const projects = projectsList();
  const project = projects.find((p) => p.slug === params?.slug);

  return {
    props: {
      project,
    },
  };
};
