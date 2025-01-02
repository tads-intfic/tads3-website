---
---
<span class="title">libMessages</span><span class="type">object</span>

[english.t](../file/english.t.html)\[[3956](../source/english.t.html#3956)\]

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

The libMessages object contains a number of messages/string values
needed by the menu system and the WebUI. It is not used for any other
library messages.

**`libMessages`**` :   object`

</div>

<span id="_SuperClassTree_"></span>

<div class="mjhd">

<span class="hdln">Superclass Tree</span>   (in declaration order)

</div>

**`libMessages`**  
`         object`  
<span id="_PropSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Properties</span>  

</div>

` `[`dlgButtonCancel`](#dlgButtonCancel)`  `[`dlgButtonNo`](#dlgButtonNo)`  `[`dlgButtonOk`](#dlgButtonOk)`  `[`dlgButtonYes`](#dlgButtonYes)`  `[`dlgTitleError`](#dlgTitleError)`  `[`dlgTitleInfo`](#dlgTitleInfo)`  `[`dlgTitleNone`](#dlgTitleNone)`  `[`dlgTitleQuestion`](#dlgTitleQuestion)`  `[`dlgTitleWarning`](#dlgTitleWarning)`  `[`inputFileScriptWarningButtons`](#inputFileScriptWarningButtons)`  `[`menuKeyList`](#menuKeyList)`  `[`menuLongTopicEnd`](#menuLongTopicEnd)`  `[`menuTopicListEnd`](#menuTopicListEnd)`  `[`nextMenuTopicLink`](#nextMenuTopicLink)`  `[`prevMenuLink`](#prevMenuLink)`  `[`webUploadTooBig`](#webUploadTooBig)`  `

<span id="_MethodSummary_"></span>

<div class="mjhd">

<span class="hdln">Summary of Methods</span>  

</div>

` `[`inputFileScriptWarning`](#inputFileScriptWarning)`  `[`menuInstructions`](#menuInstructions)`  `[`menuNextChapter`](#menuNextChapter)`  `[`menuTopicProgress`](#menuTopicProgress)`  `[`textMenuMainPrompt`](#textMenuMainPrompt)`  `[`textMenuTopicPrompt`](#textMenuTopicPrompt)`  `[`webNewUser`](#webNewUser)`  `

<span id="_Properties_"></span>

<div class="mjhd">

<span class="hdln">Properties</span>  

</div>

<span id="dlgButtonCancel"></span>

`dlgButtonCancel`

[english.t](../file/english.t.html)\[[4067](../source/english.t.html#4067)\]

<div class="desc">

*no description available*

</div>

<span id="dlgButtonNo"></span>

`dlgButtonNo`

[english.t](../file/english.t.html)\[[4069](../source/english.t.html#4069)\]

<div class="desc">

*no description available*

</div>

<span id="dlgButtonOk"></span>

`dlgButtonOk`

[english.t](../file/english.t.html)\[[4066](../source/english.t.html#4066)\]

<div class="desc">

Standard dialog button labels, for the Web UI. These are built in to the
conventional interpreters, but in the Web UI we have to generate these
ourselves.

</div>

<span id="dlgButtonYes"></span>

`dlgButtonYes`

[english.t](../file/english.t.html)\[[4068](../source/english.t.html#4068)\]

<div class="desc">

*no description available*

</div>

<span id="dlgTitleError"></span>

`dlgTitleError`

[english.t](../file/english.t.html)\[[4059](../source/english.t.html#4059)\]

<div class="desc">

*no description available*

</div>

<span id="dlgTitleInfo"></span>

`dlgTitleInfo`

[english.t](../file/english.t.html)\[[4057](../source/english.t.html#4057)\]

<div class="desc">

*no description available*

</div>

<span id="dlgTitleNone"></span>

`dlgTitleNone`

[english.t](../file/english.t.html)\[[4055](../source/english.t.html#4055)\]

<div class="desc">

Standard dialog titles, for the Web UI. These are shown in the title bar
area of the Web UI dialog used for inputDialog() calls. These correspond
to the InDlgIconXxx icons. The conventional interpreters use built-in
titles when titles are needed at all, but in the Web UI we have to
generate these ourselves.

</div>

<span id="dlgTitleQuestion"></span>

`dlgTitleQuestion`

[english.t](../file/english.t.html)\[[4058](../source/english.t.html#4058)\]

<div class="desc">

*no description available*

</div>

<span id="dlgTitleWarning"></span>

`dlgTitleWarning`

[english.t](../file/english.t.html)\[[4056](../source/english.t.html#4056)\]

<div class="desc">

*no description available*

</div>

<span id="inputFileScriptWarningButtons"></span>

`inputFileScriptWarningButtons`

[english.t](../file/english.t.html)\[[4089](../source/english.t.html#4089)\]

<div class="desc">

build the message

</div>

<span id="menuKeyList"></span>

`menuKeyList`

[english.t](../file/english.t.html)\[[3969](../source/english.t.html#3969)\]

<div class="desc">

Command key list for the menu system. This uses the format defined for
MenuItem.keyList in the menu system. Keys must be given as lower-case in
order to match input, since the menu system converts input keys to lower
case before matching keys to this list.

Note that the first item in each list is what will be given in the
navigation menu, which is why the fifth list contains 'ENTER' as its
first item, even though this will never match a key press.

</div>

<span id="menuLongTopicEnd"></span>

`menuLongTopicEnd`

[english.t](../file/english.t.html)\[[4023](../source/english.t.html#4023)\]

<div class="desc">

Message to display at the end of a "long topic" in the menu system.
We'll display this at the end of the long topic's contents.

</div>

<span id="menuTopicListEnd"></span>

`menuTopicListEnd`

[english.t](../file/english.t.html)\[[4016](../source/english.t.html#4016)\]

<div class="desc">

Message to display at the end of a topic list. We'll display this after
we've displayed all available items from a MenuTopicItem's list of
items, to let the user know that there are no more items available.

</div>

<span id="nextMenuTopicLink"></span>

`nextMenuTopicLink`

[english.t](../file/english.t.html)\[[3981](../source/english.t.html#3981)\]

<div class="desc">

link title for 'next topic' navigation link in topic lists

</div>

<span id="prevMenuLink"></span>

`prevMenuLink`

[english.t](../file/english.t.html)\[[3978](../source/english.t.html#3978)\]

<div class="desc">

link title for 'previous menu' navigation link

</div>

<span id="webUploadTooBig"></span>

`webUploadTooBig`

[english.t](../file/english.t.html)\[[4093](../source/english.t.html#4093)\]

<div class="desc">

Web UI inputFile error: uploaded file is too large

</div>

<span id="_Methods_"></span>

<div class="mjhd">

<span class="hdln">Methods</span>  

</div>

<span id="inputFileScriptWarning"></span>

`inputFileScriptWarning (warning, filename)`

[english.t](../file/english.t.html)\[[4081](../source/english.t.html#4081)\]

<div class="desc">

Warning prompt for inputFile() warnings generated when reading a script
file, for the Web UI. The interpreter normally displays these warnings
directly, but in Web UI mode, the program is responsible, so we need
localized messages.

</div>

<span id="menuInstructions"></span>

`menuInstructions (keylist, prevLink)`

[english.t](../file/english.t.html)\[[4030](../source/english.t.html#4030)\]

<div class="desc">

instructions text for banner-mode menus - this is displayed in the
instructions bar at the top of the screen, above the menu banner area

</div>

<span id="menuNextChapter"></span>

`menuNextChapter (keylist, title, hrefNext, hrefUp)`

[english.t](../file/english.t.html)\[[4041](../source/english.t.html#4041)\]

<div class="desc">

show a 'next chapter' link

</div>

<span id="menuTopicProgress"></span>

`menuTopicProgress (cur, tot)`

[english.t](../file/english.t.html)\[[4008](../source/english.t.html#4008)\]

<div class="desc">

Position indicator for topic list items - this is displayed after a
topic list item to show the current item number and the total number of
items in the list, to give the user an idea of where they are in the
overall list.

</div>

<span id="textMenuMainPrompt"></span>

`textMenuMainPrompt (keylist)`

[english.t](../file/english.t.html)\[[3987](../source/english.t.html#3987)\]

<div class="desc">

main prompt text for text-mode menus - this is displayed each time we
ask for a keystroke to navigate a menu in text-only mode

</div>

<span id="textMenuTopicPrompt"></span>

`textMenuTopicPrompt ( )`

[english.t](../file/english.t.html)\[[3995](../source/english.t.html#3995)\]

<div class="desc">

prompt text for topic lists in text-mode menus

</div>

<span id="webNewUser"></span>

`webNewUser (name)`

[english.t](../file/english.t.html)\[[4072](../source/english.t.html#4072)\]

<div class="desc">

web UI alert when a new user has joined a multi-user session

</div>

<div class="ftr">

Adv3Lite Library Reference Manual  
Generated on 15/03/2023 from adv3Lite version 1.6.1

</div>
