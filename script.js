const apiKey = "60096dccfb8df2f82067d2bbe4301c57";

const cityInput =
document.getElementById("cityInput");

const searchBtn =
document.getElementById("searchBtn");

async function getWeather(city){

try{

const response = await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
);

if(!response.ok){
throw new Error("City not found");
}

const data = await response.json();

document.getElementById("city").textContent =
`${data.name}, ${data.sys.country}`;

document.getElementById("temperature").textContent =
`🌡 Temperature: ${data.main.temp} °C`;

document.getElementById("humidity").textContent =
`💧 Humidity: ${data.main.humidity}%`;

document.getElementById("wind").textContent =
`🌬 Wind Speed: ${data.wind.speed} m/s`;

document.getElementById("description").textContent =
`☁ Weather: ${data.weather[0].description}`;

}
catch(error){

alert(error.message);

}
}

searchBtn.addEventListener("click",()=>{

const city = cityInput.value.trim();

if(city===""){
alert("Enter a city name");
return;
}

getWeather(city);

});
