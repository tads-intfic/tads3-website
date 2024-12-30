[SensoryEvent]{.title}[class]{.type}

[sensory.t](../file/sensory.t.html)\[[443](../source/sensory.t.html#443)\]

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
A SensoryEvent is a brief event in time, such as a sudden noise, to
which other actors or objects in the vicinity may react. \[DEFINED IN
SENSORY EXTENSION\]

`class `**`SensoryEvent`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`SensoryEvent`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`SensoryEvent`**\
`         `[`SightEvent`](../object/SightEvent.html)\
`         `[`SmellEvent`](../object/SmellEvent.html)\
`         `[`SoundEvent`](../object/SoundEvent.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`notifyProp`](#notifyProp)`  `[`remoteProp`](#remoteProp)`  `[`senseProp`](#senseProp)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`remoteList`](#remoteList)`  `[`triggerEvent`](#triggerEvent)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#notifyProp}

`notifyProp`

[sensory.t](../file/sensory.t.html)\[[484](../source/sensory.t.html#484)\]

::: desc
A property pointer to the property on each notified object that needs to
be executed when it\'s notified of this SensoryEvent (e.g.
&notifySoundEvent). \[DEFINED IN SENSORY EXTENSION\]
:::

[]{#remoteProp}

`remoteProp`

[sensory.t](../file/sensory.t.html)\[[498](../source/sensory.t.html#498)\]

::: desc
The property pointer to the property of Room defining which list of
rooms also needs to be checked for remote items that might sense this
event (e.g. &audibleRooms). \[DEFINED IN SENSORY EXTENSION\]
:::

[]{#senseProp}

`senseProp`

[sensory.t](../file/sensory.t.html)\[[491](../source/sensory.t.html#491)\]

::: desc
The property pointer relating to the Q method that needs to be called to
determined whethet this SensoryEvent can be sensed (e.g. &canHear).
\[DEFINED IN SENSORY EXTENSION\]
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#remoteList}

`remoteList (obj)`

[sensory.t](../file/sensory.t.html)\[[501](../source/sensory.t.html#501)\]

::: desc
Construct a list of notifiable objects in remote locations \[DEFINED IN
SENSORY EXTENSION\]
:::

[]{#triggerEvent}

`triggerEvent (obj)`

[sensory.t](../file/sensory.t.html)\[[450](../source/sensory.t.html#450)\]

::: desc
We call the trigger event method of a SensoryEvent to simulate the
occurrence of that event. The obj parameter is the object associated
with the event, for example the source of a sudden explosion. \[DEFINED
IN SENSORY EXTENSION\]
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
