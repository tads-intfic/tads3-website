<span class="title">scopeListNotifyAfterRule</span><span class="type">object</span>

[sysrules.t](../file/sysrules.t.html)\[[209](../source/sysrules.t.html#209)\]

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

<div class="fdesc">

*no description available*

**`scopeListNotifyAfterRule`**` :   `[`AfterRule`](../object/AfterRule.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`scopeListNotifyAfterRule`**  
`         `[`AfterRule`](../object/AfterRule.html)  
`                 `[`Rule`](../object/Rule.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`priority`](#priority)`  `

Inherited from `AfterRule` :  
` `[`currentAction`](../object/AfterRule.html#currentAction)`  `[`location`](../object/AfterRule.html#location)`  `

Inherited from `Rule` :  
` `[`action`](../object/Rule.html#action)`  `[`actor`](../object/Rule.html#actor)`  `[`aobj`](../object/Rule.html#aobj)`  `[`dobj`](../object/Rule.html#dobj)`  `[`during`](../object/Rule.html#during)`  `[`execAfter`](../object/Rule.html#execAfter)`  `[`execBefore`](../object/Rule.html#execBefore)`  `[`iobj`](../object/Rule.html#iobj)`  `[`isActive`](../object/Rule.html#isActive)`  `[`matchObj`](../object/Rule.html#matchObj)`  `[`present`](../object/Rule.html#present)`  `[`rulebook`](../object/Rule.html#rulebook)`  `[`rulebooks`](../object/Rule.html#rulebooks)`  `[`specificity`](../object/Rule.html#specificity)`  `[`stopValue`](../object/Rule.html#stopValue)`  `[`where`](../object/Rule.html#where)`  `[`who`](../object/Rule.html#who)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`follow`](#follow)`  `

` `

Inherited from `Rule` :  
` `[`activate`](../object/Rule.html#activate)`  `[`addTo`](../object/Rule.html#addTo)`  `[`calcSpecficity`](../object/Rule.html#calcSpecficity)`  `[`compareTo`](../object/Rule.html#compareTo)`  `[`deactivate`](../object/Rule.html#deactivate)`  `[`initializeRule`](../object/Rule.html#initializeRule)`  `[`matchConditions`](../object/Rule.html#matchConditions)`  `[`moveInto`](../object/Rule.html#moveInto)`  `[`removeFrom`](../object/Rule.html#removeFrom)`  `[`runAfter`](../object/Rule.html#runAfter)`  `[`runBefore`](../object/Rule.html#runBefore)`  `[`setRulebook`](../object/Rule.html#setRulebook)`  `[`when`](../object/Rule.html#when)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="priority"></span>

`priority`<span class="rem">OVERRIDDEN</span>

[sysrules.t](../file/sysrules.t.html)\[[225](../source/sysrules.t.html#225)\]

<div class="desc">

Call the afterAction notification on every object in scope. Note that we
have to recalculate the scope list here in case the action has changed
it.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="follow"></span>

`follow ( )`<span class="rem">OVERRIDDEN</span>

[sysrules.t](../file/sysrules.t.html)\[[210](../source/sysrules.t.html#210)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
