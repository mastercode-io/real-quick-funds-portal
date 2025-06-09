import React from "react";
import type { MetaFunction } from "@remix-run/node";
import Step1BorrowerInfo from "~/components/forms/EMDForm/Step1BorrowerInfo";
import Step2DealInfo from "~/components/forms/EMDForm/Step2DealInfo";
import Step3Confirmation from "~/components/forms/EMDForm/Step3Confirmation";
import StepProgress from "~/components/forms/StepProgress";

export const meta: MetaFunction = () => {
  return [
    { title: "Earnest Money Deposit Request | Real Quick Funds" },
    { name: "description", content: "Submit your earnest money deposit request" },
  ];
};

const steps = [
  { id: 1, label: "Borrower Info" },
  { id: 2, label: "Deal Info" },
  { id: 3, label: "Confirmation" }
];

export default function EMDRoute() {
  const [currentStep, setCurrentStep] = React.useState(1);
  const [formData, setFormData] = React.useState({});

  const handleNext = (data: any) => {
    // Update form data with the latest input
    setFormData(prevData => ({ ...prevData, ...data }));
    
    // Move to the next step
    const nextStep = Math.min(currentStep + 1, steps.length);
    setCurrentStep(nextStep);
    
    // If moving to confirmation step (step 3), clear sensitive data after a short delay
    // This ensures the data is available for any final processing but doesn't persist longer than needed
    if (nextStep === 3) {
      // Store submission timestamp or confirmation ID if needed
      const submissionTime = new Date().toISOString();
      
      // Clear form data after a brief delay (to allow for any final processing)
      setTimeout(() => {
        setFormData({ submissionTime });
      }, 2000);
    }
  };

  const handleBack = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const updateFormData = (data: any) => {
    setFormData(prevData => ({ ...prevData, ...data }));
  };

  const handleReset = () => {
    setFormData({});
    setCurrentStep(1);
  };

  // Determine step title based on current step
  const getStepTitle = () => {
    switch(currentStep) {
      case 1:
        return "Borrower Information";
      case 2:
        return "Deal Information";
      case 3:
        return "Submission Confirmation";
      default:
        return "Earnest Money Deposit Request";
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1BorrowerInfo onNext={handleNext} formData={formData} />;
      case 2:
        return (
          <Step2DealInfo
            onNext={handleNext}
            onBack={handleBack}
            updateFormData={updateFormData}
            formData={formData}
          />
        );
      case 3:
        return <Step3Confirmation formData={formData} onReset={handleReset} />;
      default:
        return <Step1BorrowerInfo onNext={handleNext} formData={formData} />;
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
          <StepProgress 
            steps={steps}
            currentStep={currentStep}
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-5">
          <h2 className="text-lg font-medium text-gray-800 mb-4 pb-2 border-b border-gray-200">
            {getStepTitle()}
          </h2>
          
          {renderStep()}
        </div>
      </div>
    </div>
  );
}