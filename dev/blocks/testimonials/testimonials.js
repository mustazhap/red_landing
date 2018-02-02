var slideIndex1 = 1;
showSlides1(slideIndex1);


function currentSlide1(n) {
    showSlides1(slideIndex1 = n);
}

function showSlides1(n) {
    var i;
    const slides = document.getElementsByClassName("slider-item");
    const dots = document.getElementsByClassName("dot1");
    if (n > slides.length) {slideIndex1 = 1}
    if (n < 1) {slideIndex1 = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex1-1].style.display = "flex";
    dots[slideIndex1-1].className += " active";
}