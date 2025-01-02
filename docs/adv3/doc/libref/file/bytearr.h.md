---
layout: docs
---
<span class="title">bytearr.h</span><span class="type">file</span>

[source file](../source/bytearr.h.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

**Macros**  
[Summary](#_MacroSummary_)  
[Details](#_Macros_)

**Enums**  
[Summary](#_EnumSummary_)  
[Details](#_Enums_)

**Templates**  
[Summary](#_TemplateSummary_)  
[Details](#_Templates_)

<div class="fdesc">

This header defines the ByteArray intrinsic class.

</div>

<span id="_ClassSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Classes</span>  

</div>

` `[`ByteArray`](../object/ByteArray.html)`  `
<span id="FunctionSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Global Functions</span>  

</div>

*(none)* <span id="_MacroSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Macros</span>  

</div>

` `[`FmtBigEndian`](#FmtBigEndian)`  `[`FmtInt16BE`](#FmtInt16BE)`  `[`FmtInt16LE`](#FmtInt16LE)`  `[`FmtInt32BE`](#FmtInt32BE)`  `[`FmtInt32LE`](#FmtInt32LE)`  `[`FmtInt8`](#FmtInt8)`  `[`FmtLittleEndian`](#FmtLittleEndian)`  `[`FmtSigned`](#FmtSigned)`  `[`FmtSize16`](#FmtSize16)`  `[`FmtSize32`](#FmtSize32)`  `[`FmtSize8`](#FmtSize8)`  `[`FmtUInt16BE`](#FmtUInt16BE)`  `[`FmtUInt16LE`](#FmtUInt16LE)`  `[`FmtUInt8`](#FmtUInt8)`  `[`FmtUnsigned`](#FmtUnsigned)`  `

<span id="_EnumSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Enums</span>  

</div>

*(none)* <span id="_TemplateSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Templates</span>  

</div>

*(none)* <span id="_Functions_"></span>

<div class="mjhd">

<span class="hdln">Global Functions</span>  

</div>

*(none)* <span id="_Macros_"></span>

<div class="mjhd">

<span class="hdln">Macros</span>  

</div>

<span id="FmtBigEndian"></span>

`FmtBigEndian`

[bytearr.h](../file/bytearr.h.html)\[[228](../source/bytearr.h.html#228)\]

<div class="desc">

`0x0010`  
*no description available*

</div>

<span id="FmtInt16BE"></span>

`FmtInt16BE`

[bytearr.h](../file/bytearr.h.html)\[[240](../source/bytearr.h.html#240)\]

<div class="desc">

`(FmtSize16 | FmtBigEndian | FmtSigned)`  
*no description available*

</div>

<span id="FmtInt16LE"></span>

`FmtInt16LE`

[bytearr.h](../file/bytearr.h.html)\[[238](../source/bytearr.h.html#238)\]

<div class="desc">

`(FmtSize16 | FmtLittleEndian | FmtSigned)`  
*no description available*

</div>

<span id="FmtInt32BE"></span>

`FmtInt32BE`

[bytearr.h](../file/bytearr.h.html)\[[244](../source/bytearr.h.html#244)\]

<div class="desc">

`(FmtSize32 | FmtBigEndian | FmtSigned)`  
*no description available*

</div>

<span id="FmtInt32LE"></span>

`FmtInt32LE`

[bytearr.h](../file/bytearr.h.html)\[[243](../source/bytearr.h.html#243)\]

<div class="desc">

`(FmtSize32 | FmtLittleEndian | FmtSigned)`  
*no description available*

</div>

<span id="FmtInt8"></span>

`FmtInt8`

[bytearr.h](../file/bytearr.h.html)\[[235](../source/bytearr.h.html#235)\]

<div class="desc">

`(FmtSize8 | FmtSigned)`  
pre-composed integer formats

</div>

<span id="FmtLittleEndian"></span>

`FmtLittleEndian`

[bytearr.h](../file/bytearr.h.html)\[[227](../source/bytearr.h.html#227)\]

<div class="desc">

`0x0000`  
integer byte orders

</div>

<span id="FmtSigned"></span>

`FmtSigned`

[bytearr.h](../file/bytearr.h.html)\[[231](../source/bytearr.h.html#231)\]

<div class="desc">

`0x0000`  
integer signedness

</div>

<span id="FmtSize16"></span>

`FmtSize16`

[bytearr.h](../file/bytearr.h.html)\[[223](../source/bytearr.h.html#223)\]

<div class="desc">

`0x0001`  
*no description available*

</div>

<span id="FmtSize32"></span>

`FmtSize32`

[bytearr.h](../file/bytearr.h.html)\[[224](../source/bytearr.h.html#224)\]

<div class="desc">

`0x0002`  
*no description available*

</div>

<span id="FmtSize8"></span>

`FmtSize8`

[bytearr.h](../file/bytearr.h.html)\[[222](../source/bytearr.h.html#222)\]

<div class="desc">

`0x0000`  
integer sizes

</div>

<span id="FmtUInt16BE"></span>

`FmtUInt16BE`

[bytearr.h](../file/bytearr.h.html)\[[241](../source/bytearr.h.html#241)\]

<div class="desc">

`(FmtSize16 | FmtBigEndian | FmtUnsigned)`  
*no description available*

</div>

<span id="FmtUInt16LE"></span>

`FmtUInt16LE`

[bytearr.h](../file/bytearr.h.html)\[[239](../source/bytearr.h.html#239)\]

<div class="desc">

`(FmtSize16 | FmtLittleEndian | FmtUnsigned)`  
*no description available*

</div>

<span id="FmtUInt8"></span>

`FmtUInt8`

[bytearr.h](../file/bytearr.h.html)\[[236](../source/bytearr.h.html#236)\]

<div class="desc">

`(FmtSize8 | FmtUnsigned)`  
*no description available*

</div>

<span id="FmtUnsigned"></span>

`FmtUnsigned`

[bytearr.h](../file/bytearr.h.html)\[[232](../source/bytearr.h.html#232)\]

<div class="desc">

`0x0100`  
*no description available*

</div>

<span id="_Enums_"></span>

<div class="mjhd">

<span class="hdln">Enums</span>  

</div>

*(none)* <span id="_Templates_"></span>

<div class="mjhd">

<span class="hdln">Templates</span>  

</div>

*(none)*

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
