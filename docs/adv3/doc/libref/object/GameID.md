---
layout: docs
---
<span class="title">GameID</span><span class="type">class</span>

[modid.t](../file/modid.t.html)\[[553](../source/modid.t.html#553)\]

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

Base class for the game's module ID. This merely sets the listing order
to 1 so that the game's credit is listed first. Normally, exactly one
GameID object, called 'versionInfo', is defined in a game, to provide
the game's identifying information.

Note that this class is based on GameInfoModuleID, so the library will
automatically write out a gameinfo.txt file based on this object's
settings. For full GameInfo data, the game should minimally define the
following properties (see GameInfoModuleID and ModuleID for details on
these properties):

  
IFID - a random 32-digit hex number to uniquely identify the game;  
you can generate one at http://www.tads.org/ifidgen/ifidgen  
name - the name of the game  
byline - the main author credit: "by so and so"  
htmlByline - the main author credit as an HTML fragment  
authorEmail - the authors' names and email addresses (in GameInfo
format)  
desc - a short blurb describing the game, in plain text format  
htmlDesc - the descriptive blurb as an HTML ragment  
version - the game's version string

In addition, you can override the following settings if you don't like
the defaults inherited from GameInfoModuleID:

  
releaseDate - the release date string (YYYY-MM-DD)  
licenseType - freeware, shareware, etc.  
copyingRules - summary rules on copying  
presentationProfile - Multimedia, Plain Text

`class `**`GameID`**` :   `[`GameInfoModuleID`](../object/GameInfoModuleID.html)

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`GameID`**  
[`GameInfoModuleID`](../object/GameInfoModuleID.html)  
[`MetadataModuleID`](../object/MetadataModuleID.html)  
[`ModuleID`](../object/ModuleID.html)  
`                                 object`  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                                         object`  
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

[`listingOrder`](#listingOrder)

Inherited from `GameInfoModuleID` :  
[`authorEmail`](../object/GameInfoModuleID.html#authorEmail)[`copyingRules`](../object/GameInfoModuleID.html#copyingRules)[`desc`](../object/GameInfoModuleID.html#desc)[`execAfterMe`](../object/GameInfoModuleID.html#execAfterMe)[`firstPublished`](../object/GameInfoModuleID.html#firstPublished)[`forgivenessLevel`](../object/GameInfoModuleID.html#forgivenessLevel)[`gameInfoFilename`](../object/GameInfoModuleID.html#gameInfoFilename)[`gameUrl`](../object/GameInfoModuleID.html#gameUrl)[`genreName`](../object/GameInfoModuleID.html#genreName)[`headline`](../object/GameInfoModuleID.html#headline)[`htmlDesc`](../object/GameInfoModuleID.html#htmlDesc)[`IFID`](../object/GameInfoModuleID.html#IFID)[`languageCode`](../object/GameInfoModuleID.html#languageCode)[`licenseType`](../object/GameInfoModuleID.html#licenseType)[`metadataKeys`](../object/GameInfoModuleID.html#metadataKeys)[`presentationProfile`](../object/GameInfoModuleID.html#presentationProfile)[`releaseDate`](../object/GameInfoModuleID.html#releaseDate)[`seriesName`](../object/GameInfoModuleID.html#seriesName)[`seriesNumber`](../object/GameInfoModuleID.html#seriesNumber)



Inherited from `ModuleID` :  
[`byline`](../object/ModuleID.html#byline)[`htmlByline`](../object/ModuleID.html#htmlByline)[`name`](../object/ModuleID.html#name)[`version`](../object/ModuleID.html#version)



Inherited from `ModuleExecObject` :  
[`execBeforeMe`](../object/ModuleExecObject.html#execBeforeMe)[`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_)[`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_)[`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

[`showCredit`](#showCredit)[`showVersion`](#showVersion)

Inherited from `GameInfoModuleID` :  
[`execute`](../object/GameInfoModuleID.html#execute)[`getGameInfoToday`](../object/GameInfoModuleID.html#getGameInfoToday)[`writeMetadataFile`](../object/GameInfoModuleID.html#writeMetadataFile)



Inherited from `ModuleID` :  
[`getModuleList`](../object/ModuleID.html#getModuleList)[`showAbout`](../object/ModuleID.html#showAbout)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute)[`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="listingOrder"></span>

`listingOrder`<span class="rem">OVERRIDDEN</span>

[modid.t](../file/modid.t.html)\[[555](../source/modid.t.html#555)\]

<div class="desc">

always list the game's credits before any library credits

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="showCredit"></span>

`showCredit ( )`<span class="rem">OVERRIDDEN</span>

[modid.t](../file/modid.t.html)\[[570](../source/modid.t.html#570)\]

<div class="desc">

Show the game's credits. By default, we'll just show our name and
by-line.

Typically, authors will want to override this to display the full
credits for the game. Most authors like to show the author or authors,
along with notes of thanks to important contributors.

Note that libraries generally will not show anything automatically in
the credits, to allow the author full control over the formatting of the
credits. Authors are encouraged to give credit where it's due for any
libraries they use.

</div>

<span id="showVersion"></span>

`showVersion ( )`<span class="rem">OVERRIDDEN</span>

[modid.t](../file/modid.t.html)\[[580](../source/modid.t.html#580)\]

<div class="desc">

show a blank line after the game's version information, to make it stand
apart from the list of library and VM version numbers

</div>

<div class="ftr">

TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3

</div>
