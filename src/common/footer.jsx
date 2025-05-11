import React, { useState } from 'react';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'; // Import Toastify components
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify styles

const Footer = () => {
  const [email, setEmail] = useState('');

  // Handle form submission
  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      toast.success(`Subscribed with ${email}`, { position: 'top-center' }); // Success toast
      setEmail(''); // Clear the email input
    } else {
      toast.error('Please enter an email address', { position: 'top-center' }); // Error toast
    }
  };

  return (
    <footer className="bg-[#EEEEEE] text-black py-6">
      <div className="container mx-auto px-4">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-[#E1306C] transition-colors duration-300" size={20} />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-[#3B5998] transition-colors duration-300" size={20} />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-[#0077B5] transition-colors duration-300" size={20} />
          </a>
        </div>

        {/* Email Subscription Form */}
        <form onSubmit={handleSubscribe} className="flex justify-center mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="p-2 rounded-l-md border border-gray-300 focus:outline-none focus:border-[#white] w-1/2 md:w-1/3"
          />
          <button
            type="submit"
            className="bg-[#004A7C] text-white border border-gtay-300  rounded-r-md px-4 transition-colors duration-300 hover:bg-slate-700"
          >
            Subscribe
          </button>
        </form>

        {/* Quick Links */}
        <div className="flex flex-col md:flex-row justify-center text-sm mb-4 space-x-0 md:space-x-6 md:space-y-0 space-y-2">
          <Link to="/privacy-policy" className="hover:text-[#76ABAE] transition-colors duration-300">
            Privacy Policy
          </Link>
          <Link to="/about" className="hover:text-[#76ABAE] transition-colors duration-300">
            About
          </Link>
          <Link to="/blogs" className="hover:text-[#76ABAE] transition-colors duration-300">
            Blogs
          </Link>
          <Link to="/terms" className="hover:text-[#76ABAE] transition-colors duration-300">
            Terms and Conditions
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-center text-xs">&copy; {new Date().getFullYear()} GHAR KI BAI. All Rights Reserved.</div>
      </div>

      {/* Toastify Container */}
      <ToastContainer />
    </footer>
  );
};

export default Footer;
