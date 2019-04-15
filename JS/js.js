function menuOpen(){
    document.getElementsByClassName("menu")[0].classList.toggle("menuOpen");
    document.getElementsByClassName('menuForAdapt')[0].classList.toggle('menuForAdaptAnimation');
}

//timer

let countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
let x = setInterval(function() {
    let now = new Date().getTime();
    let distance = countDownDate - now;
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementsByClassName("timeLeft")[0].innerHTML = days;
    document.getElementsByClassName("timeLeft")[1].innerHTML = hours;
    document.getElementsByClassName("timeLeft")[2].innerHTML = minutes;
    document.getElementsByClassName("timeLeft")[3].innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementsByClassName("timeLeft")[3].innerHTML = "EXPIRED";
    }
}, 1000);

//leftSlider

var slides = document.querySelectorAll('.middleContainer');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    slides[currentSlide].className = 'middleContainer';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'middleContainer showing';
}

//stars

let checks = document.querySelectorAll('.fa-star');
checks.forEach(function(check){
    check.addEventListener('click', checkIndex);
});

function checkIndex(event){
    let Stars = Array.from(checks).indexOf(event.target) + 1;
    let numIndex = Stars - 1;
    while (Stars > 0){
        Stars -= 5;
    }
    Stars += 4;
    for(i = Stars; i >= 0; i--){
        checks[numIndex-i].className = "fas fa-star lol";
    }
}

//rightSlider

let imgs = document.querySelectorAll('.bgImgContainer');
let currentImg = 0;

function next() {
    goToSlide(currentImg+1);
}

function previous() {
    goToSlide(currentImg-1);
}

function goToSlide(n) {
    imgs[currentImg].className = 'bgImgContainer';
    currentImg = (n+imgs.length)%imgs.length;
    imgs[currentImg].className = 'bgImgContainer showing';
}