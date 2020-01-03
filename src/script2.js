var elements = document.getElementsByClassName("niki");
var element=elements[0];
var imagine=element.querySelector("#drivers");
var txt=element.querySelector("#imgtext");
let i=0;
element.onclick=function(event){
	if(i==0){
		imagine.src="rsz_rip.jpg";
		txt.innerHTML="Rest In Peace";
		i=1;
	}else{
		imagine.src="rsz_niki.jpg";
		txt.innerHTML="Niki Lauda";
		i=0;
	}
	event.stopPropagation();
}

let cont=document.getElementsByClassName("container");
cont[0].onclick=function(){
	var copii=cont[0].children;
	cont[0].appendChild(copii[0]);
}

cont[1].onclick=function(){
	cont[1].parentElement.style.backgroundColor="#F0F8FF";
}