var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	slides[0].style.display="none";
	var cs=window.getComputedStyle(slides[0]);
	for (i = 1; i < slides.length; i++) {
		slides[i].style.display = cs.getPropertyValue("display");
	}
	var el;
	for (el of dots) {
		el.className = el.className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].classList.add("active");
}

var img=document.getElementById("masinuta");
img.style.left="0px";
let x=15;
img.onclick=function(){
	var t=setInterval(function(y){if(parseInt(img.style.left)>1350) {img.style.left="0px";clearInterval(t);};img.style.left=parseInt(img.style.left)+y+"px";},100,x);
	x=x+20;
}