import { Mail, Linkedin, Github, Instagram, Sun, Moon } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/components/ui/use-toast"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type SocialMedia = {
  name: string;
  icon: JSX.Element;
  link?: string;
}

const socialMedia: SocialMedia[] = [
  {
    name: "Email",
    icon: <Mail size={18} className="text-foreground/60 hover:text-primary transition-all duration-300 ease-in-out" />,
  },
  {
    name: "Linkedin",
    icon: <Linkedin size={18} className="text-foreground/60 hover:text-primary transition-all duration-300 ease-in-out" />,
    link: "https://www.linkedin.com/in/yandaagil/",
  },
  {
    name: "Github",
    icon: <Github size={18} className="text-foreground/60 hover:text-primary transition-all duration-300 ease-in-out" />,
    link: "https://www.github.com/yandaagil",
  },
  {
    name: "Instagram",
    icon: <Instagram size={18} className="text-foreground/60 hover:text-primary transition-all duration-300 ease-in-out" />,
    link: "https://www.instagram.com/yandaagil",
  },
]

const Header = () => {
  const { toast } = useToast()
  const { setTheme } = useTheme()
  const [lightMode, setLightMode] = useState<string>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) setLightMode(savedTheme);
  }, []);

  const toggleLightMode = () => {
    const newTheme = lightMode === 'dark' ? 'light' : 'dark';
    setTheme(newTheme)
    setLightMode(newTheme);
  };

  const handleCopy = () => {
    const emailAddress: string = "yandaagil@gmail.com";
    navigator.clipboard.writeText(emailAddress);
    toast({
      title: "Email copied to clipboard!",
      description: "yandaagil@gmail.com",
    })
  };

  return (
    <header className="container px-4 mb-10 md:mb-16 md:max-w-2xl">
      <div className="flex items-center justify-between">
        <div className="flex flex-col space-y-1">
          <span className="text-lg font-bold">Yanda Agil</span>
          <span>Front End Developer</span>
        </div>
        <div className="flex items-center gap-5">
          {socialMedia.map(({ name, icon, link }) => (
            name === "Email" ? (
              <TooltipProvider key={name}>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <button
                      onClick={handleCopy}
                      aria-label={name}
                    >
                      {icon}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to copy <strong>(yandaagil@gmail.com)</strong></p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <Link
                href={link}
                target="_blank"
                key={name}
                aria-label={name}
              >
                {icon}
              </Link>
            )
          ))}
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <button
                  onClick={toggleLightMode}
                  aria-label="theme"
                >
                  {
                    lightMode === "dark"
                      ? <Sun size={18} className="text-foreground/60 hover:text-primary transition-all duration-300 ease-in-out" />
                      : <Moon size={18} className="text-foreground/60 hover:text-primary transition-all duration-300 ease-in-out" />
                  }
                </button>
              </TooltipTrigger>
              <TooltipContent>
                {lightMode === "dark" ? "Change to light mode" : "Change to dark mode"}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </header>
  )
}

export default Header