---
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

<div class="fdesc">

Except list results object

`class `**`ExceptResults`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ExceptResults`**  
`         object`  
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

` `[`origResults`](#origResults)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`ambiguousNounPhrase`](#ambiguousNounPhrase)`  `[`construct`](#construct)`  `[`noMatch`](#noMatch)`  `[`noMatchForLocation`](#noMatchForLocation)`  `[`noMatchForPossessive`](#noMatchForPossessive)`  `[`noMatchPoss`](#noMatchPoss)`  `[`nothingInLocation`](#nothingInLocation)`  `[`noVocabMatch`](#noVocabMatch)`  `[`propNotDefined`](#propNotDefined)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="origResults"></span>

`origResults`

[parser.t](../file/parser.t.html)\[[6913](../source/parser.t.html#6913)\]

<div class="desc">

my original underlying results object

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="ambiguousNounPhrase"></span>

`ambiguousNounPhrase (keeper, asker, txt, matchList, fullMatchList, scopeList, requiredNum, resolver)`

[parser.t](../file/parser.t.html)\[[6898](../source/parser.t.html#6898)\]

<div class="desc">

in case of ambiguity, simply keep everything and treat it as
unambiguous - if they say "take coin except copper", we simply want to
treat "copper" as unambiguously excluding every copper coin in the
original list

</div>

<span id="construct"></span>

`construct (results)`

[parser.t](../file/parser.t.html)\[[6868](../source/parser.t.html#6868)\]

<div class="desc">

*no description available*

</div>

<span id="noMatch"></span>

`noMatch (action, txt)`

[parser.t](../file/parser.t.html)\[[6879](../source/parser.t.html#6879)\]

<div class="desc">

ignore failed matches in the exception list - if they try to exclude
something that's not in the original list, the object is excluded to
begin with

</div>

<span id="noMatchForLocation"></span>

`noMatchForLocation (loc, txt)`

[parser.t](../file/parser.t.html)\[[6887](../source/parser.t.html#6887)\]

<div class="desc">

ignore failed matches for location in the exception list

</div>

<span id="noMatchForPossessive"></span>

`noMatchForPossessive (owner, txt)`

[parser.t](../file/parser.t.html)\[[6884](../source/parser.t.html#6884)\]

<div class="desc">

ignore failed matches for possessives in the exception list

</div>

<span id="noMatchPoss"></span>

`noMatchPoss (action, txt)`

[parser.t](../file/parser.t.html)\[[6880](../source/parser.t.html#6880)\]

<div class="desc">

*no description available*

</div>

<span id="nothingInLocation"></span>

`nothingInLocation (loc)`

[parser.t](../file/parser.t.html)\[[6890](../source/parser.t.html#6890)\]

<div class="desc">

ignore failed matches for location in the exception list

</div>

<span id="noVocabMatch"></span>

`noVocabMatch (action, txt)`

[parser.t](../file/parser.t.html)\[[6881](../source/parser.t.html#6881)\]

<div class="desc">

*no description available*

</div>

<span id="propNotDefined"></span>

`propNotDefined (prop, [args])`

[parser.t](../file/parser.t.html)\[[6907](../source/parser.t.html#6907)\]

<div class="desc">

proxy anything we don't override to the underlying results object

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
