---
layout: docs
---
<span class="title">Topic</span><span class="type">class</span>

[actor.t](../file/actor.t.html)\[[39](../source/actor.t.html#39)\]

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



A Topic is an object representing some piece of knowledge in the story.
Actors can use Topic objects in commands such as "ask" and "tell".

A physical simulation object can be a Topic through multiple
inheritance. In addition, a game can define Topic objects for abstract
conversation topics that don't correspond to simulation objects; for
example, a topic could be created for "the meaning of life" to allow a
command such as "ask guru about meaning of life."

The key distinction between Topic objects and regular objects is that a
Topic can represent an abstract, non-physical concept that isn't
connected to any "physical" object in the simulation.

`class `**`Topic`**` :   `[`VocabObject`](../object/VocabObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Topic`**  
[`VocabObject`](../object/VocabObject.html)  
`                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`canResolvePossessive`](#canResolvePossessive) [`isKnown`](#isKnown)

Inherited from `VocabObject` :  
[`disambigPromptOrder`](../object/VocabObject.html#disambigPromptOrder) [`owner`](../object/VocabObject.html#owner) [`pluralOrder`](../object/VocabObject.html#pluralOrder) [`vocabLikelihood`](../object/VocabObject.html#vocabLikelihood) [`vocabWords`](../object/VocabObject.html#vocabWords) [`weakTokens`](../object/VocabObject.html#weakTokens)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`canBeSensed`](#canBeSensed)

Inherited from `VocabObject` :  
[`addToDictionary`](../object/VocabObject.html#addToDictionary) [`construct`](../object/VocabObject.html#construct) [`expandPronounList`](../object/VocabObject.html#expandPronounList) [`filterResolveList`](../object/VocabObject.html#filterResolveList) [`getFacets`](../object/VocabObject.html#getFacets) [`getNominalOwner`](../object/VocabObject.html#getNominalOwner) [`inheritVocab`](../object/VocabObject.html#inheritVocab) [`initializeVocab`](../object/VocabObject.html#initializeVocab) [`initializeVocabWith`](../object/VocabObject.html#initializeVocabWith) [`isOwnedBy`](../object/VocabObject.html#isOwnedBy) [`matchName`](../object/VocabObject.html#matchName) [`matchNameCommon`](../object/VocabObject.html#matchNameCommon) [`matchNameDisambig`](../object/VocabObject.html#matchNameDisambig) [`throwNoMatchForLocation`](../object/VocabObject.html#throwNoMatchForLocation) [`throwNoMatchForPossessive`](../object/VocabObject.html#throwNoMatchForPossessive) [`throwNothingInLocation`](../object/VocabObject.html#throwNothingInLocation)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="canResolvePossessive"></span>

`canResolvePossessive`<span class="rem">OVERRIDDEN</span>

[actor.t](../file/actor.t.html)\[[69](../source/actor.t.html#69)\]



a topic cannot by default be used to resolve a possessive phrase



<span id="isKnown"></span>

`isKnown`

[actor.t](../file/actor.t.html)\[[57](../source/actor.t.html#57)\]



Is the topic known? If this is true, the topic is in scope for actions
that operate on topics, such as "ask about" and "tell about." If this is
nil, the topic isn't known.

By default, we mark all topics as known to begin with, which allows
discussion of any topic at any time. Some authors prefer to keep track
of which topics the player character actually has reason to know about
within the context of the game, making topics available for conversation
only after they become known for some good reason, such as another
character mentioning them in conversation.

Note that, as with Thing.isKnown, this is only the DEFAULT 'known'
property. Each actor can have its own separate 'known' property by
defining the actor's 'knownProp' to a different property name.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="canBeSensed"></span>

`canBeSensed (sense, trans, ambient)`

[actor.t](../file/actor.t.html)\[[66](../source/actor.t.html#66)\]



Topics are abstract objects, so they can't be sensed with any of the
physical senses, even if they're ever included as part of a containment
hierarchy (which might be convenient in some cases for purposes of
associating a topic with a physical object, for example).





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


