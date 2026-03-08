Audit internationalization (i18n) completeness and correctness across all locales.

## Process

### 1. Translation File Analysis
- Read all files in `src/messages/` to identify supported locales
- Compare keys across all locale files to find missing translations
- Check for untranslated strings (values identical to English)
- Verify JSON structure is valid and consistent

### 2. Code Usage Check
- Search for hardcoded user-facing strings in components (should use `useTranslations` or `getTranslations`)
- Verify `useTranslations` namespace matches message file structure
- Check for string concatenation that breaks translations
- Verify dynamic values use ICU message format ({variable})
- Check for pluralization handling where needed

### 3. Middleware & Routing
- Verify `src/middleware.ts` handles locale detection correctly
- Check that all public pages are under `[locale]` route segment
- Verify default locale fallback works
- Check locale switching mechanism

### 4. Content & Formatting
- Verify date/time formatting is locale-aware
- Check number formatting (currency, decimals)
- Verify text direction (LTR/RTL if applicable)
- Check that layouts handle varying text lengths

## Output
- **Missing Keys**: List by locale with key paths
- **Hardcoded Strings**: Strings that should be translated with file:line
- **Format Issues**: ICU message format problems
- **Coverage**: Percentage of translated keys per locale
