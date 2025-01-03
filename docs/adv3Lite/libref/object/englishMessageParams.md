---
layout: docs
---
<span class="title">englishMessageParams</span><span class="type">object</span>

[english.t](../file/english.t.html)\[[4175](../source/english.t.html#4175)\]

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



The message parameters object. The language module must provide one
instance of MessageParams, to fill in the language-specific list of
parameter names and expansion functions.

\[Required\]

**`englishMessageParams`**` :   `[`MessageParams`](../object/MessageParams.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`englishMessageParams`**  
[`MessageParams`](../object/MessageParams.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`params`](#params) [`sentenceOrder`](#sentenceOrder) [`sLetters`](#sLetters) [`verbTab`](#verbTab)

Inherited from `MessageParams` :  
[`langObj`](../object/MessageParams.html#langObj) [`paramTab`](../object/MessageParams.html#paramTab)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`awkwardEnding`](#awkwardEnding) [`cmdInfoReflexive`](#cmdInfoReflexive) [`construct`](#construct)

Inherited from `MessageParams` :  
[`cmdInfo`](../object/MessageParams.html#cmdInfo) [`expand`](../object/MessageParams.html#expand) [`findStrParam`](../object/MessageParams.html#findStrParam)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="params"></span>

`params`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[4202](../source/english.t.html#4202)\]



The English parameter mappings. The base library doesn't use any of
these directly, so parameter names and mappings are entirely up to the
language module. The only part of the library that uses the parameters
is the library message strings, which are all defined by the language
module itself. Other translations are free to use different parameter
names, and don't have to replicate 1-for-1 the parameters defined for
English. Translations only have to define the parameters needed for
their own library messages (plus any others they want to provide for use
by game authors, of course).

\[Required\]



<span id="sentenceOrder"></span>

`sentenceOrder`

[english.t](../file/english.t.html)\[[4186](../source/english.t.html#4186)\]



The language's general sentence order. This should be a string
containing the letters S, V, and O in the appropriate order for the
language. S is for Subject, V is for Verb, and O is for Object. For
example, English is an SVO language, since the general order of an
English sentence is Subject Verb Object.

This can be left nil for languages with no prevailing sentence order.



<span id="sLetters"></span>

`sLetters`

[english.t](../file/english.t.html)\[[4649](../source/english.t.html#4649)\]



Word-ending letter combinations that are awkward to follow with a
contracted verb such a 've.



<span id="verbTab"></span>

`verbTab`

[english.t](../file/english.t.html)\[[4643](../source/english.t.html#4643)\]



verb table - we build this at preinit from the verb parameters



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="awkwardEnding"></span>

`awkwardEnding (nam)`

[english.t](../file/english.t.html)\[[4655](../source/english.t.html#4655)\]



Does nam end with one of the letter combinations in sLetters, in which
case it's awkward to follow it with a contraction.



<span id="cmdInfoReflexive"></span>

`cmdInfoReflexive (ctx, srcObj, objProp)`

[english.t](../file/english.t.html)\[[4571](../source/english.t.html#4571)\]



Check for reflexives in cmdInfo. This is called when we see a noun
phrase being used as an object of the verb (i.e., in a role other than
as the subject of the verb). If appropriate, we can return a reflexive
pronoun instead of the noun we'd normally generate. If no reflexive is
required, we return nil, and the caller will use the normal noun or
pronoun instead.



<span id="construct"></span>

`construct ( )`<span class="rem">OVERRIDDEN</span>

[english.t](../file/english.t.html)\[[4593](../source/english.t.html#4593)\]



On construction, fill in the verb parameters from CustomVocab objects.
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


