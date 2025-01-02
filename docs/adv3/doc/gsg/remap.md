---
layout: docs
---
<div class="topbar">

[<img src="topbar.jpg" data-border="0" />](index.html)

</div>

<div class="main">

[\[Main\]](index.html)  
*[\[Previous\]](precond.html)   [\[Next\]](messages.html)*

### Remap

We have already encountered remapping via the remapTo macro; it's used
when we want to remap a command on one object to a different command
involving the same or maybe different objects (or even no objects at
all). So, for example, on the tree object we earlier defined:

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
<td>dobjFor(Climb) remapTo(Up) <br />
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

What such code actually does is to make the appropriate remap property
return a list containing the action followed by the objects involved in
the action; the example above is in fact equivalent to:  

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
<td>remapDobjClimb = [UpAction] <br />
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

A more complicated example was the cottage, where we defined:  

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
<td>dobjFor(Enter) remapTo(TravelVia, insideCottage) <br />
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

which is equivalent to:  

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
<td>remapDobjEnter = [TravelViaAction, insideCottage] <br />
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

Mostly, you can use the remapTo macro without worrying about the
underlying code the compiler actually sees, but there are a couple of
cases where understanding the underlying code can be important. The
first thing to realize is that if there is a remap in operation (that is
the remap property is non-nil) this will take precedence over all the
other action properties (preCond, verify, check and action). In some
cases this can lead to unexpected results: you may define verify, check
and action for some verb on some object, but find that the object is
doing something quite different from what you defined. The reason may
very well be that your object has inherited a remap from one of its
superclasses, and that this remap is taking precedence over your
customizations of the other methods.  
  
For example, the library Room class remaps LookIn to Examine. Normally
this is a perfectly sensible interpretation, but you might decided
that's not what you want in your game. For example, you might feel that
a player who typed **search room** or **look in room** is just being
lazy, and should be instructed to concentrate on the objects within the
room instead. So you might write:  

    modify Room  dobjFor(LookIn)  {    verify()    {     illogical('Try examining some of the objects in the room instead. ');    }  };

But you'd find that this didn't actually change anything; **look in
room** and **search room** would still result in the room being
examined, since the remap would still be in action. What you'd actually
need to do is to reset the remap to nil:  

    modify Room  dobjFor(LookIn)  {    remap = nil    verify()    {     illogical('Try examining some of the objects in the room instead. ');    }  };

The second area where it can be useful to know how the underlying code
works is with conditional remapping. The library defines a macro called
maybeRemapTo(), which only remaps if a certain condition holds (that is,
if its first parameter is true). For example, if you had a gate object,
and you wanted **push gate** to be treated as **close gate** when the
gate was open, but in the normal way when the gate was closed, you could
define:  

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

gate: Door 'gate'  'gate'  
  dobjFor(Push) maybeRemapTo(isOpen, Close, self)  
;  

The underlying code here is in fact:   

</div>

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

remapDobjPush = (isOpen ? \[CloseAction, self\] : inherited());  

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

The first thing to note is that if the condition is not met (in this
case, if the gate is not open), what one gets is not necessarily no
remapping, but the inherited remapping. Often the inherited remapping is
in fact nil, but it might not be. For example, suppose you had a room in
your game called the Study, and you gave it a `vocabWords` property of
'study', so that it could be the taget of commands. In particular you
decide that you want the player to be able to enter the command search
study, and have this command find an important letter lying behind the
curtain (or wherever), if the letter hasn't already been found. You're
aware that `Room` inherits `dobjFor(Search) asDobjFor(LookIn)` from
`Thing`, so you decide to implement finding the letter in
`dobjFor(LookIn)`. If, however, the letter has already been discovered,
you decide you want search study or look in study simply to perform a
look command, so you write:

    dobjFor(LookIn) maybeRemapTo(letter.discovered, Look)

Unfortunately, this wouldn't work as you expected; it would do what you
wanted once the letter was discovered, except that it never will be,
since if `letter.discovered` is `nil` what you get is not no remapping
(in other words the execution of your `dobjFor(LookIn)` code), but the
inherited remapping, which in this case is defined on Room as:

    dobjFor(LookIn) remapTo(Examine, self) 

So if the letter is not discovered, **search study** or **examine
study** will remap to **examine study** and your special case LookIn
handling (to discover the letter) will never be invoked. What you
actually need in this case is:

    dobjFor(LookIn){  remap = (letter.discovered ? [LookAction] : nil)} 

  
Another situation when it's useful to use the underlying remap property
directly is where you want different remappings depending on
circumstances. For example you might want **push gate** to open the gate
when it's closed, and close the gate when it's open. This is beyond the
ability of maybeRemapTo, but quite possible with the underlying remap
property:  

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

gate: Door 'gate'  'gate'  
  dobjFor(Push)   
  {  
     remap = (isOpen ? \[CloseAction, self\] : \[OpenAction, self\] );  
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

By the way, note that when we're writing the 'raw' code rather than
using the macro, we have to give the full name of the Action class,
hence CloseAction and OpenAction rather than just Close and Open. One of
the things the remapTo and maybeRemapTo macros do for us is to add
'Action' to the name of the action we want (e.g. Open or Close), but if
we're not using these macros, we have to do it ourselves.

A further complication with remap is that when it's used with two-object
commands, special restrictions apply.

The first restriction is that a two-object command can only be remapped
to another two-object command. Failure to observe this rule will result
in a run-time error. The second restriction is that what we remap to
must be an action applying to a specific object plus the placeholder
`DirectObject` or `IndirectObject` (meaning the direct object or
indirect object of the command we're remapping from). The specific
object must be the one that's acting in the place of the object doing
the remapping (which may be `self` if it's the same object, or else some
other object), while the object role placeholder (`DirectObject` or
`IndirectObject`) must reflect the role of the other object in the
original command. Thus if `remapTo` follows `dobjFor()` it must use
`IndirectObject` in its list of objects, and if it follows `iobjFor()`
it must use `DirectObject`.

This should become clearer with an example. Suppose we have a desk with
a single drawer. The drawer can be locked with a small brass key, but we
want **lock desk with small brass key** to behave like **lock drawer
with small brass key**. We could bring this about by defining the
following on the desk:

    dobjFor(LockWith) remapTo(LockWith, drawer, IndirectObject)

Similarly we might want **put something in desk** to be treated as **put
something in drawer**, so we could write (on the desk object):

    iobjFor(PutIn) remapTo(PutIn, DirectObject, drawer)

What we can't do is (for example) to decide that trying to put something
in the desk is equivalent to dropping it and so write:

    iobjFor(PutIn) remapTo(Drop, DirectObject) // WRONG !!!

This doesn't mean that you can't make trying to put something in the
desk result in its being dropped on the floor, it just means you can't
use remap to for that purpose (instead you'd have to write appropriate
`verify()` and `action()` routines).  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](precond.html)   [\[Next\]](messages.html)*
