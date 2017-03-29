$(document).ready(function(){

	var html = "<table class=plateau>";
	for(var i=0; i<10; i++){
		html += "<tr>";
		for(var j=0; j<10; j++){
			if((i+j)%2 == 0){
				html += "<td class=blanche>";
			}else{
				html += "<td class=noir>";
			}
		}
		html += "</tr>";
	}
	html += "</table>";

	$("#plateau").append(html);




});