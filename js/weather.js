const API_KEY = "914e79a1a3273c447ea4b2dce1734554";

function onGeoOK(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&lang=kr&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather span:first-child");
        const name = document.querySelector("#weather span:last-child");
        name.innerText = data.name;
        weather.innerText = `${data.weather[0].main} 온도 : ${data.main.temp}`;
    });
}

function onGeoError() {
    alert("I can't find you! ㅠㅠ");
}

navigator.geolocation.getCurrentPosition(onGeoOK,onGeoError);

