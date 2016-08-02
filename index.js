var calcAstroWeight = function() {
	var weight = document.getElementById("weight").value;
	var sel = document.getElementById("planets");

	var planetGravity = sel.options[sel.selectedIndex].value;
	var planetName = sel.options[sel.selectedIndex].text;

	var astroWeight = weight * planetGravity
	var answer = "You would weigh " + astroWeight + " if you were on " + planetName + "." 
	document.getElementById("result").innerHTML = answer;
	
}