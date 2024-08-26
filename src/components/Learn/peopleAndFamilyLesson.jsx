// PeopleAndFamilyLesson.js
import { useState } from "react";
import VocabCard from "./VocabCard";
import QuizSection from "./QuizSection";

const vocabulary = [
  { word: "mòtò", translation: "person", image: "person.svg" },
  { word: "ŋmànà", translation: "child", image: "child.svg" },
  { word: "mólɔ̀n", translation: "woman", image: "woman.svg" },
  { word: "mòmí", translation: "man", image: "man.svg" },
  { word: "tátá", translation: "father", image: "father.svg" },
  { word: "nyàŋgó", translation: "mother", image: "mother.svg" },
];

function PeopleAndFamilyLesson() {
  const [showQuiz, setShowQuiz] = useState(false);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        People and Family in Mokpe
      </h1>

      {/* Vocabulary Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Vocabulary</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {vocabulary.map((item, index) => (
            <VocabCard
              key={index}
              word={item.word}
              translation={item.translation}
              image={item.image}
            />
          ))}
        </div>
      </div>

      {/* Practice Button */}
      {!showQuiz && (
        <div className="text-center">
          <button
            onClick={() => setShowQuiz(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
          >
            Practice Now!
          </button>
        </div>
      )}

      {/* Quiz Section */}
      {showQuiz && <QuizSection vocabulary={vocabulary} />}
    </div>
  );
}

export default PeopleAndFamilyLesson;
