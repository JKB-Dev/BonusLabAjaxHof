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
	
	renderHTML(ourData);  // ---- ourData is unsorted
//	sortResults(ourData.year, true);
//	};
//
//	function sortResults(year, asc) {
//	    sortData = sortData.sort(function(a, b) {
//	        if (asc) {
//	            return (a[year] > b[year]) ? 1 : ((a[year] < b[year]) ? -1 : 0);
//	        } else {
//	            return (b[year] > a[year]) ? 1 : ((b[year] < a[year]) ? -1 : 0);
//	        }
//	    });
//	    renderHTML(sortData);
	}
	
function renderHTML(data) {	// data is a temp variable representing ourData from above
	
	for (var i = 0; i < data.complete.length; i++) {
		var htmlString = "<p>" + data.complete[i].firstName + " " + data.complete[i].lastName + 
		": " + data.complete[i].innovation + " in " + data.complete[i].year + "<p>";
		hallDiv.insertAdjacentHTML("beforeend", htmlString);
	}
	
	for (var i = 0; i < data.tiny.length; i++) {
		var htmlString = "<p>" + data.tiny[i].name + ": " + data.tiny[i].invented + " in " + data.tiny[i].year + "<p>";
		hallDiv.insertAdjacentHTML("beforeend", htmlString);
	}
}