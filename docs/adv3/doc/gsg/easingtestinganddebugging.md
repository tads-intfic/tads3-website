---
layout: docs
---
<div class="topbar">

[<img src="topbar.jpg" data-border="0" />](index.html)

</div>



[\[Main\]](index.html)  
*[\[Previous\]](lookingthroughthewindow.html)
  [\[Next\]](wheretogofromhere.html)*

## Easing Testing and Debugging

A section headed 'testing and debugging' is always in danger of
provoking a yawn from the reader of programming guides, so be assured
that I shall be offering no general exhortations to good testing
practice or complicated descriptions of debugging techniques. Instead I
shall simply assume that you recognize at least some need to test and
debug your creations and might be interested in one or tools that can
make the process a bit less painful.

  
Even with a game as brief as *The Further Adventures of Heidi*, it can
become quite tedious to have to keep retyping a whole sequence of
commands to reach the point of the game at which you want to put
something to the test (e.g., an alternative implementation of the way
the chair object lets Heidi climb the tree). In a much larger game the
prospect of having to do this would be simply horrendous. TADS 3 has a
built-in mechanism for easing this pain: you can record a series of
commands in a command (cmd) file and play them back on subsequent
occasions. So, for example, if you wanted to test alternative chair
implementations you might start up the game, and as the very first
command type: **record**. A dialogue box will then appear asking you to
supply a file name (you might call it 'chairtest'). You then carrying on
issuing commands until to the point at which you want to make repeated
tests, at which point you enter the command **record off**.  
  
Then, on subsequent occasions, you can use the commands **replay**,
**replay quiet** or **replay nonstop** to replay your command file to
bring you back to the same point in the game. The first form of the
command shows all the responses to each command as its read from the
file, pausing to make you hit the space bar with every page-full of
output; **replay nonstop**, as you might expect, does much the same
thing, but without waiting for any keypresses (you can always scroll
back the output window to read further back if you want to). Finally,
**replay quiet** plays back the command file with no output to the
screen at all; normally you'll want to issue a **look** command after a
**replay quiet** command to check where it's brought you to. As with the
**record** command, all three forms of the **replay** command provide
you with a dialogue box to select the file you want to play back
(although this can also be specified on the command line). There is also
an analogous **script** which can be used to copy the entire output
(player commands and game responses) to a log file; to stop outputting
to the file you use the command **script off**. You might use this after
making changes to a game to check that there were no unexpected changes
to its transcript (perhaps by comparing before and after versions of the
log file with a file comparison utility).  
  
Although these are all helpful, it can also be useful (for testing
purposes) to be able to teleport around the map or cause useful objects
to teleport into the player character's hands from anywhere in the game
world. Inform provides **gonear** and **purloin** verbs for just this
purpose, but no such verbs exist in the TADS 3 library. It is perfectly
possible to implement your own versions, though; the main complication
being that it is far from immediately obvious how to redefine the normal
scoping rules to allow a command to refer to and act on an object that
would normally not be considered in scope.  
  
The quick and dirty way round this would be to override the objInScope
method of the purloin and gonear actions:  

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

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td>DefineTAction(Gonear) <br />
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
<tr data-valign="TOP">
<td width="51"></td>
<td> objInScope(obj) { return true; } <br />
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
<tr data-valign="TOP">
<td width="51"></td>
<td>; <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
This works perfectly well, but it's theoretically less than ideal; we
don't actually want *every* object to be in scope for a **purloin** or
**gonear** command, since it makes no sense to use these verbs with
(say) Topics, ActorStates or TopicEntrys. A theoretically more rigorous
approach, which we'll look at just to see how it's done, is to build our
own list of objects we want considered in scope for these commands, and
then use that:  

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

\#ifdef \_\_DEBUG  
  
/\* The purpose of the everything object is to contain a list of all usable game objects  
   which can be used as a list of objects in scope for certain debugging verb.  
 Everything caches a list of all relevant objects the first time its lst method is called. \*/  
  
everything : object  
  /\* lst\_ will contain the list of all relevant objects. We initialize it to   
    nil to show that the list is yet to be cached \*/  
  lst\_ = nil  
    
  /\* The lst\_ method checks whether the list of objects has been cached yet.   
   If so, it simply returns it; if not, it calls initLst to build it first   
   (and then returns it). \*/   
  
  lst()  
  {  
    if (lst\_ == nil)  
      initLst();  
    return lst\_;  
  }  
  
  /\* initLst loops through every game object and adds it to lst\_, unless   
   it's a Topic, which we don't want included even in this universal scope.   
   \*/  
  
  initLst()  
  {  
    lst\_ = new Vector(50);  
    local obj = firstObj();  
     while (obj != nil)  
     {  
        if(obj.ofKind(Thing))  
            lst\_.append(obj);  
        obj = nextObj(obj);  
     }  
     lst\_ = lst\_.toList();  
  }  
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

There should not be a great deal that requires explanation. We head the
section with the preprocessor directive \#ifdef \_\_DEBUG (note the
double underscore before DEBUG) to ensure that our debugging verbs are
compiled only into the debugging version of the game we use for testing,
not in the final release version. The initList method uses a vector
rather than a list since this is slightly faster in execution; the
routine converts lst\_ to a list right at the end. The built-in
functions firstObj() and nextObj() are used to iterate through every
object we have defined in the game, and we use a test to include only
objects descended from Thing (i.e. programming objects that represent
physical game objects). Since all the objects are defined in the game
code there is no need to build this list more than once, so the code
builds the list only the first time the lst() method is called;
otherwise it simply returns the lst\_ previously constructed. A game
that used dynamically created objects might have to use a slightly
different approach.  
  
Defining the purloin verb is then only slightly more complex than
defining another new verb:  

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

DefineTAction(Purloin)  
  cacheScopeList()  
     {       
       scope\_ = everything.lst();           
     }    
;  
  
  
VerbRule(Purloin)  
  ('purloin'\|'pn') dobjList   
  :PurloinAction  
  verbPhrase = 'purloin/purloining (what)'  
;  
  
modify Thing  
  dobjFor(Purloin)  
  {  
   verify()  
   {  
    if(isHeldBy(gActor)) illogicalNow('{You/he} {is} already holding it. ');   
   }  
   check() {}  
   action  
    {  
      mainReport('{The/he dobj} pops into your hands.\n ');  
      moveInto(gActor);  
    }  
  }  
;  
  
modify Fixture  
  dobjFor(Purloin)  
  {  
    verify {illogical ('That is not something you can purloin - it is fixed   
     in place.'); }  
  }  
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

modify Immovable  
  dobjFor(Purloin)  
  {  
    check()  
    {  
      "You can't take {the/him dobj}. ";  
      exit;  
    }  
  }  
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

This definition assumes that we want to be able to **purloin** the kinds
of things that you could normally expect to pick up and carry around,
but not things that are fixed in place. If the behaviour you want is
different from this, you can define dobjFor(Purloin) routines
accordingly.  
  
The definition for **gonear** is similar:  

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

 DefineTAction(Gonear)  
   cacheScopeList()  
     {       
       scope\_ = everything.lst();           
     }  
;  
  
VerbRule(Gonear)  
  ('gonear'\|'gn'\|'go' 'near') singleDobj   
  :GonearAction  
  verbPhrase = 'gonear/going near (what)'  
;  
  
modify Thing  
  dobjFor(Gonear)  
  {  
    verify() {}  
    check() {}  
    action()  
    {  
       local obj = getOutermostRoom();  
         
       if(obj != nil)  
       {  
         "{You/he} {are} miraculously transported...\</p\>";  
         replaceAction(TravelVia, obj);  
       }  
       else  
         "{You/he} can't go there. ";  
    }  
  }  
;  
  
modify Decoration  
  dobjFor(Gonear)   
  {  
    verify() {}  
    check() {}  
    action() {inherited;}  
  }    
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

modify Distant  
  dobjFor(Gonear)   
  {  
    verify() {}  
    check() {}  
    action() {inherited;}  
  }    
;  
  
What the gonear verb does is to transport the player character to the
room in which the direct object of the gonear command is located (e.g.
**gonear burner** would transport you the fire clearing). Using
getOutermostRoom in the action method of dobjFor(Gonear) on Thing
ensures that you are transported to the outermost container (the room),
not the immediate container, which might be some other object. For
example, if you enter the command **gonear torch** you'll end up inside
the shed, not the cupboard (assuming the torch hasn't moved). If you
added vocabulary words to particular rooms, you could also use the
gonear verb with the room name to go straight to a room. We add
definitions on Decoration and Distant since it makes perfectly good
sense to gonear objects of these classes, but the library definition of
these classes, which makes use of dobjFor(Default), would otherwise
annul the definition of dobjFor(Gonear) we put on Thing.  
  
There may be other classes for which you'd want to add special handling
for these verbs, but one in particular we need to consider is MultiLoc.
Allowing a MultiLoc to be purloined might create havoc with your game
world, while attempting to gonear a MultiLoc has no defined outcome; we
thus need to define special handling to deal with these cases:  

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

modify MultiLoc  
  dobjFor(Gonear)  
  {  
    verify() { illogical('{You/he} cannot gonear {the dobj/him}, since it  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td> exists in more than one location. '); } <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  }  
  dobjFor(Purloin)  
  {  
    verify() { illogical('{You/he} cannot purloin {the dobj/him}, since it   

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="TOP">
<td width="51"></td>
<td>exists   in more than one location. '); } <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  }  
;  
  
\#endif  

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

We could simply have excluded MultiLocs from the scope list built by
everything.initLst(), but this would result in slightly odd messages of
the sort "You see no stream here" even when the stream is patently
present in the location at which you issue an ill-advised **purloin
stream** or **gonear stream** command. Allowing MultiLocs to be in scope
and then providing a meaningful message explaining why the action is
forbidden seems just that much neater. To be on the safe side you could
add a similar modfication for MultiInstance (to trap **gonear trees**
and **purloin trees**), but you'll find the game traps these for other
reasons anyway.  
  
The \#endif preprocessor directive at the end balances the
\#ifdef \_\_DEBUG at the start, thereby enclosing the entire block of
code we've just defined to implement our two new testing and debugging
verbs.  
  
Note that have made this more complicated than strictly necessary; if
you want to create this kind of thing for your own use you can dispense
with the everything object and just define
objInScope(obj) { return true; } on the TAction classes of your special
debugging verbs; we have gone the longer route here to show how to build
a custom scope list for cases where the blanket "put everything in
scope" approach may not be what you want.  
  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](lookingthroughthewindow.html)
  [\[Next\]](wheretogofromhere.html)*


