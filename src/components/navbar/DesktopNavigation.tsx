
import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useNavigationLinks } from "./navigationConfig";

interface DesktopNavigationProps {
  onNavigate: (path: string) => void;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ onNavigate }) => {
  const navLinks = useNavigationLinks();

  return (
    <nav className="hidden md:block">
      <NavigationMenu>
        <NavigationMenuList>
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.title}>
              <NavigationMenuTrigger className="text-wedding-navy hover:text-wedding-pink">
                {link.title}
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  {link.services.map((service) => (
                    <li key={service.name} className="row-span-1">
                      <NavigationMenuLink asChild>
                        <Link
                          to={service.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          onClick={(e) => {
                            e.preventDefault();
                            onNavigate(service.href);
                          }}
                        >
                          <div className="text-sm font-medium leading-none">{service.name}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default DesktopNavigation;
