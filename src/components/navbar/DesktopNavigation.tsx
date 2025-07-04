
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
        <NavigationMenuList className="space-x-1">
          {navigationItems.map((link) => (
            <NavigationMenuItem key={link.title}>
              {link.subItems ? (
                <>
                  <NavigationMenuTrigger className="text-gray-900 font-semibold hover:text-wedding-pink hover:bg-wedding-pink/5 transition-all duration-300 rounded-lg px-3 py-2 text-sm lg:text-base">
                    {link.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white/95 backdrop-blur-lg shadow-xl border border-gray-200/50 rounded-xl">
                    <ul className="grid w-[400px] gap-2 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      {link.subItems.map((service) => (
                        <li key={service.title} className="row-span-1">
                          <NavigationMenuLink asChild>
                            <Link
                              to={service.href}
                              className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-all duration-300 hover:bg-wedding-pink/10 hover:shadow-md focus:bg-wedding-pink/10 focus:shadow-md text-gray-700 hover:text-wedding-pink border border-transparent hover:border-wedding-pink/20"
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
                    className="group inline-flex h-10 w-max items-center justify-center rounded-lg bg-transparent hover:bg-wedding-pink/5 px-3 py-2 text-sm lg:text-base font-semibold transition-all duration-300 hover:scale-105 focus:bg-wedding-pink/5 focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-gray-900 hover:text-wedding-pink border border-transparent hover:border-wedding-pink/20 hover:shadow-sm"
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
