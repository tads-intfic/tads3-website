<span class="title">DefinitePluralProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[2207](../source/parser.t.html#2207)\]

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

A plural phrase qualified by a definite article ("the books"). This type
of phrasing doesn't specify anything about the specific number of items
involved, except that they number more than one.

In most cases, we take this to imply that all of the matching objects
are intended to be included, with one exception: when we have an object
that can serve as a collective for some of the other objects, we match
only the collective but not the other objects. For example, if we type
"take marbles," and we have five marbles and a bag of marbles that
serves as a collective object for three of the five marbles, we'll match
the bag and two marbles not in the bag, but NOT the marbles that are in
the bag. This is usually desirable when there's a collective object,
since it applies the command to the object standing in for the group
rather than applying the command one by one to each of the individuals
in the group.

`class `**`DefinitePluralProd`**` :   `[`PluralProd`](../object/PluralProd.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`DefinitePluralProd`**  
`         `[`PluralProd`](../object/PluralProd.html)  
`                 `[`NounPhraseProd`](../object/NounPhraseProd.html)  
`                         `[`BasicProd`](../object/BasicProd.html)  
`                                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`DefinitePluralProd`**  
`         `[`explicitDetPluralNounPhrase(definite)`](../object/explicitDetPluralNounPhrase(definite).html)  
`         `[`implicitDetPluralOnlyNounPhrase(main)`](../object/implicitDetPluralOnlyNounPhrase(main).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`filterForCollectives`](#filterForCollectives)`  `

` `

` `

Inherited from `BasicProd` :  
` `[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)`  `[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)`  `[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`resolveNouns`](#resolveNouns)`  `

Inherited from `PluralProd` :  
` `[`basicPluralResolveNouns`](../object/PluralProd.html#basicPluralResolveNouns)`  `[`getVerifyKeepers`](../object/PluralProd.html#getVerifyKeepers)`  `

Inherited from `NounPhraseProd` :  
` `[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations)`  `

Inherited from `BasicProd` :  
` `[`canResolveTo`](../object/BasicProd.html#canResolveTo)`  `[`getOrigText`](../object/BasicProd.html#getOrigText)`  `[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)`  `[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="filterForCollectives"></span>

`filterForCollectives`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[2215](../source/parser.t.html#2215)\]

<div class="desc">

prefer to keep collectives instead of their individuals

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="resolveNouns"></span>

`resolveNouns (resolver, results)`

[parser.t](../file/parser.t.html)\[[2208](../source/parser.t.html#2208)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>