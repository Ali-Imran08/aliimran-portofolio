# Visual Direction — Personal Portfolio

## 1. Aesthetic & Mood
- **Style:** Dark Editorial Minimalist (Ono Era Palette) + Fullscreen Centered Canvas Hero (Steve Ammann Structure) + Large Visual Card Showcase (Unseen Studio Layout) + Bento Grid Stack (Bento.me Structure).
- **Kesan Utama:** High-contrast, presisi, terstruktur, tenang, dan fokus pada konten serta karya nyata.

## 2. Color Palette (Ono Era Palette)
- **Primary Background:** `#0A0A0A` (Obsidian Gelap / Dark Charcoal)
- **Secondary Background (Card/Bento Grid):** `#141414` / `#1A1A1A` dengan border tipis `rgba(255, 255, 255, 0.08)`
- **Primary Text:** `#F4F4F0` (Off-White / Warm Gray)
- **Secondary / Muted Text:** `#8E8E93` / `#A1A1AA`
- **Accent Color:** `#10B981` (Emerald Green) untuk status indicator "Available for work"

## 3. Typography
- **Heading Font:** Serif ekspresif berkarakter kuat (contoh: *Instrument Serif* atau *Playfair Display*)
- **Body & Metadata Font:** Sans-serif / Monospace bersih (contoh: *Inter* atau *JetBrains Mono*)

## 4. Hero Section Layout & Photo Spec
- **Page Background:** Warna obsidian murni (`#0A0A0A`) yang polos, bersih, dan rapi ala Ono Era.
- **Hero Center Photo (Kanan-Tengah):**
  - Foto profil asli biasa (`assets/photo-profile/hero-profile.jpg`) dipasang di dalam **bingkai media (frame container)** berukuran portrait (rasio 4:5 / 16:9).
  - Bingkai diletakkan di posisi **kanan-tengah** layar sebagai *focal point* visual utama.
  - Diberi border tipis 1px (`rgba(255, 255, 255, 0.1)`) dan *rounded corners* halus.
- **Layout & Typo (Steve Ammann Structure):**
  - Layout *fullscreen* (100vh) dengan navigasi dan metadata tersebar di sudut-sudut layar.
  - Headline besar menggunakan font Serif tebal bertumpuk di area bawah/tengah layar.

## 5. Project Section Layout Spec (Unseen Studio Inspired)
- **Container:** Vertical grid / list dengan spacing besar antar proyek (`gap-16` / `gap-24`).
- **Project Card Structure:**
  - **Media Frame:** Container visual berukuran besar (16:9 atau 4:3 aspect ratio) dengan border tipis `rgba(255, 255, 255, 0.1)` dan `rounded-2xl`.
  - **Media Content:** Tangkapan layar proyek dengan efek `object-cover`.
  - **Metadata Bar (di bawah media):**
    - Kiri: Judul proyek (Serif bold / Sans-serif medium) + Ringkasan singkat Masalah & Solusi.
    - Kanan: Badges/tags tech stack minimalis (misal: `Laravel`, `Vue.js`, `Tailwind CSS`) dan link ke GitHub/Live Demo.

## 6. About & Stack Layout Spec (Bento.me Style)
- **Container:** Grid asimetris berkonsep *Bento Grid* berlatar `#141414` dengan border `rgba(255, 255, 255, 0.08)`.
- **Bento Card 1 (Main Bio):** Kartu berukuran lebih lebar berisi narasi filosofi koding dan latar belakang.
- **Bento Card 2 (Backend Stack):** Kartu khusus menampilkan keahlian backend (`PHP`, `Laravel`, `MySQL`, `REST API`).
- **Bento Card 3 (Frontend & Design):** Kartu khusus menampilkan keahlian frontend (`Vue.js`, `Tailwind CSS`, `JavaScript`).
- **Bento Card 4 (Environment & Workflow):** Kartu khusus menampilkan tools harian (`Pop!_OS`, `Neovim`, `VS Code`, `Git`).

## 7. Contact & Footer Layout Spec (Ono Era Style)
- **Top Area:** Big Serif Statement Headline ("Let's Build Together" / "Get In Touch").
- **Middle Area:** Interactive Email Link + Direct Copy Button.
- **Bottom Bar (Footer):**
  - Kiri: Copyright & Lokasi ("© 2026 Ali Imran — Makassar, ID").
  - Kanan: Tautan media sosial (GitHub, LinkedIn, Unduh CV) dengan efek hover underline halus.

## 8. Motion & Micro-interactions
- Smooth scroll, *hover zoom-in* mulus pada foto & kartu proyek (`scale-105`), subtle hover glow pada kartu Bento Grid, dan *fade-up scroll reveal*.