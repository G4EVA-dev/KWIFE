import React from 'react';
import { useNavigate } from 'react-router-dom';

function ArtistCard({ artist }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/profile', { state: { artist } });
  };

  return (
    <div onClick={handleClick} className="cursor-pointer flex-shrink-0 w-40 text-center">
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
