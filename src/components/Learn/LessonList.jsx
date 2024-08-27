import LessonCard from "./LessonCard";

const lessons = [
  {
    id: 1,
    title: "People and Family",
    category: "Basic Nouns and Greetings",
    slug: "/learn/people",
  },
  {
    id: 2,
    title: "Greetings and Basic Phrases",
    category: "Basic Nouns and Greetings",
    slug: "/learn/phrases",
  },
  {
    id: 3,
    title: "Common Animals",
    category: "Animals and Nature",
    slug: "/learn/animals",
  },
  {
    id: 4,
    title: "Nature and Environment",
    category: "Animals and Nature",
    slug: "/learn/nature",
  },
  {
    id: 5,
    title: "Basic Body Parts",
    category: "Body Parts and Health",
    slug: "/learn/body",
  },
  {
    id: 6,
    title: "Health and Feelings",
    category: "Body Parts and Health",
    slug: "/learn/health",
  },
];

function LessonList() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6">Available Lessons</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessons.map((lesson) => (
          <LessonCard key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}

export default LessonList;
