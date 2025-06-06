// Form Step Types
export type FormStep = 'info' | 'details' | 'confirmation'

// Form Data Types
export interface BorrowerInfoFormData {
  borrowerFirstName: string
  borrowerLastName: string
  email: string
  phoneNumber: string
  companyName?: string
  hasReferral: boolean
}

export interface DealInfoFormData {
  requestedAmount: number
  fundsRequiredDate: string
  propertyAddress: {
    street: string
    city: string
    state: string
    zipCode: string
  }
  inspectionEndDate: string
  escrowCloseDate: string
  purchaseAgreement?: File
  wiringInstructions?: File
  termsAccepted: boolean
}

// Complete EMD Form Data
export interface EMDFormData extends BorrowerInfoFormData, DealInfoFormData {
  submissionDate: string
}

// API Response Types
export interface APIResponse {
  success: boolean
  message: string
  submissionId?: string
  errors?: string[]
}

// Form Context Types
export interface FormContextType {
  currentStep: FormStep
  setCurrentStep: (step: FormStep) => void
  borrowerInfo: BorrowerInfoFormData | null
  setBorrowerInfo: (data: BorrowerInfoFormData) => void
  dealInfo: DealInfoFormData | null
  setDealInfo: (data: DealInfoFormData) => void
  isSubmitting: boolean
  submissionError: string | null
  submissionId: string | null
  submitForm: () => Promise<void>
  resetForm: () => void
}

// Component Props
export interface FormNavigationProps {
  onBack?: () => void
  onNext?: () => void
  submitLabel?: string
  isSubmitting?: boolean
}