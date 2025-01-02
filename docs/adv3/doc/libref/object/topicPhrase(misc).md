---
layout: docs
---
<span class="title">topicPhrase(misc)</span><span class="type">grammar</span>

[en_us.t](../file/en_us.t.html)\[[7072](../source/en_us.t.html#7072)\]

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



Explicitly match a miscellaneous word list as a topic.

This might seem redundant with the ordinary topicPhrase that accepts a
singleNoun, because singleNoun can match a miscellaneous word list. The
difference is that singleNoun only matches a miscWordList with a
"badness" value, whereas we match a miscWordList here without any
badness. We want to be more tolerant of unrecognized input in topic
phrases than in ordinary noun phrases, because it's in the nature of
topic phrases to go outside of what's implemented directly in the
simulation model. At a grammatical level, we don't want to treat topic
phrases that we can resolve to the simulation model any differently than
we treat those we can't resolve, so we must add this rule to eliminate
the badness that singleNoun associated with a miscWordList match.

Note that we do prefer resolvable noun phrase matches to miscWordList
matches, but we handle this preference with the resolver's scoring
mechanism rather than with badness.

`grammar `<span class="gramalt">[`topicPhrase`](../object/topicPhrase.html)`(misc)`</span>` :   `[`TopicProd`](../object/TopicProd.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`topicPhrase(misc)`**  
[`TopicProd`](../object/TopicProd.html)  
[`SingleNounProd`](../object/SingleNounProd.html)  
[`NounPhraseProd`](../object/NounPhraseProd.html)  
[`BasicProd`](../object/BasicProd.html)  
`                                         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  









Inherited from `NounPhraseProd` :  
[`filterForCollectives`](../object/NounPhraseProd.html#filterForCollectives)

Inherited from `BasicProd` :  
[`firstTokenIndex`](../object/BasicProd.html#firstTokenIndex) [`isSpecialResponseMatch`](../object/BasicProd.html#isSpecialResponseMatch) [`lastTokenIndex`](../object/BasicProd.html#lastTokenIndex)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  





Inherited from `TopicProd` :  
[`getOrigText`](../object/TopicProd.html#getOrigText) [`getOrigTokenList`](../object/TopicProd.html#getOrigTokenList) [`resolveNouns`](../object/TopicProd.html#resolveNouns)



Inherited from `NounPhraseProd` :  
[`filterTruncations`](../object/NounPhraseProd.html#filterTruncations) [`getVerifyKeepers`](../object/NounPhraseProd.html#getVerifyKeepers)

Inherited from `BasicProd` :  
[`canResolveTo`](../object/BasicProd.html#canResolveTo) [`setOrigTokenList`](../object/BasicProd.html#setOrigTokenList)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


