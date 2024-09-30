// FaqSearch.tsx

import React, { useState } from "react";
import { Search, X } from "lucide-react"; // Import the Search and Close (X) icons

interface FaqSearchProps {
  onSearch: (query: string) => void;
}

const FaqSearch: React.FC<FaqSearchProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm("");
    onSearch(""); // Clear search when the icon is clicked
  };

  return (
    <div className="max-w-4xl mx-auto mb-4 px-4 relative">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search FAQs..."
        className="w-full p-2 border rounded pr-10 pl-8 focus:border-gray-500 focus:outline-none focus:ring-0" // Add padding for the left icon
      />
      <X
        className="absolute right-14 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
        size={20}
        onClick={clearSearch} // Handle click to clear search
      />
      <Search
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-gray-500" // Position the icon
        size={20} // Adjust size as needed
      />
    </div>
  );
};

export default FaqSearch;
