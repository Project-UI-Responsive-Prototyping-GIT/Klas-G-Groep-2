<!DOCTYPE html>
<html lang="en">
<head> 
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Damian Elzing">
    <meta name="description" content="De homepage van 'Snelle Hap'">
    <link rel="stylesheet" type="text/css" href="../style.css">
    <script src="../js/slideshow.js" defer></script>
    <link rel="icon" href="../images/snelleHapAlt.png">
    
    <title>Snelle Hap - Homepage</title>
</head>
<body>
    <?php require '../php/header.php' ?>
    <main class="all">
        <img id="snelleHapLogo" src="../images/snelleHap.png">
        <video class="bgVideo" width="100%" height="auto" autoplay muted>
        <source src="../videos/video (2160p).mp4" type="video/mp4">
        </video>
        <section class="triangleRight"></section>
        <section class="homeTextFlex1">
            <h1>WIJ ZIJN SNELLE HAP</h1>
            <section class="homeTextFlex2">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur maiores, dolor reprehenderit sed eum accusamus voluptas soluta quasi culpa totam quae quaerat architecto, fugit repellendus aperiam. Laudantium eaque ducimus est.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora dignissimos libero voluptatem repudiandae dolores, adipisci nesciunt, nemo quam reiciendis alias velit, autem voluptatibus facere amet asperiores soluta nisi obcaecati iste.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam blanditiis explicabo enim pariatur quisquam nisi doloribus error beatae numquam voluptates, reprehenderit nam aliquid veritatis debitis aperiam odit ratione, dolor modi?</p>
            </section>
        </section>
        <section class="triangleLeft"></section>
        <article class="slideShowFlex">
            <h1 id='slideHomepageH1'>HOOFDGERECHTEN:</h1>
            <section class="backgroundSlideShow">
                <?php 
                    $slideShowImgs = ['../images/biefstuk.png', '../images/burger.png', '../images/wrap.png', '../images/pasta.png', '../images/vegaMaaltijd.png', '../images/zalmfilet.png'];
                    foreach ($slideShowImgs as $imgPath) {
                        echo '
                        <section class="slideHomepage">
                            <img src="'.$imgPath.'">
                        </section>
                        ';
                    }
                ?>
                <section>
                    <article id='backArticle'>
                        <button id='Back'><</button>
                    </article>
                    <article id='forwardArticle'>
                        <button id='Forward'>></button>
                    </article> 
                </section> 
            </section>
        </article>
    </main>
    <?php 
        require '../php/footer.php'
    ?>
</body>
</html>