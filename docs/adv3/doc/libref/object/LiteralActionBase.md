---
---
<span class="title">LiteralActionBase</span><span class="type">class</span>

[action.t](../file/action.t.html)\[[5192](../source/action.t.html#5192)\]

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

Common base class for actions involving literal phrases. This is a
mix-in class that can be combined with Action subclasses to create
specific kinds of literal actions.

`class `**`LiteralActionBase`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`LiteralActionBase`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`LiteralActionBase`**  
`         `[`LiteralAction`](../object/LiteralAction.html)  
`                 `[`OopsAction`](../object/OopsAction.html)  
`                         `[`predicate(Oops)`](../object/predicate(Oops).html)  
`                 `[`SpecialTopicAction`](../object/SpecialTopicAction.html)  
`                         `[`predicate(SpecialTopic)`](../object/predicate(SpecialTopic).html)  
`         `[`LiteralTAction`](../object/LiteralTAction.html)  
`                 `[`EnterOnAction`](../object/EnterOnAction.html)  
`                         `[`predicate(EnterOn)`](../object/predicate(EnterOn).html)  
`                         `[`predicate(EnterOnWhat)`](../object/predicate(EnterOnWhat).html)  
`                 `[`SetToAction`](../object/SetToAction.html)  
`                         `[`predicate(SetTo)`](../object/predicate(SetTo).html)  
`                 `[`TurnToAction`](../object/TurnToAction.html)  
`                         `[`predicate(TurnTo)`](../object/predicate(TurnTo).html)  
`                 `[`TypeLiteralOnAction`](../object/TypeLiteralOnAction.html)  
`                         `[`predicate(TypeLiteralOn)`](../object/predicate(TypeLiteralOn).html)  
`                         `[`predicate(TypeLiteralOnWhat)`](../object/predicate(TypeLiteralOnWhat).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`text_`](#text_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`getLiteral`](#getLiteral)`  `[`getMessageParam`](#getMessageParam)`  `[`setObjectMatches`](#setObjectMatches)`  `[`setResolvedObjects`](#setResolvedObjects)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="text_"></span>

`text_`

[action.t](../file/action.t.html)\[[5239](../source/action.t.html#5239)\]

<div class="desc">

the text of the literal phrase

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="getLiteral"></span>

`getLiteral ( )`

[action.t](../file/action.t.html)\[[5236](../source/action.t.html#5236)\]

<div class="desc">

get the current literal text

</div>

<span id="getMessageParam"></span>

`getMessageParam (objName)`

[action.t](../file/action.t.html)\[[5197](../source/action.t.html#5197)\]

<div class="desc">

Get a message parameter. We define 'literal' as the text of the literal
phrase, in addition to inherited targets.

</div>

<span id="setObjectMatches"></span>

`setObjectMatches (lit)`

[action.t](../file/action.t.html)\[[5219](../source/action.t.html#5219)\]

<div class="desc">

manually set the pre-resolved match trees

</div>

<span id="setResolvedObjects"></span>

`setResolvedObjects (txt)`

[action.t](../file/action.t.html)\[[5212](../source/action.t.html#5212)\]

<div class="desc">

manually set the resolved objects

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
