---
layout: docs
---
<span class="title">suggestedTopicLister</span><span class="type">object</span>

[actor.t](../file/actor.t.html)\[[6422](../source/actor.t.html#6422)\]

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



A special lister to display a topic inventory list from a list of topics
provided in the lst parameter.

**`suggestedTopicLister`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`suggestedTopicLister`**  
`         object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`askForList`](#askForList) [`askForPrefix`](#askForPrefix) [`askList`](#askList) [`askPrefix`](#askPrefix) [`commandList`](#commandList) [`giveList`](#giveList) [`givePrefix`](#givePrefix) [`hyperlinkSuggestions`](#hyperlinkSuggestions) [`noList`](#noList) [`orListSep`](#orListSep) [`queryList`](#queryList) [`queryPrefix`](#queryPrefix) [`sayList`](#sayList) [`sayPrefix`](#sayPrefix) [`showPrefix`](#showPrefix) [`showToList`](#showToList) [`talkList`](#talkList) [`talkPrefix`](#talkPrefix) [`tellList`](#tellList) [`tellPrefix`](#tellPrefix) [`tellToPrefix`](#tellToPrefix) [`typeInfo`](#typeInfo) [`yesList`](#yesList)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`includes`](#includes) [`show`](#show) [`showList`](#showList) [`showListEmpty`](#showListEmpty) [`showListPrefix`](#showListPrefix) [`showListSuffix`](#showListSuffix) [`showSection`](#showSection)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="askForList"></span>

`askForList`

[actor.t](../file/actor.t.html)\[[6689](../source/actor.t.html#6689)\]



*no description available*



<span id="askForPrefix"></span>

`askForPrefix`

[actor.t](../file/actor.t.html)\[[6712](../source/actor.t.html#6712)\]



*no description available*



<span id="askList"></span>

`askList`

[actor.t](../file/actor.t.html)\[[6682](../source/actor.t.html#6682)\]



*no description available*



<span id="askPrefix"></span>

`askPrefix`

[actor.t](../file/actor.t.html)\[[6707](../source/actor.t.html#6707)\]



*no description available*



<span id="commandList"></span>

`commandList`

[actor.t](../file/actor.t.html)\[[6690](../source/actor.t.html#6690)\]



*no description available*



<span id="giveList"></span>

`giveList`

[actor.t](../file/actor.t.html)\[[6685](../source/actor.t.html#6685)\]



*no description available*



<span id="givePrefix"></span>

`givePrefix`

[actor.t](../file/actor.t.html)\[[6710](../source/actor.t.html#6710)\]



*no description available*



<span id="hyperlinkSuggestions"></span>

`hyperlinkSuggestions`

[actor.t](../file/actor.t.html)\[[6648](../source/actor.t.html#6648)\]



Do we want the topic suggestions to be hyperlinked so that the player
can just click on them? By default we don't but game code can override/



<span id="noList"></span>

`noList`

[actor.t](../file/actor.t.html)\[[6688](../source/actor.t.html#6688)\]



*no description available*



<span id="orListSep"></span>

`orListSep`

[actor.t](../file/actor.t.html)\[[6716](../source/actor.t.html#6716)\]



The conjunction to use at the end of a list of alternatives



<span id="queryList"></span>

`queryList`

[actor.t](../file/actor.t.html)\[[6681](../source/actor.t.html#6681)\]



*no description available*



<span id="queryPrefix"></span>

`queryPrefix`

[actor.t](../file/actor.t.html)\[[6706](../source/actor.t.html#6706)\]



*no description available*



<span id="sayList"></span>

`sayList`

[actor.t](../file/actor.t.html)\[[6680](../source/actor.t.html#6680)\]



Sublists of each kind of suggestion which can be listed in turn



<span id="sayPrefix"></span>

`sayPrefix`

[actor.t](../file/actor.t.html)\[[6705](../source/actor.t.html#6705)\]



The prefix to use when suggesting a SayTopic, if it explicitly wants the
suggestion to start with 'say'.



<span id="showPrefix"></span>

`showPrefix`

[actor.t](../file/actor.t.html)\[[6711](../source/actor.t.html#6711)\]



*no description available*



<span id="showToList"></span>

`showToList`

[actor.t](../file/actor.t.html)\[[6686](../source/actor.t.html#6686)\]



*no description available*



<span id="talkList"></span>

`talkList`

[actor.t](../file/actor.t.html)\[[6684](../source/actor.t.html#6684)\]



*no description available*



<span id="talkPrefix"></span>

`talkPrefix`

[actor.t](../file/actor.t.html)\[[6709](../source/actor.t.html#6709)\]



*no description available*



<span id="tellList"></span>

`tellList`

[actor.t](../file/actor.t.html)\[[6683](../source/actor.t.html#6683)\]



*no description available*



<span id="tellPrefix"></span>

`tellPrefix`

[actor.t](../file/actor.t.html)\[[6708](../source/actor.t.html#6708)\]



*no description available*



<span id="tellToPrefix"></span>

`tellToPrefix`

[actor.t](../file/actor.t.html)\[[6713](../source/actor.t.html#6713)\]



*no description available*



<span id="typeInfo"></span>

`typeInfo`

[actor.t](../file/actor.t.html)\[[6663](../source/actor.t.html#6663)\]



The typeInfo contains a list of lists that are used by the show method
to build our various sublists. The first element of each list is a
pointer to the list property to use on this lister object to hold the
particular sublist. The second element of each list is a property
pointer used to identify which sublist a TopicEntry belongs in,
according to its own includeInList property. The third element is the
type of topic entry a topic entry should be suggested as if it is
explicitly requested in its suggestAs property. The fourth element is
the text to use when introducing the corresponding section of the list
(or nil if no introductory text is required).



<span id="yesList"></span>

`yesList`

[actor.t](../file/actor.t.html)\[[6687](../source/actor.t.html#6687)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="includes"></span>

`includes (t, prop)`

[actor.t](../file/actor.t.html)\[[6696](../source/actor.t.html#6696)\]



Test whether the topicEntry t includes prop in its includeInList.



<span id="show"></span>

`show (lst, explicit, =, true)`

[actor.t](../file/actor.t.html)\[[6467](../source/actor.t.html#6467)\]



*no description available*



<span id="showList"></span>

`showList (lst, sectionIntro)`

[actor.t](../file/actor.t.html)\[[6608](../source/actor.t.html#6608)\]



Show one of our sublists of particular kinds of suggest topics



<span id="showListEmpty"></span>

`showListEmpty (explicit)`

[actor.t](../file/actor.t.html)\[[6458](../source/actor.t.html#6458)\]



The message to display if there are no topics to suggest.



<span id="showListPrefix"></span>

`showListPrefix (lst, pl, explicit)`

[actor.t](../file/actor.t.html)\[[6425](../source/actor.t.html#6425)\]



Introduce the topic inventory listing



<span id="showListSuffix"></span>

`showListSuffix (lst, pl, explicit)`

[actor.t](../file/actor.t.html)\[[6444](../source/actor.t.html#6444)\]



End the list with a closing parenthesis or full stop as appropriate



<span id="showSection"></span>

`showSection (prop, listStarted, sectionIntro)`

[actor.t](../file/actor.t.html)\[[6580](../source/actor.t.html#6580)\]



Finish the list by appending its suffix
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


