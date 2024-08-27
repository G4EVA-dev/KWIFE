import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SalsaMusic from "../assets/images/salsa music-cuate.svg";
import { Link } from "react-router-dom";

const welcomePhrases = [
  { language: "English", phrase: "Welcomes you" },
  { language: "Bulu", phrase: "Mbamba tye" },
  { language: "Duala", phrase: "Pô la ɓwâm" },
  { language: "Ewondo", phrase: "masuk" },
  { language: "Fang", phrase: "A yebe wa" },
  { language: "Fulfulde", phrase: "Jaɓɓaama" },
  { language: "Bassa", phrase: "Ḿ kpɔ̃ m̀ hwìǐ (sg) À kpɔ̃ m̀ hwìǐ (pl)" },
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
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-neutral-900">
      <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-green-100 to-yellow-100 p-4 mb-2 text-left">
        KWIFE
      </h1>
      <div className="flex flex-col mt-8 items-center">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto w-full">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src={SalsaMusic}
              alt="Salsa Music"
              className="w-full h-auto object-contain max-w-md mx-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative h-48 mb-8">
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
                    className="text-3xl md:text-5xl font-bold mb-4 text-center"
                    style={{ color: colors[currentColorIndex] }}
                  >
                    {welcomePhrases[currentPhraseIndex].phrase}👋
                  </h2>
                  <p className="text-xl md:text-2xl text-gray-600 italic text-center">
                    ({welcomePhrases[currentPhraseIndex].language})
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <Link to="/home" className="w-3/5 flex mt-8 justify-center">
          <motion.button
            className="mt-8 px-8 py-3 bg-green-600 text-white text-xl font-semibold rounded-full shadow-lg hover:bg-green-700 transition-colors duration-300 w-full md:w-[70%]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
        </Link>
      </div>
    </div>
  );
}

export default WelcomeScreen;
