

function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('google-map'), {
        zoom: 4,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
	showSlides(slideIndex += n);
}

function currentSlide(n){
	showSlides(slideIndex = n);
}

function showSlides(n){
	var i;
	const slides = document.getElementsByClassName("slider__item");
	const dots = document.getElementsByClassName("slider__dots_dot");
		
	if(n > slides.length){
		slideIndex = 1
	}
	if(n < 1){
		slideIndex=slides.length
	}

	for(i=0; i < slides.length; i++){
		slides[i].style.display = "none";
	}

	for(i=0; i < dots.length; i++){
		dots[i].className = dots[i].className.replace("active","");

	}

	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className+= " active";


}






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