---
layout: default
title: About Vinit Kumar
---

<h1 class="owner-name">{{ site.owner.name}} </h1>
![user-avatar]({{ site.owner.avatar }})

{{site.about}}

<div class="pagination">
  {% if site.owner.linkedin %}
    <a href="{{ site.owner.linkedin }}" class="social-media-icons"><i class="fa fa-2x fa-linkedin" aria-hidden="true"></i></a>
  {% endif %}
  {% if site.owner.email %}
    <a href="mailto:{{ site.owner.email }}" class="social-media-icons"><i class="fa fa-2x fa-envelope" aria-hidden="true"></i></a>
  {% endif %}
  {% if site.owner.twitter %}
    <a href="{{ site.owner.twitter }}" class="social-media-icons"><i class="fa fa-2x fa-twitter" aria-hidden="true"></i></a>
  {% endif %}
  {% if site.owner.github %}
    <a href="{{ site.owner.github }}" class="social-media-icons"><i class="fa fa-2x fa-github" aria-hidden="true"></i></a>
  {% endif %}
  {% if site.owner.stackexchange %}
    <a href="{{ site.owner.stackexchange }}" class="social-media-icons"><i class="fa fa-2x fa-stack-overflow" aria-hidden="true"></i></a>
  {% endif %}
</div>
