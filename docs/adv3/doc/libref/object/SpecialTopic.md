---
layout: docs
---
<span class="title">SpecialTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[3751](../source/actor.t.html#3751)\],
[en_us.t](../file/en_us.t.html)\[[2743](../source/en_us.t.html#2743)\]

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



A "special" topic. This is a topic that responds to its own unique,
custom command input. In other words, rather than responding to a normal
command like ASK ABOUT or SHOW TO, we'll respond to a command for which
we define our own syntax. Our special syntax doesn't have to follow any
of the ordinary parsing conventions, because whenever our ConvNode is
active, we get a shot at parsing player input before the regular parser
gets to see it.

A special topic MUST be part of a ConvNode, because these are inherently
meaningful only in context. A special topic is active only when its
conversation node is active.

Special topics are automatically Suggested Topics as well as Topic
Entries. Because special topics use their own custom grammar, it's
unreasonable to expect a player to guess at the custom grammar, so we
should always provide a topic inventory suggestion for every special
topic.

*Modified in
[en_us.t](../file/en_us.t.html)\[[2743](../source/en_us.t.html#2743)\]:*  
For SpecialTopic matches, treat some strings as "weak": if the user's
input consists of just one of these weak strings and nothing else, don't
match the topic.

`class `**`SpecialTopic`**` :   `[`TopicEntry`](../object/TopicEntry.html)[`SuggestedTopicTree`](../object/SuggestedTopicTree.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`SpecialTopic`**  
[`TopicEntry`](../object/TopicEntry.html)  
`                 object`  
[`SuggestedTopicTree`](../object/SuggestedTopicTree.html)  
[`SuggestedTopic`](../object/SuggestedTopic.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`fullName`](#fullName)[`includeInList`](#includeInList)[`keywordList`](#keywordList)[`matchPat`](#matchPat)[`name`](#name)[`timesToSuggest`](#timesToSuggest)[`weakPat`](#weakPat)

Inherited from `TopicEntry` :  
[`altTalkCount`](../object/TopicEntry.html#altTalkCount)[`altTopicList`](../object/TopicEntry.html#altTopicList)[`impliesGreeting`](../object/TopicEntry.html#impliesGreeting)[`isActive`](../object/TopicEntry.html#isActive)[`isConversational`](../object/TopicEntry.html#isConversational)[`matchObj`](../object/TopicEntry.html#matchObj)[`matchScore`](../object/TopicEntry.html#matchScore)[`talkCount`](../object/TopicEntry.html#talkCount)[`topicGroupActive`](../object/TopicEntry.html#topicGroupActive)[`topicGroupScoreAdjustment`](../object/TopicEntry.html#topicGroupScoreAdjustment)[`topicResponse`](../object/TopicEntry.html#topicResponse)



Inherited from `SuggestedTopic` :  
[`associatedTopic`](../object/SuggestedTopic.html#associatedTopic)[`curiositySatisfied`](../object/SuggestedTopic.html#curiositySatisfied)[`location`](../object/SuggestedTopic.html#location)[`suggestionGroup`](../object/SuggestedTopic.html#suggestionGroup)[`suggestTo`](../object/SuggestedTopic.html#suggestTo)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getConvNode`](#getConvNode)[`initializeSpecialTopic`](#initializeSpecialTopic)[`isMatchPossible`](#isMatchPossible)[`matchPreParse`](#matchPreParse)[`matchTopic`](#matchTopic)[`noteSuggestion`](#noteSuggestion)

Inherited from `TopicEntry` :  
[`addAltTopic`](../object/TopicEntry.html#addAltTopic)[`addSuggestedTopic`](../object/TopicEntry.html#addSuggestedTopic)[`addTopic`](../object/TopicEntry.html#addTopic)[`adjustScore`](../object/TopicEntry.html#adjustScore)[`anyAltIsActive`](../object/TopicEntry.html#anyAltIsActive)[`breakTopicTie`](../object/TopicEntry.html#breakTopicTie)[`checkIsActive`](../object/TopicEntry.html#checkIsActive)[`deferToEntry`](../object/TopicEntry.html#deferToEntry)[`getActor`](../object/TopicEntry.html#getActor)[`getTopicOwner`](../object/TopicEntry.html#getTopicOwner)[`handleTopic`](../object/TopicEntry.html#handleTopic)[`initializeTopicEntry`](../object/TopicEntry.html#initializeTopicEntry)[`noteAltInvocation`](../object/TopicEntry.html#noteAltInvocation)[`noteInvocation`](../object/TopicEntry.html#noteInvocation)[`setTopicPronouns`](../object/TopicEntry.html#setTopicPronouns)

Inherited from `SuggestedTopicTree` :  
[`associatedTopicIsActive`](../object/SuggestedTopicTree.html#associatedTopicIsActive)[`associatedTopicTalkCount`](../object/SuggestedTopicTree.html#associatedTopicTalkCount)

Inherited from `SuggestedTopic` :  
[`associatedTopicCanMatch`](../object/SuggestedTopic.html#associatedTopicCanMatch)[`findEnclosingSuggestedTopic`](../object/SuggestedTopic.html#findEnclosingSuggestedTopic)[`findOuterSuggestedTopic`](../object/SuggestedTopic.html#findOuterSuggestedTopic)[`fromEnclosingSuggestedTopic`](../object/SuggestedTopic.html#fromEnclosingSuggestedTopic)[`initializeSuggestedTopic`](../object/SuggestedTopic.html#initializeSuggestedTopic)[`isSuggestionActive`](../object/SuggestedTopic.html#isSuggestionActive)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="fullName"></span>

`fullName`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3816](../source/actor.t.html#3816)\]



our suggestion (topic inventory) full name is usually the same as the
base name; special topics usually aren't grouped in topic suggestion
listings, since each topic usually has its own unique, custom syntax



<span id="includeInList"></span>

`includeInList`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3822](../source/actor.t.html#3822)\]



include in the specialTopics list of our parent topic database



<span id="keywordList"></span>

`keywordList`

[actor.t](../file/actor.t.html)\[[3766](../source/actor.t.html#3766)\]



Our keyword list. Each special topic instance must define a list of
strings giving the keywords we match. The special topic will match user
input if the user input consists exclusively of words from this keyword
list. The user input doesn't have to include all of the words defined
here, but all of the words in the user's input have to appear here to
match.

Alternatively, an instance can specifically define its own custom
regular expression pattern instead of using the keyword list; the
regular expression allows the instance to include punctuation in the
syntax, or apply more restrictive criteria than simply matching the
keywords.



<span id="matchPat"></span>

`matchPat`

[actor.t](../file/actor.t.html)\[[3805](../source/actor.t.html#3805)\]



our regular expression pattern - we'll build this automatically from the
keyword list if this isn't otherwise defined



<span id="name"></span>

`name`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3808](../source/actor.t.html#3808)\]



our suggestion (topic inventory) base name



<span id="timesToSuggest"></span>

`timesToSuggest`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3830](../source/actor.t.html#3830)\]



By default, don't limit the number of times we'll suggest this topic.
Since a special topic is valid only in a particular ConvNode context, we
normally want all of the topics in that context to be available, even if
they've been used before.



<span id="weakPat"></span>

`weakPat`

[en_us.t](../file/en_us.t.html)\[[2762](../source/en_us.t.html#2762)\]



Our "weak" strings - 'i', 'l', 'look': these are weak because a user
typing one of these strings by itself is probably actually trying to
enter the command of the same name, rather than entering a special
topic. These come up in cases where the special topic is something like
"say I don't know" or "tell him you'll look into it".



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getConvNode"></span>

`getConvNode ( )`

[actor.t](../file/actor.t.html)\[[3900](../source/actor.t.html#3900)\]



find our enclosing ConvNode object



<span id="initializeSpecialTopic"></span>

`initializeSpecialTopic ( )`

[actor.t](../file/actor.t.html)\[[3780](../source/actor.t.html#3780)\]



Initialize the special topic. This runs during pre-initialization, to
give us a chance to do pre-game set-up.

This routine adds the topic's keywords to the global dictionary, under
the 'special' token type. Since a special topic's keywords are accepted
when the special topic is active, it would be wrong for the parser to
claim that the words are unknown when the special topic isn't active. By
adding the keywords to the dictionary, we let the parser know that
they're valid words, so that it won't claim that they're unknown.



<span id="isMatchPossible"></span>

`isMatchPossible (actor, scopeList)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3860](../source/actor.t.html#3860)\]



a special topic is always matchable, since we match on literal text



<span id="matchPreParse"></span>

`matchPreParse (str, procStr)`

[actor.t](../file/actor.t.html)\[[3867](../source/actor.t.html#3867)\],
[en_us.t](../file/en_us.t.html)\[[2744](../source/en_us.t.html#2744)\]



Match a string during pre-parsing. By default, we'll match the string if
all of its words (as defined by the regular expression parser) match our
keywords.



<span id="matchTopic"></span>

`matchTopic (fromActor, topic)`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3833](../source/actor.t.html#3833)\]



check for a match



<span id="noteSuggestion"></span>

`noteSuggestion ( )`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[3819](../source/actor.t.html#3819)\]



on being suggested, update the special topic history





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


