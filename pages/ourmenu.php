<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="author" content="Leon Strijker">
    <meta name="description" content="De gallery van 'Snelle Hap'">
    <link rel="stylesheet" type="text/css" href="../style.css">
    <link rel="icon" href="../images/snelleHapAlt.png">
    <script src="../js/naveffectmenu.js" defer ></script>
    <script>
        function loadScript() {
            var scriptElement = document.createElement('script');
            if (window.matchMedia("(min-width: 1280px)").matches) {
                scriptElement.src = "../js/ourmenu.js";
            } else if (window.matchMedia("(min-width: 769px)").matches) {
                scriptElement.src = "../js/ourmenuipad.js";
            } else {
                scriptElement.src = "../js/ourmenuphone.js";
            }   
            document.head.appendChild(scriptElement);
        }
        window.onload = loadScript;
    </script>
    <title>Snelle Hap - Our Menu</title>
</head>
<body>
    <section id="triangleGalleryLeft"></section>
    <?php require '../php/header.php'?>
    <main class="menumain all">
    <section class="menufixed">
        <article>
                
        </article>
        <section class="navgerechten">
                <p class="navMenu" id="Voorgerechten">Voorgerechten</p>

                <p class="navMenu" id="Hoofdgerechten">Hoofdgerechten</p>

                <p class="navMenu" id="Desserts">Desserts</p>

                <p class="navMenu" id="Specials">Specials</p>
        </section>
        <article>
            
        </article>
    </section>
        
        <section id="menuline"></section>
        <section class="menuFlex">
            
        </section>
        <section>
                <article id='backmenu'>
                    <button id='menuBack'><</button>
                </article>
                <article id='forwardmenu'>
                    <button id='menuForward'>></button>
                </article> 
            </section> 
    </main>
    <?php require '../php/footer.php'?>
</body>
</html>