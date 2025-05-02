---
layout: docs
---


<img src="../../docs/manual/topbar.jpg" data-border="0" />





<a href="../../docs/manual/toc.html" class="nav">Table of Contents</a> \|
<a href="../../docs/manual/extensions.html" class="nav">Extensions</a> \>
Footnotes  
<span class="navnp"><a href="eventlistitem.html" class="nav"><em>Prev:</em>
EventListItem</a>    
<a href="fueled.html" class="nav"><em>Next:</em> Fueled Light Source</a>
    </span>





# Footnotes

## Overview

The purpose of the [footnote.t](../footnote.t) extension is to allow
game authors to define footnotes in their story which players can then
view using the FOOTNOTE command. A footnote is some explanatory text
that may provide more background information about the story but which
is not essential to playing it.

  
<span id="classes"></span>

## New Classes, Actions and Properties

In addition to a number of properties intended purely for internal use,
this extension defines the following new class and properties for the
direct use of game authors:

- *New Class*: **Footnote**
- *Properties/Methods*: `desc`,
  `noteRef()`.
- *Actions*: FootnoteAction, FootnotesFullAction, FootnotesMediumAction,
  FootnoteOffAction, FootnotesStatus.

  
<span id="usage"></span>

## Usage

Include the footnotes.t file after the library files but before your
game source files..

To define a footnote object, create an object of the Footnote class and
define its desc property to hold the text you want it to display, for
example:

```
    henryNote: Footnote
       desc = "King Henry II reigned from 1154 to 1189, when he was succeeded by Richard I. "
    ; 
     
```

Or, if you like, you can take advantage of the Footnote template
supplied in advlite.h to abbreviate this to:

```
    henryNote: Footnote "King Henry II reigned from 1154 to 1189, when he was succeeded by Richard I. "; 
     
```

Then, when you want to display a footnote marker in your game text, you
simply call your footnote's **noteRef()** method, for example:

```
      henryNote.noteRef(); 
     
```

The game will then assign a sequential footnote number and display it
accordingly. For example, if you wrote:

```
     oldCoin: Thing 'old coin'
        "From the very worn inscription the head on the coin appears to be that of Henry II.<<henryNote.noteRef()>> "
     ; 
     
```

You'd get an exchange like:

    >x old coin
    From the very worn inscription the head on the coin appears to be that of Henry II.[1]

On a full HTML interpreter the footnote number <sup>\[1\]</sup> would be
hyperlinked so that the player could then click it to read the footnote.
The footnote could also be read in response to the command NOTE 1 or
FOOTNOTE 1.

The extension also allows players to control the behaviour of footnotes
via the commands FOOTNOTES FULL, FOOTNOTES MEDIUM and FOOTNOTES OFF, and
to query the current behaviour status via the command FOOTNOTES. If the
setting is OFF, footnote numbers are never displayed in the game text.
If the setting is FULL then they always are. If the setting is MEDIUM
(the default) then the footnote number is displayed in the game text
each time that note's `noteRef()` method is
called until the note's text has been read via a FOOTNOTE command, but
not thereafter.

This covers most of what you need to know to use this extension. For
additional information see the source code and comments in the
[footnote.t](../footnote.t) file.



------------------------------------------------------------------------



*Adv3Lite Manual*  
<a href="../../docs/manual/toc.html" class="nav">Table of Contents</a> \|
<a href="../../docs/manual/extensions.html" class="nav">Extensions</a> \>
Fueled Light Source  
<span class="navnp"><a href="eventlistitem.html" class="nav"><em>Prev:</em>
EventListItem</a>    
<a href="fueled.html" class="nav"><em>Next:</em> Fueled Light Source</a>
    </span>


