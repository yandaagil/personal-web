import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

type SocialMedia = {
  name: string;
  icon: JSX.Element;
  link?: string;
}

const socialMedia: SocialMedia[] = [
  {
    name: "Email",
    icon: <Mail size={18} className="hover:opacity-70 transition-all duration-300 ease-in-out" />,
  },
  {
    name: "Linkedin",
    icon: <Linkedin size={18} className="hover:opacity-70 transition-all duration-300 ease-in-out" />,
    link: "https://www.linkedin.com/in/yandaagil/",
  },
  {
    name: "Github",
    icon: <Github size={18} className="hover:opacity-70 transition-all duration-300 ease-in-out" />,
    link: "https://www.github.com/yandaagil",
  },
  {
    name: "Instagram",
    icon: <Instagram size={18} className="hover:opacity-70 transition-all duration-300 ease-in-out" />,
    link: "https://www.instagram.com/yandaagil",
  },
]

const Header = () => {
  const { toast } = useToast()

  const handleCopy = () => {
    const emailAddress: string = "yandaagil@gmail.com";
    navigator.clipboard.writeText(emailAddress);
    toast({
      title: "Email copied to clipboard!",
      description: "yandaagil@gmail.com",
    })
  };

  return (
    <header className="container mt-10 px-4 md:mt-16 md:max-w-2xl">
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-1">
          <span className="text-lg font-bold">Yanda Agil</span>
          <span>Front End Developer</span>
        </div>
        <div className="flex items-center gap-5">
          {socialMedia.map((social) => (
            social.name === "Email" ? (
              <TooltipProvider key={social.name}>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <button
                      onClick={handleCopy}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to copy <strong>(yandaagil@gmail.com)</strong></p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <Link
                href={social.link}
                target="_blank"
                key={social.name}
                aria-label={social.name}
              >
                {social.icon}
              </Link>
            )
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header