import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // To handle loading state

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, mobile, message } = formData;

    if (!name || !email || !mobile || !message) {
      toast.error('Please fill in all fields before submitting the form!', {
        position: 'top-center',
      });
      return;
    }

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      toast.error('Please enter a valid 10-digit mobile number!', {
        position: 'top-center',
      });
      return;
    }

    setIsSubmitting(true); // Start loading

    try {
      const response = await fetch('http://localhost:5000/api/form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        toast.success(`Thank you, ${name}! 😊 ${result.message || 'Our team will contact you soon.'}`, {
          position: 'top-center',
        });

        setFormData({
          name: '',
          email: '',
          mobile: '',
          message: '',
        });
      } else {
        const error = await response.json();
        toast.error(error.message || 'Something went wrong. Please try again!', {
          position: 'top-center',
        });
      }
    } catch (error) {
      toast.error('Unable to submit the form. Please check your internet connection!', {
        position: 'top-center',
      });
    } finally {
      setIsSubmitting(false); // End loading
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-2xl px-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-[#004A7C]">Contact Us</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              placeholder="Enter your name"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Enter your email"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              placeholder="Enter 10-digit mobile number"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2"
              disabled={isSubmitting}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              placeholder="Enter your message"
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md p-2 h-32"
              disabled={isSubmitting}
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className={`flex mx-auto border-2 rounded-full bg-white font-semibold text-[#31363F] py-2 px-8 focus:outline-none ${
                isSubmitting ? 'bg-gray-300 cursor-not-allowed' : 'hover:bg-[#005691] hover:text-white'
              } text-lg`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
