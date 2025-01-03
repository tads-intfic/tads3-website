---
layout: docs
---
<span class="title">MessageParams</span><span class="type">class</span>

[messages.t](../file/messages.t.html)\[[903](../source/messages.t.html#903)\]

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



Message Parameter Handler. This object defines and handles parameter
expansion for '{...}' strings in displayed messages.

The language module must provide one instance of this class. The name of
the instance doesn't matter - we'll find it at preinit time. The object
must provide the 'params' property giving the language-specific list of
substitution parameter names and handler functions.

`class `**`MessageParams`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`MessageParams`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`englishMessageParams`](../object/englishMessageParams.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`langObj`](#langObj) [`params`](#params) [`paramTab`](#paramTab)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`cmdInfo`](#cmdInfo) [`construct`](#construct) [`expand`](#expand) [`findStrParam`](#findStrParam)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="langObj"></span>

`langObj`

[messages.t](../file/messages.t.html)\[[1158](../source/messages.t.html#1158)\]



the language module's instance of the class



<span id="params"></span>

`params`

[messages.t](../file/messages.t.html)\[[980](../source/messages.t.html#980)\]



Parameter mapping list. This is a list of lists: \[name, func\], where
'name' is the parameter name (as a string), and 'func' is the expansion
handler function.

The parameter name must be all lower case. During expansion, we convert
the first space-delimited token within the {curly brace} parameter
string to lower case, then look for an entry in the list with the
matching parameter name. If we find an entry, we call its handler
function.

The handler function is a pointer to a function that takes two
arguments: func(params, ctx), where 'params' is the list of tokens
within the {curly braces} of the substitution string, as a list of
strings, where each string is a space-delimited token in the original
{curly brace} string; and 'ctx' is the MessageCtx object for the
expansion. The function returns a string giving the expansion of the
parameter.

The parameter list must be provided by the language module, since each
language's list of parameters and expansions will vary.



<span id="paramTab"></span>

`paramTab`

[messages.t](../file/messages.t.html)\[[1155](../source/messages.t.html#1155)\]



Parameter lookup table. This maps a parameter name to its handler
function.



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="cmdInfo"></span>

`cmdInfo (ctx, src, objProp, role)`

[messages.t](../file/messages.t.html)\[[1015](../source/messages.t.html#1015)\]



Some parameters expand to properties of objects involved in the command.
cmdInfo() makes it easier to define the expansion functions for such
parameters. We search the parameters for a Command object, and if we
find it, we retrieve a particular source object and evaluate a
particular property on the source object to get the result string.

For example, {the dobj} could be handled via cmdInfo('ctx, dobj',
&theName, vSubject): we find the current 'dobj' object in the Command,
then evaluate the &theName property on that object.

'ctx' is the MessageCtx object with the current sentence context.

'src' is the source object in the Command. This can be given as a
property pointer (&actor, say), in which case we simply evaluate that
property of the Command object (cmd.(src)) to get the source object. Or,
it can be a string giving a NounRole name (dobj, iobj, acc), in which
case we'll retrieve the current object for the noun role from the
Command. Or, it can be a string with a number, in which case we'll use
the number as an index into the argument list.

'objProp' is the property of the source object to evaluate to get the
expansion string.

'role' is vSubject if this is a noun phrase with subject usage (in most
languages, this is a noun phrase in the nominative case; in English this
is called subjective case). It's vObject for any other noun phrase role
(direct object, prepositional object, etc). If the role isn't clear from
the context (the case marking of the parameter, or the position), use
vAmbig to mark it as ambiguous.



<span id="construct"></span>

`construct ( )`

[messages.t](../file/messages.t.html)\[[1161](../source/messages.t.html#1161)\]



construction - build the lookup table



<span id="expand"></span>

`expand (ctx, params)`

[messages.t](../file/messages.t.html)\[[913](../source/messages.t.html#913)\]



Expand a parameter string. 'ctx' is a MessageCtx object with the current
sentence context. This contains the message expansion arguments
(ctx.args), the Command object from the arguments (ctx.cmd), and
information on the grammar elements of the sentence. 'params' is the
list of space-delimited tokens within the curly-brace parameter string.
Returns the string to substitute for the parameter in the message
output.



<span id="findStrParam"></span>

`findStrParam (src, role)`

[messages.t](../file/messages.t.html)\[[1086](../source/messages.t.html#1086)\]



if anything went wrong, return nil to indicate we failed to find an
expansion
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


