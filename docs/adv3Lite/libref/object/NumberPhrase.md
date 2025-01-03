---
layout: docs
---
<span class="title">NumberPhrase</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[3167](../source/parser.t.html#3167)\]

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



NumberPhrase is a special kind of NounPhrase for numeric literals (e.g.,
FOOTNOTE n). These phrases aren't resolved to game-world objects, but
are simply taken as numeric values.

`class `**`NumberPhrase`**` :   `[`NounPhrase`](../object/NounPhrase.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`NumberPhrase`**  
[`NounPhrase`](../object/NounPhrase.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
Inherited from `NounPhrase` :  
[`contPrep`](../object/NounPhrase.html#contPrep) [`contQual`](../object/NounPhrase.html#contQual) [`coreProd`](../object/NounPhrase.html#coreProd) [`determiner`](../object/NounPhrase.html#determiner) [`disambigNameList`](../object/NounPhrase.html#disambigNameList) [`errName`](../object/NounPhrase.html#errName) [`errNameProd`](../object/NounPhrase.html#errNameProd) [`exclusions`](../object/NounPhrase.html#exclusions) [`locQual`](../object/NounPhrase.html#locQual) [`locType`](../object/NounPhrase.html#locType) [`matches`](../object/NounPhrase.html#matches) [`objs`](../object/NounPhrase.html#objs) [`ordinal`](../object/NounPhrase.html#ordinal) [`parent`](../object/NounPhrase.html#parent) [`possQual`](../object/NounPhrase.html#possQual) [`prod`](../object/NounPhrase.html#prod) [`pronoun`](../object/NounPhrase.html#pronoun) [`quantifier`](../object/NounPhrase.html#quantifier) [`role`](../object/NounPhrase.html#role) [`tokens`](../object/NounPhrase.html#tokens)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`selectObjects`](#selectObjects)

Inherited from `NounPhrase` :  
[`addContents`](../object/NounPhrase.html#addContents) [`addExclusionItem`](../object/NounPhrase.html#addExclusionItem) [`addLiteral`](../object/NounPhrase.html#addLiteral) [`addLocation`](../object/NounPhrase.html#addLocation) [`addMatches`](../object/NounPhrase.html#addMatches) [`addOrdinal`](../object/NounPhrase.html#addOrdinal) [`addPossessive`](../object/NounPhrase.html#addPossessive) [`addQuantifier`](../object/NounPhrase.html#addQuantifier) [`ambigError`](../object/NounPhrase.html#ambigError) [`applyContQual`](../object/NounPhrase.html#applyContQual) [`applyDisambig`](../object/NounPhrase.html#applyDisambig) [`applyExclusion`](../object/NounPhrase.html#applyExclusion) [`applyLocational`](../object/NounPhrase.html#applyLocational) [`applyPossessive`](../object/NounPhrase.html#applyPossessive) [`buildObjList`](../object/NounPhrase.html#buildObjList) [`clone`](../object/NounPhrase.html#clone) [`construct`](../object/NounPhrase.html#construct) [`contains`](../object/NounPhrase.html#contains) [`disambiguate`](../object/NounPhrase.html#disambiguate) [`expandErrName`](../object/NounPhrase.html#expandErrName) [`isAllEquivalent`](../object/NounPhrase.html#isAllEquivalent) [`isMultiple`](../object/NounPhrase.html#isMultiple) [`matchNameScope`](../object/NounPhrase.html#matchNameScope) [`matchVocab`](../object/NounPhrase.html#matchVocab) [`matchVocabPoss`](../object/NounPhrase.html#matchVocabPoss) [`resolveAll`](../object/NounPhrase.html#resolveAll) [`resolveReflexives`](../object/NounPhrase.html#resolveReflexives)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="selectObjects"></span>

`selectObjects (cmd)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[3185](../source/parser.t.html#3185)\]



Wrap the dummy object in am NPMatch object
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


