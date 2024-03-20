"use client";

import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/constants/index";
import { Logo } from "@/components/logo";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="container flex space-x-4 items-center py-4 border-b">
      <Logo />
      <ul className="flex space-x-4">
        {navItems?.map((item, i) => (
          <Link
            className={classNames(
              { "text-zinc-900": item?.link === pathname },
              { "text-zinc-500": item?.link !== pathname },
              "hover:text-zinc-800 transition-colors"
            )}
            href={item?.link}
            key={`${item?.label}-${i}`}
          >
            {item?.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
