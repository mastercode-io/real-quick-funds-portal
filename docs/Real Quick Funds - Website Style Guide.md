# Real Quick Funds - Website Style Guide

## Brand Colors

### Primary Colors
- **Primary Orange**: `#D4941E` (main brand color, buttons, highlights)
- **Dark Orange**: `#B8801A` (hover states, darker accents)
- **Light Orange**: `#E8A940` (lighter accents, backgrounds)

### Neutral Colors
- **White**: `#FFFFFF` (main background, text on dark backgrounds)
- **Light Gray**: `#F5F5F5` (section backgrounds, card backgrounds)
- **Medium Gray**: `#D3D3D3` (borders, inactive elements)
- **Dark Gray**: `#666666` (secondary text, icons)
- **Charcoal**: `#333333` (primary text, headers)
- **Black**: `#000000` (footer background, high contrast text)

## Typography

### Font Stack
```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
```

### Font Weights
- **Regular**: `400` (body text)
- **Medium**: `500` (subheadings, emphasis)
- **Semi-Bold**: `600` (section headers)
- **Bold**: `700` (main headings, important text)

### Font Sizes
- **Hero Heading**: `48px` / `3rem`
- **Section Heading**: `36px` / `2.25rem`
- **Subsection Heading**: `24px` / `1.5rem`
- **Body Large**: `18px` / `1.125rem`
- **Body Regular**: `16px` / `1rem`
- **Body Small**: `14px` / `0.875rem`
- **Caption**: `12px` / `0.75rem`

### Line Heights
- **Headings**: `1.2`
- **Body Text**: `1.6`
- **Captions**: `1.4`

## Buttons

### Primary Button
```css
.btn-primary {
  background-color: #D4941E;
  color: #FFFFFF;
  border: none;
  border-radius: 25px;
  padding: 12px 32px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background-color: #B8801A;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(212, 148, 30, 0.3);
}
```

### Secondary Button
```css
.btn-secondary {
  background-color: transparent;
  color: #D4941E;
  border: 2px solid #D4941E;
  border-radius: 25px;
  padding: 10px 30px;
  font-size: 16px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background-color: #D4941E;
  color: #FFFFFF;
}
```

## Layout & Spacing

### Container Widths
- **Max Width**: `1200px`
- **Padding**: `20px` (mobile), `40px` (tablet), `60px` (desktop)

### Spacing Scale
- **xs**: `4px`
- **sm**: `8px`
- **md**: `16px`
- **lg**: `24px`
- **xl**: `32px`
- **2xl**: `48px`
- **3xl**: `64px`
- **4xl**: `96px`

### Section Padding
- **Vertical**: `60px` (mobile), `80px` (tablet), `120px` (desktop)
- **Horizontal**: `20px` (mobile), `40px` (tablet), `60px` (desktop)

## Cards & Components

### Card Style
```css
.card {
  background-color: #FFFFFF;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  padding: 32px;
  margin-bottom: 24px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
}
```

### Feature Card (Gray Background)
```css
.feature-card {
  background-color: #F5F5F5;
  border-radius: 12px;
  padding: 40px 32px;
  text-align: center;
  height: 100%;
}
```

## Icons & Graphics

### Icon Style
- **Size**: `48px` for feature icons, `24px` for inline icons
- **Color**: `#D4941E` (primary), `#666666` (secondary)
- **Style**: Line icons, consistent stroke width

### Star Ratings
- **Active Star**: `#D4941E`
- **Inactive Star**: `#D3D3D3`
- **Size**: `20px`

## Text Styles

### Headings
```css
h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  color: #333333;
  margin-bottom: 16px;
  line-height: 1.2;
}

h1 { font-size: 48px; }
h2 { font-size: 36px; }
h3 { font-size: 24px; }
```

### Body Text
```css
p {
  font-size: 16px;
  line-height: 1.6;
  color: #666666;
  margin-bottom: 16px;
}

.lead-text {
  font-size: 18px;
  font-weight: 500;
  color: #333333;
}
```

## Form Elements

### Input Fields
```css
.form-input {
  width: 100%;
  padding: 12px 16px;
  border: 2px solid #D3D3D3;
  border-radius: 6px;
  font-size: 16px;
  background-color: #FFFFFF;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #D4941E;
  box-shadow: 0 0 0 3px rgba(212, 148, 30, 0.1);
}
```

## Backgrounds

### Section Backgrounds
- **White Section**: `#FFFFFF`
- **Light Gray Section**: `#F5F5F5`
- **Orange Section**: `#D4941E`
- **Dark Footer**: `#333333`

### Gradient Options
```css
.gradient-orange {
  background: linear-gradient(135deg, #E8A940 0%, #D4941E 100%);
}
```

## Responsive Breakpoints

```css
/* Mobile First Approach */
@media (min-width: 576px) { /* Small tablets */ }
@media (min-width: 768px) { /* Tablets */ }
@media (min-width: 992px) { /* Desktop */ }
@media (min-width: 1200px) { /* Large desktop */ }
```

## Animation & Transitions

### Standard Transitions
```css
.transition-standard {
  transition: all 0.3s ease;
}

.transition-fast {
  transition: all 0.2s ease;
}

.transition-slow {
  transition: all 0.5s ease;
}
```

### Hover Effects
- **Buttons**: Slight upward movement (`translateY(-2px)`) + shadow
- **Cards**: Upward movement (`translateY(-4px)`) + enhanced shadow
- **Links**: Color change to orange + underline

## Accessibility Guidelines

### Color Contrast
- Ensure minimum 4.5:1 contrast ratio for normal text
- Ensure minimum 3:1 contrast ratio for large text
- Use `#333333` for primary text on white backgrounds

### Focus States
- All interactive elements must have visible focus indicators
- Use orange outline (`#D4941E`) with 2px width for focus states

### Text Sizing
- Minimum 16px for body text
- Ensure text can scale up to 200% without horizontal scrolling

## Brand Voice in UI

### Tone
- Professional yet approachable
- Confident and trustworthy
- Action-oriented
- Clear and direct

### Common Phrases
- "Quick cash, no credit check"
- "Close deals with confidence"
- "We only win when you win"
- "Get Funded HERE"
- "Submit Funding Request"

## Implementation Notes

1. Use CSS custom properties (variables) for consistent color management
2. Implement a mobile-first responsive design approach
3. Ensure all interactive elements have proper hover and focus states
4. Use consistent spacing throughout the design
5. Maintain accessibility standards for all components
6. Test color combinations for sufficient contrast
7. Use the defined typography scale consistently across all pages