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
async function fetchAPIDataForLocal(endpoint) {
  const API_KEY = global.api.apiKeys;
  const API_URL = global.api.apiUrl;
  const MAX_FETCH = global.maxfetch;

  showSpinner();

  const response = await fetch(
    `${API_URL}${endpoint}&lang=en&country=ph&max=${MAX_FETCH}&apikey=${API_KEY}`
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

// // ========== { display carousel from gnews.io} ========== \\
// async function carouselNews() {
//   try {
//     global.api.apiKeys = global.apiKey_7;
//     global.maxfetch = "5";
//     fetchAPIData("general").then(function (data) {
//       carouselarticles = data.articles;
//       console.log(carouselarticles);

//       // carouselarticles.forEach((articles) => {
//       const div = document.createElement("div");
//       div.classList = "relative h-56 overflow-hidden md:h-96";

//       div.innerHTML = `
//                         <div class="overlay hidden duration-700 ease-linear" data-carousel-item="active">
//                     <a href="#"><img class="max-w-full w-full h-auto" src="${carouselarticles[0].image}" alt=""></a>
//                     <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
//                       <a href="#">
//                         <h2 class="text-3xl font-bold capitalize text-gray-200 mb-3">1Amazon Shoppers Are Ditching
//                           Designer Belts for This Best-Selling</h2>
//                       </a>
//                       <p class="text-gray-200 hidden sm:inline-block">This is a wider card with supporting text below as
//                         a natural lead-in to additional content.This very helpfull for generate default content..</p>
//                       <div class="pt-2">
//                         <div class="text-gray-200">
//                           <div class="inline-block h-3.5 border-l-4 border-red-600 mr-1"></div>
//                           <span class="text-xl">Category</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div class="overlay hidden duration-700 ease-linear" data-carousel-item>
//                     <a href="#"><img class="max-w-full w-full h-auto" src="${carouselarticles[1].image}" alt=""></a>
//                     <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
//                       <a href="#">
//                         <h2 class="text-3xl font-bold capitalize text-gray-200 mb-3">2Amazon Shoppers Are Ditching
//                           Designer Belts for This Best-Selling</h2>
//                       </a>
//                       <p class="text-gray-200 hidden sm:inline-block">This is a wider card with supporting text below as
//                         a natural lead-in to additional content.This very helpfull for generate default content..</p>
//                       <div class="pt-2">
//                         <div class="text-gray-200">
//                           <div class="inline-block h-3.5 border-l-4 border-red-600 mr-1"></div>
//                           <span class="text-xl">Category</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div class="overlay hidden duration-700 ease-linear" data-carousel-item>
//                     <a href="#"><img class="max-w-full w-full h-auto" src="${carouselarticles[2].image}" alt=""></a>
//                     <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
//                       <a href="#">
//                         <h2 class="text-3xl font-bold capitalize text-gray-200 mb-3">3Amazon Shoppers Are Ditching
//                           Designer Belts for This Best-Selling</h2>
//                       </a>
//                       <p class="text-gray-200 hidden sm:inline-block">This is a wider card with supporting text below as
//                         a natural lead-in to additional content.This very helpfull for generate default content..</p>
//                       <div class="pt-2">
//                         <div class="text-gray-200">
//                           <div class="inline-block h-3.5 border-l-4 border-red-600 mr-1"></div>
//                           <span class="text-xl">Category</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//             `;
//       document.querySelector("#headline-carousel").appendChild(div);
//       // });
//     });
//   } catch (error) {
//     console.error("An error occurred:", error.message);
//   }
// }


// // ========== { display local from gnews.io} ========== \\
async function displayLocalNews() {
  try {
    global.api.apiKeys = global.apiKey_8;
    global.maxfetch = "4";
    fetchAPIDataForLocal("local").then(function (data) {
      localarticles = data.articles.slice(0, 4);
      console.log(localarticles);

      localarticles.forEach((articles) => {
        const div = document.createElement("article");
        div.classList =
          "max-w-full w-full";

        div.innerHTML = `
        <div class="overlay relative hover-img max-h-48 overflow-hidden">
                
                  <a href="${articles.url}">
                    <img class="max-w-full w-full mx-auto h-auto" src="${articles.image}"
                      alt="Image description">
                  </a>
                  <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                    <a href="${articles.url}">
                      <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">${articles.title}</h2>
                    </a>
                  </div>
                </div>
                        
            `;
        document.querySelector("#local-news").appendChild(div);
      });
    });
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

// // ========== { display TrendNews from gnews.io} ========== \\
async function displayTrendingNews() {
  try {
    global.api.apiKeys = global.apiKey_9;
    global.maxfetch = "3";
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
                            <p class="hidden md:block text-gray-600 leading-tight mb-1">${articles.description.slice(0, 100)}...</p>
                            <span
                                class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>${articles.publishedAt.slice(0, 10)}</span>
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
    global.api.maxfetch = "3";
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
                            <p class="hidden md:block text-gray-600 leading-tight mb-1">${articles.description.slice(0, 100)}...</p>
                            <span
                                class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>${articles.publishedAt.slice(0, 10)}</span>
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
    global.api.maxfetch = "3";
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
                            <p class="hidden md:block text-gray-600 leading-tight mb-1">${articles.description.slice(0, 100)}...</p>
                            <span
                                class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>${articles.publishedAt.slice(0, 10)}</span>
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
    global.api.maxfetch = "3";
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
                            <p class="hidden md:block text-gray-600 leading-tight mb-1">${articles.description.slice(0, 100)}...</p>
                            <span
                                class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>${articles.publishedAt.slice(0, 10)}</span>
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
    global.api.maxfetch = "3";
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
                            <p class="hidden md:block text-gray-600 leading-tight mb-1">${articles.description.slice(0, 100)}...</p>
                            <span
                                class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>${articles.publishedAt.slice(0, 10)}</span>
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
    global.api.maxfetch = "3";
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
                            <p class="hidden md:block text-gray-600 leading-tight mb-1">${articles.description.slice(0, 100)}...</p>
                            <span
                                class="inline-block h-3 border-l-2 border-red-600 mr-2"></span>${articles.publishedAt.slice(0, 10)}</span>
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

// ========== { function to categorize} ========== \\



// // ========== { display FOREX from FastForex} ========== \\
async function displayForex() {
  try {
    //getting the date -1 ====================================================
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 1);
    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");
    const formattedDate = `${year}-${month}-${day}`;
    console.log(formattedDate);
    //==========================================================================
    const url =
      "https://api.fastforex.io/fetch-multi?api_key=8194ba7ae9-2d79e8ed0d-rvpsqg&from=USD&to=PHP,EUR,AUD,AED,NZD,CNY,HKD,JPY,KRW,CAD";
    const url2 =
      "https://api.fastforex.io/historical?date=" +
      formattedDate +
      "&api_key=8194ba7ae9-2d79e8ed0d-rvpsqg&from=USD&to=PHP,EUR,AUD,AED,NZD,CNY,HKD,JPY,KRW,CAD";
    // current exchange ======================================================
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    // yesterday exchange
    const response2 = await fetch(url2);
    const data2 = await response2.json();
    console.log(data2);

    //condition if rise or fel
    //PHP
    if (data.results.PHP >= data2.results.PHP) {
      PHP = "text-up";
    } else {
      PHP = "text-down";
    }
    //EUR
    if (data.results.EUR >= data2.results.EUR) {
      EUR = "text-up";
    } else {
      EUR = "text-down";
    }
    //AUD
    if (data.results.AUD >= data2.results.AUD) {
      AUD = "text-up";
    } else {
      AUD = "text-down";
    }
    //AED
    if (data.results.AED >= data2.results.AED) {
      AED = "text-up";
    } else {
      AED = "text-down";
    }
    //NZD
    if (data.results.NZD >= data2.results.NZD) {
      NZD = "text-up";
    } else {
      NZD = "text-down";
    }
    //CNY
    if (data.results.CNY >= data2.results.CNY) {
      CNY = "text-up";
    } else {
      CNY = "text-down";
    }
    //HKD
    if (data.results.HKD >= data2.results.HKD) {
      HKD = "text-up";
    } else {
      HKD = "text-down";
    }
    //JPY
    if (data.results.JPY >= data2.results.JPY) {
      JPY = "text-up";
    } else {
      JPY = "text-down";
    }
    //KRW
    if (data.results.KRW >= data2.results.KRW) {
      KRW = "text-up";
    } else {
      KRW = "text-down";
    }
    //CAD
    if (data.results.CAD >= data2.results.CAD) {
      CAD = "text-up";
    } else {
      CAD = "text-down";
    }

    const div = document.createElement("div");
    div.classList = "bg-gray-200 rounded-lg shadow-lg";

    div.innerHTML = `
    <div class="p-6">
          <h5 class="text-xl ${PHP} mb-2"><span class="fi fi-ph"></span><span class="colored-colon"> : </span> ${data.results.PHP} PHP </h5>
        </div>
        <div class="p-6">
          <h5 class="text-xl ${EUR} mb-2"><span class="fi fi-eu"></span><span class="colored-colon"> : </span> ${data.results.EUR} EUR </h5>
        </div>
        <div class="p-6">
          <h5 class="text-xl ${AUD} mb-2"><span class="fi fi-au"></span><span class="colored-colon"> : </span> ${data.results.AUD} AUD </h5>
        </div>
        <div class="p-6">
          <h5 class="text-xl ${AED} mb-2"><span class="fi fi-ae"></span><span class="colored-colon"> : </span> ${data.results.AED} AED </h5>
        </div>
        <div class="p-6">
          <h5 class="text-xl ${NZD} mb-2"><span class="fi fi-nz"></span><span class="colored-colon"> : </span> ${data.results.NZD} NZD </h5>
        </div>
        <div class="p-6">
          <h5 class="text-xl ${CNY} mb-2"><span class="fi fi-cn"></span><span class="colored-colon"> : </span> ${data.results.CNY} CNY </h5>
        </div>
        <div class="p-6">
          <h5 class="text-xl ${HKD} mb-2"><span class="fi fi-hk"></span><span class="colored-colon"> : </span> ${data.results.HKD} HKD </h5>
        </div>
        <div class="p-6">
          <h5 class="text-xl ${JPY} mb-2"><span class="fi fi-jp"></span><span class="colored-colon"> : </span> ${data.results.JPY} JPY </h5>
        </div>
        <div class="p-6">
          <h5 class="text-xl ${KRW} mb-2"><span class="fi fi-kr"></span><span class="colored-colon"> : </span> ${data.results.KRW} KRW </h5>
        </div>
        <div class="p-6">
          <h5 class="text-xl ${CAD} mb-2"><span class="fi fi-ca"></span><span class="colored-colon"> : </span> ${data.results.CAD} CAD </h5>
        </div>
    `;
    document.querySelector("#forex").appendChild(div);
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
function getDayTime() {
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
  let ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12;
  hour = hour ? hour : 12;
  let timeNow = hours + ":" + minutes + ":" + seconds + " " + ampm;
  document.getElementById("time-now").innerHTML = timeNow;
}
setInterval(getDayTime, 1000);
// ========== { END display dynamic date } ========== \\

// // ========== { sample weather } ========== \\
// let weather = {
//   apiKey: "5c2780f0e27163175249dc2144f8ca64",
//   fetchWeather: function (city) {
//     fetch(
//       "https://api.openweathermap.org/data/2.5/weather?q=" +
//       city +
//       "&units=metric&appid=" +
//       this.apiKey
//     )
//       .then((response) => {
//         if (!response.ok) {
//           alert("No weather found.");
//           throw new Error("No weather found.");
//         }
//         return response.json();
//       })
//       .then((data) => this.displayWeather(data));
//   },
//   displayWeather: function (data) {
//     const { name } = data;
//     const { icon, description } = data.weather[0];
//     const { temp, humidity } = data.main;
//     const { speed } = data.wind;
//     document.querySelector(".city").innerText = "Weather in " + name;
//     document.querySelector(".icon").src =
//       "https://openweathermap.org/img/wn/" + icon + ".png";
//     document.querySelector(".description").innerText = description;
//     document.querySelector(".temp").innerText = temp + "°C";
//     document.querySelector(".humidity").innerText =
//       "Humidity: " + humidity + "%";
//     document.querySelector(".wind").innerText =
//       "Wind speed: " + speed + " km/h";
//     document.querySelector(".weather").classList.remove("loading");
//     document.body.style.backgroundImage =
//       "url('https://source.unsplash.com/1600x900/?" + name + "')";
//   },
//   search: function () {
//     this.fetchWeather(document.querySelector(".search-bar").value);
//   },
// };

// document.querySelector(".search button").addEventListener("click", function () {
//   weather.search();
// });

// document
//   .querySelector(".search-bar")
//   .addEventListener("keyup", function (event) {
//     if (event.key == "Enter") {
//       weather.search();
//     }
//   });

// weather.fetchWeather("Manila");
// // ========== {  END sample weather } ========== \\

// ========== { utilities } ========== \\
function showSpinner() {
  document.querySelector(".spinner-overlay").classList.add("show");
}

function hideSpinner() {
  document.querySelector(".spinner-overlay").classList.remove("show");
}


// ========== { Initialize functions } ========== \\
function init() {
  switch (global.currentPage) {
    case "/":
    case "/src/index.html":
      // carouselNews();
      displayLocalNews();
      displayTrendingNews();
      displayBusinessNews();
      displayEntertainmentNews();
      displaySportsNews();
      displayScienceNews();
      displayTechnologyNews();
      displayForex();
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

// ================ { function button to see weather full forecast  } ================== //

// // Get a reference to the button element
// const seeForecast = document.getElementById("forecast-full-btn");

// // Add a click event listener to the button
// seeForecast.addEventListener("click", function () {
//   // Redirect to the weather page
//   // window.location.href = "weather.html";
//   window.open("weather.html", "_blank");
// });
const seeForecast = document.getElementById("forecast-full-btn");

seeForecast.addEventListener("click", function () {
  // Open the weather page in a new tab or window
  const newWindow = window.open("weather.html");
  if (newWindow) {
    newWindow.focus();
  } else {
    // Pop-up blocked, fallback to opening in the current tab
    window.location.href = "weather.html";
  }
});


document.addEventListener("DOMContentLoaded", init);

//////////////////////////////////////========== weather ========\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// ================ { global variables for reference } ================== //
function weather() {
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
      .catch((err) => {
        console.log("error", err);
      });
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
  async function fetchAPIData(endpoint) {
    // const url = "https://newsapi.org/v2/everything?q=weather&country=us&apiKey=${apiKey}";

    showSpinner();

    // const apiKey = "ecbfd1725be34758b06c79adaf8a85ef";
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=weather&apiKey=ecbfd1725be34758b06c79adaf8a85ef`
    );

    const data = await response.json();
    console.log(data);

    hideSpinner();

    return data;
  }

  // ================ { function to change weather icons } ================== //
  async function getWeatherData() {
    // const apiKey = "https://newsapi.org/v2/top-headlines?country=us&apiKey=ecbfd1725be34758b06c79adaf8a85ef"
    // const apiKey = "sMayN3GIT80P9piiu8hsCbKViMmuNrQIDpknv5m5";
    try {
      fetchAPIData('weather')
        .then((data) => {
          const weatherNews = data.articles;
          console.log(weatherNews);

          weatherNews.forEach((article) => {
            const ul = document.createElement('ul');
            ul.classList = "weather-news-list";
            ul.innerHTML = `
        <li><a href="${article.url}">${article.title}</a>

        </li>`;
            weatherNews.querySelector('#weather-news').appendChild(ul);
          })
        });
    } catch (error) {
      console.error("An error occurred:", error.message);

    }
  }
  getWeatherData();

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
    let ampm = hour >= 12 ? "pm" : "am";
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
}
// weather();

