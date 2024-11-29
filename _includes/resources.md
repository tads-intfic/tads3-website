{% for library in site.data.resources.libraries %}
## Resources for {{library.title}}
{{library.description}}
    {% for resource in library.resources %}
        {% if resource.title %}
### {{ resource.title }} {% if resource.type %} _-- for {{resource.type}}_ {% endif %}
_by {{ resource.author }}_

{{resource.description}}

[Link to {{resource.title}}]({{resource.url}})
        {% endif %}
    {% endfor %}
{% endfor %}
