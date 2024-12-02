---
layout: default
title: Search Results
url: search/
---
<!-- List where search results will be rendered -->
<ul id="search-results"></ul>

<script>
  // Template to generate the JSON to search
  window.store = {
    {% for post in site.docs %}
      "{{ post.url | slugify }}": {
        "title": "{{ post.title | xml_escape }}",
        "author": "{{ post.author | xml_escape }}",
        "category": "{{ post.category | xml_escape }}",
        "content": {{ post.content | strip_html | strip_newlines | jsonify }},
        "url": "{{ post.url | xml_escape }}"
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
  };
</script>

<!-- Import lunr.js from unpkg.com -->
<script src="{{site.baseurl}}/assets/js/lunr.min.js" type="text/javascript"></script>
<!-- Custom search script which we will create below -->
<script src="{{site.baseurl}}/assets/js/search.js" type="text/javascript"></script>
