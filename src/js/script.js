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
global.apiKey_10 = "1321923f82f3680d72f02d2147d154b6";

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

// ========== { carousel news} ========== \\
async function carouselNews() {
  try {
    global.api.apiKeys = global.apiKey_1;
    global.maxfetch = "10";
    fetchAPIData("general").then(function (data) {
      carouselarticles = data.articles;
      console.log(carouselarticles);
      const div1 = document.createElement("div");
      const div2 = document.createElement("div");
      const div3 = document.createElement("div");
      // const div4 = document.createElement("div");
      div1.innerHTML = `
                  <a href="${carouselarticles[0].url}"><img class="max-w-full w-full h-full" src="${carouselarticles[0].image}" alt=""></a>
                    <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                      <a href="${carouselarticles[0].url}">
                        <h2 class="text-3xl font-bold capitalize text-gray-200 mb-3">${carouselarticles[0].title}</h2>
                      </a>
                      <p class="text-gray-200 hidden sm:inline-block">${carouselarticles[0].description}</p>
                      <div class="pt-2">
                        <div class="text-gray-200">
                          <div class="inline-block h-3.5 border-l-4 border-red-600 mr-1"></div>
                          <span class="text-xl">${carouselarticles[0].publishedAt.slice(0, 10)}</span>
                        </div>
                      </div>
                    </div>
                  `;
      div2.innerHTML = `
                  <a href="${carouselarticles[1].url}"><img class="max-w-full w-full h-auto" src="${carouselarticles[1].image}" alt=""></a>
                    <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                      <a href="${carouselarticles[1].url}">
                        <h2 class="text-3xl font-bold capitalize text-gray-200 mb-3">${carouselarticles[1].title}</h2>
                      </a>
                      <p class="text-gray-200 hidden sm:inline-block">${carouselarticles[1].description}</p>
                      <div class="pt-2">
                        <div class="text-gray-200">
                          <div class="inline-block h-3.5 border-l-4 border-red-600 mr-1"></div>
                          <span class="text-xl">${carouselarticles[0].publishedAt.slice(0, 10)}</span>
                        </div>
                      </div>
                    </div>
                  `;
      div3.innerHTML = `
                  <a href="${carouselarticles[2].url}"><img class="max-w-full w-full h-auto" src="${carouselarticles[2].image}" alt=""></a>
                    <div class="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                      <a href="${carouselarticles[2].url}">
                        <h2 class="text-3xl font-bold capitalize text-gray-200 mb-3">${carouselarticles[2].title}</h2>
                      </a>
                      <p class="text-gray-200 hidden sm:inline-block">${carouselarticles[2].description}</p>
                      <div class="pt-2">
                        <div class="text-gray-200">
                          <div class="inline-block h-3.5 italic border-l-4 border-red-600 mr-1"></div>
                          <span class="text-xl">${carouselarticles[2].publishedAt.slice(0, 10)}</span>
                        </div>
                      </div>
                    </div>
                  `;

      // div4.classList =
      //   "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 grid-rows-2 gap-1";
      // div4.innerHTML = `
      // <article class="business-news max-w-full w-full">
      //           <div class="overlay relative hover-img max-h-48 overflow-hidden">
      //             <a href="${carouselarticles[3].url}">
      //               <img class="max-w-full w-full mx-auto h-auto" src="${carouselarticles[3].image}"
      //                 alt="Image description">
      //             </a>
      //             <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
      //               <a href="${carouselarticles[3].url}">
      //                 <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">${carouselarticles[3].title}</h2>
      //               </a>
      //               <div class="pt-1">
      //                 <div class="text-gray-100">
      //                   <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Techno
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //         </article>
      // <article class="business-news max-w-full w-full">
      //           <div class="overlay relative hover-img max-h-48 overflow-hidden">
      //             <a href="${carouselarticles[4].url}">
      //               <img class="max-w-full w-full mx-auto h-auto" src="${carouselarticles[4].image}"
      //                 alt="Image description">
      //             </a>
      //             <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
      //               <a href="${carouselarticles[4].url}">
      //                 <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">${carouselarticles[4].title}</h2>
      //               </a>
      //               <div class="pt-1">
      //                 <div class="text-gray-100">
      //                   <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Techno
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //   </article>
      //         <article class="business-news max-w-full w-full">
      //           <div class="overlay relative hover-img max-h-48 overflow-hidden">
      //             <a href="${carouselarticles[5].url}">
      //               <img class="max-w-full w-full mx-auto h-auto" src="${carouselarticles[5].image}"
      //                 alt="Image description">
      //             </a>
      //             <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
      //               <a href="${carouselarticles[5].url}">
      //                 <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">${carouselarticles[5].title}</h2>
      //               </a>
      //               <div class="pt-1">
      //                 <div class="text-gray-100">
      //                   <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Techno
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      //   </article>
      //         <article class="business-news max-w-full w-full">
      //           <div class="overlay relative hover-img max-h-48 overflow-hidden">
      //             <a href="${carouselarticles[6].url}">
      //               <img class="max-w-full w-full mx-auto h-auto" src="${carouselarticles[6].image}"
      //                 alt="Image description">
      //             </a>
      //             <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
      //               <a href="${carouselarticles[6].url}">
      //                 <h2 class="text-lg font-bold capitalize leading-tight text-white mb-1">${carouselarticles[6].title}</h2>
      //               </a>
      //               <div class="pt-1">
      //                 <div class="text-gray-100">
      //                   <div class="inline-block h-3 border-l-2 border-red-600 mr-2"></div>Techno
      //                 </div>
      //               </div>
      //             </div>
      //           </div>
      // </article>
      // `;
      document.querySelector("#carousel1").appendChild(div1);
      document.querySelector("#carousel2").appendChild(div2);
      document.querySelector("#carousel3").appendChild(div3);
      // document.querySelector("#carousel4").appendChild(div4);
    });
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}


// ========== { display local from gnews.io} ========== \\
async function displayLocalNews() {
  try {
    global.api.apiKeys = global.apiKey_2;
    global.maxfetch = "4";
    fetchAPIDataForLocal("local").then(function (data) {
      localarticles = data.articles.slice(0, 4);
      console.log(localarticles);

      localarticles.forEach((articles) => {
        const div = document.createElement("article");
        div.classList =
          "max-w-full w-full";

        div.innerHTML = `
        <div class="overlay relative hover-img h-48 overflow-hidden">
                
                  <a href="${articles.url}">
                    <img class="max-w-full w-full mx-auto h-auto" src="${articles.image}"
                      alt="Image description">
                  </a>
                  <div class="absolute px-4 pt-7 pb-4 bottom-0 w-full bg-gradient-cover">
                    <a href="${articles.url}">
                      <h2 class="text-lg font-medium capitalize leading-tight text-white mb-1">${articles.title}</h2>
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

// ========== { display TrendNews from gnews.io} ========== \\
async function displayTrendingNews() {
  try {
    global.api.apiKeys = global.apiKey_3;
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
                            <h3 class="px-2 text-lg font-bold leading-tight mb-2">
                              <a href="${articles.url}">${articles.title}</a>
                            </h3>
                            <p class="px-2 hidden md:block text-gray-600 leading-tight mb-1">${articles.description.slice(0, 100)}...</p>
                            <span
                                class="px-2 inline-block h-3 border-l-2 border-red-600 mr-2"></span>${articles.publishedAt.slice(0, 10)}</span>
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
// ========== { display BusinessNews from gnews.io} ========== \\
async function displayBusinessNews() {
  try {
    global.api.apiKeys = global.apiKey_4;
    global.api.maxfetch = "3";
    fetchAPIData("business").then(function (data) {
      businessarticles = data.articles;
      // console.log(businessarticles);

      businessarticles.forEach((articles) => {
        const div = document.createElement("div");
        div.classList =
          "flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100";

        div.innerHTML = `
                        <div class="flex-row sm:block hover-img bg-white h-full">
                          <a href="${articles.url}">
                            <img class="max-w-full w-full mx-auto" src="${articles.image}" alt="alt title">
                          </a>
                          <div class="py-0 sm:py-3  sm:pl-0">
                            <h3 class="px-2 text-lg font-bold leading-tight mb-2">
                              <a href="${articles.url}">${articles.title}</a>
                            </h3>
                            <p class="px-2 hidden md:block text-gray-600 leading-tight mb-1">${articles.description.slice(0, 100)}...</p>
                            <span
                                class="px-2 inline-block h-3 border-l-2 border-red-600 mr-2 "></span>${articles.publishedAt.slice(0, 10)}</span>
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

// ========== { display EntertainmentNews from gnews.io} ========== \\
async function displayEntertainmentNews() {
  try {
    global.api.apiKeys = global.apiKey_5;
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
                            <h3 class="px-2 text-lg font-bold leading-tight mb-2">
                              <a href="${articles.url}">${articles.title}</a>
                            </h3>
                            <p class="px-2 hidden md:block text-gray-600 leading-tight mb-1">${articles.description.slice(0, 100)}...</p>
                            <span
                                class="px-2 inline-block h-3 border-l-2 border-red-600 mr-2"></span>${articles.publishedAt.slice(0, 10)}</span>
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

// ========== { display EntertainmentNews from gnews.io} ========== \\
async function displaySportsNews() {
  try {
    global.api.apiKeys = global.apiKey_6;
    global.api.maxfetch = "3";
    fetchAPIData("sports").then(function (data) {
      sportsarticles = data.articles;
      // console.log(sportsarticles);

      sportsarticles.forEach((articles) => {
        const div = document.createElement("div");
        div.classList =
          "flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100";

        div.innerHTML = `
                        <div class="flex-row sm:block hover-img bg-white h-full">
                          <a href="${articles.url}">
                            <img class="max-w-full w-full mx-auto" src="${articles.image}" alt="alt title">
                          </a>
                          <div class="py-0 sm:py-3 px-3 sm:pl-0">
                            <h3 class="px-2 text-lg font-bold leading-tight mb-2">
                              <a href="${articles.url}">${articles.title}</a>
                            </h3>
                            <p class="px-2 hidden md:block text-gray-600 leading-tight mb-1">${articles.description.slice(0, 100)}...</p>
                            <span
                                class="px-2 inline-block h-3 border-l-2 border-red-600 mr-2"></span>${articles.publishedAt.slice(0, 10)}</span>
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

// ========== { display EntertainmentNews from gnews.io} ========== \\
async function displayScienceNews() {
  try {
    global.api.apiKeys = global.apiKey_7;
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
                            <h3 class="px-2 text-lg font-bold leading-tight mb-2">
                              <a href="${articles.url}">${articles.title}</a>
                            </h3>
                            <p class="px-2 hidden md:block text-gray-600 leading-tight mb-1">${articles.description.slice(0, 100)}...</p>
                            <span
                                class="px-2 inline-block h-3 border-l-2 border-red-600 mr-2"></span>${articles.publishedAt.slice(0, 10)}</span>
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

// ========== { display EntertainmentNews from gnews.io} ========== \\
async function displayTechnologyNews() {
  try {
    global.api.apiKeys = global.apiKey_8;
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
                            <h3 class="px-2 text-lg font-bold leading-tight mb-2">
                              <a href="${articles.url}">${articles.title}</a>
                            </h3>
                            <p class="px-2 hidden md:block text-gray-600 leading-tight mb-1">${articles.description.slice(0, 100)}...</p>
                            <span
                                class="px-2 inline-block h-3 border-l-2 border-red-600 mr-2"></span>${articles.publishedAt.slice(0, 10)}</span>
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

// ========== { display FOREX from FastForex} ========== \\
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
    // if (data.results.AED >= data2.results.AED) {
    //   AED = "text-up";
    // } else {
    //   AED = "text-down";
    // }
    //NZD
    // if (data.results.NZD >= data2.results.NZD) {
    //   NZD = "text-up";
    // } else {
    //   NZD = "text-down";
    // }
    //CNY
    // if (data.results.CNY >= data2.results.CNY) {
    //   CNY = "text-up";
    // } else {
    //   CNY = "text-down";
    // }
    //HKD
    // if (data.results.HKD >= data2.results.HKD) {
    //   HKD = "text-up";
    // } else {
    //   HKD = "text-down";
    // }
    //JPY
    if (data.results.JPY >= data2.results.JPY) {
      JPY = "text-up";
    } else {
      JPY = "text-down";
    }
    //KRW
    // if (data.results.KRW >= data2.results.KRW) {
    //   KRW = "text-up";
    // } else {
    //   KRW = "text-down";
    // }
    //CAD
    if (data.results.CAD >= data2.results.CAD) {
      CAD = "text-up";
    } else {
      CAD = "text-down";
    }

    const ul = document.createElement("ul");
    ul.classList = "p-4";

    ul.innerHTML = `
        <li class="flex justify-between items-center">
          <div class="text-medium font-medium px-1 py-2"> <span class="fi fi-ph"></span> USD/PHP <span>United States Dollar/Philippine Peso</span></div><div class="px-3 ${PHP}"> 
          ${data.results.PHP} PHP </div>
        </li>
        <li class="flex justify-between items-center">
          <div class="text-medium font-medium px-1 py-2"> <span class="fi fi-eu"></span> USD/EUR <span>United States Dollar/Euro</span></div><div class="px-3 ${EUR}"> 
          ${data.results.EUR} EUR </div>
        </li>
        <li class="flex justify-between items-center">
          <div class="text-medium font-medium px-1 py-2"> <span class="fi fi-au"></span> USD/AUD <span>United States Dollar/Australian Dollar</span></div><div class="px-3 ${AUD}"> 
          ${data.results.AUD} AUD </div>
        </li>
        <li class="flex justify-between items-center">
          <div class="text-medium font-medium px-1 py-2"> <span class="fi fi-jp"></span> USD/JPY <span>United States Dollar/Japanese Yen</span></div><div class="px-3 ${JPY}"> 
          ${data.results.JPY} JPY </div>
        </li>
        <li class="flex justify-between items-center">
          <div class="text-medium font-medium px-1 py-2"> <span class="fi fi-ca"></span> USD/CAD <span>United States Dollar/Canadian Dollar</span></div><div class="px-3 ${CAD}"> 
          ${data.results.CAD} CAD </div>
        </li>
        <div class="see-market-btn font-medium cursor-pointer text-gray-800">See more market data</div>
    `;
    document.querySelector("#forex").appendChild(ul);
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}

// ========== { display now showing on Cinemas } ========== \\
async function displayMovie() {
  try {
    const url =
      "https://api.themoviedb.org/3/movie/now_playing?api_key=2c950c2121faffbc9bb47be098bca4b7";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);

    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");
    const div5 = document.createElement("div");
    const div6 = document.createElement("div");
    const div7 = document.createElement("div");
    const div8 = document.createElement("div");
    const div9 = document.createElement("div");
    const div10 = document.createElement("div");
    div1.innerHTML = `
    <div class="flex-row justify-center mb-16">
      <div class="flex justify-center w-full">
      <img class="w-1/2" id="icon" src="https://image.tmdb.org/t/p/w500${data.results[0].poster_path}" alt="" />
      </div>
      <div class="flex-col">
        <h4 class="text-base mt-1">Title: ${data.results[0].title}</h4>
        <h4 class="text-base mt-1">Ratings: <i class="fas fa-star"></i> ${data.results[0].vote_average} / 10</h4>
        <h4 class="text-base mt-1">Reviews: <i class="fas fa-user"></i> ${data.results[0].popularity}</h4>
        <h4 class="text-base mt-1">Release date: ${data.results[0].release_date}</h4> 
      </div>
    </div>
    `;
    div2.innerHTML = `
    <div class="flex-row justify-center mb-16">
      <div class="flex justify-center w-full">
      <img class="w-1/2" id="icon" src="https://image.tmdb.org/t/p/w500${data.results[1].poster_path}" alt="" />
      </div>
      <div class="flex-col">
        <h4 class="text-base mt-1">Title: ${data.results[1].title}</h4>
        <h4 class="text-base mt-1">Ratings: <i class="fas fa-star"></i> ${data.results[1].vote_average} / 10</h4>
        <h4 class="text-base mt-1">Reviews: <i class="fas fa-user"></i> ${data.results[1].popularity}</h4>
        <h4 class="text-base mt-1">Release date: ${data.results[1].release_date}</h4> 
      </div>
    </div>
    `;
    div3.innerHTML = `
    <div class="flex-row justify-center mb-16">
      <div class="flex justify-center w-full">
      <img class="w-1/2" id="icon" src="https://image.tmdb.org/t/p/w500${data.results[2].poster_path}" alt="" />
      </div>
      <div class="flex-col">
        <h4 class="text-base mt-1">Title: ${data.results[2].title}</h4>
        <h4 class="text-base mt-1">Ratings: <i class="fas fa-star"></i> ${data.results[2].vote_average} / 10</h4>
        <h4 class="text-base mt-1">Reviews: <i class="fas fa-user"></i> ${data.results[2].popularity}</h4>
        <h4 class="text-base mt-1">Release date: ${data.results[2].release_date}</h4> 
      </div>
    </div>
    `;
    div4.innerHTML = `
    <div class="flex-row justify-center mb-16">
      <div class="flex justify-center w-full">
      <img class="w-1/2" id="icon" src="https://image.tmdb.org/t/p/w500${data.results[3].poster_path}" alt="" />
      </div>
      <div class="flex-col">
        <h4 class="text-base mt-1">Title: ${data.results[3].title}</h4>
        <h4 class="text-base mt-1">Ratings: <i class="fas fa-star"></i> ${data.results[3].vote_average} / 10</h4>
        <h4 class="text-base mt-1">Reviews: <i class="fas fa-user"></i> ${data.results[3].popularity}</h4>
        <h4 class="text-base mt-1">Release date: ${data.results[3].release_date}</h4> 
      </div>
    </div>
    `;
    div5.innerHTML = `
    <div class="flex-row justify-center mb-16">
      <div class="flex justify-center w-full">
      <img class="w-1/2" id="icon" src="https://image.tmdb.org/t/p/w500${data.results[4].poster_path}" alt="" />
      </div>
      <div class="flex-col">
        <h4 class="text-base mt-1">Title: ${data.results[4].title}</h4>
        <h4 class="text-base mt-1">Ratings: <i class="fas fa-star"></i> ${data.results[4].vote_average} / 10</h4>
        <h4 class="text-base mt-1">Reviews: <i class="fas fa-user"></i> ${data.results[4].popularity}</h4>
        <h4 class="text-base mt-1">Release date: ${data.results[4].release_date}</h4> 
      </div>
    </div>
    `;
    div6.innerHTML = `
    <div class="flex-row justify-center mb-16">
      <div class="flex justify-center w-full">
      <img class="w-1/2" id="icon" src="https://image.tmdb.org/t/p/w500${data.results[5].poster_path}" alt="" />
      </div>
      <div class="flex-col">
        <h4 class="text-base mt-1">Title: ${data.results[5].title}</h4>
        <h4 class="text-base mt-1">Ratings: <i class="fas fa-star"></i> ${data.results[5].vote_average} / 10</h4>
        <h4 class="text-base mt-1">Reviews: <i class="fas fa-user"></i> ${data.results[5].popularity}</h4>
        <h4 class="text-base mt-1">Release date: ${data.results[5].release_date}</h4> 
      </div>
    </div>
    `;
    div7.innerHTML = `
    <div class="flex-row justify-center mb-16">
      <div class="flex justify-center w-full">
      <img class="w-1/2" id="icon" src="https://image.tmdb.org/t/p/w500${data.results[6].poster_path}" alt="" />
      </div>
      <div class="flex-col">
        <h4 class="text-base mt-1">Title: ${data.results[6].title}</h4>
        <h4 class="text-base mt-1">Ratings: <i class="fas fa-star"></i> ${data.results[6].vote_average} / 10</h4>
        <h4 class="text-base mt-1">Reviews: <i class="fas fa-user"></i> ${data.results[6].popularity}</h4>
        <h4 class="text-base mt-1">Release date: ${data.results[6].release_date}</h4> 
      </div>
    </div>
    `;
    div8.innerHTML = `
    <div class="flex-row justify-center mb-16">
      <div class="flex justify-center w-full">
      <img class="w-1/2" id="icon" src="https://image.tmdb.org/t/p/w500${data.results[7].poster_path}" alt="" />
      </div>
      <div class="flex-col">
        <h4 class="text-base mt-1">Title: ${data.results[7].title}</h4>
        <h4 class="text-base mt-1">Ratings: <i class="fas fa-star"></i> ${data.results[7].vote_average} / 10</h4>
        <h4 class="text-base mt-1">Reviews: <i class="fas fa-user"></i> ${data.results[7].popularity}</h4>
        <h4 class="text-base mt-1">Release date: ${data.results[7].release_date}</h4> 
      </div>
    </div>
    `;
    div9.innerHTML = `
    <div class="flex-row justify-center mb-16">
      <div class="flex justify-center w-full">
      <img class="w-1/2" id="icon" src="https://image.tmdb.org/t/p/w500${data.results[8].poster_path}" alt="" />
      </div>
      <div class="flex-col">
        <h4 class="text-base mt-1">Title: ${data.results[8].title}</h4>
        <h4 class="text-base mt-1">Ratings: <i class="fas fa-star"></i> ${data.results[8].vote_average} / 10</h4>
        <h4 class="text-base mt-1">Reviews: <i class="fas fa-user"></i> ${data.results[8].popularity}</h4>
        <h4 class="text-base mt-1">Release date: ${data.results[8].release_date}</h4> 
      </div>
    </div>
    `;
    div10.innerHTML = `
    <div class="flex-row justify-center mb-16">
      <div class="flex justify-center w-full">
      <img class="w-1/2" id="icon" src="https://image.tmdb.org/t/p/w500${data.results[9].poster_path}" alt="" />
      </div>
      <div class="flex-col">
        <h4 class="text-base mt-1">Title: ${data.results[9].title}</h4>
        <h4 class="text-base mt-1">Ratings: <i class="fas fa-star"></i> ${data.results[9].vote_average} / 10</h4>
        <h4 class="text-base mt-1">Reviews: <i class="fas fa-user"></i> ${data.results[9].popularity}</h4>
        <h4 class="text-base mt-1">Release date: ${data.results[9].release_date}</h4> 
      </div>
    </div>
    `;
    document.querySelector("#slide1").appendChild(div1);
    document.querySelector("#slide2").appendChild(div2);
    document.querySelector("#slide3").appendChild(div3);
    document.querySelector("#slide4").appendChild(div4);
    document.querySelector("#slide5").appendChild(div5);
    document.querySelector("#slide6").appendChild(div6);
    document.querySelector("#slide7").appendChild(div7);
    document.querySelector("#slide8").appendChild(div8);
    document.querySelector("#slide9").appendChild(div9);
    document.querySelector("#slide10").appendChild(div10);
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
  let ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12;
  hours = hours ? hours : 12;
  let timeNow = hours + ":" + minutes + " " + ampm;
  document.getElementById("time-now").innerHTML = timeNow;
}
setInterval(getDayTime, 1000);
// ========== { END display dynamic date } ========== \\


// ========== { utilities } ========== \\
function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}

function hideSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}


// ========== { Initialize functions } ========== \\
function init() {
  switch (global.currentPage) {
    case "/":
    case "/src/index.html":
      // carouselNews();
      // displayLocalNews();
      // displayTrendingNews();
      // displayBusinessNews();
      // displayEntertainmentNews();
      // displaySportsNews();
      // displayScienceNews();
      // displayTechnologyNews();
      displayMovie();
      displayForex();
      // setInterval(displayForex, 5000);
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



