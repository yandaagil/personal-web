import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NavbarDashboard = () => {
  return (
    <>
      <Title title="Dashboard" />
      <header className="container mt-10 px-4 md:mt-16 md:max-w-2xl">
        <div className="flex items-center justify-between">
          <div className="space-y-5">
            <span className="text-lg font-bold">Dashboard</span>
            <ul className="flex flex-row gap-5">
              <li>
                <Link href="" className="font-medium transition-all duration-300 ease-in-out underline decoration-solid underline-offset-4 decoration-[#5e6365] text-sm md:text-base hover:opacity-70">
                  About
                </Link>
              </li>
              <li>
                <Link href="" className="font-medium transition-all duration-300 ease-in-out underline decoration-solid underline-offset-4 decoration-[#5e6365] text-sm md:text-base hover:opacity-70">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="" className="font-medium transition-all duration-300 ease-in-out underline decoration-solid underline-offset-4 decoration-[#5e6365] text-sm md:text-base hover:opacity-70">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <Button variant="outline">
            Sign Out
          </Button>
        </div>
      </header>
    </>
  );
};

export default NavbarDashboard;
