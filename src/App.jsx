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
import PhrasesAndBasicSentencesLesson from "./components/Learn/phrasesAndGreetings";
import CommonAnimalsLesson from "./components/Learn/AnimalLesson";
import NatureAndEnvironmentLesson from "./components/Learn/NatureLesson";
import BasicBodyPartsLesson from "./components/Learn/BodyPart";
import HealthAndFeelings from "./components/Learn/HealthAndFeelings";
import Alphabet from "./components/Learn/Alphabet";
import Numbers from "./components/Learn/Numbers";
import Food from "./components/Learn/Food";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/profile" element={<Profile />} />
        <Route path="/game" element={<Game />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/artist-profile" element={<ArtistProfile />} />
        <Route path="/album-songs" element={<AlbumSongs />} />
        <Route path="/game/game-one" element={<GameOne />} />
        <Route path="/game/game-one/game" element={<GameOneGame />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/people" element={<People />} />
        <Route path="/learn/animals" element={<CommonAnimalsLesson />} />
        <Route path="/learn/nature" element={<NatureAndEnvironmentLesson />} />
        <Route path="/learn/body" element={<BasicBodyPartsLesson />} />
        <Route path="/learn/health" element={<HealthAndFeelings/>}/>
        <Route path="/learn/alphabet" element={<Alphabet/>}/>
        <Route path="/learn/numbers" element={<Numbers/>}/>
        <Route path="/learn/food" element={<Food/>}/>
        <Route
          path="/learn/phrases"
          element={<PhrasesAndBasicSentencesLesson />}
        />
        <Route path="/learn/people/quiz" element={<QuizPage />} />
        <Route path="/learn/phrases/quiz" element={<QuizPage />} />
        <Route path="/learn/animals/quiz" element={<QuizPage />} />
        <Route path="/learn/nature/quiz" element={<QuizPage />} />
        <Route path="/art" element={<ArtistProfile />} />
        <Route path="/lyrics" element={<LyricsModule />} />
        <Route path="/laws" element={<Laws />} />
      </Routes>
    </Router>
  );
}

export default App;
