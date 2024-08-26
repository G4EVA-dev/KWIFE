import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const CategoryList = () => {
  const navigate = useNavigate();

  const regions = [
    "Adamawa",
    "Centre",
    "East",
    "Far North",
    "Littoral",
    "North",
    "Northwest",
    "South",
    "Southwest",
    "West",
  ];

  const handleRegionClick = (region) => {
    navigate(`/music/${region.toLowerCase().replace(" ", "-")}`);
  };

  const handleSeeMoreClick = () => {
    navigate("/all-regions");
  };

  return (
    <motion.div
      className="bg-white rounded-lg shadow-md p-6 mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold text-green-800">
          Regional Categories
        </h5>
        <motion.button
          onClick={handleSeeMoreClick}
          className="text-green-600 hover:text-green-800 transition duration-300 ease-in-out flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          See More
          <ChevronRight size={20} className="ml-1" />
        </motion.button>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 pb-4">
          {regions.map((region) => (
            <motion.button
              key={region}
              onClick={() => handleRegionClick(region)}
              className="bg-green-100 hover:bg-green-200 text-green-800 font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out whitespace-nowrap flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {region}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default CategoryList;
