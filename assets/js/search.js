(function() {
  var searchResults = document.getElementById('search-results');
  let googleSearch = document.getElementById("googleSearch");
  let loading = document.getElementById("loading");

    function showResults(results, store) {
      googleSearch.classList.remove("hidden");
      loading.classList.add("hidden");
      
      if (results.length) { // If there are results...
        var appendString = '';
  
        for (var i = 0; i < results.length; i++) {  // Iterate over them and generate html
          var result = results[i];
          var item = store[result.ref];
          appendString += '<li><a href="' + item.url + '"><h3>' + result.ref + '</h3></a>';
          appendString += '<p>' + item.summary + '...</p></li>';
        }
  
        searchResults.innerHTML = appendString;
      } else {
        searchResults.innerHTML = '<li>No results found</li>';
      }

    }
  
    function getQuery(variable) {
      var query = window.location.search.substring(1);
      var vars = query.split('&');
  
      for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
  
        if (pair[0] === variable) {
          return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
        }
      }
    }
  
    var searchTerm = getQuery('query');
  
    if (searchTerm) {
      if (searchTerm.length <5) {
        loading.innerHTML = "Try a more specific search term, please!"
      }
      else {
      document.getElementById('search-box').setAttribute("value", searchTerm);
  
      // Initalize lunr.js with the fields to search.
      // The title field is given more weight with the "boost" parameter
        fetch('/search-items.json').then(response => response.json())
          .then(searchItems => {
            fetch('/search-index.json').then(response => response.json())
              .then(indexData => {
                var idx = lunr.Index.load(indexData)
                var results = idx.search(searchTerm); // Perform search with Lunr.js
                showResults(results, searchItems);
              })
          })
      }
    }
  })();
