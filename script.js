// script.js

// Fetch the weather table element
const weatherTable = document.getElementById('weather-table');

// Fetch the filter elements
const filterTemperatureInput = document.getElementById('filter-temperature');
const filterLocationInput = document.getElementById('filter-location');
const filterConditionInput = document.getElementById('filter-condition');
const filterButton = document.getElementById('filter-button');

// Apply the filter when the button is clicked
filterButton.addEventListener('click', applyFilter);

// Function to apply the filter
function applyFilter() {
  const filterTemperature = filterTemperatureInput.value.toLowerCase();
  const filterLocation = filterLocationInput.value.toLowerCase();
  const filterCondition = filterConditionInput.value.toLowerCase();

  // Iterate through each row in the table
  const rows = weatherTable.getElementsByTagName('tr');
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];

    // Fetch the data cells in the row
    const cells = row.getElementsByTagName('td');
    if (cells.length === 3) {
      const temperature = cells[1].textContent.toLowerCase();
      const location = cells[0].textContent.toLowerCase();
      const condition = cells[2].textContent.toLowerCase();

      // Check if the row matches the filter criteria
      const temperatureMatch = temperature.includes(filterTemperature);
      const locationMatch = location.includes(filterLocation);
      const conditionMatch = condition.includes(filterCondition);

      // Show/hide the row based on the filter criteria
      if (temperatureMatch && locationMatch && conditionMatch) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    }
  }
}
