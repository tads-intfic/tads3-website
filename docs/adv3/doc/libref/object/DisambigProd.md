---
layout: docs
---
<span class="title">DisambigProd</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[612](../source/parser.t.html#612)\]

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



Basic disambiguation production class

`class `**`DisambigProd`**` :   `[`BasicProd`](../object/BasicProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`DisambigProd`**  
[`BasicProd`](../object/BasicProd.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`DisambigProd`**  
[`disambigList(list)`](../object/disambigList(list).html)  
[`disambigList(single)`](../object/disambigList(single).html)  
[`DisambigOrdProd`](../object/DisambigOrdProd.html)  
[`disambigListItem(ordinal)`](../object/disambigListItem(ordinal).html)  
[`disambigOrdinalList(head)`](../object/disambigOrdinalList(head).html)  
[`disambigOrdinalList(tail)`](../object/disambigOrdinalList(tail).html)  
[`disambigPhrase(all)`](../object/disambigPhrase(all).html)  
[`disambigPhrase(any)`](../object/disambigPhrase(any).html)  
[`disambigPhrase(both)`](../object/disambigPhrase(both).html)  
[`disambigPhrase(list)`](../object/disambigPhrase(list).html)  
[`disambigPhrase(ordinalList)`](../object/disambigPhrase(ordinalList).html)  
[`DisambigPossessiveProd`](../object/DisambigPossessiveProd.html)  
[`disambigListItem(possessive)`](../object/disambigListItem(possessive).html)  
[`DisambigVocabProd`](../object/DisambigVocabProd.html)  
[`disambigListItem(noun)`](../object/disambigListItem(noun).html)  
[`disambigListItem(plural)`](../object/disambigListItem(plural).html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex)[`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch)[`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`removeAmbigFlags`](#removeAmbigFlags)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo)[`getOrigText`](../object/BasicProd.html#getOrigText)[`getOrigTokenList`](../object/BasicProd.html#getOrigTokenList)[`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="removeAmbigFlags"></span>

`removeAmbigFlags (lst)`

[parser.t](../file/parser.t.html)\[[618](../source/parser.t.html#618)\]



Remove the "ambiguous" flags from a result list. This can be used to
mark the response to a disambiguation query as no longer ambiguous.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


