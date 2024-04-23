// var elements = document.getElementsByClassName('navMenu')
// for (let i = 0; i < elements.length; i++) {
//     let element = elements[i]
//     let article = element.parentElement
//     let frame = document.createElement('section')
//     /* Setup line */
//     frame.style.backgroundColor = 'white'
//     frame.style.position = 'absolute'
//     frame.style.marginBottom = '50px'
//     frame.className = 'headerUnderline'
//     article.appendChild(frame)
//     element.addEventListener('mouseover', () => {
//         frame.style.width = article.clientWidth + 'px'
//         frame.style.height = '2px'
//     })
//     element.addEventListener('mouseout', () => {
//         frame.style.width = '0px'
//         frame.style.height = '0px'
//     })
// }