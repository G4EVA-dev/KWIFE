import VocabCard from "./vocabCard";
import { Link } from "react-router-dom";

const letters = [
    { word: "A", translation: "a" },
    { word: "B", translation: "b" },
    { word: "D", translation: "d" },
    { word: "E", translation: "e" },
    { word: "F", translation: "ɸ (like 'f' but softer)" },
    { word: "G", translation: "ɡ" },
    { word: "I", translation: "i" },
    { word: "J", translation: "j" },
    { word: "K", translation: "k" },
    { word: "L", translation: "l" },
    { word: "M", translation: "m" },
    { word: "N", translation: "n" },
    { word: "Ŋ", translation: "ŋ (ng as in 'song')" },
    { word: "O", translation: "o" },
    { word: "P", translation: "p" },
    { word: "R", translation: "r" },
    { word: "S", translation: "s" },
    { word: "T", translation: "t" },
    { word: "U", translation: "u" },
    { word: "W", translation: "w" },
    { word: "Y", translation: "y" },
    { word: "Z", translation: "z" },
  ];
  
export default function Alphabet() {
    return(
        <div>
            <div className="bg-red-900 h-[175px] text-white p-4">
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
                Alphabet in Mokpe
            </h1>
            </div>
    
            <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Body Parts Section */}
            <div className="mb-12">
                <h2 className="text-2xl font-semibold ">Alphabet</h2>
                <p className="text-[14px] mt-2 mb-4 ">
                Click on a card to reveal the translation
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {letters.map((item, index) => (
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
                to="/learn/bodyparts/quiz"
                className="bg-red-400 hover:bg-red-300 text-gray-800 text-center w-full font-bold py-2 px-5 rounded-[3px] transition duration-300 ease-in-out transform hover:scale-105"
                >
                Take the Quiz!
                </Link>
            </div>
            </div>
        </div>
    )
}