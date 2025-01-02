---
layout: docs
---
<div class="topbar">

[<img src="topbar.jpg" data-border="0" />](index.html)

</div>



[\[Main\]](index.html)  
*[\[Previous\]](remap.html)   [\[Next\]](otherresponsestoactions.html)*

### Messages

So far, when we've used things like illogical(), reportFailure() and the
like, we've used them with single-quoted strings
(e.g. illogical('You can't do that. ') ). If you look in library source
code, however, you won't see them used like that; instead you'll see
them used with property pointers (e.g. &cannotTakeMsg) sometimes
followed by one or more further arguments (a property pointer is &
followed by the name of the property we want to reference). This allows
the text of messages to be kept separate from the library code, which,
among other things, makes it easier to translate the library into
another language, since all the language-dependent stuff is on one
place - or rather two (en_us.t and msg_neu.t) - rather than scattered
all over the library.

  
What actually happens when the library sees something like
illogical(&cannotTakeMsg) is that it calls the corresponding property on
the object returned by gActor.getActionMessageObj(); thus, for example,
when the library wants to display the message from
illogical(&cannotTakeMsg) it actually calls:  

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
<td>gActor.getActionMessageObj().cannotTakeMsg <br />
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
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

This then returns the single-quoted string to be displayed. This,
incidentally, is why we need to use a property pointer here. A function
call like `illogical(cannotTakeMsg)` would look for a property called
`cannotTakeMsg` on the current object and pass the value of that
property to whatever routine was going to process it. But that's not
what we want here; what we want to do is to tell the routine which
property of `gActor.getActionMessageObj()` to use, and for that we need
to pass a property *pointer* (`&cannotTakeMsg`) not the property *value*
(`cannotTakeMsg`).

When the player character is the actor (as is generally the case when
executing player commands), then gActor.getActionMessageObj() returns
playerActionMessages; if an NPC is performing the action then it returns
npcActionMessages. Both objects are defined in msg_neu.t, where you can
find all the library default messages.  
  
Sometimes you'll see in library code that one of these message macros
has more than one parameter; for example, you might see something
like:  

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
<td>illogical(&amp;mustBeHoldingMsg, self); <br />
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
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

In such a case the second and subsequent parameters are arguments to the
method invoked by the first parameter, so that the above example would
get its message string from:  

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
<td>gActor.getActionMessageObj().mustBeHoldingMsg(self) <br />
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
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

So far this may all seem quite remote from the concerns of a game
author, but as we shall see, this mechanism can have its uses in game
code.  
  
Firstly, if you don't like any of the library default messages, you can
simply modify the playerActionMessages object to substitute your own
version (this is not the only way to do it, but it's probably as good as
the alternative, which we'll see in a minute). For example, the standard
response to trying to put something on an object that isn't a Surface is
"There's no good surface on {the iobj/him}. "; thus, for example, if you
try to put the stick on the cottage:  

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

**\>put stick on cottage  
**There's no good surface on the pretty little cottage.  

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

You might prefer a different message as a default, such as "You can't
put anything on {the iobj/him}. " In which case all you need to do is to
override the notASurfaceMsg in playerActionMessages:  

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

modify playerActionMessages  
    notASurfaceMsg = '{You/he} can\\t put anything on {the iobj/him}. '  
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

If you like, you can try adding this to heidi.t, recompiling, and then
trying putting the stick on the cottage (or anything else on anything
else that's not a surface).  
  
In addition to this, you can also change the messages by defining the
appropriate message property on a class or object. Thus, for example, we
could have obtained almost the same result by modifying Thing:  

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

modify Thing  
    notASurfaceMsg = '{You/he} can\\t put anything on {the iobj/him}. '  
;  
  
I say *almost* the same result because there is in fact a small (though
readily fixable) catch with this that we'll come to shortly, which is
why the first method might be slightly better for making global changes
to messages. However, this second method is very useful when you want to
customise the message that appears for individual objects (or particular
classes of object). For example, suppose instead of the plain vanilla
"You can't take that" message you'd get from trying to take the cottage,
you'd like to see "It may be a small cottage, but it's still a lot
bigger than you are; you can't walk around with it!" One way to do that
would be to override the cottage's verify method for the Take action:  

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

dobjFor(Take)  
{  
   verify()  
   {  
      illogical('It may be a small cottage, but it\\s still a lot   
        bigger than you are; you can\\t walk around with it! ');  
   }  
}  

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

That will work fine, but it's relatively verbose just for changing a
message, and could quickly become quite tedious if you wanted to
customize a lot of messages on a lot of objects. However, the mechanism
we've just been exploring offers a handy short-cut; all you actually
need to do to customize this response on the cottage is to add the
following to its definition:  

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

  cannotTakeMsg = 'It may be a small cottage, but it\\s still a   
     lot bigger than you are; you can\\t walk around with it! '  

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

What happens here is that the procedure for choosing which object will
supply the message is a little more complex than originally described
above. Before the parser selects either the playerActionMessages or
npcActionMessages object it looks to see if the property it's looking
for is defined on any of the objects defined in the action; if so, it
uses that object instead. Since cottage now defines a
cannotTakeMsg property, the cottage's version is used in preference to
that defined on playerActionMessages.  
  
But although this is very useful, it also presents a potential trap for
the unwary. Suppose we also wanted to customise the response to **clean
cottage**. In the same way we could just add a cannotCleanMsg property
to the definition of the cottage:  
  
+ Enterable -\> (outsideCottage.in)   
   'pretty little cottage/house/building' 'pretty little cottage'    
    "It's just the sort of pretty little cottage that townspeople  
    dream of living in, with roses round the door and a neat   
    little window frame freshly painted in green. "       
  
    cannotTakeMsg = 'It may be a small cottage, but it\\s   
      still a lot bigger than you are; you can\\t walk around with it! '  
    cannotCleanMsg = 'You don\\t have time for that right now. '   
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

If you now recompile heidi.t and enter the command **clean cottage**,
you'll see that it works as expected, you now see the response "You
don't have time for that right now." The trouble is you'll see the same
response if you enter the obviously nonsensical command **clean door
with cottage**, instead of the expected "You can't clean anything with
that" or "You wouldn't know how to clean that." The problem is that
since the cottage defines a cannotCleanMsg, and the cottage is one of
the objects involved in the command, the cottage's cannotCleanMsg is
used in preference to any of the properties on playerActionMessages. The
solution is to specify that you only want your custom cannotCleanMsg to
be used when the cottage is the direct object of the command; you can do
that with the dobjMsg macro:  

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
<td>cannotCleanMsg = dobjMsg('You don\'t have time for that right now. ') <br />
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
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

Similarly, if you defined a message that should only work when the
cottage is the indirect object of a command (e.g. **put stick on
cottage**), you must remember to use the iobjMsg macro:  

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
<td>notASurfaceMsg = iobjMsg('You can\'t reach the roof. ') <br />
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
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

Forgetting to use dobjMsg or iobjMsg when customizing a response for
what is, or might be, a two-object command is a *very* easy mistake to
fall into, so it's worth drumming into yourself at an early stage that
you must *always* stop to think whether one or other macro might be
necessary. Frequent use of customized messages is one thing that tends
to distinguish a really good piece of IF from a mediocre one, so this is
a technique you will want to master and use often in your own work.  
  
There is one further problem here. If you type a nonsensical command
like **clean cottage with door** you'll now see the response "You don't
have time for that right now", which is clearly less than ideal. This
can't be fixed simply by tweaking message properties; the cleanest
solution here might be to make **clean with** fail in check rather than
verify on the direct object, so the indirect object's failure message is
used instead:  

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

modify Thing  
  dobjFor(CleanWith)  
  {  
    verify() {}  
    check() { failCheck(&cannotCleanMsg); }  
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

The question you're probably asking yourself now is, "That's all very
well, but how on earth do I know what message property I need to
customise for a given action?" Well, you can find out by looking through
the library code, but that's fairly laborious, so you really need a
quick-reference chart: you should one find included in the TADS 3
documentation set, or a complete set of quick-reference charts for TADS
3 can be obtained from
<a href="%20http://users.ox.ac.uk/~manc0049/TADSGuide/QRefs.zip%20"
target="_top">http://users.ox.ac.uk/~manc0049/TADSGuide/QRefs.zip</a>.
Since this information is so important for TADS 3 authors, it's also
included in this *Guide* at [Appendix
A](appendixa-actionmessagepropert.html) (though you'll probably find the
downloaded chart a bit easier to use, since you can print it out on the
two sides of a single sheet of paper). The chart doesn't list all the
messages defined in the library (that would make such an unwieldy
document that it would probably be self-defeating), but it does include
the ones you'll most commonly want to override. For each of the
transitive actions defined in the library (i.e. actions that take one or
more Things as objects, but excluding actions such as Look or Inventory
that don't), the chart shows the corresponding message property name as
it is defined on Thing, and also on any subclasses where it is
overridden to something different. The chart also indicates whether the
message property is invoked from verify, check or action (abbreviated to
V, C, and A respectively) and whether it is used when the object is
either the direct or indirect object of the command (abbreviated to d or
i). Thus, for example, if you look under PutIn (not to be confused with
the former Russian president) you'll see:  
  
PutIn      Thing iV             notAContainerMsg  
           Fixture dV           cannotPutMsg  
           Component dV         cannotPutComponentMsg(location)  
           Immovable dC         cannotPutMsg  
  
This means that Thing.verifyIobjPutIn uses notAContainerMsg, and this
will propagate all the way down the class hierarchy (except for objects
that *are* Containers, of course). There's no entry for Thing dV since
in general there's no reason to rule out a Thing as the *direct* object
of a PutIn command. However, since Fixtures, Components and Immovables
can't be moved, they can't be put in anything, so there are messages for
not being able to put them. The only difference between Fixture and
Immovable is that in Fixture a PutInAction is ruled out in verify(),
whereas in an Immovable it's ruled out in check(); in both cases the
cannotPutMsg is used. A Component also rules itself out as the direct
object of a PutIn command, again in verify(), but this time with a
different message and one that calls a parameter (location will normally
be the object the Component is a component of). If you wanted to define
your own cannotPutComponentMsg on an object, you can either simply
define it as a single-quoted string, or as a method that's passed
location as a parameter, e.g. either  

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

cannotPutComponentMsg = 'You can\\t do that, because it's part of   
  the worble-wangler. '  

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
<td>Or <br />
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
<td> <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

cannotPutComponentMsg(obj)  
{  
    gMessageParams(obj);  
    return 'You can\\t do that, because it\\s part of {the obj/him}. ';  
}  

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

As an example to try in the context of the Heidi game, you could try
adding the following in the starting location (outsideCottage):  

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

+ Distant 'forest' 'forest'  
  "The forest is off to the east. "  
  tooDistantMsg = 'It\\s too far away for that. '  
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

This works fine, even though the library version of tooDistantMsg is
actually a method which is passed self as a parameter (look under
Default in Appendix A).  
  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](remap.html)   [\[Next\]](otherresponsestoactions.html)*


