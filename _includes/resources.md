{% for library in site.data.resources.libraries %}
## {{library.title}}
    {{library.description}}
        {% for resource in library.resources %}
            test
        {% endfor %}
{% endfor %}