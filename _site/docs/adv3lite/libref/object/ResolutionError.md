<span class="title">ResolutionError</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[5230](../source/parser.t.html#5230)\]

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

Noun phrase resolution error. This is a special type of parsing error
that indicates that the problem is with resolving a noun phrase to
game-world objects.

`class `**`ResolutionError`**` :   `[`ParseError`](../object/ParseError.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ResolutionError`**  
`         `[`ParseError`](../object/ParseError.html)  
`                 `[`Exception`](../object/Exception.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`ResolutionError`**  
`         `[`ActorResolutionError`](../object/ActorResolutionError.html)  
`                 `[`InsufficientNounsError`](../object/InsufficientNounsError.html)  
`                 `[`NoneInLocationError`](../object/NoneInLocationError.html)  
`                 `[`NoneInOwnerError`](../object/NoneInOwnerError.html)  
`                 `[`NoneWithContentsError`](../object/NoneWithContentsError.html)  
`                 `[`UnmatchedNounError`](../object/UnmatchedNounError.html)  
`                         `[`AmbiguousMultiDefiniteError`](../object/AmbiguousMultiDefiniteError.html)  
`         `[`AmbiguousError`](../object/AmbiguousError.html)  
`         `[`OrdinalRangeError`](../object/OrdinalRangeError.html)  
`         `[`PronounError`](../object/PronounError.html)  
`                 `[`AntecedentScopeError`](../object/AntecedentScopeError.html)  
`                 `[`NoAntecedentError`](../object/NoAntecedentError.html)  
`         `[`UnmatchedActorError`](../object/UnmatchedActorError.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`np`](#np)`  `[`txt`](#txt)`  `

Inherited from `ParseError` :  
` `[`allowOnRespell`](../object/ParseError.html#allowOnRespell)`  `[`curable`](../object/ParseError.html#curable)`  `[`errStage`](../object/ParseError.html#errStage)`  `

Inherited from `Exception` :  
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`rankCorrection`](#rankCorrection)`  `

Inherited from `ParseError` :  
` `[`display`](../object/ParseError.html#display)`  `[`tryCuring`](../object/ParseError.html#tryCuring)`  `

Inherited from `Exception` :  
` `[`displayException`](../object/Exception.html#displayException)`  `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="np"></span>

`np`

[parser.t](../file/parser.t.html)\[[5244](../source/parser.t.html#5244)\]

<div class="desc">

the NounPhrase object for the errant phrase, if available

</div>

<span id="txt"></span>

`txt`

[parser.t](../file/parser.t.html)\[[5247](../source/parser.t.html#5247)\]

<div class="desc">

the text of the errant phrase, if available

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (np)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5231](../source/parser.t.html#5231)\]

<div class="desc">

*no description available*

</div>

<span id="rankCorrection"></span>

`rankCorrection (toks, idx, dict)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5258](../source/parser.t.html#5258)\]

<div class="desc">

For a noun resolution error, our best bet for a spelling correction
would be a word associated with a game-world object. Only consider
in-scope objects when making the correction, to avoid spurious
corrections that give away information on objects the player has yet to
encounter. We'll also allow words that are used in non-predicate grammar
productions, since we might have a structural noun phrase word (an
article, pronoun, etc).

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
