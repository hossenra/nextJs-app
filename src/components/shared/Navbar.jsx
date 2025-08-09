"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  // console.log(pathname);
  return (
    <nav className="bg-blue-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-green">
          MySite
        </Link>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-gray-300 transition">
            Home
          </Link>
          <Link
            href="/about"
            className={
              pathname == "/about"
                ? "text-blue-500 underline"
                : "hover:text-gray-300 transition"
            }
          >
            About
          </Link>
          <Link
            href="/counter"
            className={
              pathname == "/counter"
                ? "text-blue-500 underline"
                : "hover:text-gray-300 transition"
            }
          >
            Counter
          </Link>
          <Link
            href="/login"
            className={
              pathname == "/login"
                ? "text-blue-500 underline"
                : "hover:text-gray-300 transition"
            }
          >
            Login
          </Link>
          <Link href="/register" className="hover:text-gray-300 transition">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
