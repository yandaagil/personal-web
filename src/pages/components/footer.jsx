const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <div className="button-container">
            <a href="mailto:yandaagil@gmail.com" className="btn" target="">
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/yandaagil/"
              className="btn"
              target="__blank"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/yandaagil"
              className="btn"
              target="__blank"
            >
              GitHub
            </a>
            <a
              href="https://www.instagram.com/yandaagil/"
              className="btn"
              target="__blank"
            >
              Instagram
            </a>
          </div>
          <p>
            Copyright © MMXXIII @yandaagil • Created with{" "}
            <a href="https://nextjs.org/" className="btn" target="__blank">
              NextJS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
