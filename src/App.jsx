import Category from "./pages/Category";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Profile from "./components/Profile";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Category/>}></Route>
      <Route path="/home" element={<Home/>}></Route>
      <Route path = "/home/profile" element={<Profile/>}></Route>
    </Routes>
   </Router>
  );
}

export default App;
