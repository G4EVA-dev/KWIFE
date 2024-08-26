import PropTypes from "prop-types";
import { motion } from "framer-motion";

const QuizQuestion = ({
  question,
  handleAnswer,
  currentQuestion,
  totalQuestions,
}) => {
  return (
    <motion.div
      initial={{ x: "100%", opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold mb-4">
        Question {currentQuestion} of {totalQuestions}
      </h2>
      <p className="text-xl mb-6">{question.question}</p>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            className="w-full bg-blue-100 text-blue-800 py-3 rounded-lg font-semibold text-lg text-left px-4"
            onClick={() => handleAnswer(option)}
            whileHover={{ scale: 1.03, backgroundColor: "#93C5FD" }}
            whileTap={{ scale: 0.98 }}
          >
            {option}
          </motion.button>
        ))}
      </div>
    </motion.div>
  );
};

QuizQuestion.propTypes = {
  question: PropTypes.shape({
    question: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
  handleAnswer: PropTypes.func.isRequired,
  currentQuestion: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
};

export default QuizQuestion;
