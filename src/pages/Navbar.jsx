import React from 'react';
import { FiPlus } from 'react-icons/fi';

const Navbar = () => {
    return (
      <nav className="navbar bg-white/70 backdrop-blur-md text-base-content px-4 md:px-10 shadow-sm sticky top-0 z-50">
      <div className="flex-1">
        <h1 className="text-xl md:text-2xl font-bold text-blue-900">
          CS — Ticket System
        </h1>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end md:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white/70 backdrop-blur-md rounded-box w-52 text-sm font-medium"
          >
            <li><a className="hover:text-blue-600">Home</a></li>
            <li><a className="hover:text-blue-600">FAQ</a></li>
            <li><a className="hover:text-blue-600">Changelog</a></li>
            <li><a className="hover:text-blue-600">Blog</a></li>
            <li><a className="hover:text-blue-600">Download</a></li>
            <li><a className="hover:text-blue-600">Contact</a></li>
            <li className="mt-2">
              <button className="btn btn-primary btn-sm bg-blue-700 hover:bg-blue-800 text-white border-none normal-case">
                + New Ticket
              </button>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex items-center gap-4">
          <ul className="menu menu-horizontal p-0 text-sm font-medium">
            <li><a className="hover:text-blue-600">Home</a></li>
            <li><a className="hover:text-blue-600">FAQ</a></li>
            <li><a className="hover:text-blue-600">Changelog</a></li>
            <li><a className="hover:text-blue-600">Blog</a></li>
            <li><a className="hover:text-blue-600">Download</a></li>
            <li><a className="hover:text-blue-600">Contact</a></li>
          </ul>

          <button className="btn btn-primary btn-sm rounded-lg bg-blue-700 hover:bg-blue-800 text-white border-none normal-case px-5 flex items-center gap-1">
  <FiPlus size={16} />
  New Ticket
</button>
        </div>

      </div>
    </nav>
    );
};

export default Navbar;