import { useLocation } from "react-router-dom";
import { useState } from "react";
import ProtectedRoute from "../components/ProtectedRoute";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ArtistProfile = () => {
  const { state } = useLocation();
  const [cowrieSent, setCowrieSent] = useState(false);

  const sendCowrie = () => {
    setCowrieSent(true);
    setTimeout(() => setCowrieSent(false), 3000);
  };

  // Destructure artist data from state
  const { artist } = state || {}; // Use fallback if state is undefined

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <ProtectedRoute>
      <div className="bg-neutral-900 min-h-screen text-neutral-100 font-sans">
        <header className="bg-gradient-to-b from-green-900 to-neutral-900 p-4 sm:p-8">
          <nav className="flex justify-between items-center mb-4 ">
            <button onClick={handleGoBack} className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="h-6 w-6"
                aria-label="Back"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              <span className="text-white text-lg font-semibold">Back</span>
            </button>
          </nav>
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
                  {" "}
                  Enjoy {artist?.name}&apos;s traditional music learn dialects{" "}
                  <Link
                    to="/learn"
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
                className="bg-green-700 flex justify-center items-center text-amber-100 px-5 py-2 rounded-full"
              >
                <img
                  src="/images/cowrie.png"
                  className="w-[20px] h-[20px] "
                  alt="Cowrie"
                />
                Send Cowrie
              </button>
              {cowrieSent && (
                <p className="text-sm text-green-500 mt-2">Cowrie sent!</p>
              )}
            </div>
          </div>
        </header>
        <main className="container mx-auto p-4 sm:p-6">
          <section>
            <h2 className="text-2xl font-bold mb-4 border-b border-neutral-700 pb-2">
              About
            </h2>
            <p className="text-base sm:text-lg text-neutral-300">
              {artist?.description}
            </p>
          </section>
        </main>
        <footer className="bg-neutral-800 text-neutral-400 p-4 sm:p-6 mt-8">
          <div className="container mx-auto text-center sm:text-left">
            <p>
              &copy; {new Date().getFullYear()} {artist?.name}. All rights
              reserved.
            </p>
          </div>
        </footer>
      </div>
    </ProtectedRoute>
  );
};

export default ArtistProfile;
