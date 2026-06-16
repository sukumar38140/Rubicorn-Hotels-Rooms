# Bugs Found & Resolved — Rubicorn Hotels & Rooms

This document logs the security, usability, and design bugs discovered during the systematic QA audit and their corresponding resolutions.

---

### Bug 1: Invisible Option Selector Text (Contrast Mismatch)
* **Severity**: High
* **Location**: [app.js](file:///e:/Rubicorn%20Hotels%20&%20Rooms/app.js) (lines 984, 995, 1615)
* **Description**: Catalog filters (Capacity, Sort) and stay duration select dropdowns had invisible text/options.
* **Root Cause**: Hardcoded inline CSS rule `color:#fff;` was applied to `<select>` tags which had a light background (`var(--color-charcoal)` / `#FFFFFF`) due to the light theme migration, causing white-on-white text rendering.
* **Fix Applied**: Replaced inline `color:#fff;` with `color:var(--color-ivory);` (deep charcoal-maroon text color).
* **Verification Steps**: Booted dev server, went to catalog page `#/rooms` and booking wizard step 1 `#/booking/step-1`, checked dropdown select boxes. Options are now fully visible.

---

### Bug 2: Unreadable Button Text Contrast Issues
* **Severity**: High
* **Location**: [style.css](file:///e:/Rubicorn%20Hotels%20&%20Rooms/style.css) (lines 565, 1404, 1415, 1465, 2560, 2880, 3181)
* **Description**: Text in multiple primary action buttons (search submit, booking actions, modal primary actions, active pay tabs, active admin menu items) was dark on a dark background, or white on a light gold background.
* **Root Cause**: Shifting variables to a light theme globally applied dark color values to text elements. Without explicit color overrides on button components, button text color defaulted to dark maroon-charcoal on dark burgundy backgrounds.
* **Fix Applied**: Explicitly set color to `#FAF7F2` (cream-white) on buttons with dark burgundy backgrounds, and set color to `#2D1D1D` (dark charcoal-maroon) for text hovering over light-gold buttons.
* **Verification Steps**: Smoke-tested pages and clicked booking actions. Button labels are completely clear and accessible.

---

### Bug 3: External Link Vulnerability (Tabnabbing)
* **Severity**: Medium
* **Location**: [index.html](file:///e:/Rubicorn%20Hotels%20&%20Rooms/index.html) (lines 88-90)
* **Description**: Social links opening in a new tab (`target="_blank"`) lacked referer controls.
* **Root Cause**: Omitted `rel="noopener noreferrer"` attribute on external links.
* **Fix Applied**: Added `rel="noopener noreferrer"` to Instagram, Facebook, and WhatsApp footer links.
* **Verification Steps**: Inspected generated DOM structure in the browser.
