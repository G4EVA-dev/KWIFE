

import React from 'react';

function SearchBar({ searchQuery, setSearchQuery }) {
    return (
        <div className="p-4">
            <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md"
            />
        </div>
    );
}

export default SearchBar;

