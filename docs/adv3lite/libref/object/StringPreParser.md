---
layout: docs
---
<span class="title">StringPreParser</span><span class="type">class</span>

[input.t](../file/input.t.html)\[[631](../source/input.t.html#631)\]

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



Base class for command input string preparsers.

Preparsers must be registered in order to run. During preinitialization,
we will automatically register any existing preparser objects;
preparsers that are created dynamically during execution must be
registered explicitly, which can be accomplished by inheriting the
default constructor from this class.

`class `**`StringPreParser`**` :   `[`PreinitObject`](../object/PreinitObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`StringPreParser`**  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



[`commentPreParser`](../object/commentPreParser.html) [`decimalPreParser`](../object/decimalPreParser.html) [`evalPreParser`](../object/evalPreParser.html) [`pleasePreParser`](../object/pleasePreParser.html) [`pronounUsePreParser`](../object/pronounUsePreParser.html) [`queryPreParser`](../object/queryPreParser.html) [`seekPreParser`](../object/seekPreParser.html) [`somethingPreParser`](../object/somethingPreParser.html) [`usePreParser`](../object/usePreParser.html)
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`isActive`](#isActive) [`regList`](#regList) [`regListSorted`](#regListSorted) [`runOrder`](#runOrder)

Inherited from `PreinitObject` :  
[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe) [`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)

Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`construct`](#construct) [`doParsing`](#doParsing) [`execute`](#execute) [`registerPreParser`](#registerPreParser) [`runAll`](#runAll)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="isActive"></span>

`isActive`

[input.t](../file/input.t.html)\[[735](../source/input.t.html#735)\]



Flag, is this PreParser active?



<span id="regList"></span>

`regList`

[input.t](../file/input.t.html)\[[729](../source/input.t.html#729)\]



class property containing the list of registered parsers



<span id="regListSorted"></span>

`regListSorted`

[input.t](../file/input.t.html)\[[732](../source/input.t.html#732)\]



class property - the registration list has been sorted



<span id="runOrder"></span>

`runOrder`

[input.t](../file/input.t.html)\[[637](../source/input.t.html#637)\]



My execution order number. When multiple preparsers are registered,
we'll run the preparsers in ascending order of this value (i.e.,
smallest runOrder goes first).



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="construct"></span>

`construct ( )`

[input.t](../file/input.t.html)\[[663](../source/input.t.html#663)\]



construction - when we dynamically create a preparser, register it by
default



<span id="doParsing"></span>

`doParsing (str, which)`

[input.t](../file/input.t.html)\[[653](../source/input.t.html#653)\]



Do our parsing. Each instance should override this method to define the
parsing that it does.

'str' is the string to parse, and 'which' is the rmcXxx enum giving the
type of command we're working with.

This method returns a string or nil. If the method returns a string, the
caller will forget the original string and work from here on out with
the new version returned; this allows the method to rewrite the original
input as desired. If the method returns nil, it means that the string
has been fully handled and that further parsing of the same string is
not desired.



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[input.t](../file/input.t.html)\[[670](../source/input.t.html#670)\]



run pre-initialization



<span id="registerPreParser"></span>

`registerPreParser (pp)`

[input.t](../file/input.t.html)\[[677](../source/input.t.html#677)\]



register a preparser



<span id="runAll"></span>

`runAll (str, which)`

[input.t](../file/input.t.html)\[[694](../source/input.t.html#694)\]



Class method - Run all preparsers. Returns the result of successively
calling each preparser on the given string.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


