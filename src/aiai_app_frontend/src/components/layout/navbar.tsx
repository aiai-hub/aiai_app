import { NavLink } from "react-router-dom";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "../ui/button";
import { CircleUser, Menu } from "lucide-react";
import { ModeToggle } from "@/components/ui/darkmode-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { navLinks } from "@/stores/navbarLinks";

export const Navbar = () => {
  return (
    <div className="sticky top-0 flex items-center justify-between gap-4 bg-background px-3">
      {/* desktop nav */}
      <img src="favicon.ico" className="" alt="Logo" />
      <nav className="hidden py-3 w-full flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:justify-center md:gap-5 md:text-sm lg:gap-6">
        {navLinks.map((nav) => (
          <NavLink
            key={nav.links}
            to={nav.links}
            className={({ isActive }) =>
              `dark:text-white   transition-colors mx-3 py-2 px-8 tracking-widest font-sans ${
                isActive ? "bg-primary rounded-lg text-white" : ""
              }`
            }
          >
            {nav.name}
          </NavLink>
        ))}
      </nav>
      {/* end desktop nav */}

      {/* mobile nav */}
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="shrink-0 md:hidden flex justify-end -me-28 md:-me-0"
          >
            <Menu className="h-7 w-7 " />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <nav className="grid gap-6 text-lg font-medium mt-12 text-center">
            {navLinks.map((nav) => (
              <NavLink
                key={nav.links}
                to={nav.links}
                className={({ isActive }) =>
                  `dark:text-white transition-colors mx-3 py-2 px-8 tracking-widest font-sans ${
                    isActive ? "bg-primary rounded-lg text-white" : ""
                  }`
                }
              >
                {nav.name}
              </NavLink>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
      {/* end mobile nav */}

      <div className="flex w-auto items-center gap-2 md:ml-auto">
        <ModeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <CircleUser className="h-5 w-5" />
              <span className="sr-only">Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
