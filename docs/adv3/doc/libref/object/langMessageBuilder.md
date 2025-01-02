---
layout: docs
---
<span class="title">langMessageBuilder</span><span class="type">object</span>

[en_us.t](../file/en_us.t.html)\[[3758](../source/en_us.t.html#3758)\]

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

The English-specific message builder.

**`langMessageBuilder`**` :   `[`MessageBuilder`](../object/MessageBuilder.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`langMessageBuilder`**  
`         `[`MessageBuilder`](../object/MessageBuilder.html)  
`                 `[`OutputFilter`](../object/OutputFilter.html)  
`                         object`  
`                 `[`PreinitObject`](../object/PreinitObject.html)  
`                         `[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`fixedTenseProp_`](#fixedTenseProp_)`  `[`lastSubject_`](#lastSubject_)`  `[`lastSubjectName_`](#lastSubjectName_)`  `[`paramList_`](#paramList_)`  `[`pastEnding_`](#pastEnding_)`  `[`patEndOfSentence`](#patEndOfSentence)`  `[`patIdObjApostS`](#patIdObjApostS)`  `[`patIdObjSlashIdApostS`](#patIdObjSlashIdApostS)`  `[`patParamWithExclam`](#patParamWithExclam)`  `[`patSpecial`](#patSpecial)`  `[`patSSlashLetterEd`](#patSSlashLetterEd)`  `[`patTenseSwitching`](#patTenseSwitching)`  `

Inherited from `MessageBuilder` :  
` `[`lastParamObj_`](../object/MessageBuilder.html#lastParamObj_)`  `[`lastTargetObj_`](../object/MessageBuilder.html#lastTargetObj_)`  `[`nameTable_`](../object/MessageBuilder.html#nameTable_)`  `[`paramTable_`](../object/MessageBuilder.html#paramTable_)`  `[`patAllCaps`](../object/MessageBuilder.html#patAllCaps)`  `[`patIdObj`](../object/MessageBuilder.html#patIdObj)`  `[`patIdObjSlashId`](../object/MessageBuilder.html#patIdObjSlashId)`  `[`patIdSlash`](../object/MessageBuilder.html#patIdSlash)`  `[`patUpper`](../object/MessageBuilder.html#patUpper)`  `

` `

` `

Inherited from `ModuleExecObject` :  
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`generateMessage`](#generateMessage)`  `[`getTargetProp`](#getTargetProp)`  `[`langRewriteParam`](#langRewriteParam)`  `[`processOrig`](#processOrig)`  `[`processResult`](#processResult)`  `

Inherited from `MessageBuilder` :  
` `[`execute`](../object/MessageBuilder.html#execute)`  `[`filterText`](../object/MessageBuilder.html#filterText)`  `[`genLiteral`](../object/MessageBuilder.html#genLiteral)`  `[`quoteMessage`](../object/MessageBuilder.html#quoteMessage)`  `

` `

` `

Inherited from `ModuleExecObject` :  
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="fixedTenseProp_"></span>

`fixedTenseProp_`

[en_us.t](../file/en_us.t.html)\[[4249](../source/en_us.t.html#4249)\]

<div class="desc">

This property is used to temporarily store either a boolean value
indicating whether the last encountered parameter string had an
exclamation mark at the end of any word, or a property to be invoked by
Thing.propWithPresentMessageBuilder\_. This field is for internal use
only; authors shouldn't have any reason to access it directly.

</div>

<span id="lastSubject_"></span>

`lastSubject_`

[en_us.t](../file/en_us.t.html)\[[4053](../source/en_us.t.html#4053)\]

<div class="desc">

The most recent target object used in the nominative case. We note this
so that we can supply reflexive mappings when the same object is re-used
in the objective case. This allows us to map things like "you can't take
you" to the better-sounding "you can't take yourself".

</div>

<span id="lastSubjectName_"></span>

`lastSubjectName_`

[en_us.t](../file/en_us.t.html)\[[4056](../source/en_us.t.html#4056)\]

<div class="desc">

the parameter name of the last subject ('dobj', 'actor', etc)

</div>

<span id="paramList_"></span>

`paramList_`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[3777](../source/en_us.t.html#3777)\]

<div class="desc">

The English message substitution parameter table.

Note that we specify two additional elements for each table entry beyond
the standard language-independent complement:

info\[4\] = reflexive property - this is the property to invoke when the
parameter is used reflexively (in other words, its target object is the
same as the most recent target object used in the nominative case). If
this is nil, the parameter has no reflexive form.

info\[5\] = true if this is a nominative usage, nil if not. We use this
to determine which target objects are used in the nominative case, so
that we can remember those objects for subsequent reflexive usages.

</div>

<span id="pastEnding_"></span>

`pastEnding_`

[en_us.t](../file/en_us.t.html)\[[4239](../source/en_us.t.html#4239)\]

<div class="desc">

This property is used to temporarily store the past-tense ending of a
verb to be displayed by Thing.verbEndingSMessageBuilder\_. It's for
internal use only; game authors shouldn't have any reason to access it
directly.

</div>

<span id="patEndOfSentence"></span>

`patEndOfSentence`

[en_us.t](../file/en_us.t.html)\[[4125](../source/en_us.t.html#4125)\]

<div class="desc">

end-of-sentence match pattern

</div>

<span id="patIdObjApostS"></span>

`patIdObjApostS`

[en_us.t](../file/en_us.t.html)\[[4159](../source/en_us.t.html#4159)\]

<div class="desc">

*no description available*

</div>

<span id="patIdObjSlashIdApostS"></span>

`patIdObjSlashIdApostS`

[en_us.t](../file/en_us.t.html)\[[4157](../source/en_us.t.html#4157)\]

<div class="desc">

some pre-compiled search patterns we use a lot

</div>

<span id="patParamWithExclam"></span>

`patParamWithExclam`

[en_us.t](../file/en_us.t.html)\[[4161](../source/en_us.t.html#4161)\]

<div class="desc">

*no description available*

</div>

<span id="patSpecial"></span>

`patSpecial`

[en_us.t](../file/en_us.t.html)\[[4027](../source/en_us.t.html#4027)\]

<div class="desc">

Pre-compiled regular expression pattern matching any sequence with a
special meaning in a message string.

We match either a stuttered opening brace, or a single opening brace
followed by any sequence of characters that doesn't contain a closing
brace followed by a closing brace.

</div>

<span id="patSSlashLetterEd"></span>

`patSSlashLetterEd`

[en_us.t](../file/en_us.t.html)\[[4162](../source/en_us.t.html#4162)\]

<div class="desc">

*no description available*

</div>

<span id="patTenseSwitching"></span>

`patTenseSwitching`

[en_us.t](../file/en_us.t.html)\[[4040](../source/en_us.t.html#4040)\]

<div class="desc">

Pre-compiled regular expression pattern matching our special
tense-switching syntax.

We match a single opening brace, followed by any sequence of characters
that doesn't contain a closing brace or a vertical bar, followed by a
vertical bar, followed by any sequence of characters that doesn't
contain a closing brace or a vertical bar, followed by a closing brace.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="generateMessage"></span>

`generateMessage (orig)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[3912](../source/en_us.t.html#3912)\]

<div class="desc">

Add a hook to the generateMessage method, which we use to pre-process
the source string before expanding the substitution parameters.

</div>

<span id="getTargetProp"></span>

`getTargetProp (targetObj, paramObj, info)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[4069](../source/en_us.t.html#4069)\]

<div class="desc">

Get the target object property mapping. If the target object is the same
as the most recent subject object (i.e., the last object used in the
nominative case), and this parameter has a reflexive form property,
we'll return the reflexive form property. Otherwise, we'll return the
standard property mapping.

Also, if there was an exclamation mark at the end of any word in the
tag, we'll return a property returning a fixed-tense form of the
property for the tag.

</div>

<span id="langRewriteParam"></span>

`langRewriteParam (paramStr)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[4184](../source/en_us.t.html#4184)\]

<div class="desc">

Rewrite a parameter string for a language-specific syntax extension.

For English, we'll handle the possessive apostrophe-s suffix specially,
by allowing the apostrophe-s to be appended to the target object name.
If we find an apostrophe-s on the target object name, we'll move it to
the preceding identifier name:

the dobj's -\> the's dobj  
the dobj's/he -\> the's dobj/he  
he/the dobj's -\> he/the's dobj

We also use this method to check for the presence of an exclamation mark
at the end of any word in the parameter string (triggering the
fixed-tense handling), and to detect a parameter string matching the
{s/?ed} syntax, where ? is any letter, and rewrite it literally as
's/?ed' literally.

</div>

<span id="processOrig"></span>

`processOrig (str)`

[en_us.t](../file/en_us.t.html)\[[3941](../source/en_us.t.html#3941)\]

<div class="desc">

Pre-process a source string containing substitution parameters, before
generating the expanded message from it.

We use this hook to implement the special tense-switching syntax
{\<present\>\|\<past\>}. Although it superficially looks like an
ordinary substitution parameter, we actually can't use the normal
parameter substitution framework for that, because we want to allow the
\<present\> and \<past\> substrings themselves to contain substitution
parameters, and the normal framework doesn't allow for recursive
substitution.

We simply replace every sequence of the form {\<present\>\|\<past\>}
with either \<present\> or \<past\>, depending on the current narrative
tense. We then substitute braces for square brackets in the resulting
string. This allows treating every bracketed tag inside the
tense-switching sequence as a regular substitution parameter.

For example, the sequence "{take\[s\]\|took}" appearing in the message
string would be replaced with "take{s}" if the current narrative tense
is present, and would be replaced with "took" if the current narrative
tense is past. The string "take{s}", if selected, would in turn be
expanded to either "take" or "takes", depending on the grammatical
person of the subject, as per the regular substitution mechanism.

</div>

<span id="processResult"></span>

`processResult (txt)`<span class="rem">OVERRIDDEN</span>

[en_us.t](../file/en_us.t.html)\[[4130](../source/en_us.t.html#4130)\]

<div class="desc">

Process result text.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
