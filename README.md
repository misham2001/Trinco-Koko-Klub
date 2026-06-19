# 🌴 Trinco Koko Klub — Premium Boutique Resort Website

A complete, production-ready, ultra-premium Next.js 14 hotel website for **Trinco Koko Klub** — an intimate luxury boutique beach resort located on the stunning shores of Trincomalee Bay, Sri Lanka.

Designed to emulate the high-end, visual-heavy design aesthetic of world-class brands like Amanresorts and Six Senses, this application features generous whitespace, gold hairline dividers, clean geometric call-to-actions, elegant custom serif typography, and premium micro-animations.

---

## ⚜️ Brand Design System

### Color Palette
- **Ocean Deep** (`#0B3D5E`) — Primary luxury dark navy representing the deep Sri Lankan seas.
- **Ocean Mid** (`#1A6B8A`) — Calm mid-blue accents for transitions and details.
- **Ocean Light** (`#E8F4F8`) — Pale blue highlights and soft content blocks.
- **Sand** (`#F2E8D9`) — Warm tropical sand/cream background highlights.
- **Gold** (`#C9A84C`) — Premium gold accent for dividers, buttons, active states, and borders.
- **Palm** (`#2D5016`) — Rich tropical green representing the resort's private gardens.
- **Off-white** (`#FAFAF8`) — Primary page background for a light, airy, and clean feel.
- **Charcoal** (`#1C1C1C`) — Near-black color for premium typographic readability.

### Typography
- **Display Headings**: *Cormorant Garamond* (Elegant, classic italic serif with tracking).
- **Body Text**: *Inter* (16px high-readability sans-serif, `line-height: 1.8`).
- **Labels & Eyebrows**: *Inter* uppercase tracking wide (`letter-spacing: 0.2em`, 11px).

---

## 🛠️ Tech Stack & Features

- **Framework**: Next.js 14 App Router (React 18) with TypeScript.
- **Styling**: Tailwind CSS (extending custom typography, color tokens, and custom keyframes).
- **Database**: PostgreSQL with Prisma ORM.
- **Forms & Validation**: React Hook Form + Zod resolvers.
- **Date Picking**: Custom-styled React Datepicker (supporting range validation, disable states, check-in offset checks).
- **Animations**: Framer Motion (staggered fade-up entrances, scroll reveals, lightbox scale-ins, page transitions).
- **Icons**: Lucide React + custom responsive SVGs for brand social networks.
- **SEO & Access**: Comprehensive layout metadata, accessibility landmarks, ARIA roles, and semantic HTML5 layout tags.

---

## 📂 Page Layout & Architecture

1. **Home Page (`/`)**
   - Full-bleed hero displaying Trincomalee coastal imagery with dynamic fade-up copy and check-out call-to-actions.
   - Glassmorphic, floating booking bar with integrated calendars and guest select.
   - Resort story segment with custom layout grids and key credentials.
   - Featured Rooms grid and curated Sri Lankan local experiences slider.
   - Pinterest-style asymmetric gallery teaser.
   - Serene customer review slider and localized Google Map route guides.

2. **Rooms Directory (`/rooms`)**
   - Interactive category tabs to filter between *All Sanctuaries*, *Suites*, *Deluxe Rooms*, and *Standard garden villas*.
   - Detail cards that support modal expansion for deep-dive room overviews, full summaries, lists of features, capacity rules, and pricing.

3. **Resort Gallery (`/gallery`)**
   - Category filtering (*Rooms*, *Pool & Beach*, *Dining*, *Nature*).
   - High-fidelity masonry column layout with hover zoom/slide transitions.
   - Full-screen Lightbox overlay with back/forward navigation keys, exit controls, dynamic index numbers, and description cards.

4. **Booking (`/booking`)**
   - Dual-column responsive checkout.
   - Left: dynamic room summary displaying specific amenities and pictures based on active selection.
   - Right: client-validated reservation details (check-in, check-out, full guest profiles, requests).
   - Dynamic Price Calculator totaling sub-rates and automated 10% VAT calculations.

5. **Confirmation Receipt (`/confirmation`)**
   - Interactive page displaying reference IDs, check-in guidelines, and guest parameters.
   - Features a clean print/download stylesheet and template.

---

## ⛓️ API Routing & Middleware

- `GET /api/rooms` — Fetches room inventories.
- `POST /api/bookings` — Validates reservation ranges and writes booking rows. Resolves check-in overlaps.
- `GET /api/bookings/[id]` — Retrieves receipt profiles.
- `GET /api/availability` — Endpoint to dynamically check conflicts (`?roomId=X&checkIn=Y&checkOut=Z`).

---

## 🚀 Getting Started & Local Installation

### Prerequisites
- Node.js (v18.x or later)
- PostgreSQL (optional, fallback data is used automatically if the database is offline)

### 1. Clone & Install Dependencies
```bash
git clone https://github.com/misham2001/Trinco-Koko-Klub.git
cd Trinco-Koko-Klub
npm install
```

### 2. Configure Environment Variables
Create a `.env` or `.env.local` file in the root directory:
```env
DATABASE_URL="postgresql://username:password@localhost:5432/trinco_koko_klub"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"
```

### 3. Initialize & Seed Database (Prisma)
Generate the client type-definitions, synchronize the tables, and seed the rooms:
```bash
npx prisma generate
npx prisma db push
npx prisma db seed
```
*Note: If a local database is not connected, the application will gracefully fall back to in-memory data, enabling you to test the checkout flow and receive mock booking references seamlessly.*

### 4. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to explore the Trinco Koko Klub experience.

---

## 🏛️ Code Structure
```
├── prisma/
│   ├── schema.prisma   # DB Schema definition
│   └── seed.ts         # Database seed script
├── src/
│   ├── app/
│   │   ├── api/        # REST endpoints (rooms, bookings, availability)
│   │   ├── booking/    # Reserve layout
│   │   ├── confirmation/# Success check-in receipts
│   │   ├── gallery/    # Photo showcase
│   │   ├── rooms/      # Sanctuaries list
│   │   ├── globals.css # Core styles & design tokens
│   │   ├── layout.tsx  # Layout wrapper & SEO metadata
│   │   └── page.tsx    # Home screen
│   ├── components/     # Custom React components (forms, filters, UI helpers)
│   └── lib/
│       ├── data.ts     # Static site mock data
│       └── prisma.ts   # Prisma Client singleton
├── tailwind.config.ts  # Visual layout overrides
└── package.json
```
