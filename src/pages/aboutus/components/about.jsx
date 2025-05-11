import React from 'react';

const About = () => {
  return (
    <div className="bg-[#E8F1F5] py-16 sm:py-20 px-6 sm:px-8 lg:px-16">
      {/* About Section */}
      <section id="about-section" className="flex flex-col items-center justify-center space-y-8 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="w-full text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#004A7C] mb-6">About Us</h2>
        </div>

        {/* Paragraphs */}
        <div className="w-full text-left">
          <p className="text-lg sm:text-xl text-[#004A7C] mb-8 leading-relaxed">
            Ghar ki Bai is a web-based platform that connects households with reliable maids and cleaners. Our platform
            uses location-based technology to help you quickly find trusted domestic workers in your area.
          </p>

          <h3 className="text-2xl sm:text-3xl font-semibold text-[#004A7C] mb-4">Problem We Solve</h3>
          <p className="text-lg sm:text-xl text-[#004A7C] mb-8 leading-relaxed">
            Finding trustworthy and efficient maids can be a challenge. Ghar ki Bai solves this by providing a curated,
            verified list of maids near you, ensuring quality service and peace of mind.
          </p>

          <h3 className="text-2xl sm:text-3xl font-semibold text-[#004A7C] mb-4">Who We Serve</h3>
          <p className="text-lg sm:text-xl text-[#004A7C] mb-8 leading-relaxed">
            We serve urban households, working professionals, elderly individuals, and small businesses who need regular
            or occasional help with domestic tasks like cleaning, cooking, and caregiving.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
