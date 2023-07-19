import {
  EnvelopeSimpleOpen,
  LinkedinLogo,
  GithubLogo,
  InstagramLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="content">
          <div className="button-container">
            <a href="mailto:yandaagil@gmail.com" className="btn" target="">
              <EnvelopeSimpleOpen size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/yandaagil/"
              className="btn"
              target="__blank"
            >
              <LinkedinLogo size={20} />
            </a>
            <a
              href="https://www.github.com/yandaagil"
              className="btn"
              target="__blank"
            >
              <GithubLogo size={20} />
            </a>
            <a
              href="https://www.instagram.com/yandaagil"
              className="btn"
              target="__blank"
            >
              <InstagramLogo size={20} />
            </a>
          </div>
          <p>@yandaagil</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
