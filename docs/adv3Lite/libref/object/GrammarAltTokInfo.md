[GrammarAltTokInfo]{.title}[class]{.type}

[gramprod.t](../file/gramprod.t.html)\[[89](../source/gramprod.t.html#89)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
Grammar rule token descriptor. GrammarProd.getGrammarInfo() instantiates
one of these objects to represent each token slot in an alternative; a
GrammarAltInfo object\'s gramTokens property has a list of these
objects.

`class `**`GrammarAltTokInfo`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`GrammarAltTokInfo`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`gramTargetProp`](#gramTargetProp)`  `[`gramTokenInfo`](#gramTokenInfo)`  `[`gramTokenType`](#gramTokenType)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#gramTargetProp}

`gramTargetProp`

[gramprod.t](../file/gramprod.t.html)\[[114](../source/gramprod.t.html#114)\]

::: desc
The target property - this is the property of the \*match object\* that
will store the match information for the token. In a \'grammar\'
statement, this is the property after the \'-\>\' symbol for this token.
:::

[]{#gramTokenInfo}

`gramTokenInfo`

[gramprod.t](../file/gramprod.t.html)\[[143](../source/gramprod.t.html#143)\]

::: desc
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
:::

[]{#gramTokenType}

`gramTokenType`

[gramprod.t](../file/gramprod.t.html)\[[120](../source/gramprod.t.html#120)\]

::: desc
The token type. This is one of the GramTokTypeXxx values (see
gramprod.h) indicating what kind of token slot this is.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (prop, typ, info, ...)`

[gramprod.t](../file/gramprod.t.html)\[[100](../source/gramprod.t.html#100)\]

::: desc
Constructor. GrammarProd.getGrammarInfo() calls this once for each token
in each alternative in the production, passing in values to fully
describe the token slot: the target property (in a \'grammar\'
statement, this is the property after a \'-\>\' symbol); the token type;
and extra information that depends on the token type. Note that we use
\'\...\' at the end of the argument list so that we\'ll be compatible
with any future changes to GrammarProd that add more arguments to this
method.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
