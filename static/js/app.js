// from data.js
var tableData = data;
console.log(tableData)
var tbody = d3.select("tbody");
// YOUR CODE HERE!

// select the submit buttom
function buildTable(ufoData) {
    tbody.html("");

    ufoData.forEach(function(dataRow) {

        console.log(dataRow) ;
   
        var row = tbody.append("tr");

        Object.entries(dataRow).forEach(function([key, value]) {
            console.log(key, value);
    

            var cell = row.append("td");
    
 
            cell.text(value);
        })
    })
}

buildTable(tableData);

// Using d3 to read the filter button
d3.select("#filter-btn").on("click", handleClick);

// function to handle the click and perform the filtering
function handleClick() {
    d3.event.preventDefault();
    var date = d3.select("#datetime").property("value");
    console.log(date);
    var filteredData = tableData;
    if (date) {
        filteredData = filteredData.filter(data => data.datetime === date);
    }
    buildTable(filteredData);
}