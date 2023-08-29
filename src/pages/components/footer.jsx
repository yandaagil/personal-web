import {
  EnvelopeSimpleOpen,
  LinkedinLogo,
  GithubLogo,
  InstagramLogo,
} from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer>
      <div className="w-4/5 my-0 mx-auto flex flex-col justify-center 2xl:w-7/12">
        <div className="py-5 px-0 flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <a
              href="mailto:yandaagil@gmail.com"
              className="flex items-center mr-6 text-text cursor-pointer relative"
              target=""
            >
              <EnvelopeSimpleOpen size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/yandaagil/"
              className="flex items-center mr-6 text-text cursor-pointer relative"
              target="__blank"
            >
              <LinkedinLogo size={20} />
            </a>
            <a
              href="https://www.github.com/yandaagil"
              className="flex items-center mr-6 text-text cursor-pointer relative"
              target="__blank"
            >
              <GithubLogo size={20} />
            </a>
            <a
              href="https://www.instagram.com/yandaagil"
              className="flex items-center mr-6 text-text cursor-pointer relative"
              target="__blank"
            >
              <InstagramLogo size={20} />
            </a>
          </div>
          <p className="text-text text-sm lg:text-base">@yandaagil</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
