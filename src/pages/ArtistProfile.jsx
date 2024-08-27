import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";

const ArtistProfile = () => {
  const { state } = useLocation();
  const [cowrieSent, setCowrieSent] = useState(false);
  const [songs, setSongs] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [currentSong, setCurrentSong] = useState(null); // Track the current song

  // Fetch songs from the API
  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch("https://nobility-nodejs-backend-deployment.onrender.com/api/songs");
        const data = await response.json();
        setSongs(data);
      } catch (error) {
        console.error("Error fetching songs:", error);
      }
    };

    fetchSongs();
  }, []);

  // Fetch albums from the API
  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await fetch("https://nobility-nodejs-backend-deployment.onrender.com/api/albums");
        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };

    fetchAlbums();
  }, []);

  const sendCowrie = () => {
    setCowrieSent(true);
    setTimeout(() => setCowrieSent(false), 3000);
  };

  // Destructure artist data from state
  const { artist } = state || {}; // Use fallback if state is undefined

  // Helper function to get album cover for a song
  const getAlbumCover = (album) => {
    if (album && album.coverImage) {
      return `https://nobility-nodejs-backend-deployment.onrender.com/${album.coverImage}`;
    }
    return "/path/to/placeholder-image.jpg"; // Fallback image
  };

  // Function to play a selected song
  const playSong = (song) => {
    setCurrentSong(song);
  };

  return (
    <div className="bg-neutral-900 min-h-screen text-neutral-100 font-sans">
      <header className="bg-gradient-to-b from-green-900 to-neutral-900 p-4 sm:p-8">
        <div className="container mx-auto flex flex-col sm:flex-row items-center">
          <img
            src={artist?.image || "/path/to/placeholder-image.jpg"} // Use artist image or placeholder
            alt={artist?.name || "Artist Name"}
            className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-amber-500 mb-4 sm:mb-0 sm:mr-8"
          />
          <div className="flex-grow text-center sm:text-left mb-4 sm:mb-0">
            <h1 className="text-4xl sm:text-6xl font-bold mb-2">
              {artist?.name || "Artist Name"}
            </h1>
            <p className="text-lg sm:text-xl text-neutral-400">
              {artist?.region || "Artist Region"}
            </p>
            <div>
              <p className="text-sm mt-4">
                Enjoy {artist?.name}'s traditional music learn dialects{" "}
                <Link
                  to="/game"
                  className="text font-extrabold text-amber-500"
                >
                  Here
                </Link>
              </p>
            </div>
          </div>
          <div className="text-center sm:text-right">
            <div className="bg-green-700 text-amber-100 px-4 py-2 rounded-full inline-block mb-4">
              Available for hire
            </div>
            <br />
            <button
              onClick={sendCowrie}
              className="bg-amber-500 text-neutral-900 px-6 py-3 rounded-full text-lg font-bold hover:bg-amber-400 transition duration-300"
            >
              Send a Cowrie
            </button>
            {cowrieSent && (
              <p className="text-amber-500 mt-2">Thank you for your support!</p>
            )}
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4 sm:p-8">
        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b border-neutral-700 pb-2">
            Popular
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {songs.length > 0 ? (
              songs.map((song) => (
                <div
                  key={song._id}
                  className="flex items-center bg-neutral-800 hover:bg-neutral-700 p-4 rounded-lg transition duration-300 cursor-pointer"
                  onClick={() => playSong(song)}
                >
                  <img
                    src={getAlbumCover(song.album)}
                    alt={song.album ? song.album.title : "Album Cover"}
                    className="w-12 h-12 rounded-md object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold">{song.title}</h3>
                    <p className="text-sm text-neutral-400">
                      {song.album ? song.album.title : "Unknown Album"}
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <p>No popular songs available.</p>
            )}
          </div>
        </section>

        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b border-neutral-700 pb-2">
            Albums
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {albums.length > 0 ? (
              albums.map((album) => (
                <div key={album._id} className="flex-shrink-0">
                  <img
                    src={`https://nobility-nodejs-backend-deployment.onrender.com/${album.coverImage}`}
                    alt={album.title}
                    className="aspect-square bg-neutral-800 rounded-lg mb-2 object-cover"
                  />
                  <h3 className="font-bold truncate">{album.title}</h3>
                  <p className="text-sm text-neutral-400">
                    {new Date(album.releaseDate).getFullYear()}
                  </p>
                </div>
              ))
            ) : (
              <p>No albums available.</p>
            )}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 border-b border-neutral-700 pb-2">
            About
          </h2>
          <p className="text-base sm:text-lg text-neutral-300">
            {artist?.name} is a renowned Cameroonian artist dedicated to
            preserving and promoting traditional folk music through modern
            interpretations. With roots deep in the cultural heritage of
            Cameroon, {artist?.name}&lsquo;s music is a bridge between past and
            present, inviting listeners on a journey through the rich tapestry
            of African rhythms and melodies.
          </p>
        </section>
      </main>

      <footer className="bg-neutral-800 text-neutral-400 p-4 sm:p-6 mt-8">
        <div className="container mx-auto text-center sm:text-left">
          <p>&copy; 2024 {artist?.name}. All rights reserved.</p>
        </div>
      </footer>

      {/* Music Player */}
      {currentSong && (
        <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 text-neutral-100 p-4 flex items-center justify-between border-t border-neutral-700">
          <div className="flex items-center">
            <img
              src={getAlbumCover(currentSong.album)}
              alt={currentSong.album ? currentSong.album.title : "Album Cover"}
              className="w-12 h-12 sm:w-16 sm:h-16 rounded-md object-cover mr-4"
            />
            <div>
              <h3 className="font-bold text-sm sm:text-base">{currentSong.title}</h3>
              <p className="text-xs sm:text-sm text-neutral-400">
                {currentSong.album ? currentSong.album.title : "Unknown Album"}
              </p>
            </div>
          </div>
          <audio
            controls
            autoPlay
            className="bg-neutral-700 rounded-lg w-full max-w-xs sm:max-w-md"
            src={`https://nobility-nodejs-backend-deployment.onrender.com/${currentSong.audioPath}`}
          />
        </div>
      )}
    </div>
  );
};

export default ArtistProfile;
