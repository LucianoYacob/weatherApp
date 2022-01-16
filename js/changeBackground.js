const $container = document.getElementById("container");

const changeBackground = (raining, hour) => {
    if(raining != null){
        console.log(raining);
        $container.classList.remove("bg-img-night", "bg-img-day");
        $container.classList.add("bg-img-rain");
    }
    else{
        if(hour >= 6 && hour <= 19){
            $container.classList.remove("bg-img-night", "bg-img-rain");
            $container.classList.add("bg-img-day");
        }
        else{
            $container.classList.remove("bg-img-day", "bg-img-rain");
            $container.classList.add("bg-img-night");
        }
    }

}

export default changeBackground;