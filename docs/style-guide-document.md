# RealQuick Funds Portal Style Guide

## Brand Identity

### Logo
- Primary: RealQuick Funds with stylized "R" icon
- Icon colors: Orange gradient
- Text: "RealQuick" in black, "FUNDS" in smaller text below
- Always maintain clear space around logo
- **Header Logo**: Dark version, 120px width, auto height
- **Footer Logo**: Dark version, 120px width, auto height

### Brand Voice
- Professional yet approachable
- Clear and concise
- Action-oriented
- Trustworthy and reliable

## Color Palette

### Primary Colors
```css
--primary-orange: #F39C12;
--primary-orange-hover: #E67E22;
--primary-dark: #2C3E50;
--primary-black: #1A1A1A;
```

### Secondary Colors
```css
--text-primary: #2C3E50;
--text-secondary: #7F8C8D;
--background-light: #FFFFFF;
--background-gray: #F8F9FA;
--border-color: #E0E0E0;
```

### UI Colors
```css
--header-footer-bg: #444444;
--text-on-dark: #FFFFFF;
--secondary-text-on-dark: #CCCCCC;
```

### Semantic Colors
```css
--success: #27AE60;
--error: #E74C3C;
--warning: #F39C12;
--info: #3498DB;
```

## Typography

### Font Stack
```css
--font-headings: 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-body: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'Fira Code', 'Courier New', monospace;
```

### Font Usage
- **Headings (h1-h6)**: Lato, sans-serif (weights: 300, 400, 700, 900)
- **Body Text**: Poppins, sans-serif (weights: 300, 400, 500, 600, 700)

### Font Sizes
```css
--text-xs: 0.75rem;    /* 12px */
--text-sm: 0.875rem;   /* 14px */
--text-base: 1rem;     /* 16px */
--text-lg: 1.125rem;   /* 18px */
--text-xl: 1.25rem;    /* 20px */
--text-2xl: 1.5rem;    /* 24px */
--text-3xl: 1.875rem;  /* 30px */
--text-4xl: 2.25rem;   /* 36px */
```

### Font Weights
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

## Layout Structure

### Page Layout
- All pages use a consistent layout with sticky header and footer
- Content is properly padded to avoid overlapping with fixed elements

### Header
- **Position**: Fixed at the top of the viewport
- **Height**: 70px
- **Background Color**: #444444 (dark gray)
- **Content**: Centered RealQuick Funds logo (120px width)
- **Shadow**: Subtle shadow for depth
- **z-index**: 1000 to ensure it stays above all content

### Footer
- **Position**: Fixed at the bottom of the viewport
- **Height**: 70px
- **Background Color**: #444444 (dark gray)
- **Content**: 
  - Left: RealQuick Funds logo (120px width)
  - Right: Copyright text
- **z-index**: 1000 to ensure it stays above all content

### Main Content
- **Padding**: 90px top and bottom (to account for header and footer)
- **Min Height**: calc(100vh - 140px) to ensure full viewport coverage
- **Width**: 100% with box-sizing: border-box
- **Container**: Pages typically use a max-width container (max-w-3xl) with horizontal padding

## Component Styles

### Buttons
```css
/* Primary Button */
.btn-primary {
  background: var(--primary-orange);
  color: white;
  padding: 10px 24px;
  border-radius: 8px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  font-size: 0.875rem;
}

.btn-primary:hover {
  background: var(--primary-orange-hover);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(243, 156, 18, 0.3);
}

/* Secondary Button */
.btn-secondary {
  background: transparent;
  color: var(--primary-orange);
  border: 2px solid var(--primary-orange);
  padding: 8px 22px;
  border-radius: 8px;
  font-size: 0.875rem;
}
```

### Tailwind Button Classes
- **Primary Button**:
  - `inline-flex items-center px-6 py-2.5 bg-primary hover:bg-primary-hover text-white font-medium rounded-md transition-colors text-sm shadow-md hover:shadow-lg`

### Form Elements
```css
/* Input Fields */
.form-input {
  width: 100%;
  padding: 8px 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  font-size: var(--text-sm);
  transition: border-color 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: var(--primary-orange);
  box-shadow: 0 0 0 3px rgba(243, 156, 18, 0.1);
}

/* Labels */
.form-label {
  font-weight: var(--font-medium);
  color: var(--text-primary);
  margin-bottom: 4px;
  display: block;
  font-size: var(--text-xs);
}

/* Required Indicator */
.required {
  color: var(--error);
}
```

### Cards & Containers
```css
.card {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  padding: 20px;
}

.section-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 16px;
}
```

### Progress Indicators
```css
.progress-step {
  display: flex;
  align-items: center;
  position: relative;
}

.step-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
}

.progress-step.active .step-circle {
  background: var(--primary-orange);
  color: white;
  transform: scale(1.05);
}

.progress-step.completed .step-circle {
  background: var(--success);
  color: white;
}

.step-connector {
  height: 2px;
  background: var(--border-color);
  flex-grow: 1;
  margin: 0 4px;
}

.step-connector.active {
  background: var(--primary-orange);
}
```

## Layout Principles

### Spacing Scale
```css
--space-1: 0.25rem;  /* 4px */
--space-2: 0.5rem;   /* 8px */
--space-3: 0.75rem;  /* 12px */
--space-4: 1rem;     /* 16px */
--space-5: 1.25rem;  /* 20px */
--space-6: 1.5rem;   /* 24px */
--space-8: 2rem;     /* 32px */
--space-10: 2.5rem;  /* 40px */
--space-12: 3rem;    /* 48px */
--space-16: 4rem;    /* 64px */
```

### Breakpoints
```css
--breakpoint-sm: 640px;
--breakpoint-md: 768px;
--breakpoint-lg: 1024px;
--breakpoint-xl: 1280px;
```

### Grid System
- 12-column grid for complex layouts
- 8px gutter on mobile
- 16px gutter on tablet
- 24px gutter on desktop

## Animation & Transitions

### Transition Speeds
```css
--transition-fast: 150ms;
--transition-normal: 300ms;
--transition-slow: 500ms;
```

### Easing Functions
```css
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-in: cubic-bezier(0.4, 0, 1, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
```

### Common Animations
- Button hover: Scale slightly (1.02) and lighten color
- Form focus: Highlight border with primary color
- Modal entry: Fade in and scale up from 0.95 to 1
- Toast notifications: Slide in from top

## Implementation Notes

- Layout is implemented using inline styles in root.tsx
- Typography settings are in global.css
- Additional layout styles in layout.css
- Tailwind CSS is used for utility classes throughout the application
- Use `window.ENV` for accessing environment variables on the client side
- Form elements use a compact styling for better space utilization
- Step progress indicators appear below form title for improved visual flow