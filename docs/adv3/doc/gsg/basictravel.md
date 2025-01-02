---
layout: docs
---
<div class="topbar">

[<img src="topbar.jpg" data-border="0" />](index.html)

</div>

<div class="main">

[\[Main\]](index.html)  
*[\[Previous\]](tyingupsomeloosestrings.html)
  [\[Next\]](climbingthetree.html)*

# Chapter 4 - Moving Around

## Moving Around

The next step is to expand the map to a few more locations (rooms) so we
can start moving around. We'll begin by adding the other three locations
that feature in the original *Adventures of Heidi*. We have already
covered most of what we need to know in order to do this. Add the
following code to the end of the existing program. An explanation of new
features follows.

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

forest : OutdoorRoom 'Deep in the Forest'  
   "Through the deep foliage you glimpse a building to the west.  
    A track leads to the northeast, and a path leads south. "  
    west = outsideCottage  
    northeast = clearing    
;  
  
clearing : OutdoorRoom 'Clearing'      
   "A tall sycamore tree stands in the middle of this clearing.  
    One path winds to the southwest, and another to the north. "  
    southwest = forest  
    up = topOfTree  
    north : FakeConnector {"You decide against going that way right  
         now. "}  
;  
  
  
+ tree : Fixture 'tall sycamore tree' 'tree'  
    "Standing proud in the middle of the clearing, the stout  
     tree looks like it should be easy to climb. "     
;  
  
topOfTree : OutdoorRoom 'At the top of the tree'  
   "You cling precariously to the trunk, next to a firm, narrow  
    branch. "  
    down = clearing  
;  

|     |     |
|-----|-----|
|     |     |

|     |     |
|-----|-----|
|     |     |

|     |     |
|-----|-----|
|     |     |

The room definitions and the definition of the tree object should need
little explanation. The important new concept that has been introduced
here is that of a *travel connector*. A travel connector is an object
that controls what happens if an actor attempts to travel via it. To
define what happens when an actor tries to move in a certain direction
we must attach a travel connector to the appropriate direction property.
For example, to define what happens when the player character is in the
forest and the player types **west** we attach the connector called
`outsideCottage` to the west property of `forest`. You may object that
`outsideCottage` is simply a room, the room we started by defining; but
*Rooms* are in fact a special kind of *TravelConnector*, connectors that
point to themselves as destination. Traveling via a*Room* thus means
traveling to that *Room*. So if we want movement to take place directly
from one room to another, we simply set the appropriate direction
property to the destination room. Note that unlike TADS 2, in TADS 3 the
direction properties `northwest`, `northeast`, `southwest`, and
`southeast` must be spelled out in full; the other direction properties
you will commonly use are `north`, `south`, `east`,`west`, `up`, `down`,
`in `and`out`.  
  
You have probably noticed that the north property from the clearing uses
a different kind of connector, a `FakeConnector`. A `FakeConnector `is
what it sounds like, a connector that only appears to go somewhere. An
attempt to travel via a `FakeConnector `results in its
`travelDesc `message being displayed without any travel actually taking
place. One use of a `FakeConnector `might be to create 'soft boundaries'
to your map, to make it look as if it extends further than it really
does. But in this case we're using a `FakeConnector `because the room
description mentions a path to the north, which we shall eventually want
to implement, but do not wish to implement yet.  
  
The code using this connector would have looked more like that using
rooms as connectors if we had defined the `FakeConnector` as a separate
object thus:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

fakePath : FakeConnector  
   travelDesc = "You decide against going that way right  
         now. "  
;  
  
The clearing would then be defined with  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="51"></td>
<td>north = fakePath <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

What we in fact did was to make `fakePath` both an *anonymous object*
and a *nested object* (all nested objects are in fact anonymous, though
the reverse is not true). A nested object is simply an object whose
definition is nested inside another object definition. In this case the
definition of the `FakeConnector` is nested within the definition of the
`clearing`. The definition of a nested object must be enclosed within
braces (and not terminated with a semicolon). `FakeConnector` uses a
template for which a double-quoted string is its `travelDesc` property
(the message that displays when one tries to travel via that connector).
The definition of the `north` property of `clearing` is thus a
convenient shorthand way of saying 'travel north from here is via an
anonymous object of class `FakeConnector` whose `travelDesc` property is
"You decide against going that way right now. " Although this
`FakeConnector` has no name of its own, it can be referred to as
`clearing.north`, i.e. the value of the `north `property of the
`clearing` object. Since this kind of shortcut definition is exceedingly
common in TADS 3 it is worth introducing at this early stage. We shall
meet several more examples as we go on to develop the game.  
  
If you compile and run the game as it is it will look as if nothing has
changed from the previous chapter; the new rooms we have added won't
appear. The reason for this (which you've probably guessed already) is
that we haven't added a connector out of the original outsideCottage
room (a bug waiting to happen when adding more rooms to an already
complex map). This is easy enough to put right; just add the following
to the definition of outsideCottage, between the room description and
the terminating semicolon:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="51"></td>
<td>east = forest <br />
</td>
</tr>
</tbody>
</table>

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

The game should now work as expected.  
  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](tyingupsomeloosestrings.html)
  [\[Next\]](climbingthetree.html)*

</div>
