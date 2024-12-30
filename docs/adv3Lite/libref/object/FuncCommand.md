[FuncCommand]{.title}[class]{.type}

[command.t](../file/command.t.html)\[[1403](../source/command.t.html#1403)\]

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
A FuncCommand is a special version of Command that carries out its
action via a custom callback function, rather than by executing a
regular Action. This can be used to create a simple one-off custom
command without having to create a separate Action for it.

`class `**`FuncCommand`**` :   `[`Command`](../object/Command.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`FuncCommand`**\
`         `[`Command`](../object/Command.html)\
`                 object`\
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

` `[`func`](#func)`  `

Inherited from `Command` :\
` `[`acc`](../object/Command.html#acc)`  `[`accInfo`](../object/Command.html#accInfo)`  `[`accNPs`](../object/Command.html#accNPs)`  `[`accs`](../object/Command.html#accs)`  `[`action`](../object/Command.html#action)`  `[`actions`](../object/Command.html#actions)`  `[`actor`](../object/Command.html#actor)`  `[`actorNPs`](../object/Command.html#actorNPs)`  `[`actorPerson`](../object/Command.html#actorPerson)`  `[`actors`](../object/Command.html#actors)`  `[`afterReports`](../object/Command.html#afterReports)`  `[`aobj`](../object/Command.html#aobj)`  `[`badMulti`](../object/Command.html#badMulti)`  `[`cmdErr`](../object/Command.html#cmdErr)`  `[`disambig`](../object/Command.html#disambig)`  `[`disambigIdx`](../object/Command.html#disambigIdx)`  `[`dobj`](../object/Command.html#dobj)`  `[`dobjInfo`](../object/Command.html#dobjInfo)`  `[`dobjNPs`](../object/Command.html#dobjNPs)`  `[`dobjs`](../object/Command.html#dobjs)`  `[`endOfSentence`](../object/Command.html#endOfSentence)`  `[`implicitActionReports`](../object/Command.html#implicitActionReports)`  `[`iobj`](../object/Command.html#iobj)`  `[`iobjInfo`](../object/Command.html#iobjInfo)`  `[`iobjNPs`](../object/Command.html#iobjNPs)`  `[`iobjs`](../object/Command.html#iobjs)`  `[`lastAction`](../object/Command.html#lastAction)`  `[`madeTopic`](../object/Command.html#madeTopic)`  `[`matchedAll`](../object/Command.html#matchedAll)`  `[`matchedMulti`](../object/Command.html#matchedMulti)`  `[`miscWordLists`](../object/Command.html#miscWordLists)`  `[`missingNouns`](../object/Command.html#missingNouns)`  `[`nextTokens`](../object/Command.html#nextTokens)`  `[`npList`](../object/Command.html#npList)`  `[`npListSorted`](../object/Command.html#npListSorted)`  `[`npToResolve`](../object/Command.html#npToResolve)`  `[`originalAction`](../object/Command.html#originalAction)`  `[`parseTree`](../object/Command.html#parseTree)`  `[`predActive`](../object/Command.html#predActive)`  `[`predPriority`](../object/Command.html#predPriority)`  `[`priority`](../object/Command.html#priority)`  `[`reflexiveAnte`](../object/Command.html#reflexiveAnte)`  `[`tokenLen`](../object/Command.html#tokenLen)`  `[`verbProd`](../object/Command.html#verbProd)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `

Inherited from `Command` :\
` `[`addDisambigNP`](../object/Command.html#addDisambigNP)`  `[`addNounListItem`](../object/Command.html#addNounListItem)`  `[`addNounProd`](../object/Command.html#addNounProd)`  `[`afterReport`](../object/Command.html#afterReport)`  `[`buildCommandString`](../object/Command.html#buildCommandString)`  `[`buildObjLists`](../object/Command.html#buildObjLists)`  `[`calcPriority`](../object/Command.html#calcPriority)`  `[`changeAction`](../object/Command.html#changeAction)`  `[`clone`](../object/Command.html#clone)`  `[`cloneNP`](../object/Command.html#cloneNP)`  `[`emptyNounRole`](../object/Command.html#emptyNounRole)`  `[`exec`](../object/Command.html#exec)`  `[`execCombos`](../object/Command.html#execCombos)`  `[`execDoer`](../object/Command.html#execDoer)`  `[`execIter`](../object/Command.html#execIter)`  `[`fetchDisambigReply`](../object/Command.html#fetchDisambigReply)`  `[`fixPriority`](../object/Command.html#fixPriority)`  `[`forEachNP`](../object/Command.html#forEachNP)`  `[`forEachObj`](../object/Command.html#forEachObj)`  `[`getCommandPhrase`](../object/Command.html#getCommandPhrase)`  `[`noteMiscWords`](../object/Command.html#noteMiscWords)`  `[`npTokenLen`](../object/Command.html#npTokenLen)`  `[`numNounSlots`](../object/Command.html#numNounSlots)`  `[`resolveNouns`](../object/Command.html#resolveNouns)`  `[`resolveReflexive`](../object/Command.html#resolveReflexive)`  `[`saveReflexiveAnte`](../object/Command.html#saveReflexiveAnte)`  `[`sortList`](../object/Command.html#sortList)`  `[`startDisambigReply`](../object/Command.html#startDisambigReply)`  `[`terseOK`](../object/Command.html#terseOK)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#func}

`func`

[command.t](../file/command.t.html)\[[1421](../source/command.t.html#1421)\]

::: desc
the callback function for carrying out our command action
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (prod, func)`[OVERRIDDEN]{.rem}

[command.t](../file/command.t.html)\[[1408](../source/command.t.html#1408)\]

::: desc
Create: provide the grammar match object, if any, and the callback
function to execute to carry out the command.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::