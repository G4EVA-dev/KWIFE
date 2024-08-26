import Category from "./pages/Category";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Category/>}></Route>
    </Routes>
   </Router>
  );
}

export default App;
