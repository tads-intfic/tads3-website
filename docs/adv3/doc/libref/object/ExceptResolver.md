---
layout: docs
---
<span class="title">ExceptResolver</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[6778](../source/parser.t.html#6778)\]

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



Exception list resolver. We use this type of resolution for noun phrases
in the "but" list of an "all but" construct.

We scope the "all but" list to the objects in the "all" list, since
there's no point in excluding objects that aren't in the "all" list. In
addition, if a phrase in the exclusion list matches more than one object
in the "all" list, we consider it a match to all of those objects, even
if it's a definite phrase - this means that items in the "but" list are
never ambiguous.

`class `**`ExceptResolver`**` :   `[`ProxyResolver`](../object/ProxyResolver.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ExceptResolver`**  
[`ProxyResolver`](../object/ProxyResolver.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`isSubResolver`](#isSubResolver)[`mainList`](#mainList)[`mainListText`](#mainListText)[`origResolver`](#origResolver)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)[`filterAmbiguousEquivalents`](#filterAmbiguousEquivalents)[`filterAmbiguousNounPhrase`](#filterAmbiguousNounPhrase)[`filterPluralPhrase`](#filterPluralPhrase)[`getAll`](#getAll)[`getQualifierResolver`](#getQualifierResolver)[`matchName`](#matchName)[`objInScope`](#objInScope)

Inherited from `ProxyResolver` :  
[`getPossessiveResolver`](../object/ProxyResolver.html#getPossessiveResolver)[`propNotDefined`](../object/ProxyResolver.html#propNotDefined)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="isSubResolver"></span>

`isSubResolver`

[parser.t](../file/parser.t.html)\[[6790](../source/parser.t.html#6790)\]



we're a sub-phrase resolver



<span id="mainList"></span>

`mainList`

[parser.t](../file/parser.t.html)\[[6855](../source/parser.t.html#6855)\]



the main list from which we're excluding things



<span id="mainListText"></span>

`mainListText`

[parser.t](../file/parser.t.html)\[[6858](../source/parser.t.html#6858)\]



the original text for the main list



<span id="origResolver"></span>

`origResolver`

[parser.t](../file/parser.t.html)\[[6861](../source/parser.t.html#6861)\]



the original underlying resolver



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (mainList, mainListText, resolver)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[6779](../source/parser.t.html#6779)\]



*no description available*



<span id="filterAmbiguousEquivalents"></span>

`filterAmbiguousEquivalents (lst, np)`

[parser.t](../file/parser.t.html)\[[6826](../source/parser.t.html#6826)\]



filter ambiguous equivalents



<span id="filterAmbiguousNounPhrase"></span>

`filterAmbiguousNounPhrase (lst, requiredNum, np)`

[parser.t](../file/parser.t.html)\[[6837](../source/parser.t.html#6837)\]



filter an ambiguous noun list



<span id="filterPluralPhrase"></span>

`filterPluralPhrase (lst, np)`

[parser.t](../file/parser.t.html)\[[6848](../source/parser.t.html#6848)\]



filter a plural noun list



<span id="getAll"></span>

`getAll (np)`

[parser.t](../file/parser.t.html)\[[6820](../source/parser.t.html#6820)\]



for 'all', simply return the whole original list



<span id="getQualifierResolver"></span>

`getQualifierResolver ( )`

[parser.t](../file/parser.t.html)\[[6808](../source/parser.t.html#6808)\]



Resolve qualifiers in the enclosing main scope, since qualifier phrases
are not part of the narrowed list - qualifiers apply to the main phrase
from which we're excluding, not to the exclusion list itself.



<span id="matchName"></span>

`matchName (obj, origTokens, adjustedTokens)`

[parser.t](../file/parser.t.html)\[[6797](../source/parser.t.html#6797)\]



match an object's name - we'll use the disambiguation name resolver, so
that they can give us partial names just like in answer to a
disambiguation question



<span id="objInScope"></span>

`objInScope (obj)`

[parser.t](../file/parser.t.html)\[[6814](../source/parser.t.html#6814)\]



determine if an object is in scope - it's in scope if it's in the
original main list





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


