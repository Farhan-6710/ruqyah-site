"use client";
// components/Header.tsx

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
 
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex flex-row md:flex-col md:gap-4 items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-emerald-900 md:bg-emerald-gradient border-b border-gray-200 px-6 sm:px-14">
      <div className="flex items-center">
        <Image
          src="/logo-new.png"
          alt="logo-image"
          className="w-24 md:w-44" // Use responsive width classes
          width={180} // This can be kept for non-responsive scenarios
          height={180} // This can be kept for non-responsive scenarios
          style={{ height: "auto" }} // Maintain aspect ratio with CSS
        />
      </div>
      <nav className="hidden md:flex justify-center items-center space-x-6 font-semibold uppercase text-slate-950">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/faq">FAQ&apos;S</Link>
        <Link href="/refference">Refference</Link>
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
          <Link href="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/faq" onClick={toggleMenu}>
            Faqs
          </Link>
          <Link href="/refference" onClick={toggleMenu}>
            Refference
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
