import React, { forwardRef } from 'react';

interface Option {
  value: string;
  label: string;
}

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: Option[];
  className?: string;
}

const FormSelect = forwardRef<HTMLSelectElement, FormSelectProps>(
  ({ options, className = '', ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-800
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
          hover:border-gray-400 ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }
);

FormSelect.displayName = 'FormSelect';

export default FormSelect;
