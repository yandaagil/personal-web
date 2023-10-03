const Hero = () => {
  return (
    <section className="h-96 mb-24 lg:min-h-screen">
      <div className="w-4/5 h-full my-0 py-10 mx-auto flex flex-col justify-between lg:w-11/12 min-[2200px]:w-7/12">
        <div className="flex flex-col justify-between items-center lg:flex-row">
          <h4 className="mb-4 text-medium font-bold text-foreground transition-all duration-300 ease-in-out cursor-default hover:tracking-[5px] lg:mb-0">
            yandaagil.
          </h4>
          <ul className="flex flex-row gap-10">
            <li>
              <a href="#work" className="text-medium text-foreground">
                Projects
              </a>
            </li>
            <li>
              <a href="#experience" className="text-medium text-foreground">
                Experience
              </a>
            </li>
            <li>
              <a href="#about" className="text-medium text-foreground">
                About
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-3xl font-semibold text-foreground lg:text-8xl">
            Hi! I&apos;m Yanda
          </h1>
          <h1 className="text-3xl font-semibold text-foreground lg:text-8xl">
            I make website
          </h1>
          <p className="text-medium text-foreground lg:text-2xl">
            Front End Developer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
