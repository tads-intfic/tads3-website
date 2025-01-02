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



ExceptListProduction is a Production subclass for EXCEPT lists. This is
a slot in the grammar that holds a list of objects excepted from some
set, as in ALL BUT THE RED BOOK or THE COINS EXCEPT THE PENNIES.

`class `**`ExceptListProduction`**` :   `[`Production`](../object/Production.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ExceptListProduction`**  
[`Production`](../object/Production.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`ExceptListProduction`**  
[`exceptList(main)`](../object/exceptList(main).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`qualifiedNP`](#qualifiedNP)

Inherited from `Production` :  
[`determiner`](../object/Production.html#determiner)[`nounPhraseRole`](../object/Production.html#nounPhraseRole)[`npClass`](../object/Production.html#npClass)[`parent`](../object/Production.html#parent)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addNounListItem`](#addNounListItem)[`build`](#build)

Inherited from `Production` :  
[`findAction`](../object/Production.html#findAction)[`findChild`](../object/Production.html#findChild)[`findParent`](../object/Production.html#findParent)[`getNounPhraseRole`](../object/Production.html#getNounPhraseRole)[`getText`](../object/Production.html#getText)[`getTokens`](../object/Production.html#getTokens)[`grammarInfoForBuild`](../object/Production.html#grammarInfoForBuild)[`isChildOf`](../object/Production.html#isChildOf)[`noteEndOfSentence`](../object/Production.html#noteEndOfSentence)[`visitLiteral`](../object/Production.html#visitLiteral)[`visitProd`](../object/Production.html#visitProd)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="qualifiedNP"></span>

`qualifiedNP`

[parser.t](../file/parser.t.html)\[[4144](../source/parser.t.html#4144)\]



the noun phrase we qualify



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addNounListItem"></span>

`addNounListItem (cmd, prod)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4137](../source/parser.t.html#4137)\]



Add a noun list item. List items within our sub-tree go into the
exclusion list for the parent noun phrase that we qualify.



<span id="build"></span>

`build (cmd, np)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4114](../source/parser.t.html#4114)\]



Build this phrase. Our sub-tree is a noun list that's to be excluded
from the current noun phrase under construction, 'np'; this exclusion
list is a type of qualifier. So, we (a) start an exception qualifier for
'np', (b) make that list the current noun phrase within our sub-tree,
then (c) do the normal work to build out our sub-tree, but using the new
context.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


