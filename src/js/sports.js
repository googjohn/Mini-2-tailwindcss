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
      const data = await fetchData(tabData[index].endpoint);

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
  const latestGames = games.slice(0, 20);

  // Generate the tab content for the "Games" tab
  let content = '';
  for (let i = 0; i < latestGames.length; i += 2) {
    const game1 = latestGames[i];
    const game2 = latestGames[i + 1];

    // Format the game information
    const gameInfo = `
  <div class="game">
    <div class="team">${game1.HomeTeam}</div>
    <div class="team">${game1.AwayTeam}</div>
    <div class="time">${game1.DateTime}</div>
  </div>
  <div class="game">
    <div class="team">${game2.HomeTeam}</div>
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



// ========== { utilities } ========== \\
function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}

function hideSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}
