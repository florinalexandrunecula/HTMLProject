var elements = document.getElementsByClassName("niki");
var element=elements[0];
var imagine=element.querySelector("#drivers");
var txt=element.querySelector("#imgtext");
var i=0;
element.onclick=function(){
	if(i==0){
		imagine.src="rsz_rip.jpg";
		element.removeChild(txt);
		i=1;
	}else{
		imagine.src="rsz_niki.jpg";
		element.appendChild(txt);
		i=0;
	}
}