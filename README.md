---
published: false
---
# TADS 3 website
A website in progress created by [pieartsy](https://github.com/pieartsy) to try and aggregate TADS 3 resources (and at least add a search bar)! Uses Jekyll as a static site generator.

# Contributing
Right now I am looking for help with these four things in order of priority.
1. Aggregating existing resources
2. Adding search bars to the peripluses
3. Updating the peripluses
4. Custom lexer for TADS 3

## To aggregate existing resources
My preference is that you open an issue using the Resource contribution template and fill out the information according to the `.yaml` structure of the [`resources.yaml` file](./_data/resources.yaml). *You **can** add more than one resource at a time!*
```yaml
- title:
  type: 
  author:
  description:
  url:
```

If you want to go the extra mile, you can make a fork and add directly to the `resources.yaml` file yourself, then make a pull request from there.

If that's too much work, please do just send me the resources you want to include (with links). PR a text dump, send me a gist, whatever. You can even contact me @pieartsy on the [intfiction.org forums](https://intfiction.org) with whatever you have.

## Adding search bars to the peripluses and tutorials
The tutorials and manuals that exist right now do not have search bars. Neither do the peripluses. Adding some functionality in this respect would go a long, *long* way into making TADS 3 more accessible.

Ideally, all of this HTML would be searchable using the slick method of [lunr.js and Jekyll](https://www.stephanmiller.com/static-site-search/). However, Jekyll doesn't process the HTML of static files without [Jekyll Front Matter](https://jekyllrb.com/docs/front-matter/), which means that this method doesn't work on most of the documentation, not until it's converted into something Jekyll can look at.

I tried to put front matter into all the static files using [Front Matter defaults](https://jekyllrb.com/docs/configuration/front-matter-defaults/) so that Jekyll would look at them, but it didn't really work. As well, putting front matter on some pages manually (such as the peripluses) just breaks them, because they're using HTML 4 (or older) elements, not HTML 5. If anyone wants to help noodle out how to navigate this with me, please do.

Alternatively we'll turn to bare JavaScript search bars...

## Updating the peripluses
The peripluses are generated from the source code comments and existing documentation for Adv3 and adv3Lite.

Currently the adv3Lite periplus is referencing version 1.5, and adv3Lite is, as of Dec 2024, on version 2.1.1. The adv3Lite periplus on this site should use the newest version. (I'm not sure if this is possible, but what if we eventually got it to a state where it directly references the adv3Lite repository's most recent releases as Eric Eve updates it...?)

As well, the Adv3 periplus links directly to the original TADS website documentation, which means the documents are not fulltext searchable--and since Michael Roberts has been MIA for years, it's unknown whether they will remain up and hosted for the foreseeable future. They are fully archived on IFArchive right now, and with the current license they cannot be modified, but I would like to host them on this site as well.

This would hopefully lead to the slick lunr.js option being viable again, but who knows?

## Custom lexer
Rouge, the syntax highlighter used in Jekyll 4, has no support for TADS 3. A custom lexer will need to be made to be able to create new code examples less painfully or manually (and will also come in handy for updating old docs). I have no idea how to create a lexer! Things can always be formatted manually until then, but if anyone wants to help or give tips, that’d be very appreciated! The only syntax highlighter I know of with such support is pygments, which is deprecated and unavailable in current versions of Jekyll -- but [here is its lexer for reference.](https://github.com/pygments/pygments/blob/27649ebbf5a2519725036b48ec99ef7745f100af/pygments/lexers/int_fiction.py#L757)
