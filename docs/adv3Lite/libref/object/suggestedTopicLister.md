[suggestedTopicLister]{.title}[object]{.type}

[actor.t](../file/actor.t.html)\[[6422](../source/actor.t.html#6422)\]

[Superclass\
Tree](#_SuperClassTree_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
A special lister to display a topic inventory list from a list of topics
provided in the lst parameter.

**`suggestedTopicLister`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`suggestedTopicLister`**\
`         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`askForList`](#askForList)`  `[`askForPrefix`](#askForPrefix)`  `[`askList`](#askList)`  `[`askPrefix`](#askPrefix)`  `[`commandList`](#commandList)`  `[`giveList`](#giveList)`  `[`givePrefix`](#givePrefix)`  `[`hyperlinkSuggestions`](#hyperlinkSuggestions)`  `[`noList`](#noList)`  `[`orListSep`](#orListSep)`  `[`queryList`](#queryList)`  `[`queryPrefix`](#queryPrefix)`  `[`sayList`](#sayList)`  `[`sayPrefix`](#sayPrefix)`  `[`showPrefix`](#showPrefix)`  `[`showToList`](#showToList)`  `[`talkList`](#talkList)`  `[`talkPrefix`](#talkPrefix)`  `[`tellList`](#tellList)`  `[`tellPrefix`](#tellPrefix)`  `[`tellToPrefix`](#tellToPrefix)`  `[`typeInfo`](#typeInfo)`  `[`yesList`](#yesList)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`includes`](#includes)`  `[`show`](#show)`  `[`showList`](#showList)`  `[`showListEmpty`](#showListEmpty)`  `[`showListPrefix`](#showListPrefix)`  `[`showListSuffix`](#showListSuffix)`  `[`showSection`](#showSection)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#askForList}

`askForList`

[actor.t](../file/actor.t.html)\[[6689](../source/actor.t.html#6689)\]

::: desc
*no description available*
:::

[]{#askForPrefix}

`askForPrefix`

[actor.t](../file/actor.t.html)\[[6712](../source/actor.t.html#6712)\]

::: desc
*no description available*
:::

[]{#askList}

`askList`

[actor.t](../file/actor.t.html)\[[6682](../source/actor.t.html#6682)\]

::: desc
*no description available*
:::

[]{#askPrefix}

`askPrefix`

[actor.t](../file/actor.t.html)\[[6707](../source/actor.t.html#6707)\]

::: desc
*no description available*
:::

[]{#commandList}

`commandList`

[actor.t](../file/actor.t.html)\[[6690](../source/actor.t.html#6690)\]

::: desc
*no description available*
:::

[]{#giveList}

`giveList`

[actor.t](../file/actor.t.html)\[[6685](../source/actor.t.html#6685)\]

::: desc
*no description available*
:::

[]{#givePrefix}

`givePrefix`

[actor.t](../file/actor.t.html)\[[6710](../source/actor.t.html#6710)\]

::: desc
*no description available*
:::

[]{#hyperlinkSuggestions}

`hyperlinkSuggestions`

[actor.t](../file/actor.t.html)\[[6648](../source/actor.t.html#6648)\]

::: desc
Do we want the topic suggestions to be hyperlinked so that the player
can just click on them? By default we don\'t but game code can override/
:::

[]{#noList}

`noList`

[actor.t](../file/actor.t.html)\[[6688](../source/actor.t.html#6688)\]

::: desc
*no description available*
:::

[]{#orListSep}

`orListSep`

[actor.t](../file/actor.t.html)\[[6716](../source/actor.t.html#6716)\]

::: desc
The conjunction to use at the end of a list of alternatives
:::

[]{#queryList}

`queryList`

[actor.t](../file/actor.t.html)\[[6681](../source/actor.t.html#6681)\]

::: desc
*no description available*
:::

[]{#queryPrefix}

`queryPrefix`

[actor.t](../file/actor.t.html)\[[6706](../source/actor.t.html#6706)\]

::: desc
*no description available*
:::

[]{#sayList}

`sayList`

[actor.t](../file/actor.t.html)\[[6680](../source/actor.t.html#6680)\]

::: desc
Sublists of each kind of suggestion which can be listed in turn
:::

[]{#sayPrefix}

`sayPrefix`

[actor.t](../file/actor.t.html)\[[6705](../source/actor.t.html#6705)\]

::: desc
The prefix to use when suggesting a SayTopic, if it explicitly wants the
suggestion to start with \'say\'.
:::

[]{#showPrefix}

`showPrefix`

[actor.t](../file/actor.t.html)\[[6711](../source/actor.t.html#6711)\]

::: desc
*no description available*
:::

[]{#showToList}

`showToList`

[actor.t](../file/actor.t.html)\[[6686](../source/actor.t.html#6686)\]

::: desc
*no description available*
:::

[]{#talkList}

`talkList`

[actor.t](../file/actor.t.html)\[[6684](../source/actor.t.html#6684)\]

::: desc
*no description available*
:::

[]{#talkPrefix}

`talkPrefix`

[actor.t](../file/actor.t.html)\[[6709](../source/actor.t.html#6709)\]

::: desc
*no description available*
:::

[]{#tellList}

`tellList`

[actor.t](../file/actor.t.html)\[[6683](../source/actor.t.html#6683)\]

::: desc
*no description available*
:::

[]{#tellPrefix}

`tellPrefix`

[actor.t](../file/actor.t.html)\[[6708](../source/actor.t.html#6708)\]

::: desc
*no description available*
:::

[]{#tellToPrefix}

`tellToPrefix`

[actor.t](../file/actor.t.html)\[[6713](../source/actor.t.html#6713)\]

::: desc
*no description available*
:::

[]{#typeInfo}

`typeInfo`

[actor.t](../file/actor.t.html)\[[6663](../source/actor.t.html#6663)\]

::: desc
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
:::

[]{#yesList}

`yesList`

[actor.t](../file/actor.t.html)\[[6687](../source/actor.t.html#6687)\]

::: desc
*no description available*
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#includes}

`includes (t, prop)`

[actor.t](../file/actor.t.html)\[[6696](../source/actor.t.html#6696)\]

::: desc
Test whether the topicEntry t includes prop in its includeInList.
:::

[]{#show}

`show (lst, explicit, =, true)`

[actor.t](../file/actor.t.html)\[[6467](../source/actor.t.html#6467)\]

::: desc
*no description available*
:::

[]{#showList}

`showList (lst, sectionIntro)`

[actor.t](../file/actor.t.html)\[[6608](../source/actor.t.html#6608)\]

::: desc
Show one of our sublists of particular kinds of suggest topics
:::

[]{#showListEmpty}

`showListEmpty (explicit)`

[actor.t](../file/actor.t.html)\[[6458](../source/actor.t.html#6458)\]

::: desc
The message to display if there are no topics to suggest.
:::

[]{#showListPrefix}

`showListPrefix (lst, pl, explicit)`

[actor.t](../file/actor.t.html)\[[6425](../source/actor.t.html#6425)\]

::: desc
Introduce the topic inventory listing
:::

[]{#showListSuffix}

`showListSuffix (lst, pl, explicit)`

[actor.t](../file/actor.t.html)\[[6444](../source/actor.t.html#6444)\]

::: desc
End the list with a closing parenthesis or full stop as appropriate
:::

[]{#showSection}

`showSection (prop, listStarted, sectionIntro)`

[actor.t](../file/actor.t.html)\[[6580](../source/actor.t.html#6580)\]

::: desc
Finish the list by appending its suffix
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
