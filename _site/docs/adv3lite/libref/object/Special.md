<span class="title">Special</span><span class="type">class</span>

[query.t](../file/query.t.html)\[[565](../source/query.t.html#565)\]

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

A Special defines a set of custom overrides to standard Query questions
that apply under specific conditions.

At any given time, a Special is either active or inactive. This is
determined by the active() method.

`class `**`Special`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`Special`**  
`         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

` `[`commLink`](../object/commLink.html)`  `[`QDefaults`](../object/QDefaults.html)`  `[`QSenseRegion`](../object/QSenseRegion.html)`  `[`QViewport`](../object/QViewport.html)`  `
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`active`](#active)`  `[`all`](#all)`  `[`allActive_`](#allActive_)`  `[`priority`](#priority)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`allActive`](#allActive)`  `[`classInit`](#classInit)`  `[`first`](#first)`  `[`next`](#next)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="active"></span>

`active`

[query.t](../file/query.t.html)\[[570](../source/query.t.html#570)\]

<div class="desc">

Am I active? Each instance should override this to define the conditions
that activate the Special.

</div>

<span id="all"></span>

`all`

[query.t](../file/query.t.html)\[[711](../source/query.t.html#711)\]

<div class="desc">

Class property: the list of all Special objects throughout the game.
This is set up during preinit.

</div>

<span id="allActive_"></span>

`allActive_`

[query.t](../file/query.t.html)\[[685](../source/query.t.html#685)\]

<div class="desc">

Class property: cache of all currently active Specials. This is set
whenever someone asks for the list and it's not available, and is
cleared whenever an Effect modifies the game state. (Callers shouldn't
access this directly - this is an internal cache. Use the allActive()
method instead.)

</div>

<span id="priority"></span>

`priority`

[query.t](../file/query.t.html)\[[607](../source/query.t.html#607)\]

<div class="desc">

My priority. This is an integer value that determines which Special
takes precedence when two or more Specials are active at the same time,
and they both/all define a given query method. In such a situation, Q
calls the active Specials in ascending priority order (lowest first,
highest last), and takes the last one's answer as the true answer to the
question. This means that the Special with the highest priority takes
precedence, and can override any lower-ranking Special that's active at
the same time.

The library uses the following special priority values:

0 = the basic library defaults. The defaults must have the lowest
priority, meaning that all Special objects defined by a game or
extension must use priorities higher than 0.

Other than the special priorities listed above, the priority is simply a
relative ordering, so games and extensions can use whatever range of
values they like.

Note that priorities can't change while running. This is a permanent
feature of the object. We take advantage of this to avoid re-sorting the
active list every time we build it. We sort the master list at
initialization and assume it stays sorted, so that any subset is
inherently sorted. If it's important to the game to dynamically change
priorities, you just need to re-sort the allActive\_ list at appropriate
times. If priorities can only change when the game-world state changes,
you can simply sort the list in allActive() each time it's rebuilt. If
priorities can change at other times (which doesn't seem like it'd be
useful, but just in case), you'd need to re-sort the list on every call
to allActive(), even when the list isn't rebuilt.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="allActive"></span>

`allActive ( )`

[query.t](../file/query.t.html)\[[666](../source/query.t.html#666)\]

<div class="desc">

Class method: get the list of active Specials.

</div>

<span id="classInit"></span>

`classInit ( )`

[query.t](../file/query.t.html)\[[688](../source/query.t.html#688)\]

<div class="desc">

during initialization, build the list of all Specials

</div>

<span id="first"></span>

`first (prop)`

[query.t](../file/query.t.html)\[[644](../source/query.t.html#644)\]

<div class="desc">

Get the first active Special (the one with the highest priority) that
defines the given method. This is used by the Q query methods to invoke
the correct current Special version of the method.

</div>

<span id="next"></span>

`next ( )`

[query.t](../file/query.t.html)\[[621](../source/query.t.html#621)\]

<div class="desc">

Call the same method in the next lower priority Special. This can be
used in any Special query method to invoke the "default" version that
would have been used if the current Special had not been active.

This is analogous to using 'inherited' to inherit the superclass version
of a method from an overriding version in a subclass. As with
'inherited', you can only call this directly from the method that you
want to pass to the default handling, because this routine determines
what to call based on the caller.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
