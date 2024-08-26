import { useState } from "react";
import { motion } from "framer-motion";
import {
  Menu,
  Search,
  Home as HomeIcon,
  Music,
  Star,
  Radio,
} from "lucide-react";
import SearchBar from "../components/Searchbar";
import CategoryList from "../components/CategoryList";
import Footer from "../components/Footer";
import Popular from "../components/Popular";
import Makossa from "../components/Makossa";
import Afropop from "../components/Afropop";
import Jazz from "../components/Jazz";
import Bikutsi from "../components/Bikutsi";
import { ARTISTS } from "../artists";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const allArtists = [...ARTISTS.artists];

  const filteredArtists = allArtists.filter(
    (artist) =>
      artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.niche.toLowerCase().includes(searchQuery.toLowerCase()) ||
      artist.region.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sidebarItems = [
    { icon: <HomeIcon />, label: "Home" },
    { icon: <Search />, label: "Search" },
    { icon: <Music />, label: "Library" },
    { icon: <Star />, label: "Favorites" },
    { icon: <Radio />, label: "Radio" },
  ];

  return (
    <div className="flex bg-gradient-to-b from-green-100 to-yellow-100 min-h-screen">
      {/* Sidebar for desktop */}
      <motion.div
        className="hidden md:flex flex-col w-64 bg-green-800 text-white p-4"
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="text-2xl font-bold mb-8">KWIFE</h1>
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center mb-4 cursor-pointer hover:bg-green-700 p-2 rounded"
          >
            {item.icon}
            <span className="ml-2">{item.label}</span>
          </div>
        ))}
      </motion.div>

      {/* Main content */}
      <div className="flex-1 p-4">
        {/* Mobile header */}
        <div className="md:hidden flex justify-between items-center mb-4">
          <Menu
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="cursor-pointer"
          />
          <h1 className="text-2xl font-bold">KWIFE</h1>
          <div className="w-6"></div> {/* Placeholder for balance */}
        </div>

        {/* Mobile sidebar */}
        {isSidebarOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-green-800 text-white p-4 z-50"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-end">
              <Menu
                onClick={() => setIsSidebarOpen(false)}
                className="cursor-pointer"
              />
            </div>
            {sidebarItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center mb-4 cursor-pointer hover:bg-green-700 p-2 rounded"
              >
                {item.icon}
                <span className="ml-2">{item.label}</span>
              </div>
            ))}
          </motion.div>
        )}

        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {searchQuery ? (
          <div>
            <h2 className="font-bold text-2xl mb-4 text-green-800">
              Search Results
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredArtists.length > 0 ? (
                filteredArtists.map((artist) => (
                  <motion.div
                    key={artist.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={artist.image}
                      alt={artist.name}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-3 flex-grow flex flex-col">
                      <h3 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                        {artist.name}
                      </h3>
                      <p className="text-xs text-gray-600">{artist.niche}</p>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-gray-600">No artists found.</p>
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
          </>
        )}
      </div>
      <div className="md:hidden">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
