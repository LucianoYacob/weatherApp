import getWeatherData from "./getWeatherData.js";

const $formSubmit = document.getElementById("search-submit");

window.addEventListener("load", () => {
    if("geolocation" in navigator){
        getWeatherData("Estados Unidos");
    }
    else{
        getWeatherData("Lujan");
    }
});

$formSubmit.addEventListener("submit", e => {
    e.preventDefault();
    if(e.target.searchInput.value === ""){
        alert("Please put a place");
    }
    else{
        getWeatherData(e.target.searchInput.value);
        e.target.searchInput.value = "";
    }
});