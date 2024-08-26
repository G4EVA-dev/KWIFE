import Category from "./pages/Category";
import Game from "./pages/game/game";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import ArtistProfile from "./pages/ArtistProfile";
import AlbumSongs from "./pages/AlbumSongs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/profile" element={<Profile />} />
        <Route path="/game" element={<Game />} />
        <Route path="/artist-profile" element={<ArtistProfile />} />
        <Route path="/album-songs" element={<AlbumSongs />} />
      </Routes>
    </Router>
  );
}

export default App;
