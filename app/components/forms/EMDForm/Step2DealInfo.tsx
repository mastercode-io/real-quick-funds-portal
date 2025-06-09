import React, { useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "~/components/ui/FormInput";
import FormSelect from "~/components/ui/FormSelect";
import FormCheckbox from "~/components/ui/FormCheckbox";

interface Step2DealInfoProps {
  onNext?: () => void;
  onBack: () => void;
  formData?: any;
  updateFormData?: (data: any) => void;
}

interface FileUploadProps {
  label: string;
  sublabel?: string;
  required?: boolean;
  accept?: string;
  onFileChange?: (file: File | null) => void;
  error?: string;
  showError?: boolean;
}

const FileUpload: React.FC<FileUploadProps> = ({ 
  label, 
  sublabel, 
  required = false, 
  accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png",
  onFileChange,
  error,
  showError = false
}) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isDragOver, setIsDragOver] = useState(false);

  const handleFileSelect = (file: File | null) => {
    setSelectedFile(file);
    onFileChange?.(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      handleFileSelect(files[0]);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-xs font-medium text-gray-700 mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {sublabel && (
        <p className="text-xs text-gray-500 mb-2">{sublabel}</p>
      )}
      <div
        className={`border-2 border-dashed rounded-md p-6 text-center transition-colors ${
          isDragOver 
            ? 'border-primary bg-primary/5' 
            : error && showError
            ? 'border-red-300 bg-red-50' 
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="flex flex-col items-center space-y-2">
          <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v6H8V5z" />
          </svg>
          {selectedFile ? (
            <div className="space-y-1">
              <p className="text-sm text-gray-700 font-medium">{selectedFile.name}</p>
              <p className="text-xs text-gray-500">{(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
              <button
                type="button"
                onClick={() => handleFileSelect(null)}
                className="text-xs text-red-600 hover:text-red-700"
              >
                Remove file
              </button>
            </div>
          ) : (
            <div className="space-y-1">
              <p className="text-sm text-gray-600">
                Drag & drop a file or <label className="text-primary hover:text-primary-hover cursor-pointer underline">
                  browse
                  <input
                    type="file"
                    className="hidden"
                    accept={accept}
                    onChange={handleFileInput}
                  />
                </label>
              </p>
            </div>
          )}
        </div>
      </div>
      {error && showError && (
        <p className="text-red-600 text-xs mt-1" role="alert">{error}</p>
      )}
    </div>
  );
};

const usStates = [
  { value: "", label: "Select State" },
  { value: "AL", label: "Alabama" },
  { value: "AK", label: "Alaska" },
  { value: "AZ", label: "Arizona" },
  { value: "AR", label: "Arkansas" },
  { value: "CA", label: "California" },
  { value: "CO", label: "Colorado" },
  { value: "CT", label: "Connecticut" },
  { value: "DE", label: "Delaware" },
  { value: "DC", label: "District of Columbia" },
  { value: "FL", label: "Florida" },
  { value: "GA", label: "Georgia" },
  { value: "HI", label: "Hawaii" },
  { value: "ID", label: "Idaho" },
  { value: "IL", label: "Illinois" },
  { value: "IN", label: "Indiana" },
  { value: "IA", label: "Iowa" },
  { value: "KS", label: "Kansas" },
  { value: "KY", label: "Kentucky" },
  { value: "LA", label: "Louisiana" },
  { value: "ME", label: "Maine" },
  { value: "MD", label: "Maryland" },
  { value: "MA", label: "Massachusetts" },
  { value: "MI", label: "Michigan" },
  { value: "MN", label: "Minnesota" },
  { value: "MS", label: "Mississippi" },
  { value: "MO", label: "Missouri" },
  { value: "MT", label: "Montana" },
  { value: "NE", label: "Nebraska" },
  { value: "NV", label: "Nevada" },
  { value: "NH", label: "New Hampshire" },
  { value: "NJ", label: "New Jersey" },
  { value: "NM", label: "New Mexico" },
  { value: "NY", label: "New York" },
  { value: "NC", label: "North Carolina" },
  { value: "ND", label: "North Dakota" },
  { value: "OH", label: "Ohio" },
  { value: "OK", label: "Oklahoma" },
  { value: "OR", label: "Oregon" },
  { value: "PA", label: "Pennsylvania" },
  { value: "PR", label: "Puerto Rico" },
  { value: "RI", label: "Rhode Island" },
  { value: "SC", label: "South Carolina" },
  { value: "SD", label: "South Dakota" },
  { value: "TN", label: "Tennessee" },
  { value: "TX", label: "Texas" },
  { value: "UT", label: "Utah" },
  { value: "VT", label: "Vermont" },
  { value: "VA", label: "Virginia" },
  { value: "WA", label: "Washington" },
  { value: "WV", label: "West Virginia" },
  { value: "WI", label: "Wisconsin" },
  { value: "WY", label: "Wyoming" }
];

const Step2DealInfo: React.FC<Step2DealInfoProps> = ({ 
  onNext, 
  onBack, 
  formData, 
  updateFormData 
}) => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch, setValue } = useForm({
    defaultValues: formData || {}
  });

  const [purchaseAgreementFile, setPurchaseAgreementFile] = useState<File | null>(null);
  const [wiringInstructionsFile, setWiringInstructionsFile] = useState<File | null>(null);

  const endOfInspectionDate = watch("endOfInspectionDate");
  const closeOfEscrowDate = watch("closeOfEscrowDate");

  const onSubmit = (data: any) => {
    const formDataWithFiles = {
      ...data,
      purchaseAgreementFile,
      wiringInstructionsFile
    };
    updateFormData?.(formDataWithFiles);
    onNext?.();
  };

  const handleBack = () => {
    // Save current form data without validation
    const currentData = {
      ...watch(),
      purchaseAgreementFile,
      wiringInstructionsFile
    };
    updateFormData?.(currentData);
    onBack?.();
  };

  const formatCurrency = (value: string) => {
    const numericValue = value.replace(/[^0-9.]/g, '');
    if (numericValue === '') return '';
    
    const number = parseFloat(numericValue);
    if (isNaN(number)) return '';
    
    return number.toLocaleString('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 2
    });
  };

  const handleCurrencyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatCurrency(e.target.value);
    setValue("requestedAmount", formatted);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <input type="hidden" name="step" value="2" />
      
      {/* Requested Amount and Funds Required Date in one row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Requested Amount */}
        <div>
          <label htmlFor="requestedAmount" className="block text-xs font-medium text-gray-700 mb-1">
            Requested Amount <span className="text-red-500">*</span>
          </label>
          <div className="relative mt-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500">$</span>
            </div>
            <FormInput
              id="requestedAmount"
              {...register("requestedAmount", { required: "Requested amount is required" })}
              className="pl-7"
              placeholder="0.00"
              onChange={handleCurrencyChange}
              aria-invalid={!!errors.requestedAmount}
            />
          </div>
          {errors.requestedAmount && (
            <p className="text-red-600 text-xs mt-1" role="alert">
              {typeof errors.requestedAmount.message === 'string' ? errors.requestedAmount.message : 'Requested amount is required'}
            </p>
          )}
        </div>

        {/* When Funds Required Date */}
        <div>
          <label htmlFor="fundsRequiredDate" className="block text-xs font-medium text-gray-700 mb-1">
            When Funds Required <span className="text-red-500">*</span>
          </label>
          <p className="text-xs text-gray-500 mb-1">
            Please allow 1-2 business days for processing
          </p>
          <FormInput
            id="fundsRequiredDate"
            type="date"
            {...register("fundsRequiredDate", { required: "Funds required date is required" })}
            aria-invalid={!!errors.fundsRequiredDate}
          />
          {errors.fundsRequiredDate && (
            <p className="text-red-600 text-xs mt-1" role="alert">
              {typeof errors.fundsRequiredDate.message === 'string' ? errors.fundsRequiredDate.message : 'Funds required date is required'}
            </p>
          )}
        </div>
      </div>

      {/* End of Inspection Period and Close of Escrow Date */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="endOfInspectionDate" className="block text-xs font-medium text-gray-700 mb-1">
            End of Inspection Period <span className="text-red-500">*</span>
          </label>
          <FormInput
            id="endOfInspectionDate"
            type="date"
            {...register("endOfInspectionDate", { 
              required: "End of inspection period is required"
            })}
            aria-invalid={!!errors.endOfInspectionDate}
          />
          {errors.endOfInspectionDate && (
            <p className="text-red-600 text-xs mt-1" role="alert">
              {typeof errors.endOfInspectionDate.message === 'string' ? errors.endOfInspectionDate.message : 'End of inspection period is required'}
            </p>
          )}
        </div>
        
        <div>
          <label htmlFor="closeOfEscrowDate" className="block text-xs font-medium text-gray-700 mb-1">
            Close of Escrow Date <span className="text-red-500">*</span>
          </label>
          <FormInput
            id="closeOfEscrowDate"
            type="date"
            {...register("closeOfEscrowDate", { 
              required: "Close of escrow date is required",
              validate: (value) => {
                if (endOfInspectionDate && value && new Date(value) <= new Date(endOfInspectionDate)) {
                  return "Close of escrow date must be after end of inspection period";
                }
                return true;
              }
            })}
            aria-invalid={!!errors.closeOfEscrowDate}
          />
          {errors.closeOfEscrowDate && (
            <p className="text-red-600 text-xs mt-1" role="alert">
              {typeof errors.closeOfEscrowDate.message === 'string' ? errors.closeOfEscrowDate.message : 'Close of escrow date is required'}
            </p>
          )}
        </div>
      </div>

      {/* Subject Property Address */}
      <div>
        <label htmlFor="propertyAddress" className="block text-xs font-medium text-gray-700 mb-1">
          Subject Property Address <span className="text-red-500">*</span>
        </label>
        <div className="space-y-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
            <FormInput
              id="propertyAddress"
              {...register("propertyAddress", { required: "Property address is required" })}
              className="pl-9"
              placeholder="Enter property address"
              aria-invalid={!!errors.propertyAddress}
            />
          </div>
          {errors.propertyAddress && (
            <p className="text-red-600 text-xs mt-1" role="alert">
              {typeof errors.propertyAddress.message === 'string' ? errors.propertyAddress.message : 'Property address is required'}
            </p>
          )}
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <FormInput
                id="propertyCity"
                {...register("propertyCity", { required: "City is required" })}
                placeholder="City"
                aria-invalid={!!errors.propertyCity}
              />
              {errors.propertyCity && (
                <p className="text-red-600 text-xs mt-1" role="alert">
                  {typeof errors.propertyCity.message === 'string' ? errors.propertyCity.message : 'City is required'}
                </p>
              )}
            </div>
            
            <div>
              <FormSelect
                id="propertyState"
                {...register("propertyState", { required: "State is required" })}
                options={usStates}
                aria-invalid={!!errors.propertyState}
              />
              {errors.propertyState && (
                <p className="text-red-600 text-xs mt-1" role="alert">
                  {typeof errors.propertyState.message === 'string' ? errors.propertyState.message : 'State is required'}
                </p>
              )}
            </div>
            
            <div>
              <FormInput
                id="propertyZip"
                {...register("propertyZip", { 
                  required: "ZIP code is required",
                  pattern: {
                    value: /^\d{5}(-\d{4})?$/,
                    message: "Enter a valid ZIP code"
                  }
                })}
                placeholder="ZIP Code"
                aria-invalid={!!errors.propertyZip}
              />
              {errors.propertyZip && (
                <p className="text-red-600 text-xs mt-1" role="alert">
                  {typeof errors.propertyZip.message === 'string' ? errors.propertyZip.message : 'Enter a valid ZIP code'}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Purchase & Sale Agreement */}
      <FileUpload
        label="Purchase & Sale Agreement"
        sublabel="Please upload the most current signed version of the purchase agreement"
        required={true}
        accept=".pdf,.doc,.docx"
        onFileChange={setPurchaseAgreementFile}
        error={!purchaseAgreementFile ? "Purchase agreement is required" : undefined}
        showError={isSubmitting}
      />

      {/* Wiring Instructions */}
      <FileUpload
        label="Wiring Instructions"
        sublabel="Please upload the wiring instructions for Title / Escrow"
        required={true}
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
        onFileChange={setWiringInstructionsFile}
        error={!wiringInstructionsFile ? "Wiring instructions are required" : undefined}
        showError={isSubmitting}
      />

      {/* Privacy Policy Text */}
      <div className="p-4 bg-gray-50 rounded-md border border-gray-200 text-xs text-gray-700 leading-relaxed">
        <p className="mb-3">
          Real Quick Funds, LLC is committed to protecting and respecting your privacy, and we'll only use your personal information to administer your account and to provide the products and services you requested from us. From time to time, we would like to contact you about our products and services, as well as other content that may be of interest to you.
        </p>
        <p className="mb-3">
          You can unsubscribe from these communications at any time. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy.
        </p>
        <p>
          You consent to allow Real Quick Funds, LLC to store and process the personal information submitted above to provide you the content requested.
        </p>
      </div>

      {/* Terms Agreement */}
      <div className="flex items-start space-x-2 p-3 bg-gray-50 rounded-md border border-gray-200">
        <input
          id="termsAgreement"
          type="checkbox"
          {...register("termsAgreement", { required: "You must agree to the terms and conditions" })}
          className="w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary focus:ring-1 mt-0.5"
        />
        <label htmlFor="termsAgreement" className="block text-xs text-gray-700 font-medium leading-relaxed">
          I agree to the terms and conditions above <span className="text-red-500">*</span>
        </label>
      </div>
      {errors.termsAgreement && (
        <p className="text-red-600 text-xs mt-1" role="alert">
          {typeof errors.termsAgreement.message === 'string' ? errors.termsAgreement.message : 'You must agree to the terms and conditions'}
        </p>
      )}

      {/* Submit Button */}
      <div className="pt-4 flex flex-col md:flex-row md:justify-between gap-3">
        <button
          type="button"
          onClick={handleBack}
          className="w-full md:w-auto bg-primary hover:bg-primary-hover text-white font-medium py-2.5 px-6 rounded-md transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg text-sm"
        >
          <span className="mr-1">←</span> Back
        </button>
        
        <button
          type="submit"
          className="w-full md:w-auto bg-gray-900 hover:bg-black text-white font-medium py-2.5 px-6 rounded-md transition-all duration-200 flex items-center justify-center space-x-2 shadow-md hover:shadow-lg text-sm"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Step2DealInfo;