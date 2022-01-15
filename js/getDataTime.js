const getDataTime = (dataTime) => {
    const date = new Date(dataTime * 1000).toLocaleString("es-AR",{
        timeStyle: "short",
        dateStyle: "medium"
    });

    const hour = new Date(dataTime * 1000).getHours();

    return {date, hour};
}

export default getDataTime;