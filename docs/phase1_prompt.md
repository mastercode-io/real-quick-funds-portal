# Phase 1: Project Setup & Foundation - Implementation Prompt

## Context
You are implementing Phase 1 of the Real Quick Funds EMD Request Form. This is a React + Vite + TypeScript project with Netlify Functions backend.

**CRITICAL**: This phase includes essential TypeScript configuration to prevent compilation errors in later phases.

## Objectives
1. Set up React Router for `/emd` route
2. Configure root route redirect to https://realquickfunds.com  
3. Create theme system based on Real Quick Funds style guide
4. Set up CSS modules and base component structure
5. Create layout components (Header, Footer, Container)
6. **Configure TypeScript and Vite properly to prevent common errors**

## Brand Style Guide Reference

### Colors
```css
:root {
  --primary-orange: #D4941E;
  --dark-orange: #B8801A;
  --light-orange: #E8A940;
  --white: #FFFFFF;
  --light-gray: #F5F5F5;
  --medium-gray: #D3D3D3;
  --dark-gray: #666666;
  --charcoal: #333333;
  --black: #000000;
}
```

### Typography
```css
:root {
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-size-hero: 48px;
  --font-size-section: 36px;
  --font-size-subsection: 24px;
  --font-size-body-large: 18px;
  --font-size-body: 16px;
  --font-size-small: 14px;
  --font-size-caption: 12px;
  --line-height-headings: 1.2;
  --line-height-body: 1.6;
}
```

## Implementation Tasks

### Task 1: Install Dependencies
```bash
npm install react-router-dom
npm install @types/react-router-dom --save-dev
```

### Task 2: Critical TypeScript Configuration

**IMPORTANT**: These configurations prevent common TypeScript compilation errors.

**File: `tsconfig.json`** (Replace existing)
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

**File: `tsconfig.node.json`** (Create/Replace)
```json
{
  "compilerOptions": {
    "composite": true,
    "module": "ESNext",
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["vite.config.ts"]
}
```

**File: `vite.config.ts`** (Update)
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
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

### Task 3: Vite Environment Types

**File: `src/vite-env.d.ts`** (Create)
```typescript
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_BASE_URL: string
  readonly VITE_APP_TITLE: string
  // Add other environment variables here
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Module declarations for CSS modules
declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}

// Image imports
declare module '*.svg' {
  import * as React from 'react'
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement> & { title?: string }>
  const src: string
  export default src
}

declare module '*.jpg' {
  const src: string
  export default src
}

declare module '*.jpeg' {
  const src: string
  export default src
}

declare module '*.png' {
  const src: string
  export default src
}

declare module '*.webp' {
  const src: string
  export default src
}
```

### Task 4: Project Structure
Create the following folder structure:
```
src/
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Container.tsx
│   └── ui/
│       └── (UI components will go here)
├── pages/
│   ├── EMDForm.tsx
│   └── Home.tsx
├── styles/
│   ├── globals.css
│   ├── theme.css
│   └── components/
│       ├── Layout.module.css
│       └── (component styles will go here)
├── types/
│   └── index.ts
├── constants/
│   └── (form constants will go here)
├── contexts/
│   └── (React contexts will go here)
└── utils/
    └── (utilities will go here)
```

### Task 5: Create Theme System

**File: `src/styles/theme.css`**
```css
:root {
  /* Colors */
  --primary-orange: #D4941E;
  --dark-orange: #B8801A;
  --light-orange: #E8A940;
  --white: #FFFFFF;
  --light-gray: #F5F5F5;
  --medium-gray: #D3D3D3;
  --dark-gray: #666666;
  --charcoal: #333333;
  --black: #000000;
  
  /* Typography */
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --font-size-hero: 3rem;        /* 48px */
  --font-size-section: 2.25rem;  /* 36px */
  --font-size-subsection: 1.5rem; /* 24px */
  --font-size-body-large: 1.125rem; /* 18px */
  --font-size-body: 1rem;        /* 16px */
  --font-size-small: 0.875rem;   /* 14px */
  --font-size-caption: 0.75rem;  /* 12px */
  
  /* Line Heights */
  --line-height-headings: 1.2;
  --line-height-body: 1.6;
  --line-height-captions: 1.4;
  
  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
  --spacing-4xl: 96px;
  
  /* Breakpoints (for reference) */
  --breakpoint-sm: 576px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 992px;
  --breakpoint-xl: 1200px;
  
  /* Container */
  --container-max-width: 1200px;
  --container-padding-mobile: 20px;
  --container-padding-tablet: 40px;
  --container-padding-desktop: 60px;
  
  /* Border Radius */
  --border-radius-sm: 6px;
  --border-radius-md: 12px;
  --border-radius-lg: 25px;
  
  /* Transitions */
  --transition-fast: 0.2s ease;
  --transition-standard: 0.3s ease;
  --transition-slow: 0.5s ease;
  
  /* Shadows */
  --shadow-sm: 0 4px 20px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 8px 30px rgba(0, 0, 0, 0.15);
  --shadow-button: 0 4px 12px rgba(212, 148, 30, 0.3);
}
```

### Task 6: Global Styles

**File: `src/styles/globals.css`**
```css
@import './theme.css';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-family);
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  color: var(--dark-gray);
  background-color: var(--white);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Typography Base Styles */
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  color: var(--charcoal);
  line-height: var(--line-height-headings);
  margin-bottom: var(--spacing-md);
}

h1 { font-size: var(--font-size-hero); }
h2 { font-size: var(--font-size-section); }
h3 { font-size: var(--font-size-subsection); }

p {
  margin-bottom: var(--spacing-md);
}

/* Links */
a {
  color: var(--primary-orange);
  text-decoration: none;
  transition: color var(--transition-standard);
}

a:hover {
  color: var(--dark-orange);
  text-decoration: underline;
}

/* Focus States for Accessibility */
*:focus {
  outline: 2px solid var(--primary-orange);
  outline-offset: 2px;
}

*:focus:not(:focus-visible) {
  outline: none;
}

/* Responsive Typography */
@media (max-width: 768px) {
  html {
    font-size: 14px;
  }
  
  h1 { font-size: 2.5rem; }
  h2 { font-size: 2rem; }
  h3 { font-size: 1.25rem; }
}
```

### Task 7: Layout Components

**File: `src/styles/components/Layout.module.css`**
```css
.container {
  max-width: var(--container-max-width);
  margin: 0 auto;
  padding: 0 var(--container-padding-mobile);
}

@media (min-width: 768px) {
  .container {
    padding: 0 var(--container-padding-tablet);
  }
}

@media (min-width: 992px) {
  .container {
    padding: 0 var(--container-padding-desktop);
  }
}

.header {
  background-color: var(--white);
  border-bottom: 1px solid var(--medium-gray);
  padding: var(--spacing-lg) 0;
}

.footer {
  background-color: var(--charcoal);
  color: var(--white);
  padding: var(--spacing-2xl) 0;
  margin-top: auto;
}

.main {
  min-height: calc(100vh - 200px); /* Adjust based on header/footer height */
  padding: var(--spacing-2xl) 0;
}

.logo {
  height: 40px;
  width: auto;
}

@media (max-width: 768px) {
  .main {
    padding: var(--spacing-xl) 0;
  }
  
  .header {
    padding: var(--spacing-md) 0;
  }
  
  .footer {
    padding: var(--spacing-xl) 0;
  }
}
```

**File: `src/components/layout/Container.tsx`**
```tsx
import React from 'react';
import styles from '../../styles/components/Layout.module.css';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
};
```

**File: `src/components/layout/Header.tsx`**
```tsx
import React from 'react';
import { Container } from './Container';
import styles from '../../styles/components/Layout.module.css';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <img 
            src="/logo.png" 
            alt="Real Quick Funds" 
            className={styles.logo}
          />
          <nav>
            {/* Navigation items will go here if needed */}
          </nav>
        </div>
      </Container>
    </header>
  );
};
```

**File: `src/components/layout/Footer.tsx`**
```tsx
import React from 'react';
import { Container } from './Container';
import styles from '../../styles/components/Layout.module.css';

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <div style={{ textAlign: 'center' }}>
          <p>&copy; 2025 Real Quick Funds, LLC. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};
```

### Task 8: TypeScript Types

**File: `src/types/index.ts`**
```typescript
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
```

### Task 9: Routing Setup

**File: `src/pages/Home.tsx`**
```tsx
import React, { useEffect } from 'react';

export const Home: React.FC = () => {
  useEffect(() => {
    // Redirect to main website
    window.location.href = 'https://realquickfunds.com';
  }, []);

  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      height: '100vh',
      flexDirection: 'column'
    }}>
      <h2>Redirecting to Real Quick Funds...</h2>
      <p>If you are not redirected automatically, <a href="https://realquickfunds.com">click here</a>.</p>
    </div>
  );
};
```

**File: `src/pages/EMDForm.tsx`**
```tsx
import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { Container } from '../components/layout/Container';

export const EMDForm: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <main style={{ flex: 1 }}>
        <Container>
          <div style={{ 
            maxWidth: '800px', 
            margin: '0 auto',
            paddingTop: 'var(--spacing-xl)',
            textAlign: 'center'
          }}>
            <img 
              src="/logo.png" 
              alt="Real Quick Funds" 
              style={{ height: '60px', marginBottom: 'var(--spacing-lg)' }}
            />
            <h1>EMD Request Form</h1>
            <p>Form implementation coming in Phase 2...</p>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
};
```

### Task 10: Update Main App Component

**File: `src/App.tsx`** (CRITICAL: Note import paths without .tsx extensions)
```tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { EMDForm } from './pages/EMDForm';
import './styles/globals.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/emd" element={<EMDForm />} />
      </Routes>
    </Router>
  );
}

export default App;
```

**File: `src/main.tsx`** (CRITICAL: Update import path)
```tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'  // Remove .tsx extension
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

### Task 11: Verify TypeScript Configuration

Run these commands to verify setup:
```bash
# Check TypeScript compilation
npx tsc --noEmit

# Start development server
npm run dev
```

## Critical Error Prevention

### Import Path Rules
```typescript
// ✅ Correct - no file extensions
import { Component } from './Component'
import App from './App'

// ❌ Incorrect - causes compilation error
import { Component } from './Component.tsx'
import App from './App.tsx'
```

### CSS Module Declarations
The `vite-env.d.ts` file ensures CSS modules work properly:
```typescript
declare module '*.module.css' {
  const classes: { readonly [key: string]: string }
  export default classes
}
```

### Path Alias Usage
After configuration, you can use:
```typescript
// Instead of relative paths
import { Header } from '../../../components/layout/Header'

// Use aliases (in later phases)
import { Header } from '@components/layout/Header'
```

## Testing Checklist
After implementation, verify:

### Basic Functionality
- [ ] Route `/` redirects to https://realquickfunds.com
- [ ] Route `/emd` displays EMD form page with header and footer
- [ ] **TypeScript compilation completes without errors (`npx tsc --noEmit`)**
- [ ] Development server starts without errors (`npm run dev`)

### Styling & Theme
- [ ] CSS variables are properly loaded and accessible
- [ ] Typography matches the style guide (font family, sizes, weights)
- [ ] Colors match the brand palette exactly
- [ ] Layout is responsive on mobile, tablet, and desktop
- [ ] Container max-width and padding work correctly
- [ ] Header and footer are properly styled

### TypeScript Configuration
- [ ] All imports resolve correctly without .tsx extensions
- [ ] CSS modules have proper type declarations
- [ ] Path aliases are configured (will be used in later phases)
- [ ] Environment types are properly declared
- [ ] No TypeScript errors in IDE

### File Structure
- [ ] All required directories are created
- [ ] Components are in correct locations
- [ ] Types are properly organized
- [ ] Styles follow the component structure

## Review Points
1. **TypeScript Setup**: Verify all configurations are correct and compilation works
2. **Routing Verification**: Test both routes work correctly
3. **Brand Compliance**: Verify colors and typography match style guide exactly
4. **Responsive Design**: Test layout on different screen sizes
5. **Code Organization**: Confirm file structure is logical and maintainable

## Troubleshooting Common Issues

### "Cannot find module" errors
- Verify `vite-env.d.ts` includes proper module declarations
- Check that imports don't use .tsx extensions
- Ensure TypeScript configuration includes all necessary files

### CSS not loading
- Verify CSS imports use correct paths
- Check that CSS modules are declared in environment types
- Ensure global CSS is imported in main.tsx or App.tsx

### Compilation errors
- Run `npx tsc --noEmit` to see specific TypeScript errors
- Verify all type definitions are exported in `types/index.ts`
- Check that all imports resolve correctly

## Next Phase Preview
Phase 2 will focus on building the progress component and Step 1 (Info) form with validation using React Hook Form and Zod, building upon the solid foundation created in this phase. The TypeScript configuration from this phase will prevent common errors when adding form dependencies and complex validation schemas.