---
layout: docs
---
<span class="title">input.t</span><span class="type">file</span>

[source file](../source/input.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)



TADS 3 Library: input

This modules defines functions and objects related to reading input from
the player.



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



[`BasicInputDef`](../object/BasicInputDef.html)[`EndOfFileException`](../object/EndOfFileException.html)[`InputDef`](../object/InputDef.html)[`QuittingException`](../object/QuittingException.html)[`StringPreParser`](../object/StringPreParser.html)
<span id="_ObjectSummary_"></span>



<span class="hdln">Summary of Global Objects</span>  



[`commentPreParser`](../object/commentPreParser.html)[`inputManager`](../object/inputManager.html)
<span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



[`readMainCommand`](#readMainCommand)[`readMainCommandTokens`](#readMainCommandTokens)

<span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



<span id="readMainCommand"></span>

`readMainCommand (which)`

[input.t](../file/input.t.html)\[[797](../source/input.t.html#797)\]



Read a command line from the player. Displays the main command prompt
and returns a line of input.

We process any pending real-time events before reading the command. If
the local platform supports real-time command-line interruptions, we'll
continue processing real-time events as they occur in the course of
command editing.



<span id="readMainCommandTokens"></span>

`readMainCommandTokens (which)`

[input.t](../file/input.t.html)\[[1049](../source/input.t.html#1049)\]



Read a line of text and return the token list and the original text. We
keep going until a non-empty line of text is read.

'which' is one of the rmcXxx enum values specifying what kind of command
line we're reading.

The return value is a list of two elements. The first element is the
string entered, and the second element is the token list.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


