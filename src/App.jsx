import Category from "./pages/Category";
import Game from "./pages/game";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Category />}></Route>
        <Route path="/game" element={<Game />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
