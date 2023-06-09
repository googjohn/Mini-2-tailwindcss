// // // ========== { fetch sports data } ========== \\
// async function fetchGameData() {

//   showSpinner();
//   // apikey = PNX37eNq6DKYdT4s;
//   // apikey = Wa6XealLXTySQaKz;
//   const response = await fetch("http://api.isportsapi.com/sport/basketball/livescores?api_key=Wa6XealLXTySQaKz");

//   const data = await response.json();
//   console.log(data.data);

//   hideSpinner();

//   return data.data;
// };
// fetchGameData();


// async function fetchGamesData() {
//   const url = "https://api.sportsdata.io/v3/nba/scores/json/Games/2023?key=792a436142ab432fb6a23fb80269a38a";

//   showSpinner();

//   try {
//     const response = await fetch(url);
//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }

//   hideSpinner()

//   return result;
// }

// async function displayGames() {
//   try {
//     fetchGamesData().then((data) => {
//       gameUpdate = data;
//       console.log(gameUpdate);

//       gameUpdate.forEach((game) => {
//         const div = document.createElement('div');
//         div.classList = "sport-card";
//         div.innerHTML =
//           `
//         <div class="sports-card grid-cols-2">
//         <div class="border">

//         </div>
//         <div class="border">


//         </div>
//         `;
//         document.querySelector("#sport-card").appendChild(div);
//       });
//     });
//   } catch (error) {
//     console.error("An error occurred:", error);
//   }
// }
// displayGames();

// ========== { make buttons for navbar work } ========== \\
// const buttons = document.querySelectorAll('.grid-button');

// // Data associated with each tab
// let tabData = [];

// async function fetchData() {
//   try {
//     const response = await fetch('https://api.sportsdata.io/v3/nba/scores/json/Games/2023?key=792a436142ab432fb6a23fb80269a38a');
//     const data = await response.json();


//   }
// }
// const tabData = [
//   { title: 'Games', content: 'Content for Games' },
//   { title: 'News', content: 'Content for News' },
//   { title: 'Standing', content: 'Content for Standing' },
//   { title: 'Stats', content: 'Content for Stats' },
//   { title: 'Players', content: 'Content for Players' }
// ];

// // add event listeners to each button
// buttons.forEach(button => {
//   button.addEventListener('click', () => {

//     // remove active class
//     buttons.forEach(btn => btn.classList.remove('active'));

//     // add active class to clicked button
//     button.classList.add("active");

//     // Update the content based on the active tab
//     const tabContent = document.querySelector('#sport-card');
//     tabContent.textContent = tabData[index].content;
//   });
// });

// // Get all the buttons within the grid
// const buttons = document.querySelectorAll('.grid-button');

// // Data associated with each tab
// let tabData = [];

// // Fetch data and populate tabData
// async function fetchData() {
//   try {
//     const response = await fetch('https://api.sportsdata.io/v3/nba/scores/json/Games/2023?key=792a436142ab432fb6a23fb80269a38a');
//     const data = await response.json();

//     tabData = data.map(game => ({
//       title: `${game.HomeTeam} vs ${game.AwayTeam}`,
//       content: `Date: ${game.DateTime}, Location: ${game.Stadium}, Status: ${game.Status}`
//     }));

//     // Call a function to initialize the tab content
//     updateTabContent(0);
//   } catch (error) {
//     console.error('An error occurred:', error.message);
//   }
// }

// // Update the tab content based on the active tab index
// function updateTabContent(activeTabIndex) {
//   const tabContent = document.querySelector('#tab-content');
//   tabContent.textContent = tabData[activeTabIndex].content;
// }

// // Add event listeners to each button
// buttons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     // Remove the active class from all buttons
//     buttons.forEach(btn => btn.classList.remove('active'));

//     // Add the active class to the clicked button
//     button.classList.add('active');

//     // Update the content based on the active tab
//     updateTabContent(index);
//   });
// });

// // Fetch data and initialize the tab content
// fetchData();

// Get all the buttons within the grid
// Get all the buttons within the grid
// const buttons = document.querySelectorAll('.grid-button');

// // Data associated with each tab
// let tabData = [];

// // Fetch data and populate tabData
// async function fetchData() {
//   try {
//     const response = await fetch('https://api.sportsdata.io/v3/nba/scores/json/Games/2023?key=792a436142ab432fb6a23fb80269a38a');
//     const data = await response.json();

//     tabData = data.map(game => ({
//       title: `${game.HomeTeam} vs ${game.AwayTeam}`,
//       content: `Date: ${game.DateTime}, Location: ${game.Stadium}, Status: ${game.Status}`
//     }));

//     // Call a function to initialize the tab content
//     updateTabContent(0);
//   } catch (error) {
//     console.error('An error occurred:', error.message);
//   }
// }

// // Update the tab content based on the active tab index
// function updateTabContent(activeTabIndex) {
//   const tabContent = document.querySelector('#tab-content');
//   tabContent.innerHTML = '';

//   const contentElement = document.createElement('div');
//   contentElement.textContent = tabData[activeTabIndex].content;

//   tabContent.appendChild(contentElement);
// }

// // Add event listeners to each button
// buttons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     // Remove the active class from all buttons
//     buttons.forEach(btn => btn.classList.remove('active'));

//     // Add the active class to the clicked button
//     button.classList.add('active');

//     // Update the content based on the active tab
//     updateTabContent(index);
//   });
// });

// // Fetch data and initialize the tab content
// fetchData();

// Get all the buttons within the grid
const buttons = document.querySelectorAll('.grid-button');

// Data associated with each tab
let tabData = [
  {
    title: 'Games',
    endpoint: 'https://api.sportsdata.io/v3/nba/scores/json/Games/2023?key=792a436142ab432fb6a23fb80269a38a',
    content: ''
  },
  {
    title: 'News',
    endpoint: 'https://api.sportsdata.io/v3/nba/scores/json/News?key=792a436142ab432fb6a23fb80269a38a',
    content: ''
  },
  {
    title: 'Standings',
    endpoint: 'https://api.sportsdata.io/v3/nba/scores/json/Standings/2023?key=792a436142ab432fb6a23fb80269a38a',
    content: ''
  },
  {
    title: 'Stats',
    endpoint: 'https://api.sportsdata.io/v3/nba/scores/json/CurrentSeason?key=792a436142ab432fb6a23fb80269a38a',
    content: ''
  },
  {
    title: 'Players',
    endpoint: 'https://api.sportsdata.io/v3/nba/scores/json/PlayersActiveBasic?key=792a436142ab432fb6a23fb80269a38a',
    content: ''
  }
];

// Fetch data for a specific tab based on its endpoint
async function fetchData(endpoint) {
  try {
    const response = await fetch(endpoint);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

// Update the tab content based on the active tab index
function updateTabContent(activeTabIndex) {
  const tabContent = document.querySelector('#tab-content');
  tabContent.innerHTML = tabData[activeTabIndex].content;
}

// Fetch data for the first tab and update its content
(async () => {
  const data = await fetchData(tabData[0].endpoint);
  tabData[0].content = generateTabContent(data, 0);
  updateTabContent(0);
})();
// Add event listeners to each button
buttons.forEach((button, index) => {
  button.addEventListener('click', async () => {
    // Remove the active class from all buttons
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add the active class to the clicked button
    button.classList.add('active');

    // Check if the tab content is already fetched
    if (tabData[index].content === '') {
      // Fetch the data for the tab
      // Fetch the data for the tab
      const data = await fetchData(tabData[index].endpoint);

      // Log the fetched data to the console
      console.log(data);

      // Update the tab data with the fetched content
      tabData[index].content = generateTabContent(data, index);

    }

    // Update the content based on the active tab
    updateTabContent(index);
  });
});

// Generate the tab content based on the fetched data and tab index
function generateTabContent(data, tabIndex) {
  // Implement your logic to generate tab content based on the fetched data and tab index
  // You can access the fetched data from the 'data' parameter and perform specific operations for each tab using the 'tabIndex'

  // Filter and sort the games data
  const games = data
    .filter(game => game.Status === 'Final') // Filter only the games with 'Final' status
    .sort((a, b) => new Date(b.DateTime) - new Date(a.DateTime)) // Sort the games by DateTime in descending order

  // Retrieve the latest 20 games
  const latestGames = games.slice(0, 6);

  // Generate the tab content for the "Games" tab
  let content = '';
  for (let i = 0; i < latestGames.length; i += 2) {
    const game1 = latestGames[i];
    const game2 = latestGames[i + 1];

    // Format the game information
    const gameInfo = `
  <div class="game text-5xl">
    <div class="team">${game1.HomeTeam}</div> <span>VS</span>
    <div class="team">${game1.AwayTeam}</div>
    <div class="time">${game1.DateTime}</div>
  </div>
  <div class="game text-5xl">
    <div class="team">${game2.HomeTeam}</div> <span>VS</span>
    <div class="team">${game2.AwayTeam}</div>
    <div class="time">${game2.DateTime}</div>
  </div>
`;

    content += gameInfo;
  }

  // Return the formatted content for the "Games" tab
  return content;

  // For other tabs, you can implement specific logic based on the tab index and the fetched data

  // Default content for other tabs
  return 'Content for Tab ' + (tabIndex + 1);
}

// Initialize the tab content for the first tab
updateTabContent(0);


// // Fetch data and populate tabData
// async function fetchData() {
//   try {
//     const response = await fetch('https://api.sportsdata.io/v3/nba/scores/json/Games/2023?key=792a436142ab432fb6a23fb80269a38a');
//     const data = await response.json();

//     tabData[0].content = generateGamesContent(data);
//     tabData[1].content = generateNewsContent(data);
//     tabData[2].content = generateStandingsContent(data);
//     tabData[3].content = generateStatsContent(data);
//     tabData[4].content = generatePlayersContent(data);

//     // Call a function to initialize the tab content
//     updateTabContent(0);
//   } catch (error) {
//     console.error('An error occurred:', error.message);
//   }
// }

// // Update the tab content based on the active tab index
// function updateTabContent(activeTabIndex) {
//   const tabContent = document.querySelector('#tab-content');
//   tabContent.innerHTML = '';

//   const contentElement = document.createElement('div');
//   contentElement.textContent = tabData[activeTabIndex].content;

//   tabContent.appendChild(contentElement);
// }

// // Function to generate games content
// function generateGamesContent(data) {
//   // Implement your logic to generate games content here
//   // You can access the game data from the 'data' parameter
//   return 'Content for Games';
// }

// // Function to generate news content
// function generateNewsContent(data) {
//   // Implement your logic to generate news content here
//   // You can access the game data from the 'data' parameter
//   return 'Content for News';
// }

// // Function to generate standings content
// function generateStandingsContent(data) {
//   // Implement your logic to generate standings content here
//   // You can access the game data from the 'data' parameter
//   return 'Content for Standings';
// }

// // Function to generate stats content
// function generateStatsContent(data) {
//   // Implement your logic to generate stats content here
//   // You can access the game data from the 'data' parameter
//   return 'Content for Stats';
// }

// // Function to generate players content
// function generatePlayersContent(data) {
//   // Implement your logic to generate players content here
//   // You can access the game data from the 'data' parameter
//   return 'Content for Players';
// }

// // Add event listeners to each button
// buttons.forEach((button, index) => {
//   button.addEventListener('click', () => {
//     // Remove the active class from all buttons
//     buttons.forEach(btn => btn.classList.remove('active'));

//     // Add the active class to the clicked button
//     button.classList.add('active');

//     // Update the content based on the active tab
//     updateTabContent(index);
//   });
// });

// // Fetch data and initialize the tab content
// fetchData();





// ========== { utilities } ========== \\
function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}

function hideSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}
