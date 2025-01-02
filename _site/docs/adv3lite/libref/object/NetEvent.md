<span class="title">NetEvent</span><span class="type">class</span>

[tadsnet.t](../file/tadsnet.t.html)\[[39](../source/tadsnet.t.html#39)\]

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

A NetEvent instance describes an event read via the getNetEvent()
function.

In most cases, this base class will not be instantiated directly.
getNetEvent() will always construct the appropriate subclass for the
specific type of event being generated, if that subclass is defined in
the game program. However, it's possible that the game won't define all
necessary subclasses. For example, a game written for version 1 of the
networking package wouldn't include new subclasses added in version 2,
because those subclasses weren't defined at the time the game was
written. When getNetEvent() needs to instantiate a subclass that isn't
defined in the game program, it will instead create a base NetEvent
object, which will simply store the subclass-specific arguments as a
list. This could be useful for debugging purposes, because it will at
least let the programmer inspect the event details with the interactive
debugger.

`class `**`NetEvent`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`NetEvent`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`NetEvent`**  
`         `[`NetReplyDoneEvent`](../object/NetReplyDoneEvent.html)  
`         `[`NetReplyEvent`](../object/NetReplyEvent.html)  
`         `[`NetRequestEvent`](../object/NetRequestEvent.html)  
`         `[`NetTimeoutEvent`](../object/NetTimeoutEvent.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`evArgs`](#evArgs)`  `[`evType`](#evType)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`construct`](#construct)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="evArgs"></span>

`evArgs`

[tadsnet.t](../file/tadsnet.t.html)\[[66](../source/tadsnet.t.html#66)\]

<div class="desc">

Extra event-specific arguments. This is primarily for debugging
purposes, since it's only used when getNetEvent() needs to construct a
NetEvent subclass that isn't defined in the game. In this case, the
absence of a subclass definition in the game presumably means that the
game isn't written to handle the type of event generated (for example,
because it was written for an older interpreter version that didn't have
the event type).

</div>

<span id="evType"></span>

`evType`

[tadsnet.t](../file/tadsnet.t.html)\[[44](../source/tadsnet.t.html#44)\]

<div class="desc">

The event type. This is a NetEvXxx value (see tadsnet.h) indicating
which type of event this is.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="construct"></span>

`construct (t, [args])`

[tadsnet.t](../file/tadsnet.t.html)\[[51](../source/tadsnet.t.html#51)\]

<div class="desc">

Construction. getNetEvent() only constructs this object directly when
the subclass it's looking for isn't defined in the game program.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
