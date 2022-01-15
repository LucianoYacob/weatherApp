const d = document,
    $temperatureDegrees = d.getElementById("degree-number"),
    $weatherIcon = d.getElementById("weather-icon"),
    $tempDescription = d.getElementById("description"),
    $timeZone = d.getElementById("timezone"),
    $date = d.getElementById("date"),
    $minTemp = d.getElementById("min-temp"),
    $maxTemp = d.getElementById("max-temp");


const displayWeatherData = (data, date) => {
    $temperatureDegrees.textContent = Math.round(data.main.temp);
    $timeZone.textContent = data.name;
    const icon = data.weather[0].icon;
    $weatherIcon.setAttribute("src", `assets/icons/${icon}.png`);
    $date.textContent = `Ultima actualizacion del clima: ${date}.`;
    $minTemp.textContent = Math.round(data.main.temp_min);
    $maxTemp.textContent = Math.round(data.main.temp_max);
    $tempDescription.textContent = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
}


export default displayWeatherData;