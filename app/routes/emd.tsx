import { useState } from "react";
import type { MetaFunction } from "@remix-run/node";
import Step1BorrowerInfo from "~/components/forms/EMDForm/Step1BorrowerInfo";
import Step2DealInfo from "~/components/forms/EMDForm/Step2DealInfo";
import StepProgress from "~/components/forms/StepProgress";

export const meta: MetaFunction = () => {
  return [
    { title: "EMD Request" },
    { name: "description", content: "Earnest Money Deposit request form for RealQuick Funds clients" },
  ];
};

export default function EMD() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const steps = [
    { id: 1, label: "Borrower Info" },
    { id: 2, label: "Deal Info" },
    { id: 3, label: "Confirmation" }
  ];
  
  const handleNext = (data: any) => {
    setFormData(prevData => ({
      ...prevData,
      ...data
    }));
    setCurrentStep(prev => Math.min(prev + 1, steps.length));
  };
  
  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  // Determine step title based on current step
  const getStepTitle = () => {
    switch(currentStep) {
      case 1:
        return "Borrower Information";
      case 2:
        return "Deal Information";
      case 3:
        return "Confirmation";
      default:
        return "EMD Request";
    }
  };

  return (
    <div className="flex flex-col bg-gray-50 min-h-[calc(100vh-140px)] w-full">
      <div className="max-w-3xl mx-auto px-4 py-6 w-full flex-grow">
        <div className="text-center mb-5">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">EMD Request</h1>
          <div className="w-40 h-1 bg-primary mx-auto mb-2"></div>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Please complete all required information to submit your EMD request.
          </p>
        </div>
        
        <div className="mb-6">
          <StepProgress steps={steps} currentStep={currentStep} />
        </div>
        
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-5">
          <h2 className="text-lg font-medium text-gray-800 mb-4 pb-2 border-b border-gray-200">
            {getStepTitle()}
          </h2>
          
          {currentStep === 1 && (
            <Step1BorrowerInfo 
              onNext={handleNext}
              formData={formData}
            />
          )}
          
          {currentStep === 2 && (
            <Step2DealInfo 
              onNext={handleNext}
              onBack={handleBack}
              formData={formData}
              updateFormData={setFormData}
            />
          )}
          
          {currentStep === 3 && (
            <div className="text-center py-8">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="text-xl font-medium text-gray-800 mb-2">Request Submitted Successfully!</h3>
              <p className="text-gray-600 text-sm max-w-md mx-auto mb-6">
                Your EMD request has been submitted. Our team will review your information and contact you shortly.
              </p>
              
              <div className="space-y-4 max-w-md mx-auto text-left bg-gray-50 p-4 rounded-md border border-gray-200">
                <h4 className="font-medium text-gray-800">Next Steps:</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center bg-primary text-white rounded-full w-5 h-5 text-xs mr-2 mt-0.5">✓</span>
                    <span>Submit your request <span className="text-green-600 font-medium">(DONE!)</span></span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center bg-gray-200 text-gray-700 rounded-full w-5 h-5 text-xs mr-2 mt-0.5">2</span>
                    <span>Wait for a response from our team</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center bg-gray-200 text-gray-700 rounded-full w-5 h-5 text-xs mr-2 mt-0.5">3</span>
                    <span>Fill out contracts and email Escrow officer</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center bg-gray-200 text-gray-700 rounded-full w-5 h-5 text-xs mr-2 mt-0.5">4</span>
                    <span>We verify that your selected Title Company is aligned</span>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-flex items-center justify-center bg-gray-200 text-gray-700 rounded-full w-5 h-5 text-xs mr-2 mt-0.5">5</span>
                    <span>We WIRE FUNDS!</span>
                  </li>
                </ol>
              </div>
              
              <button
                onClick={() => setCurrentStep(1)}
                className="mt-6 bg-gray-800 hover:bg-black text-white text-sm font-medium py-2 px-6 rounded-md transition-all duration-200"
              >
                Submit Another Request
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}