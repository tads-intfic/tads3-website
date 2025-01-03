---
layout: docs
---
<span class="title">RexPattern</span><span class="type">class</span>

[systype.h](../file/systype.h.html)\[[1208](../source/systype.h.html#1208)\]

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



'RexPattern' intrinsic class. This class encapsulates a compiled regular
expression pattern.

A RexPattern object can be passed to the regular expression functions
(rexMatch, rexSearch, rexReplace) in place of a string pattern. Since
compiling a regular expression takes a non-trivial amount of time, it's
more efficient to compile a pattern to a RexPattern object if the same
pattern will be used in multiple searches.

`intrinsic class `**`RexPattern`**` :   `[`Object`](../object/Object.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`RexPattern`**  
[`Object`](../object/Object.html)  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  
*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getPatternString`](#getPatternString)

Inherited from `Object` :  
[`getPropList`](../object/Object.html#getPropList) [`getPropParams`](../object/Object.html#getPropParams) [`getSuperclassList`](../object/Object.html#getSuperclassList) [`isClass`](../object/Object.html#isClass) [`isTransient`](../object/Object.html#isTransient) [`ofKind`](../object/Object.html#ofKind) [`propDefined`](../object/Object.html#propDefined) [`propInherited`](../object/Object.html#propInherited) [`propType`](../object/Object.html#propType) [`valToSymbol`](../object/Object.html#valToSymbol)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getPatternString"></span>

`getPatternString ( )`

[systype.h](../file/systype.h.html)\[[1218](../source/systype.h.html#1218)\]



retrieve the original pattern string used to construct the object
TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


