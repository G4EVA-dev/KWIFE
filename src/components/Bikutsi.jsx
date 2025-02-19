import { ARTISTS } from "../artists";
import ArtistCard from "./ArtistCard";

function Bikutsi() {
  const bikutsiArtists = ARTISTS.artists
    .filter((artist) => artist.niche === "Bikutsi")
    .slice(0, 5);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Bikutsi Artists</h2>

      <div
        className="overflow-x-auto whitespace-nowrap py-4 px-2"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="flex space-x-4" style={{ paddingBottom: "20px" }}>
          {bikutsiArtists.map((artist) => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Bikutsi;
