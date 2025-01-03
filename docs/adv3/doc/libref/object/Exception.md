---
layout: docs
---
<span class="title">Exception</span><span class="type">class</span>

[\_main.t](../file/_main.t.html)\[[657](../source/_main.t.html#657)\]

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



Base class for all exception objects. We derive all exceptions from this
base class so that we can write 'catch' blocks that catch all exceptions
by catching 'Exception'.

The displayException() method displays a message describing the
exception. Subclasses should override this method.

`class `**`Exception`**` :   object`



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`Exception`**  
`         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`Exception`**  
[`AbortImplicitSignal`](../object/AbortImplicitSignal.html)  
[`ActionRemappingTooComplexError`](../object/ActionRemappingTooComplexError.html)  
[`BreakLoopSignal`](../object/BreakLoopSignal.html)  
[`CircularExecException`](../object/CircularExecException.html)  
[`CompilerException`](../object/CompilerException.html)  
[`DisambigException`](../object/DisambigException.html)  
[`DisambigOrdinalOutOfRangeException`](../object/DisambigOrdinalOutOfRangeException.html)  
[`StillAmbiguousException`](../object/StillAmbiguousException.html)  
[`UnmatchedDisambigException`](../object/UnmatchedDisambigException.html)  
[`EndOfFileException`](../object/EndOfFileException.html)  
[`ExitActionSignal`](../object/ExitActionSignal.html)  
[`ExitSignal`](../object/ExitSignal.html)  
[`FileException`](../object/FileException.html)  
[`FileClosedException`](../object/FileClosedException.html)  
[`FileCreationException`](../object/FileCreationException.html)  
[`FileIOException`](../object/FileIOException.html)  
[`FileModeException`](../object/FileModeException.html)  
[`FileNotFoundException`](../object/FileNotFoundException.html)  
[`FileOpenException`](../object/FileOpenException.html)  
[`FileSafetyException`](../object/FileSafetyException.html)  
[`FileSyncException`](../object/FileSyncException.html)  
[`NetException`](../object/NetException.html)  
[`NetSafetyException`](../object/NetSafetyException.html)  
[`SocketDisconnectException`](../object/SocketDisconnectException.html)  
[`ParserException`](../object/ParserException.html)  
[`ParseFailureException`](../object/ParseFailureException.html)  
[`ReplacementCommandStringException`](../object/ReplacementCommandStringException.html)  
[`RetryCommandTokensException`](../object/RetryCommandTokensException.html)  
[`TerminateCommandException`](../object/TerminateCommandException.html)  
[`CancelCommandLineException`](../object/CancelCommandLineException.html)  
[`ProgramException`](../object/ProgramException.html)  
[`QuittingException`](../object/QuittingException.html)  
[`RemapActionSignal`](../object/RemapActionSignal.html)  
[`RestartSignal`](../object/RestartSignal.html)  
[`RuntimeError`](../object/RuntimeError.html)  
[`StorageServerError`](../object/StorageServerError.html)  
[`SettingsNotSupportedException`](../object/SettingsNotSupportedException.html)  
[`TokenizerError`](../object/TokenizerError.html)  
[`TokErrorNoMatch`](../object/TokErrorNoMatch.html)  
[`UnboundMultiMethod`](../object/UnboundMultiMethod.html)  
[`UnboundInheritedMultiMethod`](../object/UnboundInheritedMultiMethod.html)  
[`UnknownCharSetException`](../object/UnknownCharSetException.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`errmsg_`](#errmsg_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`displayException`](#displayException) [`getExceptionMessage`](#getExceptionMessage) [`showStackTrace`](#showStackTrace)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="errmsg_"></span>

`errmsg_`

[\_main.t](../file/_main.t.html)\[[693](../source/_main.t.html#693)\]



Private member: The error message passed to the constructor, if any.
Note that this doesn't necessarily contain the actual displayed
exception message, since displayException() can be overridden in
subclasses to display additional parameters or other text entirely. The
definitive message is the one that displayException() generates. If you
want the displayed message as a string, use getExceptionMessage().



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct (msg?, ...)`

[\_main.t](../file/_main.t.html)\[[659](../source/_main.t.html#659)\]



construct, with an optional message describing the error



<span id="displayException"></span>

`displayException ( )`

[\_main.t](../file/_main.t.html)\[[667](../source/_main.t.html#667)\]



display the exception - should always be overridden



<span id="getExceptionMessage"></span>

`getExceptionMessage ( )`

[\_main.t](../file/_main.t.html)\[[678](../source/_main.t.html#678)\]



Get the exception message as a string. This captures the output of
displayException() and returns it a string. Use this instead of
accessing errmsg\_, since that member is private and might not reflect
the actual displayed message.



<span id="showStackTrace"></span>

`showStackTrace (stackList)`

[\_main.t](../file/_main.t.html)\[[702](../source/_main.t.html#702)\]



Display a stack trace, given a list of T3StackInfo objects. Note that,
for efficiency, we do not by default cache a stack trace when an
exception occurs; individual subclasses can obtain a stack trace if
desired at construction and use the information to show a stack trace
for the exception.
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


