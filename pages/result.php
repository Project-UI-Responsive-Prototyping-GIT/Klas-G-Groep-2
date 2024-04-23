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
        <main class="all result">
            <section class="resultbox"> 
                <img src="../images/standingresult1.png" alt="img" class="imagesresult imageresult1">
                <article id="flexresult">
                    <h1 class="resulthelp">Uw reservering</h1>
                    <?php
                    echo '<p class="resulthelp">Beste Meneer/Mevrouw ' . $_POST["Achternaam"] . ' Dank u wel voor uw boeking u zult zo spoedig mogelijk een mailtje ontvangen met de gegeven gegevens om de bestelling vast te leggen.</p>';        
                    ?>
                    <h2>Uw informate</h2>
                    <?php
                    echo '<h3>Voornaam:</h3><p class="resulthelp">'.$_POST["naam"] . '</p>';
                    echo '<h3>Tussenvoegsel:</h3><p class="resulthelp">'.$_POST["tussenvoegsel"] . '</p>';
                    echo '<h3>Achternaam:</h3><p class="resulthelp">'.$_POST["Achternaam"] . '</p>';        
                    echo '<h3>E-Mail:</h3><p class="resulthelp">'.$_POST["email"] . '</p>';        
                    echo '<h3>Nummer:</h3><p class="resulthelp">'.$_POST["nummer"] . '</p>';        
                    echo '<h3>Aantal personen:</h3><p class="resulthelp">'.$_POST["personen"] . '</p>';        
                    echo '<h3>Datum en tijd:</h3><p class="resulthelp">'.$_POST["datum"] . " Tijd:" . $_POST["tijd"] . '</p>';        

                    ?>
                    </article>
                <img src="../images/standingresult2.png" alt="img" class="imagesresult imageresult2 ">
            </section>
        </main>
    <?php require '../php/footer.php'?>
</body>
</html>