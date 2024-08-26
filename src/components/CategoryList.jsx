import React from 'react'
import { useNavigate } from 'react-router-dom'

const CategoryList = () => {
  const navigate = useNavigate()

  // Dummy data for Cameroon regions
  const regions = [
    'Adamawa',
    'Centre',
    'East',
    'Far North',
    'Littoral',
    'North',
    'Northwest',
    'South',
    'Southwest',
    'West'
  ]

  const handleRegionClick = (region) => {
    navigate(`/music/${region.toLowerCase().replace(' ', '-')}`)
    
    // Uncomment and modify the following code when backend is available
    // try {
    //   const response = await fetch(`/api/music/${region}`)
    //   const data = await response.json()
    //   // Handle the data as needed
    // } catch (error) {
    //   console.error('Error fetching music data:', error)
    // }
  }

  const handleSeeMoreClick = () => {
    navigate('/all-regions')
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h5 className="text-md font-bold  text-green-900">Regional Categories</h5>
       
      </div>
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 pb-4">
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => handleRegionClick(region)}
              className="bg-gray-200 hover:bg-gray-300 text-green-900 font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out whitespace-nowrap flex-shrink-0"
            >
              {region}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryList