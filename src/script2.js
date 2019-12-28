var elements = document.getElementsByClassName("niki");
var element=elements[0];
var imagine=element.querySelector("#drivers");
var txt=element.querySelector("#imgtext");
let i=0;
element.onclick=function(){
	if(i==0){
		imagine.src="rsz_rip.jpg";
		txt.innerHTML="Rest In Peace";
		i=1;
	}else{
		imagine.src="rsz_niki.jpg";
		txt.innerHTML="Niki Lauda";
		i=0;
	}
}