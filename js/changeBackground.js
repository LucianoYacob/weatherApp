const $container = document.getElementById("container");

const changeBackground = (hour) => {
    if(hour >= 6 && hour <= 19){
        $container.classList.replace("bg-img-night", "bg-img-day");
    }
    else{
        $container.classList.replace("bg-img-day", "bg-img-night");
    }

}

export default changeBackground;