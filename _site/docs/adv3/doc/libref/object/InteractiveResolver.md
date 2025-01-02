<span class="title">InteractiveResolver</span><span class="type">class</span>

[disambig.t](../file/disambig.t.html)\[[335](../source/disambig.t.html#335)\],
[en_us.t](../file/en_us.t.html)\[[3356](../source/en_us.t.html#3356)\]

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

Base class for resolvers used when answering interactive questions. This
class doesn't do anything in the library directly, but it provides a
structured point for language extensions to hook in as needed with
'modify'.

*Modified in
[en_us.t](../file/en_us.t.html)\[[3356](../source/en_us.t.html#3356)\]:*  
Custom interactive resolver. This is used for responses to
disambiguation questions and prompts for missing noun phrases.

`class `**`InteractiveResolver`**` :   `[`ProxyResolver`](../object/ProxyResolver.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`InteractiveResolver`**  
`         `[`ProxyResolver`](../object/ProxyResolver.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`InteractiveResolver`**  
`         `[`DisambigResolver`](../object/DisambigResolver.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`getReflexiveBinding`](#getReflexiveBinding)`  `[`resolvePronounAntecedent`](#resolvePronounAntecedent)`  `[`resolvePronounAsTargetActor`](#resolvePronounAsTargetActor)`  `

Inherited from `ProxyResolver` :  
` `[`construct`](../object/ProxyResolver.html#construct)`  `[`getPossessiveResolver`](../object/ProxyResolver.html#getPossessiveResolver)`  `[`propNotDefined`](../object/ProxyResolver.html#propNotDefined)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="getReflexiveBinding"></span>

`getReflexiveBinding (typ)`

[en_us.t](../file/en_us.t.html)\[[3396](../source/en_us.t.html#3396)\]

<div class="desc">

Get the reflexive third-person pronoun binding (himself, herself,
itself, themselves). If the target actor isn't the PC, and the gender of
the pronoun matches, we'll consider this as referring to the target
actor. This allows exchanges of this form:

  
\>bob, examine  
What do you want Bob to examine? \*.  
\>himself

</div>

<span id="resolvePronounAntecedent"></span>

`resolvePronounAntecedent (typ, np, results, poss)`

[en_us.t](../file/en_us.t.html)\[[3373](../source/en_us.t.html#3373)\]

<div class="desc">

Resolve a pronoun antecedent. We'll resolve a third-person singular
pronoun to the target actor if the target actor matches in gender, and
the target actor isn't the PC. This allows exchanges like this:

  
\>bob, examine  
What do you want Bob to look at? \*.  
\>his book

In the above exchange, we'll treat "his" as referring to Bob, the target
actor of the action, because we have referred to Bob in the partial
command (the "BOB, EXAMINE") that triggered the interactive question.

</div>

<span id="resolvePronounAsTargetActor"></span>

`resolvePronounAsTargetActor (typ)`

[en_us.t](../file/en_us.t.html)\[[3414](../source/en_us.t.html#3414)\]

<div class="desc">

Try matching the given pronoun type to the target actor. If it matches
in gender, and the target actor isn't the PC, we'll return a resolve
list consisting of the target actor. If we don't have a match, we'll
return nil.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>