const cityContainer = document.getElementById('city-container');
const errorMessage = document.getElementById('error-message');

// Sample city data
const cities = [
  {
    Name: "Mumbai",
    State: "Maharashtra",
    Region: "Western",
    is_capital: false
  },
  {
    Name: "Delhi",
    State: "Delhi",
    Region: "Northern",
    is_capital: true
  },
  {
    Name: "Bengaluru",
    State: "Karnataka",
    Region: "Southern",
    is_capital: true
  },
  {
    Name: "Kolkata",
    State: "West Bengal",
    Region: "Eastern",
    is_capital: true
  }
];

displayCities(cities);

function displayCities(cities) {
  cityContainer.innerHTML = ''; // Clear the city container before rendering new data

  for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    const cityCard = document.createElement('div');
    cityCard.classList.add('city-card');

    const cityName = document.createElement('h2');
    cityName.textContent = city.Name;

    const stateName = document.createElement('p');
    stateName.textContent = `State: ${city.State}`;

    const regionName = document.createElement('p');
    regionName.textContent = `Region: ${city.Region}`;

    const capitalStatus = document.createElement('p');
    capitalStatus.textContent = `Capital: ${city.is_capital ? 'Yes' : 'No'}`;

    cityCard.appendChild(cityName);
    cityCard.appendChild(stateName);
    cityCard.appendChild(regionName);
    cityCard.appendChild(capitalStatus);

    cityContainer.appendChild(cityCard);
  }
}