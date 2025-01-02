---
layout: docs
---
<span class="title">OutputStream</span><span class="type">class</span>

[output.t](../file/output.t.html)\[[125](../source/output.t.html#125)\]

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



Output Stream. This class provides a stream-oriented interface to
displaying text on the console. "Stream-oriented" means that we write
text as a sequential string of characters.

Output streams are always transient, since they track the system user
interface in the interpreter. The interpreter does not save its UI state
with a saved position, so objects such as output streams that track the
UI state should not be saved either.

`class `**`OutputStream`**` :   `[`PreinitObject`](../object/PreinitObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`OutputStream`**  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`OutputStream`**  
[`BannerOutputStream`](../object/BannerOutputStream.html)  
[`LogConsole`](../object/LogConsole.html)  
[`WebWinOutputStream`](../object/WebWinOutputStream.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`mainOutputStream`](../object/mainOutputStream.html)[`menuOutputStream`](../object/menuOutputStream.html)[`statusLeftOutputStream`](../object/statusLeftOutputStream.html)[`statusRightOutputStream`](../object/statusRightOutputStream.html)[`statusTagOutputStream`](../object/statusTagOutputStream.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`filterList_`](#filterList_)[`justDidPara`](#justDidPara)[`justDidParaSuppressor`](#justDidParaSuppressor)[`myInputManager`](#myInputManager)



Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`addOutputFilter`](#addOutputFilter)[`addOutputFilterBelow`](#addOutputFilterBelow)[`applyFilters`](#applyFilters)[`applyTextFilters`](#applyTextFilters)[`captureOutput`](#captureOutput)[`construct`](#construct)[`execute`](#execute)[`inputLineEnd`](#inputLineEnd)[`removeOutputFilter`](#removeOutputFilter)[`watchForOutput`](#watchForOutput)[`writeFromStream`](#writeFromStream)[`writeToStream`](#writeToStream)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute)[`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="filterList_"></span>

`filterList_`

[output.t](../file/output.t.html)\[[271](../source/output.t.html#271)\]



The list of active filters on this stream, in the order in which they
are to be called. This should normally be initialized to a Vector in
each instance.



<span id="justDidPara"></span>

`justDidPara`

[output.t](../file/output.t.html)\[[391](../source/output.t.html#391)\]



Internal state: we just wrote a paragraph break, and there has not yet
been any intervening text. By default, we set this to true initially, so
that we suppress any paragraph breaks at the very start of the text.



<span id="justDidParaSuppressor"></span>

`justDidParaSuppressor`

[output.t](../file/output.t.html)\[[399](../source/output.t.html#399)\]



Internal state: we just wrote a character that suppresses paragraph
breaks that immediately follow. In this state, we'll suppress any
paragraph marker that immediately follows, but we won't suppress any
other characters.



<span id="myInputManager"></span>

`myInputManager`

[output.t](../file/output.t.html)\[[230](../source/output.t.html#230)\]



my associated input manager, if I have one



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="addOutputFilter"></span>

`addOutputFilter (filter)`

[output.t](../file/output.t.html)\[[281](../source/output.t.html#281)\]



Add an output filter. The argument is an object of class OutputFilter,
or any object implementing the filterText() method.

Filters are always arranged in a "stack": the last output filter added
is the first one called during output. This method thus adds the new
filter at the "top" of the stack.



<span id="addOutputFilterBelow"></span>

`addOutputFilterBelow (newFilter, existingFilter)`

[output.t](../file/output.t.html)\[[296](../source/output.t.html#296)\]



Add an output filter at a given point in the filter stack: add the
filter so that it is "below" the given existing filter in the stack.
This means that the new filter will be called just after the existing
filter during output.

If 'existingFilter' isn't in the stack of existing filters, we'll add
the new filter at the "top" of the stack.



<span id="applyFilters"></span>

`applyFilters (val)`

[output.t](../file/output.t.html)\[[336](../source/output.t.html#336)\]



call the filters



<span id="applyTextFilters"></span>

`applyTextFilters (val)`

[output.t](../file/output.t.html)\[[356](../source/output.t.html#356)\]



Apply the current set of text transformation filters to a string. This
applies only the non-capturing filters; we skip any capture filters.



<span id="captureOutput"></span>

`captureOutput (func, [args])`

[output.t](../file/output.t.html)\[[207](../source/output.t.html#207)\]



Call the given function, capturing all text output to this stream in the
course of the function call. Return a string containing the captured
text.



<span id="construct"></span>

`construct ( )`

[output.t](../file/output.t.html)\[[233](../source/output.t.html#233)\]



dynamic construction



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[243](../source/output.t.html#243)\]



execute pre-initialization



<span id="inputLineEnd"></span>

`inputLineEnd ( )`

[output.t](../file/output.t.html)\[[379](../source/output.t.html#379)\]



Receive notification from the input manager that we have just ended
reading a line of input from the keyboard.



<span id="removeOutputFilter"></span>

`removeOutputFilter (filter)`

[output.t](../file/output.t.html)\[[322](../source/output.t.html#322)\]



Remove an output filter. Since filters are arranged in a stack, only the
LAST output filter added may be removed. It's an error to remove a
filter other than the last one.



<span id="watchForOutput"></span>

`watchForOutput (func)`

[output.t](../file/output.t.html)\[[179](../source/output.t.html#179)\]



Watch the stream for output. It's sometimes useful to be able to call
out to some code and determine whether or not the code generated any
text output. This routine invokes the given callback function,
monitoring the stream for output; if any occurs, we'll return true,
otherwise we'll return nil.



<span id="writeFromStream"></span>

`writeFromStream (txt)`

[output.t](../file/output.t.html)\[[264](../source/output.t.html#264)\]



Write text out from this stream; this writes to the lower-level stream
underlying this stream. This routine is intended to be called only from
within this class.

Each output stream is conceptually "stacked" on top of another,
lower-level stream. At the bottom of the stack is usually some kind of
physical device, such as the display, or a file on disk.

This method must be defined in each subclass to write to the appropriate
underlying stream. Most subclasses are specifically designed to sit atop
a system-level stream, such as the display output stream, so most
implementations of this method will call directly to a system-level
output function.



<span id="writeToStream"></span>

`writeToStream (val)`

[output.t](../file/output.t.html)\[[132](../source/output.t.html#132)\]



Write a value to the stream. If the value is a string, we'll display the
text of the string; if it's nil, we'll ignore it; if it's anything else,
we'll try to convert it to a string (with the toString() function) and
display the resulting text.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


