import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const vocabulary = [
  { word: "mòtò", translation: "person" },
  { word: "ŋmànà", translation: "child" },
  { word: "mólɔ̀n", translation: "woman" },
  { word: "mòmí", translation: "man" },
  { word: "tátá", translation: "father" },
  { word: "nyàŋgó", translation: "mother" },
];

function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    getNextQuestion();
  }, []);

  const getNextQuestion = () => {
    const randomIndex = Math.floor(Math.random() * vocabulary.length);
    const question = vocabulary[randomIndex];
    setCurrentQuestion(question);
    setSelectedAnswer(null);
    setFeedback("");

    // Generate options including the correct answer
    const correctAnswer = question.translation;
    const otherOptions = vocabulary
      .filter((item) => item.translation !== correctAnswer)
      .map((item) => item.translation)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);

    const allOptions = [...otherOptions, correctAnswer].sort(
      () => 0.5 - Math.random()
    );
    setOptions(allOptions);
  };

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    if (answer === currentQuestion.translation) {
      setFeedback("Correct!");
      setScore(score + 1);
      setTimeout(getNextQuestion, 1500);
    } else {
      setFeedback(
        `Incorrect. The correct answer is "${currentQuestion.translation}".`
      );
      setLives(lives - 1);
      if (lives > 1) {
        setTimeout(getNextQuestion, 2000);
      }
    }
  };

  const restartGame = () => {
    setScore(0);
    setLives(5);
    getNextQuestion();
  };

  if (lives === 0) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg "
      >
        <h2 className="text-2xl font-bold mb-4">Game Over!</h2>
        <p className="mb-4">
          You&apos;re out of lives. Your final score: {score}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={restartGame}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full mb-2"
        >
          Restart Game
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate("/learn/people")}
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded w-full"
        >
          Back to Lesson
        </motion.button>
      </motion.div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg "
    >
      <h2 className="text-2xl font-bold mb-4 text-center">
        Mokpe Quiz: People and Family
      </h2>
      <div className="flex justify-between items-center mb-4">
        <p className="text-lg font-semibold">Score: {score}</p>
        <p className="text-lg">Lives: {"❤️".repeat(lives)}</p>
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="bg-blue-100 p-4 rounded-lg mb-4"
      >
        <p className="text-xl font-bold text-center mb-2">
          &quot;{currentQuestion.word}&quot;
        </p>
        <p className="text-center text-gray-600">
          What does this mean in English?
        </p>
      </motion.div>
      <div className="grid grid-cols-1 gap-2 mb-4">
        {options.map((option, index) => (
          <motion.button
            key={index}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleAnswerSelect(option)}
            className={`w-full p-3 rounded-lg text-lg font-semibold ${
              selectedAnswer === option
                ? selectedAnswer === currentQuestion.translation
                  ? "bg-green-500 text-white"
                  : "bg-red-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            disabled={selectedAnswer !== null}
          >
            {option}
          </motion.button>
        ))}
      </div>
      {feedback && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`p-3 rounded-lg ${
            feedback.startsWith("Correct")
              ? "bg-green-100 text-green-800"
              : "bg-red-100 text-red-800"
          }`}
        >
          <p className="text-center font-semibold">{feedback}</p>
        </motion.div>
      )}
    </motion.div>
  );
}

export default QuizPage;
