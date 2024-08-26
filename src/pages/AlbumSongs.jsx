import { useState } from "react";
import { FaPlay, FaPause, FaHeart } from "react-icons/fa";

const AlbumPage = () => {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const album = {
    title: "Echoes of the Rainforest",
    artist: "Mballa Elanga",
    year: "2024",
    coverArt: "/path/to/album-cover.jpg",
    tracks: [
      { id: 1, title: "Sunrise in Bambili", duration: "3:45" },
      { id: 2, title: "Dance of the Baka", duration: "4:12" },
      { id: 3, title: "Douala Nights", duration: "3:58" },
      { id: 4, title: "Rhythms of Mount Cameroon", duration: "5:23" },
      { id: 5, title: "Whispers of the Sanaga", duration: "4:07" },
      { id: 6, title: "Echoes of Ancestors", duration: "6:15" },
      { id: 7, title: "Bamileke Beats", duration: "3:39" },
      { id: 8, title: "Shadows of the Equatorial Forest", duration: "5:51" },
      { id: 9, title: "Lullaby for Yaoundé", duration: "4:33" },
      { id: 10, title: "Finale: One Cameroon", duration: "7:02" },
    ],
  };

  const togglePlay = (trackId) => {
    if (currentTrack === trackId) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(trackId);
      setIsPlaying(true);
    }
  };

  return (
    <div className="bg-gradient-to-b from-green-900 to-neutral-900 min-h-screen text-neutral-100 font-sans p-4 sm:p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col sm:flex-row items-center sm:items-end mb-8">
          <img
            src={album.coverArt}
            alt={album.title}
            className="w-48 h-48 sm:w-64 sm:h-64 object-cover shadow-lg mb-4 sm:mb-0 sm:mr-8"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-2">
              {album.title}
            </h1>
            <p className="text-lg sm:text-xl text-neutral-400 mb-1">
              {album.artist}
            </p>
            <p className="text-neutral-500">
              {album.year} • {album.tracks.length} songs
            </p>
          </div>
        </div>

        <div className="bg-neutral-800 bg-opacity-50 rounded-lg p-4 sm:p-6">
          {album.tracks.map((track) => (
            <div
              key={track.id}
              className="flex items-center hover:bg-neutral-700 p-3 sm:p-4 rounded-md transition duration-300"
            >
              <button
                onClick={() => togglePlay(track.id)}
                className="text-amber-500 mr-3 sm:mr-4 flex-shrink-0"
              >
                {currentTrack === track.id && isPlaying ? (
                  <FaPause />
                ) : (
                  <FaPlay />
                )}
              </button>
              <div className="flex-grow min-w-0">
                <h3 className="font-bold truncate">{track.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 truncate">
                  {album.artist}
                </p>
              </div>
              <button className="text-neutral-400 hover:text-amber-500 transition duration-300 mx-2 sm:mx-4 flex-shrink-0">
                <FaHeart />
              </button>
              <span className="text-neutral-400 text-sm hidden sm:inline">
                {track.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumPage;
