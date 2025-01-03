---
layout: docs
---
<span class="title">standardReportRule</span><span class="type">object</span>

[sysrules.t](../file/sysrules.t.html)\[[460](../source/sysrules.t.html#460)\]

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



The standardReportRule reports the action in the standard way defined on
the direct object's action-specified report method. \[SYSRULES
EXTENSION\]

**`standardReportRule`**` :   `[`ReportRule`](../object/ReportRule.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`standardReportRule`**  
[`ReportRule`](../object/ReportRule.html)  
[`Rule`](../object/Rule.html)  
`                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`priority`](#priority)

Inherited from `ReportRule` :  
[`currentAction`](../object/ReportRule.html#currentAction) [`location`](../object/ReportRule.html#location)

Inherited from `Rule` :  
[`action`](../object/Rule.html#action) [`actor`](../object/Rule.html#actor) [`aobj`](../object/Rule.html#aobj) [`dobj`](../object/Rule.html#dobj) [`during`](../object/Rule.html#during) [`execAfter`](../object/Rule.html#execAfter) [`execBefore`](../object/Rule.html#execBefore) [`iobj`](../object/Rule.html#iobj) [`isActive`](../object/Rule.html#isActive) [`matchObj`](../object/Rule.html#matchObj) [`present`](../object/Rule.html#present) [`rulebook`](../object/Rule.html#rulebook) [`rulebooks`](../object/Rule.html#rulebooks) [`specificity`](../object/Rule.html#specificity) [`stopValue`](../object/Rule.html#stopValue) [`where`](../object/Rule.html#where) [`who`](../object/Rule.html#who)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`follow`](#follow)



Inherited from `Rule` :  
[`activate`](../object/Rule.html#activate) [`addTo`](../object/Rule.html#addTo) [`calcSpecficity`](../object/Rule.html#calcSpecficity) [`compareTo`](../object/Rule.html#compareTo) [`deactivate`](../object/Rule.html#deactivate) [`initializeRule`](../object/Rule.html#initializeRule) [`matchConditions`](../object/Rule.html#matchConditions) [`moveInto`](../object/Rule.html#moveInto) [`removeFrom`](../object/Rule.html#removeFrom) [`runAfter`](../object/Rule.html#runAfter) [`runBefore`](../object/Rule.html#runBefore) [`setRulebook`](../object/Rule.html#setRulebook) [`when`](../object/Rule.html#when)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="priority"></span>

`priority`<span class="rem">OVERRIDDEN</span>

[sysrules.t](../file/sysrules.t.html)\[[472](../source/sysrules.t.html#472)\]



Make this normally the last report rule to be considered, so that any
custom rule will take precedence.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="follow"></span>

`follow ( )`<span class="rem">OVERRIDDEN</span>

[sysrules.t](../file/sysrules.t.html)\[[461](../source/sysrules.t.html#461)\]



*no description available*
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


