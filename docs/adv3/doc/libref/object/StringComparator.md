---
layout: docs
---
<span class="title">StringComparator</span><span class="type">class</span>

[strcomp.h](../file/strcomp.h.html)\[[29](../source/strcomp.h.html#29)\]

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



StringComparator intrinsic class. This class provides support for
dictionaries based on complex string matches, including truncation
(matching an input word to a dictionary word when the input word is at
least some minimum length, and matches the dictionary word up to the
full length of the input word, but the input word is shorter than the
dictionary word); case folding (matching upper-case letters to
lower-case letters and vice versa); and character equivalences (for
matching accented characters to non-accented equivalents, or matching
special characters to multi-character equivalents, such as matching a
German "ess-zet" ("sharp-s") ligature to a pair of lower-case "s"
characters in input).

`intrinsic class `**`StringComparator`**` :   `[`Object`](../object/Object.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`StringComparator`**  
[`Object`](../object/Object.html)  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



*(none)* <span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  







*(none)* <span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`calcHash`](#calcHash) [`matchValues`](#matchValues)

Inherited from `Object` :  
[`getPropList`](../object/Object.html#getPropList) [`getPropParams`](../object/Object.html#getPropParams) [`getSuperclassList`](../object/Object.html#getSuperclassList) [`isClass`](../object/Object.html#isClass) [`isTransient`](../object/Object.html#isTransient) [`ofKind`](../object/Object.html#ofKind) [`propDefined`](../object/Object.html#propDefined) [`propInherited`](../object/Object.html#propInherited) [`propType`](../object/Object.html#propType) [`valToSymbol`](../object/Object.html#valToSymbol)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="calcHash"></span>

`calcHash (str)`

[strcomp.h](../file/strcomp.h.html)\[[82](../source/strcomp.h.html#82)\]



Calculate a hash value. This returns an integer giving the hash value
for the given string.



<span id="matchValues"></span>

`matchValues (inputStr, dictStr)`

[strcomp.h](../file/strcomp.h.html)\[[100](../source/strcomp.h.html#100)\]



Match two values. The first value is the input string, and the second is
the dictionary string. Each character in the dictionary string can match
the corresponding input string character exactly (with or without case
sensitivity, as specified in our constructor), or can match the
equivalence mapping sequence for the dictionary character.

The return value is zero if the values do not match. If the values do
match, the return value is a non-zero integer, which will be a bitwise
OR combination of all of the flag values applicable to the match. This
is a combination of pre-defined flag values (see below) and any flag
values from equivalence mappings. The flag values from ALL equivalence
mappings that were actually used to make the match are included.





TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


