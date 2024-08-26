// MobileNav.jsx
import { Link } from "react-router-dom"; 
import { Home, Search, Plus, Heart, User } from "lucide-react"; // Importing icons from Lucide

function MobileNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-lg flex justify-around py-2">
      <Link
        to="/"
        className="flex flex-col items-center text-gray-600 hover:text-blue-500"
      >
        <Home size={24} />
        <span className="text-xs">Home</span>
      </Link>
      <Link
        to="/search"
        className="flex flex-col items-center text-gray-600 hover:text-blue-500"
      >
        <Search size={24} />
        <span className="text-xs">Search</span>
      </Link>
      <Link
        to="/add"
        className="flex flex-col items-center text-gray-600 hover:text-blue-500"
      >
        <Plus size={24} />
        <span className="text-xs">Add</span>
      </Link>
      <Link
        to="/favorites"
        className="flex flex-col items-center text-gray-600 hover:text-blue-500"
      >
        <Heart size={24} />
        <span className="text-xs">Favorites</span>
      </Link>
      <Link
        to="/profile"
        className="flex flex-col items-center text-gray-600 hover:text-blue-500"
      >
        <User size={24} />
        <span className="text-xs">Profile</span>
      </Link>
    </nav>
  );
}

export default MobileNav;
