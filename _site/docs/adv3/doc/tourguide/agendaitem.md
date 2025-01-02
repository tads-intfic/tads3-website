<table width="100%" data-border="0" data-cellspacing="0"
data-cellpadding="3" data-bgcolor="#C0C0C0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr>
<td style="text-align: left;"><strong>AgendaItem : object<br />
</strong></td>
<td style="text-align: right;"><a
href="initiateconversation.htm">[Previous]</a> <a
href="generalintroduction.htm">[Main]</a> <a
href="convagendaitem.htm">[Next]</a></td>
</tr>
</tbody>
</table>

  
The main purpose of the AgendaItem class is to provide a means of giving
some goal-seeking behaviour to an NPC by providing NPCs with a list of
actions to perform. As the comments in the library code explain it:  
  
*Each actor can have its own "agenda," which is a list of these items.
Each item represents an action that the actor wants to perform - this is
usually a goal the actor wants to achieve, or a conversational topic the
actor wants to pursue.  
  
On any given turn, an actor can carry out only one agenda item.  
  
Agenda items are a convenient way of controlling complex behavior. Each
agenda item defines its own condition for when the actor can pursue the
item, and each item defines what the actor does when pursuing the
item.  
  
Note that conversations override agendas. If an actor has an active
ConvNode, then the actor will not pursue its agenda until it leaves the
ConvNode. This ensures that the actor's agenda doesn't intrude upon
stateful conversations.  
*  
A secondary use for AgendaItems is simply to provide a way of having an
NPC to react to some circumstance without having to override a
takeTurn() method on its ActorState (which may not be particularly
convenient if we don't know what ActorState the NPC will be in at the
time we want the action triggered) or otherwise set up a Daemon for
testing whether the conditions that would trigger the action have been
fulfilled.  
  
For example, if the game reaches a state in which the curator can see
the golden banana, this will mean that he has caught the player
character in the act of stealing it. We could define an AgendaItem
(located directly in the curator) to handle this thus:  
  
+ stolenBanana : AgendaItem  
  initiallyActive = true  
  isReady = (getActor.canSee(goldenBanana))  
  invokeItem  
  {  
    "\<q\>You're trying to steal the Golden Banana of Discord!\</q\> cries  
    {the curator/he}, \<q\>That's High Treason! Punishable by death!  
    Instantly!\</q\>\b  
    So saying he pulls out a revolver and shoots you - twice. But the   
    first shot is enough.\b";  
    endGame(ftDeath);  
  }  
;  
  
Note that this works because this is the *only* AgendaItem we define for
the curator. If there were more that might be active at any one time,
using an AgendaItem to define the curator's response to seeing the
golden banana might not be such a good idea, since we could not be sure
that another AgendaItem that happened to be active in the critical turn
would not be executed in its stead (although we'll shortly discuss a way
round this).  
  
The main properties/methods to note on AgendaItem are:  
  

<table data-border="0" data-cellpadding="0" data-cellspacing="0">
<colgroup>
<col style="width: 50%" />
<col style="width: 50%" />
</colgroup>
<tbody>
<tr data-valign="top">
<td width="14"><strong></strong>·<strong></strong></td>
<td><strong>isReady</strong> - this property/method must return true for
the AgendaItem to be considered active. By default, this is simply true,
but you can override it with a condition that becomes true under certain
circumstances, or else start it at nil and then set it to true in some
other part of the game code.  <br />
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
<td><strong>invokeItem</strong> - the method that is called when this
AgendaItem is executed. Override this method to perform whatever actions
you want performed when this AgendaItem is invoked.  <br />
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
<td><strong>isDone</strong> - when this becomes true the AgendaItem is
removed from the actor's list of current AgendaItems. This can be set to
a declarative condition (or method) that returns true when certain
circumstances obtain, or can be set to true in code (typically by a
statement such as isDone = true within invokeItem).  <br />
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
<td><strong>initiallyActive</strong> - Override this to true to make the
item initially active; it will then be added to the actor's agenda
during the game's initialization.  <br />
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
<td><strong>agendaOrder -</strong> The ordering of the item relative to
other agenda items. When we choose an agenda item to execute, we always
choose the lowest numbered item that's ready to run. You can leave this
with the default value (100) if you don't care about the order.  <br />
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
<td><strong>getActor()</strong> - returns the actor to which this
AgendaItem belongs (effectively returns the location property of the
AgendaItem).  <br />
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
<td><strong>resetItem</strong>() - resets isDone to nil if isDone is not
a method. This is called whenever an AgendaItem is added to an actor's
agendaList, and thus makes it easier to re-use an AgendaItem.  <br />
</td>
</tr>
</tbody>
</table>

|     |     |
|-----|-----|
|     |     |

  
To use an AgendaItem you first need to define it and locate it directly
within its actor. To have it taken into account in that actor's turn you
then need to add it to the actor's agenda, by a call to
actor.addToAgenda(myAgendaItem). Each turn when the actor is not
otherwise engaged, it will scan its agendaList and call the invokeItem()
method of the first AgendaItem it finds for which isReady is true. It
also looks for all the AgendaItems in its agendaList for which isDone is
true and removes them.  
  
Now suppose we want the curator to react if he sees the player character
carrying Solomon's carbuncle (which he wants to acquire for the museum).
We could add another AgendaItem like this:  
  
+ curatorSurprise : AgendaItem  
  initiallyActive = true  
  isReady = (getActor.canSee(carbuncle) && carbuncle.isIn(gPlayerChar))  
  invokeItem  
  {  
    "{The curator/he} stares at you in amazement when he sees what  
      you're carrying. ";  
     isDone = true;  
  }    
;  
  
Note that we only want the curator's reaction to occur once, so we
ensure that the invokeItem method includes the statement isDone = true.
The one problem now is that if the player character appears in front of
the curator carrying both the Golden Banana of Discord and Solomon's
Carbuncle, we can't be sure which of the two AgendaItems will be
activated (in fact this could never happen in this game, since the
player character cannot gain access to the Golden Banana without first
giving the carbuncle to the curator, but the problem could come up in
other contexts, so it's worth discussing). The solution to this is to
define which AgendaItem we want to take priority, by using the
agendaOrder property. Since the default agendaOrder is 100, we could
either lower the order of stolenBanana or raise that of curatorSurprise
(the Agenda item with the lower order takes precedence). We can do the
latter, say, by adding agendaOrder = 150 to the definition of
curatorSurprise.  
  
  
