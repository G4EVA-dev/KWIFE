import { useState } from "react";
import Welcome from "../../components/Game/welcome.jsx";
import QuizQuestion from "../../components/Game/quizQuestion.jsx";
import Result from "../../components/Game/result.jsx";
import { motion } from "framer-motion";

const GameOneGame = () => {
  const [quizState, setQuizState] = useState("welcome");
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      question: "What is the Bakweri word for 'Hello'?",
      options: ["Mbɔ́tɛ́", "Ewóló", "Mɔ́lɛ́", "Iyále"],
      correctAnswer: "Mbɔ́tɛ́",
    },
    {
      question: "How do you say 'Thank you' in Bakweri?",
      options: ["Ósɛrɛ", "Iyále", "Mbɔ́tɛ́", "Ewóló"],
      correctAnswer: "Ósɛrɛ",
    },
    {
      question: "What is the Bakweri word for 'Water'?",
      options: ["Mɔ́lɛ́", "Ewóló", "Malálé", "Iyále"],
      correctAnswer: "Malálé",
    },
    {
      question: "How do you say 'Good morning' in Bakweri?",
      options: ["Mbɔ́tɛ́", "Iyále mɔ́lɛ́", "Ewóló mɔ́lɛ́", "Ósɛrɛ mɔ́lɛ́"],
      correctAnswer: "Iyále mɔ́lɛ́",
    },
    {
      question: "What is the Bakweri word for 'Food'?",
      options: ["Malálé", "Ewóló", "Iyále", "Zílí"],
      correctAnswer: "Zílí",
    },
  ];

  const startQuiz = () => {
    setQuizState("quiz");
  };

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizState("result");
    }
  };

  const restartQuiz = () => {
    setQuizState("welcome");
    setScore(0);
    setCurrentQuestion(0);
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-b from-green-400 to-blue-500 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        {quizState === "welcome" && <Welcome startQuiz={startQuiz} />}
        {quizState === "quiz" && (
          <QuizQuestion
            question={questions[currentQuestion]}
            handleAnswer={handleAnswer}
            currentQuestion={currentQuestion + 1}
            totalQuestions={questions.length}
          />
        )}
        {quizState === "result" && (
          <Result
            score={score}
            total={questions.length}
            restartQuiz={restartQuiz}
          />
        )}
      </div>
    </motion.div>
  );
};

export default GameOneGame;
