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
import TechIcons from "@/components/techIcons";
import { ArrowUpRight } from "@phosphor-icons/react";

type ProjectDetailProps = {
  project: Project;
}

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  return (
    <>
      <Title title={project.title} />

      <section className="min-h-screen bg-background border-b-[1px] border-solid border-muted">
        <div className="w-4/5 min-h-screen my-0 mx-auto flex flex-col justify-start lg:w-11/12 2xl:w-7/12">
          <div className="flex flex-col pt-10 pb-20 min-h-screen lg:border-l-[1px] lg:border-solid lg:border-muted lg:px-20">
            <ul className="mb-10 flex list-none p-0 gap-3">
              <li className="text-sm text-textgrey before:content-none before:mr-0 lg:text-base">
                <Link href="/" className="text-textgrey ">
                  <span className="text-textgrey transition-all duration-100 ease-in-out hover:text-grey">Home</span>
                </Link>
              </li>
              <li className="text-sm text-textgrey before:content-['/'] before:mr-2.5 lg:text-base">
                <Link href="/projects" className="text-textgrey">
                  <span className="text-textgrey transition-all duration-100 ease-in-out hover:text-grey">Projects</span>
                </Link>
              </li>
              <li className="text-sm text-textgrey before:content-['/'] before:mr-2.5 lg:text-base">
                <Link href="" className="text-textgrey hover:text-foreground">
                  <span className="text-textgrey transition-all duration-100 ease-in-out hover:text-grey">{project.title}</span>
                </Link>
              </li>
            </ul>
            <h2 className="x-0 mt-0 mb-5 text-foreground font-bold text-4xl lg:text-6xl">
              {project.title}
            </h2>
            <TechIcons techs={project.stack} className="w-5 h-5 text-foreground lg:w-7 lg:h-7" />
            <div className="flex mt-5 mx-0">
              <Link
                href={project.repo}
                className="mr-4 py-2 px-5 text-sm border-[1px] border-solid border-muted hover:bg-muted lg:text-base"
                target="__blank"
              >
                Repository
              </Link>
              {project.web &&
                <Link
                  href={project.web}
                  className="py-2 px-5 text-sm border-[1px] border-solid border-muted hover:bg-muted lg:text-base"
                  target="__blank"
                >
                  Live Preview
                </Link>
              }
            </div>
            <h3 className="mt-10 mb-4 text-foreground font-bold text-2xl lg:text-4xl">
              Description
            </h3>
            <p className="mb-10 text-sm text-foreground lg:text-base">
              {project.desc}
            </p>
            {project.image &&
              <LightGallery speed={500} plugins={[lgThumbnail, lgZoom]}>
                <Image
                  className="h-auto w-auto"
                  src={project.image}
                  alt="Todo App"
                  priority
                />
              </LightGallery>
            }
            {project.team &&
              <>
                <h3 className="mt-10 mb-4 text-foreground font-bold text-2xl lg:text-4xl">
                  Team
                </h3>
                <ul className="flex flex-col gap-2">
                  {project.team.map((member, index) => (
                    <li key={index} className="flex flex-row gap-3">
                      <Link href={member.link} className="m-0 text-foreground head-link font-bold text-sm lg:text-lg" target="__blank">
                        {member.name}
                      </Link>
                      <p className="m-0 flex flex-row gap-3 text-foreground text-sm lg:text-lg before:content-['-']">
                        {member.role}
                      </p>
                      <ArrowUpRight className="text-textgrey" size={20} />
                    </li>
                  ))}
                </ul>
              </>
            }
          </div>
        </div>
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
