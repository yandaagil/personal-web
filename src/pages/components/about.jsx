const About = () => {
  return (
    <section
      id="about"
      className="w-full border-b-[1px] border-solid border-grey"
    >
      <div className="w-4/5 my-0 mx-auto flex flex-col justify-center 2xl:w-7/12">
        <div className="flex flex-col-reverse lg:flex-row">
          <div className="pt-0 pr-0 pb-20 pl-0 h-full flex flex-col items-center lg:py-20 lg:pr-20">
            <p className="mt-0 mb-10 text-text text-sm lg:text-center lg:text-base">
              I am a fresh graduate majoring in Informatics Engineering with a
              focus on Front-end development. Skilled in HTML, CSS, JavaScript,
              and various front-end frameworks. Proficient in creating visually
              appealing and user-friendly websites, and have a solid
              understanding of web design principles, responsive design, and web
              development best practices.
            </p>
            <p className="mt-0 mb-10 text-text text-sm lg:text-center lg:text-base">
              I am looking for an internship or work opportunities to gain
              hands-on experience and contribute to real-world projects while
              continuing to develop my skills and knowledge in the field of
              front-end development.
            </p>
            <a
              className="py-2 px-5 text-sm font-semibold border-[1px] border-solid hover:bg-text hover:border-[1px] hover:border-solid hover:border-text hover:text-background lg:text-base"
              target="__blank"
              href="https://drive.google.com/file/d/1B2nevIzuf9_NYv6RHb03qFpMAodfbWtH/view?usp=sharing"
            >
              Curriculum Vitae
            </a>
          </div>
          <div className="pt-20 pr-0 pb-10 pl-0 lg:py-20 lg:pl-20 lg:border-l-[1px] lg:border-solid lg:border-text">
            <h2 className="m-0 text-lg font-bold text-text tracking-[5px] uppercase lg:rotate-right lg:text-xl">
              About
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
