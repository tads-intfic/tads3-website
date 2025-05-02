---
layout: docs
---
<span class="title">debug.t</span><span class="type">file</span>

[source file](../source/debug.t.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Objects**  
[Summary](#_ObjectSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)



\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*
debug.t This module forms part of the adv3Lite library, and defines a
number of commands that can be used for debugging purposes.

\(c\) 2012-13 Eric Eve (but based partly on code borrowed from the
Mercury library (c) Michael J. Roberts).



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



[`Test`](../object/Test.html) [`VerbRule(Debug)`](../object/VerbRule(Debug).html) [`VerbRule(DebugI)`](../object/VerbRule(DebugI).html) [`VerbRule(ListTests)`](../object/VerbRule(ListTests).html) [`VerbRule(Test)`](../object/VerbRule(Test).html)
<span id="_ObjectSummary_"></span>



<span class="hdln">Summary of Global Objects</span>  



[`actionTab`](../object/actionTab.html) [`allTests`](../object/allTests.html) [`Debug`](../object/Debug.html) [`DebugCtl`](../object/DebugCtl.html) [`DebugI`](../object/DebugI.html) [`DoTest`](../object/DoTest.html) [`Evaluate`](../object/Evaluate.html) [`FiatLux`](../object/FiatLux.html) [`GoNear`](../object/GoNear.html) [`ListTests`](../object/ListTests.html) [`Purloin`](../object/Purloin.html) [`symTab`](../object/symTab.html)
<span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



[`symToVal`](#symToVal) [`valToSym`](#valToSym)

<span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



<span id="symToVal"></span>

`symToVal (val)`

[debug.t](../file/debug.t.html)\[[277](../source/debug.t.html#277)\]



Take a string and return the object whose programmatic name it refers to



<span id="valToSym"></span>

`valToSym (val)`

[debug.t](../file/debug.t.html)\[[283](../source/debug.t.html#283)\]



Take a value and return the string representation of its programmatic
name





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


