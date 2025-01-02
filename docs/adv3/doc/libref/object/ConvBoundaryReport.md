---
layout: docs
---
<span class="title">ConvBoundaryReport</span><span class="type">class</span>

[report.t](../file/report.t.html)\[[275](../source/report.t.html#275)\]

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



A conversation begin/end report. This is a special marker we insert into
the transcript to flag the boundaries of an NPC's conversational
message.

`class `**`ConvBoundaryReport`**` :   `[`CommandReport`](../object/CommandReport.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ConvBoundaryReport`**  
[`CommandReport`](../object/CommandReport.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`ConvBoundaryReport`**  
[`ConvBeginReport`](../object/ConvBeginReport.html)  
[`ConvEndReport`](../object/ConvEndReport.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`actorID`](#actorID)

Inherited from `CommandReport` :  
[`action_`](../object/CommandReport.html#action_) [`isFailure`](../object/CommandReport.html#isFailure) [`isQuestion`](../object/CommandReport.html#isQuestion) [`iter_`](../object/CommandReport.html#iter_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)

Inherited from `CommandReport` :  
[`getAction`](../object/CommandReport.html#getAction) [`isActionImplicit`](../object/CommandReport.html#isActionImplicit) [`isActionNestedIn`](../object/CommandReport.html#isActionNestedIn) [`isPartOf`](../object/CommandReport.html#isPartOf) [`setAction`](../object/CommandReport.html#setAction)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="actorID"></span>

`actorID`

[report.t](../file/report.t.html)\[[279](../source/report.t.html#279)\]



the actor's ID number, as assigned by the ConversationManager



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (id)`<span class="rem">OVERRIDDEN</span>

[report.t](../file/report.t.html)\[[276](../source/report.t.html#276)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


