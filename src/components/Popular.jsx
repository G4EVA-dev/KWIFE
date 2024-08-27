import { ARTISTS } from "../artists";
import ArtistCard from "./ArtistCard";

function Popular() {
  const popularArtists = ARTISTS.artists.slice(0, 5);

  return (
    <div className="mt-4">
      <h1 className="text-[22px] font-bold ">Popular Artists</h1>
      <div
        className="overflow-x-auto whitespace-nowrap py-4 px-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex space-x-4" style={{ paddingBottom: "20px" }}>
          {popularArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>

        <style jsx>{`
          .overflow-x-auto::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Popular;
