---
layout: docs
---
<span class="title">ExceptListProduction</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[4105](../source/parser.t.html#4105)\]

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

ExceptListProduction is a Production subclass for EXCEPT lists. This is
a slot in the grammar that holds a list of objects excepted from some
set, as in ALL BUT THE RED BOOK or THE COINS EXCEPT THE PENNIES.

`class `**`ExceptListProduction`**` :   `[`Production`](../object/Production.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ExceptListProduction`**  
[`Production`](../object/Production.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`ExceptListProduction`**  
[`exceptList(main)`](../object/exceptList(main).html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`qualifiedNP`](#qualifiedNP)

Inherited from `Production` :  
[`determiner`](../object/Production.html#determiner)[`nounPhraseRole`](../object/Production.html#nounPhraseRole)[`npClass`](../object/Production.html#npClass)[`parent`](../object/Production.html#parent)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`addNounListItem`](#addNounListItem)[`build`](#build)

Inherited from `Production` :  
[`findAction`](../object/Production.html#findAction)[`findChild`](../object/Production.html#findChild)[`findParent`](../object/Production.html#findParent)[`getNounPhraseRole`](../object/Production.html#getNounPhraseRole)[`getText`](../object/Production.html#getText)[`getTokens`](../object/Production.html#getTokens)[`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild)[`isChildOf`](../object/Production.html#isChildOf)[`noteEndOfSentence`](../object/Production.html#noteEndOfSentence)[`visitLiteral`](../object/Production.html#visitLiteral)[`visitProd`](../object/Production.html#visitProd)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="qualifiedNP"></span>

`qualifiedNP`

[parser.t](../file/parser.t.html)\[[4144](../source/parser.t.html#4144)\]

<div class="desc">

the noun phrase we qualify

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addNounListItem"></span>

`addNounListItem (cmd, prod)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4137](../source/parser.t.html#4137)\]

<div class="desc">

Add a noun list item. List items within our sub-tree go into the
exclusion list for the parent noun phrase that we qualify.

</div>

<span id="build"></span>

`build (cmd, np)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4114](../source/parser.t.html#4114)\]

<div class="desc">

Build this phrase. Our sub-tree is a noun list that's to be excluded
from the current noun phrase under construction, 'np'; this exclusion
list is a type of qualifier. So, we (a) start an exception qualifier for
'np', (b) make that list the current noun phrase within our sub-tree,
then (c) do the normal work to build out our sub-tree, but using the new
context.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
