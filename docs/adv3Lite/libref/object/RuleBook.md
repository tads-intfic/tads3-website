---
layout: docs
---
<span class="title">RuleBook</span><span class="type">class</span>

[rules.t](../file/rules.t.html)\[[20](../source/rules.t.html#20)\]

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

<div class="fdesc">

A RuleBook is a container for one or more rules. Calling the follow()
method of a RuleBook causes each of its contained rules to be executed
in turn until one returns a non-null value. That value is then returned
to the caller of the RuleBook. \[DEFINED IN RULES EXTENSION\]

`class `**`RuleBook`**` :   `[`PreinitObject`](../object/PreinitObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`RuleBook`**  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

[`afterRules`](../object/afterRules.html)[`beforeRules`](../object/beforeRules.html)[`initRules`](../object/initRules.html)[`preinitRules`](../object/preinitRules.html)[`reportRules`](../object/reportRules.html)[`turnEndRules`](../object/turnEndRules.html)[`turnStartRules`](../object/turnStartRules.html)
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`actor`](#actor)[`contents`](#contents)[`contValue`](#contValue)[`defaultVal`](#defaultVal)[`matchObj`](#matchObj)[`stopValue`](#stopValue)

Inherited from `PreinitObject` :  
[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)

Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`addToContents`](#addToContents)[`follow`](#follow)[`initBook`](#initBook)[`removeFromContents`](#removeFromContents)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute)[`classExec`](../object/ModuleExecObject.html#classExec)[`execute`](../object/ModuleExecObject.html#execute)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="actor"></span>

`actor`

[rules.t](../file/rules.t.html)\[[30](../source/rules.t.html#30)\]

<div class="desc">

The actor to use for comparison with the who property for rules in this
RuleBook. The default is gPlayerChar, but for some RuleBooks gActor may
be more appropriate.

</div>

<span id="contents"></span>

`contents`

[rules.t](../file/rules.t.html)\[[23](../source/rules.t.html#23)\]

<div class="desc">

A list of rules contained in this rulebook

</div>

<span id="contValue"></span>

`contValue`

[rules.t](../file/rules.t.html)\[[120](../source/rules.t.html#120)\]

<div class="desc">

contValue (continue value) is the value that a Rule in this RuleBook
needs to return to avoid the RuleBook stopping at that Rule (rather than
going on to consider more Rules). By default this is null, which means
by default a Rule that does not explicitly return a value (and so
effectivelt returns nil) will stop the RuleBook. If you want the default
behaviour for this RuleBook to be not for Rules to stop the book, then
override this to nil. \[RULES EXTENSION\]

</div>

<span id="defaultVal"></span>

`defaultVal`

[rules.t](../file/rules.t.html)\[[131](../source/rules.t.html#131)\]

<div class="desc">

The default value to return to our caller. By default this is the same
as our contValue , to make it easy to test whether we any rule returned
a non-null value. By default a rule that does something will return nil,
so if no rule does anything we want to return a different value. By
making the defaultValue the same as the contValue, we ensure that we can
tell our caller that no rule was executed (if that is indeed the case).
\[RULES EXTENSION\]

</div>

<span id="matchObj"></span>

`matchObj`

[rules.t](../file/rules.t.html)\[[153](../source/rules.t.html#153)\]

<div class="desc">

The object (or any other value) to be matched by our Rule's matchObj
conditions if they have any. This property is set by our follow() method
(from its first argument) and so should not normally be directly changed
from game code. \[RULES EXTENSION\]

</div>

<span id="stopValue"></span>

`stopValue`

[rules.t](../file/rules.t.html)\[[138](../source/rules.t.html#138)\]

<div class="desc">

The value our associated rules use by default to stop this RuleBook
considering any further rules (when a Rule uses the stop macro). By
default we use a value of true. \[RULES EXTENSION\]

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="addToContents"></span>

`addToContents (ru)`

[rules.t](../file/rules.t.html)\[[33](../source/rules.t.html#33)\]

<div class="desc">

Add a rule to the contents of this rulebook \[RULES EXTENSION\]

</div>

<span id="follow"></span>

`follow ([args])`

[rules.t](../file/rules.t.html)\[[61](../source/rules.t.html#61)\]

<div class="desc">

Follow this Rule. This is the method game code will normally call to
make use of this RuleBook. Each of our rules will be tested to see if it
matches its conditions; we then run through those of our rules that
match their rules in order of precedence until one returns a non-null
value, which we then in turn return to our caller. If no rule returns a
non-null value we return our own default value, which is normally nil.

This method can be called with as many arguments as the game code finds
useful, or with none at all. Our arguments will then be passed on to
each Rule that is called. The first argument will also be stored in our
matchObj property, which our Rules can compare with their own matchObj
condition to see if they match. This allows game code to, for example,
run a RuleBook related to some object that isn't one of the objects
directly involved in the current action. \[RULES EXTENSION\]

</div>

<span id="initBook"></span>

`initBook ([args])`

[rules.t](../file/rules.t.html)\[[145](../source/rules.t.html#145)\]

<div class="desc">

Game code can use this method to initialize the values of custom
RuleBook properties at the start of the processing of following a
RuleBook. \[RULES EXTENSION\]

</div>

<span id="removeFromContents"></span>

`removeFromContents (ru)`

[rules.t](../file/rules.t.html)\[[39](../source/rules.t.html#39)\]

<div class="desc">

Remove a rule from the contents of this rulebook \[RULES EXTENSION\]

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
