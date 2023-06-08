// ================ { global variables for reference } ================== //
const temp = document.getElementById("temp"),
  date = document.getElementById("date-time"),
  condition = document.getElementById("condition"),
  rain = document.getElementById("rain"),
  mainIcon = document.getElementById("icon");
currentLocation = document.getElementById("location"),
  windSpeed = document.querySelector(".wind-speed"),
  pressure = document.querySelector(".pressure"),
  sunRise = document.querySelector(".sun-rise"),
  sunSet = document.querySelector(".sun-set"),
  humidity = document.querySelector(".humidity"),
  pressureStatus = document.querySelector(".pressure-status"),
  visibilty = document.querySelector(".visibilty"),
  humidityStatus = document.querySelector(".humidity-status"),
  airQuality = document.querySelector(".air-quality"),
  airQualityStatus = document.querySelector(".air-quality-status"),
  visibilityStatus = document.querySelector(".visibilty-status"),
  searchForm = document.querySelector("#search"),
  search = document.querySelector("#query"),
  celciusBtn = document.querySelector(".celcius"),
  fahrenheitBtn = document.querySelector(".fahrenheit"),
  tempUnit = document.querySelectorAll(".temp-unit"),
  hourlyBtn = document.querySelector(".hourly"),
  weekBtn = document.querySelector(".week"),
  weatherCards = document.querySelector("#weather-cards");

let currentCity = "";
let currentUnit = "c";
let hourlyorWeek = "week";

// ================ { get date and time } ================== //
function getDateTime() {
  let now = new Date();
  hour = now.getHours();
  minute = now.getMinutes();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  // ================ { dynamic day and time } ================== //
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  let ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12;
  let dayString = days[now.getDay()];
  return `${dayString}, ${hour}:${minute} ${ampm}`;
}

// ================ { dynamic date and time } ================== //
date.innerText = getDateTime();
setInterval(() => {
  date.innerText = getDateTime();
}, 1000);

// ================ { function to get public ip using ipinfo.io } ================== //
function getPublicIp() {
  fetch("https://ipinfo.io/json?token=6fb133d2b718e1", {
    method: "GET",
    headers: {},
  })
    .then((response) => response.json())
    .then((data) => {
      currentCity = data.city;
      getWeatherData(data.city, currentUnit, hourlyorWeek);
    })
    .catch((err) => {
      console.error(err);
    });
}
getPublicIp();

// ================ { function to get weather } ================== //
function getWeatherData(city, unit, hourlyorWeek) {
  // const apiKey = "3UX7T3ZEVQE5URAYQUM7WP8ZH";
  const apiKey_2 = "V2BL52V2FPR7ZVLVGNRH3VVSP";
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=${apiKey_2}&contentType=json`,
    {
      method: "GET",
      headers: {},
    }
  )
    .then((response) => response.json())
    .then((data) => {
      let today = data.currentConditions;
      if (unit === "c") {
        temp.innerText = today.temp;
      } else {
        temp.innerText = celciusToFahrenheit(today.temp);
      }
      currentLocation.innerText = data.resolvedAddress;
      condition.innerText = today.conditions;
      rain.innerText = "Perc - " + today.precip + "%";
      windSpeed.innerText = today.windspeed;
      pressure.innerText = today.pressure;
      updatePressureStatus(today.pressure);
      mainIcon.src = getIcon(today.icon);
      humidity.innerText = today.humidity + "%";
      updateHumidityStatus(today.humidity);
      visibilty.innerText = today.visibility;
      updateVisibiltyStatus(today.visibility);
      airQuality.innerText = today.winddir;
      updateAirQualityStatus(today.winddir);

      if (hourlyorWeek === "hourly") {
        updateForecast(data.days[0].hours, unit, "day");
      } else {
        updateForecast(data.days, unit, "week");
      }

      sunRise.innerText = covertTimeTo12HourFormat(today.sunrise);
      sunSet.innerText = covertTimeTo12HourFormat(today.sunset);
    })
    .catch((error) =>
      console.error("An error occurred:", error));
}

// ================ { function to update weather forecast } ================== //
function updateForecast(data, unit, type) {
  weatherCards.innerHTML = "";
  let day = 0;
  let numCards = 0;
  if (type === "day") {
    numCards = 24;
  } else {
    numCards = 7;
  }
  for (let i = 0; i < numCards; i++) {
    let card = document.createElement("div");
    card.classList.add("card");
    let dayName = getHour(data[day].datetime);
    if (type === "week") {
      dayName = getDayName(data[day].datetime);
    }
    let dayTemp = data[day].temp;
    if (unit === "f") {
      dayTemp = celciusToFahrenheit(data[day].temp);
    }
    let iconCondition = data[day].icon;
    let iconSrc = getIcon(iconCondition);
    let tempUnit = "°C";
    if (unit === "f") {
      tempUnit = "°F";
    }
    card.innerHTML = `
                <h2 class="day-name">${dayName}</h2>
            <div class="card-icon">
              <img src="${iconSrc}" class="day-icon" alt="" />
            </div>
            <div class="day-temp">
              <h2 class="temp">${dayTemp}</h2>
              <span class="temp-unit">${tempUnit}</span>
            </div>
  `;
    weatherCards.appendChild(card);
    day++;
  }
}

// ================ { function get data } ================== //
async function fetchAPIData() {
  // const url = "https://newsapi.org/v2/everything?q=weather&country=us&apiKey=${apiKey}";

  showSpinner();

  // const apiKey = "ecbfd1725be34758b06c79adaf8a85ef";
  // const apiKey = "2d27b969040914f83bf30e7959ad9349";
  // const apiKey = "41a85f1908d54684894de3165492a194";
  const response = await fetch(
    // "https://newsapi.org/v2/everything?q=weather&apiKey=41a85f1908d54684894de3165492a194",
    // "https://newsdata.io/api/1/news?apikey=pub_2405886988ac0363340bc1fb9e7cfdbb89493&q=weather,climate"
    // "https://gnews.io/api/v4/search?q=forecast&lang=en&country=us&max=10&apikey=e701311bc9b2249184c539cd496d8466"
  );

  const data = await response.json();
  console.log(data);

  hideSpinner();

  return data;
}

// ========== { utilities } ========== \\
function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}

function hideSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}

async function displayWeather() {
  try {
    // global.api.apiKeys = global.apiKey_8;
    // global.maxfetch = "10";
    fetchAPIData().then(function (data) {
      localarticles = data.articles;
      console.log(localarticles);

      localarticles.slice(20, 30).forEach((articles) => {
        const div = document.createElement("div");
        div.classList =
          "weather-card";

        div.innerHTML = `
                          <div class="overlay rounded-lg relative max-h-48 overflow-hidden">
                          
                          <a href="${articles.url}">
                            <img class="max-w-full w-full mx-auto" src="${articles.urlToImage}">
                          </a>

                          <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                            <h3 class="text-lg text-gray-800 font-bold leading-tight mb-2">
                              <a href="${articles.url}">${articles.title}</a>
                            </h3>     
                            <p class="text-base underline italic text-gray-800 font-bold leading-tight mb-2">
                              <a href="${articles.source.url}">${articles.source.name}</a>
                            </p>                         
                          </div>
                          </div>

            `;
        document.querySelector(".weather-news-card").appendChild(div);
      });

      localarticles.slice(0, 12).forEach((articles) => {
        const p = document.createElement("p");
        p.classList =
          "weather-list my-2 rounded-2xl border";

        p.innerHTML = `
                        
                          <a class="px-4 py-3 text-base block text-gray-100 hover hover:underline hover:text-gray-300" href="${articles.url}">
                            ${articles.title}
                          </a>
                        
                        
                        `;
        document.querySelector("#weather-news-list").appendChild(p);
      });
    });
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
// displayWeather();
// ================ { function to change weather icons } ================== //
function getIcon(condition) {
  if (condition === "partly-cloudy-day") {
    return "https://i.ibb.co/PZQXH8V/27.png";
  } else if (condition === "partly-cloudy-night") {
    return "https://i.ibb.co/Kzkk59k/15.png";
  } else if (condition === "rain") {
    return "https://i.ibb.co/kBd2NTS/39.png";
  } else if (condition === "clear-day") {
    return "https://i.ibb.co/rb4rrJL/26.png";
  } else if (condition === "clear-night") {
    return "https://i.ibb.co/1nxNGHL/10.png";
  } else {
    return "https://i.ibb.co/rb4rrJL/26.png";
  }
}


// ================ { get hours from hhmmss } ================== //
function getHour(time) {
  let hour = time.split(":")[0];
  let min = time.split(":")[1];
  if (hour > 12) {
    hour = hour - 12;
    return `${hour}:${min} PM`;
  } else {
    return `${hour}:${min} AM`;
  }
}

// ================ { for 12 hour format } ================== //
function covertTimeTo12HourFormat(time) {
  let hour = time.split(":")[0];
  let minute = time.split(":")[1];
  let ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12; // the hour '0' should be '12'
  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  let strTime = hour + ":" + minute + " " + ampm;
  return strTime;
}

// ================ { get day name from date } ================== //
function getDayName(date) {
  let day = new Date(date);
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return days[day.getDay()];
}

// ================ { function for pressure status } ================== //
function updatePressureStatus(pressure) {
  if (pressure < 1000) {
    pressureStatus.innerText = "Low";
  } else if (pressure <= 1013) {
    pressureStatus.innerText = "Moderate";
  } else {
    pressureStatus.innerText = "High";
  }
}

// ================ { function for humidity status } ================== //
function updateHumidityStatus(humidity) {
  if (humidity <= 30) {
    humidityStatus.innerText = "Low";
  } else if (humidity <= 60) {
    humidityStatus.innerText = "Moderate";
  } else {
    humidityStatus.innerText = "High";
  }
}

// ================ { function for visibility status } ================== //
function updateVisibiltyStatus(visibility) {
  if (visibility <= 0.03) {
    visibilityStatus.innerText = "Dense Fog";
  } else if (visibility <= 0.16) {
    visibilityStatus.innerText = "Moderate Fog";
  } else if (visibility <= 0.35) {
    visibilityStatus.innerText = "Light Fog";
  } else if (visibility <= 1.13) {
    visibilityStatus.innerText = "Very Light Fog";
  } else if (visibility <= 2.16) {
    visibilityStatus.innerText = "Light Mist";
  } else if (visibility <= 5.4) {
    visibilityStatus.innerText = "Very Light Mist";
  } else if (visibility <= 10.8) {
    visibilityStatus.innerText = "Clear Air";
  } else {
    visibilityStatus.innerText = "Very Clear Air";
  }
}

// ================ { function for airquality status } ================== //
function updateAirQualityStatus(airquality) {
  if (airquality <= 50) {
    airQualityStatus.innerText = "Good👌";
  } else if (airquality <= 100) {
    airQualityStatus.innerText = "Moderate😐";
  } else if (airquality <= 150) {
    airQualityStatus.innerText = "Unhealthy for Sensitive Groups😷";
  } else if (airquality <= 200) {
    airQualityStatus.innerText = "Unhealthy😷";
  } else if (airquality <= 250) {
    airQualityStatus.innerText = "Very Unhealthy😨";
  } else {
    airQualityStatus.innerText = "Hazardous😱";
  }
}

// ================ { function for search form } ================== //
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let location = search.value;
  if (location) {
    currentCity = location;
    getWeatherData(location, currentUnit, hourlyorWeek);
  }
  search.value = "";
});

// ================ { convert to fahrenheit } ================== //
function celciusToFahrenheit(temp) {
  return ((temp * 9) / 5 + 32).toFixed(1);
}

// ================ { event listener for changing unit } ================== //
fahrenheitBtn.addEventListener("click", () => {
  changeUnit("f");
});
celciusBtn.addEventListener("click", () => {
  changeUnit("c");
});

// ================ { function to change unit } ================== //
function changeUnit(unit) {
  if (currentUnit !== unit) {
    currentUnit = unit;
    tempUnit.forEach((elem) => {
      elem.innerText = `°${unit.toUpperCase()}`;
    });
    if (unit === "c") {
      celciusBtn.classList.add("active");
      fahrenheitBtn.classList.remove("active");
    } else {
      celciusBtn.classList.remove("active");
      fahrenheitBtn.classList.add("active");
    }
    getWeatherData(currentCity, currentUnit, hourlyorWeek);
  }
}

hourlyBtn.addEventListener("click", () => {
  changeTimeSpan("hourly");
});
weekBtn.addEventListener("click", () => {
  changeTimeSpan("week");
});


// ================ { function to change hourly to weekly or vice versa } ================== //
function changeTimeSpan(unit) {
  if (hourlyorWeek !== unit) {
    hourlyorWeek = unit;
    if (unit === "hourly") {
      hourlyBtn.classList.add("active");
      weekBtn.classList.remove("active");
    } else {
      hourlyBtn.classList.remove("active");
      weekBtn.classList.add("active");
    }
    getWeatherData(currentCity, currentUnit, hourlyorWeek);
  }
}