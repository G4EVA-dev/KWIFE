import { ARTISTS } from "../artists";
import ArtistCard from "./ArtistCard";

function Afropop() {
  const afropopArtists = ARTISTS.artists
    .filter((artist) => artist.niche === "Afropop")
    .slice(0, 5);

  return (
    <div
      className="overflow-x-auto whitespace-nowrap py-4 px-2"
      style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
    >
      <h2 className="text-xl font-bold mb-4">Afropop Artists</h2>
      <div
        className="flex space-x-4 justify-around"
        style={{ paddingBottom: "20px" }}
      >
        {afropopArtists.map((artist) => (
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

export default Afropop;
