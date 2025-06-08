# EMD Form Product Requirements Document

## Project Overview
The EMD (Earnest Money Deposit) Request Form is a web-based application that allows real estate professionals to submit funding requests for earnest money deposits. The form integrates with Zoho CRM to automate the loan processing workflow.

## Business Objectives
- Streamline the EMD funding request process
- Reduce manual data entry by automating CRM record creation
- Provide a professional, branded experience matching RealQuick Funds website
- Enable quick approval and funding for real estate transactions

## Functional Requirements

### Form Structure
The EMD form consists of two steps plus a confirmation page:

#### Step 1: Borrower Information
- **Borrower First Name** (required, text)
- **Borrower Last Name** (required, text)
- **Email** (required, email validation)
- **Phone Number** (required, US phone format)
- **Borrower Entity (Company) Name** (optional, text)
- **Checkbox**: "A different individual is referring or brokering this deal" (optional)

#### Step 2: Deal Information
- **Requested Amount** (required, currency format, prefixed with $)
- **When Funds Are Required** (required, date picker, MM/DD/YYYY format)
- **Subject Property Address** (required)
  - Address (text)
  - City (text)
  - State/Province (dropdown)
  - ZIP/Postal Code (text)
- **End of Inspection Period** (required, date picker)
- **Close of Escrow Date** (required, date picker)
- **Purchase & Sale Agreement** (required, file upload)
  - Instruction text: "Please upload the most current signed version of the purchase agreement"
  - Drag & drop or browse functionality
- **Wiring Instructions** (required, file upload)
  - Instruction text: "Please upload the wiring instructions for Title / Escrow"
  - Drag & drop or browse functionality
- **Terms Agreement** (required, checkbox)
  - Text: "I agree to the terms and conditions above"

#### Confirmation Page
Display success message with process overview:
1. Submit your request (DONE!)
2. Wait for a response from our team
3. Fill out contracts and email Escrow officer
4. We verify that your selected Title Company is aligned
5. We WIRE FUNDS!

### Navigation Requirements
- Progress indicator showing current step (Info → Details → Other)
- "Next" button to proceed between steps
- "Submit" button on final step
- Back navigation to previous steps
- Form data persistence when navigating between steps

### Technical Requirements

#### Routing
- Form accessible at `/emd` path
- Root path (`/`) redirects to main website in production, shows test page in development
- Environment variable to distinguish dev/prod environments

#### Data Handling
- Client-side validation before submission
- Server-side validation for security
- File uploads handled securely (max file size limits)
- Form data sent to Zoho CRM via API

#### Zoho CRM Integration
- Create new Lead/Deal record with form data
- Upload files as attachments
- Trigger automated workflows in Zoho
- Handle API errors gracefully

#### Styling & Branding
- Match RealQuick Funds website design
- Orange primary color (#F39C12)
- Dark header/footer
- Professional, clean form styling
- Mobile-responsive design

### Non-Functional Requirements
- Page load time < 2 seconds
- Form submission < 5 seconds
- Support modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-friendly responsive design
- Accessible (WCAG 2.1 AA compliance)
- Secure file uploads (virus scanning, file type validation)
- SSL/HTTPS required

### Privacy & Legal
- Privacy policy and terms acceptance required
- Data handled according to privacy policy
- Secure transmission of financial information
- Compliance with real estate regulations

### Future Considerations
- Portal expansion capabilities
- User authentication system
- Dashboard for tracking submissions
- Document management features
- Communication tools

## Success Metrics
- Form completion rate > 80%
- Average time to complete < 5 minutes
- Successful CRM integration rate > 99%
- User satisfaction score > 4.5/5