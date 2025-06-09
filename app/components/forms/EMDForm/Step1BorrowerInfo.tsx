import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "~/components/ui/FormInput";
import FormCheckbox from "~/components/ui/FormCheckbox";

interface Step1BorrowerInfoProps {
  onNext?: (data: any) => void;
  formData?: any;
}

const Step1BorrowerInfo: React.FC<Step1BorrowerInfoProps> = ({ onNext, formData }) => {
  const { register, handleSubmit, formState: { errors }, setValue, watch } = useForm({
    defaultValues: formData || {}
  });

  const onSubmit = (data: any) => {
    // Strip formatting from phone number before submitting
    if (data.phone) {
      data.phone = data.phone.replace(/\D/g, '');
    }
    onNext?.(data);
  };

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const cleaned = value.replace(/\D/g, '');
    
    // Format the number based on length
    if (cleaned.length === 0) {
      return '';
    } else if (cleaned.length <= 3) {
      return `(${cleaned}`;
    } else if (cleaned.length <= 6) {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    } else {
      return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setValue('phone', formatted);
  };

  // Format phone on initial load if it's a plain number string
  React.useEffect(() => {
    const currentPhone = watch('phone');
    if (currentPhone && /^\d+$/.test(currentPhone)) {
      setValue('phone', formatPhoneNumber(currentPhone));
    }
  }, [watch, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <input type="hidden" name="step" value="1" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="block text-xs font-medium text-gray-700 mb-1">
            Borrower First Name <span className="text-red-500">*</span>
          </label>
          <FormInput
            id="firstName"
            {...register("firstName", { required: "First name is required" })}
            placeholder="Enter first name"
            aria-invalid={!!errors.firstName}
          />
          {errors.firstName && (
            <p className="text-red-600 text-xs mt-1" role="alert">
              {typeof errors.firstName.message === 'string' ? errors.firstName.message : 'First name is required'}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-xs font-medium text-gray-700 mb-1">
            Borrower Last Name <span className="text-red-500">*</span>
          </label>
          <FormInput
            id="lastName"
            {...register("lastName", { required: "Last name is required" })}
            placeholder="Enter last name"
            aria-invalid={!!errors.lastName}
          />
          {errors.lastName && (
            <p className="text-red-600 text-xs mt-1" role="alert">
              {typeof errors.lastName.message === 'string' ? errors.lastName.message : 'Last name is required'}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">
            Email <span className="text-red-500">*</span>
          </label>
          <FormInput
            id="email"
            type="email"
            {...register("email", { 
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Enter a valid email address"
              }
            })}
            placeholder="Enter email address"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-red-600 text-xs mt-1" role="alert">
              {typeof errors.email.message === 'string' ? errors.email.message : 'Enter a valid email'}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-medium text-gray-700 mb-1">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <FormInput
            id="phone"
            type="tel"
            {...register("phone", { 
              required: "Phone number is required",
              pattern: {
                value: /^\(\d{3}\) \d{3}-\d{4}$/,
                message: "Format: (555) 123-4567"
              }
            })}
            placeholder="(555) 123-4567"
            onChange={handlePhoneChange}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="text-red-600 text-xs mt-1" role="alert">
              {typeof errors.phone.message === 'string' ? errors.phone.message : 'Enter a valid phone number'}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-xs font-medium text-gray-700 mb-1">
          Borrower Entity (Company) Name
        </label>
        <FormInput
          id="company"
          {...register("company")}
          placeholder="Enter company name (optional)"
          aria-invalid={!!errors.company}
        />
        {errors.company && (
          <p className="text-red-600 text-xs mt-1" role="alert">
            {typeof errors.company.message === 'string' ? errors.company.message : 'This field has an error'}
          </p>
        )}
      </div>

      <div className="flex items-start space-x-2 p-3 bg-gray-50 rounded-md border border-gray-200">
        <input
          id="hasDifferentBroker"
          type="checkbox"
          {...register("hasDifferentBroker")}
          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-1 mt-0.5"
        />
        <label htmlFor="hasDifferentBroker" className="block text-xs text-gray-700 font-medium leading-relaxed">
          A different individual is referring or brokering this deal
        </label>
      </div>

      <div className="pt-4 flex justify-end">
        <button
          type="submit"
          className="md:w-auto bg-primary hover:bg-primary-hover text-white font-medium py-2.5 px-6 rounded-md transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg text-sm"
        >
          Next <span className="ml-1">→</span>
        </button>
      </div>
    </form>
  );
};

export default Step1BorrowerInfo;