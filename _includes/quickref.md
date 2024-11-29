{% for ref in site.data.resources.quickrefs %}
- [**{{ref.name}}**]({{ref.url}}) - {{ref.description}}
{% endfor %}