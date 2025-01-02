---
---
<span class="title">LState</span><span class="type">class</span>

[english.t](../file/english.t.html)\[[1919](../source/english.t.html#1919)\]

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

LState is the language-specific base class for State objects.

\[Required\]

`class `**`LState`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`LState`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`LState`**  
`         `[`State`](../object/State.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`additionalInfo`](#additionalInfo)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`addToName`](#addToName)`  `[`getAdditionalInfo`](#getAdditionalInfo)`  `[`initWord`](#initWord)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="additionalInfo"></span>

`additionalInfo`

[english.t](../file/english.t.html)\[[1956](../source/english.t.html#1956)\]

<div class="desc">

Additional info to be added to the item name when it appears in a
listing and is in the corresponding state

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addToName"></span>

`addToName (obj, str)`

[english.t](../file/english.t.html)\[[1927](../source/english.t.html#1927)\]

<div class="desc">

Add the state name to an object name under construction. 'obj' is the
object, and 'str' the object name being built. This adds the appropriate
adjective for the state to the name.

\[Required\]

</div>

<span id="getAdditionalInfo"></span>

`getAdditionalInfo (obj)`

[english.t](../file/english.t.html)\[[1963](../source/english.t.html#1963)\]

<div class="desc">

Get the string providing additional info about this object when it's in
a particular state (such as '(providing light)', the only additional
state info actually defined in the English library)

</div>

<span id="initWord"></span>

`initWord (w)`

[english.t](../file/english.t.html)\[[1946](../source/english.t.html#1946)\]

<div class="desc">

Initialize a state adjective. The base library calls this during preinit
for each word, given as a string. The language module must define this
routine, but it doesn't have to do anything. The English version adds
the word to the dictionary, so that the spelling corrector can recognize
it.

\[Required\]

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
