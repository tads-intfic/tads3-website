[Exception]{.title}[class]{.type}

[\_main.t](../file/_main.t.html)\[[657](../source/_main.t.html#657)\]

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
Base class for all exception objects. We derive all exceptions from this
base class so that we can write \'catch\' blocks that catch all
exceptions by catching \'Exception\'.

The displayException() method displays a message describing the
exception. Subclasses should override this method.

`class `**`Exception`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`Exception`**\
`         object`\
[]{#_SubClassTree_}

::: mjhd
[Subclass Tree]{.hdln}  
:::

**`Exception`**\
`         `[`AbortActionSignal`](../object/AbortActionSignal.html)\
`         `[`AbortImplicitSignal`](../object/AbortImplicitSignal.html)\
`         `[`BreakLoopSignal`](../object/BreakLoopSignal.html)\
`         `[`CircularExecException`](../object/CircularExecException.html)\
`         `[`CommandSignal`](../object/CommandSignal.html)\
`                 `[`ExitCommandLineSignal`](../object/ExitCommandLineSignal.html)\
`         `[`CompilerException`](../object/CompilerException.html)\
`         `[`EndOfFileException`](../object/EndOfFileException.html)\
`         `[`ExitActionSignal`](../object/ExitActionSignal.html)\
`         `[`ExitSignal`](../object/ExitSignal.html)\
`         `[`FileException`](../object/FileException.html)\
`                 `[`FileClosedException`](../object/FileClosedException.html)\
`                 `[`FileCreationException`](../object/FileCreationException.html)\
`                 `[`FileIOException`](../object/FileIOException.html)\
`                 `[`FileModeException`](../object/FileModeException.html)\
`                 `[`FileNotFoundException`](../object/FileNotFoundException.html)\
`                 `[`FileOpenException`](../object/FileOpenException.html)\
`                 `[`FileSafetyException`](../object/FileSafetyException.html)\
`                 `[`FileSyncException`](../object/FileSyncException.html)\
`         `[`LibraryError`](../object/LibraryError.html)\
`                 `[`ArgumentMismatchError`](../object/ArgumentMismatchError.html)\
`         `[`NetException`](../object/NetException.html)\
`                 `[`NetSafetyException`](../object/NetSafetyException.html)\
`                 `[`SocketDisconnectException`](../object/SocketDisconnectException.html)\
`         `[`ParseError`](../object/ParseError.html)\
`                 `[`BadMultiError`](../object/BadMultiError.html)\
`                 `[`CommandError`](../object/CommandError.html)\
`                         `[`EmptyNounError`](../object/EmptyNounError.html)\
`                         `[`RejectParseTreeError`](../object/RejectParseTreeError.html)\
`                 `[`NotUnderstoodError`](../object/NotUnderstoodError.html)\
`                 `[`OopsError`](../object/OopsError.html)\
`                         `[`CantOopsError`](../object/CantOopsError.html)\
`                 `[`ResolutionError`](../object/ResolutionError.html)\
`                         `[`ActorResolutionError`](../object/ActorResolutionError.html)\
`                                 `[`InsufficientNounsError`](../object/InsufficientNounsError.html)\
`                                 `[`NoneInLocationError`](../object/NoneInLocationError.html)\
`                                 `[`NoneInOwnerError`](../object/NoneInOwnerError.html)\
`                                 `[`NoneWithContentsError`](../object/NoneWithContentsError.html)\
`                                 `[`UnmatchedNounError`](../object/UnmatchedNounError.html)\
`                                         `[`AmbiguousMultiDefiniteError`](../object/AmbiguousMultiDefiniteError.html)\
`                         `[`AmbiguousError`](../object/AmbiguousError.html)\
`                         `[`OrdinalRangeError`](../object/OrdinalRangeError.html)\
`                         `[`PronounError`](../object/PronounError.html)\
`                                 `[`AntecedentScopeError`](../object/AntecedentScopeError.html)\
`                                 `[`NoAntecedentError`](../object/NoAntecedentError.html)\
`                         `[`UnmatchedActorError`](../object/UnmatchedActorError.html)\
`                 `[`UnknownWordError`](../object/UnknownWordError.html)\
`         `[`ProgramException`](../object/ProgramException.html)\
`         `[`QuittingException`](../object/QuittingException.html)\
`         `[`RestartSignal`](../object/RestartSignal.html)\
`         `[`RuntimeError`](../object/RuntimeError.html)\
`                 `[`StorageServerError`](../object/StorageServerError.html)\
`         `[`TerminateCommandException`](../object/TerminateCommandException.html)\
`         `[`TokenizerError`](../object/TokenizerError.html)\
`                 `[`TokErrorNoMatch`](../object/TokErrorNoMatch.html)\
`         `[`UnboundMultiMethod`](../object/UnboundMultiMethod.html)\
`                 `[`UnboundInheritedMultiMethod`](../object/UnboundInheritedMultiMethod.html)\
`         `[`UnknownCharSetException`](../object/UnknownCharSetException.html)\
[]{#_ObjectSummary_}

::: mjhd
[Global Objects]{.hdln}  
:::

*(none)* []{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`errmsg_`](#errmsg_)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`construct`](#construct)`  `[`displayException`](#displayException)`  `[`getExceptionMessage`](#getExceptionMessage)`  `[`showStackTrace`](#showStackTrace)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#errmsg_}

`errmsg_`

[\_main.t](../file/_main.t.html)\[[693](../source/_main.t.html#693)\]

::: desc
Private member: The error message passed to the constructor, if any.
Note that this doesn\'t necessarily contain the actual displayed
exception message, since displayException() can be overridden in
subclasses to display additional parameters or other text entirely. The
definitive message is the one that displayException() generates. If you
want the displayed message as a string, use getExceptionMessage().
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#construct}

`construct (msg?, ...)`

[\_main.t](../file/_main.t.html)\[[659](../source/_main.t.html#659)\]

::: desc
construct, with an optional message describing the error
:::

[]{#displayException}

`displayException ( )`

[\_main.t](../file/_main.t.html)\[[667](../source/_main.t.html#667)\]

::: desc
display the exception - should always be overridden
:::

[]{#getExceptionMessage}

`getExceptionMessage ( )`

[\_main.t](../file/_main.t.html)\[[678](../source/_main.t.html#678)\]

::: desc
Get the exception message as a string. This captures the output of
displayException() and returns it a string. Use this instead of
accessing errmsg\_, since that member is private and might not reflect
the actual displayed message.
:::

[]{#showStackTrace}

`showStackTrace (stackList)`

[\_main.t](../file/_main.t.html)\[[702](../source/_main.t.html#702)\]

::: desc
Display a stack trace, given a list of T3StackInfo objects. Note that,
for efficiency, we do not by default cache a stack trace when an
exception occurs; individual subclasses can obtain a stack trace if
desired at construction and use the information to show a stack trace
for the exception.
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
