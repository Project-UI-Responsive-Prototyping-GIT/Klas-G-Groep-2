var frames = []
 
var food = {
    Hoofdgerechten: [
        {
            img: '../images/biefstuk.png',
            name: 'malse biefstuk',
            description: 'Een perfect gegrilde biefstuk geserveerd met romige aardappelpuree en seizoensgroenten.',
            price: '24,98 euro'
        },
        {
            img: '../images/burger.png',
            name: 'Sappige Burger',
            description: 'Een sappige hamburger met gesmolten kaas, verse groenten en speciale saus, geserveerd met knapperige frietjes.',
            price: '22,54 euro'
        },
        {
            img: '../images/pasta.png',
            name: 'PASTA',
            description: 'Een heerlijke pasta met knoflook, olijfolie en rode pepervlokken, aangevuld met sappige garnalen.',
            price: '23,66'
        },
        {
            img: '../images/vegaMaaltijd.png',
            name: 'Vega quinoa bowl',
            description: 'Een kleurrijke kom vol met gezonde ingrediënten zoals quinoa, gegrilde groenten en romige avocado. ',
            price: '50 euro'
        },
        {
            img: '../images/wrap.png',
            name: 'Kip tortilla',
            description: 'Een smaakvolle mix van gegrilde kip, knapperige bacon en verse groenten, allemaal verpakt in een zachte tortilla.',
            price: '17,00 euro'
        },
        {
            img: '../images/zalmfilet.png',
            name: 'Zalm',
            description: 'Een gezonde en smaakvolle optie met sappige zalmfilet en een verfrissende citroen-dillesaus',
            price: '1 euro'
        },
        {
            img: '../images/thaisecurry.png',
            name: 'Thaise curry',
            description: 'Een pittige Thaise groene curry met sappige garnalen, gemengde groenten en aromatische kruiden, geserveerd met gestoomde jasmijnrijst.',
            price: '25,89'
        },
        {
            img: '../images/gegrildegroenten.png',
            name: 'quiche',
            description: 'Een smakelijke quiche gevuld met een assortiment gegrilde seizoensgroenten en romige kaas, geserveerd met een frisse groene salade.',
            price: '22 euro'
        },
        {
            img: '../images/ratatouille.png',
            name: 'Ratatoille',
            description: 'Geroosterde paprikas gevuld met een smaakvolle ratatouille van tomaten, aubergine, courgette en kruiden, afgetopt met een laagje gesmolten kaas.',
            price: '50cent'
        },
        {
            img: '../images/mexicaanseBuritto.png',
            name: 'Mexico bowl',
            description: 'Een kom vol met Mexicaanse smaken, waaronder kruidige zwarte bonen, maïs, verse salsa, guacamole, en gekruide rijst, geserveerd met een vleugje limoen.',
            price: '18.65'
        },
    ],
    Voorgerechten: [
        {
            img: '../images/salade.png',
            name: 'Seizoenssalade met Gegrilde Perzik en Burrata',
            description: 'Een verfrissende salade met gemengde bladgroenten, gegrilde perzikpartjes, romige burrata kaas, geroosterde noten en een balsamico-glazuur.',
            price: '14,89'
        },
        {
            img: '../images/Surf.png',
            name: 'Surf & Turf Burger',
            description: 'Een decadente burger gemaakt met een sappige runderburger, een gepaneerde garnalenfilet, gesmolten cheddar kaas, knapperige bacon, avocado en een pittige sriracha-mayonaise, geserveerd op een geroosterd brioche broodje.',
            price: '11,67'
        },
        {
            img: '../images/truffel.png',
            name: 'Truffel Risotto met Gegrilde Paddenstoelen',
            description: 'Romige risotto bereid met truffelolie en verrijkt met een mix van gegrilde paddenstoelen, geserveerd met verse kruiden en geraspte Parmezaanse kaas.',
            price: '27,99'
        },
        {
            img: '../images/pesto.png',
            name: 'Zomerse Pesto Pasta met Cherrytomaten en Burrata            ',
            description: 'Linguine pasta gemengd met zelfgemaakte basilicumpesto, zoete cherrytomaten, geroosterde pijnboompitten en romige stukjes burrata kaas.',
            price: '22,85'
        },
        {
            img: '../images/gepaneerde.png',
            name: 'Gepaneerde Kip Saltimbocca',
            description: 'Malse kipfilet, bedekt met prosciutto en saliebladeren, gepaneerd in een knapperig laagje panko-broodkruimels en geserveerd met een verleidelijke marsalasaus, gegarneerd met geroosterde cherrytomaten en verse basilicum.',
            price: '88,91'
        },
        {
            img: '../images/salade.png',
            name: 'Seizoenssalade met Gegrilde Perzik en Burrata',
            description: 'Een verfrissende salade met gemengde bladgroenten, gegrilde perzikpartjes, romige burrata kaas, geroosterde noten en een balsamico-glazuur.',
            price: '14,89'
        },
        {
            img: '../images/Surf.png',
            name: 'Surf & Turf Burger',
            description: 'Een decadente burger gemaakt met een sappige runderburger, een gepaneerde garnalenfilet, gesmolten cheddar kaas, knapperige bacon, avocado en een pittige sriracha-mayonaise, geserveerd op een geroosterd brioche broodje.',
            price: '11,67'
        },
        {
            img: '../images/truffel.png',
            name: 'Truffel Risotto met Gegrilde Paddenstoelen',
            description: 'Romige risotto bereid met truffelolie en verrijkt met een mix van gegrilde paddenstoelen, geserveerd met verse kruiden en geraspte Parmezaanse kaas.',
            price: '27,99'
        },
        {
            img: '../images/pesto.png',
            name: 'Zomerse Pesto Pasta met Cherrytomaten en Burrata            ',
            description: 'Linguine pasta gemengd met zelfgemaakte basilicumpesto, zoete cherrytomaten, geroosterde pijnboompitten en romige stukjes burrata kaas.',
            price: '22,85'
        },
        {
            img: '../images/gepaneerde.png',
            name: 'Gepaneerde Kip Saltimbocca',
            description: 'Malse kipfilet, bedekt met prosciutto en saliebladeren, gepaneerd in een knapperig laagje panko-broodkruimels en geserveerd met een verleidelijke marsalasaus, gegarneerd met geroosterde cherrytomaten en verse basilicum.',
            price: '88,91'
        },
    ],
    Desserts: [
        {
            img: '../images/cheescake.png',
            name: 'New York Cheesecake',
            description: 'Romige en fluweelzachte cheesecake op een krokante koekjesbodem, geserveerd met een keuze uit verse bessen of een fruitige coulis.',
            price: '15,66 euro'
        },
        {
            img: '../images/lava.png',
            name: 'Chocolade Lava Cake',
            description: 'Een warme chocoladecake met een vloeibare chocoladekern, geserveerd met een bolletje vanille-ijs en een garnituur van vers fruit',
            price: '12,98 euro'
        },
        {
            img: '../images/tiramisu.png',
            name: 'Tiramisu',
            description: 'Een klassiek Italiaans dessert met lagen van luchtige mascarponecrème en in koffie gedrenkte lange vingers, bestrooid met cacaopoeder.',
            price: '11,77'
        },
        {
            img: '../images/creme.png',
            name: 'Crème Brûlée: ',
            description: 'Een romige vanillecustard met een knapperige karameltop, geserveerd met een assortiment van vers fruit.',
            price: '12,98'
        },
        {
            img: '../images/romanoff.png',
            name: 'Aardbeien Romanoff',
            description: 'Verse aardbeien gemarineerd in Grand Marnier en vanille, geserveerd met luchtige slagroom.',
            price: '15,99'
        },
        {
            img: '../images/lime.png',
            name: 'Key Lime Pie',
            description: 'Een frisse en zijdezachte limoen taart met een knapperige koekjesbodem, gegarneerd met een toefje slagroom en schijfjes limoen.',
            price: '19,77'
        },
        {
            img: '../images/brood.png',
            name: 'Bananenbrood Pudding',
            description: 'Een smeuïge broodpudding gemaakt van vers bananenbrood, geserveerd met een romige karamelsaus en een bolletje vanille-ijs.',
            price: '20,01'
        },
        {
            img: '../images/churros.png',
            name: 'Churros met Chocoladesaus',
            description: 'Krokante churros bestrooid met kaneelsuiker, geserveerd met een warme chocoladesaus om in te dippen.',
            price: '19,76'
        },
        {
            img: '../images/penna.png',
            name: 'Panna Cotta',
            description: 'Een fluweelzachte Italiaanse roompudding met een subtiele vanillesmaak, overgoten met een zoete fruitensaus.',
            price: '2,51'
        },
        {
            img: '../images/brownie.png',
            name: 'Chocolade Brownie Sunda',
            description: 'Warme chocolade brownie overgoten met vanille-ijs, slagroom, gehakte noten en chocoladesaus.',
            price: '18,90'
        },
       
 
    ],
    Drankjes: [
        {
            img: '../images/espresso.png',
            name: 'Espresso',
            description: 'Een sterke en intense koffie, perfect voor degenen die van een krachtige smaak houden.',
            price: '19,87'
        },
        {
            img: '../images/fris.png',
            name: 'frisdranken',
            description: 'Een assortiment van verfrissende frisdranken, zoals cola, sinas, Sprite, ijsthee en bruisend mineraalwater.',
            price: '4,65'
        },
        {
            img: '../images/choco.png',
            name: 'Warme chocolade melk',
            description: 'Romige en verwarmende chocolademelk, geserveerd met een toefje slagroom en eventueel wat marshmallows.',
            price: '2 euro'
        },
        {
            img: '../images/milkyshakey.png',
            name: 'Milkshake',
            description: 'Een romige en smakelijke traktatie gemaakt van vanille-ijs en melk, verkrijgbaar in verschillende smaken zoals aardbei, chocolade of vanille.',
            price: '6,87'
        },
        {
            img: '../images/smoothie.png',
            name: 'Smoothies',
            description: 'Gezonde en verfrissende smoothies gemaakt van een mix van vers fruit, yoghurt en eventueel wat honing of muesli voor extra smaak en textuur.',
            price: '7,58'
        },
        {
            img: '../images/espresso.png',
            name: 'Espresso',
            description: 'Een sterke en intense koffie, perfect voor degenen die van een krachtige smaak houden.',
            price: '19,87'
        },
        {
            img: '../images/fris.png',
            name: 'frisdranken',
            description: 'Een assortiment van verfrissende frisdranken, zoals cola, sinas, Sprite, ijsthee en bruisend mineraalwater.',
            price: '4,65'
        },
        {
            img: '../images/choco.png',
            name: 'Warme chocolade melk',
            description: 'Romige en verwarmende chocolademelk, geserveerd met een toefje slagroom en eventueel wat marshmallows.',
            price: '2 euro'
        },
        {
            img: '../images/milkyshakey.png',
            name: 'Milkshake',
            description: 'Een romige en smakelijke traktatie gemaakt van vanille-ijs en melk, verkrijgbaar in verschillende smaken zoals aardbei, chocolade of vanille.',
            price: '6,87'
        },
        {
            img: '../images/smoothie.png',
            name: 'Smoothies',
            description: 'Gezonde en verfrissende smoothies gemaakt van een mix van vers fruit, yoghurt en eventueel wat honing of muesli voor extra smaak en textuur.',
            price: '7,58'
        },
    ],
    Specials: [
        {
            img: '../images/perzik.png',
            name: 'Seizoenssalade met Gegrilde Perzik en Burrata',
            description: 'Een verfrissende salade met gemengde bladgroenten, gegrilde perzikpartjes, romige burrata kaas, geroosterde noten en een balsamico-glazuur.',
            price: '27,99'
        },
        {
            img: '../images/watermeloen.png',
            name: 'Zomerse Watermeloen Salade met Feta en Munt',
            description: 'Verfrissende combinatie van sappige watermeloenblokjes, verkruimelde feta kaas, verse muntblaadjes, lichte dressing van limoensap en een vleugje honing.',
            price: '29,99'
        },
        {
            img: '../images/caprese.png',
            name: 'Caprese Burger',
            description: 'Een smaakvolle rundvleesburger met gesmolten mozzarella kaas, plakjes tomaat, verse basilicum, balsamico glazuur en een romige pesto-mayonaise, geserveerd op een geroosterd brioche broodje.',
            price: '22,00'
        },
        {
            img: '../images/thais.png',
            name: 'Thaise Kip Cashew Roerbak',
            description: 'Sappige stukjes kipfilet roergebakken met knapperige groenten, cashewnoten en verse kruiden in een aromatische Thaise saus, geserveerd met gestoomde jasmijnrijst.',
            price: '29,99'
        },
        {
            img: '../images/quinoa.png',
            name: 'Mediterrane Quinoa Salade met Gegrilde Groenten',
            description: 'Een lichte en voedzame salade met gekookte quinoa, gegrilde courgette, paprika, rode ui, cherrytomaten, feta kaas en een frisse citroen-basilicumvinaigrette.',
            price: '24,9'
        },
        {
            img: '../images/perzik.png',
            name: 'Seizoenssalade met Gegrilde Perzik en Burrata',
            description: 'Een verfrissende salade met gemengde bladgroenten, gegrilde perzikpartjes, romige burrata kaas, geroosterde noten en een balsamico-glazuur.',
            price: '27,99'
        },
        {
            img: '../images/watermeloen.png',
            name: 'Zomerse Watermeloen Salade met Feta en Munt',
            description: 'Verfrissende combinatie van sappige watermeloenblokjes, verkruimelde feta kaas, verse muntblaadjes, lichte dressing van limoensap en een vleugje honing.',
            price: '29,99'
        },
        {
            img: '../images/caprese.png',
            name: 'Caprese Burger',
            description: 'Een smaakvolle rundvleesburger met gesmolten mozzarella kaas, plakjes tomaat, verse basilicum, balsamico glazuur en een romige pesto-mayonaise, geserveerd op een geroosterd brioche broodje.',
            price: '22,00'
        },
        {
            img: '../images/thais.png',
            name: 'Thaise Kip Cashew Roerbak',
            description: 'Sappige stukjes kipfilet roergebakken met knapperige groenten, cashewnoten en verse kruiden in een aromatische Thaise saus, geserveerd met gestoomde jasmijnrijst.',
            price: '29,99'
        },
        {
            img: '../images/quinoa.png',
            name: 'Mediterrane Quinoa Salade met Gegrilde Groenten',
            description: 'Een lichte en voedzame salade met gekookte quinoa, gegrilde courgette, paprika, rode ui, cherrytomaten, feta kaas en een frisse citroen-basilicumvinaigrette.',
            price: '24,9'
        },
    ]
}
 
 
 
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
        if(i == 3){
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
 
var arrays = getSelection('Hoofdgerechten');
load(arrays)
 
document.getElementById("Hoofdgerechten").addEventListener('click', () => {
    console.log("click")
    var arrays = getSelection('Hoofdgerechten');
    load(arrays)
});
document.getElementById("Desserts").addEventListener('click', () => {
    console.log("click")
    var arrays = getSelection('Desserts');
    load(arrays)
});
document.getElementById("Drankjes").addEventListener('click', () => {
    console.log("click")
    var arrays = getSelection('Drankjes');
    load(arrays)
});
document.getElementById("Specials").addEventListener('click', () => {
    console.log("click")
    var arrays = getSelection('Specials');
    load(arrays)
});
document.getElementById("Voorgerechten").addEventListener('click', () => {
    console.log("click")
    var arrays = getSelection('Voorgerechten');
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
        if (frames.length >= 2) {
            frames[2].style.opacity = 1
        }
        frames[3].style.opacity = 0
        clearInterval(interval)
    }, 300);
}
 
function forward() {
    console.log(frames)
    let removeFrame = frames.pop()
    let frameHTML = removeFrame.innerHTML
    if (frames.length >= 2) {
        console.log(frames)
        frames[2].style.opacity = 0
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
 