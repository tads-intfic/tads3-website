---
---
<span class="title">specialTopicHistory</span><span class="type">object</span>

[actor.t](../file/actor.t.html)\[[3948](../source/actor.t.html#3948)\]

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

A history of special topics listed in topic inventories. This keeps
track of special topics that we've recently offered, so that we can
provide better feedback if the player tries to use a recently-listed
special topic after it's gone out of context.

When the player types a command that the parser doesn't recognize, the
parser will check the special topic history to see if the command
matches a special topic that was suggested recently. If so, we'll
explain that the command isn't usable right now, rather than claiming
that the command is completely invalid. A player might justifiably find
it confusing to have the game suggest a command one minute, and then
claim that the very same command is invalid a minute later.

Ideally, we'd search \*every\* special topic for a match each time the
player enters an invalid command, but that could take a long time in a
conversation-heavy game with a large number of special topics. As a
compromise, we keep track of the last few special commands that were
actually suggested, so that we can scan those. The reasoning is that a
player is more likely to try a recently-offered special command; the
player will probably eventually forget older suggestions, and in any
case it's much more jarring to see a "command not understood" response
to a suggestion that's still fresh in the player's memory.

This is a transient object because we're interested in the special
topics that have been offered in the current session, irrespective of
things like 'undo' and 'restore'. From the player's perspective, the
recency of a special topic suggestion is a function of the transcript,
not of the internal story timeline. For example, if the game suggests a
special topic, then the player types UNDO, the player might still think
to try the special topic on the next turn simply because it's right
there on the screen a few lines up.

`transient `**`specialTopicHistory`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`specialTopicHistory`**  
`         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`historyList`](#historyList)`  `[`maxEntries`](#maxEntries)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`checkHistory`](#checkHistory)`  `[`noteListing`](#noteListing)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="historyList"></span>

`historyList`

[actor.t](../file/actor.t.html)\[[4051](../source/actor.t.html#4051)\]

<div class="desc">

The list of entries. Create it when we first need it, which perInstance
does for us.

</div>

<span id="maxEntries"></span>

`maxEntries`

[actor.t](../file/actor.t.html)\[[3979](../source/actor.t.html#3979)\]

<div class="desc">

Maximum number of topics to keep in our inventory. When the history
exceeds this number, we'll throw away the oldest entry each time we need
to add a new entry - thus, we'll always have the N most recent
suggestions.

This can be configured as desired. The default setting tries to strike a
balance between speed and good feedback - we try to keep track of enough
entries that most players wouldn't think to try anything that's aged out
of the list, but not so many that it takes a long time to scan them all.

If you set this to nil, we won't keep a history at all, but instead
simply scan every special topic in the entire game when we need to look
for a match to an entered command - in a game with a small number of
special topics (on the order of, say, 30 or 40), there should be no
problem using this approach. Note that this changes the behavior in one
important way: when there's no history limit, we can topics that
\*haven't even been offered yet\*. In some ways this is more desirable
than only scanning past suggestions, since it avoids weird situations
where the game claims that a command is unrecognized at one point, but
later suggests and then accepts the exact same command. It's conceivably
less desirable in that it could accidentally give away information to
the player, by letting them know that a randomly typed command will be
meaningful at some point in the game - but the odds of this even
happening seem minuscule, and the possibility that it would give away
meaningful information even if it did happen seems very remote.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="checkHistory"></span>

`checkHistory (toks)`

[actor.t](../file/actor.t.html)\[[4008](../source/actor.t.html#4008)\]

<div class="desc">

Scan the history list (or, if there's no limit to the history, scan all
of the special topics in the entire game) for a match to an unrecognized
command. Returns true if we find a match, nil if not.

</div>

<span id="noteListing"></span>

`noteListing (t)`

[actor.t](../file/actor.t.html)\[[3982](../source/actor.t.html#3982)\]

<div class="desc">

note that a special topic 't' is being listed in a topic inventory

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
