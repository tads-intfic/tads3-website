---
layout: docs
---
<div class="topbar">

[<img src="topbar.jpg" data-border="0" />](index.html)

</div>



[\[Main\]](index.html)  
*[\[Previous\]](verify.html)   [\[Next\]](action.html)*

### Check

The purpose of a `check()` routine is to veto an action that is
perfectly logical, but should not be carried out for some other reason.
As with `verify()`, `check()` should not be used to change the game
state. All that a `check()` routine should do is either allow an action
to go ahead, or else forbid it by displaying a message and using the
`exit `macro.

  
For example, suppose we gave Heidi a dress. Removing the dress would be
a perfectly logical action, and so the dress would be a good choice for
an ambiguous Doff action,. We don't want to make removing the dress
illogical, since it may well be what the player intends. On the other
hand, having Heidi remove her dress in the course of her adventures may
seem rather out of character, and it would serve no useful purpose in
the game, so we probably want to prevent it. The best place to do this
would be in a `check `routine:  

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

dobjFor(Doff)  
{  
   check()  
   {  
       reportFailure('You can\\t wander around half naked! ');  
       exit;  
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

Note that here we have used the reportFailure macro; it's not strictly
necessary to do so here: we could have used a double-quoted string to
display the text, and it would have worked just as well. However, using
reportFailure is a good habit to get into, since in other contexts
(outside a check() routine) it can be used to signal that an action
failed, which can sometimes produce better implicit action reports (e.g.
'(first trying to open the door)' rather than '(first opening the door)'
when the attempt to open the door fails).  
  
The use of reportFailure followed by exit is so common in
check() routines that Thing defines a failCheck() method that combines
them both into one statement. The foregoing example could then be
written:  

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

dobjFor(Doff)  
{  
   check()  
   {  
       failCheck('You can\\t wander around half naked! ');  
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

And our dress object (located immediately after the me object in the
code) could then be defined as:  

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

+ Wearable 'plain pretty blue dress' 'blue dress'  
  "It's quite plain, but you think it pretty enough. "  
  wornBy = me  
  dobjFor(Doff)  
  {  
     check()  
     {  
       failCheck('You can\\t wander around half naked! ');  
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

Of course, there's no reason why an action should not fail in the
action() routine as well in check() - the failCheck() method would work
perfectly well in action(), so you may wonder what real purpose check()
actually performs, beyond making the code look a bit neater if failure
is conditional. There are in fact three main reasons for separating
check() from action():

- As we have seen, a good deal of TADS 3 programming consists in
  overriding the library's standard verb handling. It is often
  convenient to override `check()` separately from `action()` if we want
  to change only the conditions under which the action isn't allowed to
  happen, or only what happens when the action does happen.
- In a two-object command (such as **put bag on table**) the `action()`
  routines are called on both the indirect object and the direct object.
  Ruling out the action in `check()` ensures that the action is stopped
  before either `action()` routine is called (otherwise we might find,
  for example, that the indirect object's `action()` method carried out
  the action before the direct object's `action()` method could stop
  it).
- From version 3.0.15.1 onwards the `check()` routines can be made to
  run before action notifications such as `beforeAction()`. For this to
  work you need to set `gameMain.beforeRunsBeforeCheck` to `nil`. We'll
  explore this a bit further below.

If an action is vetoed (either by check, verify or preCond) before it
reaches the action stage, no action notifications will be sent, and so
nothing that might have reacted to the action in a `beforeAction()` or
`afterAction()` method will in fact do so. But note, *`check()` only
runs before `beforeAction()` if you have set
`gameMain.beforeRunsBeforeCheck` to `nil`*. In some future release of
TADS 3 (perhaps 3.1) this may become the default, but for now you have
to set this option if you want it (this ensures compatibility with games
written prior to version 3.0.15.1). This is what we did when we first
defined the [gameMain](startinganewgame.html#gameMain) object, and we
suggest you always do too.

  
For example, suppose we went on to define an NPC who reacted to Heidi
undressing herself in front of him, with something like:  

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

afterAction()  
{  
  if(gActionIs(Doff) && gActor==gPlayerChar && gDobj==dress)  
     "\<q\>Hey! What do you think you're doing, young lady!\</q\> cries  
     the charcoal burner. ";  
}  
  
If we had simply displayed the message about not wandering around
half-naked in the action() routine, we might end up with a transcript
like this:  

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

\>**remove dress**  
You can't wander around half naked!  
  
"Hey, what do you think you're doing, young lady!" cries the charcoal
burner.  
  
By vetoing the **doff** action in the check() routine, we ensure that
the charcoal burner never gets a chance to react, and so we won't get
his inappropriate response to an action that is not, in fact, carried
out.  
  

------------------------------------------------------------------------

*Getting Started in TADS 3*  
[\[Main\]](index.html)  
*[\[Previous\]](verify.html)   [\[Next\]](action.html)*


