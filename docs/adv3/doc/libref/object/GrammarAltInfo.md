---
layout: docs
---
<span class="title">GrammarAltInfo</span><span class="type">class</span>

[gramprod.t](../file/gramprod.t.html)\[[43](../source/gramprod.t.html#43)\]

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



Rule alternative descriptor. This describes one alternative in a grammar
production. An alternative is one complete list of matchable tokens.

In a 'grammar' statement, alternatives are delimited by '\|' symbols at
the top level. Each group of tokens set off by '\|' symbols is one
alternative.

When '\|' symbols are grouped with parentheses in a 'grammar' statement,
the compiler "flattens" the grouping by expanding out the parenthesized
groups until it has entirely top-level alternatives. So, at the level of
a GrammarProd object, there's no such thing as parentheses or nested
'\|' symbols.

`class `**`GrammarAltInfo`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`GrammarAltInfo`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`gramBadness`](#gramBadness) [`gramMatchObj`](#gramMatchObj) [`gramTokens`](#gramTokens)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="gramBadness"></span>

`gramBadness`

[gramprod.t](../file/gramprod.t.html)\[[66](../source/gramprod.t.html#66)\]



The 'badness' value associated with the alternative. A value of zero
means that there's no badness.



<span id="gramMatchObj"></span>

`gramMatchObj`

[gramprod.t](../file/gramprod.t.html)\[[73](../source/gramprod.t.html#73)\]



the "match object" class - this is the class that
GrammarProd.parseTokens() instantiates to represent a match to this
alternative in the match list that the method returns



<span id="gramTokens"></span>

`gramTokens`

[gramprod.t](../file/gramprod.t.html)\[[80](../source/gramprod.t.html#80)\]



The token descriptor list. This is a list of zero or more
GrammarAltTokInfo objects describing the tokens making up this rule.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (score, badness, matchObj, toks, ...)`

[gramprod.t](../file/gramprod.t.html)\[[54](../source/gramprod.t.html#54)\]



Constructor. GrammarProd.getGrammarInfo() calls this once for each
alternative making up the production, passing in the values that define
the alternative. Note that we have a '...' in our argument list so that
we'll be compatible with any future GrammarProd versions that add
additional arguments - we won't do anything with the extra arguments,
but we'll harmlessly ignore them, so code compiled with this library
version will continue to work correctly.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


