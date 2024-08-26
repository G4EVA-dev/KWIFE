import React from 'react';
import { ARTISTS } from '../ARTISTS';
import ArtistCard from './ArtistCard';

function Jazz() {
  const jazzArtists = ARTISTS.artists.filter(artist => artist.niche === "Jazz").slice(0, 4);

  return (
    <div className="overflow-x-auto whitespace-nowrap py-4 px-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <h2 className="text-xl font-bold mb-4">Jazz Artists</h2>
      <div className="flex space-x-4" style={{ paddingBottom: '20px' }}>
        {jazzArtists.map((artist) => (
          <ArtistCard key={artist.id} artist={artist} />
        ))}
      </div>
      <style jsx>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default Jazz;