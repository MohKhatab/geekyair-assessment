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
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { useRef, useState } from "react";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const { scrollY } = useScroll();
  let oldScroll = useRef<number>(0);

  useMotionValueEvent(scrollY, "change", (y) => {
    if (y - oldScroll.current > 0) {
      setIsHidden(true);
    } else {
      setIsHidden(false);
    }

    oldScroll.current = y;
  });

  return (
    <>
      <motion.div
        animate={isHidden ? "hidden" : "visible"}
        transition={{ ease: "easeInOut" }}
        variants={{
          hidden: {
            y: "-100%",
          },
          visible: {
            y: "0%",
          },
        }}
        className={`w-full bg-white flex gap-8 py-4 px-5 sm:px-10 lg:px-20 fixed z-50`}
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
      </motion.div>
    </>
  );
}
