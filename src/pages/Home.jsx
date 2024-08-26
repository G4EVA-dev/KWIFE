
import React, { useState } from 'react';
import SearchBar from '../components/Searchbar';
import CategoryList from '../components/CategoryList';
import Footer from '../components/Footer';
import Popular from '../components/Popular'; 
import Makossa from '../components/Makossa';
import Afropop from '../components/AfroPop';
import Jazz from '../components/Jazz';
import Bikutsi from '../components/Bikutsi';
import { ARTISTS } from '../ARTISTS';


function Home() {
    
  const [searchQuery, setSearchQuery] = useState('');

  // Combine all artists to allow searching across all sections
  const allArtists = [...ARTISTS.artists];

  // Filter artists based on the search query
  const filteredArtists = allArtists.filter((artist) =>
    artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    artist.niche.toLowerCase().includes(searchQuery.toLowerCase()) ||
    artist.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
        <h2 className='text-xl font-bold text-green-700 p-5 pb-3 mx-2'>KWIFE</h2>
               <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {searchQuery ? (
        <div>
          <h2 className="font-bold text-xl mb-4">Search Results</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredArtists.length > 0 ? (
              filteredArtists.map((artist) => (
                <div key={artist.id}>
                  <img src={artist.image} alt={artist.name} />
                  <div className="p-3 flex-grow flex flex-col">
                    <h3 className="text-xs sm:text-sm font-medium text-gray-900 mb-1 line-clamp-2">{artist.name}</h3>
                    <p>{artist.niche}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No artists found.</p>
            )}
          </div>
        </div>
      ) : (
        <>

          <CategoryList />
          <Popular artists={filteredArtists} />
          <Makossa artists={filteredArtists} />
          <Afropop artists={filteredArtists} />
          <Jazz artists={filteredArtists} />
          <Bikutsi artists={filteredArtists} />
          <Footer />
        </>
      )}
    </div>
  );
}

export default Home;
