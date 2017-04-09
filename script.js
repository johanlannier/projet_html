var tour = "J1";

$(document).ready(function(){

	CreationPlateau();
	Prevision();
	Jouer();
	afficheTour();
	
	$("td").droppable({
		accept: function(event, ui, $pion){
			var tmp = parseInt($pion.attr("id"));
			return false;
		},
		drop: function(event, ui){
			return true;
		}

	});

	

});

function CreationPlateau(){
	var html = "<table class=plateau>";
	for(var i=0; i<10; i++){
		html += "<tr>";
		for(var j=0; j<10; j++){
			if((i+j)%2 == 0){
				html += "<td class=blanche id="+(i*10+j+1)+">";
			}else{
				html += "<td class=noire id="+(i*10+j+1)+">";
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

function ModifierTour(){
	if(tour == "J1"){
		tour = "J2";
		afficheTour();
		Jouer();
	}else{
		tour = "J1";
		afficheTour();
		Jouer();
	}
	
}

function Jouer(){
	if(tour == "J1"){
		$(".gangnam").draggable({
			grid: [62, 62],
			revert: "invalid",
			stop: function (e, ui) {
				if(ui.position.left !== ui.originalPosition.left && ui.position.top !== ui.originalPosition.top) {
					$(".gangnam").draggable('destroy');
					ModifierTour();
				}
			}
		});

		
	}else{
		$(".barbie").draggable({
			grid: [62, 62],
			revert: "invalid",
			stop: function (e, ui) {
				if(ui.position.left !== ui.originalPosition.left && ui.position.top !== ui.originalPosition.top) {
					$(".barbie").draggable('destroy');
					ModifierTour();
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


function Prevision(){
	$(".barbie").mouseover(function(){
		var id = $(this).parent().attr("id");
		if((id-1)%10 != 0){
			$("#"+(parseInt(id)-11)).css("background","red");
		}
		if(id%10 != 0){
			$("#"+(parseInt(id)-9)).css("background","red");
		}
	});

	$(".barbie").mouseout(function(){
		var id = $(this).parent().attr("id");
		if((id-1)%10 != 0){
			$("#"+(parseInt(id)-11)).css("background","black");
		}
		if(id%10 != 0){
			$("#"+(parseInt(id)-9)).css("background","black");
		}
	});



	$(".gangnam").mouseover(function(){
		var id = $(this).parent().attr("id");
		if(id%10 != 0){
			$("#"+(parseInt(id)+11)).css("background","red");
		}
		if((id+1)%11 != 0){
			$("#"+(parseInt(id)+9)).css("background","red");
		}
	});

	$(".gangnam").mouseout(function(){
		var id = $(this).parent().attr("id");
		if(id%10 != 0){
			$("#"+(parseInt(id)+11)).css("background","black");
		}
		if((id+1)%11 != 0){
			$("#"+(parseInt(id)+9)).css("background","black");
		}
	});
}