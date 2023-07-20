import Link from "next/link";
import { GithubLogo, ArrowSquareOut } from "@phosphor-icons/react";

const Work = () => {
  const lists = [
    {
      title: "Inventory Management",
      desc: "An Inventory Management where you can manage your goods, adding and removing goods, manage stock, view history per item. Made with PHP Native.",
      link: "./projects/inventory",
      repo: "https://github.com/yandaagil/inventory-management",
      web: "",
    },
    {
      title: "Portfolio Website",
      desc: "Incididunt in cillum magna occaecat nisi qui in exercitation labore anim adipisicing amet irure tempor.",
      link: "./projects/portfolio",
      repo: "",
      web: "",
    },
    {
      title: "Todo App",
      desc: "A very simple to do list app made with HTML and JavaScript and styled with CSS.",
      link: "./projects/todo",
      repo: "https://github.com/yandaagil/todoapps",
      web: "https://todoapps-yanda.vercel.app/",
    },
    {
      title: "Bookshelf App",
      desc: "A very simple bookshelf app where you can store your read, made with HTML and JavaScript styled with Bootstrap.",
      link: "./projects/bookshelf",
      repo: "https://github.com/yandaagil/bookshelf-app",
      web: "https://bookshelf-app-yanda.vercel.app/",
    },
    {
      title: "SPPD App",
      desc: "Incididunt in cillum magna occaecat nisi qui in exercitation labore anim adipisicing amet irure tempor.",
      link: "./projects/sppd",
      repo: "",
      web: "",
    },
  ];

  return (
    <section className="section-work">
      <div className="container">
        <div className="work">
          <div className="work-container">
            {lists.map((item, index) => (
              <div className="work-item" key={index}>
                <h3>
                  <Link href={item.link} className="btn">
                    <span>{item.title}</span>
                  </Link>
                </h3>
                <p>{item.desc}</p>
                <div className="links">
                  <Link href={item.link} className="btn-read">
                    <span>Read more</span>
                  </Link>
                  <Link href={item.repo} className="github" target="__blank">
                    <GithubLogo size={20} />
                  </Link>
                  <Link href={item.web} className="arrow" target="__blank">
                    <ArrowSquareOut size={20} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="work-all">
          <div className="text-all">
            <Link href="/projects" className="text">
              <span>See all projects . . .</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
