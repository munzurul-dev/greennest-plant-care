import { useState } from "react";
import { NavLink } from "react-router";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `text-md font-bold transition-colors duration-200 ${
      isActive ? "text-primary" : "hover:text-primary"
    }`;

  return (
    <nav className="relative bg-base px-5 py-4 md:px-10 lg:px-20">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            className="h-10 w-10 object-contain"
            src="https://i.postimg.cc/GmyQc6QW/logo.png"
            alt="GreenNest Logo"
          />

          <h2 className="text-xl font-bold text-text">GreenNest</h2>
        </div>

        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/home" className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/plants" className={navLinkClass}>
            Plants
          </NavLink>

          <NavLink to="/myprofile" className={navLinkClass}>
            My Profile
          </NavLink>
        </div>

        <div className="hidden items-center gap-5 md:flex">
          <button className="cursor-pointer font-bold text-primary transition hover:text-footer">
            Login
          </button>

          <button className="cursor-pointer rounded-xl bg-primary px-5 py-2 font-bold text-white transition hover:bg-footer">
            Register
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer text-text md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 flex flex-col gap-4 border-t border-border pt-4 md:hidden">
          <NavLink
            to="/home"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/plants"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            Plants
          </NavLink>

          <NavLink
            to="/myprofile"
            className={navLinkClass}
            onClick={() => setIsOpen(false)}
          >
            My Profile
          </NavLink>

          <div className="flex gap-3 pt-2">
            <button className="font-bold text-primary">Login</button>

            <button className="rounded-xl bg-primary px-4 py-2 font-bold text-white">
              Register
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
