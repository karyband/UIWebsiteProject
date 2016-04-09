//Javascript file for the Resume page index.html

//Set column 2 to be the same height as column 1

function columnHeight(){
	var heightC = $("#column-1").outerHeight();
	heightC+=10;
	$("#column-2").css("min-height",heightC);
}
columnHeight();

//Window resize listener to resize the columns
$(window).resize(function(){
  columnHeight();
});

/**Experience Onclick handlers, animates scrolling to its specific 
section and a temporary opacitiy change for easier user recognition**/
$("#digital-button").click(function() {
	$("#digital").animate({opacity: "0.3"}, 600);
	$("#digital").animate({opacity: "1"}, 600);
    $("html, body").animate({scrollTop: $("#digital").offset().top-60}, 1000); //Need to account for the navbar so -60 from the top
});

$("#computer-button").click(function() {
	$("#csc").animate({opacity: "0.3"}, 600);
	$("#csc").animate({opacity: "1"}, 600);
    $("html, body").animate({scrollTop: $("#csc").offset().top-60}, 1000); //Need to account for the navbar so -60 from the top
});

$("#other-button").click(function() {
	$("#other").animate({opacity: "0.3"}, 600);
	$("#other").animate({opacity: "1"}, 600);
    $("html, body").animate({scrollTop: $("#other").offset().top-60}, 1000); //Need to account for the navbar so -60 from the top
});