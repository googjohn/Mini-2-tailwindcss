// ========== { global } ========== \\
const global = {
  currentPage: window.location.pathname,
  search: {
    term: "",
    type: "",
    page: 1,
    totalPages: 1,
    totalResults: 0,
  },
  api: {
    // apiKey_1: "59933f0e365a71e63e8b2c9e38d08455",
    // apiKey_2: "bd6c2317d02803fb4cf4fa5deaff149c",
    // apiKey_3: "9167dae881545d7d1ebf42ac1186d6ae",
    // apiKey_4: "702589ec14e5977ff3ff15d3eb3a4b50",
    // apiKey_5: "0654717037bb66a37e42b59e8ade6a64",
    // apiKey_6: "2d27b969040914f83bf30e7959ad9349",
    // apiKey_7: "e701311bc9b2249184c539cd496d8466",
    // apiKey_8: "26fd80a7289d79b300b99af28392c8c7",
    // apiKey_9: "d7dfd99147ac538715d80f39a0277163",

    apiUrl: "https://gnews.io/api/v4/top-headlines?category=",
    // apiUrl: "https://gnews.io/api/v4/top-headlines?category=" + category + "&lang=en&country=us&max=10&apikey=" + apikey,
    // url: fetch("https://gnews.io/api/v4/top-headlines?category=sports&lang=en&country=us&max=10&apikey=2d27b969040914f83bf30e7959ad9349")
  },
};
global.apiKey_1 = "59933f0e365a71e63e8b2c9e38d08455";
global.apiKey_2 = "bd6c2317d02803fb4cf4fa5deaff149c";
global.apiKey_3 = "9167dae881545d7d1ebf42ac1186d6ae";
global.apiKey_4 = "702589ec14e5977ff3ff15d3eb3a4b50";
global.apiKey_5 = "0654717037bb66a37e42b59e8ade6a64";
global.apiKey_6 = "2d27b969040914f83bf30e7959ad9349";
global.apiKey_7 = "e701311bc9b2249184c539cd496d8466";
global.apiKey_8 = "26fd80a7289d79b300b99af28392c8c7";
global.apiKey_9 = "d7dfd99147ac538715d80f39a0277163";

// ========== { fetch data from gnews.io} ========== \\
async function fetchAPIData(endpoint) {
  const API_KEY = global.api.apiKeys;
  const API_URL = global.api.apiUrl;
  const MAX_FETCH = global.maxfetch;

  showSpinner();

  const response = await fetch(
    `${API_URL}${endpoint}&lang=en&country=us&max=${MAX_FETCH}&apikey=${API_KEY}`
  );

  const data = await response.json();
  console.log(data);

  hideSpinner();

  return data;
}

// ========== { display top headlines from gnews.io} ========== \\
// function displayCarouselNews() {
//   fetchAPIData("general");
// .then(data => {
//   const articles = data.articles;

//   // Create HTML code for each article
//   articles.forEach((article) => {
//     const articleElement = document.createElement('div');
//     articleElement.classList.add('overlay', 'duration-700', 'ease-in-out', 'hidden');
//     articleElement.setAttribute('data-carousel-item', "active");

//     articleElement.innerHTML = `
//       <a href="${article.url}">
//         <img class="max-w-full w-full h-auto" src="${article.urlToImage}" alt="">
//       </a>
//       <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
//         <a href="${article.url}">
//           <h2 class="text-3xl font-bold capitalize text-gray-200 mb-3">${article.title}</h2>
//         </a>
//         <p class="text-gray-200 hidden sm:inline-block">${article.description}</p>
//         <p class="text-gray-200 hidden sm:inline-block">${article.publishedAt.slice(0, 10)}</p>
//         <div class="pt-2">
//           <div class="text-gray-200">
//             <div class="inline-block h-3.5 border-l-4 border-red-600 mr-1"></div>
//             <span class="text-xl">${article.source.name}</span>
//           </div>
//         </div>
//       </div>
//     `;

//     document.querySelector("#headline-carousel .relative").appendChild(articleElement);
//   });
// })

// .then(function (data) {
//   trendarticles = data.articles;
//   console.log(trendarticles);

//   const div = document.createElement("div");
//   div.classList.add("overlay", "duration-700", "ease-in-out");
//   div.setAttribute("data-carousel-item", "active");

//   for (let i = 0; i < trendarticles.length; i++) {
//     const article = trendarticles[i];

//     div.innerHTML += `
//               <a href="${article.url}">
//               <img class="max-w-full w-full h-auto" src="${
//                 article.image
//               }" alt="">
//               </a>
//               <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
//                 <a href="${article.url}">
//                   <h2 class="text-3xl font-bold capitalize text-gray-200 mb-3">${
//                     article.title
//                   }</h2>
//                 </a>
//                 <p class="text-gray-200 hidden sm:inline-block">${
//                   article.description
//                 }</p>
//                 <p class="text-gray-200 hidden sm:inline-block">${article.publishedAt.slice(
//                   0,
//                   10
//                 )}</p>
//                 <div class="pt-2">
//                   <div class="text-gray-200">
//                     <div class="inline-block h-3.5 border-l-4 border-red-600 mr-1"></div>
//                     <span class="text-xl">Category</span>
//                   </div>
//                 </div>
//               </div>
//     `;
//   }

//   document.querySelector("#headline-carousel .relative").appendChild(div);
// });
// }
// displayCarouselNews();

// // ========== { display Business from gnews.io} ========== \\
// function displayBusinessNews() {
//   fetchAPIData("business")

//     .then(function (data) {
//       trendarticles = data.articles.slice(0, 4);
//       console.log(trendarticles);

//       const div = document.createElement('div');
//       div.classList.add('overlay', 'relative', 'hover-img', 'max-h-48', 'overflow-hidden');

//       for (let i = 0; i < trendarticles.length; i++) {
//         const article = trendarticles[i];

//         div.innerHTML += `
//         <a href="${article.url}">
//         <img class="max-w-full w-full mx-auto h-auto" src="${article.image}"
//           alt="Image description">
//       </a>
//       <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
//         <a href="${article.url}">
//           <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">${article.title}</h2>
//         </a>
//         <div class="pt-1">
//           <div class="text-gray-100">
//             <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Category
//           </div>
//         </div>
//       </div>
//         `;
//       }

//       document.querySelector('.business-news').appendChild(div);
//     });
// }

// // ========== { display TrendNews from gnews.io} ========== \\
async function displayTrendingNews() {
  try {
    global.api.apiKeys = global.apiKey_1;
    global.maxfetch = "6";
    fetchAPIData("general").then(function (data) {
      trendarticles = data.articles;
      console.log(trendarticles);

      trendarticles.forEach((articles) => {
        const div = document.createElement("div");
        div.classList =
          "flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100";

        div.innerHTML = `
                        <div class="flex-row sm:block hover-img">
                          <a href="${articles.url}">
                            <img class="max-w-full w-full mx-auto" src="${articles.image}" alt="alt title">
                          </a>
                          <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                            <h3 class="text-lg font-bold leading-tight mb-2">
                              <a href="${articles.url}">${articles.title}</a>
                            </h3>
                            <p class="hidden md:block text-gray-600 leading-tight mb-1">${articles.description}</p>
                            <a class="text-gray-500" href="#"><span
                                class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Category</span></a>
                          </div>
                          </div>
                        
            `;
        document.querySelector("#trend-news").appendChild(div);
      });
    });
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
// // ========== { display BusinessNews from gnews.io} ========== \\
async function displayBusinessNews() {
  try {
    global.api.apiKeys = global.apiKey_2;
    global.api.maxfetch = "6";
    fetchAPIData("business").then(function (data) {
      businessarticles = data.articles;
      // console.log(businessarticles);

      businessarticles.forEach((articles) => {
        const div = document.createElement("div");
        div.classList =
          "flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100";

        div.innerHTML = `
                        <div class="flex-row sm:block hover-img">
                          <a href="${articles.url}">
                            <img class="max-w-full w-full mx-auto" src="${articles.image}" alt="alt title">
                          </a>
                          <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                            <h3 class="text-lg font-bold leading-tight mb-2">
                              <a href="${articles.url}">${articles.title}</a>
                            </h3>
                            <p class="hidden md:block text-gray-600 leading-tight mb-1">${articles.description}</p>
                            <a class="text-gray-500" href="#"><span
                                class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Category</span></a>
                          </div>
                          </div>
                        
            `;
        document.querySelector("#business-news").appendChild(div);
      });
    });
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

// // ========== { display EntertainmentNews from gnews.io} ========== \\
async function displayEntertainmentNews() {
  try {
    global.api.apiKeys = global.apiKey_3;
    global.api.maxfetch = "6";
    fetchAPIData("entertainment").then(function (data) {
      entertainmentarticles = data.articles;
      // console.log(entertainmentarticles);

      entertainmentarticles.forEach((articles) => {
        const div = document.createElement("div");
        div.classList =
          "flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100";

        div.innerHTML = `
                        <div class="flex-row sm:block hover-img">
                          <a href="${articles.url}">
                            <img class="max-w-full w-full mx-auto" src="${articles.image}" alt="alt title">
                          </a>
                          <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                            <h3 class="text-lg font-bold leading-tight mb-2">
                              <a href="${articles.url}">${articles.title}</a>
                            </h3>
                            <p class="hidden md:block text-gray-600 leading-tight mb-1">${articles.description}</p>
                            <a class="text-gray-500" href="#"><span
                                class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Category</span></a>
                          </div>
                          </div>
                        
            `;
        document.querySelector("#entertainment-news").appendChild(div);
      });
    });
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

// // ========== { display EntertainmentNews from gnews.io} ========== \\
async function displaySportsNews() {
  try {
    global.api.apiKeys = global.apiKey_4;
    global.api.maxfetch = "6";
    fetchAPIData("sports").then(function (data) {
      sportsarticles = data.articles;
      // console.log(sportsarticles);

      sportsarticles.forEach((articles) => {
        const div = document.createElement("div");
        div.classList =
          "flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100";

        div.innerHTML = `
                        <div class="flex-row sm:block hover-img">
                          <a href="${articles.url}">
                            <img class="max-w-full w-full mx-auto" src="${articles.image}" alt="alt title">
                          </a>
                          <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                            <h3 class="text-lg font-bold leading-tight mb-2">
                              <a href="${articles.url}">${articles.title}</a>
                            </h3>
                            <p class="hidden md:block text-gray-600 leading-tight mb-1">${articles.description}</p>
                            <a class="text-gray-500" href="#"><span
                                class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Category</span></a>
                          </div>
                          </div>
                        
            `;
        document.querySelector("#sports-news").appendChild(div);
      });
    });
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

// // ========== { display EntertainmentNews from gnews.io} ========== \\
async function displayScienceNews() {
  try {
    global.api.apiKeys = global.apiKey_5;
    global.api.maxfetch = "6";
    fetchAPIData("science").then(function (data) {
      sciencearticles = data.articles;
      // console.log(sciencearticles);

      sciencearticles.forEach((articles) => {
        const div = document.createElement("div");
        div.classList =
          "flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100";

        div.innerHTML = `
                        <div class="flex-row sm:block hover-img">
                          <a href="${articles.url}">
                            <img class="max-w-full w-full mx-auto" src="${articles.image}" alt="alt title">
                          </a>
                          <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                            <h3 class="text-lg font-bold leading-tight mb-2">
                              <a href="${articles.url}">${articles.title}</a>
                            </h3>
                            <p class="hidden md:block text-gray-600 leading-tight mb-1">${articles.description}</p>
                            <a class="text-gray-500" href="#"><span
                                class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Category</span></a>
                          </div>
                          </div>
                        
            `;
        document.querySelector("#science-news").appendChild(div);
      });
    });
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

// // ========== { display EntertainmentNews from gnews.io} ========== \\
async function displayTechnologyNews() {
  try {
    global.api.apiKeys = global.apiKey_6;
    global.api.maxfetch = "6";
    fetchAPIData("technology").then(function (data) {
      technologyarticles = data.articles;
      // console.log(technologyarticles);

      technologyarticles.forEach((articles) => {
        const div = document.createElement("div");
        div.classList =
          "flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100";

        div.innerHTML = `
                        <div class="flex-row sm:block hover-img">
                          <a href="${articles.url}">
                            <img class="max-w-full w-full mx-auto" src="${articles.image}" alt="alt title">
                          </a>
                          <div class="py-0 sm:py-3 pl-3 sm:pl-0">
                            <h3 class="text-lg font-bold leading-tight mb-2">
                              <a href="${articles.url}">${articles.title}</a>
                            </h3>
                            <p class="hidden md:block text-gray-600 leading-tight mb-1">${articles.description}</p>
                            <a class="text-gray-500" href="#"><span
                                class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>Category</span></a>
                          </div>
                          </div>
                        
            `;
        document.querySelector("#technology-news").appendChild(div);
      });
    });
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

// ========== { back to top button } ========== \\
let btn = document.getElementById("back-to-top");
window.onscroll = () => {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

btn.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ========== { to display dynamic date } ========== \\
function getDateTime() {
  let now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  // display date today
  let dateToday =
    days[now.getDay()] +
    "," +
    " " +
    now.getDate() +
    " " +
    months[now.getMonth()];

  document.getElementById("date-today").innerHTML = dateToday;

  // display time now
  let ampm = hours >= 12 ? "pm" : "am";
  let timeNow = hours + ":" + minutes + ":" + seconds + " " + ampm;
  document.getElementById("time-now").innerHTML = timeNow;
}
setInterval(getDateTime, 1000);
// ========== { END display dynamic date } ========== \\

// ========== { sample weather } ========== \\
let weather = {
  apiKey: "5c2780f0e27163175249dc2144f8ca64",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText =
      "Wind speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
    document.body.style.backgroundImage =
      "url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search button").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Manila");
// ========== {  END sample weather } ========== \\

// ========== { utilities } ========== \\
function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}

function hideSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}

// const apiKey1 = "9167dae881545d7d1ebf42ac1186d6ae";
// const apiKey2 = "e701311bc9b2249184c539cd496d8466";
// const apiKey3 = "bd6c2317d02803fb4cf4fa5deaff149c";
// const apiKey4 = "26fd80a7289d79b300b99af28392c8c7";
// const apiKey5 = "d7dfd99147ac538715d80f39a0277163";

// // ========== { fetch and display data for local} ========== \\
// function displayLocalNews() {
//   url =
//     "https://gnews.io/api/v4/category=nation?country=ph&lang=en&max=5&apikey=" +
//     apiKey4;

//   fetch(url)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (data) {
//       console.log(data);
//       localarticles = data.articles;
//       const div = document.createElement("div");
//       div.classList.add("overlay", "relative", "hover-img", "max-h-48", "overflow-hidden");

//       div.slice(0, 3).innerHTML = `

//       <a href="${localarticles.url}">
//       <img class="max-w-full w-full mx-auto h-auto" src="${localarticles.image}"
//         alt="Image description">
//     </a>
//     <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
//       <a href="${localarticles.url}">
//         <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">${localarticles.description}</h2>
//       </a>
//       <div class="pt-1">
//         <div class="text-gray-100">
//           <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>${localarticles.publishedAt.slice(0, 10)}
//         </div>
//       </div>
//     </div>
//              `;
//       document.querySelector("local-news").appendChild(div);
//     });
// }

// async function displayDataInCarousel() {
//   const endpoint = 'your-endpoint-here';
//   const data = await fetchAPIData('business');

//   // Get the carousel wrapper element
//   const carouselWrapper = document.querySelector('.swiper-wrapper')
//   // document.querySelector('[data-carousel="slide"]');

//   // Loop through the data
//   for (const item of data) {
//     // Create a new carousel item
//     const carouselItem = document.createElement('div');
//     // carouselItem.classList.add('duration-700', 'ease-in-out');
//     // carouselItem.setAttribute('data-carousel-item', '');
//     carouselItem.classList.add('.swiper-slide')

//     // Set the innerHTML of the carousel item
//     // carouselItem.innerHTML = item.yourDesiredValue;
//     carouselItem.innerHTML += `
//                   <a href="${item.url}">
//                   <img class="max-w-full w-full h-auto" src="${item.image}" alt="">
//                   </a>
//                   <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
//                     <a href="${item.url}">
//                       <h2 class="text-3xl font-bold capitalize text-gray-200 mb-3">${item.title}</h2>
//                     </a>
//                     <p class="text-gray-200 hidden sm:inline-block">${item.description}</p>
//                     <p class="text-gray-200 hidden sm:inline-block">${item.publishedAt.slice(0, 10)}</p>
//                     <div class="pt-2">
//                       <div class="text-gray-200">
//                         <div class="inline-block h-3.5 border-l-4 border-red-600 mr-1"></div>
//                         <span class="text-xl">Category</span>
//                       </div>
//                     </div>
//                   </div>
//         `;

//     // Append the carousel item to the carousel wrapper
//     carouselWrapper.appendChild(carouselItem);
//     initSwiper();
//   }
// }
// displayDataInCarousel();

// swiper init
// function initSwiper() {
//   const swiper = new Swiper(".swiper", {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     freeMode: true,
//     loop: true,
//     autoplay: {
//       delay: 4000,
//       disableOnInteraction: false,
//     },
//     breakpoints: {
//       500: {
//         slidesPerView: 2,
//       },
//       700: {
//         slidesPerView: 3,
//       },
//       1200: {
//         slidesPerView: 4,
//       },
//     },
//   });
// }

function init() {
  switch (global.currentPage) {
    case "/":
    case "/src/index.html":
      // displayTrendingNews();
      // displayBusinessNews();
      // displayEntertainmentNews();
      // displaySportsNews();
      // displayScienceNews();
      // displayTechnologyNews();
      break;
    case "/business.html":
      // businesspage();
      break;
    case "/technology.html":
      // technologypage();
      break;
    case "/science.html":
      // sciencepage();
      break;
    case "/entertainment.html":
      // entertainmentpage();
      break;
    case "/sports.html":
      // sportspage();
      break;
    case "/health.html":
      // healthpage();
      break;
    case "/search.html":
      // searchpage();
      break;
  }
}

document.addEventListener("DOMContentLoaded", init);
