import displayWeatherData from "./displayWeatherData.js";

const getWeatherData = async (city) => {
    const res = await fetch(`https://community-open-weather-map.p.rapidapi.com/find?q=${city}&units=metric&lang=sp`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "9e92d93d2bmsh02cb2c0ac5a643cp113cc7jsnf52b1f2a823d",
            "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
        }
    });
    const data = await res.json();

    if(!res.ok){
        alert(`Hubo un error al realizar la consulta`);
        console.log(`Error ${data.cod}: ${data.message}`);
        return;
    }
    
    if(data.list[0]){
        //Cambiar la img de fondo de pantalla segun sea de dia o noche
        // displayBackgroundImage(data);

        //data es el obj q recuperamos de fetch
        //Mostrar los datos en pantalla
        displayWeatherData(data.list[0]);
    }
    else{
        alert("The selected location doesn't exist");
    }
}

export default getWeatherData;