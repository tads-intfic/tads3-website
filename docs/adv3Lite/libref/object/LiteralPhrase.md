---
layout: docs
---
<span class="title">LiteralPhrase</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[3125](../source/parser.t.html#3125)\]

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

LiteralPhrase is a special kind of NounPhrase for literals (TYPE, WRITE,
SET TO, etc). These phrases aren't resolved to game-world objects, but
instead are just treated as literal text.

`class `**`LiteralPhrase`**` :   `[`NounPhrase`](../object/NounPhrase.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`LiteralPhrase`**  
`         `[`NounPhrase`](../object/NounPhrase.html)  
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

` `

Inherited from `NounPhrase` :  
` `[`contPrep`](../object/NounPhrase.html#contPrep)`  `[`contQual`](../object/NounPhrase.html#contQual)`  `[`coreProd`](../object/NounPhrase.html#coreProd)`  `[`determiner`](../object/NounPhrase.html#determiner)`  `[`disambigNameList`](../object/NounPhrase.html#disambigNameList)`  `[`errName`](../object/NounPhrase.html#errName)`  `[`errNameProd`](../object/NounPhrase.html#errNameProd)`  `[`exclusions`](../object/NounPhrase.html#exclusions)`  `[`locQual`](../object/NounPhrase.html#locQual)`  `[`locType`](../object/NounPhrase.html#locType)`  `[`matches`](../object/NounPhrase.html#matches)`  `[`objs`](../object/NounPhrase.html#objs)`  `[`ordinal`](../object/NounPhrase.html#ordinal)`  `[`parent`](../object/NounPhrase.html#parent)`  `[`possQual`](../object/NounPhrase.html#possQual)`  `[`prod`](../object/NounPhrase.html#prod)`  `[`pronoun`](../object/NounPhrase.html#pronoun)`  `[`quantifier`](../object/NounPhrase.html#quantifier)`  `[`role`](../object/NounPhrase.html#role)`  `[`tokens`](../object/NounPhrase.html#tokens)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`matchVocab`](#matchVocab)`  `[`selectObjects`](#selectObjects)`  `

Inherited from `NounPhrase` :  
` `[`addContents`](../object/NounPhrase.html#addContents)`  `[`addExclusionItem`](../object/NounPhrase.html#addExclusionItem)`  `[`addLiteral`](../object/NounPhrase.html#addLiteral)`  `[`addLocation`](../object/NounPhrase.html#addLocation)`  `[`addMatches`](../object/NounPhrase.html#addMatches)`  `[`addOrdinal`](../object/NounPhrase.html#addOrdinal)`  `[`addPossessive`](../object/NounPhrase.html#addPossessive)`  `[`addQuantifier`](../object/NounPhrase.html#addQuantifier)`  `[`ambigError`](../object/NounPhrase.html#ambigError)`  `[`applyContQual`](../object/NounPhrase.html#applyContQual)`  `[`applyDisambig`](../object/NounPhrase.html#applyDisambig)`  `[`applyExclusion`](../object/NounPhrase.html#applyExclusion)`  `[`applyLocational`](../object/NounPhrase.html#applyLocational)`  `[`applyPossessive`](../object/NounPhrase.html#applyPossessive)`  `[`buildObjList`](../object/NounPhrase.html#buildObjList)`  `[`clone`](../object/NounPhrase.html#clone)`  `[`construct`](../object/NounPhrase.html#construct)`  `[`contains`](../object/NounPhrase.html#contains)`  `[`disambiguate`](../object/NounPhrase.html#disambiguate)`  `[`expandErrName`](../object/NounPhrase.html#expandErrName)`  `[`isAllEquivalent`](../object/NounPhrase.html#isAllEquivalent)`  `[`isMultiple`](../object/NounPhrase.html#isMultiple)`  `[`matchNameScope`](../object/NounPhrase.html#matchNameScope)`  `[`matchVocabPoss`](../object/NounPhrase.html#matchVocabPoss)`  `[`resolveAll`](../object/NounPhrase.html#resolveAll)`  `[`resolveReflexives`](../object/NounPhrase.html#resolveReflexives)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="matchVocab"></span>

`matchVocab (cmd)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[3126](../source/parser.t.html#3126)\]

<div class="desc">

*no description available*

</div>

<span id="selectObjects"></span>

`selectObjects (cmd)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[3143](../source/parser.t.html#3143)\]

<div class="desc">

Wrap the dummy object in am NPMatch object

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
