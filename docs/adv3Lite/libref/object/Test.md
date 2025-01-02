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



A Test object can be used to create a series of testing commands in your
game, for example:

  
Test 'foo' \['x me', 'i', 'wear uniform'\] \[uniform\];

Would cause the uniform to be moved into the player character's
inventory and then the commands X ME and then I and WEAR UNIFORM to be
executed in response to TEST FOO.

`class `**`Test`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Test`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`location`](#location)[`reportHolding`](#reportHolding)[`reportMove`](#reportMove)[`testHolding`](#testHolding)[`testList`](#testList)[`testName`](#testName)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getHolding`](#getHolding)[`run`](#run)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="location"></span>

`location`

[debug.t](../file/debug.t.html)\[[495](../source/debug.t.html#495)\]



The location to move the player character to before running the test
script



<span id="reportHolding"></span>

`reportHolding`

[debug.t](../file/debug.t.html)\[[513](../source/debug.t.html#513)\]



Flag: do we want to report on what items were added to inventory? By
default we do.



<span id="reportMove"></span>

`reportMove`

[debug.t](../file/debug.t.html)\[[501](../source/debug.t.html#501)\]



Flag: Do we want to report any change of location by looking around in
the new one? By default we will.



<span id="testHolding"></span>

`testHolding`

[debug.t](../file/debug.t.html)\[[507](../source/debug.t.html#507)\]



The objects to move into the player character's inventory before running
the test script.



<span id="testList"></span>

`testList`

[debug.t](../file/debug.t.html)\[[489](../source/debug.t.html#489)\]



The list commands to be executed when running this test.



<span id="testName"></span>

`testName`

[debug.t](../file/debug.t.html)\[[486](../source/debug.t.html#486)\]



The name of this test



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getHolding"></span>

`getHolding ( )`

[debug.t](../file/debug.t.html)\[[517](../source/debug.t.html#517)\]



Move everything in the testHolding list into the actor's inventory



<span id="run"></span>

`run ( )`

[debug.t](../file/debug.t.html)\[[535](../source/debug.t.html#535)\]



Run this test by passing the commands in testList through
Parser.parse().





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


