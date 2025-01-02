<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>Basic Actor Customization<br />
</strong></td>
<td style="text-align: right;"><a href="basicactors.htm">[Previous]</a>
<a href="generalintroduction.htm">[Main]</a> <a
href="actorknowledge.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
One of the most basic ways we can start to customize an actor is to
override some of his/her standard message properties to customize the
response the actor gives to such commands as KISS SARAH or HIT SARAH. We
can do this very simply by defining appropriate message properties on
the actor, such as **cannotKissActorMsg** and **uselessToAttackMsg**,
and then assigning them a single-quoted string to contain the message we
want displayed in response to KISS or HIT (for example).  
  
These message properties will also work perfectly well if they're
defined as methods that return a single-quoted string. This means we
could define one of these properties, cannotKissActorMsg, say, to return
one of a list of messages. In this case we might like to use a
[ShuffledEventList](shuffledeventlist.htm), but this won't quite do,
since we need something that *returns* a single-quoted string, not
something that displays one. Fortunately, there is a class that can do
this, namely the **ShuffledList**. We can place a list of strings (or
anything else we like) in a ShuffledList's **valueList** property, and
then call its **getNextValue** method to return a random element from
the list. The advantage of using this method over simply using the
rand() function with a list of strings is the same as the advantage of
using a ShuffledEventList over a RandomEventList, namely that the
ShuffledList will keep working through the complete list of items in its
valueList property before repeating any of them.  
  
Taking advantage of the message properties and a ShuffledList we could
accordingly customize Sarah to cope with being hit and kissed in her own
particular way:  
  
  
sarah : Person 'attractive young woman/brunette' 'young woman' @lakeRoom  
  "She's an attractive brunette, somewhere in her mid-twenties. "  
  isHer = true  
  properName = 'Sarah'  
  globalParamName = 'sarah'    
    
  **uselessToAttackMsg = '\<q\>Ouch! What did you do that for?\</q\> she complains. '  
  cannotKissActorMsg { return noKissMessages.getNextValue; }  
    
  noKissMessages : ShuffledList  
  {  
   valueList =   
   \[  
   '\<q\>Hey! What do you think you\\re doing!\</q\> she complains. ',  
   '\<q\>Stop that!\</q\> she tells you. ',  
   '\<q\>Keep your hands off me!\</q\> she demands. ',  
   '\<q\>Don\\t \<i\>do\</i\> that!\</q\> {the sarah/she} tells you. '  
   \]  
  }  
**;  
