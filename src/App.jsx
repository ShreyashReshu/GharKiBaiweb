import { Routes, Route } from 'react-router-dom';

import Navbar from './common/navbar';
import Footer from './common/footer';
import Home from './pages/home/home';
import Contact from './pages/contactus/contact';
import About from './pages/aboutus/components/about';
import ConfirmationPage from './pages/home/components/ConfirmationPage';
import MultiStepFormComponent from './pages/home/components/findforms';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/maid-details" element={<ConfirmationPage />} />
        <Route path="/multi-step-form/*" element={<MultiStepFormComponent />} /> {/* Handle step navigation */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
