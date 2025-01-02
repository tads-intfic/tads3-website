<span class="title">QuantifierProduction</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[4406](../source/parser.t.html#4406)\]

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

QuantifierProduction is a subclass of Production for phrases that add a
number qualifier, as in "five books".

Each grammar rule of this type needs to define a special '-\>quant\_'
association in its template, giving the quantity phrase production. This
phrase must in turn provide a 'numval' property giving its numeric
value.

Alternatively, this production can itself simply provide a 'numval'
property with the correct number. This is convenient for adjective-like
qualifier phrases that imply a number without stating one directly, such
as BOTH BOOKS.

`class `**`QuantifierProduction`**` :   `[`Production`](../object/Production.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`QuantifierProduction`**  
`         `[`Production`](../object/Production.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`QuantifierProduction`**  
`         `[`disambigPhrase(both)`](../object/disambigPhrase(both).html)  
`         `[`explicitDetPluralNounPhrase(definiteNumber)`](../object/explicitDetPluralNounPhrase(definiteNumber).html)  
`         `[`explicitDetPluralNounPhrase(possessiveNumber)`](../object/explicitDetPluralNounPhrase(possessiveNumber).html)  
`         `[`explicitDetPluralNounPhrase(possessiveNumber2)`](../object/explicitDetPluralNounPhrase(possessiveNumber2).html)  
`         `[`explicitDetPluralOnlyNounPhrase(definiteNumber)`](../object/explicitDetPluralOnlyNounPhrase(definiteNumber).html)  
`         `[`explicitDetPluralOnlyNounPhrase(possessiveNumber)`](../object/explicitDetPluralOnlyNounPhrase(possessiveNumber).html)  
`         `[`explicitDetPluralOnlyNounPhrase(possessiveNumber2)`](../object/explicitDetPluralOnlyNounPhrase(possessiveNumber2).html)  
`         `[`qualifiedPluralNounPhrase(allNum)`](../object/qualifiedPluralNounPhrase(allNum).html)  
`         `[`qualifiedPluralNounPhrase(anyNum)`](../object/qualifiedPluralNounPhrase(anyNum).html)  
`         `[`qualifiedPluralNounPhrase(both)`](../object/qualifiedPluralNounPhrase(both).html)  
`         `[`qualifiedPluralNounPhrase(definiteNum)`](../object/qualifiedPluralNounPhrase(definiteNum).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

Inherited from `Production` :  
` `[`determiner`](../object/Production.html#determiner)`  `[`nounPhraseRole`](../object/Production.html#nounPhraseRole)`  `[`npClass`](../object/Production.html#npClass)`  `[`parent`](../object/Production.html#parent)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`build`](#build)`  `[`visitProd`](#visitProd)`  `

Inherited from `Production` :  
` `[`addNounListItem`](../object/Production.html#addNounListItem)`  `[`findAction`](../object/Production.html#findAction)`  `[`findChild`](../object/Production.html#findChild)`  `[`findParent`](../object/Production.html#findParent)`  `[`getNounPhraseRole`](../object/Production.html#getNounPhraseRole)`  `[`getText`](../object/Production.html#getText)`  `[`getTokens`](../object/Production.html#getTokens)`  `[`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild)`  `[`isChildOf`](../object/Production.html#isChildOf)`  `[`noteEndOfSentence`](../object/Production.html#noteEndOfSentence)`  `[`visitLiteral`](../object/Production.html#visitLiteral)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="build"></span>

`build (cmd, np)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4413](../source/parser.t.html#4413)\]

<div class="desc">

Build out the subtree. If we have a numval embedded in this production,
we'll use it as the quantifier. Otherwise, we'll expect to find a
separate quant\_ sub-production among our children, and that it provides
the quantity.

</div>

<span id="visitProd"></span>

`visitProd (cmd, np, prod)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4433](../source/parser.t.html#4433)\]

<div class="desc">

Visit a production. When we visit the quantifier phrase, we'll handle it
specially: we'll add the quantifier value to the main noun phrase, and
then we \*won't\* parse into the subtree. There's no need to parse the
quantifier subtree, as its entire meaning is captured in its numeric
value. Parsing into it is undesirable because that would add the numeric
tokens to the noun phrase - they don't belong there, since their
qualification is captured in the quantifier and shouldn't also be added
as adjectives.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
