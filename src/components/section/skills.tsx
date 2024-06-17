import React from 'react'
import { SiJavascript, SiTypescript, SiPhp, SiReact, SiNextdotjs, SiLaravel, SiNodedotjs, SiMysql, SiFirebase, SiMongodb, SiBootstrap, SiTailwindcss, SiChakraui, SiDaisyui, SiMui, SiShadcnui, SiExpress, SiGit, SiGithub } from "@icons-pack/react-simple-icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import SectionLayout from '../layout';

const iconList = [
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-9 h-9 text-foreground/90 hover:text-primary transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-9 h-9 text-foreground/90 hover:text-primary transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "PHP",
    icon: <SiPhp className="w-9 h-9 text-foreground/90 hover:text-primary transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "React JS",
    icon: <SiReact className="w-9 h-9 text-foreground/90 hover:text-primary transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-9 h-9 text-foreground/90 hover:text-primary transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "Laravel",
    icon: <SiLaravel className="w-9 h-9 text-foreground/90 hover:text-primary transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-9 h-9 text-foreground/90 hover:text-primary transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="w-9 h-9 text-foreground/90 hover:text-primary transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="w-9 h-9 text-foreground/90 hover:text-primary transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-9 h-9 text-foreground/90 hover:text-primary transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="w-9 h-9 text-foreground/90 hover:text-primary transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-9 h-9 text-foreground/90 hover:text-primary transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "Chakra UI",
    icon: <SiChakraui className="w-9 h-9 text-foreground/90 hover:text-primary transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "Daisy UI",
    icon: <SiDaisyui className="w-9 h-9 text-foreground/90 hover:text-primary transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "Material UI",
    icon: <SiMui className="w-9 h-9 text-foreground/90 hover:text-primary transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "shadcn UI",
    icon: <SiShadcnui className="w-9 h-9 text-foreground/90 hover:text-primary transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "Express",
    icon: <SiExpress className="w-9 h-9 text-foreground/90 hover:text-primary transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "Git",
    icon: <SiGit className="w-9 h-9 text-foreground/90 hover:text-primary transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "Github",
    icon: <SiGithub className="w-9 h-9 text-foreground/90 hover:text-primary transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
]

const Skills = () => {
  return (
    <SectionLayout id='skills' title='Skills'>
      <ul className="flex flex-wrap gap-8">
        {iconList.map(({ name, icon }) => (
          <li key={name} className="inline-block">
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  {icon}
                </TooltipTrigger>
                <TooltipContent>
                  {name}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </ul>
    </SectionLayout>
  )
}

export default Skills