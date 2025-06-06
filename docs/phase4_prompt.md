# Phase 4: Step 3 & API Integration - Complete Implementation Prompt

## Context
You are implementing Phase 4 of the Real Quick Funds EMD Request Form. Phases 1-3 (foundation, Step 1, Step 2) are complete. Now building Step 3 (Confirmation), Netlify Function for API integration, and complete form submission with error handling.

**CRITICAL**: This phase includes proper TypeScript configuration for Netlify Functions and comprehensive error handling to prevent deployment issues.

## Objectives
1. Build Step 3 confirmation page with proper styling
2. Create Netlify Function for Zoho API integration
3. Implement form submission with file handling
4. Add error handling and loading states
5. Complete end-to-end testing
6. **Configure Netlify Functions with proper TypeScript support**

## Dependencies for Netlify Functions
```bash
npm install @netlify/functions@^1.4.0 --save-dev
```

## Implementation Tasks

### Task 1: Step 3 Confirmation Component

**File: `src/styles/components/Confirmation.module.css`**
```css
.confirmation {
  text-align: center;
  padding: var(--spacing-3xl) var(--spacing-xl);
}

.successIcon {
  width: 80px;
  height: 80px;
  margin: 0 auto var(--spacing-xl);
  color: #10B981; /* Green success color */
  background-color: rgba(16, 185, 129, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.title {
  font-size: var(--font-size-section);
  color: var(--charcoal);
  margin-bottom: var(--spacing-md);
  font-weight: 700;
}

.subtitle {
  font-size: var(--font-size-body-large);
  color: var(--dark-gray);
  margin-bottom: var(--spacing-3xl);
  font-weight: 500;
}

.processList {
  text-align: left;
  max-width: 500px;
  margin: 0 auto;
  background-color: var(--light-gray);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-xl);
}

.processStep {
  display: flex;
  align-items: flex-start;
  margin-bottom: var(--spacing-lg);
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
}

.processStep:last-child {
  margin-bottom: 0;
}

.stepNumber {
  background-color: var(--primary-orange);
  color: var(--white);
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-size-small);
  font-weight: 600;
  margin-right: var(--spacing-md);
  flex-shrink: 0;
  margin-top: 2px;
}

.stepText {
  color: var(--charcoal);
}

.completedStep {
  font-weight: 600;
  color: var(--primary-orange);
}

.actionButtons {
  margin-top: var(--spacing-3xl);
  display: flex;
  gap: var(--spacing-md);
  justify-content: center;
  flex-wrap: wrap;
}

.actionButton {
  background-color: var(--primary-orange);
  color: var(--white);
  border: none;
  border-radius: var(--border-radius-sm);
  padding: 12px 24px;
  font-size: var(--font-size-body);
  font-weight: 600;
  cursor: pointer;
  transition: all var(--transition-standard);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.actionButton:hover {
  background-color: var(--dark-orange);
  color: var(--white);
}

.actionButtonSecondary {
  background-color: transparent;
  color: var(--charcoal);
  border: 2px solid var(--medium-gray);
}

.actionButtonSecondary:hover {
  background-color: var(--light-gray);
  border-color: var(--dark-gray);
  color: var(--charcoal);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .confirmation {
    padding: var(--spacing-xl) var(--spacing-md);
  }
  
  .successIcon {
    width: 60px;
    height: 60px;
  }
  
  .title {
    font-size: var(--font-size-subsection);
  }
  
  .actionButtons {
    flex-direction: column;
    align-items: center;
  }
  
  .actionButton {
    width: 100%;
    max-width: 280px;
    justify-content: center;
  }
}
```

**File: `src/components/forms/Step3Confirmation.tsx`** (Replace placeholder)
```tsx
import React from 'react'
import styles from '../../styles/components/Confirmation.module.css'

interface Step3Props {
  submissionId?: string
  onStartNew: () => void
}

const CheckCircleIcon: React.FC = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1.414 14.586L6.293 12.293a1 1 0 011.414-1.414L10 13.172l5.293-5.293a1 1 0 011.414 1.414l-6 6a1 1 0 01-1.414 0z" clipRule="evenodd" />
  </svg>
)

const HomeIcon: React.FC = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
)

const PlusIcon: React.FC = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
  </svg>
)

export const Step3Confirmation: React.FC<Step3Props> = ({ submissionId, onStartNew }) => {
  const processSteps = [
    { text: "Submit your request (DONE!)", completed: true },
    { text: "Wait for a response from our team", completed: false },
    { text: "Fill out contracts and email Escrow officer", completed: false },
    { text: "We verify that your selected Title Company is aligned", completed: false },
    { text: "We WIRE FUNDS!", completed: false },
  ]

  return (
    <div className={styles.confirmation}>
      <div className={styles.successIcon}>
        <CheckCircleIcon />
      </div>
      
      <h2 className={styles.title}>
        Thank you for your submission.
      </h2>
      
      <p className={styles.subtitle}>
        The Entire Process is as Follows:
      </p>
      
      <div className={styles.processList}>
        {processSteps.map((step, index) => (
          <div key={index} className={styles.processStep}>
            <div className={styles.stepNumber}>
              {index + 1}
            </div>
            <div className={`${styles.stepText} ${step.completed ? styles.completedStep : ''}`}>
              {step.text}
            </div>
          </div>
        ))}
      </div>

      {submissionId && (
        <p style={{ 
          marginTop: 'var(--spacing-xl)', 
          fontSize: 'var(--font-size-small)',
          color: 'var(--dark-gray)'
        }}>
          Submission ID: <strong>{submissionId}</strong>
        </p>
      )}
      
      <div className={styles.actionButtons}>
        <button
          onClick={onStartNew}
          className={`${styles.actionButton} ${styles.actionButtonSecondary}`}
        >
          <PlusIcon />
          Submit Another Request
        </button>
        
        <a
          href="https://realquickfunds.com"
          className={styles.actionButton}
        >
          <HomeIcon />
          Return to Website
        </a>
      </div>
    </div>
  )
}
```

### Task 2: Loading and Error Components

**File: `src/styles/components/LoadingError.module.css`**
```css
.loadingOverlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.loadingContent {
  background-color: var(--white);
  border-radius: var(--border-radius-md);
  padding: var(--spacing-3xl);
  text-align: center;
  box-shadow: var(--shadow-md);
  max-width: 400px;
  margin: var(--spacing-lg);
}

.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid var(--light-gray);
  border-top: 4px solid var(--primary-orange);
  border-radius: 50%;
  animation: spin 1s linear infinite;
  margin: 0 auto var(--spacing-lg);
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loadingText {
  font-size: var(--font-size-body-large);
  color: var(--charcoal);
  font-weight: 500;
  margin-bottom: var(--spacing-sm);
}

.loadingSubtext {
  font-size: var(--font-size-small);
  color: var(--dark-gray);
}

.errorAlert {
  background-color: #FEF2F2;
  border: 1px solid #FECACA;
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
}

.errorIcon {
  width: 20px;
  height: 20px;
  color: #DC2626;
  margin-right: var(--spacing-sm);
}

.errorHeader {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-sm);
}

.errorTitle {
  font-size: var(--font-size-body);
  font-weight: 600;
  color: #DC2626;
}

.errorMessage {
  font-size: var(--font-size-small);
  color: #7F1D1D;
  line-height: var(--line-height-body);
}

.retryButton {
  background-color: #DC2626;
  color: var(--white);
  border: none;
  border-radius: var(--border-radius-sm);
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--font-size-small);
  font-weight: 500;
  cursor: pointer;
  margin-top: var(--spacing-md);
  transition: background-color var(--transition-standard);
}

.retryButton:hover {
  background-color: #B91C1C;
}
```

**File: `src/components/ui/LoadingOverlay.tsx`**
```tsx
import React from 'react'
import styles from '../../styles/components/LoadingError.module.css'

interface LoadingOverlayProps {
  message?: string
  subMessage?: string
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({ 
  message = "Submitting your request...",
  subMessage = "Please wait while we process your information."
}) => {
  return (
    <div className={styles.loadingOverlay}>
      <div className={styles.loadingContent}>
        <div className={styles.spinner} />
        <div className={styles.loadingText}>{message}</div>
        <div className={styles.loadingSubtext}>{subMessage}</div>
      </div>
    </div>
  )
}
```

**File: `src/components/ui/ErrorAlert.tsx`**
```tsx
import React from 'react'
import styles from '../../styles/components/LoadingError.module.css'

interface ErrorAlertProps {
  title?: string
  message: string
  onRetry?: () => void
}

const ExclamationIcon: React.FC = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
  </svg>
)

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ 
  title = "Submission Error",
  message,
  onRetry
}) => {
  return (
    <div className={styles.errorAlert}>
      <div className={styles.errorHeader}>
        <div className={styles.errorIcon}>
          <ExclamationIcon />
        </div>
        <span className={styles.errorTitle}>{title}</span>
      </div>
      <div className={styles.errorMessage}>{message}</div>
      {onRetry && (
        <button onClick={onRetry} className={styles.retryButton}>
          Try Again
        </button>
      )}
    </div>
  )
}
```

### Task 3: Form Submission Service

**File: `src/services/formSubmission.ts`**
```typescript
import { BorrowerInfoFormData, DealInfoFormData } from '../utils/validation'

export interface SubmissionData {
  borrowerInfo: BorrowerInfoFormData
  dealInfo: DealInfoFormData
}

export interface SubmissionResponse {
  success: boolean
  message: string
  submissionId?: string
  errors?: string[]
}

export class FormSubmissionService {
  private static async uploadFile(file: File): Promise<string> {
    // Convert file to base64 for JSON transmission
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.onload = () => {
        const result = reader.result as string
        resolve(result.split(',')[1]) // Remove data:mime;base64, prefix
      }
      reader.onerror = reject
      reader.readAsDataURL(file)
    })
  }

  static async submitForm(data: SubmissionData): Promise<SubmissionResponse> {
    try {
      // Prepare files for upload
      const purchaseAgreementBase64 = data.dealInfo.purchaseAgreement ? 
        await this.uploadFile(data.dealInfo.purchaseAgreement as File) : null
      
      const wiringInstructionsBase64 = data.dealInfo.wiringInstructions ? 
        await this.uploadFile(data.dealInfo.wiringInstructions as File) : null

      // Prepare submission payload
      const payload = {
        // Borrower Information
        borrowerFirstName: data.borrowerInfo.borrowerFirstName,
        borrowerLastName: data.borrowerInfo.borrowerLastName,
        email: data.borrowerInfo.email,
        phoneNumber: data.borrowerInfo.phoneNumber,
        companyName: data.borrowerInfo.companyName || '',
        hasReferral: data.borrowerInfo.hasReferral,
        
        // Deal Information
        requestedAmount: data.dealInfo.requestedAmount,
        fundsRequiredDate: data.dealInfo.fundsRequiredDate,
        propertyAddress: data.dealInfo.propertyAddress,
        inspectionEndDate: data.dealInfo.inspectionEndDate,
        escrowCloseDate: data.dealInfo.escrowCloseDate,
        termsAccepted: data.dealInfo.termsAccepted,
        
        // File attachments (base64 encoded)
        purchaseAgreement: purchaseAgreementBase64 ? {
          filename: (data.dealInfo.purchaseAgreement as File).name,
          data: purchaseAgreementBase64,
          mimeType: (data.dealInfo.purchaseAgreement as File).type,
        } : null,
        
        wiringInstructions: wiringInstructionsBase64 ? {
          filename: (data.dealInfo.wiringInstructions as File).name,
          data: wiringInstructionsBase64,
          mimeType: (data.dealInfo.wiringInstructions as File).type,
        } : null,
        
        // Metadata
        submissionDate: new Date().toISOString(),
        userAgent: navigator.userAgent,
      }

      // Submit to Netlify Function
      const response = await fetch('/.netlify/functions/submit-emd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result: SubmissionResponse = await response.json()
      return result

    } catch (error) {
      console.error('Form submission error:', error)
      
      // Return structured error response
      return {
        success: false,
        message: error instanceof Error ? error.message : 'An unexpected error occurred',
        errors: ['Failed to submit form. Please try again or contact support.'],
      }
    }
  }
}
```

### Task 4: Netlify Function (Critical TypeScript Configuration)

**File: `netlify/functions/tsconfig.json`** (Create directory and file)
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "CommonJS",
    "lib": ["ES2020"],
    "outDir": "../../dist-functions",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",
    "resolveJsonModule": true
  },
  "include": ["**/*.ts"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
```

**File: `netlify/functions/submit-emd.ts`**
```typescript
import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'

interface FileAttachment {
  filename: string
  data: string // base64 encoded
  mimeType: string
}

interface SubmissionPayload {
  // Borrower Information
  borrowerFirstName: string
  borrowerLastName: string
  email: string
  phoneNumber: string
  companyName?: string
  hasReferral: boolean
  
  // Deal Information
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
  termsAccepted: boolean
  
  // File attachments
  purchaseAgreement?: FileAttachment
  wiringInstructions?: FileAttachment
  
  // Metadata
  submissionDate: string
  userAgent: string
}

interface ZohoResponse {
  success: boolean
  data?: any
  message?: string
  errors?: string[]
}

// Mock Zoho API call - replace with actual implementation when endpoint is available
async function submitToZoho(payload: SubmissionPayload): Promise<ZohoResponse> {
  // This is a mock implementation
  // Replace with actual Zoho API integration when endpoint is available
  
  console.log('Mock Zoho submission:', {
    borrower: `${payload.borrowerFirstName} ${payload.borrowerLastName}`,
    email: payload.email,
    amount: payload.requestedAmount,
    hasFiles: !!(payload.purchaseAgreement && payload.wiringInstructions),
  })

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000))

  // Mock successful response
  return {
    success: true,
    data: {
      submissionId: `EMD-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      status: 'received',
    },
    message: 'EMD request submitted successfully',
  }

  // Uncomment to test error scenarios:
  // return {
  //   success: false,
  //   message: 'Zoho API temporarily unavailable',
  //   errors: ['Please try again in a few minutes'],
  // }
}

// Validate submission payload
function validatePayload(payload: any): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  // Required fields validation
  if (!payload.borrowerFirstName?.trim()) errors.push('Borrower first name is required')
  if (!payload.borrowerLastName?.trim()) errors.push('Borrower last name is required')
  if (!payload.email?.trim()) errors.push('Email is required')
  if (!payload.phoneNumber?.trim()) errors.push('Phone number is required')
  if (!payload.requestedAmount || payload.requestedAmount < 1000) errors.push('Valid requested amount is required')
  if (!payload.fundsRequiredDate) errors.push('Funds required date is required')
  if (!payload.propertyAddress?.street?.trim()) errors.push('Property address is required')
  if (!payload.propertyAddress?.city?.trim()) errors.push('Property city is required')
  if (!payload.propertyAddress?.state?.trim()) errors.push('Property state is required')
  if (!payload.propertyAddress?.zipCode?.trim()) errors.push('Property ZIP code is required')
  if (!payload.inspectionEndDate) errors.push('Inspection end date is required')
  if (!payload.escrowCloseDate) errors.push('Escrow close date is required')
  if (!payload.termsAccepted) errors.push('Terms must be accepted')

  // File validation
  if (!payload.purchaseAgreement) errors.push('Purchase agreement file is required')
  if (!payload.wiringInstructions) errors.push('Wiring instructions file is required')

  return {
    valid: errors.length === 0,
    errors,
  }
}

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Set CORS headers
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  }

  // Handle preflight requests
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers,
      body: '',
    }
  }

  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Method not allowed',
        errors: ['Only POST requests are supported'],
      }),
    }
  }

  try {
    // Parse request body
    if (!event.body) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Request body is required',
          errors: ['No data provided'],
        }),
      }
    }

    let payload: SubmissionPayload
    try {
      payload = JSON.parse(event.body)
    } catch (parseError) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Invalid JSON in request body',
          errors: ['Request body must be valid JSON'],
        }),
      }
    }

    // Validate payload
    const validation = validatePayload(payload)
    if (!validation.valid) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({
          success: false,
          message: 'Validation failed',
          errors: validation.errors,
        }),
      }
    }

    // Submit to Zoho (or mock)
    const zohoResponse = await submitToZoho(payload)

    if (zohoResponse.success) {
      return {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          success: true,
          message: 'EMD request submitted successfully',
          submissionId: zohoResponse.data?.submissionId,
        }),
      }
    } else {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({
          success: false,
          message: zohoResponse.message || 'Submission failed',
          errors: zohoResponse.errors || ['Unknown error occurred'],
        }),
      }
    }

  } catch (error) {
    console.error('Netlify function error:', error)
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        success: false,
        message: 'Internal server error',
        errors: ['An unexpected error occurred. Please try again later.'],
      }),
    }
  }
}
```

### Task 5: Update Form Context with Submission Logic

**File: `src/contexts/FormContext.tsx` (Update)**
```tsx
import React, { createContext, useContext, useState, ReactNode } from 'react'
import { BorrowerInfoFormData, DealInfoFormData } from '../utils/validation'
import { FormStep, FormContextType } from '../types'
import { FormSubmissionService, SubmissionResponse } from '../services/formSubmission'

const FormContext = createContext<FormContextType | undefined>(undefined)

interface FormProviderProps {
  children: ReactNode
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<FormStep>('info')
  const [borrowerInfo, setBorrowerInfo] = useState<BorrowerInfoFormData | null>(null)
  const [dealInfo, setDealInfo] = useState<DealInfoFormData | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submissionError, setSubmissionError] = useState<string | null>(null)
  const [submissionId, setSubmissionId] = useState<string | null>(null)

  const submitForm = async (): Promise<void> => {
    if (!borrowerInfo || !dealInfo) {
      setSubmissionError('Missing form data')
      return
    }

    setIsSubmitting(true)
    setSubmissionError(null)

    try {
      const response: SubmissionResponse = await FormSubmissionService.submitForm({
        borrowerInfo,
        dealInfo,
      })

      if (response.success) {
        setSubmissionId(response.submissionId || null)
        setCurrentStep('confirmation')
      } else {
        setSubmissionError(response.message || 'Submission failed')
      }
    } catch (error) {
      setSubmissionError(error instanceof Error ? error.message : 'An unexpected error occurred')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = (): void => {
    setCurrentStep('info')
    setBorrowerInfo(null)
    setDealInfo(null)
    setIsSubmitting(false)
    setSubmissionError(null)
    setSubmissionId(null)
  }

  return (
    <FormContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        borrowerInfo,
        setBorrowerInfo,
        dealInfo,
        setDealInfo,
        isSubmitting,
        submissionError,
        submissionId,
        submitForm,
        resetForm,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext = (): FormContextType => {
  const context = useContext(FormContext)
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider')
  }
  return context
}
```

### Task 6: Update Types (CRITICAL for TypeScript)

**File: `src/types/index.ts`** (Update to include new types)
```typescript
// Form Step Types
export type FormStep = 'info' | 'details' | 'confirmation'

// Re-export validation types
export type { BorrowerInfoFormData, DealInfoFormData } from '../utils/validation'

// Complete EMD Form Data
export interface EMDFormData {
  borrowerInfo: BorrowerInfoFormData
  dealInfo: DealInfoFormData
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
```

### Task 7: Update EMD Form Page with Complete Flow

**File: `src/pages/EMDForm.tsx` (Final Update)**
```tsx
import React from 'react'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Container } from '../components/layout/Container'
import { StepProgress } from '../components/ui/StepProgress'
import { Step1BorrowerInfo } from '../components/forms/Step1BorrowerInfo'
import { Step2DealInfo } from '../components/forms/Step2DealInfo'
import { Step3Confirmation } from '../components/forms/Step3Confirmation'
import { LoadingOverlay } from '../components/ui/LoadingOverlay'
import { ErrorAlert } from '../components/ui/ErrorAlert'
import { FormProvider, useFormContext } from '../contexts/FormContext'
import { BorrowerInfoFormData, DealInfoFormData } from '../utils/validation'

const EMDFormContent: React.FC = () => {
  const { 
    currentStep, 
    setCurrentStep, 
    borrowerInfo, 
    setBorrowerInfo,
    dealInfo,
    setDealInfo,
    isSubmitting,
    submissionError,
    submissionId,
    submitForm,
    resetForm,
  } = useFormContext()

  const handleStep1Next = (data: BorrowerInfoFormData): void => {
    setBorrowerInfo(data)
    setCurrentStep('details')
  }

  const handleStep2Next = async (data: DealInfoFormData): Promise<void> => {
    setDealInfo(data)
    await submitForm()
  }

  const handleStep2Back = (): void => {
    setCurrentStep('info')
  }

  const handleRetrySubmission = async (): Promise<void> => {
    if (dealInfo) {
      await submitForm()
    }
  }

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 'info':
        return (
          <Step1BorrowerInfo
            onNext={handleStep1Next}
            defaultValues={borrowerInfo || undefined}
          />
        )
      case 'details':
        return (
          <>
            {submissionError && (
              <ErrorAlert
                title="Submission Failed"
                message={submissionError}
                onRetry={handleRetrySubmission}
              />
            )}
            <Step2DealInfo
              onNext={handleStep2Next}
              onBack={handleStep2Back}
              defaultValues={dealInfo || undefined}
            />
          </>
        )
      case 'confirmation':
        return (
          <Step3Confirmation
            submissionId={submissionId || undefined}
            onStartNew={resetForm}
          />
        )
      default:
        return null
    }
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Container>
          <div style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            paddingTop: 'var(--spacing-xl)'
          }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
              <img 
                src="/logo.png" 
                alt="Real Quick Funds" 
                style={{ height: '60px', marginBottom: 'var(--spacing-lg)' }}
              />
              <h1 style={{ marginBottom: 'var(--spacing-md)' }}>
                EMD Request Form
              </h1>
            </div>
            
            <StepProgress currentStep={currentStep} />
            
            <div style={{
              backgroundColor: 'var(--white)',
              borderRadius: 'var(--border-radius-md)',
              boxShadow: 'var(--shadow-sm)',
              padding: 'var(--spacing-2xl)',
              marginBottom: 'var(--spacing-xl)'
            }}>
              {renderCurrentStep()}
            </div>
          </div>
        </Container>
      </main>
      <Footer />
      
      {isSubmitting && (
        <LoadingOverlay 
          message="Submitting your EMD request..."
          subMessage="Please wait while we process your information and upload your documents."
        />
      )}
    </div>
  )
}

export const EMDForm: React.FC = () => {
  return (
    <FormProvider>
      <EMDFormContent />
    </FormProvider>
  )
}
```

### Task 8: Netlify Configuration

**File: `netlify.toml`** (Create in project root)
```toml
[build]
  command = "npm run build"
  functions = "netlify/functions"
  publish = "dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[functions]
  directory = "netlify/functions"

# Environment variables for production
# Add these in Netlify dashboard:
# ZOHO_API_ENDPOINT
# ZOHO_API_KEY
# ZOHO_CLIENT_ID
# ZOHO_CLIENT_SECRET
```

### Task 9: Package.json Updates

**File: `package.json` (Add/Update scripts)**
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "netlify:dev": "netlify dev",
    "netlify:build": "npm run build && netlify functions:build",
    "type-check": "tsc --noEmit",
    "type-check:functions": "cd netlify/functions && tsc --noEmit && cd ../.."
  }
}
```

### Task 10: Update Step 2 Form Button Handling

**File: `src/components/forms/Step2DealInfo.tsx` (Update submit button section)**
```tsx
// Update the submit button section at the end of the form
<div className={styles.formRow}>
  <button
    type="button"
    onClick={onBack}
    className={`${styles.button} ${styles.buttonSecondary}`}
  >
    <ArrowLeftIcon />
    Back
  </button>

  <button
    type="submit"
    className={styles.button}
    disabled={!isValid}
  >
    Submit Application
  </button>
</div>
```

### Task 11: Add Secondary Button Styles

**File: `src/styles/components/FormElements.module.css` (Add to existing file)**
```css
.buttonSecondary {
  background-color: transparent;
  color: var(--charcoal);
  border: 2px solid var(--medium-gray);
}

.buttonSecondary:hover:not(:disabled) {
  background-color: var(--light-gray);
  border-color: var(--dark-gray);
}
```

## TypeScript Compilation Verification

Run these commands to verify everything compiles correctly:

```bash
# Check main TypeScript compilation
npx tsc --noEmit

# Check Netlify Functions compilation
cd netlify/functions
npx tsc --noEmit
cd ../..

# Test local development
npm run dev

# Test Netlify Functions locally (if netlify CLI installed)
netlify dev
```

**Critical TypeScript Checks:**

1. **Import paths consistency:**
```typescript
// ✅ All correct - no .tsx extensions
import { Step3Confirmation } from '../components/forms/Step3Confirmation'
import { LoadingOverlay } from '../components/ui/LoadingOverlay'
import { FormSubmissionService } from '../services/formSubmission'
```

2. **Service export/import:**
```typescript
// services/formSubmission.ts - must export class and interfaces
export class FormSubmissionService { ... }
export interface SubmissionData { ... }
export interface SubmissionResponse { ... }

// contexts/FormContext.tsx - must import correctly
import { FormSubmissionService, SubmissionResponse } from '../services/formSubmission'
```

3. **Netlify Functions typing:**
```typescript
// netlify/functions/submit-emd.ts - ensure Handler type is correct
import { Handler, HandlerEvent, HandlerContext } from '@netlify/functions'

export const handler: Handler = async (event: HandlerEvent, context: HandlerContext) => {
  // Implementation
}
```

## Testing Checklist
After implementation, verify:

### End-to-End Flow
- [ ] Complete form flow from Step 1 to Confirmation works
- [ ] Data persistence between steps functions correctly
- [ ] Form validation prevents invalid submissions
- [ ] File uploads are properly handled (try different file types)
- [ ] Loading states display during submission
- [ ] Error handling works for various failure scenarios
- [ ] Success confirmation displays with submission ID
- [ ] **TypeScript compilation completes without errors (`npx tsc --noEmit`)**

### Netlify Function Testing
- [ ] Function deploys successfully (local testing with `netlify dev`)
- [ ] CORS headers allow frontend requests
- [ ] Request validation works correctly
- [ ] File upload handling processes base64 data
- [ ] Mock Zoho integration returns expected responses
- [ ] Error responses are properly formatted

### Error Scenarios
- [ ] Network failures display appropriate errors
- [ ] Invalid file types/sizes are rejected
- [ ] Server errors show user-friendly messages
- [ ] Retry functionality works correctly
- [ ] Form validation prevents submission with missing data

### Performance & UX
- [ ] Large file uploads don't freeze the interface
- [ ] Loading overlay provides clear feedback
- [ ] Form submission completes within reasonable time (mock: ~1 second)
- [ ] Error messages are clear and actionable
- [ ] Success flow guides user to next steps

### Mobile Experience
- [ ] All components work on mobile devices
- [ ] Touch interactions function properly
- [ ] Loading states are mobile-friendly
- [ ] Error messages are readable on small screens

## Common Issues and Solutions

### Netlify Function not working
```bash
# Check function structure
netlify/functions/submit-emd.ts

# Verify TypeScript configuration
netlify/functions/tsconfig.json

# Test locally
netlify dev
```

### File upload base64 conversion failing
```typescript
// Ensure FileReader is used correctly
const reader = new FileReader()
reader.onload = () => {
  const result = reader.result as string
  resolve(result.split(',')[1]) // Remove data URL prefix
}
reader.readAsDataURL(file)
```

### CORS errors
```typescript
// Ensure proper headers in Netlify Function
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json',
}
```

### Loading state not showing
```typescript
// Ensure state is set before async operation
setIsSubmitting(true)
setSubmissionError(null)

try {
  const response = await FormSubmissionService.submitForm(data)
  // Handle response
} finally {
  setIsSubmitting(false) // Always reset loading state
}
```

### TypeScript errors in services
```typescript
// Ensure proper typing for form submission
interface SubmissionData {
  borrowerInfo: BorrowerInfoFormData
  dealInfo: DealInfoFormData
}

// Use imported types consistently
import { BorrowerInfoFormData, DealInfoFormData } from '../utils/validation'
```

## Detailed Testing Scenarios

### Form Submission Success Flow
1. Complete Step 1 with valid borrower information
2. Complete Step 2 with valid deal information and files
3. Click "Submit Application"
4. Loading overlay should appear
5. After ~1 second, should redirect to Step 3 confirmation
6. Confirmation should show submission ID and process steps
7. "Submit Another Request" should reset to Step 1
8. "Return to Website" should link to main site

### Error Handling Flow
1. Complete Steps 1 and 2 normally
2. Simulate network error (disconnect internet)
3. Click "Submit Application"
4. Should show error alert with retry option
5. Reconnect internet and click "Try Again"
6. Should successfully submit

### File Upload Testing
1. Try uploading different file types (PDF, DOC, DOCX, JPG, PNG)
2. Try uploading files larger than 10MB (should be rejected)
3. Try uploading invalid file types (should be rejected)
4. Verify base64 conversion works correctly

### Mobile Testing
1. Test complete flow on mobile device
2. Verify touch interactions work
3. Check responsive layout on various screen sizes
4. Ensure loading states work on mobile

## Review Points
1. **Complete Integration**: Verify end-to-end submission works
2. **Error Handling**: Test various failure scenarios thoroughly
3. **User Experience**: Ensure smooth flow with clear feedback
4. **Performance**: Test with large files and slow connections
5. **Production Readiness**: Confirm deployment configuration
6. **TypeScript Compliance**: Verify all compilation succeeds

## Deployment Notes

### Environment Variables
Set these in Netlify dashboard when Zoho endpoint is available:
- `ZOHO_API_ENDPOINT`: The actual Zoho API URL
- `ZOHO_API_KEY`: Authentication key
- `ZOHO_CLIENT_ID`: OAuth client ID  
- `ZOHO_CLIENT_SECRET`: OAuth client secret

### Going Live
1. Deploy to Netlify staging first
2. Test complete form flow on staging
3. Update mock Zoho function with real integration
4. Configure DNS and SSL
5. Monitor submission success rates

## Next Phase Preview
Phase 5 will focus on performance optimization, accessibility improvements, cross-browser testing, error boundary implementation, security headers, and final production deployment with comprehensive monitoring and analytics.

The EMD Request Form is now functionally complete with full form submission, file handling, and error management!