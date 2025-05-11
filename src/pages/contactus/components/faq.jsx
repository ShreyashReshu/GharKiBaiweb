import { useState } from "react";

const FAQAccordion = () => {
    // Sample FAQ Data (Dynamic)
    const faqs = [
        {
            question: "What services do you offer?",
            answer: "We offer a variety of services including cleaning, cooking, babysitting, and elder care.",
        },
        {
            question: "How can I book a maid?",
            answer: "You can book a maid through our easy-to-use online platform. Simply choose the service, and fill out the required details.",
        },
        {
            question: "What are the rates for services?",
            answer: "Our rates vary depending on the service and duration. Please contact us for more detailed pricing information.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index); // Toggle active state
    };

    return (
        <div className="mx-auto p-8 bg-gradient-to-r from-teal-400 to-cyan-500 shadow-lg rounded-lg">
            <h1 className="text-4xl font-bold text-center mb-8 text-white drop-shadow-lg">Frequently Asked Questions</h1>
            <div className="space-y-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="overflow-hidden rounded-xl shadow-xl">
                        <div
                            className={`flex justify-between items-center p-5 cursor-pointer bg-white hover:bg-teal-200 transition duration-300 ease-in-out transform ${activeIndex === index ? 'bg-teal-300' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                            <svg
                                className={`h-6 w-6 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                        <div className={`max-h-0 overflow-hidden transition-all duration-500 ease-out ${activeIndex === index ? 'max-h-screen p-5 bg-teal-50' : ''}`}>
                            <p className="text-gray-700">{faq.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQAccordion;
