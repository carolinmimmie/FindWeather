import React from "react";
import Link from "next/link";

interface NavLink {
  label: string;
  url: string;
}

const navLinks: NavLink[] = [
  {
    label: "Today's Weather",
    url: "/",
  },
  {
    label: "Find Weather",
    url: "/search",
  },
  {
    label: "Get in Touch",
    url: "/contact",
  },
];
const Navbar = () => {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h1 className="text-white text-2xl font-semibold">
              Weather<span className="text-yellow-500">App</span>
            </h1>
          </Link>
          <ul className="flex items-center space-x-4 md:space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  href={link.url}
                  className="text-white hover:text-yellow-500 transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
