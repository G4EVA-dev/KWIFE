import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  ScaleIcon,
  UserIcon,
  BookOpenIcon,
} from "@heroicons/react/24/solid";

function Footer() {
  const [activeIcon, setActiveIcon] = useState("home");

  const handleClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <div className="flex justify-between items-center p-4 bg-white w-full ">
      <Link to="/home">
        <HomeIcon
          onClick={() => handleClick("home")}
          className={`h-7 w-7 cursor-pointer ${
            activeIcon === "home" ? "text-green-700" : "text-gray-500"
          }`}
        />
      </Link>
      <Link to="/game">
        <BookOpenIcon
          onClick={() => handleClick("book")}
          className={`h-6 w-6 cursor-pointer ${
            activeIcon === "book" ? "text-green-700" : "text-gray-500"
          }`}
        />
      </Link>
      <Link to="/laws">
        <ScaleIcon
          onClick={() => handleClick("scale")}
          className={`h-6 w-6 cursor-pointer ${
            activeIcon === "book" ? "text-green-700" : "text-gray-500"
          }`}
        />
      </Link>
      <Link to="profile">
        <UserIcon
          onClick={() => handleClick("user")}
          className={`h-6 w-6 cursor-pointer ${
            activeIcon === "user" ? "text-green-700" : "text-gray-500"
          }`}
        />
      </Link>
    </div>
  );
}

export default Footer;
