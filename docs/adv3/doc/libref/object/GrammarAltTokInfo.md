---
layout: docs
---
<span class="title">GrammarAltTokInfo</span><span class="type">class</span>

[gramprod.t](../file/gramprod.t.html)\[[89](../source/gramprod.t.html#89)\]

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



Grammar rule token descriptor. GrammarProd.getGrammarInfo() instantiates
one of these objects to represent each token slot in an alternative; a
GrammarAltInfo object's gramTokens property has a list of these objects.

`class `**`GrammarAltTokInfo`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`GrammarAltTokInfo`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`gramTargetProp`](#gramTargetProp) [`gramTokenInfo`](#gramTokenInfo) [`gramTokenType`](#gramTokenType)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="gramTargetProp"></span>

`gramTargetProp`

[gramprod.t](../file/gramprod.t.html)\[[114](../source/gramprod.t.html#114)\]



The target property - this is the property of the \*match object\* that
will store the match information for the token. In a 'grammar'
statement, this is the property after the '-\>' symbol for this token.



<span id="gramTokenInfo"></span>

`gramTokenInfo`

[gramprod.t](../file/gramprod.t.html)\[[143](../source/gramprod.t.html#143)\]



Detailed information for the token slot, which depends on the token
type:

GramTokTypeProd - this gives the GrammarProd object defining the
sub-production that this token slot matches

GramTokTypeSpeech - this is the property ID giving the part-of-speech
property that this token slot matches

GramTokTypeNSpeech - this is a list of property IDs giving the
part-of-speech properties that this token slot matches

GramTokTypeLiteral - this is a string giving the literal that this slot
matches

GramTokTypeTokEnum - this is the enum value giving the token type that
this slot matches

GramTokTypeStar - no extra information (the value will be nil)



<span id="gramTokenType"></span>

`gramTokenType`

[gramprod.t](../file/gramprod.t.html)\[[120](../source/gramprod.t.html#120)\]



The token type. This is one of the GramTokTypeXxx values (see
gramprod.h) indicating what kind of token slot this is.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (prop, typ, info, ...)`

[gramprod.t](../file/gramprod.t.html)\[[100](../source/gramprod.t.html#100)\]



Constructor. GrammarProd.getGrammarInfo() calls this once for each token
in each alternative in the production, passing in values to fully
describe the token slot: the target property (in a 'grammar' statement,
this is the property after a '-\>' symbol); the token type; and extra
information that depends on the token type. Note that we use '...' at
the end of the argument list so that we'll be compatible with any future
changes to GrammarProd that add more arguments to this method.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


