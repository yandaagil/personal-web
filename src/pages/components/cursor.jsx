import { useEffect } from "react";

const Cursor = () => {
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
      <div className="inner-cursor md:cursor-none"></div>
      <div className="outer-cursor md:cursor-none"></div>
    </>
  );
};

export default Cursor;
