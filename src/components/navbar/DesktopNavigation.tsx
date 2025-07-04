
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
import { navigationItems } from "./navigationConfig";

interface DesktopNavigationProps {
  onNavigate: (path: string) => void;
}

const DesktopNavigation: React.FC<DesktopNavigationProps> = ({ onNavigate }) => {
  return (
    <nav className="hidden md:block">
      <NavigationMenu>
        <NavigationMenuList>
          {navigationItems.map((link) => (
            <NavigationMenuItem key={link.title}>
              {link.subItems ? (
                <>
                  <NavigationMenuTrigger className="text-black font-semibold hover:text-wedding-pink">
                    {link.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {link.subItems.map((service) => (
                        <li key={service.title} className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-gray-700 hover:text-wedding-pink"
                              onClick={(e) => {
                                e.preventDefault();
                                onNavigate(service.href);
                              }}
                            >
                              <div className="text-sm font-medium leading-none">{service.title}</div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <NavigationMenuLink asChild>
                  <Link
                    to={link.href}
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-semibold transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 text-black hover:text-wedding-pink"
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(link.href);
                    }}
                  >
                    {link.title}
                  </Link>
                </NavigationMenuLink>
              )}
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default DesktopNavigation;
