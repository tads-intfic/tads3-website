---
---
<span class="title">SuggestedTopicTree</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[1398](../source/actor.t.html#1398)\]

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

A suggested topic that applies to an entire AltTopic group.

Normally, a suggestion is tied to an individual TopicEntry. This means
that when a topic has several AltTopic alternatives, each AltTopic can
be its own separate, independent suggestion. A particular alternative
can be a suggestion or not, independently of the other alternatives for
the same TopicEntry. Since each AltTopic is a separate suggestion,
asking about one of the alternatives won't have any effect on the
"curiosity" about the other alternatives - in other words, the other
alternatives will be separately suggested when they become active.

In many cases, it's better for an entire set of alternatives to be
treated as a single suggested topic. That is, we want to suggest the
topic when ANY of the alternatives is active, and asking about any one
of the alternatives will satisfy the PC's curiosity for ALL of the
alternatives. This sort of arrangement is usually better for cases where
the conditions that trigger the different alternatives aren't things
that ought to make the PC think to ask the same question again.

Use this class by associating it with the \*root\* TopicEntry of the
group of alternatives. You can do this most simply by mixing this class
into the superclass list of the root TopicEntry:

  
+ AskTellTopic, SuggestedTopicTree, SuggestedAskTopic  
// ...  
; ++ AltTopic ... ; ++ AltTopic ... ;

This makes the entire group of AltTopics part of the same suggestion.
Note that you must \*also\* include SuggestedAsk, SuggestedTellTopic, or
one of the other specialized types among the superclass, to indicate
which kind of suggestion this is.

`class `**`SuggestedTopicTree`**` :   `[`SuggestedTopic`](../object/SuggestedTopic.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`SuggestedTopicTree`**  
`         `[`SuggestedTopic`](../object/SuggestedTopic.html)  
`                 object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`SuggestedTopicTree`**  
`         `[`SpecialTopic`](../object/SpecialTopic.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

Inherited from `SuggestedTopic` :  
` `[`associatedTopic`](../object/SuggestedTopic.html#associatedTopic)`  `[`curiositySatisfied`](../object/SuggestedTopic.html#curiositySatisfied)`  `[`fullName`](../object/SuggestedTopic.html#fullName)`  `[`location`](../object/SuggestedTopic.html#location)`  `[`name`](../object/SuggestedTopic.html#name)`  `[`suggestionGroup`](../object/SuggestedTopic.html#suggestionGroup)`  `[`suggestTo`](../object/SuggestedTopic.html#suggestTo)`  `[`timesToSuggest`](../object/SuggestedTopic.html#timesToSuggest)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`associatedTopicIsActive`](#associatedTopicIsActive)`  `[`associatedTopicTalkCount`](#associatedTopicTalkCount)`  `

Inherited from `SuggestedTopic` :  
` `[`associatedTopicCanMatch`](../object/SuggestedTopic.html#associatedTopicCanMatch)`  `[`findEnclosingSuggestedTopic`](../object/SuggestedTopic.html#findEnclosingSuggestedTopic)`  `[`findOuterSuggestedTopic`](../object/SuggestedTopic.html#findOuterSuggestedTopic)`  `[`fromEnclosingSuggestedTopic`](../object/SuggestedTopic.html#fromEnclosingSuggestedTopic)`  `[`initializeSuggestedTopic`](../object/SuggestedTopic.html#initializeSuggestedTopic)`  `[`isSuggestionActive`](../object/SuggestedTopic.html#isSuggestionActive)`  `[`noteSuggestion`](../object/SuggestedTopic.html#noteSuggestion)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="associatedTopicIsActive"></span>

`associatedTopicIsActive ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[1400](../source/actor.t.html#1400)\]

<div class="desc">

is the associated topic active?

</div>

<span id="associatedTopicTalkCount"></span>

`associatedTopicTalkCount ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[1407](../source/actor.t.html#1407)\]

<div class="desc">

get the number of previous invocations of the associated topic

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
