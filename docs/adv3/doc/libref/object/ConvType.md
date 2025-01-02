---
layout: docs
---
<span class="title">ConvType</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[1950](../source/actor.t.html#1950)\]

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

A conversational action type descriptor. This descriptor is used in
handleConversation() in Actor and ActorState to describe the type of
conversational action we're performing. The type descriptor object
encapsulates a set of information that tells us how to handle the
action.

`class `**`ConvType`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`ConvType`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

[`askAboutConvType`](../object/askAboutConvType.html)[`askForConvType`](../object/askForConvType.html)[`byeConvType`](../object/byeConvType.html)[`commandConvType`](../object/commandConvType.html)[`consultConvType`](../object/consultConvType.html)[`giveConvType`](../object/giveConvType.html)[`helloConvType`](../object/helloConvType.html)[`initiateConvType`](../object/initiateConvType.html)[`noConvType`](../object/noConvType.html)[`showConvType`](../object/showConvType.html)[`tellAboutConvType`](../object/tellAboutConvType.html)[`yesConvType`](../object/yesConvType.html)
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`defaultResponseProp`](#defaultResponseProp)[`topicListProp`](#topicListProp)[`unknownMsg`](#unknownMsg)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`afterResponse`](#afterResponse)[`defaultResponse`](#defaultResponse)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="defaultResponseProp"></span>

`defaultResponseProp`

[actor.t](../file/actor.t.html)\[[1969](../source/actor.t.html#1969)\]

<div class="desc">

the default response property for this action

</div>

<span id="topicListProp"></span>

`topicListProp`

[actor.t](../file/actor.t.html)\[[1966](../source/actor.t.html#1966)\]

<div class="desc">

The TopicDatabase topic-list property. This is the property of the
TopicDatabase object that we evaluate to get this list of topic entries
to search for a match to the topic.

</div>

<span id="unknownMsg"></span>

`unknownMsg`

[actor.t](../file/actor.t.html)\[[1959](../source/actor.t.html#1959)\]

<div class="desc">

The unknown interlocutor message property. This is used when we try this
conversational action without knowing whom we're talking to. For
example, if we just say HELLO, and there's no one around to talk to,
we'll use this as the default response. This can be a library message
property, or simply a single-quoted string to display.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="afterResponse"></span>

`afterResponse (actor, otherActor)`

[actor.t](../file/actor.t.html)\[[1984](../source/actor.t.html#1984)\]

<div class="desc">

Perform any special follow-up action for this type of conversational
action.

</div>

<span id="defaultResponse"></span>

`defaultResponse (db, otherActor, topic)`

[actor.t](../file/actor.t.html)\[[1978](../source/actor.t.html#1978)\]

<div class="desc">

Call the default response property on the given topic database. This
invokes the property given by defaultResponseProp(). We have both the
property and the method to call the property because this allows us to
test for the existence of the property and to call it with the
appropriate argument list.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
