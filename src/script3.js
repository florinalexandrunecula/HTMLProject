window.onload=function(){
	var cutie=document.getElementById("box");
	var addbutton=document.getElementById("add");
	var totalbutton=document.getElementById("submit");
	let total=0;
	let to_add=[];
	var p = document.createElement("p");
	var div = document.getElementById("order");
	div.appendChild(p);
	addbutton.onclick=function(){
		var text=cutie.value;
		var picks=document.getElementsByName("picker");
		var written="";
		if(text=="T-shirt"){
			total+=40.99;
			written+=" T-shirt ";
		}
		if(text=="Long Sleeve T-shirt"){
			total+=60.99;
			written+=" Long Sleeve T-shirt ";
		}
		if(text=="Cap"){
			total+=40.99;
			written+=" Cap ";
		}
		var totaltxt=document.getElementById("total");
		totaltxt.innerHTML="Total is: "+Math.ceil(total);
		var culori=document.getElementsByName("color");
		for(i=0;i<culori.length;i++){
			if(culori[i].checked)
				written+=culori[i].value+" ";
		}
		if(picks[0].checked)
			written+="with driver name";
		to_add.push(written);
		p.innerHTML=to_add.toString();
	}
	//cutie.addEventListener("keyup",function(event){
	//	if (event.keyCode === 13)
	//		addbutton.click();
	//});
	cutie.onkeyup=function(event){
		if(event.keyCode==13)
			addbutton.click();
	}
	totalbutton.onclick=function(){
		var totaltxt=document.getElementById("total").innerHTML;
		location.href = "http://localhost:8000" + "?total=" + totaltxt;
		//var written="Order placed on ";
		//var d = new Date();
		//written+=d.getDate()+"."+(d.getMonth()+1)+"."+d.getFullYear();
		//var p=document.createElement("p");
		//p.innerHTML=written;
		//document.body.appendChild(p);
	}
}