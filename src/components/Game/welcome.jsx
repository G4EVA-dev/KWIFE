import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Welcome = ({ startQuiz }) => {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-bold text-center mb-6">
        Welcome to the Bakweri Language Quiz!
      </h1>
      <p className="text-lg text-center mb-6">
        Test your knowledge of the Bakweri language and learn new words and
        phrases!
      </p>
      <motion.button
        className="w-full bg-blue-500 text-white py-3 rounded-lg font-bold text-lg"
        onClick={startQuiz}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Start Quiz
      </motion.button>

      <Link to="/game/game-one" className="mt-4">
        <motion.button
          className="w-full bg-white-500 text-black py-3 flex justify-center items-center gap-3 rounded-lg font-bold text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="black"
            className="h-6 w-6"
            aria-label="Back"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
            />
          </svg>
          <h1 className="text-black text-lg font-semibold">Detail Quiz</h1>
        </motion.button>
      </Link>
    </motion.div>
  );
};

Welcome.propTypes = {
  startQuiz: PropTypes.func.isRequired,
};

export default Welcome;
