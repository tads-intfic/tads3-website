---
layout: docs
---
<span class="title">RemappedActionAnnouncement</span><span class="type">class</span>

[report.t](../file/report.t.html)\[[466](../source/report.t.html#466)\]

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



Remapped action announcement. This is used when we need to mention a
defaulted or disambiguated object, but the player's original input was
remapped to a different action that rearranges the object roles. In
these cases, rather than just announcing the defaulted object name, we
announce the entire remapped action; we show the full action description
because rearrangement of the object roles usually makes the standard
object-only announcement confusing to read, since it doesn't naturally
fit in as a continuation of what the user typed.

In English, this message is usually shown with the entire verb phrase,
in present participle form ("opening the door"), enclosed in parentheses
and on a line by itself.

`class `**`RemappedActionAnnouncement`**` :   `[`CommandAnnouncement`](../object/CommandAnnouncement.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`RemappedActionAnnouncement`**  
[`CommandAnnouncement`](../object/CommandAnnouncement.html)  
[`CommandReport`](../object/CommandReport.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`messageProp_`](#messageProp_)

Inherited from `CommandAnnouncement` :  
[`messageText_`](../object/CommandAnnouncement.html#messageText_)

Inherited from `CommandReport` :  
[`action_`](../object/CommandReport.html#action_) [`isFailure`](../object/CommandReport.html#isFailure) [`isQuestion`](../object/CommandReport.html#isQuestion) [`iter_`](../object/CommandReport.html#iter_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)

Inherited from `CommandAnnouncement` :  
[`getMessageText`](../object/CommandAnnouncement.html#getMessageText) [`showMessage`](../object/CommandAnnouncement.html#showMessage)

Inherited from `CommandReport` :  
[`getAction`](../object/CommandReport.html#getAction) [`isActionImplicit`](../object/CommandReport.html#isActionImplicit) [`isActionNestedIn`](../object/CommandReport.html#isActionNestedIn) [`isPartOf`](../object/CommandReport.html#isPartOf) [`setAction`](../object/CommandReport.html#setAction)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="messageProp_"></span>

`messageProp_`<span class="rem">OVERRIDDEN</span>

[report.t](../file/report.t.html)\[[473](../source/report.t.html#473)\]



use the action as the message parameter



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct ( )`<span class="rem">OVERRIDDEN</span>

[report.t](../file/report.t.html)\[[467](../source/report.t.html#467)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


