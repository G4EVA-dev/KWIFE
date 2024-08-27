import { Link } from "react-router-dom";

function LessonCard({ lesson }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{lesson.title}</h3>
        <p className="text-gray-600 mb-4">{lesson.category}</p>
        <Link to={lesson.slug}>
          <button className="bg-green-200 hover:bg-green-600 text-gray-800 font-semibold px-4 py-2 rounded  transition-colors duration-300">
            Start Lesson
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LessonCard;
