---
layout: docs
---
<span class="title">MessageCtx</span><span class="type">class</span>

[messages.t](../file/messages.t.html)\[[433](../source/messages.t.html#433)\]

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



Message expansion sentence context. This keeps track of the parts of the
sentence we've seen so far in the substitution parameters.

The sentence context is important for expanding certain items. For
verbs, it tells us which object is the subject, so that we can generate
the agreeing conjugation of the verb (in number and grammatical person).
For direct and indirect objects, it lets us generate a reflexive when
the same object appears in a second role ("You can't put the box in
itself").

`class `**`MessageCtx`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`MessageCtx`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



` [`args`](#args)  [`cmd`](#cmd)  [`gotVerb`](#gotVerb)  [`lastParam`](#lastParam)  [`prescan`](#prescan)  [`reflexiveAnte`](#reflexiveAnte)  [`subj`](#subj)  [`vobj`](#vobj)  `

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



` [`actorIsPC`](#actorIsPC)  [`construct`](#construct)  [`endPreScan`](#endPreScan)  [`lastParamPlural`](#lastParamPlural)  [`noteObj`](#noteObj)  [`noteParam`](#noteParam)  [`noteVerb`](#noteVerb)  [`paramToNum`](#paramToNum)  [`paramToString`](#paramToString)  [`startSentence`](#startSentence)  `

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="args"></span>

`args`

[messages.t](../file/messages.t.html)\[[756](../source/messages.t.html#756)\]



the message argument list



<span id="cmd"></span>

`cmd`

[messages.t](../file/messages.t.html)\[[759](../source/messages.t.html#759)\]



the Command object among the arguments, if any



<span id="gotVerb"></span>

`gotVerb`

[messages.t](../file/messages.t.html)\[[753](../source/messages.t.html#753)\]



have we seen a verb parameter in this sentence yet?



<span id="lastParam"></span>

`lastParam`

[messages.t](../file/messages.t.html)\[[741](../source/messages.t.html#741)\]



the last parameter value



<span id="prescan"></span>

`prescan`

[messages.t](../file/messages.t.html)\[[744](../source/messages.t.html#744)\]



are we on the initial pre-expansion scan?



<span id="reflexiveAnte"></span>

`reflexiveAnte`

[messages.t](../file/messages.t.html)\[[772](../source/messages.t.html#772)\]



The reflexive antecedents. Each time we see an object in a non-subject
role, and the object has different pronoun usage from any previous
entry, we'll add it to this list. If we see the same object subsequently
in another non-subject role, we'll know that we should generate a
reflexive pronoun for the object rather than the name or a regular
pronoun:

You can't put the tongs in the box with the tongs -\> with themselves



<span id="subj"></span>

`subj`

[messages.t](../file/messages.t.html)\[[747](../source/messages.t.html#747)\]



the subject of the sentence (as a Mentionable object)



<span id="vobj"></span>

`vobj`

[messages.t](../file/messages.t.html)\[[750](../source/messages.t.html#750)\]



the last object of the verb we saw



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="actorIsPC"></span>

`actorIsPC ( )`

[messages.t](../file/messages.t.html)\[[734](../source/messages.t.html#734)\]



Is the actor involved in the Command the PC? If there's a Command with
an actor, we check to see if it's the PC. If there's no Command or no
actor, we assume that the PC is the relevant actor (since there's
nothing else specified anywhere) and return true.



<span id="construct"></span>

`construct (args)`

[messages.t](../file/messages.t.html)\[[434](../source/messages.t.html#434)\]



*no description available*



<span id="endPreScan"></span>

`endPreScan ( )`

[messages.t](../file/messages.t.html)\[[472](../source/messages.t.html#472)\]



End the pre-expansion scan. The expander makes two passes over each
sentence. The first scan doesn't actually do any substitutions, but
merely invokes each parameter to give it a chance to exert its side
effects on the sentence context. The second scan actually applies the
substitutions. At the end of the first pass, the expander calls this to
let us finalize the initial scan and prepare for the second scan.



<span id="lastParamPlural"></span>

`lastParamPlural ( )`

[messages.t](../file/messages.t.html)\[[703](../source/messages.t.html#703)\]



Was the last parameter value plural? If the value is numeric, 1 is
singular and anything else is plural. If it's a list, a one-element list
is singular and anything else is plural. If it's a Mentionable, the
'plural' property determines it.



<span id="noteObj"></span>

`noteObj (obj, role)`

[messages.t](../file/messages.t.html)\[[580](../source/messages.t.html#580)\]



Note an object being used as a parameter in the given sentence role. The
role is one of the noun role enums defined above: vSubject, vObject, or
vAmbig. If the object is a subject, we'll save it as the sentence
subject, so that we can generate an agreeing verb. Regardless of role,
we'll also save it as a reflexive antecedent, so that we can generate a
reflexive pronoun if we see the same object again in another role in the
same sentence.



<span id="noteParam"></span>

`noteParam (val)`

[messages.t](../file/messages.t.html)\[[494](../source/messages.t.html#494)\]



Note a parameter value. Some parameters refer back to the immediately
preceding parameter, so it's useful to have the most recent value
stashed away. Returns the parameter value as given.



<span id="noteVerb"></span>

`noteVerb ( )`

[messages.t](../file/messages.t.html)\[[691](../source/messages.t.html#691)\]



Note a verb parameter.



<span id="paramToNum"></span>

`paramToNum (val)`

[messages.t](../file/messages.t.html)\[[542](../source/messages.t.html#542)\]



Convert a parameter value to a numeric representation. If the value is
an integer or BigNumber, we return it as is; if a list or vector, we
return the number of elements; if nil, 0; if a string, the parsed
numeric value of the string; otherwise we simply return 1.



<span id="paramToString"></span>

`paramToString (val)`

[messages.t](../file/messages.t.html)\[[504](../source/messages.t.html#504)\]



Convert a parameter value to a string representation suitable for
message substitution.



<span id="startSentence"></span>

`startSentence ( )`

[messages.t](../file/messages.t.html)\[[448](../source/messages.t.html#448)\]



start a new sentence
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


