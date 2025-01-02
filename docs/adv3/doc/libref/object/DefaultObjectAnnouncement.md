---
---
<span class="title">DefaultObjectAnnouncement</span><span class="type">class</span>

[report.t](../file/report.t.html)\[[397](../source/report.t.html#397)\]

[Superclass  
Tree](#_SuperClassTree_)

[Subclass  
Tree](#_SubClassTree_)

[Global  
Objects](#_ObjectSummary_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

Default object announcement. We display this announcement whenever the
player leaves out a required object from a command, but the parser is
able to infer which object they must have meant. The parser infers that
an object was intended when a verb requires an object that the player
didn't specify, and there's only one logical choice for the missing
object. We announce our assumption to put it out in the open, to ensure
that the player is immediately alerted if they had something else in
mind.

In English, this type of announcement conventionally consists of simply
the name of the assumed object, in parenthesis and on a line by itself.
In cases where the object role involves a prepositional phrase in the
verb structure, we generally show the preposition before the object
name. This format usually reads intuitively, by combining with the text
just above of the player's own command:

  
\>open  
(the door\>  
You try opening the door, but it seems to be locked. \*.  
\>unlock the door (with the key)

`class `**`DefaultObjectAnnouncement`**` :   `[`CommandAnnouncement`](../object/CommandAnnouncement.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`DefaultObjectAnnouncement`**  
`         `[`CommandAnnouncement`](../object/CommandAnnouncement.html)  
`                 `[`CommandReport`](../object/CommandReport.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`allResolved_`](#allResolved_)`  `[`obj_`](#obj_)`  `[`whichObj_`](#whichObj_)`  `

Inherited from `CommandAnnouncement` :  
` `[`messageProp_`](../object/CommandAnnouncement.html#messageProp_)`  `[`messageText_`](../object/CommandAnnouncement.html#messageText_)`  `

Inherited from `CommandReport` :  
` `[`action_`](../object/CommandReport.html#action_)`  `[`isFailure`](../object/CommandReport.html#isFailure)`  `[`isQuestion`](../object/CommandReport.html#isQuestion)`  `[`iter_`](../object/CommandReport.html#iter_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`getMessageText`](#getMessageText)`  `

Inherited from `CommandAnnouncement` :  
` `[`showMessage`](../object/CommandAnnouncement.html#showMessage)`  `

Inherited from `CommandReport` :  
` `[`getAction`](../object/CommandReport.html#getAction)`  `[`isActionImplicit`](../object/CommandReport.html#isActionImplicit)`  `[`isActionNestedIn`](../object/CommandReport.html#isActionNestedIn)`  `[`isPartOf`](../object/CommandReport.html#isPartOf)`  `[`setAction`](../object/CommandReport.html#setAction)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="allResolved_"></span>

`allResolved_`

[report.t](../file/report.t.html)\[[426](../source/report.t.html#426)\]

<div class="desc">

*no description available*

</div>

<span id="obj_"></span>

`obj_`

[report.t](../file/report.t.html)\[[422](../source/report.t.html#422)\]

<div class="desc">

our defaulted object

</div>

<span id="whichObj_"></span>

`whichObj_`

[report.t](../file/report.t.html)\[[425](../source/report.t.html#425)\]

<div class="desc">

our message parameters

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (obj, whichObj, action, allResolved)`<span class="rem">OVERRIDDEN</span>

[report.t](../file/report.t.html)\[[398](../source/report.t.html#398)\]

<div class="desc">

*no description available*

</div>

<span id="getMessageText"></span>

`getMessageText ( )`<span class="rem">OVERRIDDEN</span>

[report.t](../file/report.t.html)\[[415](../source/report.t.html#415)\]

<div class="desc">

get our message text

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
