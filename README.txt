BUTTERFLY EFFECTS PORTFOLIO
===========================

This version is separated into clear files so it is easier to edit.

FILES
-----

index.html
- Controls the actual content of the website.
- Text, headings, services, project cards and contact details live here.
- Each major section is clearly labelled with comments.

styles.css
- Controls colours, spacing, fonts, cards, layout and mobile design.
- The file is split into numbered sections matching the HTML.

script.js
- Controls interactive behaviour.
- At the moment it automatically updates the copyright year.
- Future animations or features can be added here.

assets/butterfly-effects-logo.png
- Your current Butterfly Effects logo.


GITHUB PAGES
------------

Upload all four items to your GitHub repository while keeping this structure:

index.html
styles.css
script.js
assets/
    butterfly-effects-logo.png

Do not move the logo out of the assets folder unless you also update the image path in index.html.


QUICK EDIT GUIDE
----------------

Change homepage text:
index.html → HERO / INTRO SECTION

Change services:
index.html → SERVICES SECTION

Change portfolio projects:
index.html → PORTFOLIO / PROJECTS SECTION

Change about text:
index.html → ABOUT SECTION

Change email / social links:
index.html → CONTACT SECTION

Change colours:
styles.css → BRAND COLOURS + GLOBAL SETTINGS

Main brand colours are at the top of styles.css:
--pink
--purple

Change mobile layout:
styles.css → RESPONSIVE / MOBILE
