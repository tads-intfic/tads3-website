[OutputStream]{.title}[class]{.type}

[output.t](../file/output.t.html)\[[176](../source/output.t.html#176)\]

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
Output Stream. This class provides a stream-oriented interface to
displaying text on the console. \"Stream-oriented\" means that we write
text as a sequential string of characters.

Output streams are always transient, since they track the system user
interface in the interpreter. The interpreter does not save its UI state
with a saved position, so objects such as output streams that track the
UI state should not be saved either.

`class `**`OutputStream`**` :   `[`PreinitObject`](../object/PreinitObject.html)
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`OutputStream`**\
`         `[`PreinitObject`](../object/PreinitObject.html)\
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)\
`                         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`OutputStream`**\
`         `[`BannerOutputStream`](../object/BannerOutputStream.html)\
`         `[`LogConsole`](../object/LogConsole.html)\
`         `[`WebWinOutputStream`](../object/WebWinOutputStream.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

` `[`mainOutputStream`](../object/mainOutputStream.html)`  `[`menuOutputStream`](../object/menuOutputStream.html)`  `[`statusLeftOutputStream`](../object/statusLeftOutputStream.html)`  `[`statusRightOutputStream`](../object/statusRightOutputStream.html)`  `[`statusTagOutputStream`](../object/statusTagOutputStream.html)`  `
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`filterList_`](#filterList_)`  `[`justDidPara`](#justDidPara)`  `[`justDidParaSuppressor`](#justDidParaSuppressor)`  `[`myInputManager`](#myInputManager)`  `[`prefix`](#prefix)`  `

Inherited from `PreinitObject` :\
` `[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)`  `[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)`  `

Inherited from `ModuleExecObject` :\
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`addOutputFilter`](#addOutputFilter)`  `[`addOutputFilterBelow`](#addOutputFilterBelow)`  `[`applyFilters`](#applyFilters)`  `[`applyTextFilters`](#applyTextFilters)`  `[`captureOutput`](#captureOutput)`  `[`captureOutputIgnoreExit`](#captureOutputIgnoreExit)`  `[`construct`](#construct)`  `[`execute`](#execute)`  `[`inputLineEnd`](#inputLineEnd)`  `[`removeOutputFilter`](#removeOutputFilter)`  `[`setPrefix`](#setPrefix)`  `[`watchForOutput`](#watchForOutput)`  `[`writeFromStream`](#writeFromStream)`  `[`writeToStream`](#writeToStream)`  `

` `

Inherited from `ModuleExecObject` :\
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#filterList_}

`filterList_`

[output.t](../file/output.t.html)\[[393](../source/output.t.html#393)\]

::: desc
The list of active filters on this stream, in the order in which they
are to be called. This should normally be initialized to a Vector in
each instance.
:::

[]{#justDidPara}

`justDidPara`

[output.t](../file/output.t.html)\[[513](../source/output.t.html#513)\]

::: desc
Internal state: we just wrote a paragraph break, and there has not yet
been any intervening text. By default, we set this to true initially, so
that we suppress any paragraph breaks at the very start of the text.
:::

[]{#justDidParaSuppressor}

`justDidParaSuppressor`

[output.t](../file/output.t.html)\[[521](../source/output.t.html#521)\]

::: desc
Internal state: we just wrote a character that suppresses paragraph
breaks that immediately follow. In this state, we\'ll suppress any
paragraph marker that immediately follows, but we won\'t suppress any
other characters.
:::

[]{#myInputManager}

`myInputManager`

[output.t](../file/output.t.html)\[[352](../source/output.t.html#352)\]

::: desc
my associated input manager, if I have one
:::

[]{#prefix}

`prefix`

[output.t](../file/output.t.html)\[[524](../source/output.t.html#524)\]

::: desc
Text to be output before anything else
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#addOutputFilter}

`addOutputFilter (filter)`

[output.t](../file/output.t.html)\[[403](../source/output.t.html#403)\]

::: desc
Add an output filter. The argument is an object of class OutputFilter,
or any object implementing the filterText() method.

Filters are always arranged in a \"stack\": the last output filter added
is the first one called during output. This method thus adds the new
filter at the \"top\" of the stack.
:::

[]{#addOutputFilterBelow}

`addOutputFilterBelow (newFilter, existingFilter)`

[output.t](../file/output.t.html)\[[418](../source/output.t.html#418)\]

::: desc
Add an output filter at a given point in the filter stack: add the
filter so that it is \"below\" the given existing filter in the stack.
This means that the new filter will be called just after the existing
filter during output.

If \'existingFilter\' isn\'t in the stack of existing filters, we\'ll
add the new filter at the \"top\" of the stack.
:::

[]{#applyFilters}

`applyFilters (val)`

[output.t](../file/output.t.html)\[[458](../source/output.t.html#458)\]

::: desc
call the filters
:::

[]{#applyTextFilters}

`applyTextFilters (val)`

[output.t](../file/output.t.html)\[[478](../source/output.t.html#478)\]

::: desc
Apply the current set of text transformation filters to a string. This
applies only the non-capturing filters; we skip any capture filters.
:::

[]{#captureOutput}

`captureOutput (func, [args])`

[output.t](../file/output.t.html)\[[282](../source/output.t.html#282)\]

::: desc
Call the given function, capturing all text output to this stream in the
course of the function call. Return a string containing the captured
text.
:::

[]{#captureOutputIgnoreExit}

`captureOutputIgnoreExit (func, [args])`

[output.t](../file/output.t.html)\[[311](../source/output.t.html#311)\]

::: desc
A Version of captureOutput that ignores an Exit Exception. This can be
used to attempt to retrieve the string value of an output filter that
threw an exit exeption.
:::

[]{#construct}

`construct ( )`

[output.t](../file/output.t.html)\[[355](../source/output.t.html#355)\]

::: desc
dynamic construction
:::

[]{#execute}

`execute ( )`[OVERRIDDEN]{.rem}

[output.t](../file/output.t.html)\[[365](../source/output.t.html#365)\]

::: desc
execute pre-initialization
:::

[]{#inputLineEnd}

`inputLineEnd ( )`

[output.t](../file/output.t.html)\[[501](../source/output.t.html#501)\]

::: desc
Receive notification from the input manager that we have just ended
reading a line of input from the keyboard.
:::

[]{#removeOutputFilter}

`removeOutputFilter (filter)`

[output.t](../file/output.t.html)\[[444](../source/output.t.html#444)\]

::: desc
Remove an output filter. Since filters are arranged in a stack, only the
LAST output filter added may be removed. It\'s an error to remove a
filter other than the last one.
:::

[]{#setPrefix}

`setPrefix (txt)`

[output.t](../file/output.t.html)\[[527](../source/output.t.html#527)\]

::: desc
Set the prefix to txt
:::

[]{#watchForOutput}

`watchForOutput (func)`

[output.t](../file/output.t.html)\[[239](../source/output.t.html#239)\]

::: desc
Watch the stream for output. It\'s sometimes useful to be able to call
out to some code and determine whether or not the code generated any
text output. This routine invokes the given callback function,
monitoring the stream for output; if any occurs, we\'ll return true,
otherwise we\'ll return nil.
:::

[]{#writeFromStream}

`writeFromStream (txt)`

[output.t](../file/output.t.html)\[[386](../source/output.t.html#386)\]

::: desc
Write text out from this stream; this writes to the lower-level stream
underlying this stream. This routine is intended to be called only from
within this class.

Each output stream is conceptually \"stacked\" on top of another,
lower-level stream. At the bottom of the stack is usually some kind of
physical device, such as the display, or a file on disk.

This method must be defined in each subclass to write to the appropriate
underlying stream. Most subclasses are specifically designed to sit atop
a system-level stream, such as the display output stream, so most
implementations of this method will call directly to a system-level
output function.
:::

[]{#writeToStream}

`writeToStream (val)`

[output.t](../file/output.t.html)\[[183](../source/output.t.html#183)\]

::: desc
Write a value to the stream. If the value is a string, we\'ll display
the text of the string; if it\'s nil, we\'ll ignore it; if it\'s
anything else, we\'ll try to convert it to a string (with the toString()
function) and display the resulting text.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
