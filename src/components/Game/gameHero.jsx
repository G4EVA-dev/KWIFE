function GameHero() {
  return (
    <div>
      <div className="bg-green-800 h-[200px] w-full p-[20px] ">
        <nav className=" flex justify-between items-center ">
          <img src="/images/harmbuger.svg" alt="Harmburger Menu" />
          <img src="/images/profile.svg" alt="Profie Picture" />
        </nav>
        <div className="mt-5">
          <p className="text-[14px] font-normal text-white ">Hello, James</p>
          <h1 className="mt-[20px] text-white font-bold text-[20px] ">
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
