[libMessages]{.title}[object]{.type}

[english.t](../file/english.t.html)\[[3956](../source/english.t.html#3956)\]

[Superclass\
Tree](#_SuperClassTree_)

[Property\
Summary](#_PropSummary_)

[Method\
Summary](#_MethodSummary_)

[Property\
Details](#_Properties_)

[Method\
Details](#_Methods_)

::: fdesc
The libMessages object contains a number of messages/string values
needed by the menu system and the WebUI. It is not used for any other
library messages.

**`libMessages`**` :   object`
:::

[]{#_SuperClassTree_}

::: mjhd
[Superclass Tree]{.hdln}   (in declaration order)
:::

**`libMessages`**\
`         object`\
[]{#_PropSummary_}

::: mjhd
[Summary of Properties]{.hdln}  
:::

` `[`dlgButtonCancel`](#dlgButtonCancel)`  `[`dlgButtonNo`](#dlgButtonNo)`  `[`dlgButtonOk`](#dlgButtonOk)`  `[`dlgButtonYes`](#dlgButtonYes)`  `[`dlgTitleError`](#dlgTitleError)`  `[`dlgTitleInfo`](#dlgTitleInfo)`  `[`dlgTitleNone`](#dlgTitleNone)`  `[`dlgTitleQuestion`](#dlgTitleQuestion)`  `[`dlgTitleWarning`](#dlgTitleWarning)`  `[`inputFileScriptWarningButtons`](#inputFileScriptWarningButtons)`  `[`menuKeyList`](#menuKeyList)`  `[`menuLongTopicEnd`](#menuLongTopicEnd)`  `[`menuTopicListEnd`](#menuTopicListEnd)`  `[`nextMenuTopicLink`](#nextMenuTopicLink)`  `[`prevMenuLink`](#prevMenuLink)`  `[`webUploadTooBig`](#webUploadTooBig)`  `

[]{#_MethodSummary_}

::: mjhd
[Summary of Methods]{.hdln}  
:::

` `[`inputFileScriptWarning`](#inputFileScriptWarning)`  `[`menuInstructions`](#menuInstructions)`  `[`menuNextChapter`](#menuNextChapter)`  `[`menuTopicProgress`](#menuTopicProgress)`  `[`textMenuMainPrompt`](#textMenuMainPrompt)`  `[`textMenuTopicPrompt`](#textMenuTopicPrompt)`  `[`webNewUser`](#webNewUser)`  `

[]{#_Properties_}

::: mjhd
[Properties]{.hdln}  
:::

[]{#dlgButtonCancel}

`dlgButtonCancel`

[english.t](../file/english.t.html)\[[4067](../source/english.t.html#4067)\]

::: desc
*no description available*
:::

[]{#dlgButtonNo}

`dlgButtonNo`

[english.t](../file/english.t.html)\[[4069](../source/english.t.html#4069)\]

::: desc
*no description available*
:::

[]{#dlgButtonOk}

`dlgButtonOk`

[english.t](../file/english.t.html)\[[4066](../source/english.t.html#4066)\]

::: desc
Standard dialog button labels, for the Web UI. These are built in to the
conventional interpreters, but in the Web UI we have to generate these
ourselves.
:::

[]{#dlgButtonYes}

`dlgButtonYes`

[english.t](../file/english.t.html)\[[4068](../source/english.t.html#4068)\]

::: desc
*no description available*
:::

[]{#dlgTitleError}

`dlgTitleError`

[english.t](../file/english.t.html)\[[4059](../source/english.t.html#4059)\]

::: desc
*no description available*
:::

[]{#dlgTitleInfo}

`dlgTitleInfo`

[english.t](../file/english.t.html)\[[4057](../source/english.t.html#4057)\]

::: desc
*no description available*
:::

[]{#dlgTitleNone}

`dlgTitleNone`

[english.t](../file/english.t.html)\[[4055](../source/english.t.html#4055)\]

::: desc
Standard dialog titles, for the Web UI. These are shown in the title bar
area of the Web UI dialog used for inputDialog() calls. These correspond
to the InDlgIconXxx icons. The conventional interpreters use built-in
titles when titles are needed at all, but in the Web UI we have to
generate these ourselves.
:::

[]{#dlgTitleQuestion}

`dlgTitleQuestion`

[english.t](../file/english.t.html)\[[4058](../source/english.t.html#4058)\]

::: desc
*no description available*
:::

[]{#dlgTitleWarning}

`dlgTitleWarning`

[english.t](../file/english.t.html)\[[4056](../source/english.t.html#4056)\]

::: desc
*no description available*
:::

[]{#inputFileScriptWarningButtons}

`inputFileScriptWarningButtons`

[english.t](../file/english.t.html)\[[4089](../source/english.t.html#4089)\]

::: desc
build the message
:::

[]{#menuKeyList}

`menuKeyList`

[english.t](../file/english.t.html)\[[3969](../source/english.t.html#3969)\]

::: desc
Command key list for the menu system. This uses the format defined for
MenuItem.keyList in the menu system. Keys must be given as lower-case in
order to match input, since the menu system converts input keys to lower
case before matching keys to this list.

Note that the first item in each list is what will be given in the
navigation menu, which is why the fifth list contains \'ENTER\' as its
first item, even though this will never match a key press.
:::

[]{#menuLongTopicEnd}

`menuLongTopicEnd`

[english.t](../file/english.t.html)\[[4023](../source/english.t.html#4023)\]

::: desc
Message to display at the end of a \"long topic\" in the menu system.
We\'ll display this at the end of the long topic\'s contents.
:::

[]{#menuTopicListEnd}

`menuTopicListEnd`

[english.t](../file/english.t.html)\[[4016](../source/english.t.html#4016)\]

::: desc
Message to display at the end of a topic list. We\'ll display this after
we\'ve displayed all available items from a MenuTopicItem\'s list of
items, to let the user know that there are no more items available.
:::

[]{#nextMenuTopicLink}

`nextMenuTopicLink`

[english.t](../file/english.t.html)\[[3981](../source/english.t.html#3981)\]

::: desc
link title for \'next topic\' navigation link in topic lists
:::

[]{#prevMenuLink}

`prevMenuLink`

[english.t](../file/english.t.html)\[[3978](../source/english.t.html#3978)\]

::: desc
link title for \'previous menu\' navigation link
:::

[]{#webUploadTooBig}

`webUploadTooBig`

[english.t](../file/english.t.html)\[[4093](../source/english.t.html#4093)\]

::: desc
Web UI inputFile error: uploaded file is too large
:::

[]{#_Methods_}

::: mjhd
[Methods]{.hdln}  
:::

[]{#inputFileScriptWarning}

`inputFileScriptWarning (warning, filename)`

[english.t](../file/english.t.html)\[[4081](../source/english.t.html#4081)\]

::: desc
Warning prompt for inputFile() warnings generated when reading a script
file, for the Web UI. The interpreter normally displays these warnings
directly, but in Web UI mode, the program is responsible, so we need
localized messages.
:::

[]{#menuInstructions}

`menuInstructions (keylist, prevLink)`

[english.t](../file/english.t.html)\[[4030](../source/english.t.html#4030)\]

::: desc
instructions text for banner-mode menus - this is displayed in the
instructions bar at the top of the screen, above the menu banner area
:::

[]{#menuNextChapter}

`menuNextChapter (keylist, title, hrefNext, hrefUp)`

[english.t](../file/english.t.html)\[[4041](../source/english.t.html#4041)\]

::: desc
show a \'next chapter\' link
:::

[]{#menuTopicProgress}

`menuTopicProgress (cur, tot)`

[english.t](../file/english.t.html)\[[4008](../source/english.t.html#4008)\]

::: desc
Position indicator for topic list items - this is displayed after a
topic list item to show the current item number and the total number of
items in the list, to give the user an idea of where they are in the
overall list.
:::

[]{#textMenuMainPrompt}

`textMenuMainPrompt (keylist)`

[english.t](../file/english.t.html)\[[3987](../source/english.t.html#3987)\]

::: desc
main prompt text for text-mode menus - this is displayed each time we
ask for a keystroke to navigate a menu in text-only mode
:::

[]{#textMenuTopicPrompt}

`textMenuTopicPrompt ( )`

[english.t](../file/english.t.html)\[[3995](../source/english.t.html#3995)\]

::: desc
prompt text for topic lists in text-mode menus
:::

[]{#webNewUser}

`webNewUser (name)`

[english.t](../file/english.t.html)\[[4072](../source/english.t.html#4072)\]

::: desc
web UI alert when a new user has joined a multi-user session
:::

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::
