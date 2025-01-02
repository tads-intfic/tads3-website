---
layout: docs
---
<span class="title">moduleAdv3Lite</span><span class="type">object</span>

[modid.t](../file/modid.t.html)\[[596](../source/modid.t.html#596)\]

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



The main adv3Lite library ID.

**`moduleAdv3Lite`**` :   `[`ModuleID`](../object/ModuleID.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`moduleAdv3Lite`**  
[`ModuleID`](../object/ModuleID.html)  
`                 object`  
<span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`byline`](#byline)[`htmlByline`](#htmlByline)[`listingOrder`](#listingOrder)[`listingOrder`](#listingOrder)[`name`](#name)[`version`](#version)



<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`showVersion`](#showVersion)

Inherited from `ModuleID` :  
[`getModuleList`](../object/ModuleID.html#getModuleList)[`showAbout`](../object/ModuleID.html#showAbout)[`showCredit`](../object/ModuleID.html#showCredit)[`showVersionMsg`](../object/ModuleID.html#showVersionMsg)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="byline"></span>

`byline`<span class="rem">OVERRIDDEN</span>

[modid.t](../file/modid.t.html)\[[598](../source/modid.t.html#598)\]



*no description available*



<span id="htmlByline"></span>

`htmlByline`<span class="rem">OVERRIDDEN</span>

[modid.t](../file/modid.t.html)\[[599](../source/modid.t.html#599)\]



*no description available*



<span id="listingOrder"></span>

`listingOrder`<span class="rem">OVERRIDDEN</span>

[modid.t](../file/modid.t.html)\[[611](../source/modid.t.html#611)\]



We use a listing order of 50 so that, if all of the other credits use
the defaults, we appear after the game's own credits (conventionally at
listing order 1) and before any extension credits (which inherit the
default order 100), but so that there's room for extensions that want to
appear before us, or after us but before any default-ordered extensions.



<span id="listingOrder"></span>

`listingOrder`<span class="rem">OVERRIDDEN</span>

[modid.t](../file/modid.t.html)\[[642](../source/modid.t.html#642)\]



Use a very high listing order so that we're the last thing shown.



<span id="name"></span>

`name`<span class="rem">OVERRIDDEN</span>

[modid.t](../file/modid.t.html)\[[597](../source/modid.t.html#597)\]



*no description available*



<span id="version"></span>

`version`<span class="rem">OVERRIDDEN</span>

[modid.t](../file/modid.t.html)\[[601](../source/modid.t.html#601)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="showVersion"></span>

`showVersion ( )`<span class="rem">OVERRIDDEN</span>

[modid.t](../file/modid.t.html)\[[624](../source/modid.t.html#624)\]



An ID module not for the library but for the T3 VM itself. This doesn't
display any credit information, but displays version number information
for the VM so that the "version" command shows what version of the
interpreter is in use.





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


