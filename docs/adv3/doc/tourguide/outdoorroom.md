---
---
<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>OutdoorRoom : <a
href="room.html">Room</a><br />
</strong></td>
<td style="text-align: right;"><a href="introduction.html">[Previous]</a>
<a href="generalintroduction.html">[Main]</a> <a
href="fakeconnector.html">[Next]</a></td>
</tr>
</tbody>
</table>

  
We'll start our adventure outside a cave, so we'll begin by defining our
first room thus:  
  
outsideCave : OutdoorRoom 'Parser Valley' 'Parser Valley'  
  "To the north stretches the broad green Parser Valley under a clear blue sky,   
   past a small car park lying just off to the east. The main feature of  
   interest round here is the notorious Eerhtsdat Caves, the entrance to which  
   lies just to the south, marked by a large blue sign that proclaims, predictably  
   enough:\b\<FONT FACE='TADS-Typewriter' BGCOLOR=BLUE COLOR=WHITE\>  
   ENTRANCE TO THE\nEERHTSDAT CAVES\</FONT\>\n"  
     
   atmosphereList : ShuffledEventList {  
   \[  
     '\nA flight of birds disappears off to the west. ',  
     {: "\nA \<\<one of\>\>small\<\<or\>\>large\<\<at random\>\>  
       \<\<one
of\>\>green\<\<or\>\>red\<\<or\>\>blue\<\<or\>\>black\<\<or\>\>white\<\<at
random\>\> car  
       pulls out of the car park and drives off to the north. " },  
     '\nAn aeroplane flies far overhead. ',  
     nil  
   \]   
   }    
;  
  
We use the class OutdoorRoom for the obvious reason that it represents
an outdoor location (with no walls, and with ground and sky rather than
floor and ceiling). Recall that we have already set the location
property of the me object to outsideCave so that the player character
will begin here.  
  
Remember that the [Room template](roomtemplate.html) (which also applies
to OutdoorRoom) allows this abbreviated form of definition: the template
is defined as 'roomName' 'destName'? 'name'? "desc"?; which means that
the first single-quoted string after the class name is the roomName
property (the name that will be shown in the status line for the room),
the second (which is optional) the destName (the name by which the room
will be referred to in an exit lister) and the double-quoted string is
the desc property (which will be displayed as the room description). If
all these properties are used, they must be used in the order defined by
the template, and before any other properties are defined for the
room.  
  
In other words, the definition:  
  
outsideCave : OutdoorRoom 'Parser Valley' 'Parser Valley'  
  "To the north stretches the broad green Parser Valley under a clear blue sky,   
   past a small car park lying just off to the east. The main feature of  
   interest round here is the notorious Eerhtsdat Caves, the entrance to which  
   lies just to the south, marked by a large blue sign that proclaims, predictably  
   enough:\b\<FONT FACE='TADS-Typewriter' BGCOLOR=BLUE COLOR=WHITE\>  
   ENTRANCE TO THE\nEERHTSDAT CAVES\</FONT\>\n"  
;  
  
is exactly equivalent to writing out in full:  
  
outsideCave : OutdoorRoom   
   roomName = 'Parser Valley'   
   destName = 'Parser Valley'  
   desc = "To the north stretches the broad green Parser Valley under a clear blue sky,   
   past a small car park lying just off to the east. The main feature of  
   interest round here is the notorious Eerhtsdat Caves, the entrance to which  
   lies just to the south, marked by a large blue sign that proclaims, predictably  
   enough:\b\<FONT FACE='TADS-Typewriter' BGCOLOR=BLUE COLOR=WHITE\>  
   ENTRANCE TO THE\nEERHTSDAT CAVES\</FONT\>\n"  
;  
  
At this point we should pause to consider the relation between some of
these properties. The roomName is the room title displayed in the room
description and the status line; typically, this will be in title case
(e.g. "Hall of the Mountain King"). The destName is the title given to
the room in the exit lister that appears in response to the 'exits'
command, or when you try to move in direction you can't go (e.g. "north,
back to the hall of the mountain king"). The plain name property is the
title used by the parser to refer to the room when it features in
commands (which can normally only occur if the room is given
vocabWords). By default name is defined as roomName.toLower, and
destName is defined as theName. Often this gives reasonable results, but
you might often want to override it, as in this case where Parser Valley
is a proper name we want used both for the roomName and the destName.  
  
We'll define one extra property for OutsideRoom at this point, namely
its atmosphereList. If this is defined to hold a [Script](script.html)
object, the roomDaemon will automatically call its doScript method each
turn; in practice this means we can make it an anonymous nested object
of a Script class. Here we use a
[ShuffledEventList](shuffledeventlist.html) to display a series of
strings in random order.  
  
In order to vary the description of cars leaving the car park, we use
the \<\<one of\>\>...\<\<or\>\>...\<\<at random\>\> construction to
choose both the size and the colour of the car. The embedded expression
\<\<\>\> syntax can generally be used in a single-quoted string, so in
certain contexts (although in this particular case we'd probably just
about get away with it). A double quoted string cannot be used as an
element in the eventList property of an ShuffledEventList, but an
anonymous function can, and the double-quoted string can be printed
within the anonymous function. When the anonymous function consists of
only a single statement, as here, we can use the short form syntax
shown, i.e.  
  
{: *statement* }  
  
Note that the statement should then *not* be concluded with a
semicolon.  
  
  
  
  
