[PreCondition]{.title}[class]{.type}

[precond.t](../file/precond.t.html)\[[20](../source/precond.t.html#20)\]

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
A PreCondition encapsulate a condition that must be fulfilled in order
for an action to be fulfilled (e.g. a container must be open before we
can put anything in it). A PreCondition may also try to bring about the
fulfilment of the condition it enforces via an implicit action.

`class `**`PreCondition`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`PreCondition`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`PreCondition`**\
`         `[`ObjectPreCondition`](../object/ObjectPreCondition.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`actorInStagingLocation`](../object/actorInStagingLocation.html)`  `[`actorOutOfNested`](../object/actorOutOfNested.html)`  `[`containerOpen`](../object/containerOpen.html)`  `[`objAudible`](../object/objAudible.html)`  `[`objClosed`](../object/objClosed.html)`  `[`objDetached`](../object/objDetached.html)`  `[`objHeld`](../object/objHeld.html)`  `[`objNotWorn`](../object/objNotWorn.html)`  `[`objOpen`](../object/objOpen.html)`  `[`objSmellable`](../object/objSmellable.html)`  `[`objUnlocked`](../object/objUnlocked.html)`  `[`objVisible`](../object/objVisible.html)`  `[`touchObj`](../object/touchObj.html)`  `[`travelPermitted`](../object/travelPermitted.html)`  `
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`preCondOrder`](#preCondOrder)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`checkPreCondition`](#checkPreCondition)`  `[`verifyPreCondition`](#verifyPreCondition)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#preCondOrder}

`preCondOrder`

[precond.t](../file/precond.t.html)\[[64](../source/precond.t.html#64)\]

::: desc
Precondition execution order. When we execute preconditions for a given
action, we\'ll sort the list of all applicable preconditions in
ascending execution order.

For the most part, the relative order of two preconditions is arbitrary.
In some unusual cases, though, the order is important, such as when
applying one precondition can destroy the conditions that the other
would try to create but not vice versa. When the order doesn\'t matter,
this can be left at the default setting.
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#checkPreCondition}

`checkPreCondition (obj, allowImplicit)`

[precond.t](../file/precond.t.html)\[[33](../source/precond.t.html#33)\]

::: desc
Check the condition on the given object (which may be nil, if this
condition doesn\'t apply specifically to one of the objects in the
command). If it is possible to meet the condition with an implicit
command, and allowImplicit is true, try to execute the command. If the
condition cannot be met, report a failure and return nil to terminate
the command.

If allowImplicit is nil, an implicit command may not be attempted. In
this case, if the condition is not met, we must simply report a failure
return nil to terminate the command.
:::

[]{#verifyPreCondition}

`verifyPreCondition (obj)`

[precond.t](../file/precond.t.html)\[[51](../source/precond.t.html#51)\]

::: desc
Verify the condition. This is called during the object verification step
so that the pre-condition can add verifications of its own. This can be
used, for example, to add likelihood to objects that already meet the
condition. Note that it is generally not desirable to report illogical
for conditions that checkPreCondition() enforces, because doing so will
prevent checkPreCondition() from ever being reached and thus will
prevent checkPreCondition() from attempting to carry out implicit
actions to meet the condition.

\'obj\' is the object being checked. Note that because this is called
during verification, the explicitly passed-in object must be used in the
check rather than the current object in the global current action.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
