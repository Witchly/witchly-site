# Witchly.host Frontend 🔮

The official frontend for **Witchly.host**. A high-performance, visually stunning landing page built for modern game server hosting.

## ✨ Highlights

- **Modern UI/UX:** Built with Tailwind CSS and styled with a custom "Witchly Purple" palette.
- **Dynamic Components:** Shared `navbar.html` and `footer.html` components loaded via a lightweight custom JS injector to ensure consistency across all pages.
- **Optimized for Games:** Dedicated landing sections and pricing logic for Minecraft, Hytale, Rust, and Palworld.
- **SEO Ready:** Complete with OpenGraph tags, a dynamic sitemap, and semantic HTML5.
- **Responsive Design:** Fully fluid layout that scales from mobile devices to ultra-wide monitors.

## 🛠 Tech Stack

- **Framework:** Vanilla HTML5 / CSS3
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) (JIT CDN with custom configuration)
- **Icons:** [Font Awesome 6 Pro](https://fontawesome.com/)
- **Fonts:** Inter & JetBrains Mono (Google Fonts)
- **Logic:** Vanilla JavaScript (ES6+)

## 📂 Project Structure

```text
witchly-site/
├── components/     # Reusable HTML snippets (Navbar, Footer)
├── css/            # Custom style overrides and animations
├── help/           # Game-specific knowledge base pages
├── images/         # Optimized assets (WebP/PNG/JPG)
├── js/             # Main logic and dynamic pricing filters
├── legal/          # TOS, Privacy Policy, and Refund documents
└── *.html          # Main landing pages
```

## 🚀 Development & Deployment

### Local Preview
Since the site uses `fetch()` to load components, you need to run it through a local web server to avoid CORS issues:
```bash
# Example using Python
python3 -m http.server 8000
```
Then visit `http://localhost:8000`.

### Deployment
The site is optimized for static hosting providers like **Cloudflare Pages**, **Netlify**, or **Vercel**. 
- **Production URL:** [https://witchly.host](https://witchly.host)
- **Automation:** Deployments are triggered automatically upon pushing to the `main` branch.

## 🎨 Design Tokens
- **Primary Purple:** `#7c3aed` (Violet 600)
- **Deep Slate:** `#0f172a` (Slate 900)
- **Accent Green:** `#4ade80` (Green 400)

---
*Crafted with 💜 by Witchly.host Engineering*
