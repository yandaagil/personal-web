import "@/styles/app.scss";
import { useEffect } from "react";

export default function App({ Component, pageProps }) {
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
      <Component {...pageProps} />
      <div className="inner-cursor"></div>
      <div className="outer-cursor"></div>
    </>
  );
}
