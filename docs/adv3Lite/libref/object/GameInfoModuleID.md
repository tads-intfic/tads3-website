---
layout: docs
---
<span class="title">GameInfoModuleID</span><span class="type">class</span>

[modid.t](../file/modid.t.html)\[[223](../source/modid.t.html#223)\]

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



A module ID with GameInfo metadata. The GameInfo metadata format is the
standard TADS format for descriptive data about the game. The usual way
to use GameInfo metadata is to create a file called "gameinfo.txt" for a
game, then embed this file directly in the game's .t3 file using the
TADS 3 resource bundler (t3res). Once the gameinfo.txt is embedded in
the .t3 file, tools will be able to read the game's descriptive data
directly from the .t3 file. For example, HTML TADS on Windows can read
the information into its Game Chest, which allows the interpreter to
show the full name of the game, the author, and a blurb describing the
game, among other things.

`class `**`GameInfoModuleID`**` :   `[`MetadataModuleID`](../object/MetadataModuleID.html)



<span id="_SuperClassTree_"></span>



<span class="hdln">Superclass Tree</span>   (in declaration order)



**`GameInfoModuleID`**  
[`MetadataModuleID`](../object/MetadataModuleID.html)  
[`ModuleID`](../object/ModuleID.html)  
`                         object`  
[`PreinitObject`](../object/PreinitObject.html)  
[`ModuleExecObject`](../object/ModuleExecObject.html)  
`                                 object`  
<span id="_SubClassTree_"></span>



<span class="hdln">Subclass Tree</span>  



**`GameInfoModuleID`**  
[`GameID`](../object/GameID.html)  
<span id="_ObjectSummary_"></span>



<span class="hdln">Global Objects</span>  



*(none)* <span id="_PropSummary_"></span>



<span class="hdln">Summary of Properties</span>  



[`authorEmail`](#authorEmail) [`copyingRules`](#copyingRules) [`desc`](#desc) [`firstPublished`](#firstPublished) [`forgivenessLevel`](#forgivenessLevel) [`gameInfoFilename`](#gameInfoFilename) [`gameUrl`](#gameUrl) [`genreName`](#genreName) [`headline`](#headline) [`htmlDesc`](#htmlDesc) [`IFID`](#IFID) [`languageCode`](#languageCode) [`licenseType`](#licenseType) [`metadataKeys`](#metadataKeys) [`presentationProfile`](#presentationProfile) [`releaseDate`](#releaseDate) [`seriesName`](#seriesName) [`seriesNumber`](#seriesNumber)



Inherited from `ModuleID` :  
[`byline`](../object/ModuleID.html#byline) [`htmlByline`](../object/ModuleID.html#htmlByline) [`listingOrder`](../object/ModuleID.html#listingOrder) [`name`](../object/ModuleID.html#name) [`version`](../object/ModuleID.html#version)

Inherited from `PreinitObject` :  
[`execBeforeMe`](../object/PreinitObject.html#execBeforeMe) [`reverseGlobalSymbols`](../object/PreinitObject.html#reverseGlobalSymbols)

Inherited from `ModuleExecObject` :  
[`execAfterMe`](../object/ModuleExecObject.html#execAfterMe) [`hasInitialized_`](../object/ModuleExecObject.html#hasInitialized_) [`isDoingExec_`](../object/ModuleExecObject.html#isDoingExec_) [`isExecuted_`](../object/ModuleExecObject.html#isExecuted_)

<span id="_MethodSummary_"></span>



<span class="hdln">Summary of Methods</span>  



[`getGameInfoToday`](#getGameInfoToday) [`writeMetadataFile`](#writeMetadataFile)

Inherited from `MetadataModuleID` :  
[`execute`](../object/MetadataModuleID.html#execute)

Inherited from `ModuleID` :  
[`getModuleList`](../object/ModuleID.html#getModuleList) [`showAbout`](../object/ModuleID.html#showAbout) [`showCredit`](../object/ModuleID.html#showCredit) [`showVersion`](../object/ModuleID.html#showVersion) [`showVersionMsg`](../object/ModuleID.html#showVersionMsg)



Inherited from `ModuleExecObject` :  
[`_execute`](../object/ModuleExecObject.html#_execute) [`classExec`](../object/ModuleExecObject.html#classExec)

<span id="_Properties_"></span>



<span class="hdln">Properties</span>  



<span id="authorEmail"></span>

`authorEmail`

[modid.t](../file/modid.t.html)\[[318](../source/modid.t.html#318)\]



The names and email addresses of the authors, in GameInfo format. This
list must use the following format:

author one \<email\>; author two \<email\> \<email\>; ...

In other words, list the first author's name, followed by one or more
email addresses, in angle brackets, for the first author. If more than
one author is to be listed, add a semicolon, followed by the name of the
second author, followed by the second author's email address or
addresses, enclosing each in angle brackets. Repeat as needed for
additional authors. The list does not need to end with a semicolon;
semicolons are merely used to separate entries.



<span id="copyingRules"></span>

`copyingRules`

[modid.t](../file/modid.t.html)\[[417](../source/modid.t.html#417)\]



The copying rules for this game. Most text games these days are released
as freeware with minimal restrictions on copying, so we use a default of
"nominal cost only." Other values defined in the GameInfo format include
Prohibited, No Restrictions, No-Cost Only, At-Cost Only, and Other. A
modifier indicates whether or not the game may be included in
compilations (such as those "10,001 great games" CD-R's that people like
to sell on auction sites); we indicate that inclusion in compilations is
allowed by default. You can change this to "Compilations Prohibited" if
you prefer not to allow your game to be distributed in that fashion.

Note that the restrictions specified here aren't enforced by any sort of
copy-protection or DRM (digital rights management) technology. This
information is entirely for the benefit of conscientious users who want
to abide by your wishes and thus need to know what your wishes are.

The GameInfo bundle is mostly for the benefit of software that can
extract the information from the compiled game. So, we recommend that
you also put a full notice and explanation of your license restrictions
somewhere that users can easily find it, such as in a separate
LICENSE.TXT file that you distribute with your game, or in the text of
the game itself (displayed by a LICENSE or COPYRIGHT command, for
example).



<span id="desc"></span>

`desc`

[modid.t](../file/modid.t.html)\[[332](../source/modid.t.html#332)\]



Descriptive text for the game, in plain text format. This is a short
description that can be used, for example, in a catalog of games. This
should be a couple of sentences or so.



<span id="firstPublished"></span>

`firstPublished`

[modid.t](../file/modid.t.html)\[[362](../source/modid.t.html#362)\]



The date of first publication. This can be just a year in YYYY format,
or a full YYYY-MM-DD date. This is the original release date of the
original version of the game, which is often of interest to archivists.
This should \*not\* be updated when a new release is made - it's always
the date of \*original\* publication.



<span id="forgivenessLevel"></span>

`forgivenessLevel`

[modid.t](../file/modid.t.html)\[[301](../source/modid.t.html#301)\]



The forgiveness level, according to the Zarfian scale propounded by
Andrew Plotkin on rec.arts.int-fiction. This must be one of these terms,
using the exact capitalization shown: Merciful, Polite, Tough, Nasty,
Cruel.



<span id="gameInfoFilename"></span>

`gameInfoFilename`

[modid.t](../file/modid.t.html)\[[471](../source/modid.t.html#471)\]



the GameInfo filename - by default, we write the standard gameinfo.txt
file



<span id="gameUrl"></span>

`gameUrl`

[modid.t](../file/modid.t.html)\[[325](../source/modid.t.html#325)\]



The game's web site, if any. If specified, this must be an absolute URL
with http protocol - that is, it must be of the form
"http://mydomain.com/...".



<span id="genreName"></span>

`genreName`

[modid.t](../file/modid.t.html)\[[293](../source/modid.t.html#293)\]



The genre of the game. Some games don't fit any particular genre, and
some authors just don't like the idea of having to pigeonhole their
games, so feel free to leave it out. If there's a good fit to a
well-established genre, though, you can specify it here. We recommend
you keep this short - one word, maybe two - and use a genre name that's
generally recognized as such. You might want to use Baf's Guide as a
reference (http://www.wurb.com/if/genre).



<span id="headline"></span>

`headline`

[modid.t](../file/modid.t.html)\[[269](../source/modid.t.html#269)\]



The game's headline. It's become an IF tradition to use a quasi-subtitle
of the sort that Infocom used, of the form "An Interactive Mystery."
This can be used to define that subtitle.



<span id="htmlDesc"></span>

`htmlDesc`

[modid.t](../file/modid.t.html)\[[344](../source/modid.t.html#344)\]



Descriptive text for the game, as an HTML fragment. This should have the
same information as the 'desc', but this version can use HTML markups
(including tags and character entities) to embellish the display of the
text. Any HTML markups should be "in-line" body elements only, not
"block" or head elements, so that this text can be inserted into a
larger HTML document. For example, markups like \<i\> and \<b\> are
fine, but \<p\> and \<table\> should not be used.



<span id="IFID"></span>

`IFID`

[modid.t](../file/modid.t.html)\[[262](../source/modid.t.html#262)\]



The IFID - this is a UUID uniquely identifying the game, using the
standard UUID format (xxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx, where each 'x'
is a hexadecimal digit). You should pick an IFID when you start each
game project, and then keep the same IFID throughout the game's entire
existence, \*including\* version updates. Each new version release of
the same game - even major new versions - should use the same IFID, so
that the versions can all be related to one another as the same game.

If the game has multiple IFIDs, list them here, separated by commas. You
should NOT \*intentionally\* create multiple IFIDs for your game; once
you've created an IFID, it should be the unique and permanent identifier
for the game. In particular, do NOT create a new IFID for a new version:
the whole series of releases throughout a game's lifetime should be
identified by a single IFID, so that archivists will know that the
versions are all incarnations of the same work.

The reason that multiple IFIDs are allowed at all is that many older
games were not assigned explicit UUID-style IFIDs when released. In such
cases, the game has an "implied" IFID based on an MD5 hash of the
compiled game file's contents. Every release that doesn't contain an
explicit IFID will therefore have a different implied IFID. So, for
example, if you've already released versions 1, 2, and 3 of your game,
and you didn't assign explicit IFID values to those releases, each
version will have a different implied IFID. When you release version 4,
you should NOT assign a new UUID-style IFID. Instead, in the IFID string
here, list ALL THREE of the implied IFIDs from the past releases. Each
of the three IFIDs counts from now on as an IFID for the work, for all
versions collectively. (By placing the list of IFIDs in version 4, you
prevent version 4 from adding yet another implied IFID of its own: the
explicit IFID list supersedes the implied IFID.) See the Babel spec for
more information, and for instructions on how to calculate the implied
IFID for a TADS game that was released without a UUID-style IFID.



<span id="languageCode"></span>

`languageCode`

[modid.t](../file/modid.t.html)\[[372](../source/modid.t.html#372)\]



The language in which this game's text is written. This is the RFC3066
language code for the main language of the work. For example, games
written in US English would use 'en-US', while games written in British
English would use 'en-GB'. Note that each language-specific library
module should use 'modify' to set this to the default for the library.



<span id="licenseType"></span>

`licenseType`

[modid.t](../file/modid.t.html)\[[389](../source/modid.t.html#389)\]



The license type for this game. Most text IF games these days are
released as freeware, so we use this as the default. The GameInfo
metadata format defines several other standard license types, including
Public Domain, Shareware, Commercial Demo, Commercial, and Other.
Authors should change this if they plan to release under a licensing
model other than freeware.

Note that the GameInfo metadata format documentation explicitly states
that the license type indicated here is advisory only and cannot be
considered definitive. This means that this setting does not take away
any of the author's rights to set specific license terms. Even so, we
recommend that you pick an appropriate value here to avoid any
confusion.



<span id="metadataKeys"></span>

`metadataKeys`

[modid.t](../file/modid.t.html)\[[479](../source/modid.t.html#479)\]



The metadata key mappings. This is a list of key/property pairs. The key
in each pair is a string giving a standard GameInfo key name, and the
property gives the property (of self) that we evaluate to get the string
value for that key.



<span id="presentationProfile"></span>

`presentationProfile`

[modid.t](../file/modid.t.html)\[[425](../source/modid.t.html#425)\]



The recommended "presentation profile" for the game. 'Default' means
that the interpreter's default profile should be used. (Some
interpreters let the user select which profile to use as the default, in
which case 'Default' means we'll use that profile.)



<span id="releaseDate"></span>

`releaseDate`

[modid.t](../file/modid.t.html)\[[353](../source/modid.t.html#353)\]



The release date. By default, we compute this statically to be today's
date. This means this will be set to the date of compilation. If the
game wishes to override this, note that the GameInfo format requires
this to be of the form YYYY-MM-DD. For example, December 9, 2001 would
be '2001-12-09'.



<span id="seriesName"></span>

`seriesName`

[modid.t](../file/modid.t.html)\[[281](../source/modid.t.html#281)\]



If this game is part of a series, such as a trilogy, these can be used
to identify the name of the series and the position in the series. The
series name should be something like "The Enchanter Trilogy"; the series
number, if provided, should be a simple integer string ('1', '2', etc)
giving the position in the series. Note that the series number isn't
required even if a series name is specified, since some series are just
groups of works without any particular ordering.



<span id="seriesNumber"></span>

`seriesNumber`

[modid.t](../file/modid.t.html)\[[282](../source/modid.t.html#282)\]



*no description available*



<span id="_Methods_"></span>



<span class="hdln">Methods</span>  



<span id="getGameInfoToday"></span>

`getGameInfoToday ( )`

[modid.t](../file/modid.t.html)\[[507](../source/modid.t.html#507)\]



get today's date, using the GameInfo standard date format (YYYY-MM-DD)



<span id="writeMetadataFile"></span>

`writeMetadataFile ( )`<span class="rem">OVERRIDDEN</span>

[modid.t](../file/modid.t.html)\[[428](../source/modid.t.html#428)\]



write our metadata file
Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1


