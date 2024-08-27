import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import AuthModal from './AuthModal';

const isAuthenticated = () => {
  return !!localStorage.getItem('authToken');
}

function ArtistCard({ artist }) {
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleClick = () => {
    if (isAuthenticated()) {
      navigate("/artist-profile", { state: { artist } });
    } else {
      setIsAuthModalOpen(true);
    }
  };

  const handleAuthSuccess = () => {
    setIsAuthModalOpen(false);
    navigate("/artist-profile", { state: { artist } });
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="cursor-pointer flex-shrink-0 w-40 text-center"
      >
        <img
          src={artist.image}
          alt={artist.name}
          className="w-24 h-24 mx-auto rounded-full object-cover"
        />
        <h3 className="mt-2 text-sm font-semibold text-white">
          {artist.name}
        </h3>
        <p className="text-xs text-gray-200">{artist.region}</p>
      </div>
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)}
        onSuccessfulAuth={handleAuthSuccess}
      />
    </>
  );
}

export default ArtistCard;
