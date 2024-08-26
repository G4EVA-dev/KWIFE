import { useState } from "react";
import { useLocation } from "react-router";

const ArtistProfile = () => {
  const { state } = useLocation();
  const [cowrieSent, setCowrieSent] = useState(false);

  const sendCowrie = () => {
    setCowrieSent(true);
    setTimeout(() => setCowrieSent(false), 3000);
  };

  return (
    <div className="bg-neutral-900 min-h-screen text-neutral-100 font-sans">
      <header className="bg-gradient-to-b from-green-900 to-neutral-900 p-4 sm:p-8">
        <div className="container mx-auto flex flex-col sm:flex-row items-center">
          <img
            src="/path/to/artist-image.jpg"
            alt="Mballa Elanga"
            className="w-32 h-32 sm:w-48 sm:h-48 rounded-full object-cover border-4 border-amber-500 mb-4 sm:mb-0 sm:mr-8"
          />
          <div className="flex-grow text-center sm:text-left mb-4 sm:mb-0">
            <h1 className="text-4xl sm:text-6xl font-bold mb-2">
              Mballa Elanga
            </h1>
            <p className="text-lg sm:text-xl text-neutral-400">
              Cameroonian Folk Artist
            </p>
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
            {["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"].map(
              (song, index) => (
                <div
                  key={index}
                  className="flex items-center bg-neutral-800 hover:bg-neutral-700 p-4 rounded-lg transition duration-300"
                >
                  <div className="w-12 h-12 bg-neutral-600 rounded-md flex items-center justify-center mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-bold">{song}</h3>
                    <p className="text-sm text-neutral-400">Album Name</p>
                  </div>
                </div>
              )
            )}
          </div>
        </section>

        <section className="mb-8 sm:mb-12">
          <h2 className="text-2xl font-bold mb-4 border-b border-neutral-700 pb-2">
            Albums
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {["Album 1", "Album 2", "Album 3", "Album 4"].map(
              (album, index) => (
                <div key={index} className="flex-shrink-0">
                  <div className="aspect-square bg-neutral-800 rounded-lg mb-2"></div>
                  <h3 className="font-bold truncate">{album}</h3>
                  <p className="text-sm text-neutral-400">2024</p>
                </div>
              )
            )}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-4 border-b border-neutral-700 pb-2">
            About
          </h2>
          <p className="text-base sm:text-lg text-neutral-300">
            Mballa Elanga is a renowned Cameroonian artist dedicated to
            preserving and promoting traditional folk music through modern
            interpretations. With roots deep in the cultural heritage of
            Cameroon, Mballa&lsquo;s music is a bridge between past and present,
            inviting listeners on a journey through the rich tapestry of African
            rhythms and melodies.
          </p>
        </section>
      </main>

      <footer className="bg-neutral-800 text-neutral-400 p-4 sm:p-6 mt-8">
        <div className="container mx-auto text-center sm:text-left">
          <p>&copy; 2024 Mballa Elanga. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default ArtistProfile;
