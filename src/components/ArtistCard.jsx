import React from 'react';

function ArtistCard({ artist }) {
  return (
    <div className="flex-shrink-0 w-40 text-center">
      <img 
        src={artist.image} 
        alt={artist.name} 
        className="w-24 h-24 mx-auto rounded-full object-cover" 
      />
      <h3 className="mt-2 text-sm font-semibold text-green-900">{artist.name}</h3>
      <p className="text-xs text-gray-500">{artist.region}</p>
    </div>
  );
}

export default ArtistCard;
