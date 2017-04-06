var tour = "J1";

$(document).ready(function(){

	CreationPlateau();
	Jouer();
	afficheTour();

	$("td").droppable({
		grid: [60, 60],
		accept: "img",
		drop: function(event, ui){
			var tmp = parseInt($(this).attr("id"))-9;
			if(ui.draggable.is("#"+tmp)){
				return true;
			}
		}

	});


	

});

function CreationPlateau(){
	var html = "<table class=plateau>";
	for(var i=0; i<10; i++){
		html += "<tr>";
		for(var j=0; j<10; j++){
			if((i+j)%2 == 0){
				html += "<td class=blanche id="+(i+j)+">";
			}else{
				html += "<td class=noire id="+(i+j)+">";
				if(i<4){
					html += "<img src=images/pion_blanc.png class=gangnam></td>";
				}else if(i>5){
					html += "<img src=images/pion_noir.png class=barbie></td>";
				}
				
			}
		}
		html += "</tr>";
	}
	html += "</table>";

	$("#plateau").append(html);
}

function Jouer(){
	if(tour == "J1"){
		$(".gangnam").draggable({
			grid: [62, 62],
			revert: "invalid",
			addClass: "drag",
			stop: function (e, ui) {
				if(ui.position.left !== ui.originalPosition.left && ui.position.top !== ui.originalPosition.top) {
					$(".gangnam").draggable('destroy');
					tour = "J2";
					afficheTour();
					Jouer();
				}
			}
		});
	}else{
		$(".barbie").draggable({
			grid: [62, 62],
			revert: "invalid",
			addClass: "drag",
			stop: function (e, ui) {
				if(ui.position.left !== ui.originalPosition.left && ui.position.top !== ui.originalPosition.top) {
					$(".barbie").draggable('destroy');
					tour = "J1";
					afficheTour();
					Jouer();
				}
			}
		});

	}
}

function afficheTour(){
	if(tour=="J1"){
		var html="C'est à Gangnam de jouer!";
	}else{
		var html="C'est à Barbie de jouer!";
	}
	$("#tour").html(html);
}