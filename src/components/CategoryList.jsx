import { motion } from "framer-motion";

const CategoryList = ({ selectedRegion, setSelectedRegion }) => {
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
    setSelectedRegion(region);
  };

  return (
    <motion.div
      className="mt-3 md:mb-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold text-white">Regional Categories</h5>
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 pb-4">
          {regions.map((region) => (
            <motion.button
              key={region}
              onClick={() => handleRegionClick(region)}
              className={`bg-green-100 hover:bg-green-200 text-gray-800 font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out whitespace-nowrap flex-shrink-0 ${
                selectedRegion === region ? "bg-green-200" : ""
              }`}
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
