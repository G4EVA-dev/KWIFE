const CowrieAnimation = ({ isAnimating }) => {
  return (
    <div
      className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center items-center z-50 ${
        isAnimating ? "animate-cowrieUp" : "hidden"
      }`}
    >
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          src="/images/cowrie.png"
          className={`w-8 h-8 object-contain animate-cowrie-bounce delay-${
            index * 100
          }`}
          alt="Cowrie"
        />
      ))}
    </div>
  );
};

export default CowrieAnimation;
