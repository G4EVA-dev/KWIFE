import React from "react";

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search for artists..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full text-black p-2 border border-gray-300 rounded-md"
      />
    </div>
  );
}

export default SearchBar;
