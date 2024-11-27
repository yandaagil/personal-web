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
      title: "Email copied to clipboard!",
      description: "yandaagil@gmail.com",
    })
  };

  return (
    <header className="md:pt-12">
      <div className="flex flex-col-reverse sm:flex-row items-start justify-between">
        <div className="flex flex-col space-y-1 mt-3 sm:mt-0">
          <h1 className="font-medium">Yanda Agil</h1>
          <p>Front End Developer</p>
        </div>
        <div className="space-x-3 self-end sm:self-start">
          {socialMedia.map(({ name, link }) => (
            name === 'email' ? (
              <TooltipProvider key={name}>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger asChild>
                    <button
                      onClick={handleCopy}
                      className="text-gray-400 hover:text-blue-500 transition-colors"
                    >
                      {name}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Click to copy <span className="font-semibold">(yandaagil@gmail.com)</span></p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            ) : (
              <Link
                href={link}
                target='_blank'
                key={name}
                aria-label={name}
                className="text-gray-400 hover:text-blue-500 transition-colors"
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