import Link from "next/link";

type Experience = {
  title: string;
  company: string;
  date: string;
  role: string;
  desc: string[];
}

const experienceLists: Experience[] = [
  {
    title: "IT Staff and Web Developer",
    company: "Dinas Komunikasi dan Informatika Kabupaten Karanganyar",
    date: "Oct 2022 - Nov 2022",
    role: "Internship",
    desc: [
      "Develop SPPD Web Application.",
      "Maintaining DISKOMINFO website.",
      "Optimize website performance.",
    ],
  },
  {
    title: "Front-End Engineer",
    company: "Ruangguru",
    date: "Feb 2022 - Jul 2022",
    role: "Apprenticeship",
    desc: [
      "Build responsive and interactive website applications using the ReactJS framework.",
      "Website and search engine optimization using SEO and Web Performance.",
      "Create API and Consume API.",
    ],
  },
]

const Experiences = () => {
  return (
    <section
      id="experience"
      className="w-full border-b-[1px] border-solid border-muted"
    >
      <div className="w-4/5 my-0 mx-auto flex flex-col justify-center min-[2200px]:w-7/12">
        <div className="flex flex-col lg:flex-row">
          <div className="pt-20 pr-0 pl-0 pb-10 lg:py-20 lg:pr-20 lg:border-r-[1px] lg:border-solid lg:border-muted">
            <h2 className="m-0 text-lg font-bold text-foreground uppercase tracking-[5px] lg:rotate-left lg:text-xl">
              Experience
            </h2>
          </div>
          <div className="pt-0 px-0 pb-20 h-full flex flex-col lg:py-20">
            <ol className="list m-0 pl-0 list-none">
              {experienceLists.map((experience, index) => (
                <li
                  key={index}
                  className={`lists pl-10 text-foreground text-sm relative border-l-2 border-dashed before:w-8 lg:text-base lg:pl-20 lg:before:w-[2.125rem] lg:border-none
                  ${index === experienceLists.length - 1
                      ? "border-background"
                      : "border-muted pb-10"
                    }`}
                >
                  <div className="flex flex-col justify-between lg:flex-row">
                    <h3 className="m-0 font-bold lg:text-lg">
                      {experience.title}
                    </h3>
                    <h4 className="mt-0 mr-0 mb-4 text-textgrey text-sm italic lg:mb-0 lg:text-base">
                      {experience.date}
                    </h4>
                  </div>
                  <h4 className="mt-0 mr-0 mb-4 text-textgrey text-sm lg:text-base">
                    <Link
                      href="https://diskominfo.karanganyarkab.go.id/"
                      target="__blank"
                    >
                      <span className="text-textgrey text-sm before:content-['@'] transition-all duration-100 ease-in-out lg:underline lg:decoration-dotted lg:underline-offset-8 hover:text-grey lg:text-base">
                        {experience.company}
                      </span>
                    </Link>{" "}
                    • {experience.role}
                  </h4>
                  <ul className="pl-5 list-disc text-sm lg:text-base">
                    {experience.desc.map((desc, index) => (
                      <li key={index}>{desc}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
