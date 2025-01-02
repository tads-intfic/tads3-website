---
---
<span class="title">quoteFilter</span><span class="type">object</span>

[output.t](../file/output.t.html)\[[1563](../source/output.t.html#1563)\]

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

<div class="fdesc">

quoteFilter: this loooks for smart quotes in the output and checks that
they are balanced.

The problem with the smart quotes \<q\> \</q\> is that if one is
missing, or a spurious one is added, the error is perpetrated throughout
the rest of the game (or until a compensating error is located). The
purpose of quoteFilter is (a) to report such errors (to make them easier
to fix) and (b) to prevent them being propagated beyond a single turn.
In the main this works by having quoteFilter take over responsibility
for turning the \<q\> and \</q\> tags into the appropriate HTML entities
rather than leaving it to the HTML rendering engine in the interpreter.
The quoteFilter OutputFilter keeps its own track of whether a double
quote or a single quote is rquired next, and resets this count at the
start of each turn.

**`quoteFilter`**` :   `[`OutputFilter`](../object/OutputFilter.html)`   `[`InitObject`](../object/InitObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`quoteFilter`**  
`         `[`OutputFilter`](../object/OutputFilter.html)  
`                 object`  
`         `[`InitObject`](../object/InitObject.html)  
`                 `[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`quoteCount`](#quoteCount)`  `[`quotePat`](#quotePat)`  `[`showWarnings`](#showWarnings)`  `

` `

` `

Inherited from `ModuleExecObject` :  
` `[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)`  `[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)`  `[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)`  `[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)`  `[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`execute`](#execute)`  `[`filterText`](#filterText)`  `[`quoteCheck`](#quoteCheck)`  `

` `

` `

Inherited from `ModuleExecObject` :  
` `[`_execute`](../object/ModuleExecObject.html#_execute)`  `[`classExec`](../object/ModuleExecObject.html#classExec)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="quoteCount"></span>

`quoteCount`

[output.t](../file/output.t.html)\[[1627](../source/output.t.html#1627)\]

<div class="desc">

Our quoteCount is the net number of quote marks we've output this turn,
i.e. the number of opening quote marks less the number of closing quote
marks.

</div>

<span id="quotePat"></span>

`quotePat`

[output.t](../file/output.t.html)\[[1630](../source/output.t.html#1630)\]

<div class="desc">

Our rex pattern to match \<q\> and \</q\>

</div>

<span id="showWarnings"></span>

`showWarnings`

[output.t](../file/output.t.html)\[[1655](../source/output.t.html#1655)\]

<div class="desc">

Should I show a warning when I find unmatched smart quotes over the
course of a turn? Displaying such a warning would probably look
intrusive in a released version, but might well be useful in a version
sent out to beta-testers (so it shouldn't be tied to a version compiled
for debugging). The showWarnings flag thus allows the warning messages
to be turned on and off as desired.

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[1634](../source/output.t.html#1634)\]

<div class="desc">

In Initialize this filter

</div>

<span id="filterText"></span>

`filterText (ostr, txt)`<span class="rem">OVERRIDDEN</span>

[output.t](../file/output.t.html)\[[1564](../source/output.t.html#1564)\]

<div class="desc">

*no description available*

</div>

<span id="quoteCheck"></span>

`quoteCheck ( )`

[output.t](../file/output.t.html)\[[1664](../source/output.t.html#1664)\]

<div class="desc">

The PromptDaemon set up in our execute() method at Initialization runs
this method at the end of each turn. It checks to see if the number of
opening smart quotes over the course of the turn just completed is the
same as the number of closing smart quotes, and optionally prints a
warning message if it is not.

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
