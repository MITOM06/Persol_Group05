# Persol — Multi-brand Eyewear Storefront

A front-end e-commerce site for premium eyewear, built as a React single-page app. It carries four
brand storefronts — **Persol, Ray-Ban, Gucci and Tom Ford** — each with its own navigation,
catalogue and search.

**Live demo:** https://persol-group05-eight.vercel.app

**Stack:** React 19 · React Router 7 · Bootstrap 5 · Swiper / Slick carousels · Create React App

> Educational project. Brand names and product images belong to their owners; this site is not
> affiliated with or endorsed by them.

---

## Features

- Four brand storefronts with their own header, logo and search
- Catalogues by category — sunglasses, eyeglasses, new arrivals, sale — with detail pages
- Product ratings, image carousels and a product **compare** view
- Cart, contact page, login / register screens and a sitemap
- Product data kept as local JSON in `src/data/` (no backend)

## Running locally

Node 18+:

```bash
npm install
npm start          # http://localhost:3000
npm run build      # production build in build/
```

## Repository layout

```
src/
├── pages/        Persol/, Rayban/, Gucci/, TomFord/, Orther/ (cart, compare, contact, auth)
├── components/   per-brand navbars and logos, cart, compare context, footer, sitemap
├── data/         product catalogues per brand
└── styles/
public/           product images
Documentations/   installation guide, user guide, project report, status reports
```

## Team

Built in 2025 as the semester I project at Aptech (batch T5.2410.E0, group 05), supervised by
Lê Thanh Nhân.

- **Trần Phúc Khang** ([@MITOM06](https://github.com/MITOM06))
- **Mai Thanh Đạt**
- **Nguyễn Kim Minh**
- **Nguyễn Anh Đức**
