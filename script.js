const data = {
  "World": {
    tag: "World Volleyball",
    title: "World Volleyball",
    description: "Global volleyball matches, news, leagues and player stories.",
    headline: "France edge Slovenia in five-set thriller",
    text: "France come from behind to win a dramatic VNL match.",
    matches: ["Live Matches", "Today's Matches", "Latest Results", "Upcoming Matches"],
    news: ["Latest World News", "FIVB Updates", "Volleyball World Stories"],
    leagues: ["Volleyball Nations League", "World Championship", "Olympic Games", "Club World Championship", "World Cup"],
    players: ["Top World Players", "Rising Stars", "Player Statistics"]
  },

  "Europe": {
    tag: "Europe Volleyball",
    title: "Europe Volleyball",
    description: "European volleyball leagues, tournaments, results and player stories.",
    headline: "Champions League draw sets up major European clashes",
    text: "European clubs prepare for another intense volleyball season.",
    matches: ["Live Matches", "Today's Matches", "Latest Results", "Upcoming Matches"],
    news: ["European Volleyball News", "CEV Updates", "Club Stories"],
    leagues: ["Champions League", "CEV Cup", "PlusLiga", "Italian SuperLega", "French Ligue A", "German Bundesliga", "Ukraine Super League"],
    players: ["Top European Players", "Young Talents", "Player Statistics"]
  },

  "Asia": {
    tag: "Asia Volleyball",
    title: "Asia Volleyball",
    description: "Asian volleyball leagues, national teams, tournaments and players.",
    headline: "Japan SV League prepares for a new era",
    text: "Asian volleyball continues to grow with strong clubs and national teams.",
    matches: ["Live Matches", "Today's Matches", "Latest Results", "Upcoming Matches"],
    news: ["Asian Volleyball News", "AVC Updates", "Club Stories"],
    leagues: ["Japan SV League", "Korea V-League", "China League", "AVC"],
    players: ["Japan Stars", "Korean League Players", "Asian Rising Stars"]
  },

  "North America": {
    tag: "North America Volleyball",
    title: "North America Volleyball",
    description: "Canada, USA, NORCECA and North American volleyball coverage.",
    headline: "USA and Canada continue NORCECA rivalry",
    text: "North American volleyball brings national teams, college players and local stories together.",
    matches: ["Live Matches", "Today's Matches", "Latest Results", "Upcoming Matches"],
    news: ["Canada Volleyball News", "USA Volleyball News", "NORCECA Updates"],
    leagues: ["Canada", "USA", "NORCECA", "NCAA"],
    players: ["Canada Players", "USA Players", "NCAA Players"]
  },

  "Local": {
    tag: "Local Volleyball",
    title: "Local Volleyball",
    description: "Local volleyball stories, results and community events from Manitoba, Winnipeg and Morden.",
    headline: "Local volleyball stories deserve a bigger platform",
    text: "True Energy VB highlights Manitoba, Winnipeg, Morden, schools and community volleyball.",
    matches: ["Local Match Results", "School Matches", "Community Tournaments", "Upcoming Local Events"],
    news: ["Local News", "Volleyball Manitoba Updates", "Community Stories"],
    leagues: ["Volleyball Manitoba", "Winnipeg", "Morden", "Schools", "Colleges", "Community Events"],
    players: ["Local Players", "Young Athletes", "Community Profiles"]
  }
};

function fillList(id, items) {
  document.getElementById(id).innerHTML = items.map(item => `<li>${item}</li>`).join("");
}

function showRegion(region) {
  const selected = data[region];

  document.getElementById("regionTag").textContent = selected.tag;
  document.getElementById("regionTitle").textContent = selected.title;
  document.getElementById("regionDescription").textContent = selected.description;
  document.getElementById("heroHeadline").textContent = selected.headline;
  document.getElementById("heroText").textContent = selected.text;

  fillList("matchesList", selected.matches);
  fillList("newsList", selected.news);
  fillList("leaguesList", selected.leagues);
  fillList("playersList", selected.players);

  document.querySelectorAll(".nav button").forEach(button => {
    button.classList.toggle("active", button.dataset.region === region);
  });
}

document.querySelectorAll(".nav button").forEach(button => {
  button.addEventListener("click", () => showRegion(button.dataset.region));
});

document.getElementById("searchInput").addEventListener("input", event => {
  const term = event.target.value.toLowerCase().trim();

  document.querySelectorAll(".content-card li, .news-card h3").forEach(item => {
    item.style.opacity = !term || item.textContent.toLowerCase().includes(term) ? "1" : "0.25";
  });
});

showRegion("World");
