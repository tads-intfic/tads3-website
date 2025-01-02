---
layout: docs
---
<span class="title">MetadataModuleID</span><span class="type">class</span>

[modid.t](../file/modid.t.html)\[[194](../source/modid.t.html#194)\]

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



A module ID with metadata. During pre-initialization, we'll
automatically write out a file with the metadata for each of these
objects. This is an abstract base class; a subclass must be created for
each specific metadata format.

`class `**`MetadataModuleID`**` :   `[`ModuleID`](../object/ModuleID.html)[`PreinitObject`](../object/PreinitObject.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`MetadataModuleID`**  
[`ModuleID`](../object/ModuleID.html)  
`                 object`  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                         object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`MetadataModuleID`**  
[`GameInfoModuleID`](../object/GameInfoModuleID.html)  
[`GameID`](../object/GameID.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  





Inherited from `ModuleID` :  
[`byline`](../object/ModuleID.html#byline)[`htmlByline`](../object/ModuleID.html#htmlByline)[`listingOrder`](../object/ModuleID.html#listingOrder)[`name`](../object/ModuleID.html#name)[`version`](../object/ModuleID.html#version)

Inherited from `PreinitObject` :  
[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe)[`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)

Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe)[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`execute`](#execute)[`writeMetadataFile`](#writeMetadataFile)

Inherited from `ModuleID` :  
[`getModuleList`](../object/ModuleID.html#getModuleList)[`showAbout`](../object/ModuleID.html#showAbout)[`showCredit`](../object/ModuleID.html#showCredit)[`showVersion`](../object/ModuleID.html#showVersion)[`showVersionMsg`](../object/ModuleID.html#showVersionMsg)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute)[`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



*(none)* <span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="execute"></span>

`execute ( )`<span class="rem">OVERRIDDEN</span>

[modid.t](../file/modid.t.html)\[[196](../source/modid.t.html#196)\]



execute pre-initialization



<span id="writeMetadataFile"></span>

`writeMetadataFile ( )`

[modid.t](../file/modid.t.html)\[[208](../source/modid.t.html#208)\]



write our metadata file - this must be overridden by each subclass to
carry out the specific steps needed to create and write the metadata
file in the appropriate format for the subclass





Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


