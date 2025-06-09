# RealQuick Funds Portal - Project Structure & Boilerplate

## Project Structure

```
realquick-portal/
├── app/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Layout.tsx
│   │   ├── forms/
│   │   │   ├── EMDForm/
│   │   │   │   ├── Step1BorrowerInfo.tsx
│   │   │   │   ├── Step2DealInfo.tsx
│   │   │   │   └── Step3Confirmation.tsx
│   │   │   ├── StepProgress.tsx
│   │   │   └── FormContext.tsx
│   │   └── ui/
│   │       ├── FormInput.tsx
│   │       ├── FormSelect.tsx
│   │       ├── FormCheckbox.tsx
│   │       ├── FileUpload.tsx
│   │       └── DatePicker.tsx
│   ├── routes/
│   │   ├── _index.tsx
│   │   └── emd.tsx
│   ├── styles/
│   │   ├── global.css
│   │   ├── layout.css
│   │   └── tailwind.css
│   ├── lib/
│   │   ├── zoho.server.ts
│   │   ├── validations.ts
│   │   ├── constants.ts
│   │   └── utils.ts
│   ├── hooks/
│   │   ├── useFormPersistence.ts
│   │   └── useStepNavigation.ts
│   ├── types/
│   │   ├── forms.ts
│   │   └── api.ts
│   ├── entry.client.tsx
│   ├── entry.server.tsx
│   └── root.tsx
├── public/
│   ├── images/
│   │   └── logo.svg
│   └── fonts/
├── docs/
│   ├── emd-prd-document.md
│   ├── style-guide-document.md
│   └── project-structure-boilerplate.md
├── .env.example
├── .gitignore
├── package.json
├── remix.config.js
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## Key File Boilerplates

### `package.json`
```json
{
  "name": "real-quick-funds-portal",
  "private": true,
  "version": "1.0.0",
  "scripts": {
    "build": "remix build",
    "dev": "remix dev",
    "start": "remix-serve build",
    "typecheck": "tsc",
    "lint": "eslint --cache --cache-location ./node_modules/.cache/eslint .",
    "format": "prettier --write ."
  },
  "dependencies": {
    "@remix-run/node": "^2.16.8",
    "@remix-run/react": "^2.16.8",
    "@remix-run/serve": "^2.16.8",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.48.2",
    "zod": "^3.22.0",
    "date-fns": "^2.30.0",
    "clsx": "^2.0.0",
    "tailwind-merge": "^2.0.0"
  },
  "devDependencies": {
    "@remix-run/dev": "^2.16.8",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "typescript": "^5.3.0",
    "tailwindcss": "^3.4.17",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "eslint": "^8.55.0",
    "prettier": "^3.1.0"
  }
}
```

### `root.tsx`
```tsx
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import type { LinksFunction } from "@remix-run/node";

import tailwindStyles from "~/styles/tailwind.css";
import globalStyles from "~/styles/global.css";
import layoutStyles from "~/styles/layout.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: tailwindStyles },
  { rel: "stylesheet", href: globalStyles },
  { rel: "stylesheet", href: layoutStyles },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <header className="fixed top-0 left-0 right-0 h-[70px] bg-[#444444] shadow-md z-50 flex items-center justify-center">
          <img 
            src="/images/logo.svg" 
            alt="RealQuick Funds" 
            className="h-auto w-[120px] my-3"
          />
        </header>
        
        <main className="pt-[70px] pb-[70px] min-h-screen">
          <Outlet />
        </main>
        
        <footer className="fixed bottom-0 left-0 right-0 h-[70px] bg-[#444444] shadow-md z-50 flex items-center justify-between px-6">
          <img 
            src="/images/logo.svg" 
            alt="RealQuick Funds" 
            className="h-auto w-[120px] my-3"
          />
          <div className="text-white text-sm">
            {new Date().getFullYear()} RealQuick Funds. All rights reserved.
          </div>
        </footer>
        
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
```

### `emd.tsx`
```tsx
import type { MetaFunction } from "@remix-run/node";
import Step1BorrowerInfo from "~/components/forms/EMDForm/Step1BorrowerInfo";
import StepProgress from "~/components/forms/StepProgress";

export const meta: MetaFunction = () => {
  return [
    { title: "EMD Request" },
    { name: "description", content: "Earnest Money Deposit request form for RealQuick Funds clients" },
  ];
};

export default function EMD() {
  const steps = [
    { id: 1, label: "Borrower Info" },
    { id: 2, label: "Deal Info" },
    { id: 3, label: "Confirmation" }
  ];
  
  const currentStep = 1;

  return (
    <div className="flex flex-col bg-gray-50 min-h-[calc(100vh-140px)] w-full">
      <div className="max-w-3xl mx-auto px-4 py-6 w-full flex-grow">
        <div className="text-center mb-5">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">EMD Request</h1>
          <div className="w-40 h-1 bg-primary mx-auto mb-2"></div>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            Please complete all required information to submit your EMD request.
          </p>
        </div>
        
        <div className="mb-6">
          <StepProgress steps={steps} currentStep={currentStep} />
        </div>
        
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-5">
          <h2 className="text-lg font-medium text-gray-800 mb-4 pb-2 border-b border-gray-200">
            Borrower Information
          </h2>
          
          <Step1BorrowerInfo />
        </div>
      </div>
    </div>
  );
}
```

### `FormInput.tsx`
```tsx
import React, { forwardRef } from 'react';

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-800 
          placeholder:text-gray-400 bg-white transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
          hover:border-gray-400 ${className}`}
        {...props}
      />
    );
  }
);

FormInput.displayName = 'FormInput';

export default FormInput;

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}
```

### `StepProgress.tsx`
```tsx
import React from 'react';

interface Step {
  id: number;
  label: string;
}

interface StepProgressProps {
  steps: Step[];
  currentStep: number;
}

const StepProgress: React.FC<StepProgressProps> = ({ steps, currentStep }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => {
          const isActive = step.id === currentStep;
          const isCompleted = step.id < currentStep;
          const isLast = index === steps.length - 1;
          
          return (
            <React.Fragment key={step.id}>
              <div className="flex flex-col items-center">
                <div 
                  className={`flex items-center justify-center w-8 h-8 rounded-full text-xs font-medium transition-all duration-200
                    ${isActive ? 'bg-primary text-white shadow-md scale-105' : 
                      isCompleted ? 'bg-primary-dark text-white' : 'bg-gray-200 text-gray-600'}`}
                >
                  {isCompleted ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    step.id
                  )}
                </div>
                <span 
                  className={`mt-1 text-xs
                    ${isActive ? 'text-primary font-medium' : 
                      isCompleted ? 'text-primary-dark' : 'text-gray-500'}`}
                >
                  {step.label}
                </span>
              </div>
              
              {!isLast && (
                <div 
                  className={`flex-1 h-0.5 mx-1
                    ${step.id < currentStep ? 'bg-primary-dark' : 'bg-gray-200'}`}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default StepProgress;
```

### `tailwind.config.js`
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F39C12",
        "primary-hover": "#E67E22",
        "primary-dark": "#2C3E50",
        "header-footer": "#444444",
      },
    },
  },
  plugins: [],
};
```