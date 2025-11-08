"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const links = [
  { name: "Home", href: "/dashboard" },
  { name: "Invoices", href: "/dashboard/invoices" },
  { name: "Customers", href: "/dashboard/customers" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return links.map((link) => {
    const isActive = pathname === link.href;

    return (
      <Link
        key={link.name}
        href={link.href}
        className={clsx(
          "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 focus:bg-sky-100 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 md:flex-none md:justify-start md:p-2 md:px-3",
          {
            "bg-sky-100 text-blue-600": isActive,
          }
        )}
      >
        {link.name}
      </Link>
    );
  });
}

