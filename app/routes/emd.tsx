import type { MetaFunction } from "@remix-run/node";
import Step1BorrowerInfo from "~/components/forms/EMDForm/Step1BorrowerInfo";
import StepProgress from "~/components/forms/StepProgress";

export const meta: MetaFunction = () => {
  return [
    { title: "EMD Request" },
    { name: "description", content: "Earnest Money Deposit request form for RealQuick Funds clients" },
  ];
};

export default function EMD() {
  const steps = [
    { id: 1, label: "Borrower Info" },
    { id: 2, label: "Deal Info" },
    { id: 3, label: "Confirmation" }
  ];
  
  const currentStep = 1;

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
            Borrower Information
          </h2>
          
          <Step1BorrowerInfo />
        </div>
      </div>
    </div>
  );
}