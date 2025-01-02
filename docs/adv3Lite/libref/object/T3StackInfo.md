---
layout: docs
---
<span class="title">T3StackInfo</span><span class="type">class</span>

[\_main.t](../file/_main.t.html)\[[1003](../source/_main.t.html#1003)\]

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

<div class="fdesc">

The stack information object. The intrinsic function t3GetStackTrace()
in the 't3vm' function set returns a list of these objects; each object
represents a level in the stack trace.

`class `**`T3StackInfo`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`T3StackInfo`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`argList_`](#argList_)`  `[`frameDesc_`](#frameDesc_)`  `[`func_`](#func_)`  `[`locals_`](#locals_)`  `[`namedArgs_`](#namedArgs_)`  `[`obj_`](#obj_)`  `[`prop_`](#prop_)`  `[`self_`](#self_)`  `[`srcInfo_`](#srcInfo_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `[`isSystem`](#isSystem)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="argList_"></span>

`argList_`

[\_main.t](../file/_main.t.html)\[[1072](../source/_main.t.html#1072)\]

<div class="desc">

The list of positional arguments to the function or method. Each element
is the value of an argument; the list is arranged in the same order as
the arguments.

</div>

<span id="frameDesc_"></span>

`frameDesc_`

[\_main.t](../file/_main.t.html)\[[1122](../source/_main.t.html#1122)\]

<div class="desc">

A StackFrameDesc object that can be used to get information from the
frame and change local variables in the frame.

</div>

<span id="func_"></span>

`func_`

[\_main.t](../file/_main.t.html)\[[1049](../source/_main.t.html#1049)\]

<div class="desc">

the function running at this stack level - this is nil if an object
property is running instead of a function

</div>

<span id="locals_"></span>

`locals_`

[\_main.t](../file/_main.t.html)\[[1085](../source/_main.t.html#1085)\]

<div class="desc">

Local variables. This is a LookupTable containing the local variables
currently in scope at this stack level. Each element in the table has a
string key (index) giving the name of the local variable, and each
corresponding value is the local's current value. The table is only
included when the stack listing was produced by a call to
t3GetStackTrace() with the T3GetStackLocals flag set; otherwise it's
nil. If the locals were requested, and the stack level has no local
variables, this will be an empty lookup table.

</div>

<span id="namedArgs_"></span>

`namedArgs_`

[\_main.t](../file/_main.t.html)\[[1094](../source/_main.t.html#1094)\]

<div class="desc">

Named arguments. This is a LookupTable containing the named arguments
passed in from this stack level. Each element in the table has a string
key (index) giving the name of the argument, and each corresponding
value is the value of that argument. If there are no named arguments,
this value is nil.

</div>

<span id="obj_"></span>

`obj_`

[\_main.t](../file/_main.t.html)\[[1058](../source/_main.t.html#1058)\]

<div class="desc">

The object and property running at this stack level - these are nil if a
function is running instead of an object method. The object is the
object where the method is actually defined - this might not be the same
as self, because the object might have inherited the method from a base
class.

</div>

<span id="prop_"></span>

`prop_`

[\_main.t](../file/_main.t.html)\[[1059](../source/_main.t.html#1059)\]

<div class="desc">

*no description available*

</div>

<span id="self_"></span>

`self_`

[\_main.t](../file/_main.t.html)\[[1065](../source/_main.t.html#1065)\]

<div class="desc">

the 'self' object at this level - this is nil if a function is running
at this level instead of an object method

</div>

<span id="srcInfo_"></span>

`srcInfo_`

[\_main.t](../file/_main.t.html)\[[1116](../source/_main.t.html#1116)\]

<div class="desc">

The source location of the next code to be executed in the function or
method in this frame. If source-level debugging information is available
for the current execution point in this frame, this will contain a list
of two values:

srcInfo\_\[1\] = string giving the name of the source file  
srcInfo\_\[2\] = integer giving the line number in the source file

If the program wasn't compiled with source-level debugging information,
or the current code location in the frame doesn't have any source
information, this will be set to nil.

Note that the location reflected here is the \*return address\* in this
frame - that is, the code location that will be executed when control
returns to the frame. This means that the source location will
frequently appear as the next executable line after the one that called
the next inner frame, because this is where execution will resume when
control returns to the frame.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (func, obj, prop, selfObj, argList, srcInfo, locals, namedArgs, frameDesc)`

[\_main.t](../file/_main.t.html)\[[1008](../source/_main.t.html#1008)\]

<div class="desc">

Construct a stack level object. The system invokes this constructor with
information on the stack level.

</div>

<span id="isSystem"></span>

`isSystem ( )`

[\_main.t](../file/_main.t.html)\[[1027](../source/_main.t.html#1027)\]

<div class="desc">

Is this a system routine? This returns true if an intrinsic function or
an intrinsic class method is running at this level.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
