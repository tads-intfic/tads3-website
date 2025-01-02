---
layout: docs
---
<span class="title">AmbigObjectAnnouncement</span><span class="type">class</span>

[report.t](../file/report.t.html)\[[447](../source/report.t.html#447)\]

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

Ambiguous object announcement. We display this when the parser manages
to resolve a noun phrase to an object (or objects) from an ambiguous set
of possibilities, without having to ask the player for help but also
without absolute certainty that the objects selected are the ones the
player meant. This happens when more than enough objects are logical
possibilities for selection, but some objects are more logical choices
than others. The parser picks the most logical of the available options,
but since other logical choices are present, the parser can't be certain
that it chose the ones the player actually meant. Because of this
uncertainty, we generate one of these announcements each time this
happens. This report lets the player know exactly which object we chose,
which will immediately alert the player when our selection is different
from what they had in mind.

In form, this type of announcement usually looks just like a default
object announcement.

`class `**`AmbigObjectAnnouncement`**` :   `[`CommandAnnouncement`](../object/CommandAnnouncement.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`AmbigObjectAnnouncement`**  
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

` `[`messageProp_`](#messageProp_)`  `

Inherited from `CommandAnnouncement` :  
` `[`messageText_`](../object/CommandAnnouncement.html#messageText_)`  `

Inherited from `CommandReport` :  
` `[`action_`](../object/CommandReport.html#action_)`  `[`isFailure`](../object/CommandReport.html#isFailure)`  `[`isQuestion`](../object/CommandReport.html#isQuestion)`  `[`iter_`](../object/CommandReport.html#iter_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `

Inherited from `CommandAnnouncement` :  
` `[`construct`](../object/CommandAnnouncement.html#construct)`  `[`getMessageText`](../object/CommandAnnouncement.html#getMessageText)`  `[`showMessage`](../object/CommandAnnouncement.html#showMessage)`  `

Inherited from `CommandReport` :  
` `[`getAction`](../object/CommandReport.html#getAction)`  `[`isActionImplicit`](../object/CommandReport.html#isActionImplicit)`  `[`isActionNestedIn`](../object/CommandReport.html#isActionNestedIn)`  `[`isPartOf`](../object/CommandReport.html#isPartOf)`  `[`setAction`](../object/CommandReport.html#setAction)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="messageProp_"></span>

`messageProp_`<span class="rem">OVERRIDDEN</span>

[report.t](../file/report.t.html)\[[449](../source/report.t.html#449)\]

<div class="desc">

show the announceAmbigObject announcement

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
