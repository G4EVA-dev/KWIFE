import Category from "./pages/Category";
import Game from "./pages/game/game";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./components/Profile";
import GameOne from "./pages/game/game-one";
import GameOneGame from "./pages/game/game-one-game";
import GameTwo from "./pages/game/game-two";
import GameThree from "./pages/game/game-three";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/profile" element={<Profile />} />
        <Route path="/game" element={<Game />} />
        <Route path="/game/game-one" element={<GameOne />} />
        <Route path="/game/game-two" element={<GameTwo />} />
        <Route path="/game/game-three" element={<GameThree />} />
        <Route path="/game/game-one/game" element={<GameOneGame />} />
      </Routes>
    </Router>
  );
}

export default App;
