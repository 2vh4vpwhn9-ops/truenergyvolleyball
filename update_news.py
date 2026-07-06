import json
import urllib.request
import xml.etree.ElementTree as ET

RSS_FEEDS = [
    "https://www.ncaa.com/news/volleyball-women/d1/rss.xml",
    "https://www.ncaa.com/news/volleyball-men/nc/rss.xml",
    "https://asianvolleyball.net/new/feed/"
]

news = []

for feed_url in RSS_FEEDS:
    try:
        with urllib.request.urlopen(feed_url, timeout=10) as response:
            data = response.read()

        root = ET.fromstring(data)

        for item in root.findall(".//item")[:4]:
            title = item.findtext("title", "Volleyball News")
            link = item.findtext("link", "#")
            description = item.findtext("description", "Latest volleyball news update.")

            news.append({
                "title": title.strip(),
                "description": description.strip()[:180],
                "link": link.strip()
            })

    except Exception as e:
        print(f"Error reading feed: {feed_url} - {e}")

with open("news.json", "w", encoding="utf-8") as f:
    json.dump(news[:9], f, ensure_ascii=False, indent=2)
