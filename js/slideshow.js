let slides = document.getElementsByClassName('slideHomepage');
var counter = 0;
var lastSlide = undefined;
var forwardButton = document.getElementById('Forward')
var backButton = document.getElementById('Back')

console.log(slides)

slides[0].style.opacity = 1;

function back(){
    counter--
    if (counter < 0){
        counter = slides.length-1
    };
    if (lastSlide){
        lastSlide.style.opacity = 0;
    };
    let currentSlide = slides[counter];
    lastSlide = currentSlide;
    currentSlide.style.opacity = 1;
};
 
function forward(){
    counter++
    if (counter > (slides.length-1)){
        counter = 0
    };
    if (lastSlide){
        lastSlide.style.opacity = 0;
    };
    let currentSlide = slides[counter];
    lastSlide = currentSlide;
    currentSlide.style.opacity = 1;
};
 
for (let i = 0; i < slides.length; i++) {
    slides[i].style.opacity = 0;
    slides[i].style.transition = '500MS'
    slides[i].style.position = 'absolute'
}

forward()
var interval = setInterval(forward, 5000);

forwardButton.addEventListener('click', () => {
    forward()
    clearInterval(interval)
    forwardButton.style.marginLeft = '197vh'
    interval = setInterval(forward, 5000)
    moveBackInterval = setInterval(() => {
        forwardButton.style.marginLeft = '195vh'
        clearInterval(moveBackInterval)
    }, 100);
});

backButton.addEventListener('click', () => {
    back()
    clearInterval(interval)
    backButton.style.marginLeft = '18vh'
    interval = setInterval(forward, 5000)
    moveBackInterval = setInterval(() => {
        backButton.style.marginLeft = '20vh'
        clearInterval(moveBackInterval)
    }, 100);
});