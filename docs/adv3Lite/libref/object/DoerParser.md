---
layout: docs
---
<span class="title">DoerParser</span><span class="type">class</span>

[doer.t](../file/doer.t.html)\[[827](../source/doer.t.html#827)\]

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



A DoerParser is a helper object we use during initialization for parsing
Doer 'cmd' strings and turning them into action description lists. The
language-specific library creates these for us based on the language
grammar.

These objects are only used during initialization, since they're only
needed to set up the internal representation of a Doer command template
string. During normal play we only need that internal representation.

`class `**`DoerParser`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`DoerParser`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`action_`](#action_) [`pat_`](#pat_) [`roles_`](#roles_) [`verb_`](#verb_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="action_"></span>

`action_`

[doer.t](../file/doer.t.html)\[[842](../source/doer.t.html#842)\]



The Action object for the verb.



<span id="pat_"></span>

`pat_`

[doer.t](../file/doer.t.html)\[[862](../source/doer.t.html#862)\]



The regular expression for the verb rule. The verb initializer sets this
up to contain the literal text of the verb rule's literal tokens, and to
substitute a parenthesized group wildcard pattern for each noun slot.
For example, for English, a Give To rule might look like 'give (.+) to
(.+)'.



<span id="roles_"></span>

`roles_`

[doer.t](../file/doer.t.html)\[[871](../source/doer.t.html#871)\]



The list of object roles. This is a list of NounRole objects. The list
entries correspond positionally to the parenthesized groups in the
regular expression string, so roles\_\[1\] is the noun role for the
first parenthesized group, roles\_\[2\] is the noun role for the second
group, and so on.



<span id="verb_"></span>

`verb_`

[doer.t](../file/doer.t.html)\[[853](../source/doer.t.html#853)\]



The main verb word. This is simply the first word of the verb's token
list. This is essentially a hash, to reduce the number of regular
expressions we have to test individually. This saves us a lot of compute
time, since it's very quick to pull out the first word and get a list of
the small set of rules with the same first word. We then test each of
those potential matches by doing the full regular expression comparison.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (action, v, pat, roles)`

[doer.t](../file/doer.t.html)\[[833](../source/doer.t.html#833)\]



Construction. The language library should create one of these objects
for each verb phrasing it wants to define for use in writing Doer 'cmd'
strings.
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


