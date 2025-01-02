---
layout: docs
---
<span class="title">Test</span><span class="type">class</span>

[debug.t](../file/debug.t.html)\[[484](../source/debug.t.html#484)\]

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

A Test object can be used to create a series of testing commands in your
game, for example:

  
Test 'foo' \['x me', 'i', 'wear uniform'\] \[uniform\];

Would cause the uniform to be moved into the player character's
inventory and then the commands X ME and then I and WEAR UNIFORM to be
executed in response to TEST FOO.

`class `**`Test`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Test`**  
`         object`  
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

` `[`location`](#location)`  `[`reportHolding`](#reportHolding)`  `[`reportMove`](#reportMove)`  `[`testHolding`](#testHolding)`  `[`testList`](#testList)`  `[`testName`](#testName)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`getHolding`](#getHolding)`  `[`run`](#run)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="location"></span>

`location`

[debug.t](../file/debug.t.html)\[[495](../source/debug.t.html#495)\]

<div class="desc">

The location to move the player character to before running the test
script

</div>

<span id="reportHolding"></span>

`reportHolding`

[debug.t](../file/debug.t.html)\[[513](../source/debug.t.html#513)\]

<div class="desc">

Flag: do we want to report on what items were added to inventory? By
default we do.

</div>

<span id="reportMove"></span>

`reportMove`

[debug.t](../file/debug.t.html)\[[501](../source/debug.t.html#501)\]

<div class="desc">

Flag: Do we want to report any change of location by looking around in
the new one? By default we will.

</div>

<span id="testHolding"></span>

`testHolding`

[debug.t](../file/debug.t.html)\[[507](../source/debug.t.html#507)\]

<div class="desc">

The objects to move into the player character's inventory before running
the test script.

</div>

<span id="testList"></span>

`testList`

[debug.t](../file/debug.t.html)\[[489](../source/debug.t.html#489)\]

<div class="desc">

The list commands to be executed when running this test.

</div>

<span id="testName"></span>

`testName`

[debug.t](../file/debug.t.html)\[[486](../source/debug.t.html#486)\]

<div class="desc">

The name of this test

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="getHolding"></span>

`getHolding ( )`

[debug.t](../file/debug.t.html)\[[517](../source/debug.t.html#517)\]

<div class="desc">

Move everything in the testHolding list into the actor's inventory

</div>

<span id="run"></span>

`run ( )`

[debug.t](../file/debug.t.html)\[[535](../source/debug.t.html#535)\]

<div class="desc">

Run this test by passing the commands in testList through
Parser.parse().

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
