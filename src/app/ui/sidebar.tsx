"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";

const links = [
  { name: "Home", href: "/dashboard" },
  { name: "Invoices", href: "/dashboard/invoices" },
  { name: "Customers", href: "/dashboard/customers" },
];

export default function Sidebar() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/dashboard"
      >
        <div className="w-32 text-white md:w-40">
          <h1 className="text-2xl font-bold">Acme</h1>
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        {links.map((link) => {
          return (
            <NavLink key={link.name} href={link.href}>
              {link.name}
            </NavLink>
          );
        })}
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
      </div>
    </div>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        "flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 focus:bg-sky-100 focus:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 md:flex-none md:justify-start md:p-2 md:px-3",
        {
          "bg-sky-100 text-blue-600": isActive,
        }
      )}
    >
      {children}
    </Link>
  );
}

