var frames = []
 
var food = {
        fris: [
          {
            "img": "../images/cola.webp",
            "name": "Cola",
            "description": "Een verfrissende cola, bekend om zijn kenmerkende smaak en bruisende sensatie.",
            "price": "2,50 euro"
          },
          {
            "img": "../images/sinas.jpg",
            "name": "Sinas",
            "description": "Een heerlijk sprankelende sinaasappeldrank, vol met citrusaroma's en verfrissing.",
            "price": "2,50 euro"
          },
          {
            "img": "../images/sprite.jpg",
            "name": "Sprite",
            "description": "Een verfrissende citroen-limoen frisdrank, bekend om zijn bubbels en levendige smaak.",
            "price": "2,50 euro"
          },
          {
            "img": "../images/ijsthee.jpg",
            "name": "IJsthee",
            "description": "Een verkoelende en dorstlessende ijsthee, perfect voor een zonnige dag.",
            "price": "3 euro"
          },
          {
            "img": "../images/bruisend_mineraalwater.jpg",
            "name": "Bruisend mineraalwater",
            "description": "Een sprankelend mineraalwater",
            "price": "2 euro"
          },
          {
            "img": "../images/energydrink.webp",
            "name": "Energy Drink",
            "description": "Een energieke mix van cafeïne, suiker en vitaminen, ontworpen om je een boost te geven.",
            "price": "3,50 euro"
          },
          {
            "img": "../images/gemberbier.jpg",
            "name": "Gemberbier",
            "description": "Een pittige en verfrissende gemberdrank.",
            "price": "3 euro"
          },
          {
            "img": "../images/limonade.jpg",
            "name": "Limonade",
            "description": "Een klassieke limonade, zoet en verfrissend, ideaal voor het lessen van je dorst.",
            "price": "2,50 euro"
          },
          {
            "img": "../images/tonig.jpg",
            "name": "Tonic",
            "description": "Een bitterzoete frisdrank, vaak gebruikt als mixer voor alcoholische dranken.",
            "price": "2,50 euro"
          },
          {
            "img": "../images/ginger_ale.webp",
            "name": "Ginger Ale",
            "description": "Een sprankelende gemberdrank met een vleugje citrus, verfrissend en smaakvol.",
            "price": "2,50 euro"
          }
        ],     
            Alcohol: [
        {
        "img": "../images/bier.webp",
        "name": "Bier",
        "description": "Een verfrissend en smaakvol brouwsel, verkrijgbaar in verschillende soorten zoals pils, blond, bruin of IPA.",
        "price": "3 euro"
        },
        {
        "img": "../images/wijn_rood.webp",
        "name": "Rode wijn",
        "description": "Een volle en robuuste rode wijn, met aroma's van donker fruit en specerijen, perfect om te genieten bij gerechten of als aperitief.",
        "price": "5 euro"
        },
        {
        "img": "../images/wijn_wit.jpg",
        "name": "Witte wijn",
        "description": "Een frisse en fruitige witte wijn, met tonen van citrus en tropisch fruit, ideaal om te serveren bij visgerechten of als aperitief.",
        "price": "5 euro"
        },
        {
        "img": "../images/champagne.jpg",
        "name": "Champagne",
        "description": "Een sprankelende en feestelijke mousserende wijn, perfect voor speciale gelegenheden en vieringen.",
        "price": "10 euro"
        },
        {
        "img": "../images/gin-tonic.jpg",
        "name": "Gin-tonic",
        "description": "Een verfrissende mix van gin en tonic, geserveerd met ijs en een schijfje citrus, populair om zijn eenvoudige maar smaakvolle combinatie.",
        "price": "7 euro"
        },
        {
        "img": "../images/mojito.jpg",
        "name": "Mojito",
        "description": "Een verfrissende cocktail gemaakt van rum, limoensap, munt, suiker en soda, perfect voor een zomerse dag op het terras.",
        "price": "8 euro"
        },
        {
        "img": "../images/margarita.jpg",
        "name": "Margarita",
        "description": "Een klassieke tequila-cocktail, gemaakt met tequila, triple sec en limoensap, geserveerd met zout op de rand van het glas.",
        "price": "9 euro"
        },
        {
        "img": "../images/whiskey.jpg",
        "name": "Whiskey",
        "description": "Een sterke en smaakvolle gedistilleerde drank, gerijpt in eiken vaten en gekenmerkt door zijn rijke aroma's en complexe smaken.",
        "price": "8 euro"
        },
        {
        "img": "../images/vodka.jpg",
        "name": "Wodka",
        "description": "Een heldere en neutrale gedistilleerde drank, ideaal om te mixen in cocktails of om puur te drinken met ijs.",
        "price": "6 euro"
        },
        {
        "img": "../images/cocktail.avif",
        "name": "Cocktail",
        "description": "Een assortiment van klassieke en eigentijdse cocktails, zoals Cosmopolitan, Sex on the Beach, Piña Colada, en nog veel meer.",
        "price": "8 euro"
        }          
    ],
  warme: [
    {
      "img": "../images/koffie.avif",
      "name": "Koffie",
      "description": "Een klassieke kop koffie, aromatisch en verkwikkend, perfect voor een energieboost.",
      "price": "2,50 euro"
    },
    {
      "img": "../images/cappuccino.jpg",
      "name": "Cappuccino",
      "description": "Een heerlijke combinatie van espresso, gestoomde melk en melkschuim, bekend om zijn romige textuur en rijke smaak.",
      "price": "3 euro"
    },
    {
      "img": "../images/latte.jpg",
      "name": "Latte",
      "description": "Een zachte en romige koffiedrank, gemaakt met espresso en warme melk, ideaal om langzaam van te genieten.",
      "price": "3,50 euro"
    },
    {
      "img": "../images/thee.jpg",
      "name": "Thee",
      "description": "Een rustgevende kop thee, verkrijgbaar in verschillende smaken zoals groene thee, zwarte thee of kruidenthee.",
      "price": "2 euro"
    },
    {
      "img": "../images/chocolademelk.jpg",
      "name": "Chocolademelk",
      "description": "Een troostende en romige chocoladedrank, ideaal voor een warme traktatie op een koude dag.",
      "price": "3 euro"
    },
    {
      "img": "../images/warme_chocolademelk.jpg",
      "name": "Warme chocolademelk",
      "description": "Een rijke en decadente warme chocoladedrank, geserveerd met een royale portie slagroom en marshmallows.",
      "price": "3,50 euro"
    },
    {
      "img": "../images/thee_met_honing.jpg",
      "name": "Thee met honing",
      "description": "Een verzachtende en kalmerende kop thee, gezoet met een vleugje natuurlijke honing.",
      "price": "2,50 euro"
    },
    {
      "img": "../images/espresso.png",
      "name": "Espresso",
      "description": "Een sterke en intense koffie, perfect voor degenen die van een krachtige smaak houden.",
      "price": "2,50 euro"
    },
    {
      "img": "../images/chai_latte.jpg",
      "name": "Chai Latte",
      "description": "Een heerlijke mix van zwarte thee, specerijen en gestoomde melk, gekruid met kaneel, gember en kruidnagel.",
      "price": "4 euro"
    },
    {
      "img": "../images/kamillethee.png",
      "name": "Kamillethee",
      "description": "Een kalmerende en rustgevende kop kamillethee, perfect voor het ontspannen na een lange dag.",
      "price": "2,50 euro"
    } 
    ],
   Gekoeld: [
          {
            "img": "../images/cocktail.jpg",
            "name": "Iced Tea",
            "description": "Een verfrissende ijsthee, verkrijgbaar in verschillende smaken zoals citroen, perzik of groene thee.",
            "price": "3 euro"
          },
          {
            "img": "../images/iced_coffee.jpg",
            "name": "Iced Coffee",
            "description": "Een verkoelende koffiedrank, gezoet en gekoeld, perfect voor warme zomerdagen.",
            "price": "4 euro"
          },
          {
            "img": "../images/smoothie.png",
            "name": "Smoothie",
            "description": "Een gezonde en verfrissende smoothie, gemaakt van een mix van vers fruit en yoghurt, ideaal als tussendoortje of als verfrissing.",
            "price": "5 euro"
          },
          {
            "img": "../images/milkshake.jpg",
            "name": "Milkshake",
            "description": "Een romige en smakelijke milkshake, gemaakt van vanille-ijs en melk, verkrijgbaar in verschillende smaken zoals aardbei, chocolade of vanille.",
            "price": "5 euro"
          },
          {
            "img": "../images/fruitsap.jpg",
            "name": "Fruitsap",
            "description": "Een verfrissend glas vers geperst fruitsap, boordevol vitamines en natuurlijke smaken.",
            "price": "3 euro"
          },
          {
            "img": "../images/limonade.jpg",
            "name": "Limonade",
            "description": "Een klassieke limonade, zoet en verfrissend, perfect om de dorst te lessen op een warme dag.",
            "price": "3 euro"
          },
          {
            "img": "../images/frisdrank.webp",
            "name": "Frisdrank",
            "description": "Een assortiment van verfrissende frisdranken, zoals cola, sinas, Sprite, ijsthee en bruisend mineraalwater.",
            "price": "2 euro"
          },
          {
            "img": "../images/bruisend_mineraalwater.jpg",
            "name": "Bruisend mineraalwater",
            "description": "Een sprankelend mineraalwater",
            "price": "2 euro"
          },
          {
            "img": "../images/sap.jpg",
            "name": "Versgeperst sap",
            "description": "Een verfrissend glas sap, rechtstreeks geperst uit vers fruit, perfect als dorstlesser of gezonde snack.",
            "price": "4 euro"
          },
          {
            "img": "../images/water.jpg",
            "name": "Water met ijs",
            "description": "Een klassiek glas water met ijs, verfrissend en dorstlessend.",
            "price": "1 euro"
          }
        ]     
};
 
 
 
function getSelection(selection) {
    if (frames.length > 0) {
        for (let i = 0; i < frames.length; i++) {
            frames[i].remove()
        }
        frames = []
    }
    for (const property in food) {
        if (selection == property){
            let array = food[property]
            return array
        };
    }
};
 
function load(arrays) {
    for (let i = 0; i < arrays.length; i++) {
        var menuItem = arrays[i]
        let frame = document.createElement('article')
        frame.className = 'menuBlock'
        if(i == 4){
            frame.style.opacity = 0
        }
        frames.push(frame)
        sect.appendChild(frame)
        frame.innerHTML +=
        `
            <img id="imgmenu" src="`+menuItem.img+`">
            <h1>`+menuItem.name+`</h1>
            <p>`+menuItem.description+`</p>
            <p><strong>Price:<br></strong>`+menuItem.price+`</p>
        `
    }
}
 
let Backknop = document.getElementById("menuBack")
let sect = document.getElementsByClassName('menuFlex')[0]
 
var arrays = getSelection('Alcohol');
load(arrays)
 
document.getElementById("fris").addEventListener('click', () => {
    console.log("click")
    var arrays = getSelection('fris');
    load(arrays)
});
document.getElementById("warme").addEventListener('click', () => {
    console.log("click")
    var arrays = getSelection('warme');
    load(arrays)
});
document.getElementById("Alcohol").addEventListener('click', () => {
    console.log("click")
    var arrays = getSelection('Alcohol');
    load(arrays)
});
document.getElementById("Gekoeld").addEventListener('click', () => {
    console.log("click")
    var arrays = getSelection('Gekoeld');
    load(arrays)
});

 
 
 
function back() {
    console.log(frames)
    let removeFrame = frames.shift()
    let frameHTML = removeFrame.innerHTML
    removeFrame.style.opacity = 0
    let interval = setInterval(() => {
        removeFrame.remove()
        let article = document.createElement('article')
        article.className = 'menuBlock'
        article.innerHTML += frameHTML
        frames.push(article)
        sect.appendChild(article)
        if (frames.length >= 3) {
            frames[3].style.opacity = 1
        }
        frames[4].style.opacity = 0
        clearInterval(interval)
    }, 300);
}
 
function forward() {
    console.log(frames)
    let removeFrame = frames.pop()
    let frameHTML = removeFrame.innerHTML
    if (frames.length >= 3) {
        console.log(frames)
        frames[3].style.opacity = 0
    }
    let interval = setInterval(() => {
        removeFrame.remove()
        let article = document.createElement('article')
        article.className = 'menuBlock'
        article.innerHTML += frameHTML
        article.style.opacity = 0
        frames.unshift(article)
        sect.prepend(article)
        var opacityInvertal = setInterval(() => {
            article.style.opacity = 1;
            clearInterval(opacityInvertal)
        }, 25);
        console.log(frames)
        clearInterval(interval)
    }, 300);
}
 
var clickDebounce = false
 
menuForward.addEventListener('click', () => {
    if (clickDebounce){return}
    clickDebounce = true
    var interval = setInterval(() => {
        clickDebounce = false
        clearInterval(interval)
    }, 300);
    forward()
});
 
Backknop.addEventListener('click', () => {
    if (clickDebounce){return}
    clickDebounce = true
    var interval = setInterval(() => {
        clickDebounce = false
        clearInterval(interval)
    }, 300);
    back()
});
 