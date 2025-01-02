---
layout: docs
---
<span class="title">MultiObjectAnnouncement</span><span class="type">class</span>

[report.t](../file/report.t.html)\[[354](../source/report.t.html#354)\]

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



Multiple-object announcement. When the player applies a single command
to a series of objects (as in "take the book and the folder" or "take
all"), we'll show one of these announcements for each object, just
before we execute the command for that object. This announcement usually
just shows the object's name plus suitable punctuation (in English, a
colon), and helps the player see which results go with which objects.

`class `**`MultiObjectAnnouncement`**` :   `[`CommandAnnouncement`](../object/CommandAnnouncement.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`MultiObjectAnnouncement`**  
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

[report.t](../file/report.t.html)\[[370](../source/report.t.html#370)\]



show the announceMultiActionObject message



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (preCalcMsg, obj, whichObj, action)`<span class="rem">OVERRIDDEN</span>

[report.t](../file/report.t.html)\[[355](../source/report.t.html#355)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


