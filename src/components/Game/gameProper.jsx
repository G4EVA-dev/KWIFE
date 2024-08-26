function gameProper() {
  const quiz = [
    {
      id: "uiux-design",
      name: "UI UX Design",
      question: "10 Question",
      time: "1 hour 15 min",
      review: "4.7",
    },
    {
      id: "graphic Design",
      name: "Graphic Design",
      question: "10 Question",
      time: "1 hour 15 min",
      review: "4.1",
    },
    {
      id: "art",
      name: "Visual Arts",
      question: "10 Question",
      time: "1 hour 15 min",
      review: "4.5",
    },
    {
      id: "film",
      name: "Movie Industry",
      question: "10 Question",
      time: "1 hour 15 min",
      review: "3.7",
    },
    {
      id: "poetry",
      name: "Poetry",
      question: "10 Question",
      time: "1 hour 15 min",
      review: "4.0",
    },
    {
      id: "spoken-word",
      name: "Spoken Word",
      question: "10 Question",
      time: "1 hour 15 min",
      review: "4.1",
    },
  ];

  return (
    <div className="w-[360px] p-3 ">
      <div className="w-full mt-3 flex items-center gap-3 justify-center ">
        <a href="#">Popular</a>
        <a href="#">Medumba</a>
        <a href="#">Ewondo</a>
        <a href="#">Mokwpe</a>
      </div>
      <div className="w-full mt-5 grid grid-cols-1 gap-4 ">
        {quiz.map((item) => (
          <div
            key={item.id}
            className="w-full flex items-center justify-center bg-[#FFFFFF]   rounded-[6px] p-2 shadow-md "
          >
            <div className="bg-[#C4C4C4] w-[127px] h-[96px] rounded-[3px] "></div>
            <div className="rounded-[10px] h-[96px] gap-[2px]  p-2 flex flex-col  items-start w-full ">
              <h3 className="text-green-600 text-[16px] font-bold">
                {item.name}
              </h3>
              <p className="text-[#999999] text-[16px] font-normal  flex items-center justify-center gap-[2px] ">
                <img src="/images/question.svg" alt="Question" />
                {item.question}
              </p>
              <p className="text-[#999999] text-[16px] font-normal  flex items-center justify-center gap-[2px] ">
                <img src="/images/timer.svg" alt="Timer" />
                {item.time}
              </p>
            </div>
            <div>
              <p className="text-green-300 font-bold text-[16px]  flex items-center justify-center pr-[20px] gap-[2px] ">
                <img src="/images/star.svg" alt="Timer" />
                {item.review}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="Continue w-full mt-4  ">
        <h1 className="font-bold text-2xl ">Continue Quiz</h1>
        <div className="w-full flex items-start bg-[#FFFFFF]  shadow-md gap-3 py-2 ">
          <div className="bg-[#C4C4C4] w-[127px] h-[120px] rounded-[3px]  "></div>
          <div className="flex flex-col gap-[2px] ">
            <div className="flex justify-between items-center">
              <h1>3D Animation</h1>
            </div>
            <div className="text-[black] text-[16px] font-normal  flex items-center justify-center pr-[20px] gap-[2px] ">
              <img src="/images/question.svg" alt="Question" />
              <p>7/10 Question</p>
            </div>
            <div className="text-[black] text-[16px] font-normal  flex  ">
              <img src="/images/star.svg" alt="Timer" />
              <p>55 min</p>
            </div>
            <div className=" ">
              <button className="bg-black cursor-pointer text-white p-2 w-[150px] rounded-[6px] ">
                Continue Quiz
              </button>
            </div>
          </div>
          <div className="flex items-center justify-start pr-[20px] gap-[2px]">
            <img src="/images/delete.svg" alt="Delete" />
          </div>
        </div>
      </div>
      <button className="mt-3 text-white font-bold bg-green-600 w-full p-2 rounded-[3px] ">
        Start Quiz
      </button>
    </div>
  );
}

export default gameProper;
