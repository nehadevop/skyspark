// JavaScript source code

const search = document.getElementById("search");

search.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        console.log(search.value)
        fetch(`https://api.weatherapi.com/v1/current.json?key=df286c56ea5d4161b7775511233008&q=${search.value}&aqi=no`)
            .then(response => response.json())
            .then((data) => {
                console.log(data.location)
                const country = document.getElementById("country")
                const city  = document.getElementById("city")
                const temperature = document.getElementById("temperature")
                country.innerHTML = data.location.country
                city.innerHTML = data.location.name
                temperature.innerHTML = data.current.temp_c
                const card = document.getElementById('card').style = "display:block;"
                search.innerHTML=""


            })
        

    }
});
search.innerText = " "


    
