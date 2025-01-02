---
---
<span class="title">actionDictionary</span><span class="type">object</span>

[spelling.t](../file/spelling.t.html)\[[364](../source/spelling.t.html#364)\]

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

Action Dictionary. This is a lookup table that we generate during
preinit from the vocabulary words associated with 'predicate' grammar
rules. We map each vocabulary word to the Action objects it's associated
with.

The standard dictionary contains all of these words as well, but it maps
them all to the generic 'predicate' GrammarProd object. That doesn't
help us identify which words are associated with which actions. That
information is sometimes needed, such as during spelling correction.

Note that the system library file gramprod.t must be included in the
build, so that GrammarAltInfo is defined.

**`actionDictionary`**` :   `[`PreinitObject`](../object/PreinitObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`actionDictionary`**  
`         `[`PreinitObject`](../object/PreinitObject.html)  
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`wordToAction`](#wordToAction)`  `[`xwords`](#xwords)`  `

Inherited from `PreinitObject` :  
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :  
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`execute`](#execute)`  `

` `

Inherited from `ModuleExecObject` :  
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="wordToAction"></span>

`wordToAction`

[spelling.t](../file/spelling.t.html)\[[412](../source/spelling.t.html#412)\]

<div class="desc">

word-to-action table: this maps each vocabulary word to a list of the
Action objects associated with the grammar rules in which it appears

</div>

<span id="xwords"></span>

`xwords`

[spelling.t](../file/spelling.t.html)\[[421](../source/spelling.t.html#421)\]

<div class="desc">

Associated word table: this maps each vocabulary word to a list of all
of the other words that appear in predicate grammar rules in which the
given word appears. For example, 'up' will have a list like \[pick, go,
look\], since it's used in rules for 'pick up', 'go up', 'look up'.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[spelling.t](../file/spelling.t.html)\[[366](../source/spelling.t.html#366)\]

<div class="desc">

initialize

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
