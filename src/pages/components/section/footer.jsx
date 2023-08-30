import {
  EnvelopeSimpleOpen,
  LinkedinLogo,
  GithubLogo,
  InstagramLogo,
} from "@phosphor-icons/react";
import Tippy from "../tooltip";
import { useState } from "react";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const emailAddress = "yandaagil@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <footer>
      <div className="w-4/5 my-0 mx-auto flex flex-col justify-center 2xl:w-7/12">
        <div className="py-5 px-0 flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <Tippy
              text={
                copied ? (
                  "Email copied!"
                ) : (
                  <div>
                    Click to copy{" "}
                    <span className="font-bold">yandaagil@gmail.com</span>
                  </div>
                )
              }
              element={
                <a
                  className="flex items-center mr-6 text-text cursor-pointer relative"
                  onClick={handleCopy}
                >
                  <EnvelopeSimpleOpen size={20} />
                </a>
              }
            />
            <a
              href="https://www.linkedin.com/in/yandaagil/"
              className="flex items-center mr-6 text-text cursor-pointer relative"
              target="__blank"
            >
              <Tippy
                text={
                  <div>
                    Connect me on <span className="font-bold">LinkedIn</span>
                  </div>
                }
                element={<LinkedinLogo size={20} />}
              />
            </a>
            <a
              href="https://www.github.com/yandaagil"
              className="flex items-center mr-6 text-text cursor-pointer relative"
              target="__blank"
            >
              <Tippy
                text={
                  <div>
                    See my repo on <span className="font-bold">GitHub</span>
                  </div>
                }
                element={<GithubLogo size={20} />}
              />
            </a>
            <a
              href="https://www.instagram.com/yandaagil"
              className="flex items-center mr-6 text-text cursor-pointer relative"
              target="__blank"
            >
              <Tippy
                text={
                  <div>
                    Follow me on <span className="font-bold">Instagram</span>
                  </div>
                }
                element={<InstagramLogo size={20} />}
              />
            </a>
          </div>
          <p className="text-text text-sm lg:text-base">@yandaagil</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
