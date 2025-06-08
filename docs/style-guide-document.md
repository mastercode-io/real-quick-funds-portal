# RealQuick Funds Portal Style Guide

## Brand Identity

### Logo
- Primary: RealQuick Funds with stylized "R" icon
- Icon colors: Orange gradient
- Text: "RealQuick" in black, "FUNDS" in smaller text below
- Always maintain clear space around logo

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
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
--font-mono: 'Fira Code', 'Courier New', monospace;
```

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

## Component Styles

### Buttons
```css
/* Primary Button */
.btn-primary {
  background: var(--primary-orange);
  color: white;
  padding: 12px 32px;
  border-radius: 30px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
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
  padding: 10px 30px;
  border-radius: 30px;
}
```

### Form Elements
```css
/* Input Fields */
.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--border-color);
  border-radius: 8px;
  font-size: var(--text-base);
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
  margin-bottom: 8px;
  display: block;
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
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  padding: 24px;
}

.section-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
}
```

### Progress Indicators
```css
.progress-step {
  display: flex;
  align-items: center;
  position: relative;
}

.progress-step.active .step-circle {
  background: var(--primary-orange);
  color: white;
}

.progress-step.completed .step-circle {
  background: var(--success);
  color: white;
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

### Standard Transitions
```css
--transition-fast: 150ms ease;
--transition-base: 300ms ease;
--transition-slow: 500ms ease;
```

### Hover Effects
- Buttons: Slight elevation with shadow
- Links: Color change to primary orange
- Cards: Subtle shadow increase
- Form fields: Border color change with glow

## Icons & Images

### Icon Style
- Use line icons for consistency
- Default size: 20px
- Color: Match text color or primary orange for actions
- Maintain 4px minimum spacing from text

### Image Guidelines
- High-quality, professional photography
- Consistent color treatment
- 16:9 ratio for hero images
- Border-radius: 8px for content images

## Best Practices

### Accessibility
- Minimum contrast ratio 4.5:1 for normal text
- Focus indicators on all interactive elements
- Semantic HTML structure
- ARIA labels where needed

### Performance
- Optimize images (WebP with fallbacks)
- Lazy load below-the-fold content
- Minimize CSS specificity
- Use CSS custom properties for theming

### Consistency
- Always use design tokens
- Follow spacing scale strictly
- Maintain visual hierarchy
- Test across all breakpoints