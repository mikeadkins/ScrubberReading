numofPorts=false;
numofReadings=3;
function sixPort() {
	sixPortcall=document.getElementById("sixPort").checked;
		if (sixPortcall===true){
			document.getElementById("sixPort1").style.display="";
			document.getElementById("cell6.0").style.display="";
			document.getElementById("cell6.1").style.display="";
			document.getElementById("cell6.2").style.display="";
			document.getElementById("cell6.3").style.display="";
			document.getElementById("cell6.4").style.display="";
			document.getElementById("total6").style.display="";
			numofPorts=true;
		}
}
function getDims() {
	var width, heigth, thickness, area, port;
	width= document.getElementById("width");
	heigth=document.getElementById("heigth");
	thickness=document.getElementById("topPlate");
	width=parseFloat(width.value);
	heigth=parseFloat(heigth.value);
	thickness=parseFloat(thickness.value);
	area=(width*heigth) / 144;
	area=area.toFixed(2);
	document.getElementById("area").innerHTML="Area: " + area +" sq.ft.";
	secondMark=heigth / 2 + thickness;
	firstMark=heigth/4 + thickness;
	thirdMark=secondMark+firstMark - thickness;
	document.getElementById("firstMark").innerHTML="First mark: " + firstMark.toFixed(2)+"\"";
	document.getElementById("secondMark").innerHTML="Second mark: " + secondMark.toFixed(2)+"\"";
	document.getElementById("thirdMark").innerHTML="Third mark: " + thirdMark.toFixed(2)+"\"";
	perPort= document.getElementById("perPort").checked;
		if (perPort===true) {
			document.getElementById("fiveMeas").style.display="";
			document.getElementById("fiveMeas2").style.display="";
			numofReadings=5;
		}
	sixPort();	
}
measArray= [];
numofColumns=6;
numofRows=3;
if (numofPorts===true) {numofColumns=8}

if (numofReadings==5) {numofRows=5}

function totals(){
var totals1,totals2,totals3,totals4,totals5,totals6;
totals1=0;
for (k=0; k<measArray.length/*numofReadings*/;k++){
	totals1+=measArray[k];
}
totals1=parseFloat(totals1);
document.getElementById("total1").innerHTML=totals1;
}

	
function measurements(){
	for (j =1; j<numofColumns; j++) {
		
		for (i=0; i<numofRows; i++){
			meas=  prompt("enter meaurement");
			meas = parseFloat(Math.round((Math.sqrt(meas))*4005));
			measArray.push(meas);
			/*y=(measArray.length)-1;
			x=measArray[y];*/
			document.getElementById("cell"+j+"."+i).innerHTML=meas;//Math.round((Math.sqrt(x))*4005);
		}
	}
	totals();
}

