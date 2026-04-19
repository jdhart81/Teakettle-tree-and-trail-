# Teakettle Tree and Trail

Static website for **Teakettle Tree and Trail** — Columbia Falls, Montana.

Local genetic tree transplants, trail building, landscape design, and natural timber hardscape serving the Flathead Valley.

## Structure

```
/
├── index.html              # Main landing page
├── css/styles.css          # All styles
├── js/main.js              # UI interactions
├── assets/
│   ├── logo/               # Brand logos
│   ├── flyer/              # Print flyer (PDF)
│   └── images/
│       ├── hero/           # Header/hero images
│       ├── services/       # Service card photos
│       ├── species/        # Tree species photos
│       ├── trails/         # Trail building photos
│       ├── gallery/        # Project gallery photos
│       ├── hardscape/      # Hardscape/timber photos
│       └── about/          # Team/founder photos
```

## Adding Photos

Each `<img>` tag in `index.html` has a comment directly above it describing exactly what photo goes there and the recommended dimensions. Drop the file into the matching folder and update the `src` attribute.

All images fall back to `assets/images/placeholder.svg` until replaced.

## Contact

**Colten Crowley** — (406) 548-1422 — CrowleyHardscape@gmail.com
