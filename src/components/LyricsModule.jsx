import { FaHeart, FaShare, FaEllipsisH } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

const LyricsModule = ({ isPublisher }) => {
  const [currentLyrics, setCurrentLyrics] = useState({
    title: "Muntula Moto",
    artist: "RICHARD BONA",
    album: "The Tale",
    year: "2003",
    language: "Douala and Douala",
    lyrics:
      "Mbemb'a muntula moto nye pon maladi\nBodu bwe bwaba jita\nowasi tè mbusa min mimbu mi tombi\nBiya na bodun bwe nde bonam\nBiala bongo wèngè be pon nde maleya\nLonguè le ndè nika\no wemi tè idiba bwa nde munyègè\no leiyè pè besombè ngeya longè",
    translation:
      "The tears of an old man are too sad\nThe road is very long\nIf you dig into the past years\nKnow that old age is a blessing\nYour words are advice to me today\nThat's life\nWhen you wake up in the morning, just be happy\nTeach the young the way of life",
  });

  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="bg-gradient-to-b from-green-800 to-green-900 min-h-screen text-white p-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-2">
            {currentLyrics.title}
          </h1>
          <p className="text-xl text-green-300">{currentLyrics.artist}</p>
          <p className="mt-2 text-green-200">
            Album: {currentLyrics.album} ({currentLyrics.year})
          </p>
          <p className="text-green-200">Language: {currentLyrics.language}</p>
          <p className="mt-4 text-green-200">
            Enjoy traditional music and learn dialects{" "}
            <Link to="/learn">
              <span className="text-yellow-400 cursor-pointer">Here</span>
            </Link>
          </p>
        </header>

        <main className="bg-green-700 bg-opacity-30 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex space-x-4">
              <button className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-full transition">
                <FaHeart className="inline mr-2" /> Like
              </button>
              <button className="bg-green-600 hover:bg-green-500 px-4 py-2 rounded-full transition">
                <FaShare className="inline mr-2" /> Share
              </button>
            </div>
            {isPublisher && (
              <button className="bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-full transition">
                Edit Lyrics
              </button>
            )}
          </div>

          <div className="md:flex md:space-x-8">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-2xl font-semibold mb-4">Original Lyrics</h2>
              <pre className="whitespace-pre-line font-sans">
                {currentLyrics.lyrics}
              </pre>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl font-semibold mb-4">Translation</h2>
              <pre className="whitespace-pre-line font-sans">
                {currentLyrics.translation}
              </pre>
            </div>
          </div>

          {!showMore && (
            <button
              onClick={toggleShowMore}
              className="mt-8 bg-green-600 hover:bg-green-500 px-6 py-2 rounded-full transition block mx-auto"
            >
              See More Lyrics <FaEllipsisH className="inline ml-2" />
            </button>
          )}
        </main>

        {showMore && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Additional lyrics cards would go here */}
            <div className="bg-green-700 bg-opacity-30 rounded-lg p-4 cursor-pointer hover:bg-green-600 transition">
              <h3 className="text-xl font-semibold mb-2">Another Song Title</h3>
              <p className="text-green-300">Artist Name</p>
            </div>
            {/* Repeat for more songs */}
          </div>
        )}
      </div>
    </div>
  );
};

LyricsModule.propTypes = {
  isPublisher: PropTypes.shape({
    isPublisher: PropTypes.string,
  }),
};

export default LyricsModule;
