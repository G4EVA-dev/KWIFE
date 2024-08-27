import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Settings,
  LogOut,
  Plus,
  ToggleLeft,
  ToggleRight,
  Music,
  Video,
} from "lucide-react";

const PersonalAccountPage = () => {
  const { state } = useLocation();
  const [availableForHire, setAvailableForHire] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [uploads, setUploads] = useState([]);
  const [user, setUser] = useState({});

  // Retrieve user data from local storage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // Fallback data or redirect to login if user is not found
      setUser({
        name: "Guest User",
        email: "guest@example.com",
        profilePic: "/path/to/default-pic.jpg",
        favoriteArtists: [],
        recentlyPlayed: [],
        playlists: [],
      });
    }
  }, []);

  const toggleAvailability = () => setAvailableForHire(!availableForHire);
  const openAddModal = () => setShowAddModal(true);
  const closeAddModal = () => setShowAddModal(false);

  const handleUpload = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const type = e.target.type.value;
    const file = e.target.file.files[0];

    if (title && type && file) {
      const newUpload = {
        id: Date.now(),
        title,
        type,
        file: URL.createObjectURL(file),
      };
      setUploads([newUpload, ...uploads]);
      closeAddModal();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-green-100 to-yellow-100 text-green-800 font-sans">
      <header className="bg-green-800 p-4 sm:p-6">
        <div className="container mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-4 sm:mb-0">
            <img
              src={user.profilePic || user.image}
              alt={user.name}
              className="w-16 h-16 rounded-full object-cover border-2 border-yellow-400 mr-4"
            />
            <div>
              <h1 className="text-2xl font-bold text-white">{user.name}</h1>
              <p className="text-sm text-green-200">
                {user.email || user.region}
              </p>
            </div>
          </div>
          <nav className="flex flex-wrap justify-center sm:justify-end space-x-4">
            {[{ icon: Settings }, { icon: LogOut }].map(
              ({ icon: Icon }, index) => (
                <motion.button
                  key={index}
                  className="text-yellow-400 hover:text-yellow-300 transition duration-300 flex items-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="mr-2" size={20} />
                </motion.button>
              )
            )}
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto max-w-6xl p-4 sm:p-6">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">My Uploads</h2>
          <motion.button
            onClick={openAddModal}
            className="bg-yellow-400 text-green-800 font-semibold py-2 px-4 rounded shadow hover:bg-yellow-300 transition duration-300 flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Plus size={20} className="mr-2" />
            Add New
          </motion.button>
        </div>

        {uploads.length === 0 ? (
          <p className="text-center text-gray-600">
            You haven't uploaded anything yet.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {uploads.map((upload) => (
              <div
                key={upload.id}
                className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
              >
                <div className="mb-4">
                  {upload.type === "music" ? (
                    <Music size={48} className="text-green-800" />
                  ) : (
                    <Video size={48} className="text-green-800" />
                  )}
                </div>
                <h3 className="text-xl font-semibold">{upload.title}</h3>
                <a
                  href={upload.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-yellow-400 hover:text-yellow-300 transition duration-300"
                >
                  View File
                </a>
              </div>
            ))}
          </div>
        )}

        {showAddModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
              <h2 className="text-2xl font-bold mb-4">Add New Upload</h2>
              <form onSubmit={handleUpload}>
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="type"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    required
                  >
                    <option value="music">Music</option>
                    <option value="video">Video</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="file"
                    className="block text-sm font-medium text-gray-700"
                  >
                    File
                  </label>
                  <input
                    type="file"
                    id="file"
                    name="file"
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"
                    required
                  />
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={closeAddModal}
                    className="py-2 px-4 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="py-2 px-4 bg-green-800 text-white rounded-md hover:bg-green-700 transition duration-300"
                  >
                    Upload
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-green-800 text-white p-4 text-center">
        <p>&copy; 2024 My Music Platform. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PersonalAccountPage;
