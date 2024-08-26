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
          className="w-full bg-white-500 text-black py-3 rounded-lg font-bold text-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Go Back
        </motion.button>
      </Link>
    </motion.div>
  );
};

Welcome.propTypes = {
  startQuiz: PropTypes.func.isRequired,
};

export default Welcome;
