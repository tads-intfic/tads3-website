---
layout: docs
---
<span class="title">DefaultThought</span><span class="type">class</span>

[thoughts.t](../file/thoughts.t.html)\[[77](../source/thoughts.t.html#77)\]

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



A DefaultThought is a Thought that matches any THINK ABOUT command with
a very low match score, so that any more specific Thought that's matched
will take precedence. Game code can use this to provide a fall-back
response when no more specific response is available.

`class `**`DefaultThought`**` :   `[`Thought`](../object/Thought.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`DefaultThought`**  
[`Thought`](../object/Thought.html)  
[`TopicEntry`](../object/TopicEntry.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`matchScore`](#matchScore)

Inherited from `Thought` :  
[`includeInList`](../object/Thought.html#includeInList)

Inherited from `TopicEntry` :  
[`active`](../object/TopicEntry.html#active) [`isActive`](../object/TopicEntry.html#isActive) [`matchExactCase`](../object/TopicEntry.html#matchExactCase) [`matchObj`](../object/TopicEntry.html#matchObj) [`matchPattern`](../object/TopicEntry.html#matchPattern) [`scoreBoost`](../object/TopicEntry.html#scoreBoost) [`topicMatched`](../object/TopicEntry.html#topicMatched)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`matchTopic`](#matchTopic)



Inherited from `TopicEntry` :  
[`addTopic`](../object/TopicEntry.html#addTopic) [`initializeTopicEntry`](../object/TopicEntry.html#initializeTopicEntry) [`scoreBooster`](../object/TopicEntry.html#scoreBooster) [`topicResponse`](../object/TopicEntry.html#topicResponse)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="matchScore"></span>

`matchScore`<span class="rem">OVERRIDDEN</span>

[thoughts.t](../file/thoughts.t.html)\[[83](../source/thoughts.t.html#83)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="matchTopic"></span>

`matchTopic (top)`<span class="rem">OVERRIDDEN</span>

[thoughts.t](../file/thoughts.t.html)\[[78](../source/thoughts.t.html#78)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


