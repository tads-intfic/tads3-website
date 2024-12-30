[messages.t]{.title}[file]{.type}

[source file](../source/messages.t.html)

**Classes**\
[Summary](#_ClassSummary_)\
 

**Objects**\
[Summary](#_ObjectSummary_)\
 

**Functions**\
[Summary](#_FunctionSummary_)\
[Details](#_Functions_)

::: fdesc
\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
messages.t

This module forms part of the adv3Lite library (c) 2012-13 Eric Eve, but
is based substantially on the Mercury Library (c) 2012 Michael J.
Roberts
:::

[]{#_ClassSummary_}

::: mjhd
[Summary of Classes]{.hdln}  
:::

` `[`CustomMessages`](../object/CustomMessages.html)`  `[`MessageCtx`](../object/MessageCtx.html)`  `[`MessageParams`](../object/MessageParams.html)`  `[`VerbTense`](../object/VerbTense.html)`  `
[]{#_ObjectSummary_}

::: mjhd
[Summary of Global Objects]{.hdln}  
:::

` `[`dummy_`](../object/dummy_.html)`  `[`Future`](../object/Future.html)`  `[`FuturePerfect`](../object/FuturePerfect.html)`  `[`messageDummyCommand`](../object/messageDummyCommand.html)`  `[`Narrator`](../object/Narrator.html)`  `[`Past`](../object/Past.html)`  `[`PastPerfect`](../object/PastPerfect.html)`  `[`Perfect`](../object/Perfect.html)`  `[`pluralDummy_`](../object/pluralDummy_.html)`  `[`Present`](../object/Present.html)`  `
[]{#FunctionSummary_}

::: mjhd
[Summary of Global Functions]{.hdln}  
:::

` `[`bmsg`](#bmsg)`  `[`buildMessage`](#buildMessage)`  `[`debugMessage`](#debugMessage)`  `[`dmsg`](#dmsg)`  `[`message`](#message)`  `

[]{#_Functions_}

::: mjhd
[Global Functions]{.hdln}  
:::

[]{#bmsg}

`bmsg (txt, [args])`

[messages.t](../file/messages.t.html)\[[799](../source/messages.t.html#799)\]

::: desc
bmsg returns the text of a message formatted by the message formatter.
:::

[]{#buildMessage}

`buildMessage (id, txt, [args])`

[messages.t](../file/messages.t.html)\[[133](../source/messages.t.html#133)\]

::: desc
Build a message to be shown by message()

We put this in a separate function to make it easy to obtain the text of
a message for subsequent use without first displaying it.
:::

[]{#debugMessage}

`debugMessage (id, txt, cm, args)`

[messages.t](../file/messages.t.html)\[[364](../source/messages.t.html#364)\]

::: desc
Message debugging. This shows the message before processing: the ID, the
default source text with the {\...} parameters, the overriding custom
source text, and the arguments.
:::

[]{#dmsg}

`dmsg (txt, [args])`

[messages.t](../file/messages.t.html)\[[792](../source/messages.t.html#792)\]

::: desc
Use the message builder to format a message without supplying a key to
look up at alternative message. We can use this with library messages
that employ object properties (e.g. cannotTakeMsg) or user code.

dmsg() displays the resultant message.
:::

[]{#message}

`message (id, txt, [args])`

[messages.t](../file/messages.t.html)\[[114](../source/messages.t.html#114)\]

::: desc
Show a message.

This looks for a customized version of the message text, as defined in
CustomMessages objects. If we don\'t find one, we use the provided
default message text.

Substitution parameters take the form {x y z} - curly braces with one or
more space-delimited tokens. The first token is the parameter name, and
any additional tokens are arguments. The parameter names and their
arguments are up to the language module to define.

In addition to the parameters, the string itself can have two sections,
separated by a vertical bar, \'\|\'. The first section (before the bar)
is the \"terse\" string, which is for a straightforward acknowledgment
of a simple, ordinary action: \"Taken\", \"Dropped\", etc. The terse
string is used only if the Command argument\'s actor is the player
character, AND the command doesn\'t have any disambiguated objects. If
these conditions aren\'t met, the second half of the string, the
\"verbose\" version, is used.

Once we have the message text, we perform parameter substitutions.
Parameters can be provided as strings, which are substituted in
literally; or as objects, whose names are inserted according to the
grammar in the template text.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
