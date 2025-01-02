---
layout: docs
---
<span class="title">CharacterSet</span><span class="type">class</span>

[charset.h](../file/charset.h.html)\[[22](../source/charset.h.html#22)\]

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

The CharacterSet intrinsic class provides information on character set
translations and can be used to translate between the Unicode character
set that the T3 VM uses internally for string values and the local
character set or sets used for display, keyboard input, and file I/O.

`intrinsic class `**`CharacterSet`**` :   `[`Object`](../object/Object.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`CharacterSet`**  
`         `[`Object`](../object/Object.html)  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

*(none)* <span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `

` `

*(none)* <span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`getName`](#getName)`  `[`isMappable`](#isMappable)`  `[`isMappingKnown`](#isMappingKnown)`  `[`isRoundTripMappable`](#isRoundTripMappable)`  `

Inherited from `Object` :  
` `[`getPropList`](../object/Object.html#getPropList)`  `[`getPropParams`](../object/Object.html#getPropParams)`  `[`getSuperclassList`](../object/Object.html#getSuperclassList)`  `[`isClass`](../object/Object.html#isClass)`  `[`isTransient`](../object/Object.html#isTransient)`  `[`ofKind`](../object/Object.html#ofKind)`  `[`propDefined`](../object/Object.html#propDefined)`  `[`propInherited`](../object/Object.html#propInherited)`  `[`propType`](../object/Object.html#propType)`  `[`valToSymbol`](../object/Object.html#valToSymbol)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="getName"></span>

`getName ( )`

[charset.h](../file/charset.h.html)\[[56](../source/charset.h.html#56)\]

<div class="desc">

Get the name of the character set. This simply returns the name that was
given to construct the character set.

</div>

<span id="isMappable"></span>

`isMappable (val)`

[charset.h](../file/charset.h.html)\[[76](../source/charset.h.html#76)\]

<div class="desc">

Determine if a character or string of characters is mappable to this
character set. If the input is an integer, it represents the Unicode
character code for a single character; if the input is a string, each
character in the string is checked. This returns true if every character
given has a valid mapping in the local character set, nil if not. Note
that if a string is given, and even one character is not mappable, this
returns nil.

</div>

<span id="isMappingKnown"></span>

`isMappingKnown ( )`

[charset.h](../file/charset.h.html)\[[65](../source/charset.h.html#65)\]

<div class="desc">

Determine if the mapping is known. This returns true if the character
set has a known local mapping, nil if not. Note that it doesn't matter
whether or not the character set is actually in use on the local
platform; all that matters is that a T3 mapping file is available on
this machine.

</div>

<span id="isRoundTripMappable"></span>

`isRoundTripMappable (val)`

[charset.h](../file/charset.h.html)\[[93](../source/charset.h.html#93)\]

<div class="desc">

Determine if a character or string of characters is "round-trip"
mappable to this character set. If the input is an integer, it
represents a Unicode character code to be tested; if the input is a
string, each character in the string is tested. Returns true if every
character given has a valid round-trip mapping, nil if not.

A character has a round-trip mapping if it can be mapped to this local
character set and then back to Unicode to yield the original character.
If a character has a round-trip mapping, then in general the character
has an exact representation in the local character set (as opposed to an
approximation: if 'a-umlaut' maps to a simple unaccented 'a', or to
'ae', then it has only an approximated representation).

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
