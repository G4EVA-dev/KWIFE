// VocabCard.js
import { useState } from "react";

function VocabCard({ word, translation, image }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer transition-transform duration-300 transform hover:scale-105"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="relative p-4 pb-[100%]">
        {!isFlipped ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
            <img
              src={image}
              alt={word}
              className="w-21 h-21 mb-3  rounded-[3px] "
            />
            <h3 className="text-xl font-bold text-center">{translation}</h3>
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-blue-100 p-4">
            <p className="text-lg text-center">{word}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default VocabCard;
