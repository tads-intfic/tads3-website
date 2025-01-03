---
layout: docs
---
<span class="title">ResolvedTopic</span><span class="type">class</span>

[action.t](../file/action.t.html)\[[6117](../source/action.t.html#6117)\]

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



Resolved Topic object. The topic of a TopicTAction always resolves to
one of these objects.

`class `**`ResolvedTopic`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`ResolvedTopic`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`resolvedTopicNothing`](../object/resolvedTopicNothing.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`canMatchLiterally`](#canMatchLiterally) [`inScopeList`](#inScopeList) [`likelyList`](#likelyList) [`otherList`](#otherList) [`resInfoTab`](#resInfoTab) [`topicProd`](#topicProd)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`canMatchObject`](#canMatchObject) [`construct`](#construct) [`getBestMatch`](#getBestMatch) [`getResolveInfo`](#getResolveInfo) [`getTopicText`](#getTopicText) [`getTopicTokens`](#getTopicTokens) [`getTopicWords`](#getTopicWords) [`wrapActionObject`](#wrapActionObject) [`wrapObject`](#wrapObject)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="canMatchLiterally"></span>

`canMatchLiterally`

[action.t](../file/action.t.html)\[[6260](../source/action.t.html#6260)\]



Are we allowed to match the topic text literally, for parsing purposes?
If this is true, it means that we can match the literal text the player
entered against strings, regular expressions, etc.; for example, we can
match a TopicMatchTopic's matchPattern regular expression. If this is
nil, it means that we can only interpret the meaning of the resolved
topic by looking at the various topic match lists (inScopeList,
likelyList, otherList).

By default, we simply return true. Note that the base library never has
any reason of its own to disallow literal matching of topic text; this
property is purely for the use of language modules, to handle
language-specific input that parses at a high level as a topic phrase
but which has some idiomatic or grammatical function that makes it in
appropriate to try to extract the meaning of the resolved topic from the
literal text of the topic phrase in isolation. This case doesn't seem to
arise in English, but does occur in other languages: Michel Nizette
cites "parlez-en a Bob" as an example in French, where "en" is
essentially a particle modifying the verb, not a full-fledged phrase
that we can interpret separately as a topic.



<span id="inScopeList"></span>

`inScopeList`

[action.t](../file/action.t.html)\[[6291](../source/action.t.html#6291)\]



Our lists of resolved objects matching the topic phrase, separated by
classification.



<span id="likelyList"></span>

`likelyList`

[action.t](../file/action.t.html)\[[6292](../source/action.t.html#6292)\]



*no description available*



<span id="otherList"></span>

`otherList`

[action.t](../file/action.t.html)\[[6293](../source/action.t.html#6293)\]



*no description available*



<span id="resInfoTab"></span>

`resInfoTab`

[action.t](../file/action.t.html)\[[6310](../source/action.t.html#6310)\]



ResolveInfo table for the resolved objects. This is a lookup table
indexed by simulation object. Each entry in the resolved object lists
(inScopeList, etc) has have a key in this table, with the ResolveInfo
object as the value for the key. This can be used to recover the
ResolveInfo object describing the parser results for this object.



<span id="topicProd"></span>

`topicProd`

[action.t](../file/action.t.html)\[[6300](../source/action.t.html#6300)\]



The production match tree object that matched the topic phrase in the
command. This can be used to obtain the original tokens of the command
or the original text of the phrase.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="canMatchObject"></span>

`canMatchObject (obj)`

[action.t](../file/action.t.html)\[[6228](../source/action.t.html#6228)\]



Is the given object among the possible matches for the topic?



<span id="construct"></span>

`construct (inScope, likely, others, prod)`

[action.t](../file/action.t.html)\[[6118](../source/action.t.html#6118)\]



*no description available*



<span id="getBestMatch"></span>

`getBestMatch ( )`

[action.t](../file/action.t.html)\[[6204](../source/action.t.html#6204)\]



Get the best object match to the topic. This is a default implementation
that can be changed by game authors or library extensions to implement
different topic-matching strategies. This implementation simply picks an
object arbitrarily from the "strongest" of the three lists we build: if
there's anything in the inScopeList, we choose an object from that list;
otherwise, if there's anything in the likelyList, we choose an object
from that list; otherwise we choose an object from the otherList.



<span id="getResolveInfo"></span>

`getResolveInfo (obj)`

[action.t](../file/action.t.html)\[[6285](../source/action.t.html#6285)\]



Get the parser ResolveInfo object for a given matched object. This
recovers the ResolveInfo describing the parsing result for any object in
the resolved object lists (inScopeList, etc).



<span id="getTopicText"></span>

`getTopicText ( )`

[action.t](../file/action.t.html)\[[6236](../source/action.t.html#6236)\]



get the original text of the topic phrase



<span id="getTopicTokens"></span>

`getTopicTokens ( )`

[action.t](../file/action.t.html)\[[6266](../source/action.t.html#6266)\]



get the original tokens of the topic phrase, in canonical tokenizer
format



<span id="getTopicWords"></span>

`getTopicWords ( )`

[action.t](../file/action.t.html)\[[6274](../source/action.t.html#6274)\]



get the original word strings of the topic phrase - this is simply a
list of the original word strings (in their original case), without any
of the extra information of the more complicated canonical tokenizer
format



<span id="wrapActionObject"></span>

`wrapActionObject (role)`

[action.t](../file/action.t.html)\[[6159](../source/action.t.html#6159)\]



Static method: create a ResolvedTopic to represent an object that's
already been resolved to a game object for the current action. 'role' is
the object role to wrap (DirectObject, IndirectObject, etc).



<span id="wrapObject"></span>

`wrapObject (obj)`

[action.t](../file/action.t.html)\[[6180](../source/action.t.html#6180)\]



Static method: create a ResolvedTopic to represent the given object.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


