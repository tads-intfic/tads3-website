---
layout: docs
---
<span class="title">moduleAdv3</span><span class="type">object</span>

[modid.t](../file/modid.t.html)\[[591](../source/modid.t.html#591)\]

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

The main TADS 3 library ID.

**`moduleAdv3`**` :   `[`ModuleID`](../object/ModuleID.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`moduleAdv3`**  
[`ModuleID`](../object/ModuleID.html)  
`                 object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

[`byline`](#byline)[`htmlByline`](#htmlByline)[`listingOrder`](#listingOrder)[`listingOrder`](#listingOrder)[`name`](#name)[`version`](#version)



<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`showVersion`](#showVersion)

Inherited from `ModuleID` :  
[`getModuleList`](../object/ModuleID.html#getModuleList)[`showAbout`](../object/ModuleID.html#showAbout)[`showCredit`](../object/ModuleID.html#showCredit)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="byline"></span>

`byline`<span class="rem">OVERRIDDEN</span>

[modid.t](../file/modid.t.html)\[[593](../source/modid.t.html#593)\]

<div class="desc">

*no description available*

</div>

<span id="htmlByline"></span>

`htmlByline`<span class="rem">OVERRIDDEN</span>

[modid.t](../file/modid.t.html)\[[594](../source/modid.t.html#594)\]

<div class="desc">

*no description available*

</div>

<span id="listingOrder"></span>

`listingOrder`<span class="rem">OVERRIDDEN</span>

[modid.t](../file/modid.t.html)\[[606](../source/modid.t.html#606)\]

<div class="desc">

We use a listing order of 50 so that, if all of the other credits use
the defaults, we appear after the game's own credits (conventionally at
listing order 1) and before any extension credits (which inherit the
default order 100), but so that there's room for extensions that want to
appear before us, or after us but before any default-ordered extensions.

</div>

<span id="listingOrder"></span>

`listingOrder`<span class="rem">OVERRIDDEN</span>

[modid.t](../file/modid.t.html)\[[636](../source/modid.t.html#636)\]

<div class="desc">

Use a very high listing order so that we're the last thing shown.

</div>

<span id="name"></span>

`name`<span class="rem">OVERRIDDEN</span>

[modid.t](../file/modid.t.html)\[[592](../source/modid.t.html#592)\]

<div class="desc">

*no description available*

</div>

<span id="version"></span>

`version`<span class="rem">OVERRIDDEN</span>

[modid.t](../file/modid.t.html)\[[596](../source/modid.t.html#596)\]

<div class="desc">

*no description available*

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="showVersion"></span>

`showVersion ( )`<span class="rem">OVERRIDDEN</span>

[modid.t](../file/modid.t.html)\[[618](../source/modid.t.html#618)\]

<div class="desc">

An ID module not for the library but for the T3 VM itself. This doesn't
display any credit information, but displays version number information
for the VM so that the "version" command shows what version of the
interpreter is in use.

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
