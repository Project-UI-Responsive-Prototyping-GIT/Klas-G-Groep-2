var elements = document.getElementsByClassName('headerLink')
for (let i = 0; i < elements.length; i++) {
    let element = elements[i]
    let article = element.parentElement
    let frame = document.createElement('section')
    /* Setup line */
    frame.style.backgroundColor = 'white'
    frame.className = 'headerUnderline'
    article.appendChild(frame)
    element.addEventListener('mouseover', () => {
        frame.style.width = article.clientWidth + 'px'
        frame.style.height = '2px'
    })
    element.addEventListener('mouseout', () => {
        frame.style.width = '0px'
        frame.style.height = '0px'
    })
}

var opened = false
var blockPhoneHeader = document.getElementById('blockPhoneHeader')
var all = document.getElementsByClassName('all')[0]
var footer = document.getElementById('footerFlex')

blockPhoneHeader.style.opacity = '0'
blockPhoneHeader.style.transition = '1000ms'

document.getElementById("Hamburgurimg").addEventListener('click', () => {
    opened = !opened
    if (opened) {
        console.log('open page')
        blockPhoneHeader.style.display = 'inline'
        all.style.display = 'none'
        footer.style.display = 'none'
        
        blockPhoneHeader.style.opacity = '0'
        blockPhoneHeader.style.opacity = '1'
    } else {
        console.log('close page ')
        blockPhoneHeader.style.display = 'none'
        all.style.display = 'block'
        footer.style.display = 'flex'
        blockPhoneHeader.style.opacity = '0'
    }
    console.log("click")
    
});

function Dropdown() {
    document.getElementById("DropdownMenu").classList.toggle("show");
  }
  
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("DropdownMenu");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

