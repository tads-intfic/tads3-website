---
layout: default
title: Search Results
url: /search
---
<!-- List where search results will be rendered -->
<ul id="search-results"></ul>

<script>
  // Template to generate the JSON to search
  window.store = {
     {% for page in site.pages %}
      "{{ page.url | slugify }}": {
        "title": "{{ page.url | slugify }}",
        "content": {{ page.content | strip_html | jsonify }},
        "url": "{{ page.url | xml_escape }}"
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
  };
</script>

<!-- Import lunr.js from unpkg.com -->
<script src="/assets/js/lunr.js" type="text/javascript"></script>
<!-- Custom search script which we will create below -->
<script src="/assets/js/search.js" type="text/javascript"></script>
