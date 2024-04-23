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
    <section id="triangleGalleryLeft TraingleReserveren"></section> 
    <?php require '../php/header.php'?>
    <main class="all" id="allreserveren">
    <img src="../images/Headerreserveren.png" alt="Drankjes" width="100%">
        <section class="flexreserveren">
            <article class="flex">
                <h1>Reserveren</h1>
                <p>U kunt op de dag zelf tot 16:00 uur online een reservering maken. Na dat tijdstip kunt u ons natuurlijk altijd telefonisch bereiken via het telefoonnummer️06 40192939.</p>
                <img src="../images/Reserverenmainimg.png" alt="img">
                <article>
                    <h3>Privacyverklaring voor restaurantreserveringen</h3>
                    <p>Wij respecteren uw privacy en beschermen uw persoonlijke gegevens tijdens het gebruik van onze reserveringsservice. Hier is een beknopte samenvatting van ons privacybeleid:
                    Verzamelde informatie: We verzamelen persoonlijke gegevens zoals naam, telefoonnummer, e-mailadres en reserveringsvoorkeuren, evenals betaalinformatie indien nodig. We kunnen ook technische informatie verzamelen, zoals IP-adressen en browsertype.
                    Gebruik van informatie: Uw gegevens worden gebruikt om reserveringen te verwerken, contact met u op te nemen indien nodig, en betalingen te verwerken. Technische informatie wordt gebruikt voor servicebeheer en analyses.
                    Delen van informatie: We delen uw gegevens alleen met vertrouwde derden voor reserveringsdoeleinden of indien wettelijk vereist.
                    Gegevensbeveiliging: We nemen maatregelen om uw informatie te beschermen tegen ongeautoriseerde toegang of misbruik, inclusief versleuteling van gevoelige gegevens.
                    Uw rechten: U heeft recht op toegang tot uw gegevens, correctie van onjuistheden, bezwaar tegen verwerking, beperking van verwerking en verwijdering van gegevens.
                    Neem contact met ons op voor vragen of verzoeken met betrekking tot uw privacy:
                    Snelle Hap</p>
                </article>
            </article>
            <article class="reserverenall">
                <h1>Reserveer hier:</h1>
                <form  action="result.php" method="post" class="reserveren">
                    <label for="naam">Naam:</label>
                    <input type="fname" id="naam" name="naam" required></br>
                    <label for="tussenvoegsel">Tussenvoegsel:</br></label>
                    <input type="text" id="tussenvoegsel" name="tussenvoegsel"></br>
                    <label for="Achternaam">Achternaam:</br></label>
                    <input type="lname" id="Achternaam" name="Achternaam" required></br>
                    <label for="email">E-mail:</br></label>
                    <input type="email" id="email" name="email" required></br>
                    <label for="tel">telefoonnummer:</br></label>
                    <input type="tel" id="telnummer" name="nummer" required></br>
                    <label for="personen">Personen:</br></label>
                    <input type="number" id="personen" name="personen" required> </br>                   
                    <label for="datum">Datum:</br></label>
                    <input type="date" id="datum" name="datum" required></br>
                    <label for="tijd">Tijd:</br></label>
                    <input type="time" id="tijd" name="tijd" required></br>
                    <input type="submit" value="Reserveren"></br>
                </form>
            </article>  
        </section>
    </main>
    <?php require '../php/footer.php'?>
</body>
</html>