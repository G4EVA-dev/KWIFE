import { useState } from "react";
import { Link } from "react-router-dom";

function GameProper() {
  const [activeTab, setActiveTab] = useState("Popular"); // Default active tab

  const quiz = [
    {
      id: "bakweri",
      name: "Bakweri Language App",
      question: "10 Questions",
      time: "1 hour 00 min",
      route: "/game/game-one",
    },
    {
      id: "banso",
      name: "Banso Language App",
      question: "10 Questions",
      time: "1 hour 15 min",
      route: "/game/game-two",
    },
    {
      id: "bayangi",
      name: "Bayangi Language App",
      question: "15 Questions",
      time: "1 hour 30 min",
      route: "/game/game-three",
    },
  ];

  const tabs = ["Popular", "Medumba", "Ewondo", "Mokwpe"];

  return (
    <div className="w-[360px] m-auto">
      <div className="w-full mt-3 flex items-center gap-3 justify-center">
        {tabs.map((tab) => (
          <a
            key={tab}
            href="#"
            onClick={() => setActiveTab(tab)}
            className={`${
              activeTab === tab ? "border-b-2 border-black" : ""
            } pb-1`}
          >
            {tab}
          </a>
        ))}
      </div>

      <div className="w-full mt-5 grid grid-cols-1 gap-4">
        {quiz.map((item) => (
          <div key={item.id}>
            <Link
              to={item.route}
              className="w-full flex items-center justify-center bg-[#FFFFFF] rounded-[6px] p-2 shadow-md"
            >
              <div className="bg-[#C4C4C4] w-[127px] h-[96px] rounded-[3px]"></div>
              <div className="rounded-[10px] h-[96px] gap-[2px] p-2 flex flex-col items-start w-full">
                <h3 className="text-black text-[18px]  font-bold">
                  {item.name}
                </h3>
                <p className="text-[#999999] text-[16px] font-normal flex items-center justify-center gap-[2px]">
                  <img src="/images/question.svg" alt="Question" />
                  {item.question}
                </p>
                <p className="text-[#999999] text-[16px] font-normal flex items-center justify-center gap-[2px]">
                  <img src="/images/timer.svg" alt="Timer" />
                  {item.time}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="Continue w-full mt-7">
        <h1 className="font-bold text-2xl">Continue Quiz</h1>
        <div className="w-full flex items-start bg-[#FFFFFF] shadow-md gap-3 py-2">
          <div className="bg-[#C4C4C4] w-[127px] h-[120px] rounded-[3px]"></div>
          <div className="flex flex-col gap-[2px]">
            <div className="flex justify-between items-center">
              <h1>3D Animation</h1>
            </div>
            <div className="text-[black] text-[16px] font-normal flex items-center justify-center pr-[20px] gap-[2px]">
              <img src="/images/question.svg" alt="Question" />
              <p>7/10 Question</p>
            </div>
            <div className="text-[black] text-[16px] font-normal flex">
              <img src="/images/star.svg" alt="Timer" />
              <p>55 min</p>
            </div>
            <div>
              <button className="bg-black cursor-pointer text-white p-2 w-[150px] rounded-[6px]">
                Continue Quiz
              </button>
            </div>
          </div>
          <div className="flex items-center justify-start gap-[2px]">
            <img src="/images/delete.svg" alt="Delete" />
          </div>
        </div>
      </div>

      <button className="mt-3 text-white font-bold bg-green-600 w-full p-2 rounded-[3px]">
        Start Quiz
      </button>
    </div>
  );
}

export default GameProper;
