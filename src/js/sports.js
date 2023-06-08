// // ========== { fetch sports data } ========== \\
async function fetchGameData() {

  showSpinner();


  const response = await fetch("https://www.balldontlie.io/api/v1/games");

  const data = await response.json();
  console.log(data);

  hideSpinner();

  return data;
};
// fetchGameData();

async function displayGames() {
  try {
    fetchGameData().then((data) => {
      gameUpdate = data.games.data;
      console.log(gameUpdate);

      gameUpdate.forEach((game) => {
        const ul = document.createElement('ul');
        ul.classList = "sport-card";
        ul.innerHTML =
          `
          <li>
            ${game.data.data}
          </li>
          `;
        document.querySelector("#sport-card").appendChild(ul);
      });
    });
  } catch (error) {
    console.error("An error occurred:", error.message);
  }
}
displayGames();


// ========== { utilities } ========== \\
function showSpinner() {
  document.querySelector(".spinner").classList.add("show");
}

function hideSpinner() {
  document.querySelector(".spinner").classList.remove("show");
}
