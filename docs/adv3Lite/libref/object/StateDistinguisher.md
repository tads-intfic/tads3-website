---
layout: docs
---
<span class="title">StateDistinguisher</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[1565](../source/parser.t.html#1565)\]

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

The class for state distinguishers. A state distinguisher tells objects
apart based on their having distinct current values for a given state.
During preinit, we create a separate instance of this for each State
object in the game.

`class `**`StateDistinguisher`**` :   `[`Distinguisher`](../object/Distinguisher.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`StateDistinguisher`**  
`         `[`Distinguisher`](../object/Distinguisher.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`sortOrder`](#sortOrder)`  `[`state`](#state)`  `[`stateList`](#stateList)`  `

Inherited from `Distinguisher` :  
` `[`all`](../object/Distinguisher.html#all)`  `[`classInitFirst`](../object/Distinguisher.html#classInitFirst)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`appliesTo`](#appliesTo)`  `[`classInit`](#classInit)`  `[`construct`](#construct)`  `[`equal`](#equal)`  `

Inherited from `Distinguisher` :  
` `[`apply`](../object/Distinguisher.html#apply)`  `[`getNames`](../object/Distinguisher.html#getNames)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="sortOrder"></span>

`sortOrder`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1566](../source/parser.t.html#1566)\]

<div class="desc">

*no description available*

</div>

<span id="state"></span>

`state`

[parser.t](../file/parser.t.html)\[[1588](../source/parser.t.html#1588)\]

<div class="desc">

the State this distinguisher tests

</div>

<span id="stateList"></span>

`stateList`

[parser.t](../file/parser.t.html)\[[1591](../source/parser.t.html#1591)\]

<div class="desc">

class property: the list of state distinguisher instances

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="appliesTo"></span>

`appliesTo (obj)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1572](../source/parser.t.html#1572)\]

<div class="desc">

we only apply to objects that have our state variable

</div>

<span id="classInit"></span>

`classInit ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1582](../source/parser.t.html#1582)\]

<div class="desc">

during preinit, build an instance for each State

</div>

<span id="construct"></span>

`construct (st)`

[parser.t](../file/parser.t.html)\[[1575](../source/parser.t.html#1575)\]

<div class="desc">

build from a State

</div>

<span id="equal"></span>

`equal (a, b)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1569](../source/parser.t.html#1569)\]

<div class="desc">

we distinguish based on each object's current value for the state

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
