[SayTopic]{.title}[class]{.type}

[actor.t](../file/actor.t.html)\[[4659](../source/actor.t.html#4659)\]

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
A SayTopic is a kind of SpecialTopic that allows the player (character)
to say virtually anything (within reason) to an NPC; a SayTopic may be
triggered by a command that explicitly begins with SAY, but it may also
be triggered by any combination of words that matches its matchObj and
doesn\'t correspond to any other recognizable command. This allows the
player to respond, for example, with either SAY YOU DON\'T KNOW or just
I DON\'T KNOW, to trigger an appropriately defined SayTopic.

`class `**`SayTopic`**` :   `[`SpecialTopic`](../object/SpecialTopic.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`SayTopic`**\
`         `[`SpecialTopic`](../object/SpecialTopic.html)\
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

` `[`includeInList`](#includeInList)`  `[`includeSayInName`](#includeSayInName)`  `

Inherited from `SpecialTopic` :\
` `[`askMatchObj`](../object/SpecialTopic.html#askMatchObj)`  `[`autoName`](../object/SpecialTopic.html#autoName)`  `[`rex`](../object/SpecialTopic.html#rex)`  `[`tellMatchObj`](../object/SpecialTopic.html#tellMatchObj)`  `

Inherited from `ActorTopicEntry` :\
` `[`activated`](../object/ActorTopicEntry.html#activated)`  `[`active`](../object/ActorTopicEntry.html#active)`  `[`convKeys`](../object/ActorTopicEntry.html#convKeys)`  `[`curiosityAroused`](../object/ActorTopicEntry.html#curiosityAroused)`  `[`getActor`](../object/ActorTopicEntry.html#getActor)`  `[`impliesGreeting`](../object/ActorTopicEntry.html#impliesGreeting)`  `[`isConversational`](../object/ActorTopicEntry.html#isConversational)`  `[`keyTopics`](../object/ActorTopicEntry.html#keyTopics)`  `[`listOrder`](../object/ActorTopicEntry.html#listOrder)`  `[`name`](../object/ActorTopicEntry.html#name)`  `[`suggestAs`](../object/ActorTopicEntry.html#suggestAs)`  `[`timesInvoked`](../object/ActorTopicEntry.html#timesInvoked)`  `

` `

` `

Inherited from `TopicEntry` :\
` `[`isActive`](../object/TopicEntry.html#isActive)`  `[`matchExactCase`](../object/TopicEntry.html#matchExactCase)`  `[`matchObj`](../object/TopicEntry.html#matchObj)`  `[`matchPattern`](../object/TopicEntry.html#matchPattern)`  `[`matchScore`](../object/TopicEntry.html#matchScore)`  `[`scoreBoost`](../object/TopicEntry.html#scoreBoost)`  `[`topicMatched`](../object/TopicEntry.html#topicMatched)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`buildName`](#buildName)`  `

Inherited from `SpecialTopic` :\
` `[`initializeTopicEntry`](../object/SpecialTopic.html#initializeTopicEntry)`  `

Inherited from `ActorTopicEntry` :\
` `[`activate`](../object/ActorTopicEntry.html#activate)`  `[`addToConvKeyTable`](../object/ActorTopicEntry.html#addToConvKeyTable)`  `[`curiositySatisfied`](../object/ActorTopicEntry.html#curiositySatisfied)`  `[`deactivate`](../object/ActorTopicEntry.html#deactivate)`  `[`getKeyTopics`](../object/ActorTopicEntry.html#getKeyTopics)`  `[`handleTopic`](../object/ActorTopicEntry.html#handleTopic)`  `[`isReachable`](../object/ActorTopicEntry.html#isReachable)`  `[`nodeActive`](../object/ActorTopicEntry.html#nodeActive)`  `[`showKeyTopics`](../object/ActorTopicEntry.html#showKeyTopics)`  `[`timesToSuggest`](../object/ActorTopicEntry.html#timesToSuggest)`  `

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

[]{#includeInList}

`includeInList`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[4683](../source/actor.t.html#4683)\]

::: desc
SayTopics belong in the sayTopics list of their TopicDatabase
:::

[]{#includeSayInName}

`includeSayInName`

[actor.t](../file/actor.t.html)\[[4693](../source/actor.t.html#4693)\]

::: desc
When a SayTopic is suggested we normally precede its name by \'say\',
e.g. \'say you are happy\'. In some cases an author might want to use a
SayTopic to match input that\'s better without the initial \'say\', e.g.
\'tell a lie\', in which case set includeSayInName to nil to suppress
the initial \'say\' in topic inventory listings.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#buildName}

`buildName ( )`[OVERRIDDEN]{.rem}

[actor.t](../file/actor.t.html)\[[4667](../source/actor.t.html#4667)\]

::: desc
When we construct the name of a SayTopic we use the name property of its
matchObj rather that theName property, since it won\'t normally make
sense to include the definite article at the beginning of suggestions of
things that can be said.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
