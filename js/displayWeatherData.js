import getDataTime from "./getDataTime.js";

const d = document;
const $temperatureDegrees = document.getElementById("degree-number"),
    $weatherIcon = document.getElementById("weather-icon"),
    $tempDescription = document.getElementById("description"),
    $timeZone = document.getElementById("timezone"),
    $date = document.getElementById("date"),
    $minTemp = document.getElementById("min-temp"),
    $maxTemp = document.getElementById("max-temp");


const displayWeatherData = data => {
    $temperatureDegrees.textContent = Math.round(data.main.temp);
    $timeZone.textContent = data.name;
    const icon = data.weather[0].icon;
    $weatherIcon.setAttribute("src", `assets/icons/${icon}.png`);
    $date.textContent = `Ultima actualizacion del clima: ${getDataTime(data.dt)}.`;
    $minTemp.textContent = Math.round(data.main.temp_min);
    $maxTemp.textContent = Math.round(data.main.temp_max);
    $tempDescription.textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);

}


export default displayWeatherData;