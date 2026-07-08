const data = {
  "World": {
    query: "volleyball world VNL FIVB",
    title: "World Volleyball",
    description: "Global volleyball news, matches, tournaments and player stories.",
    matches: ["France vs Slovenia", "Poland vs Brazil", "Italy vs Japan"],
    leagues: ["VNL", "World Championship", "Olympic Games", "Club World Championship"],
    players: ["Wilfredo Leon", "Yuji Nishida", "Oleg Plotnytskyi"]
  },
  "Europe": {
    query: "CEV volleyball Europe",
    title: "Europe Volleyball",
    description: "European leagues, CEV competitions, clubs and national teams.",
    matches: ["Italy vs Poland", "France vs Germany", "Ukraine vs Belgium"],
    leagues: ["CEV Champions League", "SuperLega", "PlusLiga", "Turkish League"],
    players: ["Wilfredo Leon", "Oleg Plotnytskyi", "Alessandro Michieletto"]
  },
  "Asia": {
    query: "Asian volleyball AVC Japan Korea China",
    title: "Asia Volleyball",
    description: "Asian volleyball news, national teams, clubs and tournaments.",
    matches: ["Japan vs Iran", "China vs Korea", "Thailand vs Vietnam"],
    leagues: ["AVC", "Japan SV League", "Korean V-League", "Asian Championship"],
    players: ["Yuji Nishida", "Yuki Ishikawa", "Ran Takahashi"]
  },
  "North America": {
    query: "Canada USA NORCECA volleyball",
    title: "North America Volleyball",
    description: "Canada, USA, NORCECA, college volleyball and professional leagues.",
    matches: ["Canada vs USA", "USA vs Mexico", "Canada vs Cuba"],
    leagues: ["NORCECA", "NCAA", "PVF", "LOVB"],
    players: ["TJ DeFalco", "Micah Christenson", "Stephen Maar"]
  },
  "Local": {
    query: "Volleyball Manitoba Winnipeg Morden volleyball",
    title: "Local Volleyball",
    description: "Volleyball Manitoba, Winnipeg, Morden, schools and local clubs.",
    matches: ["Winnipeg Club Match", "Morden School Volleyball", "Manitoba Tournament"],
    leagues: ["Volleyball Manitoba", "School Volleyball", "Local Clubs", "College Volleyball"],
    players: ["Local Manitoba athletes", "School players", "College players"]
  }
};

const navButtons = document.querySelectorAll(".nav button");

const regionTag = document.getElementById("regionTag");
const regionTitle = document.getElementById("regionTitle");
const regionDescription = document.getElementById("regionDescription");

const matchesList = document.getElementById("matchesList");
const newsList = document.getElementById("newsList");
const leaguesList = document.getElementById("leaguesList");
const playersList = document.getElementById("playersList");

const searchInput = document.getElementById("searchInput");

navButtons.forEach(button => {
  button.addEventListener("click", () => {
    const region = button.dataset.region;

    navButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    loadRegion(region);
  });
});

if (searchInput) {
  searchInput.addEventListener("keydown", event => {
    if (event.key === "Enter") {
      const searchValue = searchInput.value.trim();

      if (searchValue.length > 1) {
        loadAutomaticNews(searchValue + " volleyball");
      }
    }
  });
}

function loadRegion(region) {
  const regionData = data[region];

  if (!regionData) return;

  regionTag.textContent = regionData.title;
  regionTitle.textContent = regionData.title;
  regionDescription.textContent = regionData.description;

  fillList(matchesList, regionData.matches);
  fillList(leaguesList, regionData.leagues);
  fillList(playersList, regionData.players);

  loadAutomaticNews(regionData.query);
}

function fillList(element, items) {
  if (!element) return;

  element.innerHTML = "";

  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    element.appendChild(li);
  });
}

async function loadAutomaticNews(query) {
  newsList.innerHTML = "<li>Loading news...</li>";

  const rssUrl = `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=en-CA&gl=CA&ceid=CA:en`;
  const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

  try {
    const response = await fetch(apiUrl);
    const result = await response.json();

    if (!result.items || result.items.length === 0) {
      newsList.innerHTML = "<li>No news found.</li>";
      return;
    }

    newsList.innerHTML = "";

    result.items.slice(0, 5).forEach(item => {
      const li = document.createElement("li");
      const link = document.createElement("a");

      link.href = item.link;
      link.target = "_blank";
      link.rel = "noopener";
      link.textContent = cleanTitle(item.title);

      li.appendChild(link);
      newsList.appendChild(li);
    });

    updateLatestNewsCards(result.items.slice(0, 4));

  } catch (error) {
    newsList.innerHTML = "<li>News could not be loaded.</li>";
    console.error(error);
  }
}

function updateLatestNewsCards(items) {
  const cards = document.querySelectorAll(".latest-news .news-card");

  cards.forEach((card, index) => {
    if (!items[index]) return;

    const image = card.querySelector(".news-img");
    const imageClass = image ? image.className : "news-img";

    card.innerHTML = `
      <a href="${items[index].link}" target="_blank" rel="noopener" class="news-card-link">
        <div class="${imageClass}"></div>
        <span>${getSource(items[index].title)}</span>
        <h3>${cleanTitle(items[index].title)}</h3>
      </a>
    `;
  });
}

function cleanTitle(title) {
  return title.replace(/ - .*/, "");
}

function getSource(title) {
  const parts = title.split(" - ");
  return parts.length > 1 ? parts[parts.length - 1] : "Volleyball News";
}

loadRegion("World");
