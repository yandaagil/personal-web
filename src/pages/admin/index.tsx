import NavbarDashboard from "@/components/admin/navbar";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Admin = () => {
  return (
    <>
      <NavbarDashboard />
      <section id="about" className="container mt-16 px-4 space-y-7 md:max-w-2xl">
        <div className="space-y-2">
          <h1 className="text-md font-medium">First Paragraph</h1>
          <p className="font-normal text-textgrey text-sm md:text-base">
            I am a fresh graduate majoring in Informatics Engineering with a focus on Front-end development. Skilled in HTML, CSS, JavaScript, and various front-end frameworks. Proficient in creating visually appealing and user-friendly websites, and have a solid understanding of web design principles, responsive design, and web development best practices.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-md font-medium">Second Paragraph</h1>
          <p className="font-normal text-textgrey text-sm md:text-base">
            I am looking for an internship or work opportunities to gain
            hands-on experience and contribute to real-world projects while
            continuing to develop my skills and knowledge in the field of
            front-end development.
          </p>
        </div>
        <div className="space-y-2">
          <h1 className="text-md font-medium">Resume</h1>
          <p className="font-normal text-textgrey text-sm md:text-base">https://drive.google.com/file/d/1ve6KI4FWd8BIrUowprIIiVQg0AaRy1LS/view?usp=sharing</p>
        </div>
      </section>
    </>
  );
};

export default Admin;
