// src/components/HeaderTop.tsx

"use client";

import React from "react";
import {
  MapPin,
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
            href="https://www.instagram.com/i.ruqya_hyd/?igsh=MXV6Y2VkMThxc2NpcA%3D%3D"
            target="_blank"
            className="flex gap-2 hover:text-gray-800 border p-2 px-4 rounded-lg bg-slate-800 hover:bg-logo-green duration-200"
          >
            <h1 className="text-white">Instagram</h1>
            <Instagram size={20} className="text-gray-100" />
          </a>
          <a
            href="https://www.youtube.com/@ilmspire_khair"
            target="blank"
            className="flex gap-2 hover:text-gray-800 border p-2 px-4 rounded-lg bg-slate-800 hover:bg-logo-green duration-200"
          >
            <h1 className="text-white">Youtube</h1>
            <Youtube size={20} className="text-gray-100" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
