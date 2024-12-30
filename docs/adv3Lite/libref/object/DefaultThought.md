[DefaultThought]{.title}[class]{.type}

[thoughts.t](../file/thoughts.t.html)\[[77](../source/thoughts.t.html#77)\]

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
A DefaultThought is a Thought that matches any THINK ABOUT command with
a very low match score, so that any more specific Thought that\'s
matched will take precedence. Game code can use this to provide a
fall-back response when no more specific response is available.

`class `**`DefaultThought`**` :   `[`Thought`](../object/Thought.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`DefaultThought`**\
`         `[`Thought`](../object/Thought.html)\
`                 `[`TopicEntry`](../object/TopicEntry.html)\
`                         object`\
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

` `[`matchScore`](#matchScore)`  `

Inherited from `Thought` :\
` `[`includeInList`](../object/Thought.html#includeInList)`  `

Inherited from `TopicEntry` :\
` `[`active`](../object/TopicEntry.html#active)`  `[`isActive`](../object/TopicEntry.html#isActive)`  `[`matchExactCase`](../object/TopicEntry.html#matchExactCase)`  `[`matchObj`](../object/TopicEntry.html#matchObj)`  `[`matchPattern`](../object/TopicEntry.html#matchPattern)`  `[`scoreBoost`](../object/TopicEntry.html#scoreBoost)`  `[`topicMatched`](../object/TopicEntry.html#topicMatched)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`matchTopic`](#matchTopic)`  `

` `

Inherited from `TopicEntry` :\
` `[`addTopic`](../object/TopicEntry.html#addTopic)`  `[`initializeTopicEntry`](../object/TopicEntry.html#initializeTopicEntry)`  `[`scoreBooster`](../object/TopicEntry.html#scoreBooster)`  `[`topicResponse`](../object/TopicEntry.html#topicResponse)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#matchScore}

`matchScore`[OVERRIDDEN]{.rem}

[thoughts.t](../file/thoughts.t.html)\[[83](../source/thoughts.t.html#83)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#matchTopic}

`matchTopic (top)`[OVERRIDDEN]{.rem}

[thoughts.t](../file/thoughts.t.html)\[[78](../source/thoughts.t.html#78)\]

::: desc
*no description available*
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
