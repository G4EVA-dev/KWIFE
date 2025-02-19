import Category from "./pages/Category";
import Game from "./pages/game/game";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Profile from "./components/Profile";
import ArtistProfile from "./pages/ArtistProfile";
import AlbumSongs from "./pages/AlbumSongs";
import GameOne from "./pages/game/game-one";
import GameOneGame from "./pages/game/game-one-game";
import Auth from "./pages/Auth";
import Learn from "./pages/learn";
import People from "./components/Learn/people";
import QuizPage from "./components/Learn/quizSection";
import LyricsModule from "./components/LyricsModule";
import Laws from "./pages/laws";
import ProtectedRoute from "./components/Authentication/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/profile" element={<Profile />} />
        <Route path="/game" element={<Game />} />
        <Route path="/auth" element={<Auth />} />
        {/* <Route path="/artist-profile" element={<ArtistProfile />} /> */}

        <Route
          path="/artist-profile"
          element={
            <ProtectedRoute>
              <ArtistProfile />
            </ProtectedRoute>
          }
        />

        <Route path="/album-songs" element={<AlbumSongs />} />
        <Route path="/game/game-one" element={<GameOne />} />
        <Route path="/game/game-one/game" element={<GameOneGame />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/people" element={<People />} />
        <Route path="/learn/people/quiz" element={<QuizPage />} />
        <Route path="/art" element={<ArtistProfile />} />
        <Route path="/lyrics" element={<LyricsModule />} />
        <Route path="/laws" element={<Laws />} />
      </Routes>
    </Router>
  );
}

export default App;
