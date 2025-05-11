import React, { useState } from 'react';
import { MultiStepForm, Step } from 'react-multi-form';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import 'react-toastify/dist/ReactToastify.css';

// Import images from the assets folder
import CpyImg from '../../../../public/Copy.png';
import CookingImage from '../../../../public/Cooking.png';
import BabySittingImage from '../../../../public/Baby-Sitting.png';
import ElderCareImage from '../../../../public/Elder Care.png';

const MultiStepFormComponent = () => {
  const [formData, setFormData] = useState({
    maidType: '',
    gender: '',
    mobile: '',
    otp: '',
    firstName: '',
    lastName: '',
    email: '',
    address: '',
  });

  const [activeStep, setActiveStep] = useState(1);
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState('');

  const navigate = useNavigate(); // Initialize the navigate function

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendOtp = () => {
    if (!formData.mobile || formData.mobile.length !== 10) {
      toast.error('Please enter a valid 10-digit mobile number.');
      return;
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    setOtpSent(true);
    toast.success(`OTP sent successfully! Your OTP is: ${otp}`);
  };

  const validateStep = (step) => {
    switch (step) {
      case 1:
        if (!formData.maidType || !formData.gender) {
          toast.error('Please select maid type and gender.');
          return false;
        }
        break;
      case 2:
        if (!formData.mobile || !formData.otp) {
          toast.error('Please enter mobile number and OTP.');
          return false;
        }
        if (formData.otp.length !== 6) {
          toast.error('OTP must be 6 digits.');
          return false;
        }
        if (formData.otp !== generatedOtp) {
          toast.error('Invalid OTP. Please try again.');
          return false;
        }
        break;
      case 3:
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.address) {
          toast.error('Please fill all fields.');
          return false;
        }
        if (!/\S+@\S+\.\S+/.test(formData.email)) {
          toast.error('Please enter a valid email address.');
          return false;
        }
        break;
      default:
        return true;
    }
    return true;
  };

  const handleNext = () => {
    if (validateStep(activeStep)) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleFormSubmit = () => {
    if (validateStep(activeStep)) {
      toast.success('Form submitted successfully!');
      // Pass the form data as state while navigating
      navigate('/maid-details', { state: formData });
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-lg mx-auto relative">
      <MultiStepForm activeStep={activeStep}>
        <Step label="Step 1">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold mb-4 text-center">Choose Maid Type</h2>
            <div className="grid gap-4 grid-cols-2 sm:grid-cols-4">
              {['Cleaning', 'Cooking', 'Baby Sitting', 'Elder Care'].map((type) => {
                let imageSrc;
                switch (type) {
                  case 'Cleaning':
                    imageSrc = CpyImg;
                    break;
                  case 'Cooking':
                    imageSrc = CookingImage;
                    break;
                  case 'Baby Sitting':
                    imageSrc = BabySittingImage;
                    break;
                  case 'Elder Care':
                    imageSrc = ElderCareImage;
                    break;
                  default:
                    imageSrc = ''; // Default image if needed
                    break;
                }

                return (
                  <button
                    key={type}
                    className={`flex flex-col items-center justify-center p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                      formData.maidType === type ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-700'
                    }`}
                    onClick={() => setFormData({ ...formData, maidType: type })}
                  >
                    <img src={imageSrc} alt={type} className="h-16 w-16 mb-2" />
                    <span className="font-medium">{type}</span>
                  </button>
                );
              })}
            </div>

            <h2 className="text-2xl font-bold mt-4 text-center">Select Gender</h2>
            <div className="flex gap-4 justify-center">
              {['Male', 'Female', 'Any'].map((gender) => (
                <button
                  key={gender}
                  className={`p-4 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
                    formData.gender === gender ? 'bg-green-600 text-white' : 'bg-gray-300 text-gray-700'
                  }`}
                  onClick={() => setFormData({ ...formData, gender })}
                >
                  {gender}
                </button>
              ))}
            </div>
          </div>
        </Step>

        <Step label="Step 2">
          <div className="flex flex-col gap-4">
            <label className="font-semibold">
              Mobile Number:
              <input
                type="text"
                name="mobile"
                placeholder="Enter your mobile number"
                value={formData.mobile}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:border-blue-500"
              />
            </label>
            <button
              onClick={sendOtp}
              className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
            >
              {otpSent ? 'Resend OTP' : 'Get OTP'}
            </button>
            <label className="font-semibold">
              OTP:
              <input
                type="text"
                name="otp"
                placeholder="Enter the 6-digit OTP"
                value={formData.otp}
                onChange={handleInputChange}
                className={`w-full p-4 border border-gray-300 rounded-lg mt-1 focus:outline-none ${
                  formData.otp.length === 6 && formData.otp === generatedOtp ? 'border-green-500' : 'border-gray-300'
                }`}
                disabled={!otpSent}
              />
            </label>
          </div>
        </Step>

        <Step label="Step 3">
          <div className="flex flex-col gap-4">
            <label className="font-semibold">
              First Name:
              <input
                type="text"
                name="firstName"
                placeholder="Enter your first name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:border-blue-500"
              />
            </label>
            <label className="font-semibold">
              Last Name:
              <input
                type="text"
                name="lastName"
                placeholder="Enter your last name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:border-blue-500"
              />
            </label>
            <label className="font-semibold">
              Email:
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:border-blue-500"
              />
            </label>
            <label className="font-semibold">
              Address:
              <textarea
                name="address"
                placeholder="Enter your address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-4 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:border-blue-500"
              />
            </label>
          </div>
        </Step>
      </MultiStepForm>

      <div className="flex justify-between mt-6">
        {activeStep > 1 && (
          <button onClick={handlePrevious} className="p-4 text-blue-600 hover:underline">
            Previous
          </button>
        )}
        {activeStep < 3 ? (
          <button onClick={handleNext} className="p-4 text-blue-600 hover:underline">
            Next
          </button>
        ) : (
          <button
            onClick={handleFormSubmit}
            className="p-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300"
          >
            Submit
          </button>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default MultiStepFormComponent;
