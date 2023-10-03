import Link from "next/link";
import { EnvelopeSimple, LinkedinLogo, GithubLogo, InstagramLogo } from "@phosphor-icons/react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type SocialMedia = {
  icon: JSX.Element;
  link?: string;
  tooltip: JSX.Element;
}

const socialMedia: SocialMedia[] = [
  {
    icon: <EnvelopeSimple size={20} />,
    tooltip: <p>Click to copy <strong>yandaagil@gmail.com</strong></p>
  },
  {
    icon: <LinkedinLogo size={20} />,
    link: "https://www.linkedin.com/in/yandaagil/",
    tooltip: <p>Connect me on <strong>LinkedIn</strong></p>
  },
  {
    icon: <GithubLogo size={20} />,
    link: "https://www.github.com/yandaagil",
    tooltip: <p>See my repo on <strong>GitHub</strong></p>
  },
  {
    icon: <InstagramLogo size={20} />,
    link: "https://www.instagram.com/yandaagil",
    tooltip: <p>Follow me on <strong>Instagram</strong></p>
  },
]

const Footer = () => {
  const handleCopy = () => {
    const emailAddress: string = "yandaagil@gmail.com";
    navigator.clipboard.writeText(emailAddress);
  };

  return (
    <footer>
      <div className="w-4/5 my-0 mx-auto flex flex-col justify-center min-[2200px]:w-7/12">
        <div className="py-5 px-0 flex flex-row justify-between">
          <div className="flex flex-row items-center">
            {socialMedia.map((social, index) => (
              <TooltipProvider key={index}>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <Link
                      href={social.link ?? ""}
                      className="flex items-center mr-6 text-foreground cursor-pointer relative"
                      target="__blank"
                      onClick={index === 0 && handleCopy}
                    >
                      {social.icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent>
                    {social.tooltip}
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ))}
          </div>
          <p className="text-foreground text-sm lg:text-base">@yandaagil</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
