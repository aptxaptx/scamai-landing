Audit the application for performance issues — bundle size, rendering, data fetching, and Core Web Vitals optimization.

## Process

### 1. Build Analysis
- Run `npm run build` and analyze the output
- Check page sizes and first-load JS for each route
- Identify pages exceeding 100kB first-load JS
- Look for large dependencies that could be code-split

### 2. Component Rendering
- Identify unnecessary `"use client"` directives (should be server components)
- Check for components that re-render excessively
- Look for missing `React.memo`, `useMemo`, or `useCallback` where needed
- Verify proper use of Suspense boundaries
- Check for blocking data fetches in server components

### 3. Image & Asset Optimization
- Verify all images use `next/image` with proper width/height
- Check for unoptimized images (raw img tags)
- Verify lazy loading on below-the-fold images
- Check for large SVGs that could be optimized
- Verify fonts use `next/font` for optimization

### 4. Data Fetching
- Check for waterfall data fetches (sequential when parallel is possible)
- Verify proper use of Next.js caching (revalidate, cache options)
- Check for over-fetching from the database
- Verify API routes return minimal data needed

### 5. CSS & Tailwind
- Check for unused CSS classes
- Verify Tailwind purge is working (no bloated CSS bundle)
- Look for redundant or conflicting styles

### 6. Third-Party Scripts
- Check for render-blocking third-party scripts
- Verify analytics/tracking scripts use `next/script` with appropriate strategy
- Check for unnecessary external dependencies

## Output
Provide a performance report:
- **Build stats**: Page sizes, total JS bundle
- **Issues**: Ranked by impact (High/Medium/Low)
- **Recommendations**: Specific optimizations with estimated impact
- **Quick wins**: Easy changes with significant improvement
