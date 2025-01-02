---
---
<span class="title">PrepSingleNounProd</span><span class="type">class</span>

[en_us.t](../file/en_us.t.html)\[[5463](../source/en_us.t.html#5463)\]

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

Prepositionally modified single noun phrases. These can be used in
indirect object responses, so allow for interactions like this:

\>unlock door  
What do you want to unlock it with?

\>with the key

The entire notion of prepositionally qualified noun phrases in
interactive indirect object responses is specific to English, so this is
implemented in the English module only. However, the general notion of
specialized responses to interactive indirect object queries is handled
in the language-independent library in some cases, in such a way that
the language-specific library can customize the behavior - see
TIAction.askIobjResponseProd.

`class `**`PrepSingleNounProd`**` :   `[`SingleNounProd`](../object/SingleNounProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`PrepSingleNounProd`**  
`         `[`SingleNounProd`](../object/SingleNounProd.html)  
`                 `[`NounPhraseProd`](../object/NounPhraseProd.html)  
`                         `[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`PrepSingleNounProd`**  
`         `[`atSingleNoun(main)`](../object/atSingleNoun(main).html)  
`         `[`forSingleNoun(main)`](../object/forSingleNoun(main).html)  
`         `[`fromSingleNoun(main)`](../object/fromSingleNoun(main).html)  
`         `[`inSingleNoun(main)`](../object/inSingleNoun(main).html)  
`         `[`onSingleNoun(main)`](../object/onSingleNoun(main).html)  
`         `[`outOfSingleNoun(main)`](../object/outOfSingleNoun(main).html)  
`         `[`throughSingleNoun(main)`](../object/throughSingleNoun(main).html)  
`         `[`toSingleNoun(main)`](../object/toSingleNoun(main).html)  
`         `[`withSingleNoun(main)`](../object/withSingleNoun(main).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

` `

Inherited from `NounPhraseProd` :  
` `[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)`  `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`isSpecialResponseMatch`](#isSpecialResponseMatch)`  `[`resolveNouns`](#resolveNouns)`  `

` `

Inherited from `NounPhraseProd` :  
` `[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)`  `[`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)`  `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`getOrigText`](../object/BasicProd.html#getOrigText)`  `[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="isSpecialResponseMatch"></span>

`isSpecialResponseMatch ( )`

[en_us.t](../file/en_us.t.html)\[[5473](../source/en_us.t.html#5473)\]

<div class="desc">

If the response starts with a preposition, it's pretty clearly a
response to the special query rather than a new command.

</div>

<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[5464](../source/en_us.t.html#5464)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
