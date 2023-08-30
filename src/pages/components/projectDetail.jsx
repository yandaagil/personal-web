import Link from "next/link";
import Image from "next/image";
import Title from "./section/title";
import Footer from "./section/footer";
import Cursor from "./cursor";

const Layout = (props) => {
  return (
    <>
      <Title title={props.title} />

      <section className="min-h-screen bg-background border-b-[1px] border-solid border-grey">
        <div className="w-4/5 min-h-screen my-0 mx-auto flex flex-col justify-start">
          <div className="flex flex-col pt-10 pb-20 min-h-screen lg:border-l-[1px] lg:border-solid lg:border-grey lg:px-20">
            <ul className="mb-10 flex list-none p-0 gap-3">
              <li className="text-sm text-textgrey before:content-none before:mr-0 lg:text-base">
                <Link href="/" className="text-textgrey">
                  <span className="text-textgrey">Home</span>
                </Link>
              </li>
              <li className="text-sm text-textgrey before:content-['/'] before:mr-2.5 lg:text-base">
                <Link href="/projects" className="text-textgrey">
                  <span className="text-textgrey">Projects</span>
                </Link>
              </li>
              <li className="text-sm text-textgrey before:content-['/'] before:mr-2.5 lg:text-base">
                <Link href="" className="text-textgrey hover:text-text">
                  <span className="text-textgrey">{props.title}</span>
                </Link>
              </li>
            </ul>
            <h3 className="x-0 mt-0 mb-2.5 text-text font-bold text-4xl lg:text-6xl">
              {props.title}
            </h3>
            <div className="flex my-5 mx-0">
              <a
                href={props.repo}
                className="mr-4 py-2 px-5 text-sm border-[1px] border-solid border-text hover:bg-text hover:text-background lg:text-base"
                target="__blank"
              >
                Repository
              </a>
              {props.web !== "" ? (
                <a
                  href={props.web ?? ""}
                  className="py-2 px-5 text-sm border-[1px] border-solid border-text hover:bg-text hover:text-background lg:text-base"
                  target="__blank"
                >
                  Live Preview
                </a>
              ) : null}
            </div>
            <p className="mb-4 text-sm text-textgrey lg:text-base">
              {props.desc}
            </p>
            {props.image !== "" ? (
              <Image
                className="h-auto w-auto"
                src={props.image}
                alt="Todo App"
              />
            ) : null}
          </div>
        </div>
      </section>

      <Footer />
      <Cursor />
    </>
  );
};

export default Layout;
