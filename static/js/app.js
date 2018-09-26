// Get references to the tbody element, input field and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#dateInput");
var $cityInput = document.querySelector("#cityInput");
var $stateInput = document.querySelector("#stateInput");
var $countryInput = document.querySelector("#countryInput");
var $shapeInput = document.querySelector("#shapeInput");
var submitButton = document.querySelector("#submit");



// Set UFO sightings to dataset
var tableData = data;



// 
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    // get fields from a ufo sighting
    var ufoSighting = tableData[i];
    var fields = Object.keys(ufoSighting);
    // create row in table for every ufo sighting
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // create cell in row for each field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufoSighting[field];
    }
  }
}



// add an event listener to the Submit Button
submitButton.addEventListener("click", filterInput);

function filterDate(filteredSighting) {
  return filteredSighting.datetime == $dateInput.value.trim().toLowerCase();
};

function filterCity(filteredSighting) {
  return filteredSighting.city == $cityInput.value.trim().toLowerCase();
};

function filterState(filteredSighting) {
  return filteredSighting.state == $stateInput.value.trim().toLowerCase();
};

function filterCountry(filteredSighting) {
  return filteredSighting.country == $countryInput.value.trim().toLowerCase();
};

function filterShape(filteredSighting) {
  return filteredSighting.shape == $shapeInput.value.trim().toLowerCase();
};

function filterInput() {

  // reseting data set 
  tableData = data;

  // filters
  if ($dateInput.value) {
    tableData = tableData.filter(filterDate);
  };

  if ($cityInput.value) {
    tableData = tableData.filter(filterCity);
  };

  if ($stateInput.value) {
    tableData = tableData.filter(filterState);
  };

  if ($countryInput.value) {
    tableData = tableData.filter(filterCountry);
  };

  if ($shapeInput.value) {
    tableData = tableData.filter(filterShape);
  };
  $dateInput.value = "";
  $cityInput.value = "";
  $stateInput.value = "";
  $countryInput.value = "";
  $shapeInput.value = "";

  renderTable();
};


renderTable();

