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
      lnk: "./projects/sppd",
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
                  <a href={item.link} className="btn">
                    {item.title}
                  </a>
                </h3>
                <p>{item.desc}</p>
                <a href={item.link} className="link link--arrowed">
                  <span>Read more</span>
                  <svg
                    class="arrow-icon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 32 32"
                  >
                    <g
                      fill="none"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linejoin="round"
                      stroke-miterlimit="10"
                    >
                      <circle
                        class="arrow-icon--circle"
                        cx="16"
                        cy="16"
                        r="15.12"
                      ></circle>
                      <path
                        class="arrow-icon--arrow"
                        d="M16.14 9.93L22.21 16l-6.07 6.07M8.23 16h13.98"
                      ></path>
                    </g>
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
