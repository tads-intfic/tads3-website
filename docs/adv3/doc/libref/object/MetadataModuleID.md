---
layout: docs
---
<span class="title">MetadataModuleID</span><span class="type">class</span>

[modid.t](../file/modid.t.html)\[[189](../source/modid.t.html#189)\]

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

A module ID with metadata. During pre-initialization, we'll
automatically write out a file with the metadata for each of these
objects. This is an abstract base class; a subclass must be created for
each specific metadata format.

`class `**`MetadataModuleID`**` :   `[`ModuleID`](../object/ModuleID.html)[`PreinitObject`](../object/PreinitObject.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`MetadataModuleID`**  
[`ModuleID`](../object/ModuleID.html)  
`                 object`  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_SubClassTree_"></span>

<div class="mjhd">

<span class="hdln">Subclass Tree</span>  

</div>

**`MetadataModuleID`**  
[`GameInfoModuleID`](../object/GameInfoModuleID.html)  
[`GameID`](../object/GameID.html)  
<span id="_ObjectSummary_"></span>

<div class="mjhd">

<span class="hdln">Global Objects</span>  

</div>

*(none)* <span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>



Inherited from `ModuleID` :  
[`byline`](../object/ModuleID.html#byline)[`htmlByline`](../object/ModuleID.html#htmlByline)[`listingOrder`](../object/ModuleID.html#listingOrder)[`name`](../object/ModuleID.html#name)[`version`](../object/ModuleID.html#version)



Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`execute`](#execute)[`writeMetadataFile`](#writeMetadataFile)

Inherited from `ModuleID` :  
[`getModuleList`](../object/ModuleID.html#getModuleList)[`showAbout`](../object/ModuleID.html#showAbout)[`showCredit`](../object/ModuleID.html#showCredit)[`showVersion`](../object/ModuleID.html#showVersion)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute)[`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

*(none)* <span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[modid.t](../file/modid.t.html)\[[191](../source/modid.t.html#191)\]

<div class="desc">

execute pre-initialization

</div>

<span id="writeMetadataFile"></span>

`writeMetadataFile ( )`

[modid.t](../file/modid.t.html)\[[203](../source/modid.t.html#203)\]

<div class="desc">

write our metadata file - this must be overridden by each subclass to
carry out the specific steps needed to create and write the metadata
file in the appropriate format for the subclass

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
