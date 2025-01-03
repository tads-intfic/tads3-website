---
layout: docs
---
<span class="title">AskTellTopic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[2989](../source/actor.t.html#2989)\]

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



A dual ASK/TELL topic database entry. This type of topic is included in
both the ASK ABOUT and TELL ABOUT lists.

Many authors have chosen to treat ASK and TELL as equivalent, or at
least, equivalent for most topics. Since these verbs only very weakly
suggest what the player character is actually saying, it's frequently
the case that a given topic response makes just as much sense coming
from TELL as from ASK, or vice versa. In these cases, it's best to enter
the topic under both ASK and TELL; which one the player tries might
simply depend on the player's frame of mind, and they might feel cheated
if one works and the other doesn't in cases where both are equally
valid.

`class `**`AskTellTopic`**` :   `[`TopicMatchTopic`](../object/TopicMatchTopic.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`AskTellTopic`**  
[`TopicMatchTopic`](../object/TopicMatchTopic.html)  
[`TopicEntry`](../object/TopicEntry.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`AskTellTopic`**  
[`AskAboutForTopic`](../object/AskAboutForTopic.html)  
[`AskForTopic`](../object/AskForTopic.html)  
[`AskTellAboutForTopic`](../object/AskTellAboutForTopic.html)  
[`AskTopic`](../object/AskTopic.html)  
[`TellTopic`](../object/TellTopic.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`includeInList`](#includeInList)

Inherited from `TopicMatchTopic` :  
[`matchExactCase`](../object/TopicMatchTopic.html#matchExactCase) [`matchPattern`](../object/TopicMatchTopic.html#matchPattern)

Inherited from `TopicEntry` :  
[`altTalkCount`](../object/TopicEntry.html#altTalkCount) [`altTopicList`](../object/TopicEntry.html#altTopicList) [`impliesGreeting`](../object/TopicEntry.html#impliesGreeting) [`isActive`](../object/TopicEntry.html#isActive) [`isConversational`](../object/TopicEntry.html#isConversational) [`matchObj`](../object/TopicEntry.html#matchObj) [`matchScore`](../object/TopicEntry.html#matchScore) [`talkCount`](../object/TopicEntry.html#talkCount) [`topicGroupActive`](../object/TopicEntry.html#topicGroupActive) [`topicGroupScoreAdjustment`](../object/TopicEntry.html#topicGroupScoreAdjustment) [`topicResponse`](../object/TopicEntry.html#topicResponse)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  
Inherited from `TopicMatchTopic` :  
[`findMatchObj`](../object/TopicMatchTopic.html#findMatchObj) [`isMatchPossible`](../object/TopicMatchTopic.html#isMatchPossible) [`matchTopic`](../object/TopicMatchTopic.html#matchTopic) [`setTopicPronouns`](../object/TopicMatchTopic.html#setTopicPronouns)

Inherited from `TopicEntry` :  
[`addAltTopic`](../object/TopicEntry.html#addAltTopic) [`addSuggestedTopic`](../object/TopicEntry.html#addSuggestedTopic) [`addTopic`](../object/TopicEntry.html#addTopic) [`adjustScore`](../object/TopicEntry.html#adjustScore) [`anyAltIsActive`](../object/TopicEntry.html#anyAltIsActive) [`breakTopicTie`](../object/TopicEntry.html#breakTopicTie) [`checkIsActive`](../object/TopicEntry.html#checkIsActive) [`deferToEntry`](../object/TopicEntry.html#deferToEntry) [`getActor`](../object/TopicEntry.html#getActor) [`getTopicOwner`](../object/TopicEntry.html#getTopicOwner) [`handleTopic`](../object/TopicEntry.html#handleTopic) [`initializeTopicEntry`](../object/TopicEntry.html#initializeTopicEntry) [`noteAltInvocation`](../object/TopicEntry.html#noteAltInvocation) [`noteInvocation`](../object/TopicEntry.html#noteInvocation)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="includeInList"></span>

`includeInList`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[2991](../source/actor.t.html#2991)\]



include me in both the ASK and TELL lists



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


