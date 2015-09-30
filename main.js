
// Create an empty data array to hold all the data points
var data = [];

// Get references to DOM elements
var dataForm = document.getElementById("data-form");
var scoreInput = dataForm.elements["score"];
var addDataButton = dataForm.elements["add-data"];

addDataButton.onclick = addData;

function addData() {
	var score = scoreInput.value;

	
	if ((score !== "") && (score >= 0) && (score <= 100)) {
		
		
		if (data.length === 10) {
			
			data.shift();
		}

		data.push(score);
		updateGraph();
	}

	return false;
}

// Function that takes the data in the array and uses it to update all the bars
// in the graph
function updateGraph() {
	for (var i = 0; i < data.length; i += 1) {
		var score = data[i]; 
		var currentBar = document.getElementById("bar-" + i);
		currentBar.style.height = 5 * score + "px";
		var barCaption = currentBar.firstElementChild;
		barCaption.textContent = score;
	}
}