[MessageCtx]{.title}[class]{.type}

[messages.t](../file/messages.t.html)\[[433](../source/messages.t.html#433)\]

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
Message expansion sentence context. This keeps track of the parts of the
sentence we\'ve seen so far in the substitution parameters.

The sentence context is important for expanding certain items. For
verbs, it tells us which object is the subject, so that we can generate
the agreeing conjugation of the verb (in number and grammatical person).
For direct and indirect objects, it lets us generate a reflexive when
the same object appears in a second role (\"You can\'t put the box in
itself\").

`class `**`MessageCtx`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`MessageCtx`**\
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

` `[`args`](#args)`  `[`cmd`](#cmd)`  `[`gotVerb`](#gotVerb)`  `[`lastParam`](#lastParam)`  `[`prescan`](#prescan)`  `[`reflexiveAnte`](#reflexiveAnte)`  `[`subj`](#subj)`  `[`vobj`](#vobj)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`actorIsPC`](#actorIsPC)`  `[`construct`](#construct)`  `[`endPreScan`](#endPreScan)`  `[`lastParamPlural`](#lastParamPlural)`  `[`noteObj`](#noteObj)`  `[`noteParam`](#noteParam)`  `[`noteVerb`](#noteVerb)`  `[`paramToNum`](#paramToNum)`  `[`paramToString`](#paramToString)`  `[`startSentence`](#startSentence)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#args}

`args`

[messages.t](../file/messages.t.html)\[[756](../source/messages.t.html#756)\]

::: desc
the message argument list
:::

[]{#cmd}

`cmd`

[messages.t](../file/messages.t.html)\[[759](../source/messages.t.html#759)\]

::: desc
the Command object among the arguments, if any
:::

[]{#gotVerb}

`gotVerb`

[messages.t](../file/messages.t.html)\[[753](../source/messages.t.html#753)\]

::: desc
have we seen a verb parameter in this sentence yet?
:::

[]{#lastParam}

`lastParam`

[messages.t](../file/messages.t.html)\[[741](../source/messages.t.html#741)\]

::: desc
the last parameter value
:::

[]{#prescan}

`prescan`

[messages.t](../file/messages.t.html)\[[744](../source/messages.t.html#744)\]

::: desc
are we on the initial pre-expansion scan?
:::

[]{#reflexiveAnte}

`reflexiveAnte`

[messages.t](../file/messages.t.html)\[[772](../source/messages.t.html#772)\]

::: desc
The reflexive antecedents. Each time we see an object in a non-subject
role, and the object has different pronoun usage from any previous
entry, we\'ll add it to this list. If we see the same object
subsequently in another non-subject role, we\'ll know that we should
generate a reflexive pronoun for the object rather than the name or a
regular pronoun:

You can\'t put the tongs in the box with the tongs -\> with themselves
:::

[]{#subj}

`subj`

[messages.t](../file/messages.t.html)\[[747](../source/messages.t.html#747)\]

::: desc
the subject of the sentence (as a Mentionable object)
:::

[]{#vobj}

`vobj`

[messages.t](../file/messages.t.html)\[[750](../source/messages.t.html#750)\]

::: desc
the last object of the verb we saw
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#actorIsPC}

`actorIsPC ( )`

[messages.t](../file/messages.t.html)\[[734](../source/messages.t.html#734)\]

::: desc
Is the actor involved in the Command the PC? If there\'s a Command with
an actor, we check to see if it\'s the PC. If there\'s no Command or no
actor, we assume that the PC is the relevant actor (since there\'s
nothing else specified anywhere) and return true.
:::

[]{#construct}

`construct (args)`

[messages.t](../file/messages.t.html)\[[434](../source/messages.t.html#434)\]

::: desc
*no description available*
:::

[]{#endPreScan}

`endPreScan ( )`

[messages.t](../file/messages.t.html)\[[472](../source/messages.t.html#472)\]

::: desc
End the pre-expansion scan. The expander makes two passes over each
sentence. The first scan doesn\'t actually do any substitutions, but
merely invokes each parameter to give it a chance to exert its side
effects on the sentence context. The second scan actually applies the
substitutions. At the end of the first pass, the expander calls this to
let us finalize the initial scan and prepare for the second scan.
:::

[]{#lastParamPlural}

`lastParamPlural ( )`

[messages.t](../file/messages.t.html)\[[703](../source/messages.t.html#703)\]

::: desc
Was the last parameter value plural? If the value is numeric, 1 is
singular and anything else is plural. If it\'s a list, a one-element
list is singular and anything else is plural. If it\'s a Mentionable,
the \'plural\' property determines it.
:::

[]{#noteObj}

`noteObj (obj, role)`

[messages.t](../file/messages.t.html)\[[580](../source/messages.t.html#580)\]

::: desc
Note an object being used as a parameter in the given sentence role. The
role is one of the noun role enums defined above: vSubject, vObject, or
vAmbig. If the object is a subject, we\'ll save it as the sentence
subject, so that we can generate an agreeing verb. Regardless of role,
we\'ll also save it as a reflexive antecedent, so that we can generate a
reflexive pronoun if we see the same object again in another role in the
same sentence.
:::

[]{#noteParam}

`noteParam (val)`

[messages.t](../file/messages.t.html)\[[494](../source/messages.t.html#494)\]

::: desc
Note a parameter value. Some parameters refer back to the immediately
preceding parameter, so it\'s useful to have the most recent value
stashed away. Returns the parameter value as given.
:::

[]{#noteVerb}

`noteVerb ( )`

[messages.t](../file/messages.t.html)\[[691](../source/messages.t.html#691)\]

::: desc
Note a verb parameter.
:::

[]{#paramToNum}

`paramToNum (val)`

[messages.t](../file/messages.t.html)\[[542](../source/messages.t.html#542)\]

::: desc
Convert a parameter value to a numeric representation. If the value is
an integer or BigNumber, we return it as is; if a list or vector, we
return the number of elements; if nil, 0; if a string, the parsed
numeric value of the string; otherwise we simply return 1.
:::

[]{#paramToString}

`paramToString (val)`

[messages.t](../file/messages.t.html)\[[504](../source/messages.t.html#504)\]

::: desc
Convert a parameter value to a string representation suitable for
message substitution.
:::

[]{#startSentence}

`startSentence ( )`

[messages.t](../file/messages.t.html)\[[448](../source/messages.t.html#448)\]

::: desc
start a new sentence
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
