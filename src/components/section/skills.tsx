import React from 'react'
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiPhp, SiReact, SiNextdotjs, SiLaravel, SiNodedotjs, SiMysql, SiBootstrap, SiTailwindcss, SiExpress, SiGit, SiGithub } from "@icons-pack/react-simple-icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import SectionLayout from '../layout';

const iconList = [
  {
    name: "HTML",
    icon: <SiHtml5 className="w-9 h-9 hover:opacity-70 transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "CSS",
    icon: <SiCss3 className="w-9 h-9 hover:opacity-70 transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="w-9 h-9 hover:opacity-70 transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-9 h-9 hover:opacity-70 transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "PHP",
    icon: <SiPhp className="w-9 h-9 hover:opacity-70 transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "React JS",
    icon: <SiReact className="w-9 h-9 hover:opacity-70 transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-9 h-9 hover:opacity-70 transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "Laravel",
    icon: <SiLaravel className="w-9 h-9 hover:opacity-70 transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs className="w-9 h-9 hover:opacity-70 transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "MySQL",
    icon: <SiMysql className="w-9 h-9 hover:opacity-70 transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "Bootstrap",
    icon: <SiBootstrap className="w-9 h-9 hover:opacity-70 transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-9 h-9 hover:opacity-70 transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "Express",
    icon: <SiExpress className="w-9 h-9 hover:opacity-70 transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "Git",
    icon: <SiGit className="w-9 h-9 hover:opacity-70 transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
  {
    name: "Github",
    icon: <SiGithub className="w-9 h-9 hover:opacity-70 transition-all duration-300 ease-in-out md:w-[48px] md:h-[48px]" />,
  },
]

const Skills = () => {
  return (
    <SectionLayout id='skills' title='Skills' className='mb-10 md:mb-16'>
      <ul className="flex flex-wrap gap-8">
        {iconList.map((icon, index) => (
          <li key={index} className="inline-block">
            <TooltipProvider key={index}>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  {icon.icon}
                </TooltipTrigger>
                <TooltipContent>
                  {icon.name}
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