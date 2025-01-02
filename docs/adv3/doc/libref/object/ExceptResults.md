---
layout: docs
---
<span class="title">ExceptResults</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[6867](../source/parser.t.html#6867)\]

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



Except list results object

`class `**`ExceptResults`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ExceptResults`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`origResults`](#origResults)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`ambiguousNounPhrase`](#ambiguousNounPhrase)[`construct`](#construct)[`noMatch`](#noMatch)[`noMatchForLocation`](#noMatchForLocation)[`noMatchForPossessive`](#noMatchForPossessive)[`noMatchPoss`](#noMatchPoss)[`nothingInLocation`](#nothingInLocation)[`noVocabMatch`](#noVocabMatch)[`propNotDefined`](#propNotDefined)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="origResults"></span>

`origResults`

[parser.t](../file/parser.t.html)\[[6913](../source/parser.t.html#6913)\]



my original underlying results object



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="ambiguousNounPhrase"></span>

`ambiguousNounPhrase (keeper, asker, txt, matchList, fullMatchList, scopeList, requiredNum, resolver)`

[parser.t](../file/parser.t.html)\[[6898](../source/parser.t.html#6898)\]



in case of ambiguity, simply keep everything and treat it as
unambiguous - if they say "take coin except copper", we simply want to
treat "copper" as unambiguously excluding every copper coin in the
original list



<span id="construct"></span>

`construct (results)`

[parser.t](../file/parser.t.html)\[[6868](../source/parser.t.html#6868)\]



*no description available*



<span id="noMatch"></span>

`noMatch (action, txt)`

[parser.t](../file/parser.t.html)\[[6879](../source/parser.t.html#6879)\]



ignore failed matches in the exception list - if they try to exclude
something that's not in the original list, the object is excluded to
begin with



<span id="noMatchForLocation"></span>

`noMatchForLocation (loc, txt)`

[parser.t](../file/parser.t.html)\[[6887](../source/parser.t.html#6887)\]



ignore failed matches for location in the exception list



<span id="noMatchForPossessive"></span>

`noMatchForPossessive (owner, txt)`

[parser.t](../file/parser.t.html)\[[6884](../source/parser.t.html#6884)\]



ignore failed matches for possessives in the exception list



<span id="noMatchPoss"></span>

`noMatchPoss (action, txt)`

[parser.t](../file/parser.t.html)\[[6880](../source/parser.t.html#6880)\]



*no description available*



<span id="nothingInLocation"></span>

`nothingInLocation (loc)`

[parser.t](../file/parser.t.html)\[[6890](../source/parser.t.html#6890)\]



ignore failed matches for location in the exception list



<span id="noVocabMatch"></span>

`noVocabMatch (action, txt)`

[parser.t](../file/parser.t.html)\[[6881](../source/parser.t.html#6881)\]



*no description available*



<span id="propNotDefined"></span>

`propNotDefined (prop, [args])`

[parser.t](../file/parser.t.html)\[[6907](../source/parser.t.html#6907)\]



proxy anything we don't override to the underlying results object





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


