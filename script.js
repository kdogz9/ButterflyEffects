/* =========================================================
   BUTTERFLY EFFECTS - JAVASCRIPT

   At the moment the website only needs a small amount of
   JavaScript.

   Add future interactions here, such as:
   - animated project filters
   - scroll effects
   - mobile menu
   - lightbox image gallery
   - project popups
========================================================= */


/* Automatically updates the copyright year in the footer. */

const yearElement =
  document.getElementById("current-year");


yearElement.textContent =
  new Date().getFullYear();
