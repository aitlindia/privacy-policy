/**
 * AITL India — Privacy Policy registry
 * ------------------------------------
 * Add one entry per app. The policy page for an app lives at:
 *     policy.html?app=<slug>
 * e.g.  policy.html?app=sample-notes
 *
 * Fields:
 *   slug          - URL identifier (lowercase, hyphens only, must be unique)
 *   name          - App display name as it appears in the store
 *   platforms     - ["android"], ["ios"], or ["android", "ios"]
 *   effectiveDate - "YYYY-MM-DD" — date this policy took effect
 *   contactEmail  - support / privacy contact for the app
 *   collectsPersonalData - true if the app itself asks for personal info
 *                          (name, email, account sign-up, etc.)
 *   zeroData      - true for apps that collect NOTHING at all (no internet
 *                   permission, no SDKs). Renders a strict zero-collection
 *                   policy and ignores collectsPersonalData/services.
 *   services      - third-party SDKs the app uses; controls which
 *                   disclosure blocks appear. Known keys:
 *                   "admob", "firebaseAnalytics", "crashlytics",
 *                   "googlePlayServices", "appleAppServices"
 *   extraSections - optional array of { title, html } appended before
 *                   the "Changes to This Policy" section, for anything
 *                   app-specific (camera use, location, etc.)
 */
const DEVELOPER = {
  name: "AITL India",
  shortName: "aitlindia",
  contactEmail: "aitl.nurul@gmail.com",
};

const APPS = [
  {
    slug: "bubble-level",
    name: "Level — Simple Bubble Level",
    packageName: "com.aitlindia.bubblelevel",
    platforms: ["android"],
    effectiveDate: "2026-08-15",
    contactEmail: DEVELOPER.contactEmail,
    collectsPersonalData: false,
    zeroData: true,
    services: [],
    extraSections: [
      {
        title: "Calibration Data",
        html: "<p>When you calibrate the level (long-press to set a trusted surface as 0.0°), the calibration offset is saved <strong>only on your device</strong> so the app can remember it between launches. It is never transmitted anywhere — the app has no internet permission and is technically incapable of sending it. Uninstalling the app permanently deletes this data.</p>",
      },
      {
        title: "Sensors",
        html: "<p>The app reads your device's built-in tilt sensors (accelerometer) to display the bubble and degree readouts. Sensor readings are processed in real time on your device only and are never stored or transmitted.</p>",
      },
    ],
  },
];
