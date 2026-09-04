/* ==========================================================
   BUTTERFLY EFFECTS
   MAIN JAVASCRIPT FILE
   ========================================================== */


/* ==========================================================
   MOBILE NAVIGATION
   ========================================================== */

const menuButton =
    document.getElementById("menuButton");

const mainNavigation =
    document.getElementById("mainNavigation");


if (menuButton && mainNavigation) {

    menuButton.addEventListener(
        "click",
        function () {

            mainNavigation.classList.toggle(
                "active"
            );

        }
    );

}


/* ==========================================================
   CLOSE MOBILE MENU AFTER CLICKING A LINK
   ========================================================== */

const navigationLinks =
    document.querySelectorAll(
        ".main-navigation a"
    );


navigationLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                if (mainNavigation) {

                    mainNavigation.classList.remove(
                        "active"
                    );

                }

            }
        );

    }
);