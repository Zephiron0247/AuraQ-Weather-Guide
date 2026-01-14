
const btn = document.getElementById("submitbtn");
const resultDiv = document.getElementById("result");

async function getWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`);
    const data = await response.json();
    return data;
}

async function getAQI(lat,lon) {
         const response = await fetch(`https://api.waqi.info/feed/geo:${lat};${lon}/?token=${API}`);
         const data = await response.json();
         return data;
}

async function getTime(lat,lon){
        const response = await fetch(`https://api.timezonedb.com/v2.1/get-time-zone?key=${API}&format=json&by=position&lat=${lat}&lng=${lon}`);
        const data = await response.json();
        return data;
}

btn.addEventListener("click", async (e) => {
 e.preventDefault();

 const city = document.getElementById("cityInput").value;
 const weatherData = await getWeather(city);

if(!weatherData.weather || !weatherData.weather[0]) {
  console.log("Weather data missing:", weatherData);
  return;
}

 const lat = weatherData.coord.lat;
 const lon = weatherData.coord.lon;

 const aqiData = await getAQI(lat,lon);
 const TimeData = await getTime(lat,lon);

 resultDiv.innerText = `${TimeData.formatted}\nTemp: ${weatherData.main.temp} C\nAQI : ${aqiData.data.aqi}`;
 
 const condition = weatherData.weather[0].main;
 console.log("Condition", condition);
 changeVideo(condition);


});

function changeVideo(condition) {
       const source = document.getElementById("boxSource");
       const video = document.getElementById("boxVideo");       
        
       let file = "vid1.mp4";
       if (condition === "Rain") file = "Rainy.mp4";
       else if (condition === "Clear") file = "Sun.mp4";
       else if (condition === "Thunderstorm") file = "Stormy.mp4";
       else if (condition === "Snow") file = "Snowy.mp4";
       else if (condition === "Drizzle") file = "Nightrain.mp4";
       else if (condition === "Clouds") file = "Windy.mp4"; 
      
       console.log("Loading Video:", file);
       source.src = file +"?v=" + new Date().getTime();
       video.load();
       video.currentTime = 0;
       video.play().catch(err => console.log("Play blocked:", err));
}

const resetBtn = document.getElementById("resetBtn");

resetBtn.addEventListener("click", (e) => {
     e.preventDefault();

     document.getElementById("cityInput").value="";
     
     resultDiv.innerText ="";

     const source = document.getElementById("boxSource");
     const video = document.getElementById("boxVideo");

     source.src = "vid1.mp4"
     video.load();
     video.play();
});
