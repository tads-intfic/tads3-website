<span class="title">AmbiguousError</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[5600](../source/parser.t.html#5600)\]

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

A noun phrase is ambiguous, so we'll have to ask for clarification.

`class `**`AmbiguousError`**` :   `[`ResolutionError`](../object/ResolutionError.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`AmbiguousError`**  
`         `[`ResolutionError`](../object/ResolutionError.html)  
`                 `[`ParseError`](../object/ParseError.html)  
`                         `[`Exception`](../object/Exception.html)  
`                                 object`  
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

` `[`allowOnRespell`](#allowOnRespell)`  `[`cmd`](#cmd)`  `[`curable`](#curable)`  `[`nameList`](#nameList)`  `

Inherited from `ResolutionError` :  
` `[`np`](../object/ResolutionError.html#np)`  `[`txt`](../object/ResolutionError.html#txt)`  `

Inherited from `ParseError` :  
` `[`errStage`](../object/ParseError.html#errStage)`  `

Inherited from `Exception` :  
` `[`errmsg_`](../object/Exception.html#errmsg_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`display`](#display)`  `[`tryCuring`](#tryCuring)`  `

Inherited from `ResolutionError` :  
` `[`rankCorrection`](../object/ResolutionError.html#rankCorrection)`  `

` `

Inherited from `Exception` :  
` `[`displayException`](../object/Exception.html#displayException)`  `[`getExceptionMessage`](../object/Exception.html#getExceptionMessage)`  `[`showStackTrace`](../object/Exception.html#showStackTrace)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="allowOnRespell"></span>

`allowOnRespell`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5622](../source/parser.t.html#5622)\]

<div class="desc">

Accept spelling corrections that trigger an ambiguous noun error. If we
find an ambiguous noun it means that we have valid overall verb syntax
\*and\* we have noun phrases that match in-scope objects - in fact, they
match too many objects. This is pretty good evidence that the respelling
is valid.

</div>

<span id="cmd"></span>

`cmd`

[parser.t](../file/parser.t.html)\[[5665](../source/parser.t.html#5665)\]

<div class="desc">

the original Command that we were trying to resolve

</div>

<span id="curable"></span>

`curable`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5629](../source/parser.t.html#5629)\]

<div class="desc">

this is a curable error, since the player can fix the problem by
answering the disambiguation question

</div>

<span id="nameList"></span>

`nameList`

[parser.t](../file/parser.t.html)\[[5671](../source/parser.t.html#5671)\]

<div class="desc">

The list of object names, with distinguisher information. This is the
same information returned from Distinguisher.getNames().

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (cmd, np, names)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5601](../source/parser.t.html#5601)\]

<div class="desc">

*no description available*

</div>

<span id="display"></span>

`display ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5608](../source/parser.t.html#5608)\]

<div class="desc">

*no description available*

</div>

<span id="tryCuring"></span>

`tryCuring (toks, dict)`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[5637](../source/parser.t.html#5637)\]

<div class="desc">

Try curing the error. After an ambiguous noun error, the player can type
a partial noun phrase that clarifies which object was intended: a
distinguishing adjective, a locational phrase, a possessive, etc.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
