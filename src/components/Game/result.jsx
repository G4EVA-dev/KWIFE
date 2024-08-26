import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Result = ({ score, total, restartQuiz }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-center mb-6">Quiz Complete!</h2>
      <p className="text-2xl text-center mb-6">
        Your score: {score} out of {total}
      </p>
      <p className="text-lg text-center mb-6">
        {score === total
          ? "Perfect score! You're a Bakweri language expert!"
          : score >= total / 2
          ? "Great job! Keep practicing to improve your Bakweri language skills!"
          : "Good effort! Keep learning and try again to improve your score!"}
      </p>
      <motion.button
        className="w-full bg-green-500 text-white py-3 rounded-lg font-bold text-lg"
        onClick={restartQuiz}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Try Again
      </motion.button>
      <Link to="/game/game-one" className="mt-4">
        <motion.button
          className="w-full bg-white-500 text-black py-3 rounded-lg font-bold text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Leave
        </motion.button>
      </Link>
    </motion.div>
  );
};

Result.propTypes = {
  score: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  restartQuiz: PropTypes.func.isRequired,
};

export default Result;
