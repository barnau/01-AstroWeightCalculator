var planets = [
	{name: 'Sun', planetGravity: 27.9, prefix: 'the', pic: 'sun.png'},
	{name: 'Mercury', planetGravity: 0.377, prefix: '', pic: 'mercury.png'},
	{name: 'Venus', planetGravity: 0.9032, prefix: '', pic: 'venus.png'},
	{name: 'Earth', planetGravity: 1, prefix: '', pic: 'earth.png'},
	{name: 'Moon', planetGravity: 0.1655, prefix: 'the', pic: 'moon.png'},
	{name: 'Mars', planetGravity: 0.3895, prefix: '', pic: 'mars.png'},
	{name: 'Jupiter', planetGravity: 2.640, prefix: '', pic: 'jupiter.png'},
	{name: 'Saturn', planetGravity: 1.139, prefix: '', pic: 'saturn.png'},
	{name: 'Uranus', planetGravity: 0.917, prefix: '', pic: 'uranus.png'},
	{name: 'Neptune', planetGravity: 1.148, prefix: '', pic: 'neptune.png'},
	{name: 'Pluto', planetGravity: 0.06, prefix: '', pic: 'pluto.png'}

];

var optionHtml = "";

for(var i = 0; i < planets.length; i++) {
	optionHtml += "<option value ='" + planets[i].planetGravity + "'>" + planets[i].name + "</option>"
}

$("#planets").append(optionHtml);

$("#planets").change(calcAstroWeight);

function calcAstroWeight() {
	var weight = document.getElementById("weight").value;

	if(weight > 0) {
		var sel = document.getElementById("planets");

		var planetGravity = sel.options[sel.selectedIndex].value;
		var planetName = sel.options[sel.selectedIndex].text;
		var prefix = planets[sel.selectedIndex].prefix;
		var picture = "<img width='100px' src='pictures/" + planets[sel.selectedIndex].pic + "'></img>";

		

		$("#picBox").empty();
		$("#picBox").append(picture);

		var astroWeight = weight * planetGravity
		var answer = "You would weigh " + astroWeight + " if you were on " + prefix + " " + planetName + "." 
		document.getElementById("result").innerHTML = answer;
	} else {
		document.getElementById("result").innerHTML = "Please enter your weight.";
	}
	
}