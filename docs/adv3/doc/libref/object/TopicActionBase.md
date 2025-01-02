---
---
<span class="title">TopicActionBase</span><span class="type">class</span>

[action.t](../file/action.t.html)\[[5517](../source/action.t.html#5517)\]

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

Base class for actions that include a "topic" phrase. This is a mix-in
class that can be used in different types of topic actions. In all
cases, the topic phrase must be assigned to the 'topicMatch' property in
grammar rules based on this class.

`class `**`TopicActionBase`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`TopicActionBase`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`TopicActionBase`**  
`         `[`TopicAction`](../object/TopicAction.html)  
`         `[`TopicTAction`](../object/TopicTAction.html)  
`                 `[`AskVagueAction`](../object/AskVagueAction.html)  
`                         `[`predicate(AskVague)`](../object/predicate(AskVague).html)  
`                         `[`predicate(TellVague)`](../object/predicate(TellVague).html)  
`                 `[`ConsultAboutAction`](../object/ConsultAboutAction.html)  
`                         `[`predicate(ConsultAbout)`](../object/predicate(ConsultAbout).html)  
`                         `[`predicate(ConsultWhatAbout)`](../object/predicate(ConsultWhatAbout).html)  
`                 `[`ConvTopicTAction`](../object/ConvTopicTAction.html)  
`                         `[`AskAboutAction`](../object/AskAboutAction.html)  
`                                 `[`predicate(AskAbout)`](../object/predicate(AskAbout).html)  
`                                 `[`predicate(AskAboutImplicit)`](../object/predicate(AskAboutImplicit).html)  
`                                 `[`predicate(AskAboutWhat)`](../object/predicate(AskAboutWhat).html)  
`                         `[`AskForAction`](../object/AskForAction.html)  
`                                 `[`predicate(AskFor)`](../object/predicate(AskFor).html)  
`                                 `[`predicate(AskWhomFor)`](../object/predicate(AskWhomFor).html)  
`                         `[`TellAboutAction`](../object/TellAboutAction.html)  
`                                 `[`predicate(TellAbout)`](../object/predicate(TellAbout).html)  
`                                 `[`predicate(TellAboutImplicit)`](../object/predicate(TellAboutImplicit).html)  
`                                 `[`predicate(TellAboutWhat)`](../object/predicate(TellAboutWhat).html)  
`                 `[`TellVagueAction`](../object/TellVagueAction.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`topicList_`](#topicList_)`  `[`topicQualResolver_`](#topicQualResolver_)`  `[`topicResolver_`](#topicResolver_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`createTopicResolver`](#createTopicResolver)`  `[`getMessageParam`](#getMessageParam)`  `[`getTopic`](#getTopic)`  `[`getTopicQualifierResolver`](#getTopicQualifierResolver)`  `[`getTopicResolver`](#getTopicResolver)`  `[`reparseMatchAsTopic`](#reparseMatchAsTopic)`  `[`resolveTopic`](#resolveTopic)`  `[`setResolvedTopic`](#setResolvedTopic)`  `[`setTopicMatch`](#setTopicMatch)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="topicList_"></span>

`topicList_`

[action.t](../file/action.t.html)\[[5708](../source/action.t.html#5708)\]

<div class="desc">

the resolved topic object list

</div>

<span id="topicQualResolver_"></span>

`topicQualResolver_`

[action.t](../file/action.t.html)\[[5705](../source/action.t.html#5705)\]

<div class="desc">

the topic qualifier resolver

</div>

<span id="topicResolver_"></span>

`topicResolver_`

[action.t](../file/action.t.html)\[[5711](../source/action.t.html#5711)\]

<div class="desc">

my cached topic resolver

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="createTopicResolver"></span>

`createTopicResolver (issuingActor, targetActor)`

[action.t](../file/action.t.html)\[[5645](../source/action.t.html#5645)\]

<div class="desc">

Create the topic resolver.

</div>

<span id="getMessageParam"></span>

`getMessageParam (objName)`

[action.t](../file/action.t.html)\[[5657](../source/action.t.html#5657)\]

<div class="desc">

Get a message parameter by name. We'll return the topic for the keyword
'topic', and inherit the default handling for anything else.

</div>

<span id="getTopic"></span>

`getTopic ( )`

[action.t](../file/action.t.html)\[[5672](../source/action.t.html#5672)\]

<div class="desc">

get the current topic

</div>

<span id="getTopicQualifierResolver"></span>

`getTopicQualifierResolver (issuingActor, targetActor, reset)`

[action.t](../file/action.t.html)\[[5689](../source/action.t.html#5689)\]

<div class="desc">

Get the resolver for qualifiers we find in the topic phrase (qualifiers
that might need resolution include things like possessive adjectives and
locational phrases).

</div>

<span id="getTopicResolver"></span>

`getTopicResolver (issuingActor, targetActor, reset)`

[action.t](../file/action.t.html)\[[5628](../source/action.t.html#5628)\]

<div class="desc">

get the topic resolver

</div>

<span id="reparseMatchAsTopic"></span>

`reparseMatchAsTopic (topic, issuingActor, targetActor)`

[action.t](../file/action.t.html)\[[5588](../source/action.t.html#5588)\]

<div class="desc">

Re-parse a match tree as a topic phrase. Returns a TopicProd match tree,
if possible.

</div>

<span id="resolveTopic"></span>

`resolveTopic (issuingActor, targetActor, results)`

[action.t](../file/action.t.html)\[[5523](../source/action.t.html#5523)\]

<div class="desc">

Resolve the topic phrase. This resolves the match tree in out
'topicMatch' property, and stores the result in topicList\_. This is for
use in resolveNouns().

</div>

<span id="setResolvedTopic"></span>

`setResolvedTopic (topic)`

[action.t](../file/action.t.html)\[[5539](../source/action.t.html#5539)\]

<div class="desc">

Set the resolved topic to the given object list. This is for use in
setResolvedObjects().

</div>

<span id="setTopicMatch"></span>

`setTopicMatch (topic)`

[action.t](../file/action.t.html)\[[5555](../source/action.t.html#5555)\]

<div class="desc">

Set the topic match tree. This is for use in setObjectMatches().

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
