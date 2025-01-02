---
layout: docs
---
<span class="title">conversationManager</span><span class="type">object</span>

[actor.t](../file/actor.t.html)\[[5007](../source/actor.t.html#5007)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

Conversation manager output filter. We look for special tags in the
output stream:

\<.reveal key\> - add 'key' to the knowledge token lookup table. The
'key' is an arbitrary string, which we can look up in the table to
determine if the key has even been revealed. This can be used to make a
response conditional on another response having been displayed, because
the key will only be added to the table when the text containing the
\<.reveal key\> sequence is displayed.

\<.unreveal key\> - remove 'key from the knowledge token lookup table.

\<.inform key\> - add 'key' to our actor's knowledge token lookup take.
The 'key' is an arbitrary string, which we can look up in the table to
determine if the actor has ever been informed about this key. This can
be used to make a response conditional on another response having been
displayed, because the key will only be added to the information table
when the text containing the \<.inform key\> sequence is displayed.

\<.convnode name\> - add 'name' to the current list of convKeys (this
actually adds it to the actor's pendingKeys for use on the next turn);
this is normally used to trigger a Conversation Node that's defined to
match the same name.

\<.convodet name\> does the same as \<.convnode name\> and additionally
schedules a topic inventory (a listing of suggested topics); this can be
used to ensure that the player knows what conversational options are
available in the node we're about to enter, where this isn't obvious
from the context.

\<.convstay\> - retain the same list of active keys for the next
conversational response (and thus has the effect of making the
conversation remain in the same conversation node).

\<.convstayt\> - does the same as \<.convstay\> but additionally
schedules a topic inventory.

\<.topics\> - schedule a topic inventory for the end of the turn (just
before the next command prompt)

\<.arouse key\> Set the curiosityAroused property to true for all
TopicEntries whose convKeys include key

\<.suggest key\> Schedule a topic inventory for all topic entries whose
convKeys include key.

\<.sugkey key\> Set our actor's suggestionKey to key (this potentially
restricts the list of topics that will be suggested)

\<.activate key\> Set the activated property to true for every topic
entry whose convKeys list includes key.

\<.agenda item\> Add item to the agenda list of our Actor and any
associated DefaultAgendaTopics.

\<.remove item\> Remove item from the agenda list of our Actor and any
associated DefaultAgendaTopics.

\<.state newstate\> Change our actor's current ActorState to newstate.

\<.known obj\> Mark obj (a Thing or Topic) as now being known (i.e.
familiar)

**`conversationManager`**` :   `[`OutputFilter`](../object/OutputFilter.html)`   `[`PreinitObject`](../object/PreinitObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`conversationManager`**  
`         `[`OutputFilter`](../object/OutputFilter.html)  
`                 object`  
`         `[`PreinitObject`](../object/PreinitObject.html)  
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`convnodeSetTurn`](#convnodeSetTurn)`  `[`customTags`](#customTags)`  `[`idToActor`](#idToActor)`  `[`objNameTab`](#objNameTab)`  `[`pendingTopicInventory`](#pendingTopicInventory)`  `[`pendingTopicInventoryKey`](#pendingTopicInventoryKey)`  `[`respondingActor`](#respondingActor)`  `[`tagPat`](#tagPat)`  `

` `

Inherited from `PreinitObject` :  
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :  
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`doCustomTag`](#doCustomTag)`  `[`execute`](#execute)`  `[`filterText`](#filterText)`  `[`manageKeys`](#manageKeys)`  `[`scheduleTopicInventory`](#scheduleTopicInventory)`  `[`setInformed`](#setInformed)`  `[`setRevealed`](#setRevealed)`  `[`setUnrevealed`](#setUnrevealed)`  `[`showAgendaError`](#showAgendaError)`  `[`showKnownError`](#showKnownError)`  `[`showObjDoesNotBelongToActorError`](#showObjDoesNotBelongToActorError)`  `[`showObjNotExistError`](#showObjNotExistError)`  `[`showStateError`](#showStateError)`  `[`showWrongKindofObjectError`](#showWrongKindofObjectError)`  `[`topicInventoryDaemon`](#topicInventoryDaemon)`  `

` `

` `

Inherited from `ModuleExecObject` :  
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="convnodeSetTurn"></span>

`convnodeSetTurn`

[actor.t](../file/actor.t.html)\[[5358](../source/actor.t.html#5358)\]

<div class="desc">

The turn on which we last processed a convnode tag

</div>

<span id="customTags"></span>

`customTags`

[actor.t](../file/actor.t.html)\[[5025](../source/actor.t.html#5025)\]

<div class="desc">

Custom extended tags. Games and library extensions can add their own tag
processing as needed, by using 'modify' to extend this object. There are
two things you have to do to add your own tags:

First, add a 'customTags' property that defines a regular expression for
your added tags. This will be incorporated into the main pattern we use
to look for tags. Simply specify a string that lists your tags separated
by "\|" characters, like this:

customTags = 'foo\|bar'

Second, define a doCustomTag() method to process the tags. The filter
routine will call your doCustomTag() method whenever it finds one of
your custom tags in the output stream.

</div>

<span id="idToActor"></span>

`idToActor`

[actor.t](../file/actor.t.html)\[[5573](../source/actor.t.html#5573)\]

<div class="desc">

a vector of actors, indexed by their convMgrID values

</div>

<span id="objNameTab"></span>

`objNameTab`

[actor.t](../file/actor.t.html)\[[5623](../source/actor.t.html#5623)\]

<div class="desc">

*no description available*

</div>

<span id="pendingTopicInventory"></span>

`pendingTopicInventory`

[actor.t](../file/actor.t.html)\[[5618](../source/actor.t.html#5618)\]

<div class="desc">

flag: we have a pending prompt-time topic inventory request

</div>

<span id="pendingTopicInventoryKey"></span>

`pendingTopicInventoryKey`

[actor.t](../file/actor.t.html)\[[5621](../source/actor.t.html#5621)\]

<div class="desc">

The key to use for the pending prompt-time inventory request

</div>

<span id="respondingActor"></span>

`respondingActor`

[actor.t](../file/actor.t.html)\[[5032](../source/actor.t.html#5032)\]

<div class="desc">

The actor we're dealing with is the player character's current
interlocutor

</div>

<span id="tagPat"></span>

`tagPat`

[actor.t](../file/actor.t.html)\[[5361](../source/actor.t.html#5361)\]

<div class="desc">

regular expression pattern for our tags

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="doCustomTag"></span>

`doCustomTag (tag, arg)`

[actor.t](../file/actor.t.html)\[[5026](../source/actor.t.html#5026)\]

<div class="desc">

*no description available*

</div>

<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5576](../source/actor.t.html#5576)\]

<div class="desc">

preinitialize

</div>

<span id="filterText"></span>

`filterText (ostr, txt)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[5035](../source/actor.t.html#5035)\]

<div class="desc">

filter text written to the output stream

</div>

<span id="manageKeys"></span>

`manageKeys ( )`

[actor.t](../file/actor.t.html)\[[5370](../source/actor.t.html#5370)\]

<div class="desc">

Provided we have a respondingActor, call its manageKeys method.

</div>

<span id="scheduleTopicInventory"></span>

`scheduleTopicInventory (key, =, nil)`

[actor.t](../file/actor.t.html)\[[5383](../source/actor.t.html#5383)\]

<div class="desc">

Schedule a topic inventory request. Game code can call this at any time
to request that the player character's topic inventory be shown
automatically just before the next command prompt. In most cases, game
code won't call this directly, but will request the same effect using
the \<.topics\> tag in topic response text.

</div>

<span id="setInformed"></span>

`setInformed (tag)`

[actor.t](../file/actor.t.html)\[[5455](../source/actor.t.html#5455)\]

<div class="desc">

Notify every actor who's in a position to hear that we've just imparted
some information.

</div>

<span id="setRevealed"></span>

`setRevealed (tag)`

[actor.t](../file/actor.t.html)\[[5410](../source/actor.t.html#5410)\]

<div class="desc">

Mark a tag as revealed. This adds an entry for the tag to the
revealedNameTab table. We simply set the table entry to 'true'; the
presence of the tag in the table constitutes the indication that the tag
has been revealed.

(Games and library extensions can use 'modify' to override this and
store more information in the table entry. For example, you could store
the time when the information was first revealed, or the location where
it was learned. If you do override this, just be sure to set the
revealedNameTab entry for the tag to a non-nil and non-zero value, so
that any code testing the presence of the table entry will see that the
slot is indeed set.)

The actual method and the revealedNameTab are on libGlobal rather than
here in order to make them available to games that don't include
actor.t.

</div>

<span id="setUnrevealed"></span>

`setUnrevealed (tag)`

[actor.t](../file/actor.t.html)\[[5446](../source/actor.t.html#5446)\]

<div class="desc">

Mark a tag as unrevealed. This removes an entry for the tag to the
revealedNameTab table.

The actual method and the revealedNameTab are on libGlobal rather than
here in order to make them available to games that don't include
actor.t.

</div>

<span id="showAgendaError"></span>

`showAgendaError (tag, arg)`

[actor.t](../file/actor.t.html)\[[5489](../source/actor.t.html#5489)\]

<div class="desc">

Display an error message if the game code tries to add or remove agenda
items from an agendaList using a \<.agenda item\> or \<.remove item\>
tag, when item doesn't correspond to a valid AgendaItem, but only do so
if the game has been compiled for debugging.

</div>

<span id="showKnownError"></span>

`showKnownError (tag, arg)`

[actor.t](../file/actor.t.html)\[[5531](../source/actor.t.html#5531)\]

<div class="desc">

Display an error message if the game code tries mark an object as known
about using a \<.known obj\> tag, when obj doesn't correspond to a valid
Mentionable object, but only do so if the game has been compiled for
debugging.

</div>

<span id="showObjDoesNotBelongToActorError"></span>

`showObjDoesNotBelongToActorError (tag, arg, typ)`

[actor.t](../file/actor.t.html)\[[5565](../source/actor.t.html#5565)\]

<div class="desc">

The object referred to by tag doesn't belong to the actor in question

</div>

<span id="showObjNotExistError"></span>

`showObjNotExistError (tag, arg, typ)`

[actor.t](../file/actor.t.html)\[[5550](../source/actor.t.html#5550)\]

<div class="desc">

The object referred to by tag doesn't exist

</div>

<span id="showStateError"></span>

`showStateError (tag, arg)`

[actor.t](../file/actor.t.html)\[[5511](../source/actor.t.html#5511)\]

<div class="desc">

Display an error message if the game code tries to change our actor's
ActorState via a \<.state newstate\> tag, when tag doesn't correspond to
a valid ActorState, but only do so if the game has been compiled for
debugging.

</div>

<span id="showWrongKindofObjectError"></span>

`showWrongKindofObjectError (tag, arg, typ)`

[actor.t](../file/actor.t.html)\[[5558](../source/actor.t.html#5558)\]

<div class="desc">

The object referred to by tag is the wrong sort of object

</div>

<span id="topicInventoryDaemon"></span>

`topicInventoryDaemon ( )`

[actor.t](../file/actor.t.html)\[[5596](../source/actor.t.html#5596)\]

<div class="desc">

Prompt daemon: show topic inventory when appropriate. When a response
explicitly asks us to show a topic inventory using the \<.topics\> tag,
or when other game code asks us to show topic inventory by calling
scheduleTopicInventory(), we'll show the inventory just before the
command input prompt.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
