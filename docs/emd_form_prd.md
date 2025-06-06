# EMD Request Form - Product Requirements Document

## Project Overview

**Product**: Real Quick Funds EMD (Earnest Money Deposit) Request Form  
**Version**: 1.1  
**Date**: June 2025  
**Route**: `/emd`  
**Technology Stack**: React + Vite + TypeScript + Netlify Functions

## Business Requirements

### Primary Goals
- Collect borrower information for EMD funding requests
- Streamline the loan application process with a professional 3-step form
- Integrate with Zoho CRM via secure API middleware
- Maintain Real Quick Funds brand consistency

### User Flow
1. User navigates to `/emd`
2. Completes 3-step form: Info → Details → Confirmation
3. Form data is submitted via Netlify Function to Zoho API
4. User receives confirmation with next steps

## Technical Architecture

### Frontend
- **Framework**: React 18+ with TypeScript 5.0+
- **Build Tool**: Vite 4.3+ with proper TypeScript configuration
- **Routing**: React Router for `/emd` route
- **Styling**: CSS Modules following brand style guide
- **Form Management**: React Hook Form 7.43+ with Zod validation
- **File Upload**: React Dropzone with drag & drop support

### Backend
- **API Middleware**: Netlify Function (`/.netlify/functions/submit-emd`)
- **External Integration**: Zoho API endpoint (TBD)
- **CORS Handling**: Managed by Netlify Function

### TypeScript Configuration Requirements
**Critical**: The project requires specific TypeScript and Vite configurations to avoid compilation errors:

#### Required Dependencies
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.8.1",
    "react-hook-form": "^7.43.0",
    "@hookform/resolvers": "^2.9.11",
    "zod": "^3.20.6",
    "react-datepicker": "^4.10.0",
    "react-dropzone": "^14.2.3"
  },
  "devDependencies": {
    "@types/react": "^18.0.28",
    "@types/react-dom": "^18.0.11",
    "@types/react-datepicker": "^4.10.0",
    "@typescript-eslint/eslint-plugin": "^5.57.1",
    "@typescript-eslint/parser": "^5.57.1",
    "@vitejs/plugin-react": "^4.0.0",
    "typescript": "^5.0.2",
    "vite": "^4.3.2"
  }
}
```

#### TypeScript Configuration
**File: `tsconfig.json`**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "allowJs": false,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "module": "ESNext",
    "moduleResolution": "node",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"],
      "@styles/*": ["src/styles/*"],
      "@utils/*": ["src/utils/*"]
    }
  },
  "include": [
    "src/**/*",
    "src/**/*.tsx",
    "src/**/*.ts",
    "vite-env.d.ts"
  ],
  "exclude": [
    "node_modules",
    "dist",
    "netlify/functions/**/*"
  ],
  "references": [
    { "path": "./tsconfig.node.json" }
  ]
}
```

#### Vite Configuration
**File: `vite.config.ts`**
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components'),
      '@styles': resolve(__dirname, 'src/styles'),
      '@utils': resolve(__dirname, 'src/utils'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
})
```

### Root Route Behavior
- `/` redirects to `https://realquickfunds.com`

## Form Structure & Components

### Step 1: Borrower Information (Info)
**Route**: `/emd`
**Progress**: Info (active) → Details → Other

#### Form Fields
1. **Borrower First Name*** (text input)
   - Required field
   - Validation: min 2 characters, letters and spaces only
   
2. **Borrower Last Name*** (text input)
   - Required field
   - Validation: min 2 characters, letters and spaces only
   
3. **Email*** (email input)
   - Required field
   - Email icon prefix
   - Validation: valid email format
   
4. **Phone Number*** (tel input)
   - Required field
   - US flag prefix
   - Validation: valid US phone format with regex
   
5. **Borrower Entity (Company) Name** (text input)
   - Optional field
   - Full width
   
6. **Referral Checkbox** (checkbox)
   - Label: "A different individual is referring or brokering this deal"
   - Optional, defaults to false

#### Navigation
- **Next Button**: Dark button with arrow icon
- Validates all required fields before proceeding

### Step 2: Deal Information (Details)
**Route**: `/emd` (step managed by context)
**Progress**: Info (completed) → Details (active) → Other

#### Form Fields
1. **Requested Amount*** (currency input)
   - Dollar sign prefix
   - Required field
   - Validation: minimum $1,000, maximum $10,000,000
   - Number formatting with locale
   
2. **When Funds Are Required*** (date input)
   - Required field
   - Help text: "When is EMD required to be submitted per the purchase agreement?"
   - Date picker component with minimum date validation
   
3. **Subject Property Address*** (address group)
   - **Address** (text input with location icon)
   - **City** (text input)
   - **State/Province** (dropdown with all US states)
   - **ZIP/Postal Code** (text input with regex validation)
   - All required fields
   
4. **End of Inspection Period*** (date input)
   - Required field
   - Date picker component
   
5. **Close of Escrow Date*** (date input)
   - Required field
   - Date picker component
   
6. **Purchase & Sale Agreement*** (file upload)
   - Drag & drop area
   - Help text: "Please upload the most current signed version of the purchase agreement"
   - File validation: PDF, DOC, DOCX only, max 10MB
   
7. **Wiring Instructions*** (file upload)
   - Drag & drop area
   - Help text: "Please upload the wiring instructions for Title / Escrow"
   - File validation: PDF, DOC, DOCX, JPG, PNG only, max 10MB

#### Privacy & Terms Section
- Privacy policy text (3 paragraphs)
- **Terms Checkbox***: "I agree to the terms and conditions above"
- Required field

#### Navigation
- **Back Button**: Return to step 1
- **Submit Button**: Dark button, validates all fields

### Step 3: Confirmation (Other)
**Route**: `/emd` (step managed by context)
**Progress**: Info (completed) → Details (completed) → Other (active)

#### Content
- **Success Icon**: Large checkmark in circle
- **Heading**: "Thank you for your submission."
- **Subheading**: "The Entire Process is as Follows:"

#### Process Steps List
1. Submit your request (DONE!)
2. Wait for a response from our team
3. Fill out contracts and email Escrow officer
4. We verify that your selected Title Company is aligned
5. We WIRE FUNDS!

#### Action Buttons
- **Submit Another Request**: Secondary button to reset form
- **Return to Website**: Primary button linking to main site

## Design Specifications

### Brand Compliance
Follow Real Quick Funds Style Guide:

#### Colors
- **Primary Orange**: `#D4941E`
- **Dark Orange**: `#B8801A` (hover states)
- **Light Orange**: `#E8A940` (accents)
- **Charcoal**: `#333333` (text)
- **Dark Gray**: `#666666` (secondary text)
- **Light Gray**: `#F5F5F5` (backgrounds)
- **Medium Gray**: `#D3D3D3` (borders)

#### Typography
- **Font Stack**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`
- **Headings**: Font-weight 700, color `#333333`
- **Body Text**: Font-size 16px, line-height 1.6, color `#666666`

#### Components

##### Progress Steps
- **Container**: Horizontal layout, centered
- **Step Circles**: 
  - Completed: Dark with white checkmark
  - Active: Orange outline with number
  - Inactive: Gray outline with number
- **Connecting Lines**: Gray between steps
- **Labels**: Below circles, appropriate colors

##### Form Inputs
```css
.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #D3D3D3;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #D4941E;
  box-shadow: 0 0 0 3px rgba(212, 148, 30, 0.1);
}
```

##### Buttons
```css
.btn-primary {
  background-color: #333333;
  color: #FFFFFF;
  border: none;
  border-radius: 6px;
  padding: 16px 32px;
  font-size: 16px;
  font-weight: 600;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #000000;
}
```

##### File Upload Areas
```css
.file-upload {
  border: 2px dashed #D3D3D3;
  border-radius: 8px;
  padding: 40px;
  text-align: center;
  background-color: #FAFAFA;
  transition: border-color 0.3s ease;
}

.file-upload:hover {
  border-color: #D4941E;
}
```

### Responsive Design

#### Breakpoints
- **Mobile**: 320px - 767px
- **Tablet**: 768px - 991px
- **Desktop**: 992px+

#### Layout Specifications

##### Mobile (320px - 767px)
- **Container**: Full width with 20px padding
- **Form Width**: 100%
- **Progress Steps**: Smaller circles, responsive labels
- **Input Groups**: Full width, stacked
- **File Upload**: Reduced padding (20px)

##### Tablet (768px - 991px)
- **Container**: Max-width 600px, centered
- **Form Width**: 100%
- **Progress Steps**: Horizontal layout
- **Input Groups**: Two columns where appropriate
- **File Upload**: Standard padding (40px)

##### Desktop (992px+)
- **Container**: Max-width 800px, centered
- **Form Width**: 100%
- **Progress Steps**: Full horizontal layout
- **Input Groups**: Optimized two-column layout
- **File Upload**: Full padding and larger drop zones

## Validation Requirements

### Zod Schema Implementation
**Critical**: Use Zod for runtime validation to match TypeScript types:

```typescript
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
    .optional(),
  
  hasReferral: z
    .boolean()
    .default(false),
});

export const dealInfoSchema = z.object({
  requestedAmount: z
    .number()
    .min(1000, 'Minimum amount is $1,000')
    .max(10000000, 'Maximum amount is $10,000,000'),
  
  fundsRequiredDate: z
    .string()
    .min(1, 'Funds required date is required')
    .refine((date) => {
      const selectedDate = new Date(date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }, 'Funds required date must be today or in the future'),
  
  propertyAddress: z.object({
    street: z.string().min(5, 'Please enter a complete address'),
    city: z.string().min(2, 'City is required'),
    state: z.string().min(1, 'Please select a state'),
    zipCode: z.string().regex(/^\d{5}(-\d{4})?$/, 'Please enter a valid ZIP code'),
  }),
  
  inspectionEndDate: z
    .string()
    .min(1, 'End of inspection period is required'),
  
  escrowCloseDate: z
    .string()
    .min(1, 'Close of escrow date is required'),
  
  purchaseAgreement: z
    .any()
    .refine((file) => file instanceof File, 'Purchase & Sale Agreement is required'),
  
  wiringInstructions: z
    .any()
    .refine((file) => file instanceof File, 'Wiring Instructions are required'),
  
  termsAccepted: z
    .boolean()
    .refine((val) => val === true, 'You must agree to the terms and conditions'),
});
```

### Error States
```css
.form-input.error {
  border-color: #DC3545;
  box-shadow: 0 0 0 3px rgba(220, 53, 69, 0.1);
}

.error-message {
  color: #DC3545;
  font-size: 14px;
  margin-top: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
}
```

## API Integration

### Netlify Function Endpoint
**Path**: `/.netlify/functions/submit-emd`
**Method**: POST

#### Request Payload
```typescript
interface EMDSubmission {
  // Step 1 Data
  borrowerFirstName: string;
  borrowerLastName: string;
  email: string;
  phoneNumber: string;
  companyName?: string;
  hasReferral: boolean;
  
  // Step 2 Data
  requestedAmount: number;
  fundsRequiredDate: string;
  propertyAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  inspectionEndDate: string;
  escrowCloseDate: string;
  purchaseAgreement: {
    filename: string;
    data: string; // base64 encoded
    mimeType: string;
  };
  wiringInstructions: {
    filename: string;
    data: string; // base64 encoded
    mimeType: string;
  };
  termsAccepted: boolean;
  
  // Metadata
  submissionDate: string;
  userAgent: string;
}
```

#### Response Format
```typescript
interface EMDResponse {
  success: boolean;
  message: string;
  submissionId?: string;
  errors?: string[];
}
```

### Error Handling
- **Network errors**: Retry mechanism with user feedback
- **Validation errors**: Display specific field errors
- **Server errors**: Generic error message with support contact
- **File upload errors**: Clear messaging about file requirements

## Development Implementation Plan

### Phase 1: Project Setup & Foundation (Day 1)
**Critical TypeScript Configuration Requirements:**

1. **Install correct dependency versions** (see Technical Architecture section)
2. **Configure TypeScript properly** with exact tsconfig.json
3. **Set up Vite configuration** with path aliases
4. **Create environment type definitions** in vite-env.d.ts
5. **Avoid common import path errors** (no .tsx extensions in imports)

**Developer Tasks:**
1. Set up React Router for `/emd` route
2. Configure root route redirect to https://realquickfunds.com
3. Create theme system based on style guide
4. Set up CSS modules and base component structure
5. Create layout components (Header, Footer, Container)

**Review Checkpoint:**
- Verify routing works correctly
- Confirm theme colors and typography match style guide
- Test responsive layout foundation
- **Verify TypeScript compilation with no errors**

### Phase 2: Progress Component & Step 1 (Day 2)
**Critical Form Setup Requirements:**

1. **Create proper type definitions** in types/index.ts
2. **Set up form constants** in constants/formConstants.ts
3. **Configure React Hook Form** with Zod resolver
4. **Implement proper error handling** for form validation

**Developer Tasks:**
1. Build StepProgress component with proper styling
2. Create Form validation system with React Hook Form + Zod
3. Build Step 1 (Info) form with all fields and validation
4. Implement responsive design for Step 1
5. Add form state management with Context API

**Review Checkpoint:**
- Test Step 1 form validation and user experience
- Verify responsive design on all breakpoints
- Confirm progress indicator accuracy
- **Ensure no TypeScript compilation errors**

### Phase 3: Step 2 Implementation (Day 3)
**Critical Dependencies:**
```bash
npm install react-datepicker react-dropzone
npm install @types/react-datepicker --save-dev
```

**Developer Tasks:**
1. Build Step 2 (Details) form with complex fields
2. Implement date picker components with proper validation
3. Create file upload components with drag & drop
4. Add address input group with state dropdown
5. Implement form data persistence between steps

**Review Checkpoint:**
- Test Step 2 functionality and validation
- Verify file upload works with size/type restrictions
- Test navigation between steps
- **Verify all imports resolve correctly**

### Phase 4: Step 3 & API Integration (Day 4)
**Critical API Requirements:**

1. **Create Netlify Function** with proper TypeScript configuration
2. **Implement file handling** with base64 encoding
3. **Add comprehensive error handling** for all scenarios
4. **Create loading states** and user feedback

**Developer Tasks:**
1. Build Step 3 confirmation page
2. Create Netlify Function for Zoho API integration
3. Implement form submission with file handling
4. Add error handling and loading states
5. Complete end-to-end testing

**Review Checkpoint:**
- Test complete form flow
- Verify API integration works (mock if Zoho endpoint not ready)
- Test error scenarios and edge cases
- **Ensure Netlify Function compiles and deploys**

### Phase 5: Polish & Deployment (Day 5)
**Critical Production Requirements:**

1. **Performance optimization** with code splitting
2. **Accessibility compliance** (WCAG 2.1 AA)
3. **Cross-browser testing** including mobile browsers
4. **Error boundary implementation** for production
5. **Security headers configuration**

**Developer Tasks:**
1. Performance optimization and code cleanup
2. Accessibility testing and improvements
3. Cross-browser testing and compatibility fixes
4. Deploy to Netlify staging environment
5. Final QA and bug fixes

**Review Checkpoint:**
- Complete functionality review
- Performance and accessibility audit
- Staging deployment verification
- **Production readiness checklist completion**

## Common TypeScript Error Prevention

### Import Path Rules
```typescript
// ✅ Correct - no file extensions
import { Component } from './Component'
import App from './App'

// ❌ Incorrect - causes compilation error
import { Component } from './Component.tsx'
import App from './App.tsx'
```

### Type Export Requirements
```typescript
// types/index.ts - must export all form types
export type FormStep = 'info' | 'details' | 'confirmation'
export interface BorrowerInfoFormData {
  // ... field definitions
}
export interface DealInfoFormData {
  // ... field definitions
}
```

### React Hook Form Integration
```typescript
// Proper typing for form components
interface FormInputProps {
  name: string;
  label: string;
  register: UseFormRegister<any>;
  error?: FieldError;
}
```

## Acceptance Criteria

### Functional Requirements
- [ ] Form completes all 3 steps successfully
- [ ] All validation rules work correctly with Zod schemas
- [ ] File uploads handle size/type restrictions
- [ ] API submission works via Netlify Function
- [ ] Root route redirects to main website
- [ ] Form data persists between steps
- [ ] Error handling works for all scenarios
- [ ] **TypeScript compilation completes without errors**

### Design Requirements
- [ ] Matches Real Quick Funds style guide exactly
- [ ] Responsive design works on all target devices
- [ ] Progress indicator shows current step accurately
- [ ] All interactive elements have proper hover/focus states
- [ ] File upload areas provide clear visual feedback

### Performance Requirements
- [ ] Page loads in under 2 seconds
- [ ] Form submission completes in under 5 seconds
- [ ] File uploads handle up to 10MB efficiently
- [ ] Smooth animations and transitions
- [ ] **Bundle size optimized with code splitting**

### Accessibility Requirements
- [ ] Keyboard navigation works throughout
- [ ] Screen reader compatibility
- [ ] Proper ARIA labels and roles
- [ ] Sufficient color contrast ratios (4.5:1 minimum)
- [ ] Focus indicators visible

### TypeScript Requirements
- [ ] All components properly typed
- [ ] No TypeScript compilation errors
- [ ] Proper error handling types
- [ ] Form validation schemas match TypeScript interfaces
- [ ] **All imports resolve correctly without .tsx extensions**

## Risk Assessment

### Technical Risks
- **TypeScript configuration errors**: Follow exact configuration requirements
- **File upload size limits**: Implement client-side validation and compression
- **Zoho API integration**: Build with mock endpoint, easily swappable
- **Mobile performance**: Optimize images and lazy load components

### UX Risks
- **Form abandonment**: Clear progress indicators and save state
- **Complex validation**: Provide helpful error messages and real-time feedback
- **File upload confusion**: Clear instructions and visual feedback

## Success Metrics

### Primary KPIs
- **Form completion rate**: Target >80%
- **Error rate**: Target <5% submission failures
- **Load time**: Target <2 seconds
- **Mobile usage**: Support 60%+ mobile traffic

### Secondary Metrics
- **Time to complete**: Target <5 minutes
- **File upload success**: Target >95%
- **TypeScript compilation**: 0 errors in production build
- **User satisfaction**: Gather feedback for improvements

---

## Next Steps

1. **Developer Review**: Confirm technical approach and TypeScript requirements
2. **Design Review**: Verify UI components match brand requirements  
3. **Stakeholder Approval**: Get final sign-off on functionality
4. **Development Start**: Begin Phase 1 with proper TypeScript setup
5. **Iterative Reviews**: Daily check-ins during development

This PRD serves as the definitive guide for implementing the EMD request form. All decisions and changes should reference back to these requirements to ensure project success, brand consistency, and TypeScript compilation success.