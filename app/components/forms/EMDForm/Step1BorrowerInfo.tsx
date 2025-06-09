import React from "react";
import { useForm } from "react-hook-form";
import FormInput from "~/components/ui/FormInput";
import FormCheckbox from "~/components/ui/FormCheckbox";

const Step1BorrowerInfo: React.FC = () => {
  const { register, formState: { errors } } = useForm();

  return (
    <form className="space-y-8">
      <input type="hidden" name="step" value="1" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
            Borrower First Name <span className="text-red-500">*</span>
          </label>
          <FormInput
            id="firstName"
            {...register("firstName", { required: true })}
            placeholder="Enter first name"
            aria-invalid={!!errors.firstName}
          />
          {errors.firstName && (
            <p className="text-red-600 text-sm mt-1" role="alert">First name is required.</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
            Borrower Last Name <span className="text-red-500">*</span>
          </label>
          <FormInput
            id="lastName"
            {...register("lastName", { required: true })}
            placeholder="Enter last name"
            aria-invalid={!!errors.lastName}
          />
          {errors.lastName && (
            <p className="text-red-600 text-sm mt-1" role="alert">Last name is required.</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <FormInput
            id="email"
            type="email"
            {...register("email", { 
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            })}
            placeholder="Enter email address"
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1" role="alert">Enter a valid email.</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <FormInput
            id="phone"
            type="tel"
            {...register("phone", { 
              required: true,
              pattern: /^\(\d{3}\) \d{3}-\d{4}$/
            })}
            placeholder="(555) 123-4567"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && (
            <p className="text-red-600 text-sm mt-1" role="alert">Enter a valid phone number.</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
          Borrower Entity (Company) Name
        </label>
        <FormInput
          id="company"
          {...register("company")}
          placeholder="Enter company name (optional)"
          aria-invalid={!!errors.company}
        />
        {errors.company && (
          <p className="text-red-600 text-sm mt-1" role="alert">
            {typeof errors.company === 'string' ? errors.company : 'This field has an error.'}
          </p>
        )}
      </div>

      <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <input
          id="referrer"
          type="checkbox"
          {...register("referrer")}
          className="w-5 h-5 text-primary border-gray-300 rounded focus:ring-primary focus:ring-2 mt-0.5"
        />
        <label htmlFor="referrer" className="block text-sm text-gray-700 font-medium leading-relaxed">
          A different individual is referring or brokering this deal
        </label>
      </div>

      <div className="pt-6">
        <button
          type="submit"
          name="_action"
          value="navigate"
          formAction="/emd?step=2"
          className="w-full bg-primary hover:bg-primary-hover text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
        >
          Next <span className="ml-1">→</span>
        </button>
      </div>
    </form>
  );
};

export default Step1BorrowerInfo;