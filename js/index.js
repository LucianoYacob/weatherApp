import getAPILocation from "./getAPILocation.js";
import getWeatherData from "./getWeatherData.js";

const $formSubmit = document.getElementById("search-submit");

window.addEventListener("load", async () => {
    let city = await getAPILocation();
    if(city !== "" && city !== undefined) getWeatherData(city);
    else getWeatherData("new york");
});

$formSubmit.addEventListener("submit", e => {
    e.preventDefault();
    if(e.target.searchInput.value === ""){
        alert("Por favor digite un pais/provincia/estado o ciudad");
    }
    else{
        getWeatherData(e.target.searchInput.value);
        e.target.searchInput.value = "";
    }
});