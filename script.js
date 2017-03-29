$(document).ready(function(){

	var html = "<table class=plateau>";
	for(var i=0; i<10; i++){
		html += "<tr>";
		for(var j=0; j<10; j++){
			if((i+j)%2 == 0){
				html += "<td class=blanche>";
			}else{
				html += "<td class=noire>";
				if(i<4){
					html += "<img src=images/pion_blanc.png></td>";
				}else if(i>5){
					html += "<img src=images/pion_noir.jpg></td>";
				}
				
			}
		}
	html += "</tr>";
}
html += "</table>";

$("#plateau").append(html);




});