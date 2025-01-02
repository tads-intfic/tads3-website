<div class="topbar">

[<img src="topbar.jpg" data-border="0" />](index.html)

</div>

<div class="main">

[\[Main\]](index.html)  
*[\[Previous\]](definingourfirstroom.htm)
  [\[Next\]](tyingupsomeloosestrings.htm)*

## Adding an Object to the Room

It is time we added an object to our sample game. If you run the game
again and try typing **examine cottage** you'll be told that:

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

The word "cottage" is not necessary in this story.  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

But since our minimalist room description mentions the cottage, our game
ought to be able to do a bit better than that. This suggests that the
first thing we need to add to our game is a cottage. If we defined it in
full, our first attempt might look like this:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

cottage : Thing  
   vocabWords = 'pretty little cottage/house/building'  
   name = 'pretty little cottage'  
   desc = "It's just the sort of pretty little cottage that townspeople  
    dream of living in, with roses round the door and a neat little   
    window frame freshly painted in green. "  
   location = outsideCottage  
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

As we shall see in a moment, this can be simplified using the
appropriate template and the + syntax, but writing it out in full has
the merit of explicitly re-introducing two important properties,
location and vocabWords. The first of these, as its name suggests,
defines the location of an object (in this case, which room it's in);
more generally it defines what the immediate parent of an object is in
the object tree. You should normally avoid manipulating the location
property in programming statements (but here we have a property
definition, not a statement). The second property, vocabWords, lists the
words the player can use to refer to the object. In this definition, the
final group of words separated by slashes (cottage/house/building) are
the *nouns* by which this object may be known, whereas the first two,
separated by spaces, are the *adjectives*. This means that if you now
compile the game and run it, with the cottage added, you'll find that
you can **examine building**, **examine little house**, **examine pretty
little cottage**, but not **examine house cottage**, or **x building
house**.  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

In practice you would hardly ever define all those properties
explicitly, instead you'd make use of the standard Thing template (which
can be used not only for Thing objects but for objects whose classes
descend from Thing, which is the great majority of physical objects in
the game). Using this template, the definition becomes:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

cottage : Thing 'pretty little cottage/house/building'   
   'pretty little cottage'  @outsideCottage  
   "It's just the sort of pretty little cottage that townspeople dream of living in,   
    with roses round the door and a neat little window frame freshly painted in green. "     
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

Note the form of this definition, since it is *very* common in TADS 3.
After the superclass (or superclass list) comes first the list of
vocabulary words in single quotes, in the form 'adjective1 adjective2
noun1/noun2/noun3', then the name in single quotes, then the location
immediately preceded by an @ sign, and then the description in double
quotes (left till the end since it is likely to be the longest element).
The list of vocabulary words should always include at least one noun,
but may otherwise contain as many adjectives and alternative nouns as
you care to define. Ideally, what you need to aim for is a list of words
that will include most of those that a player is likely to type to
identify the object, while at the same time being sufficiently distinct
from the words used to identify other objects that the parser will not
have too hard a time trying to figure out which object is meant.  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

The @location element is optional in this template, so you could simply
define, for example:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

cottage : Thing 'pretty little cottage/house/building'   
   'pretty little cottage'  
  
    "It's just the sort of pretty little cottage that townspeople dream of living in,   
    with roses round the door and a neat little window frame freshly painted in green. "     
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

The only problem with this is that there's now nothing to say where the
cottage is located; the game will still compile but the cottage will
have disappeared. One way to bring it back would be to use the +
notation, so that the cottage could be defined:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

+ cottage : Thing 'pretty little cottage/house/building'   
   'pretty little cottage'    
  
   "It's just the sort of pretty little cottage that townspeople dream of living in,   
    with roses round the door and a neat little window frame freshly painted in green. "     
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

The + is just a shorthand way of saying "set the location property of
this object to the nearest previous object in the current source file
not preceded by a +". The + shortcut can be used to nest to any level,
so that if we began an object definition with ++ myObj, the location
property of myObj would be set to the nearest preceding object beginning
with a single + and so on. This allows for very compact code for
defining nested objects, e.g.:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

study : Room 'study' "A large desk stands under the window. ";  
+ desk : Heavy, Surface 'desk' 'desk' "This large desk has a single drawer. ";  
++ drawer : Component, OpenableContainer 'drawer', 'drawer' "It looks like it should open easily. ";  
+++ redPencil : Thing 'red pencil' 'red pencil' "It's a bit blunt. ";  
+++ bluePencil: Thing 'blue pencil' 'blue pencil' "It's been sharpened recently. ";  
  
In this case both the red pencil and the blue pencil will be inside the
drawer, the drawer inside the desk, and the desk inside the study.  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

But, to return to our cottage, if you change its definition to the
latest version above and recompile and run the game, you should find it
still works the same, but the way it works isn't quite what we want. For
one thing, the room description already mentions the cottage (that's why
we created a cottage object in the first place), so it's rather
superfluous for the game to add "You see a pretty little cottage here."
More seriously, if you type **take cottage** and then **inventory** (or
**i**) you'll find that you're carrying a pretty little cottage, which
should probably count as murder of mimesis in the first degree.  
  
The problem here is that Thing is the most generic class of object in
the library. For objects that you want the player character to be able
to pick up and carry around it's often fine, but for things that are
fixed in place or otherwise not intended to move, it's not the best
class to use. We could use the Fixture class to fix the present example.
Try changing Thing to Fixture in the definition of cottage and
recompiling the game. Then run it again. You'll see that the game no
longer displays "You see a pretty little cottage here" and that you can
no longer pick the cottage up. This is just about what we want (at least
for now), but there's a couple of further refinements we could add.  
  
Firstly, the main reason for adding the cottage was that a cottage was
mentioned in the room description, so the player ought to be able to
refer to it. So far, we have no other use for the cottage object. In
effect, the cottage is purely decorative, part of the scenery but not
otherwise part of the game. For this purpose the library defines a
Decoration class, and that might be the one to use here.  
  
Secondly, since the cottage is purely decorative (at least at this
stage) we probably won't need to refer to it anywhere else. We can
therefore make it an *anonymous* object, i.e. one to which we do not
give an object name. Such an object can simply be defined with its
superclass name (or list). So we can finally redefine our cottage as
follows:  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

+ Decoration 'pretty little cottage/house/building' 'pretty little cottage'    
   "It's just the sort of pretty little cottage that townspeople dream of living in,  
     with roses round the door and a neat little window frame freshly painted in green. "     
;  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

Try this, and you'll see that the game now simply tells you that "The
pretty little cottage isn't important" if you try to do anything with it
other than examine it. For now, this is just what we want.  
  
You'll note that the description of the cottage includes a door, a
window and some roses. It's always possible that a player may try to
examine these; so as an exercise you could try adding further Decoration
objects to represent them.  
  
In the present chapter we have learned the basics of defining room
objects and other objects. Progress may have seemed slow, but these are
the basics that apply to all objects in the game, so we should be able
to make more rapid progress from now on. In the next chapter we'll make
our game a little more interesting by adding some more rooms and
objects.  
  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](definingourfirstroom.htm)
  [\[Next\]](tyingupsomeloosestrings.htm)*

</div>
