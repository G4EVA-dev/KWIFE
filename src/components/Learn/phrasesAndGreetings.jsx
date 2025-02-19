// PhrasesAndBasicSentencesLesson.js
import VocabCard from "./vocabCard";
import { Link } from "react-router-dom";

const phrases = [
  {
    word: "M’bolo",
    translation: "Good morning",
    image: "/images/goodMorning.png",
  },
  {
    word: "Uteh mbombo?",
    translation: "How are you?",
    image: "/images/howAreYou.png",
  },
  { word: "Mesia", translation: "Thank you", image: "/images/thankYou.png" },
  { word: "Eyo", translation: "No", image: "/images/no.png" },
  { word: "Eh", translation: "Yes", image: "/images/yes.png" },
  {
    word: "Bia wende!",
    translation: "Come here!",
    image: "/images/comeHere.png",
  },
];

function PhrasesAndBasicSentencesLesson() {
  return (
    <div>
      <div className="bg-blue-900 h-[175px] text-white p-4">
        <nav className="flex justify-between items-center">
          <Link to="/learn" className="flex items-center gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="h-6 w-6"
              aria-label="Back"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
            <h1 className="text-white text-lg font-semibold">Learn</h1>
          </Link>
        </nav>
        <h1 className="mt-3 text-3xl font-bold text-center mb-8">
          Phrases and Basic Sentences in Mokpe
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Phrases Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold ">Common Phrases</h2>
          <p className="text-[14px] mt-2 mb-4 ">
            Click on a card to reveal the translation
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {phrases.map((item, index) => (
              <VocabCard
                key={index}
                word={item.word}
                translation={item.translation}
                image={item.image}
              />
            ))}
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <Link
            to="/learn/phrases/quiz"
            className="bg-blue-400 hover:bg-blue-300 text-gray-800 text-center w-full font-bold py-2 px-5 rounded-[3px] transition duration-300 ease-in-out transform hover:scale-105"
          >
            Take the Quiz!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PhrasesAndBasicSentencesLesson;
