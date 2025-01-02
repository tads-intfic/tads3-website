---
layout: docs
---
<span class="title">CommandTopicHelper</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[3526](../source/actor.t.html#3526)\]

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



CommandTopicHelper is a mix-in class for use with CommandTopic and
DefaultCommantTopic to provide some common handling for both. Its base
class LCommandTopicHelper (which provides a method for reconstructing
the text of a command issued to an actor) must be defined in the
language-specific part of the library.

`class `**`CommandTopicHelper`**` :   `[`LCommandTopicHelper`](../object/LCommandTopicHelper.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`CommandTopicHelper`**  
[`LCommandTopicHelper`](../object/LCommandTopicHelper.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`CommandTopicHelper`**  
[`CommandTopic`](../object/CommandTopic.html)  
[`DefaultCommandTopic`](../object/DefaultCommandTopic.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`allowAction`](#allowAction) [`myAction`](#myAction)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`handleTopic`](#handleTopic)

Inherited from `LCommandTopicHelper` :  
[`actionPhrase`](../object/LCommandTopicHelper.html#actionPhrase) [`getName`](../object/LCommandTopicHelper.html#getName)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="allowAction"></span>

`allowAction`

[actor.t](../file/actor.t.html)\[[3544](../source/actor.t.html#3544)\]



Set this to true to allow the action to proceed as commanded by the
player.



<span id="myAction"></span>

`myAction`

[actor.t](../file/actor.t.html)\[[3550](../source/actor.t.html#3550)\]



The action our actor has been ordered to carry out, which will be the
action on the current Command object.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="handleTopic"></span>

`handleTopic ( )`

[actor.t](../file/actor.t.html)\[[3527](../source/actor.t.html#3527)\]



*no description available*





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


