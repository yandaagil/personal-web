const Footer = () => {
  return (
    <footer className="container">
      <div>
        <a href="https://github.com/yandaagil"></a>
        <a href="https://twitter.com/yandaagil"></a>
        <a href="https://instagram.com/yandaagil"></a>
      </div>
      <div>
        2023 © yandaagil | Dibuat dengan{" "}
        <a href="https://nextjs.org/" className="nav-item" target="__blank">
          NextJS
        </a>{" "}
        | Terinspirasi dari{" "}
        <a
          href="https://github.com/athul/archie"
          className="btn"
          target="__blank"
        >
          Archie Theme
        </a>
      </div>
    </footer>
  );
};

export default Footer;
