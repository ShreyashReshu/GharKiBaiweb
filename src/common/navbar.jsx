import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import { assets } from '../assets/assets';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to handle Find Maid button click
  const handleFindMaidClick = () => {
    navigate('/multi-step-form'); // Navigate to FindForms page
  };

  return (
    <nav className="bg-[#004A7C] shadow-lg">
      {/* Navbar Container */}
      <div className="flex items-center justify-between px-6 md:px-14 py-4">
        {/* Logo */}
        <NavLink to="/">
          <h1 className="text-white text-2xl font-serif italic font-bold">GHAR KI BAI</h1>
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-center space-x-12 flex-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-white text-lg font-medium transition-all ${
                isActive ? 'border-b-2 border-[#ECF8F9] text-[#ECF8F9]' : 'hover:text-[#ECF8F9] hover:scale-110'
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-white text-lg font-medium transition-all ${
                isActive ? 'border-b-2 border-[#ECF8F9] text-[#ECF8F9]' : 'hover:text-[#ECF8F9] hover:scale-110'
              }`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-white text-lg font-medium transition-all ${
                isActive ? 'border-b-2 border-[#ECF8F9] text-[#ECF8F9]' : 'hover:text-[#ECF8F9] hover:scale-110'
              }`
            }
          >
            Contact Us
          </NavLink>
        </div>

        {/* Hamburger Menu */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden focus:outline-none">
          <img src={isMenuOpen ? assets.back : assets.menu} alt="Menu Icon" className="relative left-16 h-6 w-6" />
        </button>

        {/* Find Maid Button */}
        <div>
          <button
            onClick={handleFindMaidClick} // Call the navigation function
            className="hidden md:block text-white text-lg font-medium transition-all rounded-2xl p-1 px-3 bg-orange-500 hover:scale-110 active:scale-100"
          >
            Find Maid
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="bg-[#222831] text-white shadow-lg md:hidden">
          <NavLink
            to="/"
            className="block px-6 py-4 hover:bg-[#393E46] hover:text-[#ECF8F9]"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block px-6 py-4 hover:bg-[#393E46] hover:text-[#ECF8F9]"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            className="block px-6 py-4 hover:bg-[#393E46] hover:text-[#ECF8F9]"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
