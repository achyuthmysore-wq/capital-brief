# The Capital Brief

A student-run finance and business publication built with Next.js 14, Tailwind CSS, and MDX.

---

## Quick Start (Local Development)

```bash
npm install
npm run dev
# Open http://localhost:3000
```

---

## Deploying to Vercel (Free — 5 Minutes)

### Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/capital-brief.git
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to vercel.com and sign in with GitHub
2. Click Add New Project and import your repo
3. Leave all settings as default — Vercel auto-detects Next.js
4. Click Deploy

Your site will be live at https://capital-brief.vercel.app in ~60 seconds.

### Step 3: Custom Domain (Optional)

Buy a domain (~$12/yr on Namecheap), then in Vercel dashboard go to Settings > Domains and follow the instructions.

---

## Writing Articles

Create a .md file in /content/articles/:

```markdown
---
title: "Your Article Title"
excerpt: "1-2 sentence summary for cards and SEO."
date: "April 5, 2026"
author: "Your Name"
category: "Business"
---

This is the body of your article.