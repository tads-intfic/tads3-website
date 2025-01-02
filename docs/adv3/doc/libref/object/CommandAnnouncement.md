---
---
<span class="title">CommandAnnouncement</span><span class="type">class</span>

[report.t](../file/report.t.html)\[[307](../source/report.t.html#307)\]

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

Announcements. We use these to track announcements to be made as part of
an action's results.

`class `**`CommandAnnouncement`**` :   `[`CommandReport`](../object/CommandReport.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`CommandAnnouncement`**  
`         `[`CommandReport`](../object/CommandReport.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`CommandAnnouncement`**  
`         `[`AmbigObjectAnnouncement`](../object/AmbigObjectAnnouncement.html)  
`         `[`CommandSepAnnouncement`](../object/CommandSepAnnouncement.html)  
`         `[`DefaultObjectAnnouncement`](../object/DefaultObjectAnnouncement.html)  
`         `[`ImplicitActionAnnouncement`](../object/ImplicitActionAnnouncement.html)  
`         `[`MultiObjectAnnouncement`](../object/MultiObjectAnnouncement.html)  
`         `[`RemappedActionAnnouncement`](../object/RemappedActionAnnouncement.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`messageProp_`](#messageProp_)`  `[`messageText_`](#messageText_)`  `

Inherited from `CommandReport` :  
` `[`action_`](../object/CommandReport.html#action_)`  `[`isFailure`](../object/CommandReport.html#isFailure)`  `[`isQuestion`](../object/CommandReport.html#isQuestion)`  `[`iter_`](../object/CommandReport.html#iter_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`getMessageText`](#getMessageText)`  `[`showMessage`](#showMessage)`  `

Inherited from `CommandReport` :  
` `[`getAction`](../object/CommandReport.html#getAction)`  `[`isActionImplicit`](../object/CommandReport.html#isActionImplicit)`  `[`isActionNestedIn`](../object/CommandReport.html#isActionNestedIn)`  `[`isPartOf`](../object/CommandReport.html#isPartOf)`  `[`setAction`](../object/CommandReport.html#setAction)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="messageProp_"></span>

`messageProp_`

[report.t](../file/report.t.html)\[[339](../source/report.t.html#339)\]

<div class="desc">

our gLibMessages property

</div>

<span id="messageText_"></span>

`messageText_`

[report.t](../file/report.t.html)\[[342](../source/report.t.html#342)\]

<div class="desc">

our message text

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct ([params])`<span class="rem">OVERRIDDEN</span>

[report.t](../file/report.t.html)\[[308](../source/report.t.html#308)\]

<div class="desc">

*no description available*

</div>

<span id="getMessageText"></span>

`getMessageText ([params])`

[report.t](../file/report.t.html)\[[321](../source/report.t.html#321)\]

<div class="desc">

Get our message text. By default, we simply get the gLibMessages message
given by the property.

</div>

<span id="showMessage"></span>

`showMessage ( )`

[report.t](../file/report.t.html)\[[332](../source/report.t.html#332)\]

<div class="desc">

Show our message. Our default implementation shows the library message
given by our messageProp\_ property, using the parameters we stored in
our constructor.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
