import Link from "next/link";

const About = () => {
  return (
    <section
      id="about"
      className="container mt-16 px-4 space-y-5 md:max-w-2xl"
    >
      <h1 className="text-2xl font-bold">About</h1>
      <p className="font-normal text-textgrey text-sm md:text-base">
        I am a fresh graduate majoring in Informatics Engineering with a focus on Front-end development. Skilled in HTML, CSS, JavaScript, TypeScript and various front-end frameworks such as React JS and Laravel. Proficient in creating visually appealing and user-friendly websites, and have a strong understanding of web design principles, responsive design, and web development best practices.
      </p>
      <p className="font-normal text-textgrey text-sm md:text-base">
        I am looking for an internship or work opportunities to gain
        hands-on experience and contribute to real-world projects while
        continuing to develop my skills and knowledge in the field of
        front-end development.
      </p>
      <div>
        <Link
          target="__blank"
          href="https://drive.google.com/file/d/1_o9zowb_2UFERO4kyP2WrE9M3_s_JNRK/view?usp=sharing"
        >
          <span className="font-medium transition-all duration-300 ease-in-out underline decoration-solid underline-offset-4 decoration-[#5e6365] text-sm md:text-base hover:opacity-70">
            Resume
          </span>
        </Link>
      </div>
    </section>
  );
};

export default About;
