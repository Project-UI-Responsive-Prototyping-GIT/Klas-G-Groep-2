<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Footer</title>
</head>
<body>
<section class="triangleRight"></section>
    <footer id="footerFlex">
        <section class="socialsFlex">
            <?php 
                $socials = ["../images/twitter.png", "../images/instagram.png"];
                foreach ($socials as $imgPath) {
                    echo '<img class="socialImg" src="'.$imgPath.'">';
                };
            ?> 
        </section>
        <section class='footerInfo'>
            <h1>OPENINGSTIJDEN</h1>
            <p>
                Maandag - Vrijdag 11:00 - 22:00<br>
                Zaterdag - Zondag 10:00 - 23:00
            </p>
        </section>
        <section class='footerInfo'>
            <h1>CONTACT</h1>
            <p>
                📧contact@snellehap.nl<br>
                ☎️06 40192939
            </p>
        </section>
    </footer>
</body>
</html>
