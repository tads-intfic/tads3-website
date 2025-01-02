---
layout: docs
---
<span class="title">ImplicitActionAnnouncement</span><span class="type">class</span>

[report.t](../file/report.t.html)\[[511](../source/report.t.html#511)\]

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



Implicit action announcement. This is displayed when we perform a
command implicitly, which we usually do to fulfill a precondition of an
action.

In English, we usually show an implied action as the verb participle
phrase ("opening the door"), prefixed with "first", and enclosed in
parentheses on a line by itself (hence, "(first opening the door)").

`class `**`ImplicitActionAnnouncement`**` :   `[`CommandAnnouncement`](../object/CommandAnnouncement.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ImplicitActionAnnouncement`**  
[`CommandAnnouncement`](../object/CommandAnnouncement.html)  
[`CommandReport`](../object/CommandReport.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`justAsking`](#justAsking)[`justTrying`](#justTrying)

Inherited from `CommandAnnouncement` :  
[`messageProp_`](../object/CommandAnnouncement.html#messageProp_)[`messageText_`](../object/CommandAnnouncement.html#messageText_)

Inherited from `CommandReport` :  
[`action_`](../object/CommandReport.html#action_)[`isFailure`](../object/CommandReport.html#isFailure)[`isQuestion`](../object/CommandReport.html#isQuestion)[`iter_`](../object/CommandReport.html#iter_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)[`makeSilent`](#makeSilent)[`noteJustTrying`](#noteJustTrying)[`noteQuestion`](#noteQuestion)

Inherited from `CommandAnnouncement` :  
[`getMessageText`](../object/CommandAnnouncement.html#getMessageText)[`showMessage`](../object/CommandAnnouncement.html#showMessage)

Inherited from `CommandReport` :  
[`getAction`](../object/CommandReport.html#getAction)[`isActionImplicit`](../object/CommandReport.html#isActionImplicit)[`isActionNestedIn`](../object/CommandReport.html#isActionNestedIn)[`isPartOf`](../object/CommandReport.html#isPartOf)[`setAction`](../object/CommandReport.html#setAction)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="justAsking"></span>

`justAsking`

[report.t](../file/report.t.html)\[[582](../source/report.t.html#582)\]



flag: the action was interrupted with an interactive question



<span id="justTrying"></span>

`justTrying`

[report.t](../file/report.t.html)\[[579](../source/report.t.html#579)\]



Flag: we're just attempting the action; this is set when we determine
that the implicit action has failed, in which case we want an
announcement indicating that we're merely attempting the action, not
actually performing it. Presume that we're actually going to perform the
action; the action can change this if necessary.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (action, msg)`<span class="rem">OVERRIDDEN</span>

[report.t](../file/report.t.html)\[[512](../source/report.t.html#512)\]



*no description available*



<span id="makeSilent"></span>

`makeSilent ( )`

[report.t](../file/report.t.html)\[[530](../source/report.t.html#530)\]



Make this announcement silent. This eliminates any announcement for this
action, but makes it otherwise behave like a normal implied action.



<span id="noteJustTrying"></span>

`noteJustTrying ( )`

[report.t](../file/report.t.html)\[[548](../source/report.t.html#548)\]



Note that the action we're attempting is merely an attempt that failed.
This will change our report to indicate that we're only trying the
action, rather than suggesting that we actually carried it out.



<span id="noteQuestion"></span>

`noteQuestion ( )`

[report.t](../file/report.t.html)\[[562](../source/report.t.html#562)\]



Note that the action we're attempting is incomplete, as it was
interupted for interactive input (such as asking for a missing object).





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


