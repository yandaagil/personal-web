import Title from "./components/title";

const NotFound = () => {
  return (
    <>
      <Title title="X__X" />

      <section className="hero error">
        <div className="container">
          <div className="head">
            <h1
              className="head-title glitch is-glitching"
              data-text="#404 | Not Found"
            >
              #404 | Not Found
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFound;
