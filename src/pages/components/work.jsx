import Link from "next/link";

const Work = () => {
  const lists = [
    {
      title: "Inventory Management",
      desc: "Lid est laborum et dolorum fuga. Et harum quidem rerum facilis est et expeditasi distinctio. Nam libero tempore.",
      link: "./projects/inventory",
    },
    {
      title: "Portfolio Website",
      desc: "Incididunt in cillum magna occaecat nisi qui in exercitation labore anim adipisicing amet irure tempor.",
      link: "./projects/portfolio",
    },
    {
      title: "Todo App",
      desc: "Incididunt in cillum magna occaecat nisi qui in exercitation labore anim adipisicing amet irure tempor.",
      link: "./projects/todo",
    },
    {
      title: "Chatflow Landing",
      desc: "Incididunt in cillum magna occaecat nisi qui in exercitation labore anim adipisicing amet irure tempor.",
      link: "./projects/chatflow",
    },
    {
      title: "SPPD App",
      desc: "Incididunt in cillum magna occaecat nisi qui in exercitation labore anim adipisicing amet irure tempor.",
      link: "./projects/sppd",
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
                <Link href={item.link} className="btn-read">
                  <span>Read more</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
