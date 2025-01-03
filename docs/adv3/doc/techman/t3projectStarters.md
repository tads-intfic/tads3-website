---
layout: docs
---


<img src="topbar.jpg" data-border="0" />
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="advtop.html" class="nav">Advanced Topics</a> \> Workbench
Project Starter Templates  
<span class="navnp"><a href="mediatypes.html" class="nav"><em>Prev:</em> Internet Media Types
for TADS</a>    
<a href="t3spec.html" class="nav"><em>Next:</em> T3 VM Technical
Documentation</a>     </span>
# Workbench Project Starter Templates

TADS Workbench for Windows features a "New Project" command that
generates all of the files necessary to compile and run a skeleton game.
This saves the author the trouble of copying all of the boilerplate for
the .t3m and .t files making up the project.

If you're creating your own library that's designed to replace Adv3,
Workbench provides a way for you to plug in your own project starter
templates so that Workbench users can just as easily create new projects
based on your library. This section describes how to create a project
template.

## Template file format

When Workbench displays the New Project dialog, it offers a list of
project configurations for the user to choose from. Each entry in this
list comes from a project starter template file, which has the suffix
`.tdb-project-starter`. Workbench searches for all files with this
suffix in the Extensions folder, each folder in the Library Paths list,
and in the Workbench library folder. (Workbench searches all subfolders
of each of these folders as well.)

To create an entry for your library in the New Project dialog, then, you
just need to create a template file, and include it in your library
folder.

The template file contains text in a special format, with instructions
for Workbench on how to create the project. The file uses a simple
name/value pair format, with one item per line. An item looks like this:

```
    name: value
```

The `name` must be at the very start of the
line, with no leading spaces. If a line starts with one or more spaces,
it's read as a continuation of the previous line. This allows you to
break up long values over several lines if needed for readability:

```
    name: This is a value that goes on for
      quite a while, requiring several lines
      to make it all fit neatly.
```

When Workbench reads the file, it joins these lines together as though
the value had appeared all on the same line. Workbench replaces each
line break, along with all of the leading spaces on the following line,
with a single space.

Here's a list of the `name` elements and what
they mean:

- `name`: The title of the project
  configuration. This is displayed in the New Project dialog in the list
  of available project types. You should use something short and
  descriptive; it doesn't have to be an exhaustive description, because
  the `desc` value is also displayed in the same
  list. The standard project starters included with Workbench use these
  names:
  - Adv3 - Introductory
  - Adv3 - Advanced
  - Adv3 - Introductory - Web UI
  - Adv3 - Advanced - Web UI
  - Plain T3

- `desc`: A detailed description of the project.
  This is displayed in the New Project dialog, under the
  `name`. This should be a couple of sentences
  describing your library and the type of project this template would
  create.

- `source`: The name of a source (.t) file that
  you provide as part of your library folder, that's meant to be
  **copied** into the user's new project folder. The value for this item
  is the name of the file that you provide, optionally followed by a
  space and the name of the file as it should appear in the user's copy.
  If you include only one name, the same name is used for the user's
  copy. If you provide two names, the second name can use a dollar sign
  (\$) as a substitution parameter: this is replaced with the project
  name that the New Project dialog asks the user to choose. For example,
  suppose that the user enters "test one" as the project name. If you
  enter this `source` item:

  ` source: start.t $.t `

  then the file `start.t` that you provide in
  your library folder will be copied into the new project folder with
  the name `test one.t`.

  Note that the `\$` can be used anywhere in the
  target file name; it doesn't have to be the entire name. For example,
  if you write `\$-actors.t` in the example
  above, the user's copy of the file would be `test
  one-actors.t`.

  You can use the `source` item repeatedly, if
  you wish, to copy multiple source files to the new project folder.
  Simply give each file a separate `source`
  line.

  You can place the source files to be copied into a subfolder of your
  library folder. If you do, simply use a relative Windows-style path in
  the `source` line:

  ` source: samples\start.t $.t `

  Workbench adds the `source` items to the new
  project's .t3m file in the same order in which they appear in the
  template file.

- `lib`: The name of a source (.t) or library
  (.tl) file to include in the project's build list, but **without**
  copying it to the user's project folder. This is for files that will
  be included in the project directly from your library. As with
  `source`, you can include as many
  `lib` items as you like.
  Workbench adds the files named in `lib` items
  to the new project's .t3m in the same order in which they appear in
  the template file.

- `sysfile`: The name of a **system** source
  (.t) or library (.tl) file to include in the project's build list.
  This works just like `lib`, except that these
  files are taken from the Workbench standard library folder rather than
  from your library folder. Use this for files like
  `tok.t` or `tadsnet.t`
  that come with the standard Workbench distribution.

- `define`: A preprocessor symbol to define. The
  value is a symbol, optionally followed by an equals sign (=) and the
  text to define for the symbol:

  ` define: LANGUAGE=en_us `

  Workbench will generate the appropriate compiler option to define the
  symbol in the macro preprocessor when the user builds the project. You
  can use as many `define` options as you need;
  simply use a separate `define` item for each
  symbol you wish to define.

- `sequence`: A number giving the sorting order
  for this item. This is intended for use by the standard templates
  included with Workbench; replacement libraries should generally omit
  this. When displaying the list of available project types, Workbench
  puts items with `sequence` items at the top of
  the list, in order of their `sequence` values,
  followed by the remaining items sorted in alphabetic order of their
  `name` strings. The intention is that standard
  system items are displayed first, followed by third-party libraries.

## Example

Here's the template included with the standard Workbench installation
for the Introductory Adv3 Web UI project type.

```
    name: Adv3 - Introductory - Web UI
    sequence: 3
    desc: Create a game based on the Adv3 library for Web browser play.
      Your new project will be set up for deployment on Web servers, so
      that users can play in a browser without installing any TADS
      software.  This project starter includes a working game scenario 
      as an example to help you get started.
    source: samples\startI3.t $.t
    lib: adv3web.tl
    sysfile: webui.tl
    sysfile: tadsnet.t
    define: TADS_INCLUDE_NET
    define: LANGUAGE=en_us
    define: MESSAGESTYLE=neu
```

## Installation

To distribute your library, simply create a ZIP file with all of your
.t, .tl, and .tdb-project-starter files. Instruct users to install your
library by following these steps:

- Run Workbench, and verify that the Extensions folder is set up. This
  setting can be found by selecting the Tools - Options menu command and
  going to the System - Extensions pane. The Workbench installer
  normally sets this to "My Documents\TADS 3\Extensions", but users can
  change it if they prefer to keep extensions somewhere else. If there's
  no setting, the user should set it now.
- Create a folder especially for your library in the Extensions folder.
- Unzip your library files into the new folder.

There's no extra step to install your project template. Simply include
the .tdb-project-starter file in the folder containing your library's .t
and .tl files. Workbench automatically searches for .tdb-project-starter
files in the Extensions folder tree (including sub-folders) and all of
the folders in Library Paths list.



------------------------------------------------------------------------



*TADS 3 Technical Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="advtop.html" class="nav">Advanced Topics</a> \> Workbench
Project Starter Templates  
<span class="navnp"><a href="mediatypes.html" class="nav"><em>Prev:</em> Internet Media Types
for TADS</a>    
<a href="t3spec.html" class="nav"><em>Next:</em> T3 VM Technical
Documentation</a>     </span>


