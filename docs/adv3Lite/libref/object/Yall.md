---
layout: docs
---
<span class="title">Yall</span><span class="type">object</span>

[parser.t](../file/parser.t.html)\[[4762](../source/parser.t.html#4762)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)

<div class="fdesc">

Y'all - the second-person plural. ("Y'all" isn't exactly standard
English, but it's as close as English comes to having a distinct plural
You, and we had to call this \*something\*.)

By default, we treat Y'all as a synonym for You, since there's rarely
any reason in an IF context to distinguish them. The main value in
natural language is in group conversation, where it can be useful to
clarify whether the speaker is addressing the whole group or just an
individual. In IF, though, this is never ambiguous: the addressee is
either explicitly stated in the command, or it's the player character.
The only thing we could do with a plural is check that the verb agrees
in number, and chastise the player's sloppy grammar if not. But that
would be contrary to our general philosophy that we should be as lax as
we can about the input grammar, to minimize the player's typing
workload. So our advice here is to implement a grammar rule for the
various YOUs that treats all of the second-person pronoun forms as
synonyms for the basic singular YOU.

**`Yall`**` :   `[`Pronoun`](../object/Pronoun.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Yall`**  
[`Pronoun`](../object/Pronoun.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` [`person`](#person)  `

Inherited from `Pronoun` :  
` [`all`](../object/Pronoun.html#all)  [`aName`](../object/Pronoun.html#aName)  [`ante`](../object/Pronoun.html#ante)  [`reflexive`](../object/Pronoun.html#reflexive)  [`theName`](../object/Pronoun.html#theName)  [`theObjName`](../object/Pronoun.html#theObjName)  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` [`resolve`](#resolve)  `

Inherited from `Pronoun` :  
` [`construct`](../object/Pronoun.html#construct)  [`matchObj`](../object/Pronoun.html#matchObj)  [`setAntecedents`](../object/Pronoun.html#setAntecedents)  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="person"></span>

`person`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4764](../source/parser.t.html#4764)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="resolve"></span>

`resolve ( )`<span class="rem">OVERRIDDEN</span>

[parser.t](../file/parser.t.html)\[[4763](../source/parser.t.html#4763)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
