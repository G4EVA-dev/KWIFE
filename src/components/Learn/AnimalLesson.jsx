// CommonAnimalsLesson.js
import VocabCard from "./vocabCard";
import { Link } from "react-router-dom";

const animals = [
  { word: "Mbwa", translation: "Dog", /*image: "/images/dog.png"*/ },
  { word: "Nyau", translation: "Cat", /*image: "/images/cat.png"*/ },
  { word: "Ngulu", translation: "Pig", /*image: "/images/pig.png"*/ },
  { word: "Nkoko", translation: "Chicken", /*image: "/images/chicken.png"*/ },
  { word: "Mpusa", translation: "Goat", /*image: "/images/goat.png"*/ },
  { word: "Ngombe", translation: "Cow", /*image: "/images/cow.png"*/ },
];

function CommonAnimalsLesson() {
  return (
    <div>
      <div className="bg-orange-900 h-[175px] text-white p-4">
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
          Common Animals in Mokpe
        </h1>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Animals Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold ">Common Animals</h2>
          <p className="text-[14px] mt-2 mb-4 ">
            Click on a card to reveal the translation
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {animals.map((item, index) => (
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
            to="/learn/animals/quiz"
            className="bg-orange-400 hover:bg-orange-300 text-gray-800 text-center w-full font-bold py-2 px-5 rounded-[3px] transition duration-300 ease-in-out transform hover:scale-105"
          >
            Take the Quiz!
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CommonAnimalsLesson;
