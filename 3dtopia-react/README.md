# 3DTopia Studio — React (Vite) version

The 6-page site rebuilt as a proper React app: Vite + React Router + Tailwind CSS (compiled at build time, no CDN), now with:
- **Working backend**: Contact and Custom Order forms actually send an email via Vercel Serverless Functions.
- **A real product catalog**: more variety, working category filters, prices in **IDR**.
- **A product-photo system**: drop real photos into `public/images/products/` and they replace the placeholder illustrations automatically — no code changes needed.

## Pages / Routes
- `/` — Home
- `/about` — About Us / company profile
- `/bookmarks` — Bookmark catalog (working filters: All / Animals / Nature / Customizable)
- `/keychains` — Keychain catalog (working filters: All / Fandom / Food & Drink / Animals / Custom Initials)
- `/custom` — Custom order info + request form → emails you via `/api/custom-order`
- `/contact` — WhatsApp / Instagram / email + contact form → emails you via `/api/contact`

## Structure
```
api/
  contact.js            Vercel Serverless Function — POST /api/contact
  custom-order.js        Vercel Serverless Function — POST /api/custom-order
public/images/products/  drop real product photos here (see the README inside)
src/
  data/products.js        product catalog — names, prices (IDR), categories, image paths
  components/
    NavBar.jsx, Footer.jsx, Reveal.jsx, HeartToggle.jsx, FilterPills.jsx
    ProductCard.jsx        catalog card (image/placeholder, price, add-to-cart or "Custom")
    ProductVisual.jsx       shows a real photo if present, else an illustrated placeholder
    ProductIcons.jsx        the illustrated placeholder icon set
  hooks/
    useApiSubmit.js         posts a form to an /api endpoint, tracks sending/sent/error
  pages/
    Home.jsx, About.jsx, Bookmarks.jsx, Keychains.jsx, Custom.jsx, Contact.jsx
  App.jsx, main.jsx, index.css
tailwind.config.js          Pastel Artisan design tokens from DESIGN.md
```

## 1. Set up the backend (email notifications)

The forms POST to `/api/contact` and `/api/custom-order`, which use [Resend](https://resend.com)'s REST API to send you an email. Resend has a generous free tier and needs no npm package (the functions call it with plain `fetch`).

1. Create a free account at resend.com and grab an API key.
2. Copy `.env.example` to `.env.local` (for local testing) and fill in:
   ```
   RESEND_API_KEY=your_key_here
   CONTACT_TO_EMAIL=your@email.com
   ORDER_TO_EMAIL=your@email.com
   ```
3. In production, add the same variables under Vercel → your project → **Settings → Environment Variables**.
4. Optional but recommended: verify your own domain in Resend, then set `RESEND_FROM_EMAIL` to an address on that domain (e.g. `orders@3dtopia.studio`). Until then, the shared `onboarding@resend.dev` sandbox sender works fine for testing.

**If you skip this setup**, the forms still work from the visitor's point of view (they'll see "Sent!"), but submissions are only logged to your Vercel Function Logs instead of emailed — nothing breaks, you just won't get notified until you add the API key.

Both functions include a hidden honeypot field (`company`) as basic spam protection, and validate that name/email/message are present before sending.

## 2. Add real product photos

Right now every product shows a soft illustrated placeholder (a simple line-art icon in a pastel tile) instead of a stock photo — since these are meant to be *your* actual printed products, and there wasn't a real photo to use.

To swap in real photos:
1. Print a piece and photograph it (square or 4:5, good even lighting — see `DESIGN.md` for the visual style).
2. Save it into `public/images/products/` using the exact filename listed in that folder's `README.md` (matches `src/data/products.js`).
3. Refresh — that's it. If a file is missing, the illustration keeps showing automatically (no broken-image icons).

To add a brand-new product, add an entry to the appropriate array in `src/data/products.js` (see the existing ones as a template) and it will appear in the catalog and be filterable by its `category`.

## 3. Currency

All prices are in **IDR**, formatted with `formatIDR()` in `src/data/products.js` (e.g. `Rp45.000`). Change a price by editing the `price` field (a plain number, e.g. `35000`) on any product.

## Run locally

```bash
npm install
npm run dev        # frontend only — http://localhost:5173 (forms will error, no /api routes)
```

To test the forms locally too, use the Vercel CLI instead, which runs both the frontend and the `/api` functions together:
```bash
npm i -g vercel
vercel dev          # usually http://localhost:3000
```

```bash
npm run build       # production build to /dist
npm run preview     # preview the production build locally (frontend only)
```

## Deploy to Vercel

**Dashboard (recommended):**
1. Push this folder to a GitHub repo.
2. vercel.com → **Add New → Project** → import the repo.
3. Vercel auto-detects Vite (Build Command `npm run build`, Output Directory `dist`) and auto-detects the `/api` folder as Serverless Functions — no config needed.
4. Add the environment variables from step 1 above under **Settings → Environment Variables**.
5. Deploy.

**CLI, no git needed:**
```bash
npm i -g vercel
cd 3dtopia-react
vercel
vercel --prod
```

`vercel.json` includes a rewrite so refreshing or directly visiting a route like `/bookmarks` still works (client-side routing).

## Notes
- Motion respects `prefers-reduced-motion`.
- Filter pills on Bookmarks/Keychains now actually filter the grid (not just visual state).
- Wishlist hearts, pagination, and "Add to cart" buttons are still front-end-only — happy to wire up a real cart/checkout (e.g. via Stripe or a local payment gateway) as a next step once you're ready.
