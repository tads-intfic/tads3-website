[conversationManager]{.title}[object]{.type}

[actor.t](../file/actor.t.html)\[[5007](../source/actor.t.html#5007)\]

[Superclass\
Tree](#_SuperClassTree_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
Conversation manager output filter. We look for special tags in the
output stream:

\<.reveal key\> - add \'key\' to the knowledge token lookup table. The
\'key\' is an arbitrary string, which we can look up in the table to
determine if the key has even been revealed. This can be used to make a
response conditional on another response having been displayed, because
the key will only be added to the table when the text containing the
\<.reveal key\> sequence is displayed.

\<.unreveal key\> - remove \'key from the knowledge token lookup table.

\<.inform key\> - add \'key\' to our actor\'s knowledge token lookup
take. The \'key\' is an arbitrary string, which we can look up in the
table to determine if the actor has ever been informed about this key.
This can be used to make a response conditional on another response
having been displayed, because the key will only be added to the
information table when the text containing the \<.inform key\> sequence
is displayed.

\<.convnode name\> - add \'name\' to the current list of convKeys (this
actually adds it to the actor\'s pendingKeys for use on the next turn);
this is normally used to trigger a Conversation Node that\'s defined to
match the same name.

\<.convodet name\> does the same as \<.convnode name\> and additionally
schedules a topic inventory (a listing of suggested topics); this can be
used to ensure that the player knows what conversational options are
available in the node we\'re about to enter, where this isn\'t obvious
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

\<.sugkey key\> Set our actor\'s suggestionKey to key (this potentially
restricts the list of topics that will be suggested)

\<.activate key\> Set the activated property to true for every topic
entry whose convKeys list includes key.

\<.agenda item\> Add item to the agenda list of our Actor and any
associated DefaultAgendaTopics.

\<.remove item\> Remove item from the agenda list of our Actor and any
associated DefaultAgendaTopics.

\<.state newstate\> Change our actor\'s current ActorState to newstate.

\<.known obj\> Mark obj (a Thing or Topic) as now being known (i.e.
familiar)

**`conversationManager`**` :   `[`OutputFilter`](../object/OutputFilter.html)`   `[`PreinitObject`](../object/PreinitObject.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`conversationManager`**\
`         `[`OutputFilter`](../object/OutputFilter.html)\
`                 object`\
`         `[`PreinitObject`](../object/PreinitObject.html)\
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`convnodeSetTurn`](#convnodeSetTurn)`  `[`customTags`](#customTags)`  `[`idToActor`](#idToActor)`  `[`objNameTab`](#objNameTab)`  `[`pendingTopicInventory`](#pendingTopicInventory)`  `[`pendingTopicInventoryKey`](#pendingTopicInventoryKey)`  `[`respondingActor`](#respondingActor)`  `[`tagPat`](#tagPat)`  `

` `

Inherited from `PreinitObject` :\
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`doCustomTag`](#doCustomTag)`  `[`execute`](#execute)`  `[`filterText`](#filterText)`  `[`manageKeys`](#manageKeys)`  `[`scheduleTopicInventory`](#scheduleTopicInventory)`  `[`setInformed`](#setInformed)`  `[`setRevealed`](#setRevealed)`  `[`setUnrevealed`](#setUnrevealed)`  `[`showAgendaError`](#showAgendaError)`  `[`showKnownError`](#showKnownError)`  `[`showObjDoesNotBelongToActorError`](#showObjDoesNotBelongToActorError)`  `[`showObjNotExistError`](#showObjNotExistError)`  `[`showStateError`](#showStateError)`  `[`showWrongKindofObjectError`](#showWrongKindofObjectError)`  `[`topicInventoryDaemon`](#topicInventoryDaemon)`  `

` `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#convnodeSetTurn}

`convnodeSetTurn`

[actor.t](../file/actor.t.html)\[[5358](../source/actor.t.html#5358)\]

::: desc
The turn on which we last processed a convnode tag
:::

[]{#customTags}

`customTags`

[actor.t](../file/actor.t.html)\[[5025](../source/actor.t.html#5025)\]

::: desc
Custom extended tags. Games and library extensions can add their own tag
processing as needed, by using \'modify\' to extend this object. There
are two things you have to do to add your own tags:

First, add a \'customTags\' property that defines a regular expression
for your added tags. This will be incorporated into the main pattern we
use to look for tags. Simply specify a string that lists your tags
separated by \"\|\" characters, like this:

customTags = \'foo\|bar\'

Second, define a doCustomTag() method to process the tags. The filter
routine will call your doCustomTag() method whenever it finds one of
your custom tags in the output stream.
:::

[]{#idToActor}

`idToActor`

[actor.t](../file/actor.t.html)\[[5573](../source/actor.t.html#5573)\]

::: desc
a vector of actors, indexed by their convMgrID values
:::

[]{#objNameTab}

`objNameTab`

[actor.t](../file/actor.t.html)\[[5623](../source/actor.t.html#5623)\]

::: desc
*no description available*
:::

[]{#pendingTopicInventory}

`pendingTopicInventory`

[actor.t](../file/actor.t.html)\[[5618](../source/actor.t.html#5618)\]

::: desc
flag: we have a pending prompt-time topic inventory request
:::

[]{#pendingTopicInventoryKey}

`pendingTopicInventoryKey`

[actor.t](../file/actor.t.html)\[[5621](../source/actor.t.html#5621)\]

::: desc
The key to use for the pending prompt-time inventory request
:::

[]{#respondingActor}

`respondingActor`

[actor.t](../file/actor.t.html)\[[5032](../source/actor.t.html#5032)\]

::: desc
The actor we\'re dealing with is the player character\'s current
interlocutor
:::

[]{#tagPat}

`tagPat`

[actor.t](../file/actor.t.html)\[[5361](../source/actor.t.html#5361)\]

::: desc
regular expression pattern for our tags
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#doCustomTag}

`doCustomTag (tag, arg)`

[actor.t](../file/actor.t.html)\[[5026](../source/actor.t.html#5026)\]

::: desc
*no description available*
:::

[]{#execute}

`execute ( )`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[5576](../source/actor.t.html#5576)\]

::: desc
preinitialize
:::

[]{#filterText}

`filterText (ostr, txt)`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[5035](../source/actor.t.html#5035)\]

::: desc
filter text written to the output stream
:::

[]{#manageKeys}

`manageKeys ( )`

[actor.t](../file/actor.t.html)\[[5370](../source/actor.t.html#5370)\]

::: desc
Provided we have a respondingActor, call its manageKeys method.
:::

[]{#scheduleTopicInventory}

`scheduleTopicInventory (key, =, nil)`

[actor.t](../file/actor.t.html)\[[5383](../source/actor.t.html#5383)\]

::: desc
Schedule a topic inventory request. Game code can call this at any time
to request that the player character\'s topic inventory be shown
automatically just before the next command prompt. In most cases, game
code won\'t call this directly, but will request the same effect using
the \<.topics\> tag in topic response text.
:::

[]{#setInformed}

`setInformed (tag)`

[actor.t](../file/actor.t.html)\[[5455](../source/actor.t.html#5455)\]

::: desc
Notify every actor who\'s in a position to hear that we\'ve just
imparted some information.
:::

[]{#setRevealed}

`setRevealed (tag)`

[actor.t](../file/actor.t.html)\[[5410](../source/actor.t.html#5410)\]

::: desc
Mark a tag as revealed. This adds an entry for the tag to the
revealedNameTab table. We simply set the table entry to \'true\'; the
presence of the tag in the table constitutes the indication that the tag
has been revealed.

(Games and library extensions can use \'modify\' to override this and
store more information in the table entry. For example, you could store
the time when the information was first revealed, or the location where
it was learned. If you do override this, just be sure to set the
revealedNameTab entry for the tag to a non-nil and non-zero value, so
that any code testing the presence of the table entry will see that the
slot is indeed set.)

The actual method and the revealedNameTab are on libGlobal rather than
here in order to make them available to games that don\'t include
actor.t.
:::

[]{#setUnrevealed}

`setUnrevealed (tag)`

[actor.t](../file/actor.t.html)\[[5446](../source/actor.t.html#5446)\]

::: desc
Mark a tag as unrevealed. This removes an entry for the tag to the
revealedNameTab table.

The actual method and the revealedNameTab are on libGlobal rather than
here in order to make them available to games that don\'t include
actor.t.
:::

[]{#showAgendaError}

`showAgendaError (tag, arg)`

[actor.t](../file/actor.t.html)\[[5489](../source/actor.t.html#5489)\]

::: desc
Display an error message if the game code tries to add or remove agenda
items from an agendaList using a \<.agenda item\> or \<.remove item\>
tag, when item doesn\'t correspond to a valid AgendaItem, but only do so
if the game has been compiled for debugging.
:::

[]{#showKnownError}

`showKnownError (tag, arg)`

[actor.t](../file/actor.t.html)\[[5531](../source/actor.t.html#5531)\]

::: desc
Display an error message if the game code tries mark an object as known
about using a \<.known obj\> tag, when obj doesn\'t correspond to a
valid Mentionable object, but only do so if the game has been compiled
for debugging.
:::

[]{#showObjDoesNotBelongToActorError}

`showObjDoesNotBelongToActorError (tag, arg, typ)`

[actor.t](../file/actor.t.html)\[[5565](../source/actor.t.html#5565)\]

::: desc
The object referred to by tag doesn\'t belong to the actor in question
:::

[]{#showObjNotExistError}

`showObjNotExistError (tag, arg, typ)`

[actor.t](../file/actor.t.html)\[[5550](../source/actor.t.html#5550)\]

::: desc
The object referred to by tag doesn\'t exist
:::

[]{#showStateError}

`showStateError (tag, arg)`

[actor.t](../file/actor.t.html)\[[5511](../source/actor.t.html#5511)\]

::: desc
Display an error message if the game code tries to change our actor\'s
ActorState via a \<.state newstate\> tag, when tag doesn\'t correspond
to a valid ActorState, but only do so if the game has been compiled for
debugging.
:::

[]{#showWrongKindofObjectError}

`showWrongKindofObjectError (tag, arg, typ)`

[actor.t](../file/actor.t.html)\[[5558](../source/actor.t.html#5558)\]

::: desc
The object referred to by tag is the wrong sort of object
:::

[]{#topicInventoryDaemon}

`topicInventoryDaemon ( )`

[actor.t](../file/actor.t.html)\[[5596](../source/actor.t.html#5596)\]

::: desc
Prompt daemon: show topic inventory when appropriate. When a response
explicitly asks us to show a topic inventory using the \<.topics\> tag,
or when other game code asks us to show topic inventory by calling
scheduleTopicInventory(), we\'ll show the inventory just before the
command input prompt.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
