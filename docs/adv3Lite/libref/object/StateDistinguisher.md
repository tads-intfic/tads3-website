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



The class for state distinguishers. A state distinguisher tells objects
apart based on their having distinct current values for a given state.
During preinit, we create a separate instance of this for each State
object in the game.

`class `**`StateDistinguisher`**` :   `[`Distinguisher`](../object/Distinguisher.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`StateDistinguisher`**  
[`Distinguisher`](../object/Distinguisher.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`sortOrder`](#sortOrder)[`state`](#state)[`stateList`](#stateList)

Inherited from `Distinguisher` :  
[`all`](../object/Distinguisher.html#all)[`classInitFirst`](../object/Distinguisher.html#classInitFirst)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`appliesTo`](#appliesTo)[`classInit`](#classInit)[`construct`](#construct)[`equal`](#equal)

Inherited from `Distinguisher` :  
[`apply`](../object/Distinguisher.html#apply)[`getNames`](../object/Distinguisher.html#getNames)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="sortOrder"></span>

`sortOrder`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1566](../source/parser.t.html#1566)\]



*no description available*



<span id="state"></span>

`state`

[parser.t](../file/parser.t.html)\[[1588](../source/parser.t.html#1588)\]



the State this distinguisher tests



<span id="stateList"></span>

`stateList`

[parser.t](../file/parser.t.html)\[[1591](../source/parser.t.html#1591)\]



class property: the list of state distinguisher instances



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="appliesTo"></span>

`appliesTo (obj)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1572](../source/parser.t.html#1572)\]



we only apply to objects that have our state variable



<span id="classInit"></span>

`classInit ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1582](../source/parser.t.html#1582)\]



during preinit, build an instance for each State



<span id="construct"></span>

`construct (st)`

[parser.t](../file/parser.t.html)\[[1575](../source/parser.t.html#1575)\]



build from a State



<span id="equal"></span>

`equal (a, b)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[1569](../source/parser.t.html#1569)\]



we distinguish based on each object's current value for the state





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


