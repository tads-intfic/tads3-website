---
layout: docs
---
<span class="title">conversationManager</span><span class="type">object</span>

[actor.t](../file/actor.t.html)\[[163](../source/actor.t.html#163)\]

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

\<.convnode name\> - switch the current responding actor to conversation
node 'name'.

\<.convstay\> - keep the responding actor in the same conversation node
as it was in at the start of the current response

\<.topics\> - schedule a topic inventory for the end of the turn (just
before the next command prompt)

**`conversationManager`**` :   `[`OutputFilter`](../object/OutputFilter.html)[`PreinitObject`](../object/PreinitObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`conversationManager`**  
[`OutputFilter`](../object/OutputFilter.html)  
`                 object`  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`customTags`](#customTags)[`idToActor`](#idToActor)[`pendingTopicInventory`](#pendingTopicInventory)[`respondingActor`](#respondingActor)[`revealedNameTab`](#revealedNameTab)[`tagPat`](#tagPat)





Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`beginResponse`](#beginResponse)[`doCustomTag`](#doCustomTag)[`execute`](#execute)[`filterText`](#filterText)[`finishResponse`](#finishResponse)[`scheduleTopicInventory`](#scheduleTopicInventory)[`setRevealed`](#setRevealed)[`showOrScheduleTopicInventory`](#showOrScheduleTopicInventory)[`topicInventoryDaemon`](#topicInventoryDaemon)





Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute)[`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="customTags"></span>

`customTags`

[actor.t](../file/actor.t.html)\[[181](../source/actor.t.html#181)\]

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

[actor.t](../file/actor.t.html)\[[495](../source/actor.t.html#495)\]

<div class="desc">

a vector of actors, indexed by their convMgrID values

</div>

<span id="pendingTopicInventory"></span>

`pendingTopicInventory`

[actor.t](../file/actor.t.html)\[[536](../source/actor.t.html#536)\]

<div class="desc">

flag: we have a pending prompt-time topic inventory request

</div>

<span id="respondingActor"></span>

`respondingActor`

[actor.t](../file/actor.t.html)\[[466](../source/actor.t.html#466)\]

<div class="desc">

The current responding actor. Actors should set this when they're about
to show a response to an ASK, TELL, etc.

</div>

<span id="revealedNameTab"></span>

`revealedNameTab`

[actor.t](../file/actor.t.html)\[[492](../source/actor.t.html#492)\]

<div class="desc">

The global lookup table of all revealed keys. This table is keyed by the
string naming the revelation; the value associated with each key is not
used (we always just set it to true).

</div>

<span id="tagPat"></span>

`tagPat`

[actor.t](../file/actor.t.html)\[[342](../source/actor.t.html#342)\]

<div class="desc">

regular expression pattern for our tags

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="beginResponse"></span>

`beginResponse (actor)`

[actor.t](../file/actor.t.html)\[[395](../source/actor.t.html#395)\]

<div class="desc">

Note that an actor is about to give a response through a TopicEntry
object. We'll remember the actor so that we'll know which actor is
involved in a \<.convnode\> operation.

</div>

<span id="doCustomTag"></span>

`doCustomTag (tag, arg)`

[actor.t](../file/actor.t.html)\[[182](../source/actor.t.html#182)\]

<div class="desc">

*no description available*

</div>

<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[498](../source/actor.t.html#498)\]

<div class="desc">

preinitialize

</div>

<span id="filterText"></span>

`filterText (ostr, txt)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[185](../source/actor.t.html#185)\]

<div class="desc">

filter text written to the output stream

</div>

<span id="finishResponse"></span>

`finishResponse (actor, node)`

[actor.t](../file/actor.t.html)\[[421](../source/actor.t.html#421)\]

<div class="desc">

Finish the response - call this after we finish handling the response.
There must be a subsequent matching call to this routine whenever
beginResponse() is called.

'node' is the default new ConvNode the actor for the responding actor.
If another ConvNode was explicitly set in the course of handling the
response, this is ignored, since the explicit setting overrides this
default.

</div>

<span id="scheduleTopicInventory"></span>

`scheduleTopicInventory ( )`

[actor.t](../file/actor.t.html)\[[357](../source/actor.t.html#357)\]

<div class="desc">

Schedule a topic inventory request. Game code can call this at any time
to request that the player character's topic inventory be shown
automatically just before the next command prompt. In most cases, game
code won't call this directly, but will request the same effect using
the \<.topics\> tag in topic response text.

</div>

<span id="setRevealed"></span>

`setRevealed (tag)`

[actor.t](../file/actor.t.html)\[[482](../source/actor.t.html#482)\]

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

</div>

<span id="showOrScheduleTopicInventory"></span>

`showOrScheduleTopicInventory (actor, otherActor)`

[actor.t](../file/actor.t.html)\[[374](../source/actor.t.html#374)\]

<div class="desc">

Show or schedule a topic inventory request. If the current action has a
non-default command report, schedule it; otherwise, show it now.

If there's a non-default report, don't suggest the topics now; instead,
schedule a topic inventory for the end of the turn. When we have a
non-default report, the report could change the ConvNode for the actor,
so we don't want to show the topic inventory until we've had a chance to
process all of the reports.

</div>

<span id="topicInventoryDaemon"></span>

`topicInventoryDaemon ( )`

[actor.t](../file/actor.t.html)\[[518](../source/actor.t.html#518)\]

<div class="desc">

Prompt daemon: show topic inventory when appropriate. When a response
explicitly asks us to show a topic inventory using the \<.topics\> tag,
or when other game code asks us to show topic inventory by calling
scheduleTopicInventory(), we'll show the inventory just before the
command input prompt.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
