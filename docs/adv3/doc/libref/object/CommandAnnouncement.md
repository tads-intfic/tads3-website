---
layout: docs
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



Announcements. We use these to track announcements to be made as part of
an action's results.

`class `**`CommandAnnouncement`**` :   `[`CommandReport`](../object/CommandReport.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`CommandAnnouncement`**  
[`CommandReport`](../object/CommandReport.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`CommandAnnouncement`**  
[`AmbigObjectAnnouncement`](../object/AmbigObjectAnnouncement.html)  
[`CommandSepAnnouncement`](../object/CommandSepAnnouncement.html)  
[`DefaultObjectAnnouncement`](../object/DefaultObjectAnnouncement.html)  
[`ImplicitActionAnnouncement`](../object/ImplicitActionAnnouncement.html)  
[`MultiObjectAnnouncement`](../object/MultiObjectAnnouncement.html)  
[`RemappedActionAnnouncement`](../object/RemappedActionAnnouncement.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`messageProp_`](#messageProp_) [`messageText_`](#messageText_)

Inherited from `CommandReport` :  
[`action_`](../object/CommandReport.html#action_) [`isFailure`](../object/CommandReport.html#isFailure) [`isQuestion`](../object/CommandReport.html#isQuestion) [`iter_`](../object/CommandReport.html#iter_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`getMessageText`](#getMessageText) [`showMessage`](#showMessage)

Inherited from `CommandReport` :  
[`getAction`](../object/CommandReport.html#getAction) [`isActionImplicit`](../object/CommandReport.html#isActionImplicit) [`isActionNestedIn`](../object/CommandReport.html#isActionNestedIn) [`isPartOf`](../object/CommandReport.html#isPartOf) [`setAction`](../object/CommandReport.html#setAction)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="messageProp_"></span>

`messageProp_`

[report.t](../file/report.t.html)\[[339](../source/report.t.html#339)\]



our gLibMessages property



<span id="messageText_"></span>

`messageText_`

[report.t](../file/report.t.html)\[[342](../source/report.t.html#342)\]



our message text



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct ([params])`<span class="rem">OVERRIDDEN</span>

[report.t](../file/report.t.html)\[[308](../source/report.t.html#308)\]



*no description available*



<span id="getMessageText"></span>

`getMessageText ([params])`

[report.t](../file/report.t.html)\[[321](../source/report.t.html#321)\]



Get our message text. By default, we simply get the gLibMessages message
given by the property.



<span id="showMessage"></span>

`showMessage ( )`

[report.t](../file/report.t.html)\[[332](../source/report.t.html#332)\]



Show our message. Our default implementation shows the library message
given by our messageProp\_ property, using the parameters we stored in
our constructor.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


