import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Competition", path: "/competition" },
    { name: "Contact", path: "/contact" },
  ];

  const verticalPages = [
    { name: "Mateng Delivery", path: "/delivery", description: "Fast, reliable local delivery services" },
    { name: "Mateng Discovery", path: "/discovery", description: "Explore and discover your local community" },
    { name: "Mateng Education", path: "/education", description: "Educational programs and competitions" },
    { name: "Mateng Marketplace", path: "/marketplace", description: "Local commerce and vendor platform" },
  ];

  return (
    <nav className="bg-white shadow fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <NavLink to="/" className="flex items-center">
                <span className="text-primary font-bold text-xl">Mateng</span>
                <span className="text-sm ml-1 text-gray-500">Hub Connect</span>
              </NavLink>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navItems.map((item) => (
                item.name === "Services" ? (
                  <NavigationMenu key={item.name}>
                    <NavigationMenuList>
                      <NavigationMenuItem>
                        <NavigationMenuTrigger className="text-gray-600 hover:text-primary transition-colors">
                          Services
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                            <li className="col-span-2">
                              <NavigationMenuLink asChild>
                                <NavLink
                                  to="/services"
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-lg font-medium">All Services</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    Overview of all Mateng Hub Connect services and verticals
                                  </p>
                                </NavLink>
                              </NavigationMenuLink>
                            </li>
                            {verticalPages.map((vertical) => (
                              <li key={vertical.path}>
                                <NavigationMenuLink asChild>
                                  <NavLink
                                    to={vertical.path}
                                    className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                  >
                                    <div className="text-sm font-medium">{vertical.name}</div>
                                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                      {vertical.description}
                                    </p>
                                  </NavLink>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    </NavigationMenuList>
                  </NavigationMenu>
                ) : (
                  <NavLink
                    key={item.name}
                    to={item.path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-primary font-medium"
                        : "text-gray-600 hover:text-primary transition-colors"
                    }
                  >
                    {item.name}
                  </NavLink>
                )
              ))}
              <Button>Get Started</Button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-primary hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-primary"
            >
              <Menu />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              item.name === "Services" ? (
                <div key={item.name} className="space-y-2">
                  <div className="flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-600">
                    Services
                    <ChevronDown size={16} />
                  </div>
                  <div className="pl-4 space-y-1 border-l-2 border-gray-100">
                    <NavLink
                      to="/services"
                      className={({ isActive }) =>
                        `block px-3 py-2 rounded-md text-sm font-medium ${
                          isActive
                            ? "text-primary bg-gray-50"
                            : "text-gray-600 hover:text-primary hover:bg-gray-50"
                        }`
                      }
                      onClick={() => setIsOpen(false)}
                    >
                      All Services
                    </NavLink>
                    {verticalPages.map((vertical) => (
                      <NavLink
                        key={vertical.path}
                        to={vertical.path}
                        className={({ isActive }) =>
                          `block px-3 py-2 rounded-md text-sm font-medium ${
                            isActive
                              ? "text-primary bg-gray-50"
                              : "text-gray-600 hover:text-primary hover:bg-gray-50"
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        {vertical.name}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${
                      isActive
                        ? "text-primary bg-gray-50"
                        : "text-gray-600 hover:text-primary hover:bg-gray-50"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </NavLink>
              )
            ))}
            <div className="px-3 py-2">
              <Button className="w-full">Get Started</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
