---
layout: docs
---
<span class="title">BeforeRule</span><span class="type">class</span>

[sysrules.t](../file/sysrules.t.html)\[[234](../source/sysrules.t.html#234)\]

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

The BeforeRule class provides a convenient means of defining rules that
belong to the beforeRules RuleBook. We derive it from ReplaceRedirector
as well as Rule in case users want to use the doInstead() interface to
redirect one action to another from a BeforeRule.

`class `**`BeforeRule`**` :   [`Rule`](../object/Rule.html)   `[`ReplaceRedirector`](../object/ReplaceRedirector.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`BeforeRule`**  
[`Rule`](../object/Rule.html)  
`                 object`  
[`ReplaceRedirector`](../object/ReplaceRedirector.html)  
[`Redirector`](../object/Redirector.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` [`actorActionRule`](../object/actorActionRule.html)  [`checkActionPreconditionsRule`](../object/checkActionPreconditionsRule.html)  [`roomNotifyBeforeRule`](../object/roomNotifyBeforeRule.html)  [`sceneNotifyBeforeRule`](../object/sceneNotifyBeforeRule.html)  [`scopeListNotifyBeforeRule`](../object/scopeListNotifyBeforeRule.html)  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` [`currentAction`](#currentAction)  [`location`](#location)  `

Inherited from `Rule` :  
` [`action`](../object/Rule.html#action)  [`actor`](../object/Rule.html#actor)  [`aobj`](../object/Rule.html#aobj)  [`dobj`](../object/Rule.html#dobj)  [`during`](../object/Rule.html#during)  [`execAfter`](../object/Rule.html#execAfter)  [`execBefore`](../object/Rule.html#execBefore)  [`iobj`](../object/Rule.html#iobj)  [`isActive`](../object/Rule.html#isActive)  [`matchObj`](../object/Rule.html#matchObj)  [`present`](../object/Rule.html#present)  [`priority`](../object/Rule.html#priority)  [`rulebook`](../object/Rule.html#rulebook)  [`rulebooks`](../object/Rule.html#rulebooks)  [`specificity`](../object/Rule.html#specificity)  [`stopValue`](../object/Rule.html#stopValue)  [`where`](../object/Rule.html#where)  [`who`](../object/Rule.html#who)  `





<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>



Inherited from `Rule` :  
` [`activate`](../object/Rule.html#activate)  [`addTo`](../object/Rule.html#addTo)  [`calcSpecficity`](../object/Rule.html#calcSpecficity)  [`compareTo`](../object/Rule.html#compareTo)  [`deactivate`](../object/Rule.html#deactivate)  [`follow`](../object/Rule.html#follow)  [`initializeRule`](../object/Rule.html#initializeRule)  [`matchConditions`](../object/Rule.html#matchConditions)  [`moveInto`](../object/Rule.html#moveInto)  [`removeFrom`](../object/Rule.html#removeFrom)  [`runAfter`](../object/Rule.html#runAfter)  [`runBefore`](../object/Rule.html#runBefore)  [`setRulebook`](../object/Rule.html#setRulebook)  [`when`](../object/Rule.html#when)  `

Inherited from `ReplaceRedirector` :  
` [`redirect`](../object/ReplaceRedirector.html#redirect)  `

Inherited from `Redirector` :  
` [`doInstead`](../object/Redirector.html#doInstead)  [`doNested`](../object/Redirector.html#doNested)  [`doOtherAction`](../object/Redirector.html#doOtherAction)  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="currentAction"></span>

`currentAction`

[sysrules.t](../file/sysrules.t.html)\[[238](../source/sysrules.t.html#238)\]

<div class="desc">

The current action

</div>

<span id="location"></span>

`location`<span class="rem">OVERRIDDEN</span>

[sysrules.t](../file/sysrules.t.html)\[[235](../source/sysrules.t.html#235)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

*(none)*

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
