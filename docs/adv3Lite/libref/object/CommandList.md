---
layout: docs
---
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



A CommandList is a set of potential parsings for a given input with a
given grammar.

`class `**`CommandList`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`CommandList`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`cmd`](#cmd) [`cmdLst`](#cmdLst) [`curable`](#curable)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`acceptAny`](#acceptAny) [`acceptCurable`](#acceptCurable) [`construct`](#construct) [`getBestCmd`](#getBestCmd) [`getResErr`](#getResErr) [`length`](#length)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="cmd"></span>

`cmd`

[parser.t](../file/parser.t.html)\[[1002](../source/parser.t.html#1002)\]



Our resolved Command. This is the first parsing in our list that (in
priority order) we were able to resolve with no errors.



<span id="cmdLst"></span>

`cmdLst`

[parser.t](../file/parser.t.html)\[[996](../source/parser.t.html#996)\]



our list of Command objects



<span id="curable"></span>

`curable`

[parser.t](../file/parser.t.html)\[[1009](../source/parser.t.html#1009)\]



Our semi-resolved Command. When we can't find a command that resolves
without errors, we'll set this to the first one (in priority order) that
resolves with a curable error.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="acceptAny"></span>

`acceptAny ( )`

[parser.t](../file/parser.t.html)\[[945](../source/parser.t.html#945)\]



Accept ANY command, with or without a resolution error, curable or not.
We'll take the error-free resolution if we have one, otherwise the
resolution with a curable error, otherwise just the first parsing in
priority order.



<span id="acceptCurable"></span>

`acceptCurable ( )`

[parser.t](../file/parser.t.html)\[[929](../source/parser.t.html#929)\]



Accept a curable resolution as the actual resolution. If we don't have
an error-free resolution, we'll set 'cmd' to the curable resolution.
Returns true if we have any resolution, nil if not.



<span id="construct"></span>

`construct ([args])`

[parser.t](../file/parser.t.html)\[[834](../source/parser.t.html#834)\]



new CommandList(prod, toks, dict, wrapper) - construct a new CommandList
object by parsing an input token list. 'prod' is the GrammarProd to
parse against; 'toks' is the token list; 'dict' is the main parser
dictionary; 'wrapper' is a callback function that maps a parse tree to a
Command object.

new CommandList(Command) - construct a CommandList containing a single
pre-resolved Command object.



<span id="getBestCmd"></span>

`getBestCmd ( )`

[parser.t](../file/parser.t.html)\[[957](../source/parser.t.html#957)\]



Get the most promising command from the available parsings. This returns
the first successfully resolved command in priority order, if any;
otherwise the first command with a curable error, if any; otherwise the
first command in priority order.



<span id="getResErr"></span>

`getResErr ( )`

[parser.t](../file/parser.t.html)\[[980](../source/parser.t.html#980)\]



Get the resolution error, if any. If we parsed but didn't resolve, this
returns the error from the first parsing in priority order.



<span id="length"></span>

`length ( )`

[parser.t](../file/parser.t.html)\[[922](../source/parser.t.html#922)\]



number of parsings in the list
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


