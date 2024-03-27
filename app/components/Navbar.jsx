import React from "react";
import Link from "next/link";

const listOfLinks = [
  { href: "/client", label: "Client" },
  { href: "/drinks", label: "Drinks" },
  { href: "/tasks", label: "Tasks" },
  { href: "/Prisma-Example", label: "Prisma" },
];
const Navbar = () => {
  return (
    <nav className=" border border-b-1 bg-base-50 shadow-lg py-4">
      <div className="navbar px-8 max-w-6xl mx-auto  flex-col sm:flex-row">
        <Link href="/" className="btn btn-secondary">
          Next.js
        </Link>
        <ul className="menu menu-horizontal md:ml-8 text-black">
          {listOfLinks.map((link) => {
            return (
              <li key={link.href}>
                <Link href={link.href} className="captlize">
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
