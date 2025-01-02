<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Hint : MenuSubTopicItem<br />
</strong></td>
<td style="text-align: right;"><a href="goal.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="concludingremarks.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
As we have seen, most of the hints given within a [Goal](goal.htm)
object are single-quoted strings, but there may be occasions when we
want a hint to do a bit more than display a message, and in that case we
can use a Hint object.  
  
Hint defines two properties and one method:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>hintText</strong> - the text that is displayed for this
hint.  <br />
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
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>referencedGoals -</strong> A list of other Goal objects that
this hint references. By default, when this hint is shown for the first
time, each goal in this list is promoted from Undiscovered to Open.
Sometimes, it's necessary to solve one puzzle before another can be
solved. In these cases, some hints for the first puzzle (which depends
on the second), especially the later, more specific hints, might need to
refer to the other puzzle. This would make the player aware of the other
puzzle even if they weren't already. In such cases, it's a good idea to
make sure that we make hints for the other puzzle available immediately,
since otherwise the player might be confused by the absence of hints
about it.  <br />
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
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>getItemText ( )</strong> - Get the hint text. By default, we
mark as Open any goals listed in our referencedGoals list, then return
our hintText string. Individual Hint objects can override this as
desired to apply any additional side effects.  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
Prior to TADS 3.0.9 there was no Hint template, so you would need to
define your own if you wanted one (which would be useful since hintText
and referencedGoals are likely to be used a good deal on Hint objects).
TADS 3.0.9 now defines:  
  
Hint template 'hintText' \[referencedGoals\]? ;  
  
If you keep all your hints in one source file, which is probably a good
idea, then this definition need only be placed once, at the start of
your hints file, since there's no need for you to be defining Hint
objects anywhere else.  
  
The normal way we'd use a Hint object is when the text of a hint
suggests another goal that the player might want to pursue, so that this
second goal should become an open one. For example, if we provide a
series of hints to the player about how to open the door south from
anotherCave, we'll sooner or later end up telling the player to put a
groat in the slot. This then alerts the player that s/he needs to find a
groat, which could then become another goal we want to open at this
point. This is how we can handle this with a couple more Goals linked by
a suitable Hint:  
  
++ Goal 'How do I open the south door in Another Cave?'  
 \[  
   'Have you examined the door closely?',  
   'Have you looked at the slot in the door?',  
   'Is there anything written by the slot?',  
   groatHint  
 \]    
 openWhenSeen = lakeDoor  
 closeWhenTrue = (!lakeDoor.isLocked) // there's no way of relocking this door so this is safe  
;   
    
/\* Note, there's no need to locate a Hint item inside the Goal that references it,  
 \* it is simply convenient to do so (a) to show the relationship between the two  
 \* and (b) so we can carry on adding Goals after the Hint without the containment  
 \* tree getting messed up.  
 \*/  
   
+++ groatHint : Hint  
  'You need to put a groat in the slot. '  
  \[groatGoal\]  
;  
  
++ groatGoal : Goal   
  'What\\s a groat and where can I find one? '  
  \[  
    'A groat is a small coin. ',  
    'More specifically, it\\s a small brass coin. ',  
    'You won\\t find it till you\\ve dealt with the boulder. ',  
    'How closely have you examined everything in the cave beyond the boulder? ',  
    'What might be under the carpet, and how might you find out? ',  
    'Have you tried pulling the carpet? '      
  \]  
  closeWhenDescribed = brassCoin  
;  
  
We use closeWhenDescribed on the groatGoal goal, because the brass coin
is first named as a 'small brassy object', and does not reveal itself as
a coin - specifically a groat - until it has been examined (which sets
described to true). We do not need to define an OpenWhenXXX property on
groatGoal since groatCall is opened by groatHint.  
  
  
