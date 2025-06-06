# Phase 2: Progress Component & Step 1 - Complete Implementation

## Context
You are implementing Phase 2 of the Real Quick Funds EMD Request Form. Phase 1 foundation (routing, theme, layout, TypeScript configuration) is complete. Now building the progress indicator and Step 1 form with validation.

**CRITICAL**: This phase includes creating required type exports and form constants that prevent TypeScript errors in later phases.

## Objectives
1. Build StepProgress component with proper styling
2. Create Form validation system with React Hook Form + Zod
3. Build Step 1 (Info) form with all fields and validation
4. Implement responsive design for Step 1
5. Add form state management between steps
6. **Create missing exports and constants to prevent TypeScript errors**

## Dependencies to Install
```bash
npm install react-hook-form
npm install @hookform/resolvers
npm install zod
```

**Note**: Phone input libraries will be added in later phases. We'll use a simple tel input with validation for now.

## Implementation Tasks

### Task 1: Create Form Constants (CRITICAL for TypeScript)

**File: `src/constants/formConstants.ts`** (Create this file)
```typescript
import { FormStep } from '../types'

export const FORM_STEPS: Record<FormStep, { label: string; number: number }> = {
  info: { label: 'Info', number: 1 },
  details: { label: 'Details', number: 2 },
  confirmation: { label: 'Other', number: 3 }
}

export const FORM_VALIDATION_MESSAGES = {
  REQUIRED: 'This field is required',
  EMAIL_INVALID: 'Please enter a valid email address',
  PHONE_INVALID: 'Please enter a valid phone number',
  AMOUNT_MIN: 'Minimum amount is $1,000',
  AMOUNT_MAX: 'Maximum amount is $10,000,000',
  DATE_FUTURE: 'Date must be today or in the future',
  FILE_REQUIRED: 'File is required',
  TERMS_REQUIRED: 'You must agree to the terms and conditions'
}
```

### Task 2: Form Validation Schema

**File: `src/utils/validation.ts`**
```typescript
import { z } from 'zod'

export const borrowerInfoSchema = z.object({
  borrowerFirstName: z
    .string()
    .min(2, 'First name must be at least 2 characters')
    .regex(/^[a-zA-Z\s]+$/, 'First name can only contain letters and spaces'),
  
  borrowerLastName: z
    .string()
    .min(2, 'Last name must be at least 2 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Last name can only contain letters and spaces'),
  
  email: z
    .string()
    .email('Please enter a valid email address'),
  
  phoneNumber: z
    .string()
    .min(10, 'Please enter a valid phone number')
    .regex(/^\+?1?[-.\s]?\(?[0-9]{3}\)?[-.\s]?[0-9]{3}[-.\s]?[0-9]{4}$/, 'Please enter a valid US phone number'),
  
  companyName: z
    .string()
    .optional()
    .default(''),
  
  hasReferral: z
    .boolean()
    .default(false),
})

export type BorrowerInfoFormData = z.infer<typeof borrowerInfoSchema>
```

### Task 3: Progress Step Component

**File: `src/styles/components/StepProgress.module.css`**
```css
.stepProgress {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-3xl);
  padding: var(--spacing-xl) 0;
}

.stepContainer {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
}

.step {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}

.stepCircle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: var(--font-size-body);
  transition: all var(--transition-standard);
  margin-bottom: var(--spacing-sm);
}

.stepCircle.completed {
  background-color: var(--charcoal);
  color: var(--white);
  border: 2px solid var(--charcoal);
}

.stepCircle.active {
  background-color: var(--white);
  color: var(--primary-orange);
  border: 2px solid var(--primary-orange);
}

.stepCircle.inactive {
  background-color: var(--white);
  color: var(--medium-gray);
  border: 2px solid var(--medium-gray);
}

.stepLabel {
  font-size: var(--font-size-small);
  font-weight: 500;
  text-align: center;
}

.stepLabel.completed {
  color: var(--charcoal);
}

.stepLabel.active {
  color: var(--primary-orange);
}

.stepLabel.inactive {
  color: var(--medium-gray);
}

.connector {
  width: 80px;
  height: 2px;
  background-color: var(--medium-gray);
  margin: 0 var(--spacing-md);
}

.connector.completed {
  background-color: var(--charcoal);
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .stepContainer {
    gap: var(--spacing-md);
  }
  
  .stepCircle {
    width: 40px;
    height: 40px;
    font-size: var(--font-size-small);
  }
  
  .connector {
    width: 40px;
  }
  
  .stepLabel {
    font-size: var(--font-size-caption);
  }
}

@media (max-width: 480px) {
  .stepProgress {
    margin-bottom: var(--spacing-xl);
  }
  
  .stepContainer {
    gap: var(--spacing-sm);
  }
  
  .stepCircle {
    width: 32px;
    height: 32px;
    font-size: var(--font-size-caption);
  }
  
  .connector {
    width: 24px;
  }
}
```

**File: `src/components/ui/StepProgress.tsx`**
```tsx
import React from 'react'
import { FormStep } from '../../types'
import { FORM_STEPS } from '../../constants/formConstants'
import styles from '../../styles/components/StepProgress.module.css'

interface StepProgressProps {
  currentStep: FormStep
}

const CheckIcon: React.FC = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
)

export const StepProgress: React.FC<StepProgressProps> = ({ currentStep }) => {
  const steps = Object.entries(FORM_STEPS).map(([key, value]) => ({
    key: key as FormStep,
    ...value
  }))

  const getStepStatus = (stepKey: FormStep): 'completed' | 'active' | 'inactive' => {
    const currentIndex = steps.findIndex(step => step.key === currentStep)
    const stepIndex = steps.findIndex(step => step.key === stepKey)
    
    if (stepIndex < currentIndex) return 'completed'
    if (stepIndex === currentIndex) return 'active'
    return 'inactive'
  }

  const getConnectorStatus = (index: number): 'completed' | 'inactive' => {
    const currentIndex = steps.findIndex(step => step.key === currentStep)
    return index < currentIndex ? 'completed' : 'inactive'
  }

  return (
    <div className={styles.stepProgress}>
      <div className={styles.stepContainer}>
        {steps.map((step, index) => (
          <React.Fragment key={step.key}>
            <div className={styles.step}>
              <div className={`${styles.stepCircle} ${styles[getStepStatus(step.key)]}`}>
                {getStepStatus(step.key) === 'completed' ? (
                  <CheckIcon />
                ) : (
                  step.number
                )}
              </div>
              <span className={`${styles.stepLabel} ${styles[getStepStatus(step.key)]}`}>
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div className={`${styles.connector} ${styles[getConnectorStatus(index)]}`} />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  )
}
```

### Task 4: Form Input Components

**File: `src/styles/components/FormElements.module.css`**
```css
.formGroup {
  margin-bottom: var(--spacing-lg);
}

.formRow {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
}

.formInput {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid var(--medium-gray);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-body);
  font-family: var(--font-family);
  background-color: var(--white);
  transition: border-color var(--transition-standard), box-shadow var(--transition-standard);
}

.formInput:focus {
  outline: none;
  border-color: var(--primary-orange);
  box-shadow: 0 0 0 3px rgba(212, 148, 30, 0.1);
}

.formInput.error {
  border-color: #DC3545;
  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
}

.formLabel {
  display: block;
  font-weight: 600;
  color: var(--charcoal);
  margin-bottom: var(--spacing-sm);
  font-size: var(--font-size-body);
}

.required::after {
  content: ' *';
  color: #DC3545;
}

.errorMessage {
  color: #DC3545;
  font-size: var(--font-size-small);
  margin-top: var(--spacing-xs);
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
}

.inputWrapper {
  position: relative;
}

.inputIcon {
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--dark-gray);
  width: 20px;
  height: 20px;
  pointer-events: none;
}

.inputWithIcon {
  padding-left: 44px;
}

.phoneInputWrapper {
  position: relative;
}

.phoneInput {
  width: 100%;
  padding: 12px 16px;
  padding-left: 60px;
  border: 2px solid var(--medium-gray);
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-body);
  font-family: var(--font-family);
  background-color: var(--white);
  transition: border-color var(--transition-standard), box-shadow var(--transition-standard);
}

.phoneInput:focus {
  outline: none;
  border-color: var(--primary-orange);
  box-shadow: 0 0 0 3px rgba(212, 148, 30, 0.1);
}

.phoneInput.error {
  border-color: #DC3545;
  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
}

.phoneFlag {
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: auto;
  pointer-events: none;
}

.checkbox {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-lg);
}

.checkboxInput {
  width: 18px;
  height: 18px;
  margin-top: 2px;
  accent-color: var(--primary-orange);
}

.checkboxLabel {
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  color: var(--dark-gray);
  cursor: pointer;
}

.button {
  background-color: var(--charcoal);
  color: var(--white);
  border: none;
  border-radius: var(--border-radius-sm);
  padding: 16px 32px;
  font-size: var(--font-size-body);
  font-weight: 600;
  width: 100%;
  cursor: pointer;
  transition: all var(--transition-standard);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  text-transform: none;
}

.button:hover:not(:disabled) {
  background-color: var(--black);
}

.button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.buttonIcon {
  width: 16px;
  height: 16px;
  fill: currentColor;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .formRow {
    grid-template-columns: 1fr;
    gap: var(--spacing-md);
  }
  
  .button {
    padding: 14px 24px;
  }
}
```

**File: `src/components/ui/FormInput.tsx`**
```tsx
import React from 'react'
import { UseFormRegister, FieldError } from 'react-hook-form'
import styles from '../../styles/components/FormElements.module.css'

interface FormInputProps {
  name: string
  label: string
  type?: string
  required?: boolean
  placeholder?: string
  register: UseFormRegister<any>
  error?: FieldError
  icon?: React.ReactNode
}

export const FormInput: React.FC<FormInputProps> = ({
  name,
  label,
  type = 'text',
  required = false,
  placeholder,
  register,
  error,
  icon,
}) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={name} className={`${styles.formLabel} ${required ? styles.required : ''}`}>
        {label}
      </label>
      <div className={styles.inputWrapper}>
        {icon && <div className={styles.inputIcon}>{icon}</div>}
        <input
          id={name}
          type={type}
          placeholder={placeholder}
          className={`${styles.formInput} ${icon ? styles.inputWithIcon : ''} ${error ? styles.error : ''}`}
          {...register(name)}
        />
      </div>
      {error && (
        <div className={styles.errorMessage}>
          <span>⚠</span>
          {error.message}
        </div>
      )}
    </div>
  )
}
```

**File: `src/components/ui/PhoneInput.tsx`**
```tsx
import React from 'react'
import { UseFormRegister, FieldError } from 'react-hook-form'
import styles from '../../styles/components/FormElements.module.css'

interface PhoneInputProps {
  name: string
  label: string
  required?: boolean
  register: UseFormRegister<any>
  error?: FieldError
}

export const PhoneInput: React.FC<PhoneInputProps> = ({
  name,
  label,
  required = false,
  register,
  error,
}) => {
  return (
    <div className={styles.formGroup}>
      <label htmlFor={name} className={`${styles.formLabel} ${required ? styles.required : ''}`}>
        {label}
      </label>
      <div className={styles.phoneInputWrapper}>
        <span className={styles.phoneFlag}>🇺🇸</span>
        <input
          id={name}
          type="tel"
          placeholder="(555) 123-4567"
          className={`${styles.phoneInput} ${error ? styles.error : ''}`}
          {...register(name)}
        />
      </div>
      {error && (
        <div className={styles.errorMessage}>
          <span>⚠</span>
          {error.message}
        </div>
      )}
    </div>
  )
}
```

**File: `src/components/ui/Checkbox.tsx`**
```tsx
import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import styles from '../../styles/components/FormElements.module.css'

interface CheckboxProps {
  name: string
  label: string
  register: UseFormRegister<any>
}

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  register,
}) => {
  return (
    <div className={styles.checkbox}>
      <input
        id={name}
        type="checkbox"
        className={styles.checkboxInput}
        {...register(name)}
      />
      <label htmlFor={name} className={styles.checkboxLabel}>
        {label}
      </label>
    </div>
  )
}
```

### Task 5: Step 1 Form Component

**File: `src/components/forms/Step1BorrowerInfo.tsx`**
```tsx
import React from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { borrowerInfoSchema, BorrowerInfoFormData } from '../../utils/validation'
import { FormInput } from '../ui/FormInput'
import { PhoneInput } from '../ui/PhoneInput'
import { Checkbox } from '../ui/Checkbox'
import styles from '../../styles/components/FormElements.module.css'

interface Step1Props {
  onNext: (data: BorrowerInfoFormData) => void
  defaultValues?: Partial<BorrowerInfoFormData>
}

const EmailIcon: React.FC = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
)

const ArrowRightIcon: React.FC = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
  </svg>
)

export const Step1BorrowerInfo: React.FC<Step1Props> = ({ onNext, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<BorrowerInfoFormData>({
    resolver: zodResolver(borrowerInfoSchema),
    defaultValues: {
      borrowerFirstName: '',
      borrowerLastName: '',
      email: '',
      phoneNumber: '',
      companyName: '',
      hasReferral: false,
      ...defaultValues,
    },
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<BorrowerInfoFormData> = async (data) => {
    onNext(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 style={{ marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>
        Borrower Information
      </h2>
      
      <div className={styles.formRow}>
        <FormInput
          name="borrowerFirstName"
          label="Borrower First Name"
          required
          register={register}
          error={errors.borrowerFirstName}
        />
        <FormInput
          name="borrowerLastName"
          label="Borrower Last Name"
          required
          register={register}
          error={errors.borrowerLastName}
        />
      </div>

      <div className={styles.formRow}>
        <FormInput
          name="email"
          label="Email"
          type="email"
          required
          register={register}
          error={errors.email}
          icon={<EmailIcon />}
        />
        <PhoneInput
          name="phoneNumber"
          label="Phone Number"
          required
          register={register}
          error={errors.phoneNumber}
        />
      </div>

      <FormInput
        name="companyName"
        label="Borrower Entity (Company) Name"
        register={register}
        error={errors.companyName}
      />

      <Checkbox
        name="hasReferral"
        label="A different individual is referring or brokering this deal"
        register={register}
      />

      <button
        type="submit"
        className={styles.button}
        disabled={!isValid}
      >
        Next
        <ArrowRightIcon />
      </button>
    </form>
  )
}
```

### Task 6: Form Context for State Management

**File: `src/contexts/FormContext.tsx`**
```tsx
import React, { createContext, useContext, useState, ReactNode } from 'react'
import { FormStep, FormContextType } from '../types'
import { BorrowerInfoFormData } from '../utils/validation'

const FormContext = createContext<FormContextType | undefined>(undefined)

interface FormProviderProps {
  children: ReactNode
}

export const FormProvider: React.FC<FormProviderProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<FormStep>('info')
  const [borrowerInfo, setBorrowerInfo] = useState<BorrowerInfoFormData | null>(null)
  const [dealInfo, setDealInfo] = useState<any | null>(null) // Will be properly typed in Phase 3
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
      // Mock submission for now - will be implemented in Phase 4
      console.log('Submitting form...', { borrowerInfo, dealInfo })
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setSubmissionId(`EMD-${Date.now()}`)
      setCurrentStep('confirmation')
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

### Task 7: Update Types (CRITICAL for TypeScript)

**File: `src/types/index.ts`** (Update to include new types)
```typescript
// Form Step Types
export type FormStep = 'info' | 'details' | 'confirmation'

// Re-export validation types
export type { BorrowerInfoFormData } from '../utils/validation'

// Deal Info placeholder (will be properly typed in Phase 3)
export interface DealInfoFormData {
  // Placeholder - will be defined in Phase 3
  [key: string]: any
}

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

### Task 8: Update EMD Form Page

**File: `src/pages/EMDForm.tsx`**
```tsx
import React from 'react'
import { Header } from '../components/layout/Header'
import { Footer } from '../components/layout/Footer'
import { Container } from '../components/layout/Container'
import { StepProgress } from '../components/ui/StepProgress'
import { Step1BorrowerInfo } from '../components/forms/Step1BorrowerInfo'
import { FormProvider, useFormContext } from '../contexts/FormContext'
import { BorrowerInfoFormData } from '../utils/validation'

const EMDFormContent: React.FC = () => {
  const { currentStep, setCurrentStep, borrowerInfo, setBorrowerInfo } = useFormContext()

  const handleStep1Next = (data: BorrowerInfoFormData): void => {
    setBorrowerInfo(data)
    setCurrentStep('details')
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
          <div style={{ textAlign: 'center', padding: 'var(--spacing-2xl)' }}>
            <h2>Step 2: Deal Information</h2>
            <p>Coming in Phase 3...</p>
            <button 
              onClick={() => setCurrentStep('info')}
              style={{
                backgroundColor: 'var(--primary-orange)',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '6px',
                cursor: 'pointer',
                marginTop: 'var(--spacing-md)'
              }}
            >
              Back to Step 1
            </button>
          </div>
        )
      case 'confirmation':
        return (
          <div style={{ textAlign: 'center', padding: 'var(--spacing-2xl)' }}>
            <h2>Step 3: Confirmation</h2>
            <p>Coming in Phase 4...</p>
            <button 
              onClick={() => setCurrentStep('info')}
              style={{
                backgroundColor: 'var(--primary-orange)',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '6px',
                cursor: 'pointer',
                marginTop: 'var(--spacing-md)'
              }}
            >
              Start Over
            </button>
          </div>
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

### Task 9: Create Component Placeholder Files

To prevent import errors in later phases, create these placeholder files:

**File: `src/components/forms/Step2DealInfo.tsx`** (Placeholder)
```tsx
import React from 'react'

interface Step2Props {
  onNext: (data: any) => void
  onBack: () => void
  defaultValues?: any
}

export const Step2DealInfo: React.FC<Step2Props> = ({ onNext, onBack }) => {
  return (
    <div>
      <h2>Step 2 Implementation Coming in Phase 3</h2>
      <button onClick={onBack}>Back</button>
      <button onClick={() => onNext({})}>Next</button>
    </div>
  )
}
```

**File: `src/components/forms/Step3Confirmation.tsx`** (Placeholder)
```tsx
import React from 'react'

interface Step3Props {
  submissionId?: string
  onStartNew: () => void
}

export const Step3Confirmation: React.FC<Step3Props> = ({ submissionId, onStartNew }) => {
  return (
    <div>
      <h2>Step 3 Implementation Coming in Phase 4</h2>
      {submissionId && <p>Submission ID: {submissionId}</p>}
      <button onClick={onStartNew}>Start New Form</button>
    </div>
  )
}
```

### Task 10: TypeScript Error Prevention Checks

Run these commands to verify no TypeScript errors:
```bash
# Check TypeScript compilation
npx tsc --noEmit

# Start development server to test
npm run dev
```

## Critical TypeScript Error Prevention

### Ensure All Types Are Exported
Your `src/types/index.ts` should include all necessary exports:
```typescript
export type FormStep = 'info' | 'details' | 'confirmation'
export type { BorrowerInfoFormData } from '../utils/validation'
export interface FormContextType {
  // ... all properties
}
```

### Import Pattern Consistency
```typescript
// ✅ Correct - consistent pattern
import { FormStep } from '../../types'
import { FORM_STEPS } from '../../constants/formConstants'
import styles from '../../styles/components/StepProgress.module.css'

// ❌ Incorrect - mixed patterns
import { FormStep } from '../../types/index.ts'
import { FORM_STEPS } from '../../constants/formConstants.ts'
```

### Zod Integration with TypeScript
```typescript
// validation.ts - export both schema and inferred type
export const borrowerInfoSchema = z.object({...})
export type BorrowerInfoFormData = z.infer<typeof borrowerInfoSchema>

// types/index.ts - import and re-export the type
export type { BorrowerInfoFormData } from '../utils/validation'
```

## Testing Checklist
After implementation, verify:

### Functionality
- [ ] Progress component displays correctly with proper step states
- [ ] Step 1 form renders all fields correctly
- [ ] Form validation works on all required fields (try submitting empty form)
- [ ] Real-time validation shows errors appropriately
- [ ] Form submission advances to step 2 placeholder
- [ ] Form state is preserved when navigating back to step 1
- [ ] **TypeScript compilation completes without errors (`npx tsc --noEmit`)**

### Styling
- [ ] Progress steps match the design exactly
- [ ] Form inputs follow brand style guide (orange focus states)
- [ ] Error states display correctly with proper colors
- [ ] Buttons have correct styling and hover effects
- [ ] Icons display properly (email, arrow, check, flag)

### Responsive Design
- [ ] Progress component adapts to mobile screens (smaller circles)
- [ ] Form layout stacks properly on mobile (two-column to single-column)
- [ ] Two-column inputs become single column on mobile
- [ ] Button styling works on all screen sizes
- [ ] Touch targets are appropriate for mobile

### Validation Testing
- [ ] Required field validation works (first name, last name, email, phone)
- [ ] Email format validation works (try invalid emails)
- [ ] Phone number validation accepts various formats
- [ ] Name validation allows letters and spaces only (try numbers/symbols)
- [ ] Form cannot be submitted with invalid data (button disabled)
- [ ] Error messages are clear and helpful

### State Management
- [ ] Form data persists when moving between steps
- [ ] Context provides correct data to components
- [ ] Form resets properly when resetForm is called

## Common Issues and Solutions

### "Module not found" errors
```bash
# Check these files exist:
src/constants/formConstants.ts
src/utils/validation.ts
src/components/ui/FormInput.tsx
src/components/ui/PhoneInput.tsx
src/components/ui/Checkbox.tsx
src/components/ui/StepProgress.tsx
```

### "Cannot find name" TypeScript errors
```typescript
// Ensure types/index.ts exports all required types:
export type FormStep = 'info' | 'details' | 'confirmation'
export type { BorrowerInfoFormData } from '../utils/validation'
export interface FormContextType {
  // ... all properties
}
```

### React Hook Form validation not working
```typescript
// Ensure zodResolver is properly imported and configured:
import { zodResolver } from '@hookform/resolvers/zod'

const { register, handleSubmit, formState: { errors, isValid } } = useForm({
  resolver: zodResolver(borrowerInfoSchema),
  mode: 'onChange', // Important for real-time validation
})
```

### CSS Modules not applying
```typescript
// Ensure CSS modules are imported correctly:
import styles from '../../styles/components/FormElements.module.css'

// Use with className:
<div className={styles.formGroup}>
```

### Icons not displaying
```typescript
// Ensure SVG icons are properly defined:
const EmailIcon: React.FC = () => (
  <svg viewBox="0 0 20 20" fill="currentColor" width="20" height="20">
    <path d="..." />
  </svg>
)
```

## Detailed Component Testing

### StepProgress Component
Test the progress indicator:
```typescript
// Test scenarios:
// 1. currentStep='info' - Info active, others inactive
// 2. currentStep='details' - Info completed, Details active, Other inactive  
// 3. currentStep='confirmation' - Info and Details completed, Other active
```

### Form Validation
Test each validation rule:
```typescript
// First/Last Name: 
// ✅ "John", "Mary Jane" 
// ❌ "J", "John123", "John@doe"

// Email:
// ✅ "user@example.com", "test.email+tag@domain.co.uk"
// ❌ "invalid", "@domain.com", "user@"

// Phone:
// ✅ "(555) 123-4567", "555-123-4567", "5551234567"
// ❌ "123", "555-123", "abc-def-ghij"
```

## Review Points
1. **Progress Component**: Verify visual accuracy and responsive behavior
2. **Form Validation**: Test all validation rules thoroughly, especially edge cases
3. **User Experience**: Ensure smooth form interaction and clear error messaging
4. **Brand Compliance**: Confirm styling matches exactly (colors, typography, spacing)
5. **State Management**: Test form data persistence and context functionality
6. **TypeScript Compliance**: Ensure no compilation errors and proper typing

## Next Phase Preview
Phase 3 will implement Step 2 (Details) with complex fields including:
- Date pickers for funding and closing dates
- File upload components with drag & drop
- Currency input with formatting
- Address input group with state dropdown
- Complex validation schemas for files and dates

The foundation built in this phase (form context, validation system, component structure) will support these advanced features.

## Troubleshooting Quick Reference

### If TypeScript errors occur:
1. Check all imports don't use `.tsx` extensions
2. Verify all types are exported from `types/index.ts`
3. Ensure `formConstants.ts` exists and exports are correct
4. Run `npx tsc --noEmit` to see specific errors

### If styles don't apply:
1. Check CSS module imports use correct paths
2. Verify CSS variables are defined in `theme.css`
3. Ensure global styles are imported in `App.tsx`

### If form validation fails:
1. Check Zod schema matches form field names exactly
2. Verify `@hookform/resolvers` is installed
3. Ensure `mode: 'onChange'` is set for real-time validation

This completes Phase 2 with a fully functional Step 1 form, progress indicator, and proper state management foundation for the remaining phases.
  