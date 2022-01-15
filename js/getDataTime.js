const getDataTime = (date) => {
    const time = new Date(date * 1000).toLocaleString("es-AR",{
        timeStyle: "short",
        dateStyle: "medium"
    });

    return time;
}

export default getDataTime;