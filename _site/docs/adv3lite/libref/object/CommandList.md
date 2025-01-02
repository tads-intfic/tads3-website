<span class="title">CommandList</span><span class="type">class</span>

[parser.t](../file/parser.t.html)\[[823](../source/parser.t.html#823)\]

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

A CommandList is a set of potential parsings for a given input with a
given grammar.

`class `**`CommandList`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`CommandList`**  
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

` `[`cmd`](#cmd)`  `[`cmdLst`](#cmdLst)`  `[`curable`](#curable)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`acceptAny`](#acceptAny)`  `[`acceptCurable`](#acceptCurable)`  `[`construct`](#construct)`  `[`getBestCmd`](#getBestCmd)`  `[`getResErr`](#getResErr)`  `[`length`](#length)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="cmd"></span>

`cmd`

[parser.t](../file/parser.t.html)\[[1002](../source/parser.t.html#1002)\]

<div class="desc">

Our resolved Command. This is the first parsing in our list that (in
priority order) we were able to resolve with no errors.

</div>

<span id="cmdLst"></span>

`cmdLst`

[parser.t](../file/parser.t.html)\[[996](../source/parser.t.html#996)\]

<div class="desc">

our list of Command objects

</div>

<span id="curable"></span>

`curable`

[parser.t](../file/parser.t.html)\[[1009](../source/parser.t.html#1009)\]

<div class="desc">

Our semi-resolved Command. When we can't find a command that resolves
without errors, we'll set this to the first one (in priority order) that
resolves with a curable error.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="acceptAny"></span>

`acceptAny ( )`

[parser.t](../file/parser.t.html)\[[945](../source/parser.t.html#945)\]

<div class="desc">

Accept ANY command, with or without a resolution error, curable or not.
We'll take the error-free resolution if we have one, otherwise the
resolution with a curable error, otherwise just the first parsing in
priority order.

</div>

<span id="acceptCurable"></span>

`acceptCurable ( )`

[parser.t](../file/parser.t.html)\[[929](../source/parser.t.html#929)\]

<div class="desc">

Accept a curable resolution as the actual resolution. If we don't have
an error-free resolution, we'll set 'cmd' to the curable resolution.
Returns true if we have any resolution, nil if not.

</div>

<span id="construct"></span>

`construct ([args])`

[parser.t](../file/parser.t.html)\[[834](../source/parser.t.html#834)\]

<div class="desc">

new CommandList(prod, toks, dict, wrapper) - construct a new CommandList
object by parsing an input token list. 'prod' is the GrammarProd to
parse against; 'toks' is the token list; 'dict' is the main parser
dictionary; 'wrapper' is a callback function that maps a parse tree to a
Command object.

new CommandList(Command) - construct a CommandList containing a single
pre-resolved Command object.

</div>

<span id="getBestCmd"></span>

`getBestCmd ( )`

[parser.t](../file/parser.t.html)\[[957](../source/parser.t.html#957)\]

<div class="desc">

Get the most promising command from the available parsings. This returns
the first successfully resolved command in priority order, if any;
otherwise the first command with a curable error, if any; otherwise the
first command in priority order.

</div>

<span id="getResErr"></span>

`getResErr ( )`

[parser.t](../file/parser.t.html)\[[980](../source/parser.t.html#980)\]

<div class="desc">

Get the resolution error, if any. If we parsed but didn't resolve, this
returns the error from the first parsing in priority order.

</div>

<span id="length"></span>

`length ( )`

[parser.t](../file/parser.t.html)\[[922](../source/parser.t.html#922)\]

<div class="desc">

number of parsings in the list

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
