# Phase 3: Essential Implementation Files

## Dependencies First
```bash
npm install react-datepicker@^4.10.0
npm install @types/react-datepicker@^4.10.0 --save-dev
npm install react-dropzone@^14.2.3
```

## 1. Complete AddressInput Component

**File: `src/components/ui/AddressInput.tsx`**
```tsx
import React from 'react'
import { UseFormRegister, FieldErrors } from 'react-hook-form'
import styles from '../../styles/components/FormElements.module.css'

interface AddressInputProps {
  register: UseFormRegister<any>
  errors: FieldErrors
}

const LocationIcon: React.FC = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
)

const US_STATES = [
  { value: '', label: 'Select State' },
  { value: 'AL', label: 'Alabama' }, { value: 'AK', label: 'Alaska' },
  { value: 'AZ', label: 'Arizona' }, { value: 'AR', label: 'Arkansas' },
  { value: 'CA', label: 'California' }, { value: 'CO', label: 'Colorado' },
  { value: 'CT', label: 'Connecticut' }, { value: 'DE', label: 'Delaware' },
  { value: 'FL', label: 'Florida' }, { value: 'GA', label: 'Georgia' },
  { value: 'HI', label: 'Hawaii' }, { value: 'ID', label: 'Idaho' },
  { value: 'IL', label: 'Illinois' }, { value: 'IN', label: 'Indiana' },
  { value: 'IA', label: 'Iowa' }, { value: 'KS', label: 'Kansas' },
  { value: 'KY', label: 'Kentucky' }, { value: 'LA', label: 'Louisiana' },
  { value: 'ME', label: 'Maine' }, { value: 'MD', label: 'Maryland' },
  { value: 'MA', label: 'Massachusetts' }, { value: 'MI', label: 'Michigan' },
  { value: 'MN', label: 'Minnesota' }, { value: 'MS', label: 'Mississippi' },
  { value: 'MO', label: 'Missouri' }, { value: 'MT', label: 'Montana' },
  { value: 'NE', label: 'Nebraska' }, { value: 'NV', label: 'Nevada' },
  { value: 'NH', label: 'New Hampshire' }, { value: 'NJ', label: 'New Jersey' },
  { value: 'NM', label: 'New Mexico' }, { value: 'NY', label: 'New York' },
  { value: 'NC', label: 'North Carolina' }, { value: 'ND', label: 'North Dakota' },
  { value: 'OH', label: 'Ohio' }, { value: 'OK', label: 'Oklahoma' },
  { value: 'OR', label: 'Oregon' }, { value: 'PA', label: 'Pennsylvania' },
  { value: 'RI', label: 'Rhode Island' }, { value: 'SC', label: 'South Carolina' },
  { value: 'SD', label: 'South Dakota' }, { value: 'TN', label: 'Tennessee' },
  { value: 'TX', label: 'Texas' }, { value: 'UT', label: 'Utah' },
  { value: 'VT', label: 'Vermont' }, { value: 'VA', label: 'Virginia' },
  { value: 'WA', label: 'Washington' }, { value: 'WV', label: 'West Virginia' },
  { value: 'WI', label: 'Wisconsin' }, { value: 'WY', label: 'Wyoming' },
]

export const AddressInput: React.FC<AddressInputProps> = ({ register, errors }) => {
  return (
    <div className={styles.formGroup}>
      <label className={`${styles.formLabel} ${styles.required}`}>
        Subject Property Address
      </label>
      
      {/* Address Field */}
      <div className={styles.inputWrapper} style={{ marginBottom: 'var(--spacing-md)' }}>
        <div className={styles.inputIcon}>
          <LocationIcon />
        </div>
        <input
          placeholder="Address"
          className={`${styles.formInput} ${styles.inputWithIcon} ${errors.propertyAddress?.street ? styles.error : ''}`}
          {...register('propertyAddress.street')}
        />
      </div>
      {errors.propertyAddress?.street && (
        <div className={styles.errorMessage} style={{ marginTop: '-12px', marginBottom: 'var(--spacing-md)' }}>
          <span>⚠</span>
          {errors.propertyAddress.street.message}
        </div>
      )}

      {/* City, State Row */}
      <div className={styles.formRow}>
        <div>
          <input
            placeholder="City"
            className={`${styles.formInput} ${errors.propertyAddress?.city ? styles.error : ''}`}
            {...register('propertyAddress.city')}
          />
          {errors.propertyAddress?.city && (
            <div className={styles.errorMessage}>
              <span>⚠</span>
              {errors.propertyAddress.city.message}
            </div>
          )}
        </div>

        <div>
          <select
            className={`${styles.formInput} ${errors.propertyAddress?.state ? styles.error : ''}`}
            {...register('propertyAddress.state')}
          >
            {US_STATES.map(state => (
              <option key={state.value} value={state.value}>
                {state.label}
              </option>
            ))}
          </select>
          {errors.propertyAddress?.state && (
            <div className={styles.errorMessage}>
              <span>⚠</span>
              {errors.propertyAddress.state.message}
            </div>
          )}
        </div>
      </div>

      {/* ZIP Code */}
      <div style={{ marginTop: 'var(--spacing-md)' }}>
        <input
          placeholder="ZIP / Postal code"
          className={`${styles.formInput} ${errors.propertyAddress?.zipCode ? styles.error : ''}`}
          {...register('propertyAddress.zipCode')}
        />
        {errors.propertyAddress?.zipCode && (
          <div className={styles.errorMessage}>
            <span>⚠</span>
            {errors.propertyAddress.zipCode.message}
          </div>
        )}
      </div>
    </div>
  )
}
```

## 2. Updated Validation Schema

**File: `src/utils/validation.ts`** (Add to existing)
```typescript
// Add this schema to your existing file
export const dealInfoSchema = z.object({
  requestedAmount: z
    .number({
      required_error: 'Requested amount is required',
      invalid_type_error: 'Please enter a valid amount',
    })
    .min(1000, 'Minimum amount is $1,000')
    .max(10000000, 'Maximum amount is $10,000,000'),
  
  fundsRequiredDate: z
    .string()
    .min(1, 'Funds required date is required')
    .refine((date) => {
      const selectedDate = new Date(date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      return selectedDate >= today
    }, 'Funds required date must be today or in the future'),
  
  propertyAddress: z.object({
    street: z.string().min(5, 'Please enter a complete address'),
    city: z.string().min(2, 'City is required'),
    state: z.string().min(1, 'Please select a state'),
    zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Please enter a valid ZIP code'),
  }),
  
  inspectionEndDate: z.string().min(1, 'End of inspection period is required'),
  escrowCloseDate: z.string().min(1, 'Close of escrow date is required'),
  
  purchaseAgreement: z
    .any()
    .refine((file) => file instanceof File, 'Purchase & Sale Agreement is required')
    .optional(),
  
  wiringInstructions: z
    .any()
    .refine((file) => file instanceof File, 'Wiring Instructions are required')
    .optional(),
  
  termsAccepted: z
    .boolean()
    .refine((val) => val === true, 'You must agree to the terms and conditions'),
})

export type DealInfoFormData = z.infer<typeof dealInfoSchema>
```

## 3. Complete Step2DealInfo Form

**File: `src/components/forms/Step2DealInfo.tsx`** (Replace placeholder)
```tsx
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { dealInfoSchema, DealInfoFormData } from '../../utils/validation'
import { DateInput } from '../ui/DateInput'
import { CurrencyInput } from '../ui/CurrencyInput'
import { FileUpload } from '../ui/FileUpload'
import { AddressInput } from '../ui/AddressInput'
import { Checkbox } from '../ui/Checkbox'
import styles from '../../styles/components/FormElements.module.css'

interface Step2Props {
  onNext: (data: DealInfoFormData) => void
  onBack: () => void
  defaultValues?: Partial<DealInfoFormData>
}

const ArrowLeftIcon: React.FC = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
  </svg>
)

export const Step2DealInfo: React.FC<Step2Props> = ({ onNext, onBack, defaultValues }) => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useForm<DealInfoFormData>({
    resolver: zodResolver(dealInfoSchema),
    defaultValues: defaultValues || {
      requestedAmount: 0,
      fundsRequiredDate: '',
      propertyAddress: { street: '', city: '', state: '', zipCode: '' },
      inspectionEndDate: '',
      escrowCloseDate: '',
      termsAccepted: false,
    },
    mode: 'onChange',
  })

  const onSubmit = (data: DealInfoFormData) => {
    onNext(data)
  }

  const today = new Date()

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 style={{ marginBottom: 'var(--spacing-xl)', textAlign: 'center' }}>
        Deal Information
      </h2>

      <CurrencyInput
        name="requestedAmount"
        label="Requested Amount"
        required
        register={register}
        setValue={setValue}
        watch={watch}
        error={errors.requestedAmount}
      />

      <DateInput
        name="fundsRequiredDate"
        label="When Funds Are Required"
        required
        helpText="When is EMD required to be submitted per the purchase agreement?"
        register={register}
        setValue={setValue}
        watch={watch}
        error={errors.fundsRequiredDate}
        minDate={today}
      />

      <AddressInput register={register} errors={errors} />

      <div className={styles.formRow}>
        <DateInput
          name="inspectionEndDate"
          label="End of Inspection Period"
          required
          register={register}
          setValue={setValue}
          watch={watch}
          error={errors.inspectionEndDate}
          minDate={today}
        />
        <DateInput
          name="escrowCloseDate"
          label="Close of Escrow Date"
          required
          register={register}
          setValue={setValue}
          watch={watch}
          error={errors.escrowCloseDate}
          minDate={today}
        />
      </div>

      <FileUpload
        name="purchaseAgreement"
        label="Purchase & Sale Agreement"
        required
        helpText="Please upload the most current signed version of the purchase agreement"
        acceptedFileTypes={['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']}
        maxSize={10 * 1024 * 1024}
        setValue={setValue}
        error={errors.purchaseAgreement}
      />

      <FileUpload
        name="wiringInstructions"
        label="Wiring Instructions"
        required
        helpText="Please upload the wiring instructions for Title / Escrow"
        acceptedFileTypes={['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png']}
        maxSize={10 * 1024 * 1024}
        setValue={setValue}
        error={errors.wiringInstructions}
      />

      {/* Privacy Policy */}
      <div style={{ 
        backgroundColor: 'var(--light-gray)', 
        padding: 'var(--spacing-lg)', 
        borderRadius: 'var(--border-radius-sm)',
        marginBottom: 'var(--spacing-lg)',
        fontSize: 'var(--font-size-small)'
      }}>
        <p style={{ marginBottom: 'var(--spacing-md)' }}>
          Real Quick Funds, LLC is committed to protecting and respecting your privacy...
        </p>
        <p style={{ marginBottom: 0 }}>
          You consent to allow Real Quick Funds, LLC to store and process the personal 
          information submitted above to provide you the content requested.
        </p>
      </div>

      <Checkbox
        name="termsAccepted"
        label="I agree to the terms and conditions above"
        register={register}
      />
      {errors.termsAccepted && (
        <div className={styles.errorMessage} style={{ marginTop: '-16px', marginBottom: 'var(--spacing-lg)' }}>
          <span>⚠</span>
          {errors.termsAccepted.message}
        </div>
      )}

      <div className={styles.formRow}>
        <button type="button" onClick={onBack} className={`${styles.button} ${styles.buttonSecondary}`}>
          <ArrowLeftIcon /> Back
        </button>
        <button type="submit" className={styles.button} disabled={!isValid}>
          Submit
        </button>
      </div>
    </form>
  )
}
```

## 4. Update EMD Form Page

**File: `src/pages/EMDForm.tsx`** (Update imports and handlers)
```tsx
// Add this import
import { Step2DealInfo } from '../components/forms/Step2DealInfo'

// Update the renderCurrentStep function
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
        <Step2DealInfo
          onNext={handleStep2Next}
          onBack={handleStep2Back}
          defaultValues={dealInfo || undefined}
        />
      )
    case 'confirmation':
      return <div>Step 3 coming in Phase 4...</div>
    default:
      return null
  }
}

// Add these handlers
const handleStep2Next = (data: DealInfoFormData): void => {
  setDealInfo(data)
  submitForm()
}

const handleStep2Back = (): void => {
  setCurrentStep('info')
}
```

## 5. Secondary Button Styles

**File: `src/styles/components/FormElements.module.css`** (Add)
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

## Quick Implementation Guide

1. **Install dependencies** first
2. **Create AddressInput** component (complete above)
3. **Update validation** schema with dealInfoSchema
4. **Replace Step2DealInfo** placeholder with full implementation
5. **Update EMDForm page** with new handlers
6. **Add button styles** for secondary buttons

You'll also need the DateInput, CurrencyInput, and FileUpload components from the original Phase 3 documents, but this gives you the essential complete components that were cut off in the previous versions.

## Testing

- Currency formatting (1000 → 1,000)
- Date picker validation (no past dates)
- File upload restrictions (PDF, DOC, DOCX only)
- Address validation (all fields required)
- Form navigation (back/forward between steps)

This completes the essential Phase 3 implementation!