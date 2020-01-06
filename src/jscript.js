if (JSON.parse(localStorage.getItem("json")).nume == null) {
	var person = prompt("Please enter your name", "Your Name Here");
	localStorage.setItem("json", JSON.stringify({nume:person}));
	alert("Hello "+person);
}
else{
	var json=localStorage.getItem("json");
	var ojs=JSON.parse(json);
	alert("Hello "+ojs.nume);
}

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
	img.style.left="0px";
	var t=setInterval(function(y){if(parseInt(img.style.left)>1300) {img.style.left="0px";clearInterval(t);};img.style.left=parseInt(img.style.left)+y+"px";},100,x);
	x=x+20;
}

var header=document.getElementsByTagName("h4");
var h4=header[0];
h4.addEventListener("click",function(){alert("A team come true!")},false);
//h4.onclick=function(event){
//	alert("A TEAM COME TRUE");
//	event.stopPropagation();
//}
var article=document.getElementsByTagName("article");
var art=article[0];
art.addEventListener("click",function(){alert("Congratulations!")},true);
//art.onclick=function(){
//	alert("Congratulations!");
//}
//let request_url="http://ergast.com/api/f1/current/constructorStandings"
//let request = new XMLHttpRequest();
//request.open('GET', requestURL);
//request.responseType = 'json';
//request.send();
//request.onload = function() {
//	const standings = request.response;
//}