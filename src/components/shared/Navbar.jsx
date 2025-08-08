import Link from "next/link";

const Navbar = () => {
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
          <Link href="/about" className="hover:text-gray-300 transition">
            About
          </Link>
          <Link href="/counter" className="hover:text-gray-300 transition">
            Counter
          </Link>
          <Link href="/login" className="hover:text-gray-300 transition">
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
