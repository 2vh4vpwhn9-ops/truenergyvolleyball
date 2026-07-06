---
layout: default
title: True Energy Volleyball
---

<div class="container">
    <section class="featured">
        <h1>CANADA MEN'S TEAM QUALIFIES FOR VNL FINALS</h1>
        <p>The Canadian men's national volleyball team has secured its spot in the VNL Finals after a dominant performance.</p>
    </section>

    <aside class="top-stories">
        <h2>TOP STORIES</h2>
        
        {% for post in site.posts limit:5 %}
        <div class="story-item">
            <h3><a href="{{ post.url }}">{{ post.title }}</a></h3>
            <small>{{ post.date | date: "%B %d, %Y" }}</small>
        </div>
        {% endfor %}
    </aside>
</div>
