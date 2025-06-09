import React from 'react';

interface Step {
  id: number;
  label: string;
}

interface StepProgressProps {
  steps: Step[];
  currentStep: number;
}

const StepProgress: React.FC<StepProgressProps> = ({ steps, currentStep }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          const isCompleted = step.id < currentStep;
          const isLast = index === steps.length - 1;
          
          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <div 
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium transition-all duration-200
                    ${isActive ? 'bg-primary text-white shadow-md scale-105' : 
                      isCompleted ? 'bg-primary-dark text-white' : 'bg-gray-200 text-gray-600'}`}
                >
                  {isCompleted ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step.id
                  )}
                </div>
                <span 
                  className={`mt-1 text-xs
                    ${isActive ? 'text-primary font-medium' : 
                      isCompleted ? 'text-primary-dark' : 'text-gray-500'}`}
                >
                  {step.label}
                </span>
              </div>
              
              {!isLast && (
                <div 
                  className={`flex-1 h-0.5 mx-1
                    ${step.id < currentStep ? 'bg-primary-dark' : 'bg-gray-200'}`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default StepProgress;
