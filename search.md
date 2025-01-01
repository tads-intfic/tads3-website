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
        "title": "{{ page.title | xml_escape }}",
        "content": {{ page.content | strip_html | jsonify }},
        "url": "{{ page.url | xml_escape }}"
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %},
     // add html files
     {% assign doc_files = site.doc %}
    {% for file in doc_files %}
      {% assign file_url = file.name | prepend: site.url %}
      "{{ file.path | slugify }}": {
        "title": "{{ file_url }}",
        "content": {{ file.content | strip_html | jsonify }},
        "url": "{{ file_url }}"
      }
      {% unless forloop.last %},{% endunless %}
    {% endfor %}
  };
</script>

<!-- Import lunr.js from unpkg.com -->
<script src="/assets/js/lunr.js" type="text/javascript"></script>
<!-- Custom search script which we will create below -->
<script src="/assets/js/search.js" type="text/javascript"></script>
