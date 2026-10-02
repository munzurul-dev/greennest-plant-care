import { use, useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, UserIcon, X } from "lucide-react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading } = use(AuthContext);

  const navLinkClass = ({ isActive }) =>
    `text-md font-bold transition-colors duration-200 ${
      isActive ? "text-primary" : "hover:text-primary"
    }`;

  const authLinks = loading ? (
    <div className="h-9 w-20 animate-pulse rounded bg-gray-200" />
  ) : user ? (
    <Link
      to="/myprofile"
      className="flex items-center gap-3"
      aria-label="Go to My Profile"
    >
      {user.photoURL ? (
        <img
          src={user.photoURL}
          alt="Profile"
          className="h-9 w-9 rounded-full border border-gray-200 object-cover"
          referrerPolicy="no-referrer"
        />
      ) : (
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200">
          <UserIcon size={20} />
        </div>
      )}
    </Link>
  ) : (
    <div className="flex gap-5">
      <Link
        to="/auth/login"
        className="font-bold text-primary transition hover:text-footer"
      >
        Login
      </Link>
      <Link
        to="/auth/register"
        className="font-bold text-primary transition hover:text-footer"
      >
        Register
      </Link>
    </div>
  );

  return (
    <nav className="relative bg-base px-5 py-4 md:px-10 lg:px-20">
      <div className="flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            className="h-10 w-10 object-contain"
            src="https://i.postimg.cc/GmyQc6QW/logo.png"
            alt="GreenNest Logo"
          />
          <h2 className="text-xl font-bold text-text">GreenNest</h2>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/plants" className={navLinkClass}>
            Plants
          </NavLink>
          <NavLink to="/myprofile" className={navLinkClass}>
            My Profile
          </NavLink>
        </div>

        <div className="hidden items-center gap-5 md:flex">{authLinks}</div>

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
            to="/"
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

          <div onClick={() => setIsOpen(false)}>{authLinks}</div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
