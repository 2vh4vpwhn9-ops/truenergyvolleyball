const matchesContainer = document.getElementById("matchesContainer");
const newsContainer = document.getElementById("newsContainer");

const matches = [
  {
    league: "CEV Champions League",
    team1: "🇮🇹 Italy",
    score: "3 : 1",
    team2: "Poland 🇵🇱",
    sets: "25-21 • 22-25 • 25-18 • 25-19"
  },
  {
    league: "Volleyball Nations League",
    team1: "🇯🇵 Japan",
    score: "3 : 2",
    team2: "Brazil 🇧🇷",
    sets: "25-23 • 18-25 • 25-22 • 22-25 • 15-13"
  },
  {
    league: "NORCECA Championship",
    team1: "🇨🇦 Canada",
    score: "3 : 0",
    team2: "USA 🇺🇸",
    sets: "25-20 • 25-18 • 25-22"
  }
];

const news = [
  {
    region: "World",
    title: "Volleyball Nations League updates",
    text: "Latest international volleyball updates and results."
  },
  {
    region: "Europe",
    title: "CEV Champions League results",
    text: "European club volleyball match updates."
  },
  {
    region: "Asia",
    title: "Japan SV League latest",
    text: "Updates from Asian volleyball competitions."
  },
  {
    region: "North America",
    title: "Canada and USA volleyball news",
    text: "Updates from NORCECA and local volleyball."
  }
];

matchesContainer.innerHTML = matches.map(match => `
  <div class="match-card">
    <div class="match-league">${match.league}</div>
    <div class="match-teams">
      <div class="match-team">${match.team1}</div>
      <div class="match-score">${match.score}</div>
      <div class="match-team">${match.team2}</div>
    </div>
    <div class="match-sets">${match.sets}</div>
  </div>
`).join("");

newsContainer.innerHTML = news.map(item => `
  <div class="news-card">
    <div class="news-image"></div>
    <div class="news-content">
      <span class="news-region">${item.region}</span>
      <h4>${item.title}</h4>
      <p>${item.text}</p>
    </div>
  </div>
`).join("");
