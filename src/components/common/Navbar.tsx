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

export default function Navbar() {
  return (
    <div className="w-full bg-white flex gap-8 py-4 px-20">
      <img src="logo.svg" alt="Post Pilot" />
      <NavigationMenu className="ml-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-medium">
              Resources
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <Link to="/resource">Resource</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link to="/docs" className="font-medium">
                Success Stories
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="font-medium">
              Company
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>
                <Link to="/company">Company</Link>
              </NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink>
              <Link to="/pricing" className="font-medium">
                Pricing
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex gap-4">
        <Button size="lg">Login</Button>
        <Button variant="secondary" size="lg">
          Create Free Account
        </Button>
      </div>
    </div>
  );
}
