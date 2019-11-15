var elements = document.getElementsByClassName("niki");
var element=elements[0];
element.onclick=function(){
	var imagine=element.querySelector("#drivers");
	imagine.src="rsz_rip.jpg";
	var txt=element.querySelector("#imgtext");
	txt.remove();
}