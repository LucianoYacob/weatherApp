//The free version of the api *** has a duration of 7 days (being this the version that is being used for this application), if the requests are not made when loading the page it is because of this, I recommend that you create one free account and get your own token. The only thing you will have to do so that the app obtains your exact location when loaded on your device is to change the default token for your token
//https://ipinfo.io/

const getAPILocation = async () => {
    try {
        // Change your token here (?token=********)
        const res = await fetch("https://ipinfo.io/json?token=36f2893b820ad9");
        const data = await res.json();
        
        if(!res.ok) throw {status: data.status, title: data.error.title, msg: data.error.message}

        return data.city;

    } catch (err) {
        const title = err.title || "Unknown error"
        const msg = err.msg || "Hubo un error al consultar su ubicacion en la API, intente mas tarde.";
        console.error(`Error ${title} '${err.title}': ${msg}.`);
    }
}

export default getAPILocation;