import Link from "next/link";
import { navLinks } from "./NavLinks";

export default function Navbar() {
  return (
    <nav className="bg-base-300">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={1}
              className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-[200px] z-10"
            >
              {navLinks}
            </ul>
          </div>
          <Link href={"/"} className="btn btn-ghost text-xl">
            Phone Plaza
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </nav>
  );
}
