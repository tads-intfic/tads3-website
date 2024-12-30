[NodeEndCheck]{.title}[class]{.type}

[actor.t](../file/actor.t.html)\[[4827](../source/actor.t.html#4827)\]

[Superclass\
Tree](#_SuperClassTree_)

[Subclass\
Tree](#_SubClassTree_)

[Global\
Objects](#_ObjectSummary_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
A NodeEndCheck may optionally be assigned to a Conversation Node (as
defined on the convKeys property, or through being located in a ConvNode
object) to decide whether a conversation is allowed to end while it\'s
at this node. There\'s no need to define one of these objects for a
conversation node if you\'re happy for the conversation to be ended
during it under all circumstances.

`class `**`NodeEndCheck`**` :   `[`EndConvBlocker`](../object/EndConvBlocker.html)`   `[`InitiateTopic`](../object/InitiateTopic.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`NodeEndCheck`**\
`         `[`EndConvBlocker`](../object/EndConvBlocker.html)\
`                 object`\
`         `[`InitiateTopic`](../object/InitiateTopic.html)\
`                 `[`ActorTopicEntry`](../object/ActorTopicEntry.html)\
`                         `[`ReplaceRedirector`](../object/ReplaceRedirector.html)\
`                                 `[`Redirector`](../object/Redirector.html)\
`                                         object`\
`                         `[`TopicEntry`](../object/TopicEntry.html)\
`                                 object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

*(none)* []{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`active`](#active)`  `[`convKeys`](#convKeys)`  `[`matchObj`](#matchObj)`  `

` `

Inherited from `InitiateTopic` :\
` `[`includeInList`](../object/InitiateTopic.html#includeInList)`  `

Inherited from `ActorTopicEntry` :\
` `[`activated`](../object/ActorTopicEntry.html#activated)`  `[`autoName`](../object/ActorTopicEntry.html#autoName)`  `[`curiosityAroused`](../object/ActorTopicEntry.html#curiosityAroused)`  `[`getActor`](../object/ActorTopicEntry.html#getActor)`  `[`impliesGreeting`](../object/ActorTopicEntry.html#impliesGreeting)`  `[`isConversational`](../object/ActorTopicEntry.html#isConversational)`  `[`keyTopics`](../object/ActorTopicEntry.html#keyTopics)`  `[`listOrder`](../object/ActorTopicEntry.html#listOrder)`  `[`name`](../object/ActorTopicEntry.html#name)`  `[`suggestAs`](../object/ActorTopicEntry.html#suggestAs)`  `[`timesInvoked`](../object/ActorTopicEntry.html#timesInvoked)`  `

` `

` `

Inherited from `TopicEntry` :\
` `[`isActive`](../object/TopicEntry.html#isActive)`  `[`matchExactCase`](../object/TopicEntry.html#matchExactCase)`  `[`matchPattern`](../object/TopicEntry.html#matchPattern)`  `[`matchScore`](../object/TopicEntry.html#matchScore)`  `[`scoreBoost`](../object/TopicEntry.html#scoreBoost)`  `[`topicMatched`](../object/TopicEntry.html#topicMatched)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`canEndConversation`](#canEndConversation)`  `[`handleTopic`](#handleTopic)`  `

Inherited from `EndConvBlocker` :\
` `[`blockEndConv`](../object/EndConvBlocker.html#blockEndConv)`  `

` `

Inherited from `ActorTopicEntry` :\
` `[`activate`](../object/ActorTopicEntry.html#activate)`  `[`addToConvKeyTable`](../object/ActorTopicEntry.html#addToConvKeyTable)`  `[`buildName`](../object/ActorTopicEntry.html#buildName)`  `[`curiositySatisfied`](../object/ActorTopicEntry.html#curiositySatisfied)`  `[`deactivate`](../object/ActorTopicEntry.html#deactivate)`  `[`getKeyTopics`](../object/ActorTopicEntry.html#getKeyTopics)`  `[`initializeTopicEntry`](../object/ActorTopicEntry.html#initializeTopicEntry)`  `[`isReachable`](../object/ActorTopicEntry.html#isReachable)`  `[`nodeActive`](../object/ActorTopicEntry.html#nodeActive)`  `[`showKeyTopics`](../object/ActorTopicEntry.html#showKeyTopics)`  `[`timesToSuggest`](../object/ActorTopicEntry.html#timesToSuggest)`  `

Inherited from `ReplaceRedirector` :\
` `[`redirect`](../object/ReplaceRedirector.html#redirect)`  `

Inherited from `Redirector` :\
` `[`doInstead`](../object/Redirector.html#doInstead)`  `[`doNested`](../object/Redirector.html#doNested)`  `[`doOtherAction`](../object/Redirector.html#doOtherAction)`  `

Inherited from `TopicEntry` :\
` `[`addTopic`](../object/TopicEntry.html#addTopic)`  `[`matchTopic`](../object/TopicEntry.html#matchTopic)`  `[`scoreBooster`](../object/TopicEntry.html#scoreBooster)`  `[`topicResponse`](../object/TopicEntry.html#topicResponse)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#active}

`active`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[4834](../source/actor.t.html#4834)\]

::: desc
We\'re only active when one or more of our keys is active (having been
activated through an \<.convnode\> tag).
:::

[]{#convKeys}

`convKeys`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[4845](../source/actor.t.html#4845)\]

::: desc
Particular instances must override this property to stipulate which keys
we\'re active for, unless this NodeEndCheck is located within a ConvNode
object which will take care of this for us. Note that instead of
locating a NodeEndCheck in a particular ConvNode, you can specify the
convKeys for a number of ConvNodes here, and this NodeEndCheck will then
apply to them all.
:::

[]{#matchObj}

`matchObj`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[4828](../source/actor.t.html#4828)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#canEndConversation}

`canEndConversation (reason)`

[actor.t](../file/actor.t.html)\[[4854](../source/actor.t.html#4854)\]

::: desc
Decide whether the conversation can be ended for reason while the
conversation is at this node. By default we simply return true but
instances should override to return nil when the conversation should not
be permitted to end. When the method returns nil it should also display
a message saying why the conversation may not be ended.
:::

[]{#handleTopic}

`handleTopic ( )`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[4863](../source/actor.t.html#4863)\]

::: desc
Do nothing here; this class only exists for the sake of its
canEndConversation() method.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::