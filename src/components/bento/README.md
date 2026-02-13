# Bento Cards Components

This folder contains 30 beautifully animated Bento card components imported from the Bento Cards v2_AI template.

## 📦 Components List

- **Bento31-Bento60**: 30 unique animated card designs
- **Bento**: Base Bento component
- **Image**: Optimized image component

## 🎨 Usage

### Import Individual Components

```tsx
import { Bento31, Bento32, Bento33 } from '@/components/bento';

function MyPage() {
  return (
    <div>
      <Bento31 />
      <Bento32 />
      <Bento33 />
    </div>
  );
}
```

### Import All Components

```tsx
import * as BentoCards from '@/components/bento';

function ShowcasePage() {
  return (
    <div>
      <BentoCards.Bento31 />
      <BentoCards.Bento32 />
      {/* ... */}
    </div>
  );
}
```

## 🎯 Component Features

- **Animated**: Each card includes smooth animations and transitions
- **Responsive**: Adapts to different screen sizes
- **Customizable**: SASS modules for easy styling
- **Optimized**: Uses Next.js Image component for performance

## 📁 File Structure

```
bento/
├── Bento31/
│   ├── index.tsx                  # Component logic
│   └── Bento31.module.sass       # Component styles
├── Bento32/
│   ├── index.tsx
│   └── Bento32.module.sass
├── ...
├── Image/
│   └── index.tsx                  # Shared Image component
├── index.ts                       # Barrel exports
└── README.md                      # This file
```

## 🖼️ Assets

All card images are located in:
```
/public/bento-images/
```

Images follow the naming convention:
- `bento-{number}-{element}.svg`

## 🎨 Styling

Each component uses SASS modules for styling:
- Scoped styles prevent conflicts
- Easy to customize via SASS variables
- Global styles in `/src/styles/bento/`

### Global Styles

Located in `/src/styles/bento/`:
- `app.sass` - Main application styles
- `bento-variables.sass` - SASS variables
- `common.sass` - Common utilities

## 🚀 Live Demo

Visit `/bento-showcase` to see all 30 cards in action!

## 📝 Dependencies

Required packages (already installed):
- `classnames` - For conditional class names
- `sass` - For SASS stylesheet compilation

## 💡 Tips

1. **Customize Colors**: Edit SASS variables in `bento-variables.sass`
2. **Animation Speed**: Modify transition durations in individual `.module.sass` files
3. **Layout**: Use CSS Grid or Flexbox to arrange multiple cards
4. **Performance**: Cards are optimized but consider lazy loading for many cards

## 🔧 Customization Example

```tsx
import { Bento31 } from '@/components/bento';

function CustomCard() {
  return (
    <div className="custom-wrapper">
      <Bento31 />
      <style jsx>{`
        .custom-wrapper {
          max-width: 400px;
          margin: 0 auto;
        }
      `}</style>
    </div>
  );
}
```

## 📚 Resources

- Original Template: Bento Cards v2_AI
- Component Count: 30 unique cards
- Total Assets: 80+ SVG images
- Style Files: SASS modules per component

## 🎉 Ready to Use!

All components are ready to use in your Next.js application. Simply import and start building beautiful interfaces!
