---
layout: docs
---
<span class="title">commLink</span><span class="type">object</span>

[query.t](../file/query.t.html)\[[728](../source/query.t.html#728)\]

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

A commLink is a Special that establishes a communications link between
the player character and one or more actors in remote locations.

To activate the commLink with another actor, call
commLink.connectTo(other). To make it a video link as well as an audio
link, call commLink.connectTo(other, true).

To disconnect the call with a specific actor, call
commLink.disconnectFrom(other); to terminate the commLink with all
actors, call commLink.disconnect()

**`commLink`**` :   `[`Special`](../object/Special.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`commLink`**  
`         `[`Special`](../object/Special.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`active`](#active)`  `[`connectionList`](#connectionList)`  `[`priority`](#priority)`  `

Inherited from `Special` :  
` `[`all`](../object/Special.html#all)`  `[`allActive_`](../object/Special.html#allActive_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`canHear`](#canHear)`  `[`canSee`](#canSee)`  `[`canTalkTo`](#canTalkTo)`  `[`connectTo`](#connectTo)`  `[`disconnect`](#disconnect)`  `[`disconnectFrom`](#disconnectFrom)`  `[`isConnectedTo`](#isConnectedTo)`  `[`scopeList`](#scopeList)`  `

Inherited from `Special` :  
` `[`allActive`](../object/Special.html#allActive)`  `[`classInit`](../object/Special.html#classInit)`  `[`first`](../object/Special.html#first)`  `[`next`](../object/Special.html#next)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="active"></span>

`active`<span class="rem">OVERRIDDEN</span>

[query.t](../file/query.t.html)\[[831](../source/query.t.html#831)\]

<div class="desc">

This Special is active is there's anything in its connectionList.

</div>

<span id="connectionList"></span>

`connectionList`

[query.t](../file/query.t.html)\[[828](../source/query.t.html#828)\]

<div class="desc">

The list of actors we're currently connected to. This is a list of two
element lists in the form \[actor, video\], where actor is the actor
we're connected to and video is true or nil according to whether the
link to that actor is a video link as well as an audio link.

</div>

<span id="priority"></span>

`priority`<span class="rem">OVERRIDDEN</span>

[query.t](../file/query.t.html)\[[906](../source/query.t.html#906)\]

<div class="desc">

Give this Special a higher priority that the QSenseRegion Special so
that it takes precedence when its active.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="canHear"></span>

`canHear (a, b)`

[query.t](../file/query.t.html)\[[746](../source/query.t.html#746)\]

<div class="desc">

We can hear an actor if s/he's in our connection list

</div>

<span id="canSee"></span>

`canSee (a, b)`

[query.t](../file/query.t.html)\[[771](../source/query.t.html#771)\]

<div class="desc">

Otherwise use the next special.

</div>

<span id="canTalkTo"></span>

`canTalkTo (a, b)`

[query.t](../file/query.t.html)\[[797](../source/query.t.html#797)\]

<div class="desc">

Otherwise use the next special.

</div>

<span id="connectTo"></span>

`connectTo (other, video, =, nil)`

[query.t](../file/query.t.html)\[[837](../source/query.t.html#837)\]

<div class="desc">

Connect this comms link to other; if video is specified and is true, the
comms links is also a video link.

</div>

<span id="disconnect"></span>

`disconnect ( )`

[query.t](../file/query.t.html)\[[859](../source/query.t.html#859)\]

<div class="desc">

Disconnect this commLink from everyone

</div>

<span id="disconnectFrom"></span>

`disconnectFrom (lst)`

[query.t](../file/query.t.html)\[[872](../source/query.t.html#872)\]

<div class="desc">

Disconnect this commLink from lst, where lst may be a single actor or a
list of actors.

</div>

<span id="isConnectedTo"></span>

`isConnectedTo (obj)`

[query.t](../file/query.t.html)\[[892](../source/query.t.html#892)\]

<div class="desc">

Is there a communications link with obj? Return nil if there is none,
AudioLink if there's an audio connection only and VideoLink if there's a
video connection as well.

</div>

<span id="scopeList"></span>

`scopeList (actor)`

[query.t](../file/query.t.html)\[[734](../source/query.t.html#734)\]

<div class="desc">

Our scope list must include all the actors we're currently connected to.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
