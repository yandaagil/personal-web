import Link from "next/link";
import { useToast } from "@/components/ui/use-toast"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { socialMedia } from "@/constants/social.constant";

const Header = () => {
  const { toast } = useToast()

  const handleCopy = () => {
    const emailAddress: string = "yandaagil@gmail.com";
    navigator.clipboard.writeText(emailAddress);
    toast({
      title: "email copied to clipboard!",
      description: "yandaagil@gmail.com",
    })
  };

  return (
    <header className="container px-4 mb-10 md:mb-16 md:max-w-2xl">
      <div className="flex items-start justify-between">
        <div className="flex flex-col space-y-1">
          <span className="text-lg font-bold">yandaagil</span>
          <span>software engineer</span>
        </div>
        <div className="flex items-center gap-3">
          {socialMedia.map(({ name, link }) => (
            name === 'email' ? (
              <TooltipProvider key={name}>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <button
                      onClick={handleCopy}
                      className="font-normal text-sm underline underline-offset-2 md:text-base hover:text-primary"
                    >
                      {name}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>click to copy <span className="font-semibold">(yandaagil@gmail.com)</span></p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <Link
                href={link}
                target='_blank'
                key={name}
                aria-label={name}
                className="font-normal text-sm underline underline-offset-2 md:text-base hover:text-primary"
              >
                {name}
              </Link>
            )))}
        </div>
      </div>
    </header>
  )
}

export default Header