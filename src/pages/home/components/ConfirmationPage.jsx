import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state; // Get form data passed from the previous page

  const handleConfirmBooking = () => {
    toast.success('Booking Confirmed!!', {
      position: 'top-right',
      autoClose: 5000, // 5 seconds
    });
    setTimeout(() => {
      navigate('/');
    }, 2000); // Redirect after 2 seconds
  };

  const handleModifyForm = () => {
    navigate('/multi-step-form/step-3');
  };

  const handleCancelBooking = () => {
    toast.success('Booking Cancelled!!', {
      position: 'top-right',
      autoClose: 5000, // 5 seconds
    });
    setTimeout(() => {
      navigate('/');
    }, 2000); // Redirect after 2 seconds
  };

  return (
    <div className="p-6 sm:p-8 bg-white rounded-lg shadow-lg max-w-md sm:max-w-lg mx-auto">
      <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center">Confirm Your Booking</h2>
      <div className="flex flex-col gap-4">
        <p>
          <strong>Name:</strong> {formData.firstName} {formData.lastName}
        </p>
        <p>
          <strong>Email:</strong> {formData.email}
        </p>
        <p>
          <strong>Mobile Number:</strong> {formData.mobile}
        </p>
        <p>
          <strong>Maid Type:</strong> {formData.maidType}
        </p>
        <p>
          <strong>Gender:</strong> {formData.gender}
        </p>
        <p>
          <strong>Address:</strong> {formData.address}
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between mt-6 gap-4 sm:gap-6">
        <button
          onClick={handleModifyForm}
          className="p-4 bg-[#004A7C] text-white rounded-lg hover:bg-[#005691] transition-all duration-300 w-full sm:w-auto"
        >
          Modify Form
        </button>
        <button
          onClick={handleCancelBooking}
          className="p-4 bg-[#004A7C] text-white rounded-lg hover:bg-[#005691] transition-all duration-300 w-full sm:w-auto"
        >
          Cancel Booking
        </button>
        <button
          onClick={handleConfirmBooking}
          className="p-4 bg-[#004A7C] text-white rounded-lg hover:bg-[#005691] transition-all duration-300 w-full sm:w-auto"
        >
          Confirm Booking
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ConfirmationPage;
