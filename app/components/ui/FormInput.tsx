import React, { forwardRef } from 'react';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 
          placeholder:text-gray-400 bg-white transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
          hover:border-gray-400 ${className}`}
        {...props}
      />
    );
  }
);

FormInput.displayName = 'FormInput';

export default FormInput;
