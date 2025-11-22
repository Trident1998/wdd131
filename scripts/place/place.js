const temp = 5; // Celsius (<= 10 condition met)
const wind = 10; // km/h (> 4.8 condition met)

// 3. Calculate Wind Chill Function
function calculateWindChill(temperature, windSpeed) {
  // Metric Formula: 13.12 + 0.6215T - 11.37(V^0.16) + 0.3965T(V^0.16)
  return (
    13.12 +
    0.6215 * temperature -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temperature * Math.pow(windSpeed, 0.16)
  ).toFixed(1);
}

// 4. Logic to Display Wind Chill
const tempSpan = document.getElementById('temperature');
const windSpan = document.getElementById('wind');
const chillSpan = document.getElementById('chill');

tempSpan.textContent = temp;
windSpan.textContent = wind;

if (temp <= 10 && wind > 4.8) {
  chillSpan.textContent = `${calculateWindChill(temp, wind)} °C`;
} else {
  chillSpan.textContent = 'N/A';
}
