---
layout: docs
---
<span class="title">TopicDatabase</span><span class="type">class</span>

[topicEntry.t](../file/topicEntry.t.html)\[[186](../source/topicEntry.t.html#186)\]

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



A TopicDatabase is a container for TopicEntries that provides a method
for determining the TopicEntry that best matches a list of topics

`class `**`TopicDatabase`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`TopicDatabase`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`TopicDatabase`**  
[`ActorTopicDatabase`](../object/ActorTopicDatabase.html)  
[`Actor`](../object/Actor.html)  
[`ActorState`](../object/ActorState.html)  
[`Consultable`](../object/Consultable.html)  
[`ThoughtManager`](../object/ThoughtManager.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addTopic`](#addTopic) [`getBestMatch`](#getBestMatch)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addTopic"></span>

`addTopic (top)`

[topicEntry.t](../file/topicEntry.t.html)\[[244](../source/topicEntry.t.html#244)\]



Add a topic entry to the appropriate list or list on this TopicDatabase.



<span id="getBestMatch"></span>

`getBestMatch (myList, requestedList)`

[topicEntry.t](../file/topicEntry.t.html)\[[192](../source/topicEntry.t.html#192)\]



Find the topic entry among those supplied in myList that best matches at
least one of the topics passed in requestedList.
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


