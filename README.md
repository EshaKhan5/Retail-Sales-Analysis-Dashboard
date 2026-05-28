# Retail Sales Analysis Dashboard

Modern enterprise-style BI dashboard for a Data Analyst / Data Science portfolio. The app uses a Vite React architecture, Tailwind CSS design system, Framer Motion animations, Recharts visualizations, and a deterministic mock REST API that generates 5,200 realistic retail transactions.

## Features

- Executive KPI cards for revenue, orders, profit, AOV, retention, and growth
- Interactive revenue, category, product, regional, customer, and payment charts
- Collapsible sidebar, sticky frosted navbar, dark/light theme toggle
- Date range, category, region, and debounced search filters
- Simulated async API loading, skeleton states, empty states, and error handling
- AI insights assistant with confidence indicators
- Sortable and paginated transactions table
- CSV/Excel export and print-to-PDF export
- SQL query showcase with copy buttons
- Python Pandas workflow section
- Power BI summary and portfolio presentation sections
- Responsive layout ready for Vercel or Netlify

## Tech Stack

- React.js with Vite
- Tailwind CSS
- Framer Motion
- Lucide React icons
- Recharts
- Mock JSON-style data and fake REST API

## Installation

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://127.0.0.1:5173`.

## Production Build

```bash
npm run build
npm run preview
```

The production output is generated in `dist/`.

## Folder Structure

```text
src/
  components/
    charts/
    layout/
    ui/
  data/
  hooks/
  pages/
  styles/
  utils/
```

## Mock Data

The app generates 5,200 deterministic records in `src/data/generateSalesData.js`. Records include order IDs, products, categories, customer details, regions, revenue, profit, discounts, payment methods, order status, dates, and returning-customer indicators.

## Deployment

### Vercel

1. Push the project to GitHub.
2. Import the repository in Vercel.
3. Use the default Vite build settings:
   - Build command: `npm run build`
   - Output directory: `dist`

### Netlify

1. Push the project to GitHub.
2. Create a new Netlify site from the repository.
3. Use:
   - Build command: `npm run build`
   - Publish directory: `dist`

## Screenshots

Add deployed dashboard screenshots here:

- Executive overview
- Sales analytics
- Customer insights
- Product performance

## Future Improvements

- Add authentication and role-based workspace access
- Connect to a real warehouse API or Supabase backend
- Add downloadable Excel workbooks with formatted sheets
- Add anomaly detection and forecast models
- Add map-based regional drill-downs
