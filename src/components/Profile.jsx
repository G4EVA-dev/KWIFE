import { useState } from "react";
import {
  FaUser,
  FaMusic,
  FaCog,
  FaSignOutAlt,
  FaPlus,
  FaToggleOn,
  FaToggleOff,
} from "react-icons/fa";

const PersonalAccountPage = () => {
  const [availableForHire, setAvailableForHire] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);

  const user = {
    name: "Acha Nfon",
    email: "acha.nfon@example.com",
    profilePic: "/path/to/profile-pic.jpg",
    favoriteArtists: ["Mballa Elanga", "Richard Bona", "Manu Dibango"],
    recentlyPlayed: [
      { title: "Echoes of Ancestors", artist: "Mballa Elanga" },
      { title: "Djombwe", artist: "Richard Bona" },
      { title: "Soul Makossa", artist: "Manu Dibango" },
      { title: "Douala Nights", artist: "Mballa Elanga" },
    ],
    playlists: [
      { name: "Cameroon Classics", trackCount: 25 },
      { name: "Modern African Fusion", trackCount: 40 },
      { name: "Relaxing Rainforest Sounds", trackCount: 15 },
    ],
  };

  const toggleAvailability = () => {
    setAvailableForHire(!availableForHire);
  };

  const openAddModal = () => {
    setShowAddModal(true);
  };

  const closeAddModal = () => {
    setShowAddModal(false);
  };

  return (
    <div className="bg-neutral-900 min-h-screen text-neutral-100 font-sans">
      <header className="bg-green-900 p-4 sm:p-6">
        <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <img
              src={user.profilePic}
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-amber-500 mr-4"
            />
            <div>
              <h1 className="text-2xl font-bold">{user.name}</h1>
              <p className="text-sm text-neutral-300">{user.email}</p>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center sm:justify-end space-x-2 sm:space-x-4">
            <button className="text-amber-500 hover:text-amber-400 transition duration-300 mb-2 sm:mb-0">
              <FaUser className="inline mr-2" /> Profile
            </button>
            <button className="text-amber-500 hover:text-amber-400 transition duration-300 mb-2 sm:mb-0">
              <FaMusic className="inline mr-2" /> My Music
            </button>
            <button className="text-amber-500 hover:text-amber-400 transition duration-300 mb-2 sm:mb-0">
              <FaCog className="inline mr-2" /> Settings
            </button>
            <button className="text-amber-500 hover:text-amber-400 transition duration-300 mb-2 sm:mb-0">
              <FaSignOutAlt className="inline mr-2" /> Logout
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl p-4 sm:p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <button
              onClick={toggleAvailability}
              className="flex items-center bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              {availableForHire ? (
                <FaToggleOn className="mr-2" />
              ) : (
                <FaToggleOff className="mr-2" />
              )}
              Available for Hire
            </button>
          </div>
          <button
            onClick={openAddModal}
            className="bg-amber-500 hover:bg-amber-400 text-neutral-900 font-bold py-2 px-4 rounded transition duration-300"
          >
            <FaPlus className="inline mr-2" /> Add Song/Album
          </button>
        </div>

        {/* Rest of the component remains the same */}
        {/* ... */}
      </main>

      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-neutral-800 rounded-lg p-6 w-full max-w-md">
            <h2 className="text-2xl font-bold mb-4">Add New Song/Album</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="title">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  className="w-full px-3 py-2 text-neutral-900 bg-neutral-100 rounded"
                  placeholder="Enter title"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="type">
                  Type
                </label>
                <select
                  id="type"
                  className="w-full px-3 py-2 text-neutral-900 bg-neutral-100 rounded"
                >
                  <option value="song">Song</option>
                  <option value="album">Album</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={closeAddModal}
                  className="bg-neutral-600 hover:bg-neutral-500 text-white font-bold py-2 px-4 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-amber-500 hover:bg-amber-400 text-neutral-900 font-bold py-2 px-4 rounded"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <footer className="bg-neutral-800 text-neutral-400 p-4 mt-8">
        <div className="container mx-auto max-w-6xl text-center sm:text-left">
          <p>&copy; 2024 Cameroon Music Streaming. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default PersonalAccountPage;
