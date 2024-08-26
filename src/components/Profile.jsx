import React from "react";
import girl from "../assets/images/girl1.jpg";

const Profile = () => {
  return (
    <div className="p-4">
      <div className="bg-white rounded-xl p-4 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <img className="h-24 w-24 rounded-full" src={girl} alt="Woman's Face" />
        <div className="text-center sm:text-left flex-grow">
          <div className="space-y-2">
            <p className="text-lg text-black font-semibold">Erin Lindford</p>
            <p className="text-gray-500 font-medium">Product Engineer</p>
            <div className="flex justify-center sm:justify-start space-x-2">
              <p>0 followers</p>
              <p>•</p>
              <p>Following 30</p>
            </div>
          </div>
          <button className="mt-4 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
