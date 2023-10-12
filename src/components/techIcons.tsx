import { SiNextdotjs, SiPrisma, SiMysql, SiTailwindcss, SiPhp, SiBootstrap, SiReact, SiJavascript, SiHtml5, SiVite } from "@icons-pack/react-simple-icons";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import React from "react";

const techList = {
  "Next.js": {
    name: "Next.js",
    icon: <SiNextdotjs />
  },
  "Prisma": {
    name: "Prisma",
    icon: <SiPrisma />
  },
  "MySQL": {
    name: "MySQL",
    icon: <SiMysql />
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />
  },
  "PHP": {
    name: "PHP",
    icon: <SiPhp />
  },
  "Bootstrap": {
    name: "Bootstrap",
    icon: <SiBootstrap />
  },
  "React.js": {
    name: "React.js",
    icon: <SiReact />
  },
  "JavaScript": {
    name: "JavaScript",
    icon: <SiJavascript />
  },
  "HTML": {
    name: "HTML",
    icon: <SiHtml5 />
  },
  "Vite": {
    name: "Vite",
    icon: <SiVite />
  }
}

export type TechListType = keyof typeof techList;

const TechIcons = ({ techs, className }: { techs: TechListType[], className: string }) => {
  return (
    <ul className="flex flex-row gap-5">
      {techs.map((tech, index) => (
        <li key={index}>
          <TooltipProvider>
            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <span className="flex items-center">
                  {React.cloneElement(techList[tech].icon, { className })}
                </span>
              </TooltipTrigger>
              <TooltipContent>
                {techList[tech].name}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </li>
      ))}
    </ul>
  )
}

export default TechIcons;