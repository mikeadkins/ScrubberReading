
function getDims() {
	var width, heigth, thickness, area, port
	width= document.getElementById("width");
	heigth=document.getElementById("heigth");
	thickness=document.getElementById("topPlate");
	width=parseFloat(width.value);
	heigth=parseFloat(heigth.value);
	thickness=parseFloat(thickness.value);
	area=(width*heigth) / 144;
	area=area.toFixed(2)
	document.getElementById("area").innerHTML="Area: " + area +" sq.ft.";
	secondMark=heigth / 2 + thickness
	firstMark=heigth/4 + thickness
	thirdMark=secondMark+firstMark - thickness
	document.getElementById("firstMark").innerHTML="First mark: " + firstMark.toFixed(2)+"\""
	document.getElementById("secondMark").innerHTML="Second mark: " + secondMark.toFixed(2)+"\""
	document.getElementById("thirdMark").innerHTML="Third mark: " + thirdMark.toFixed(2)+"\""
	perPort= document.getElementById("perPort").value;
	perPort=parseFloat(perPort);
		if (perPort==5) {
			document.getElementsByClassName("fiveMeas").style.display="";
		}	
}
measArray= [];
function measurements(){
	for (var i=0; i<5; i++){
	meas=  prompt("enter meaurement");
	meas = parseFloat(meas);
	
	measArray.push(meas);
	document.getElementById("cell1."+i).innerHTML=measArray[i];
}
}
	