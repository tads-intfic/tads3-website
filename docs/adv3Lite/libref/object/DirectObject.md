---
layout: docs
---
<span class="title">DirectObject</span><span class="type">object</span>

[parser.t](../file/parser.t.html)\[[3845](../source/parser.t.html#3845)\]

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



The DirectObject role is the role of the object being most directly
acted upon in the command. The is the only role in a verb that has only
one object. In a verb with two objects, this is the object most directly
affected. For example, UNLOCK DOOR WITH KEY directly acts upon the door,
so the door is the direct object; the key isn't the direct object
because it's merely a tool used to effect the change on the door.

**`DirectObject`**` :   `[`NounRole`](../object/NounRole.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`DirectObject`**  
[`NounRole`](../object/NounRole.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`curObjProp`](#curObjProp) [`matchProp`](#matchProp) [`missingReplyProp`](#missingReplyProp) [`name`](#name) [`npListProp`](#npListProp) [`objListProp`](#objListProp) [`objMatchProp`](#objMatchProp) [`objProp`](#objProp) [`order`](#order)

Inherited from `NounRole` :  
[`all`](../object/NounRole.html#all) [`allPredicate`](../object/NounRole.html#allPredicate) [`isPredicate`](../object/NounRole.html#isPredicate)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  
Inherited from `NounRole` :  
[`construct`](../object/NounRole.html#construct)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="curObjProp"></span>

`curObjProp`

[parser.t](../file/parser.t.html)\[[3852](../source/parser.t.html#3852)\]



*no description available*



<span id="matchProp"></span>

`matchProp`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[3846](../source/parser.t.html#3846)\]



*no description available*



<span id="missingReplyProp"></span>

`missingReplyProp`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[3851](../source/parser.t.html#3851)\]



*no description available*



<span id="name"></span>

`name`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[3853](../source/parser.t.html#3853)\]



*no description available*



<span id="npListProp"></span>

`npListProp`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[3847](../source/parser.t.html#3847)\]



*no description available*



<span id="objListProp"></span>

`objListProp`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[3848](../source/parser.t.html#3848)\]



*no description available*



<span id="objMatchProp"></span>

`objMatchProp`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[3850](../source/parser.t.html#3850)\]



*no description available*



<span id="objProp"></span>

`objProp`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[3849](../source/parser.t.html#3849)\]



*no description available*



<span id="order"></span>

`order`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[3854](../source/parser.t.html#3854)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


