[StackFrameDesc]{.title}[class]{.type}

[systype.h](../file/systype.h.html)\[[1248](../source/systype.h.html#1248)\]

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
StackFrameDesc intrinsic class. This class provides access to a stack
frame. It lets us retrieve the values of local variables and method
context variables (self, definingobj, targetobj, targetprop). It also
allows us to assign new values to local variables.

To get the value of a local variable in the frame, simply use
frame\[name\], where \'frame\' is the StackFrameDesc object for the
frame, and \'name\' is a string giving the name of the local variable to
retrieve. If the frame is active, this retrieves the live value of the
variable from the frame; otherwise it retrieves the value from a
snapshot containing the last value before the routine returned to its
caller.

To assign a new value to a local in the frame, assign a value to
frame\[name\] for the desired variable name. If the frame is active,
this updates the live variable in the stack frame, so when execution
returns to the caller the variable will have the new value. If the frame
is inactive, it updates the snapshot we made when the routine returned
to its caller.

This object can\'t be created with \'new\'. Instead, you obtain these
objects via the t3GetStackTrace() function. That function retrieves
information on an active stack frame in the current call stack,
including the frame object.

`intrinsic class `**`StackFrameDesc`**` : `
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`StackFrameDesc`**\
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

` `

*(none)* []{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`getDefiningObj`](#getDefiningObj)`  `[`getInvokee`](#getInvokee)`  `[`getSelf`](#getSelf)`  `[`getTargetObj`](#getTargetObj)`  `[`getTargetProp`](#getTargetProp)`  `[`getVars`](#getVars)`  `[`isActive`](#isActive)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

*(none)* []{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#getDefiningObj}

`getDefiningObj ( )`

[systype.h](../file/systype.h.html)\[[1293](../source/systype.h.html#1293)\]

::: desc
Get the value of \'definingobj\' in this frame.
:::

[]{#getInvokee}

`getInvokee ( )`

[systype.h](../file/systype.h.html)\[[1308](../source/systype.h.html#1308)\]

::: desc
Get the value of \'invokee\' in this frame.
:::

[]{#getSelf}

`getSelf ( )`

[systype.h](../file/systype.h.html)\[[1288](../source/systype.h.html#1288)\]

::: desc
Get the value of \'self\' in this frame.
:::

[]{#getTargetObj}

`getTargetObj ( )`

[systype.h](../file/systype.h.html)\[[1298](../source/systype.h.html#1298)\]

::: desc
Get the value of \'targetobj\' in this frame.
:::

[]{#getTargetProp}

`getTargetProp ( )`

[systype.h](../file/systype.h.html)\[[1303](../source/systype.h.html#1303)\]

::: desc
Get the value of \'targetprop\' in this frame.
:::

[]{#getVars}

`getVars ( )`

[systype.h](../file/systype.h.html)\[[1283](../source/systype.h.html#1283)\]

::: desc
Get a LookupTable consisting of all of the variables (local variables
and parameters) in the frame. Each element in the table is keyed by the
name of a variable, and contains the current value of the variable.

The returned lookup table is a snapshot copy of the current values of
the variables. If the underlying variable values in the frame change,
the lookup table won\'t be affected, since it\'s just a separate copy
made at the moment this routine is called. Similarly, changing the value
of an entry in the returned lookup table won\'t affect the actual
variable in the stack frame.

To retrieve the current live value of a variable in the actual stack
frame, use frame\[name\], where \'frame\' is the StackFrameDesc object
for the frame, and \'name\' is a string giving the variable name.
:::

[]{#isActive}

`isActive ( )`

[systype.h](../file/systype.h.html)\[[1264](../source/systype.h.html#1264)\]

::: desc
Is the stack frame active? A stack frame is active until the function or
method it represents returns to its caller. When the routine returns,
the frame becomes inactive.

When the routine is about to return (so the frame is about to become
inacive), the StackFrameDesc object makes a private snapshot of the
variables in the frame. Subsequent access to the locals will
automatically use the snapshot copy, so you can continue to access the
locals as normal without worrying about whether or not the actual stack
frame still exists. This allows you to continue to access and modify the
values of the variables after the routine has exited.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::