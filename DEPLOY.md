# Sahay Care — deploy guide

Total cost: domain only (~$8–12/yr). Hosting and form backend are free.

## 1. Get a free form key (5 min)
1. Go to https://web3forms.com and enter `info@sahaycare.in` (or your inbox) — no signup needed.
2. Copy the Access Key it emails you.
3. In `contact.html`, replace `YOUR_WEB3FORMS_ACCESS_KEY` with that key.

## 2. Push the site to GitHub
1. Create a free GitHub account if you don't have one: https://github.com
2. Create a new repository, e.g. `sahaycare-website`.
3. Upload these files (`index.html`, `services.html`, `pricing.html`, `contact.html`, `style.css`, `script.js`) to the repo — drag-and-drop works via "Add file → Upload files" on github.com, no command line needed.

## 3. Host for free on Cloudflare Pages
1. Go to https://pages.cloudflare.com and sign up (free).
2. "Create a project" → "Connect to Git" → pick the `sahaycare-website` repo.
3. Leave build settings blank (it's static HTML) and deploy.
4. You'll get a live URL like `sahaycare.pages.dev` immediately.

## 4. Buy the domain (~$8–12/yr)
1. Recommended: https://porkbun.com — flat pricing, no renewal price hikes, free WHOIS privacy. Namecheap is a fine alternative.
2. Search for `sahaycare.in` or `sahaycare.com` and register it.

## 5. Point the domain at Cloudflare Pages
1. In the Cloudflare Pages project → "Custom domains" → add `sahaycare.in` (or your chosen domain).
2. Cloudflare shows the DNS records to add. If you move DNS to Cloudflare (recommended, also free) this is one click; otherwise add the CNAME record it shows at your registrar.
3. SSL certificate is issued automatically — no extra cost.

## Ongoing cost
- Hosting: $0/mo (Cloudflare Pages free tier — unlimited bandwidth)
- Form handling: $0/mo (Web3Forms free tier — 250 submissions/month)
- Domain: ~$8–12/year, renewed yearly at the registrar

## Notes
- The Packages/pricing page uses placeholder tiers — the original Wix pricing was an image I couldn't read programmatically. Edit the numbers/features in `pricing.html` directly.
- To add real photos, drop image files into the repo and reference them in the HTML (e.g. `<img src="photos/team.jpg">`).
