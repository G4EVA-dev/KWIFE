import { Link } from "react-router-dom";

function GameHero() {
  return (
    <div>
      <div className="bg-green-900 h-[175px] w-full p-[20px]  ">
        <nav className="flex justify-between items-center">
          <Link to="/learn" className="flex items-center gap-4">
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
            <h1 className="text-white text-lg font-semibold">Learn</h1>
          </Link>
        </nav>
        <div className="mt-5">
          <h1 className="mt-[10px] text-white font-bold text-[20px] ">
            Let&apos;s test your knowledge
          </h1>
        </div>
      </div>
      <div className="w-full h-[4px] mt-4 flex justify-center items-center ">
        <div className="w-[48px] h-[4px] bg-[#059669] "></div>
      </div>
    </div>
  );
}

export default GameHero;
