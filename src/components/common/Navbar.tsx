import { Link } from "react-router";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import { FaBars, FaChevronRight } from "react-icons/fa";
import { Sheet, SheetContent, SheetFooter, SheetTrigger } from "../ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const controlNavbar = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

      lastScrollY = currentScrollY + 64;
    };

    window.addEventListener("scroll", controlNavbar);

    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  return (
    <>
      <div
        className={`w-full bg-white flex gap-8 py-4 px-5 sm:px-10 lg:px-20 fixed transition-transform duration-300 z-50 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <img src="logo.svg" alt="Post Pilot" />
        <NavigationMenu className="ml-auto hidden xl:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-medium">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Resource</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="font-medium text-nowrap">
                Success Stories
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-medium">
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Company</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink className="font-medium">
                Pricing
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="gap-4 hidden xl:flex">
          <Button size="lg" variant="secondary">
            Login
          </Button>
          <Button size="lg">Create Free Account</Button>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <Button className="xl:hidden ml-auto">
              <FaBars />
            </Button>
          </SheetTrigger>

          <SheetContent side="right">
            <div className="flex flex-col gap-4 px-4 pt-20">
              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="flex items-center gap-2 font-medium">
                    <FaChevronRight /> Resources
                  </AccordionTrigger>
                  <AccordionContent className="ml-8 mt-4">
                    <Link to="/resource" className="text-base">
                      Resource
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link to="/docs" className="font-medium text-nowrap">
                Success Stories
              </Link>

              <Accordion type="single" collapsible>
                <AccordionItem value="item-1">
                  <AccordionTrigger className="flex items-center gap-2 font-medium">
                    <FaChevronRight /> Company
                  </AccordionTrigger>
                  <AccordionContent className="ml-8 mt-4">
                    <Link to="/resource" className="text-base">
                      Company
                    </Link>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <Link to="/pricing" className="font-medium">
                Pricing
              </Link>
            </div>

            <SheetFooter>
              <div className="gap-3 flex flex-col">
                <Button size="lg" variant="secondary">
                  Login
                </Button>
                <Button size="lg">Create Free Account</Button>
              </div>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
