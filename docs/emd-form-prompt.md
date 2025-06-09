# Multi-Phase Outline

```
Phase 1 – Borrower Information
  • File: app/components/forms/EMDForm/Step1BorrowerInfo.tsx

Phase 2 – Deal Information
  • File: app/components/forms/EMDForm/Step2DealInfo.tsx

Phase 3 – Confirmation
  • File: app/components/forms/EMDForm/Step3Confirmation.tsx
```

---

## Prompt for Phase 1 (Step1BorrowerInfo.tsx)

> **Context:**
> - Codebase is Remix + React + TypeScript, uses Tailwind per the “RealQuick Funds” style guide.
> - We have shared components: `<FormInput>`, `<FormSelect>`, `<FormCheckbox>`, and a `FormContext` wrapper.
> - All styles must use the `.form-*` classes from the style guide, plus Tailwind utilities for layout.

> **Task:**
> Generate the complete contents of `app/components/forms/EMDForm/Step1BorrowerInfo.tsx`. No extra files, no commentary.

> **Requirements:**
> 1. **Imports:**
>    ```ts
>    import React from "react";
>    import { useFormContext } from "../FormContext";
>    import FormInput from "@/components/ui/FormInput";
>    import FormSelect from "@/components/ui/FormSelect";
>    import FormCheckbox from "@/components/ui/FormCheckbox";
>    ```
> 2. **Component signature & export:**
>    ```ts
>    const Step1BorrowerInfo: React.FC = () => { … }
>    export default Step1BorrowerInfo;
>    ```
> 3. **Form wrapper:**
>    ```tsx
>    const { register, formState: { errors } } = useFormContext();
>    return (
>      <form className="space-y-6">
>        <input type="hidden" name="step" value="1"/>
>        {/** — fields go here — **/}
>      </form>
>    );
>    ```
> 4. **Fields (with validation, error messages, labels, responsiveness):**
>    - **First Name** (`name="firstName"`, `required`, error: “First name is required.”)
>    - **Last Name** (`name="lastName"`, `required`)
>    - **Email** (`type="email"`, required, HTML5 + custom error: “Enter a valid email.”)
>    - **Phone Number** (`type="tel"`, required, pattern for US phone)
>    - **Company Name** (`name="company"`, optional)
>    - **Referrer Checkbox** (“A different individual is referring or brokering this deal”)
>
>    Layout:
>    ```html
>    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">…</div>
>    ```
>    For each field:
>    ```tsx
>    <div>
>      <label htmlFor="firstName" className="form-label">
>        First Name <span className="text-red-500">*</span>
>      </label>
>      <FormInput
>        id="firstName"
>        {...register("firstName", { required: true })}
>        className="form-input"
>      />
>      {errors.firstName && (
>        <p className="text-red-600 text-sm mt-1">First name is required.</p>
>      )}
>    </div>
>    ```
> 5. **Next button:**
>    ```tsx
>    <button
>      type="submit"
>      name="_action"
>      value="navigate"
>      formAction="/emd?step=2"
>      className="btn-primary w-full md:w-auto"
>    >
>      Next →
>    </button>
>    ```
> 6. **Accessibility & ARIA:**
>    - Inputs have `aria-invalid={!!errors.field}`.
>    - Error `<p>`s use `role="alert"`.
> 7. **Responsiveness:**
>    - Grid collapses to one column on mobile.
>    - Buttons full-width under 768px, auto-width above.
> 8. **No extra wrappers** beyond the `<form>`.

> **Output only** the TSX for `Step1BorrowerInfo.tsx`.
> Ensure it compiles under `tsc`, passes lint, and matches the style guide.
