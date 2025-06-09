import React from "react";

interface Step3ConfirmationProps {
  formData?: any;
  onReset?: () => void;
}

const Step3Confirmation: React.FC<Step3ConfirmationProps> = ({ formData, onReset }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-6 py-4">
      {/* Success Icon */}
      <div className="bg-gray-100 rounded-full p-4 w-20 h-20 flex items-center justify-center">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-10 w-10 text-primary" 
          viewBox="0 0 20 20" 
          fill="currentColor"
        >
          <path 
            fillRule="evenodd" 
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
            clipRule="evenodd" 
          />
        </svg>
      </div>

      {/* Thank you message */}
      <h2 className="text-2xl font-bold text-gray-800">
        Thank you for your submission.
      </h2>

      {/* Process description */}
      <div className="space-y-5">
        <p className="text-sm text-gray-600 font-medium">
          The Entire Process is as Follows:
        </p>
        
        <ol className="space-y-3 text-sm text-gray-700">
          <li className="flex items-center space-x-2">
            <span className="bg-primary text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">1</span>
            <span>Submit your request <span className="text-primary font-medium">(DONE!)</span></span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="bg-gray-200 text-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">2</span>
            <span>Wait for a response from our team</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="bg-gray-200 text-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">3</span>
            <span>Fill out contracts and email Escrow officer</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="bg-gray-200 text-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">4</span>
            <span>We verify that your selected Title Company is aligned</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="bg-gray-200 text-gray-700 rounded-full w-5 h-5 flex items-center justify-center text-xs font-medium">5</span>
            <span>We WIRE FUNDS!</span>
          </li>
        </ol>
      </div>

      {/* Return to dashboard button */}
      <div className="pt-4">
        <button
          onClick={onReset}
          className="md:w-auto bg-primary hover:bg-primary-hover text-white font-medium py-2.5 px-6 rounded-md transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg text-sm"
        >
          Return to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Step3Confirmation;
