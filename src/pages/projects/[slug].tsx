import Link from "next/link";
import Image from "next/image";
import Title from "@/components/title";
import { projectLists, Project } from "@/components/projectLists";
import LightGallery from "lightgallery/react";
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";
import lgThumbnail from "lightgallery/plugins/thumbnail";
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

      <section
        id={project.slug}
        className="container mt-10 mb-10 px-4 space-y-9 md:mb-16 md:max-w-2xl"
      >
        <div className="flex items-center justify-between">
          <div className="space-y-3">
            <h1 className="text-2xl font-bold">{project.title}</h1>
            <ul className="flex items-center space-x-2">
              {project.stack.map((tech, index) => (
                <li key={index}>
                  <span className="font-extralight rounded-md bg-muted px-2 py-1 text-xs ring-1 ring-inset ring-gray-500/10">{tech}</span>
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
        <p className="font-extralight text-sm md:text-base">{project.desc}</p>
        {project.image &&
          <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
            <Image
              className="h-auto w-auto"
              src={project.image}
              alt={project.title}
              priority
            />
          </LightGallery>
        }
        {project.team &&
          <div className="space-y-3">
            <h2 className="text-xl font-bold">Team</h2>
            <ul className="space-y-5">
              {project.team.map((member, index) => (
                <Link href={member.link} key={index} target="__blank" className="group">
                  <li className="flex items-center justify-between">
                    <div className="flex flex-col space-y-1">
                      <h3 className="transition-all duration-300 ease-in-out text-sm md:text-base group-hover:text-muted-foreground">
                        {member.name}
                      </h3>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className="font-extralight transition-all duration-300 ease-in-out text-muted-foreground text-sm md:text-base group-hover:text-textgrey">
                        {member.role}
                      </span>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        }
      </section>
    </>
  );
};

export default ProjectDetail;

export const getStaticPaths: GetStaticPaths = async () => {
  const projects = projectLists();
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<ProjectDetailProps> = async ({ params }) => {
  const projects = projectLists();
  const project = projects.find((p) => p.slug === params?.slug);

  return {
    props: {
      project,
    },
  };
};
