// App.js

import Header from "../components/Learn/Header";
import LessonList from "../components/Learn/LessonList";

function Learn() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <LessonList />
      </main>
    </div>
  );
}

export default Learn;
