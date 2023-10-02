import { useState } from "react";
import { EnvelopeSimpleOpen, LinkedinLogo, GithubLogo, InstagramLogo } from "@phosphor-icons/react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const Footer = () => {
  const [copied, setCopied] = useState<boolean>(false);
  const emailAddress = "yandaagil@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <footer>
      <div className="w-4/5 my-0 mx-auto flex flex-col justify-center min-[2200px]:w-7/12">
        <div className="py-5 px-0 flex flex-row justify-between">
          <div className="flex flex-row items-center">
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <a
                    className="flex items-center mr-6 text-text cursor-pointer relative"
                    onClick={handleCopy}
                  >
                    <EnvelopeSimpleOpen size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Click to copy <strong>yandaagil@gmail.com</strong></p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.linkedin.com/in/yandaagil/"
                    className="flex items-center mr-6 text-text cursor-pointer relative"
                    target="__blank"
                  >
                    <LinkedinLogo size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Connect me on <strong>LinkedIn</strong></p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.github.com/yandaagil"
                    className="flex items-center mr-6 text-text cursor-pointer relative"
                    target="__blank"
                  >
                    <GithubLogo size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>See my repo on <strong>GitHub</strong></p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <a
                    href="https://www.instagram.com/yandaagil"
                    className="flex items-center mr-6 text-text cursor-pointer relative"
                    target="__blank"
                  >
                    <InstagramLogo size={20} />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Follow me on <strong>Instagram</strong></p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <p className="text-text text-sm lg:text-base">@yandaagil</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
