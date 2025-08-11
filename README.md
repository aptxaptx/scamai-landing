## Getting Started

First, run the development server:

```bash
npm install
```

```bash
npm run dev
```
## Before deploy
```bash
npm run lint
```


## TODO

Owners legend: Dennis (Landing + Business), Alex (Research), Logan (Individuals), Peter (Mobile Menu), Albert (Company + Stories)

| Area | Task | Status | Owner | Notes |
|------|------|--------|-------|-------|
| Landing – Hero | Finalize copy and subheading | TODO | Dennis | Align with “AI misuse detection” positioning |
| Landing – Cards | Add 6 cards (GenAI, Deepfake, Voice‑cloning, Link/QR, ScamDB, Why Us) | DONE | Dennis | Backgrounds wired; full‑card links enabled |
| Landing – Why Us | Expand into bullets (Accuracy, Speed, Reliability) | TODO | Dennis | Links to /demo for now |
| Research – Submenu | Show full secondary menu on all research pages | DONE | Alex | Auto‑render based on `researchLinks` |
| Research – Pages | Replace with minimal placeholders | DONE | Alex | “Coming soon” pages created |
| Research – Publication | Route and CTA | DONE | Alex | CTA points to /demo |
| Research – Datasets | Route | DONE | Alex | Placeholder page created |
| Business – Sidebar | Grammar fixes and links | DONE | Dennis | “Business Use Cases”, “API Documentation” new tab |
| Business – Demo CTAs | Ensure all CTAs go to /demo first | DONE | Dennis | Removed direct Cal.com links |
| API Platform | Update hero copy to include all detectors | TODO | Dennis | Also update examples if needed |
| Footer | Sync names with menus (GenAI Images/Videos, etc.) | DONE | Dennis | Links updated |
| Mobile Menu | OpenAI‑style behavior without affecting desktop | DONE | Peter | Separate mobile panel |
| Background | Ensure pure black sitewide | DONE | Dennis | globals.css uses #000 |
| Company – Submenu | Add About Us, People, Partnership, Investors | DONE | Albert | Placeholder routes pending |
| Stories – Submenu | Add “Scam Trends” | DONE | Albert | Placeholder route |
| Docs Links | Ensure documentation opens in new tab | DONE | Dennis | Sidebar and footer handled |
| Individuals – Pages | Polish content and flows | TODO | Logan | Focus mobile and plugin pages |

Tip: search for TODO/DONE in this table during PR reviews.