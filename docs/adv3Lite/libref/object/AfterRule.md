---
layout: docs
---
<span class="title">AfterRule</span><span class="type">class</span>

[sysrules.t](../file/sysrules.t.html)\[[131](../source/sysrules.t.html#131)\]

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



An AfterRule is a rule belonging to the afterRules Rulebook. Note than
unlike after rules in I7 these are executed after the action is fully
complete, i.e. \*after\* the report stage. \[SYSRULES EXTENSION\]

`class `**`AfterRule`**` :   `[`Rule`](../object/Rule.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`AfterRule`**  
[`Rule`](../object/Rule.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`checkIlluminationRule`](../object/checkIlluminationRule.html) [`notifyScenesAfterRule`](../object/notifyScenesAfterRule.html) [`roomNotifyAfterRule`](../object/roomNotifyAfterRule.html) [`scopeListNotifyAfterRule`](../object/scopeListNotifyAfterRule.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`currentAction`](#currentAction) [`location`](#location)

Inherited from `Rule` :  
[`action`](../object/Rule.html#action) [`actor`](../object/Rule.html#actor) [`aobj`](../object/Rule.html#aobj) [`dobj`](../object/Rule.html#dobj) [`during`](../object/Rule.html#during) [`execAfter`](../object/Rule.html#execAfter) [`execBefore`](../object/Rule.html#execBefore) [`iobj`](../object/Rule.html#iobj) [`isActive`](../object/Rule.html#isActive) [`matchObj`](../object/Rule.html#matchObj) [`present`](../object/Rule.html#present) [`priority`](../object/Rule.html#priority) [`rulebook`](../object/Rule.html#rulebook) [`rulebooks`](../object/Rule.html#rulebooks) [`specificity`](../object/Rule.html#specificity) [`stopValue`](../object/Rule.html#stopValue) [`where`](../object/Rule.html#where) [`who`](../object/Rule.html#who)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





Inherited from `Rule` :  
[`activate`](../object/Rule.html#activate) [`addTo`](../object/Rule.html#addTo) [`calcSpecficity`](../object/Rule.html#calcSpecficity) [`compareTo`](../object/Rule.html#compareTo) [`deactivate`](../object/Rule.html#deactivate) [`follow`](../object/Rule.html#follow) [`initializeRule`](../object/Rule.html#initializeRule) [`matchConditions`](../object/Rule.html#matchConditions) [`moveInto`](../object/Rule.html#moveInto) [`removeFrom`](../object/Rule.html#removeFrom) [`runAfter`](../object/Rule.html#runAfter) [`runBefore`](../object/Rule.html#runBefore) [`setRulebook`](../object/Rule.html#setRulebook) [`when`](../object/Rule.html#when)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="currentAction"></span>

`currentAction`

[sysrules.t](../file/sysrules.t.html)\[[135](../source/sysrules.t.html#135)\]



The current action



<span id="location"></span>

`location`<span class="rem">OVERRIDDEN</span>

[sysrules.t](../file/sysrules.t.html)\[[132](../source/sysrules.t.html#132)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


