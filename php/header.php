<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="../js/headereffect.js" defer></script>
    <title>Header</title>
</head>
<body>
    <header>
        <section id="corners">
            <section class="headerFlex">
                <img id="snelleHapAlt" src="../images/snelleHapAlt.png">
                <section class="navigationFlex">
                    <article>
                        <a class="headerLink" href="../pages/home.php">Home</a>
                    </article>
                    <article>
                        <a class="headerLink" href="../pages/ourmenu.php">Our menu</a>
                    </article>
                    <article>
                        <a class="headerLink" href="../pages/aboutus.php">About us</a>
                    </article>
                    <article>
                        <a class="headerLink" class="dropdownMenu" href="../pages/gallery.php">Gallery</a>
                    </article>
                    <article class="dropdown">
                        <button class="dropbtn headerLink" onclick="Dropdown()">More</button>
                        <div class="dropdown-content" id="DropdownMenu">
                        <a href="../pages/vacatures.php">Vacatures</a>
                        <a href="../pages/dranken.php">Dranken</a>
                        <a href="../pages/reviews.php">Review</a>
                        <a href="../pages/arrangementen.php">Arrangementen</a>
                        </div>
                    </article>
                </section>
            </section>
        </section>
        <section class="Phoneheader">
            <img id="PhoneHeaderLogo" src="../images/snelleHapAlt.png">
            <img id="Hamburgurimg" src="../images/HamburgurImg.png">
            <section class="hamburger" id="blockPhoneHeader">
                <a class="headerLinkPhone" href="../pages/home.php">Home</a>
                <a class="headerLinkPhone" href="../pages/ourmenu.php">Our menu</a>
                <a class="headerLinkPhone" href="../pages/aboutus.php">About us</a>
                <a class="headerLinkPhone" href="../pages/gallery.php">Gallery</a>
                <a class="headerLinkPhone" href="../pages/vacatures.php">Vacatures</a>
                <a class="headerLinkPhone" href="../pages/dranken.php">Dranken</a>
                <a class="headerLinkPhone" href="../pages/reviews.php">Review</a>
                <a class="headerLinkPhone" href="../pages/arrangementen.php">Arrangementen</a>
            </section>
            <article id="reserverenBlok">
                <a class="headerLink" href="../pages/reserveren.php">Reserveren</a>
            </article>
    </header>
    </body>
</html>