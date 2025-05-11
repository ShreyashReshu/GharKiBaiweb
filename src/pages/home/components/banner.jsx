import React, { useState } from 'react';
import { assets } from '../../../assets/assets';
import Findforms from './findforms';
//import homeimg from '../../../assets/homeimg.jpg';
import homeimg from '../../../../public/homeimg.jpg';
const Banner = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div className="relative bg-cover bg-center bg-no-repeat h-[90vh]" style={{ backgroundImage: `url(${homeimg})` }}>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center p-6">
          {/* Heading */}
          <h1 className="rubik-vinyl-regular text-[#004A7C] text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold mb-6 leading-tight flex items-center justify-center flex-wrap">
            Give Your Home <br />
            Some Shine
            <img
              className="hidden md:block absolute ml-[500px] mt-12 h-8 md:h-12 lg:h-14"
              src={assets.shine}
              alt="shine"
            />
          </h1>
          <p>Connecting households with trusted maids and cleaners near you!</p>
          {/* Button */}
          <div className="mt-10">
            <div className="flex items-center justify-center rounded-full mx-auto w-[90%] max-w-[700px]">
              <button
                className="text-white text-base sm:text-lg font-medium transition-transform duration-300 rounded-3xl p-3 px-6 bg-orange-500 hover:scale-110 active:scale-95 shadow-lg hover:shadow-xl"
                onClick={handleButtonClick}
              >
                Find Maid
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Conditional Rendering of Findforms */}
      {showForm && (
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
            <Findforms />
            <button
              className="mt-4 text-white bg-red-500 p-2 rounded-full hover:bg-red-700"
              onClick={() => setShowForm(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;
