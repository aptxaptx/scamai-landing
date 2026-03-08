Audit the application for accessibility compliance (WCAG 2.1 AA) and inclusive design.

## Process

### 1. Semantic HTML
- Verify proper heading hierarchy (h1 → h2 → h3, no skips)
- Check for landmark elements (header, main, nav, footer, aside)
- Verify lists use proper ul/ol/li structure
- Check that tables have proper headers and captions
- Verify forms use label elements linked to inputs

### 2. Keyboard Navigation
- Check all interactive elements are focusable (buttons, links, inputs)
- Verify focus order is logical (tabindex usage)
- Check for keyboard traps (modals, dropdowns)
- Verify focus indicators are visible
- Check skip navigation links exist

### 3. ARIA
- Verify ARIA roles are used correctly
- Check for proper aria-label on icon-only buttons
- Verify aria-expanded on collapsible sections (admin editor)
- Check aria-live regions for dynamic content
- Verify dialog/modal accessibility (Dialog component)

### 4. Visual
- Check color contrast ratios (especially in dark theme)
- Verify text is readable at 200% zoom
- Check that information isn't conveyed by color alone
- Verify responsive design doesn't break at various viewports
- Check for proper focus styles (not just outline: none)

### 5. Content
- Verify all images have meaningful alt text
- Check that link text is descriptive (not "click here")
- Verify error messages are associated with form fields
- Check that page titles are descriptive and unique
- Verify language attribute is set on html element (i18n)

### 6. Component-Specific
- **Newsletter editor**: Check form controls are labeled
- **Admin dashboard**: Verify table is accessible (headers, scope)
- **Navigation**: Check mobile menu accessibility
- **Collapsible sections**: Verify expand/collapse is announced

## Output
Provide an accessibility report:
- **Violations**: WCAG criteria failed with severity
- **Warnings**: Potential issues needing manual verification
- **Passes**: Areas that meet standards
- Include file:line references and fix examples
