# AITL India — Privacy Policy Site

A zero-dependency static site that hosts privacy policies for all Android and
iOS apps published by **AITL India** (`aitlindia`). No build step, no server
code — just HTML, CSS, and a small data file.

## How it works

| File | Purpose |
| --- | --- |
| `apps.js` | The registry — one entry per app plus the developer contact info |
| `index.html` | Landing page listing every app policy |
| `policy.html` | Template that renders the full policy for `?app=<slug>` |
| `styles.css` | Shared styles (light + dark mode) |

Each app gets a stable URL you can paste into Google Play Console or
App Store Connect:

```
https://<your-domain>/policy.html?app=<slug>
```

## Adding a new app

Edit `apps.js` and append an entry to the `APPS` array:

```js
{
  slug: "my-new-app",                 // unique, lowercase, hyphens only
  name: "My New App",                 // store display name
  platforms: ["android", "ios"],      // "android", "ios", or both
  effectiveDate: "2026-08-15",        // YYYY-MM-DD
  contactEmail: DEVELOPER.contactEmail,
  collectsPersonalData: false,        // true if the app asks for name/email/etc.
  services: ["admob", "firebaseAnalytics", "crashlytics", "googlePlayServices"],
  extraSections: [],                  // optional app-specific { title, html } blocks
}
```

Supported `services` keys (each adds a disclosure block with a link to that
provider's privacy policy): `admob`, `firebaseAnalytics`, `crashlytics`,
`googlePlayServices`, `appleAppServices`. To support another SDK, add it to
`SERVICE_INFO` in `policy.html`.

For apps that collect **nothing at all** (no internet permission, no SDKs —
like Bubble Level), set `zeroData: true`. This renders a strict zero-collection
policy and ignores `collectsPersonalData` and `services`.

Use `extraSections` for anything unique to one app — camera or location use,
notifications, in-app purchases, and so on.

> The two `sample-*` entries are placeholders — replace them with your real
> apps before publishing.

## Previewing locally

```sh
cd privacy-policy
python3 -m http.server 8080
# then open http://localhost:8080
```

## Deploying (GitHub Pages)

1. Create a repo (e.g. `aitlindia/privacy-policy`) and push these files.
2. In the repo: **Settings → Pages → Deploy from a branch → main / root**.
3. Policies will be live at
   `https://aitlindia.github.io/privacy-policy/policy.html?app=<slug>`.

Any static host works the same way (Netlify, Cloudflare Pages, Firebase
Hosting) — upload the folder as-is.
