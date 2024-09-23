// src/components/HeaderTop.tsx

"use client";

import React from "react";
import {
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const HeaderTop: React.FC = () => {
  return (
    <div className="bg-gray-100 text-emerald-700 p-4 py-2 flex justify-between items-center px-2 sm:px-14 w-full">
      <div className="hidden md:flex items-center space-x-4">
        <MapPin />
        <span>Mehdipatnam, Hyderabad, Telangana 500028, India</span>
      </div>
      <div className="flex justify-center items-center space-x-2 w-full md:w-auto">
        <div className="flex space-x-2">
          <a
            href="#"
            className="hover:text-gray-800 border p-2 rounded-lg bg-slate-800 hover:bg-emerald-800 duration-200"
          >
            <Facebook size={20} className="text-gray-100" />
          </a>
          <a
            href="#"
            className="hover:text-gray-800 border p-2 rounded-lg bg-slate-800 hover:bg-emerald-800 duration-200"
          >
            <Twitter size={20} className="text-gray-100" />
          </a>
          <a
            href="#"
            className="hover:text-gray-800 border p-2 rounded-lg bg-slate-800 hover:bg-emerald-800 duration-200"
          >
            <Instagram size={20} className="text-gray-100" />
          </a>
          <a
            href="#"
            className="hover:text-gray-800 border p-2 rounded-lg bg-slate-800 hover:bg-emerald-800 duration-200"
          >
            <Youtube size={20} className="text-gray-100" />
          </a>
        </div>
        <div>
          <a
            href="tel:+1234567890"
            className="flex items-center hover:text-gray-800 pl-2 sm:pl-10"
          >
            <Phone size={20} className="mr-2" />
            234-567-890
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
