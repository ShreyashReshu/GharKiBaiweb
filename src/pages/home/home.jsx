import React from 'react';
import Banner from './components/banner';

const Home = () => {
  // Handle service selection
  const handleServiceSelection = (service) => {
    console.log(`Selected service: ${service}`);
  };

  return (
    <div>
      <Banner />

      {/* Call Now Section */}
      <section className="call-now bg-[#FAFAFA] text-[#004A7C] py-4 sm:py-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-center">Call Now: 123-456-7890</h2>
      </section>

      {/* WHY CHOOSE US Section */}
      <section className="why-choose-us bg-[#E8F1F5] py-16 sm:py-20 px-6 sm:px-8 lg:px-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#004A7C] mb-10 sm:mb-16 text-center">
          WHY CHOOSE US?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {/* Certified Professional Cleaners */}
          <div className="feature-item text-[#004A7C] text-lg sm:text-xl font-semibold text-center p-4 sm:p-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3000/3000777.png"
              alt="Certified Professional Cleaners"
              className="w-16 h-16 mx-auto mb-4"
            />
            <span>Certified Professional Cleaners</span>
          </div>

          {/* 100% Satisfaction Guaranteed */}
          <div className="feature-item text-[#004A7C] text-lg sm:text-xl font-semibold text-center p-4 sm:p-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/11182/11182611.png"
              alt="100% Satisfaction Guaranteed"
              className="w-16 h-16 mx-auto mb-4"
            />
            <span>100% Satisfaction Guaranteed</span>
          </div>

          {/* Location-Based Services */}
          <div className="feature-item text-[#004A7C] text-lg sm:text-xl font-semibold text-center p-4 sm:p-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/819/819814.png"
              alt="Location-Based Services"
              className="w-16 h-16 mx-auto mb-4"
            />
            <span>Location-Based Services</span>
          </div>

          {/* Customer-Focused Approach */}
          <div className="feature-item text-[#004A7C] text-lg sm:text-xl font-semibold text-center p-4 sm:p-6">
            <img
              src="https://cdn-icons-png.flaticon.com/512/11182/11182611.png"
              alt="Customer-Focused Approach"
              className="w-16 h-16 mx-auto mb-4"
            />
            <span>Customer-Focused Approach</span>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services-section" className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 bg-[#D1E4EC]">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#004A7C] mb-10 sm:mb-16 text-center">
          Our Services
        </h2>
        <p className="text-lg sm:text-xl text-[#004A7C] mb-8 text-center">
          At Ghar ki Bai, we offer a variety of services designed to make your life easier. Whether it's cleaning,
          cooking, caregiving, or specialized assistance, we have trusted professionals ready to help you.
        </p>

        {/* Service Images */}
        <div className="services grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-7xl mx-auto">
          <div className="service cursor-pointer text-center" onClick={() => handleServiceSelection('Cleaning')}>
            <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-200 mb-4 rounded-lg overflow-hidden">
              <img
                src="https://i.pinimg.com/736x/25/d9/f4/25d9f4963f341ad1e1d11db50f163614.jpg"
                alt="Cleaning"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-black">Cleaning</h3>
          </div>
          <div className="service cursor-pointer text-center" onClick={() => handleServiceSelection('Cooking')}>
            <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-200 mb-4 rounded-lg overflow-hidden">
              <img
                src="https://img.freepik.com/premium-vector/young-woman-cooking-kitchen-flat-style_1057-118728.jpg"
                alt="Cooking"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-black">Cooking</h3>
          </div>
          <div className="service cursor-pointer text-center" onClick={() => handleServiceSelection('Caregiving')}>
            <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-200 mb-4 rounded-lg overflow-hidden">
              <img
                src="https://media.istockphoto.com/id/1328278415/vector/elderly-caregiving-concept-young-female-character-bringing-medicine-to-old-woman-help-to.jpg?s=612x612&w=0&k=20&c=89nQvTlFb-C4HkuuXLNXh_ohB_ihKqGAkYIpqYitCIU="
                alt="Caregiving"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-black">Caregiving</h3>
          </div>
          <div className="service cursor-pointer text-center" onClick={() => handleServiceSelection('Assistance')}>
            <div className="w-full h-48 sm:h-56 md:h-64 bg-gray-200 mb-4 rounded-lg overflow-hidden">
              <img
                src="https://img.freepik.com/premium-vector/touching-textures-isolated-cartoon-vector-illustration_107173-18938.jpg"
                alt="Baby sitting"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-black">Baby Sitting</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
