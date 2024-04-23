<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Leon Strijker">
    <meta name="description" content="De gallery van 'Snelle Hap'">
    <link rel="stylesheet" type="text/css" href="../style.css">
    <link rel="icon" href="../images/snelleHapAlt.png">
    
    <title>Snelle Hap - Homepage</title>
</head>
<body>
    <section id="triangleGalleryLeft"></section> 
    <?php require '../php/header.php'?>
    <main class="aboutusmain all">
        <section class="aboutflex">
            <video id="aboutvid1" autoplay muted loop><source src="../videos/foodabout.mp4" type="video/mp4"></video>
            <article id="textabout1">
                <p class="fontSizeAbout">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur corrupti doloremque, voluptatum ea quisquam odio totam ipsam? Aperiam tenetur ad nam officia ipsam dolorem et, aliquam nesciunt error cum est.
                </p>
            </article>
            <article id="textabout2">
                <p class="fontSizeAbout">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur corrupti doloremque, voluptatum ea quisquam odio totam ipsam? Aperiam tenetur ad nam officia ipsam dolorem et, aliquam nesciunt error cum est.
                </p>
            </article>
        </section>
        
        <section id="articles" class="aboutflex2">
            <article class="textabout1">
                <p class="fontSizeAbout">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur corrupti doloremque, voluptatum ea quisquam odio totam ipsam? 
                </p>
            </article>
            <article  class="textabout1">
                <p class="fontSizeAbout">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur corrupti doloremque, voluptatum ea quisquam odio totam ipsam? Aperiam tenetur ad nam officia ipsam dolorem et, aliquam nesciunt error cum est.
                </p>
            </article>
            <article>
                <img src="../images/foodabout.png" id="aboutimg" alt="">
            </article>
        </section>
    </main>
    <?php require '../php/footer.php'?>
</body>
</html>