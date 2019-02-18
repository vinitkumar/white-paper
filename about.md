---
layout: default
title: About
---
## About {{ site.name }}

<img class="user-avatar" src="{{ site.owner.avatar }}">

White Paper is a very clean theme and used by users around the globe.
It aims to be clean and really fast. Jekyll is a pretty neat platform for generating websites and applications. The effort required to setup this blog is minimal but the effect is visible from the day one.

If you are visiting this page, it means you have configured it right and all you need to do now is to start blogging.

<div class="pagination">
  {% if site.owner.linkedin %}
    <a href="{{ site.owner.linkedin }}" class="social-media-icons"><i class="fa fa-2x fa-linkedin-square" aria-hidden="true"></i></a>
  {% endif %}
  {% if site.owner.email %}
    <a href="mailto:{{ site.owner.email }}" class="social-media-icons"><i class="fa fa-2x fa-envelope-square" aria-hidden="true"></i></a>
  {% endif %}
  {% if site.owner.twitter %}
    <a href="https://twitter.com/{{ site.owner.twitter }}" class="social-media-icons"><i class="fa fa-2x fa-twitter-square" aria-hidden="true"></i></a>
  {% endif %}
  {% if site.owner.github %}
    <a href="{{ site.owner.github }}" class="social-media-icons"><i class="fa fa-2x fa-github-square" aria-hidden="true"></i></a>
  {% endif %}
</div>
