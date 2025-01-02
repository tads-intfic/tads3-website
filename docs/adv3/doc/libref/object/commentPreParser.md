---
layout: docs
---
<span class="title">commentPreParser</span><span class="type">object</span>

[input.t](../file/input.t.html)\[[958](../source/input.t.html#958)\]

[Superclass  
Tree](#_SuperClassTree_)

[Property  
Summary](#_PropSummary_)

[Method  
Summary](#_MethodSummary_)

[Property  
Details](#_Properties_)

[Method  
Details](#_Methods_)



The "comment" pre-parser. If the command line starts with a special
prefix string (by default, "\*", but this can be changed via our
commentPrefix property), this pre-parser intercepts the command,
treating it as a comment from the player and otherwise ignoring the
entire input line. The main purpose is to give players a way to put
comments into recorded transcripts, as notes to themselves when later
reviewing the transcripts or as notes to the author when submitting
play-testing feedback.

**`commentPreParser`**` :   `[`StringPreParser`](../object/StringPreParser.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`commentPreParser`**  
[`StringPreParser`](../object/StringPreParser.html)  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`commentPrefix`](#commentPrefix)[`leadPat`](#leadPat)[`runOrder`](#runOrder)[`warningCount`](#warningCount)

Inherited from `StringPreParser` :  
[`regList`](../object/StringPreParser.html#regList)[`regListSorted`](../object/StringPreParser.html#regListSorted)



Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`doParsing`](#doParsing)

Inherited from `StringPreParser` :  
[`construct`](../object/StringPreParser.html#construct)[`execute`](../object/StringPreParser.html#execute)[`registerPreParser`](../object/StringPreParser.html#registerPreParser)[`runAll`](../object/StringPreParser.html#runAll)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute)[`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="commentPrefix"></span>

`commentPrefix`

[input.t](../file/input.t.html)\[[1005](../source/input.t.html#1005)\]



The comment prefix. You can change this to any character, or to any
sequence of characters (longer sequences, such as '//', will work fine).
If a command line starts with this exact string (or starts with
whitespace followed by this string), we'll consider the line to be a
comment.



<span id="leadPat"></span>

`leadPat`

[input.t](../file/input.t.html)\[[1017](../source/input.t.html#1017)\]



The leading-whitespace pattern. We skip any text that matches this
pattern at the start of a command line before looking for the comment
prefix.

If you don't want to allow leading whitespace before the comment prefix,
you can simply change this to '' - a pattern consisting of an empty
string always matches zero characters, so it will prevent us from
skipping any leading charactres in the player's input.



<span id="runOrder"></span>

`runOrder`<span class="rem">OVERRIDDEN</span>

[input.t](../file/input.t.html)\[[1034](../source/input.t.html#1034)\]



Use a lower execution order than the default, so that we run before most
other pre-parsers. Most other pre-parsers are written to handle actual
commands, so it's usually just a waste of time to have them look at
comments at all - and can occasionally be problematic, since the
free-form text of a comment could confuse a pre-parser that's expecting
a more conventional command format. When the comment pre-parser detects
a comment, it halts any further processing of the command - so by
running ahead of other pre-parsers, we'll effectively bypass other
pre-parsers when we detect a comment.



<span id="warningCount"></span>

`warningCount`

[input.t](../file/input.t.html)\[[1020](../source/input.t.html#1020)\]



warning count for entering comments without SCRIPT in effect



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="doParsing"></span>

`doParsing (str, which)`<span class="rem">OVERRIDDEN</span>

[input.t](../file/input.t.html)\[[959](../source/input.t.html#959)\]



*no description available*





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


