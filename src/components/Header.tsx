"use client";
// components/Header.tsx

import React, { useState } from "react";
import Link from "next/link";

interface HeaderProps {
  logoSrc: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex items-center justify-between p-4 bg-gradient-to-r from-slate-950 to-emerald-800 shadow-lg px-6 sm:px-14">
      <div className="flex items-center">
        <h2 className="text-3xl uppercase font-semibold text-white">
          Logo Here
        </h2>
      </div>
      <nav className="hidden md:flex justify-center items-center space-x-6 font-semibold uppercase text-white">
        <Link href="/">Home</Link>
        <Link href="/">About</Link>
        <Link href="/">FAQ&apos;S</Link>
        <Link href="/">Contact</Link>
        <Link href="/">
          <button className="bg-white text-emerald-600 px-4 py-2 rounded-md hover:bg-gray-200 transition">
            Book an Appointment
          </button>
        </Link>
      </nav>
      <button
        className="md:hidden p-2 text-white"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        &#9776;
      </button>
      <div
        className={`fixed inset-0 z-50 bg-white transform uppercase font-bold text-xl ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300`}
      >
        <button
          className="absolute top-4 right-4 text-2xl lowercase font-thin"
          onClick={toggleMenu}
          aria-label="Close Menu"
        >
          &times;
        </button>
        <nav className="flex flex-col items-center justify-center h-full space-y-4">
          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/" onClick={toggleMenu}>
            Faqs
          </Link>
          <Link href="/" onClick={toggleMenu}>
            Contact
          </Link>
          <Link href="/">
            <button
              className="bg-gradient-to-br from-slate-950 to-emerald-600 text-white px-4 py-2 rounded-md hover:bg-emerald-700 transition"
              onClick={toggleMenu}
            >
              Book an Appointment
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
