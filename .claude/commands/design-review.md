Review the UI/UX design of the current page or component for quality, consistency, and best practices.

## Process

1. Identify which component(s) or page(s) to review (ask if unclear)
2. Read the component files and their styles
3. Check `src/app/globals.css` for design tokens and CSS variables
4. Review existing components in `src/components/ui/` for consistency

## Review Checklist

### Visual Consistency
- Consistent use of CSS variables (shadcn theme tokens)
- Proper dark theme implementation (dark: variants or CSS variables)
- Spacing consistency (Tailwind spacing scale)
- Typography hierarchy (font sizes, weights, line heights)
- Color usage matches the brand palette

### Component Quality
- Uses shadcn/ui primitives where appropriate (Button, Card, Input, Dialog, etc.)
- Responsive design (mobile-first, breakpoint usage)
- Hover/focus/active states on interactive elements
- Loading and empty states handled
- Error states shown clearly

### Layout & Structure
- Proper semantic HTML (header, main, nav, section, article)
- Logical content hierarchy
- Consistent padding/margin patterns
- Grid/flex usage is clean and maintainable

### UX Patterns
- Clear calls to action
- Intuitive navigation flow
- Form validation feedback
- Appropriate use of animations/transitions (not excessive)
- Accessible color contrast ratios

## Output

Provide a structured review with:
- **Score**: Rate each category (Good / Needs Improvement / Issue)
- **Issues**: Specific problems with file:line references
- **Suggestions**: Concrete improvements with code examples
- **Quick Wins**: Easy fixes that improve design quality immediately
