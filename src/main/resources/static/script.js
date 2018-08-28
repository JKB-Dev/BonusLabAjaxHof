/**
 * 
 */

var btn = document.getElementById("btn"); // get button from .jsp

var hallDiv = document.getElementById("info"); // refer to div on .jsp page to print data

var ourRequest = new XMLHttpRequest();

ourRequest.open("GET", "https://dwolverton.github.io/fe-demo/data/computer-science-hall-of-fame.json");
	
// makes gotten data sendable:
ourRequest.send();
ourRequest.onload = function(){
		
	var ourData = JSON.parse(ourRequest.responseText);
	
	//sort by year here?
		
	renderHTML(ourData);  // ---- ourData is unsorted
	};

function renderHTML(data) {	// data is a temp variable representing ourData from above
	for (var i = 0; i < data.complete.length; i++) {
		var htmlString = "<p>" + data.complete[i].firstName + " " + data.complete[i].lastName + 
		": " + data.complete[i].innovation + " in " + data.complete[i].year + "<p>";
		hallDiv.insertAdjacentHTML("beforeend", htmlString); // put HTML string before the end// "name" gets data from API
	}
	
}