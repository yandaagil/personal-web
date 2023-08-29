import { useEffect } from "react";
import Link from "next/link";
import Title from "./components/title";

const NotFound = () => {
  useEffect(() => {
    let innerCursor = document.querySelector(".inner-cursor");
    let outerCursor = document.querySelector(".outer-cursor");

    function moveCursor(e) {
      let x = e.clientX;
      let y = e.clientY;
      innerCursor.style.left = `${x}px`;
      innerCursor.style.top = `${y}px`;
      outerCursor.style.left = `${x}px`;
      outerCursor.style.top = `${y}px`;
    }

    let links = Array.from(document.querySelectorAll("a", "li"));

    links.forEach((link) => {
      link.addEventListener("mouseover", () => {
        outerCursor.classList.add("grow");
      });
      link.addEventListener("mouseleave", () => {
        outerCursor.classList.remove("grow");
      });
    });

    document.addEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      <Title title="X__X" />

      <section className="h-96 lg:min-h-screen error">
        <div className="w-4/5 h-full my-0 py-10 mx-auto flex flex-col items-center justify-center lg:w-11/12 2xl:w-7/12">
          <h1 className="mb-10 text-3xl font-semibold text-text lg:text-6xl">
            😔 | Page Not Found
          </h1>
          <Link href="/" className="font-bold head-link">
            <span>Back to Home</span>
          </Link>
        </div>
      </section>
      <div className="inner-cursor"></div>
      <div className="outer-cursor"></div>
    </>
  );
};

export default NotFound;
