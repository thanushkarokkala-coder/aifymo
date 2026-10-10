# Kakinada Internship Finder

A frontend-only HTML, CSS and JavaScript directory for discovering internships, training programmes and local company leads around Kakinada.

## Files
- `index.html` — page structure
- `styles.css` — responsive design
- `app.js` — sample directory data, search/filtering, student profile, saved listings and admin demo

## Run locally
1. Download and extract the ZIP.
2. Open the `kakinada-internship-finder` folder.
3. Double-click `index.html` to open it in Chrome, Edge or Firefox.

Recommended for development: install the **Live Server** extension in VS Code, open the project folder, right-click `index.html`, then select **Open with Live Server**.

No npm install, backend, API key or build step is required. An internet connection is used for the Google Fonts stylesheet and external source/map links; the core page runs locally.

## Demo features
- Search by role, company, category, skill and address
- Filter by category, work mode and stipend status
- Save and unsave listings
- Student profile stored in this browser
- Admin panel to add, edit, delete and export listings as JSON
- Google Maps search links and external source/application links
- Responsive desktop and mobile layout

### Admin demo login
- Username: `admin`
- Password: `kakinada123`

This is intentionally a classroom/demo login only. The username and password are visible in `app.js`; it is not secure authentication.

## Frontend-only limitations
All changes are saved to the current browser's `localStorage`:
- Admin changes are visible only in the same browser/device.
- Student profile and saved items do not sync between devices.
- Clearing browser storage may delete your data.
- The application does not scrape companies or automatically discover live openings.
- The admin panel is not protected against someone editing the JavaScript or browser storage.
- Do not collect sensitive personal information in this demo.

To make a production version, add a backend/database, real authentication, server-side admin authorization, moderation, data backups and a process for employers to confirm vacancies.

## Listing and source policy
The sample data is a starter directory, not a claim that every organisation currently has an open internship. Programme pages such as Krify's web technologies and job-oriented internship pages are linked as sources. STPI and VIKASA are included as local ecosystem/placement contacts. Other companies and hospitals are marked as **leads — vacancy unconfirmed**. Check every current vacancy, stipend, eligibility, contact detail and fee directly before applying.

### Starting source links
- Krify Web Technologies: https://krify.org/web-technologies.php
- Krify Job Oriented Internship Programme: https://krify.org/job-oriented-program.php
- Krify Foundation registration info: https://www.krify.org/info.php?interest=7
- STPI Kakinada: https://hyderabad.stpi.in/en/kakinada
- VIKASA, Kakinada District: https://kakinada.ap.gov.in/departments/vikasa/

## Reset demo data
If you want to reset all demo records, open DevTools → Console on the page and run:

```js
localStorage.removeItem("kif_listings_v1");
localStorage.removeItem("kif_saved_v1");
localStorage.removeItem("kif_student_v1");
localStorage.removeItem("kif_admin_v1");
location.reload();
```

Use only on your own demo copy. This clears data for this site in the current browser.
