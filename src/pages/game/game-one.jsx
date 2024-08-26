import { Link } from "react-router-dom";

function GameOne() {
  return (
    <div>
      <header>
        <div className="bg-green-900 h-[175px] w-full p-[20px]">
          <nav className="flex justify-between items-center">
            <Link to="/game" className="flex items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="h-6 w-6"
                aria-label="Back"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              <h1 className="text-white text-lg font-semibold">Detail Quiz</h1>
            </Link>
            <img src="/images/profile.svg" alt="Profile" />
          </nav>
          <div className="mt-5 flex items-center justify-between">
            <div>
              <h1 className="mt-2 text-white font-bold text-[20px]">
                Bakweri Language App
              </h1>
              <p className="text-white mt-2 text-[12px]">GET 100 Points</p>
            </div>
            <div className="flex items-center gap-2">
              <img src="/images/star.svg" alt="Star rating" />
              <p className="text-white text-[18px] font-bold">4.7</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[4px] mt-4 flex justify-center items-center">
          <div className="w-[48px] h-[4px] bg-[#059669]"></div>
        </div>
      </header>

      <main className="p-5">
        <section className="w-[244px]">
          <h1 className="font-bold text-[16px] mb-4">
            Brief explanation about this quiz
          </h1>
          <div>
            <div className="w-full flex items-center gap-4 mb-4">
              <div className="bg-black h-[40px] w-[40px] rounded-full flex items-center justify-center">
                <img src="/images/question.svg" width="25" alt="Questions" />
              </div>
              <div>
                <h1 className="font-semibold">10 Questions</h1>
                <p className="text-[14px] text-[#999999]">
                  10 points for a correct answer
                </p>
              </div>
            </div>

            <div className="w-full flex items-center gap-4 mb-4">
              <div className="bg-black h-[40px] w-[40px] rounded-full flex items-center justify-center">
                <img src="/images/timer.svg" width="25" alt="Timer" />
              </div>
              <div>
                <h1 className="font-semibold">1 hour 15 min</h1>
                <p className="text-[14px] text-[#999999]">
                  Total duration of the quiz
                </p>
              </div>
            </div>

            <div className="w-full flex items-center gap-4">
              <div className="bg-black h-[40px] w-[40px] rounded-full flex items-center justify-center">
                <img src="/images/gameStar.svg" alt="Stars" />
              </div>
              <div>
                <h1 className="font-semibold">Win 10 stars</h1>
                <p className="text-[14px] text-[#999999]">
                  Answer all questions correctly
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-5">
          <h1 className="font-semibold text-lg mb-4">
            Please read the text below carefully so you can understand it
          </h1>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              10 points are awarded for a correct answer and no marks for an
              incorrect answer.
            </li>
            <li>Tap on options to select the correct answer.</li>
            <li>Tap on the bookmark icon to save interesting questions.</li>
            <li>
              Click submit if you are sure you want to complete all the quizzes.
            </li>
          </ul>
        </section>
        <Link to="/game/game-one/game">
          <button className="mt-3 text-white font-bold bg-green-600 w-full p-2 rounded-[3px] ">
            Start Quiz
          </button>
        </Link>
      </main>
    </div>
  );
}

export default GameOne;
