import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const welcomePhrases = [
  { language: "Bulu", phrase: "Mbôlô" },
  { language: "Duala", phrase: "Ndolo" },
  { language: "Ewondo", phrase: "Mbolo" },
  { language: "Fang", phrase: "Mbolo" },
  { language: "Fulfulde", phrase: "Sannu" },
  { language: "Bassa", phrase: "Mbaŋge" },
];

const colors = ["#007A5E", "#CE1126", "#FCD116"]; // Cameroon flag colors

function WelcomeScreen() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhraseIndex(
        (prevIndex) => (prevIndex + 1) % welcomePhrases.length
      );
      setCurrentColorIndex((prevIndex) => (prevIndex + 1) % colors.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-green-100 to-yellow-100">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-green-800 mb-8">
          KWIFE
        </h1>
        <div className="relative h-48">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPhraseIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <h2
                className="text-5xl md:text-7xl font-bold mb-4"
                style={{ color: colors[currentColorIndex] }}
              >
                {welcomePhrases[currentPhraseIndex].phrase}
              </h2>
              <p className="text-2xl md:text-3xl text-gray-600 italic">
                ({welcomePhrases[currentPhraseIndex].language})
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <div className="mt-16">
        <svg width="200" height="100" viewBox="0 0 200 100">
          <rect width="66.66" height="100" fill="#007A5E" />
          <rect x="66.66" width="66.66" height="100" fill="#CE1126" />
          <rect x="133.32" width="66.66" height="100" fill="#FCD116" />
          <polygon
            points="50,10 55,25 70,25 57.5,35 62.5,50 50,40 37.5,50 42.5,35 30,25 45,25"
            fill="#FCD116"
          />
        </svg>
      </div>
    </div>
  );
}

export default WelcomeScreen;
