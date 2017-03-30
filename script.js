$(document).ready(function(){

	var html = "<table class=plateau>";
	for(var i=0; i<10; i++){
		html += "<tr>";
		for(var j=0; j<10; j++){
			if((i+j)%2 == 0){
				html += "<td class=blanche id="+(i+j)+">";
			}else{
				html += "<td class=noire id="+(i+j)+">";
				if(i<4){
					html += "<img src=images/pion_blanc.png></td>";
				}else if(i>5){
					html += "<img src=images/pion_noir.png></td>";
				}
				
			}
		}
	html += "</tr>";
}
html += "</table>";

$("#plateau").append(html);

$("img").draggable({
	revert: "invalid",
	addClass: "drag"
});

$("td").droppable({
	accept: "img",
	drop: function(event, ui){
		var tmp = parseInt($(this).attr("id"))-9;
		if(ui.draggable.is("#"+tmp)){
			return true;
		}
	}

});

});