---
title: Inspiration
eleventyNavigation:
  title: Inspiration
  key: en_inspiration
  order: 2
  parent: en
---

This page contains a list of selected works closely realted to the content of this seminar. The following list of artists and developers does not claim to be complete, but merely a window into this world:

{% from "../_includes/parts/inspiration.njk" import filter, list %}

<div id="inspiration-filter">
{{filter(inspiration, translations, locale)}}
</div>

<div id="inspiration-list">
{{list(inspiration, translations, locale)}}
</div>

If you want to see more early works of computer art, I recommend [this article](https://www.amygoodchild.com/blog/computer-art-50s-and-60s) by Amy Goodchild.