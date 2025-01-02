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

<div class="fdesc">

A DefaultThought is a Thought that matches any THINK ABOUT command with
a very low match score, so that any more specific Thought that's matched
will take precedence. Game code can use this to provide a fall-back
response when no more specific response is available.

`class `**`DefaultThought`**` :   `[`Thought`](../object/Thought.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`DefaultThought`**  
`         `[`Thought`](../object/Thought.html)  
`                 `[`TopicEntry`](../object/TopicEntry.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`matchScore`](#matchScore)`  `

Inherited from `Thought` :  
` `[`includeInList`](../object/Thought.html#includeInList)`  `

Inherited from `TopicEntry` :  
` `[`active`](../object/TopicEntry.html#active)`  `[`isActive`](../object/TopicEntry.html#isActive)`  `[`matchExactCase`](../object/TopicEntry.html#matchExactCase)`  `[`matchObj`](../object/TopicEntry.html#matchObj)`  `[`matchPattern`](../object/TopicEntry.html#matchPattern)`  `[`scoreBoost`](../object/TopicEntry.html#scoreBoost)`  `[`topicMatched`](../object/TopicEntry.html#topicMatched)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`matchTopic`](#matchTopic)`  `

` `

Inherited from `TopicEntry` :  
` `[`addTopic`](../object/TopicEntry.html#addTopic)`  `[`initializeTopicEntry`](../object/TopicEntry.html#initializeTopicEntry)`  `[`scoreBooster`](../object/TopicEntry.html#scoreBooster)`  `[`topicResponse`](../object/TopicEntry.html#topicResponse)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="matchScore"></span>

`matchScore`<span class="rem">OVERRIDDEN</span>

[thoughts.t](../file/thoughts.t.html)\[[83](../source/thoughts.t.html#83)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="matchTopic"></span>

`matchTopic (top)`<span class="rem">OVERRIDDEN</span>

[thoughts.t](../file/thoughts.t.html)\[[78](../source/thoughts.t.html#78)\]

<div class="desc">

*no description available*

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
