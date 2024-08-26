import { useState } from "react";
import { useNavigate} from "react-router-dom";

function Category() {
  const history = useNavigate();
  
  const categories = [
    {
      id: "fashion-design",
      name: "Fashion Design",
      image: "/images/fashion.png",
    },
    {
      id: "music",
      name: "Music",
      image: "/images/fashion.png",
    },
    {
      id: "art",
      name: "Visual Arts",
      image: "/images/fashion.png",
    },
    {
      id: "film",
      name: "Movie Industry",
      image: "/images/fashion.png",
    },
    {
      id: "poetry",
      name: "Poetry",
      image: "/images/fashion.png",
    },
    {
      id: "spoken-word",
      name: "Spoken Word",
      image: "/images/fashion.png",
    },
  ];

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryClick = (id) => {
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((categoryId) => categoryId !== id)
        : [...prevSelected, id]
    );
  };

  const handleContinueClick = () => {
    history("/home");
  };

  return (
    <div className="relative">
      <div className="flex w-full justify-end items-center p-[20px] text-green-500 leading-[60px] ">
        <a href="#">Sign in</a>
      </div>
      <div className="w-full flex items-center justify-center flex-col ">
        <h1 className="font-normal text-[48px] leading-[60px] ">kwife</h1>
        <p className="mt-[20px] w-[319px] text-center text-[18px] ">
          What creative fields would you like to see work from?
        </p>
      </div>
      <div className="mt-7 grid grid-cols-2 gap-4 p-4">
        {categories.map((item) => (
          <div
            key={item.id}
            className="relative  cursor-pointer"
            onClick={() => handleCategoryClick(item.id)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full rounded-[10px] h-full object-cover transition duration-300 ease-in-out"
              style={{
                filter: selectedCategories.includes(item.id)
                  ? "brightness(0.7)"
                  : "brightness(1)",
              }}
            />
            <div className="absolute rounded-[10px] inset-0 bg-black bg-opacity-30 p-2 flex flex-col justify-between items-start w-full ">
              <h3 className="text-white text-right text-[16px] font-normal">
                {item.name}
              </h3>
              {selectedCategories.includes(item.id) && (
                <img src="/images/check.svg" className="text-white ml-auto mr-1 mb-1 " />
              )}
            </div>
          </div>
        ))}
      </div>

      {selectedCategories.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 bg-white bg-opacity-10 p-4 shadow-lg flex justify-center">
          <button
            className="bg-[#059669] w-[175px] text-white px-6 py-2 rounded-[9px]"
            onClick={handleContinueClick}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}

export default Category;
