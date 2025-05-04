---
layout: default
title: Search Results
url: /search
---
<div id="loading">Loading...(Give it a sec)</div>
<div id="googleSearch" class="hidden">
<!--Google Search>-->
  <script src="https://cse.google.com/cse.js?cx=036b1d64455c94a06"></script>
  <p>Didn't find what you're looking for? Try Google search:</p>
  <div class='gcse-search'></div>
  <p><i>Note: Any discrepancies with this tool are the fault of Google's inaccurate indexing; use with caution.</i></p>
</div>
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
  let googleSearch = document.getElementById("googleSearch");

  function isEmpty(obj) {
    for (var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      }
    }
    return true
  }
  if (isEmpty(window.store)) {
    googleSearch.classList.remove("hidden");
  }
  console.log(isEmpty(window.store));
</script>

<!-- Import lunr.js from unpkg.com -->
<script src="/assets/js/lunr.js" type="text/javascript"></script>
<!-- Custom search script which we will create below -->
<script src="/assets/js/search.js" type="text/javascript"></script>
