const data = {
  "World": {
    title: "World Volleyball",
    tag: "World Volleyball",
    description: "Results, matches, leagues, news and player updates from around the world.",
    matches: ["Live Matches", "Today's Matches", "Latest Results", "Upcoming Matches"],
    news: ["Latest World News", "FIVB Updates", "Volleyball World Stories"],
    leagues: ["Volleyball Nations League", "World Championship", "Olympic Games", "Club World Championship", "World Cup"],
    players: ["Top World Players", "Rising Stars", "Player Statistics"]
  },

  "Europe": {
    title: "Europe Volleyball",
    tag: "Europe Volleyball",
    description: "European volleyball leagues, tournaments, results and players.",
    matches: ["Live Matches", "Today's Matches", "Latest Results", "Upcoming Matches"],
    news: ["European Volleyball News", "CEV Updates", "Club Volleyball Stories"],
    leagues: ["Champions League", "CEV Cup", "PlusLiga", "Italian SuperLega", "French Ligue A", "German Bundesliga", "Ukraine Super League"],
    players: ["Top European Players", "Young Talents", "Player Statistics"]
  },

  "Asia": {
    title: "Asia Volleyball",
    tag: "Asia Volleyball",
    description: "Asian volleyball leagues, national teams, tournaments and players.",
    matches: ["Live Matches", "Today's Matches", "Latest Results", "Upcoming Matches"],
    news: ["Asian Volleyball News", "AVC Updates", "Club Volleyball Stories"],
    leagues: ["Japan SV League", "Korea V-League", "China League", "AVC"],
    players: ["Japan Stars", "Korean League Players", "Asian Rising Stars"]
  },

  "North America": {
    title: "North America Volleyball",
    tag: "North America Volleyball",
    description: "Canada, USA, NORCECA and North American volleyball coverage.",
    matches: ["Live Matches", "Today's Matches", "Latest Results", "Upcoming Matches"],
    news: ["Canada Volleyball News", "USA Volleyball News", "NORCECA Updates"],
    leagues: ["Canada", "USA", "NORCECA", "NCAA"],
    players: ["Canada Players", "USA Players", "NCAA Players"]
  },

  "Local": {
    title: "Local Volleyball",
    tag: "Local Volleyball",
    description: "Local volleyball stories, results and community events from Manitoba, Winnipeg and Morden.",
    matches: ["Local Match Results", "School Matches", "Community Tournaments", "Upcoming Local Events"],
    news: ["Local News", "Volleyball Manitoba Updates", "Community Stories"],
    leagues: ["Volleyball Manitoba", "Winnipeg", "Morden", "Schools", "Colleges", "Community Events"],
    players: ["Local Players", "Young Athletes", "Community Profiles"]
  }
};

function showRegion(region, button) {
  const selected = data[region];

  document.getElementById("regionTitle").textContent = selected.title;
  document.getElementById("regionTag").textContent = selected.tag;
  document.getElementById("regionDescription").textContent = selected.description;

  fillList("matchesList", selected.matches);
  fillList("newsList", selected.news);
  fillList("leaguesList", selected.leagues);
  fillList("playersList", selected.players);

  document.querySelectorAll(".top-nav button").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");
}

function fillList(id, items) {
  document.getElementById(id).innerHTML = items
    .map(item => `<li>${item}</li>`)
    .join("");
}

showRegion("World", document.querySelector(".top-nav button"));
