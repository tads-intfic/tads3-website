[tadsiox.h]{.title}[file]{.type}

[source file](../source/tadsiox.h.html)

**Classes**\
[Summary](#_ClassSummary_)\
 

**Functions**\
[Summary](#_FunctionSummary_)\
[Details](#_Functions_)

**Macros**\
[Summary](#_MacroSummary_)\
[Details](#_Macros_)

**Enums**\
[Summary](#_EnumSummary_)\
[Details](#_Enums_)

**Templates**\
[Summary](#_TemplateSummary_)\
[Details](#_Templates_)

::: fdesc
This header defines the tads-io-ext function sets, which provides
optional extensions to the standard input/output set.

These functions are defined in a separate function set from the basic
tads-io set, because the features defined here are available only on
certain platforms. Be aware that using this function set will limit your
program to interpreters that support it, and will prevent your program
from running on some systems.
:::

[]{#_ClassSummary_}

::: mjhd
[Summary of Classes]{.hdln}  
:::

*(none)* []{#FunctionSummary_}

::: mjhd
[Summary of Global Functions]{.hdln}  
:::

` `[`enableSystemMenuCommand`](#enableSystemMenuCommand)`  `[`showPopupMenu`](#showPopupMenu)`  `

[]{#_MacroSummary_}

::: mjhd
[Summary of Macros]{.hdln}  
:::

` `[`MenuStatEventDisable`](#MenuStatEventDisable)`  `[`MenuStatEventEnable`](#MenuStatEventEnable)`  `[`MenuStatLineDisable`](#MenuStatLineDisable)`  `[`MenuStatLineEnable`](#MenuStatLineEnable)`  `[`PopMenuCancel`](#PopMenuCancel)`  `[`PopMenuEof`](#PopMenuEof)`  `[`PopMenuFail`](#PopMenuFail)`  `[`PopMenuHRef`](#PopMenuHRef)`  `

[]{#_EnumSummary_}

::: mjhd
[Summary of Enums]{.hdln}  
:::

*(none)* []{#_TemplateSummary_}

::: mjhd
[Summary of Templates]{.hdln}  
:::

*(none)* []{#_Functions_}

::: mjhd
[Global Functions]{.hdln}  
:::

[]{#enableSystemMenuCommand}

`enableSystemMenuCommand (id, stat)`

[tadsiox.h](../file/tadsiox.h.html)\[[106](../source/tadsiox.h.html#106)\]

::: desc
Enable/disable a system menu command. Some interpreters offer a set of
common system-level game commands via menus, toolbars, or similar UI
widgets, depending on local conventions - commands such as SAVE,
RESTORE, UNDO, and QUIT that most games offer.

By default, when the player selects this sort of menu command, the
interpreter sends it to the game by stuffing the literal text of the
command into the command line, and returning it from the command-line
input function (inputLine(), typically). This was traditionally the only
way for the interpreter to send this sort of command to the game. In
particular, there was no way to send this kind of command via the
\"event input\" mechanism (as in inputEvent()).

This function allows the game to control (1) which commands are enabled
for normal command-line input, and (2) whether or not the commands are
enabled for inputEvent(). By default, all commands are enabled for
inputLine(), and all are disabled for inputEvent().

When a command is enabled for inputLine(), it\'s returned from
inputLine() as the command-line string corresponding to the command. The
SAVE command is returned as the text \"save\", for example.

When a command is enabled for inputEvent(), it\'s returned as an
InEvtSysCommand event, with the command ID in the second element of the
event record\'s list.

\'id\' is the ID of the command to enable/disable, or a list or vector
of IDs to set. If a list or vector is used, all of the commands listed
are set to the same new status. Command IDs are given by the XxxCommand
values defined in tadsio.h.

\'stat\' is the new status to send. This is a combination of the
MenuStatXxxEnable and MenuStatXxxDisable flags defined below. For any
Xxx, only one of Enable or Disable can be used - if both are specified
together, the Enable flag takes precedence. If you don\'t specify either
the Enable or Disable flag for an Xxx, then the command is unaffected in
that context - that is, its previous value is left in effect. For
example, if you specify MenuStatEventEnable, then the command is enabled
for inputEvent(), and its previous status for inputLine() is left
unchanged.
:::

[]{#showPopupMenu}

`showPopupMenu (x, y, txt)`

[tadsiox.h](../file/tadsiox.h.html)\[[61](../source/tadsiox.h.html#61)\]

::: desc
Show a popup menu. This opens a temporary window, drawn in a style
consistent with the local conventions for popup menus. The new window is
shown in the foreground, in front of the active game window. \'txt\'
gives HTML text that\'s used for the contents of the new window.

\'x\' and \'y\' give the location of the top left corner of the new
window. The coordinates are given in pixels relative to the top left of
the game window. If these are nil (note that \*both\* must be nil if
either one is), the popup is shown at a suitable local default position
for a context menu. On Windows, the default position is the current
mouse position.

This function doesn\'t return until the user either makes a selection
from the menu or cancels the menu. If the user clicks the mouse outside
of the popup menu, or switches to a different window, the popup is
canceled - this means that the popup menu will automatically disappear,
and the function will return the \'canceled\' status code. If the user
makes a selection from the popup menu by clicking on a hyperlink shown
within the menu, the menu disappears and the function returns the
\'href\' status code and the HREF text of the selected hyperlink.

(Note that some systems might have different local conventions for
operating a popup menu, so the actual user actions involved in selecting
or canceling might differ from system to system. In these cases, the
local conventions apply.)

The return value is a list. The first element of the list is one of the
PopMenuXxx status codes, indicating what happened. If the status code is
PopMenuHRef, the list will have a second element, containing a string
giving the HREF of the hyperlink the user clicked on. For any other
status codes, the list will have no further elements.
:::

[]{#_Macros_}

::: mjhd
[Macros]{.hdln}  
:::

[]{#MenuStatEventDisable}

`MenuStatEventDisable`

[tadsiox.h](../file/tadsiox.h.html)\[[162](../source/tadsiox.h.html#162)\]

::: desc
`(0x0001 | 0x0000)`\
*no description available*
:::

[]{#MenuStatEventEnable}

`MenuStatEventEnable`

[tadsiox.h](../file/tadsiox.h.html)\[[161](../source/tadsiox.h.html#161)\]

::: desc
`(0x0001 | 0x0002)`\
*no description available*
:::

[]{#MenuStatLineDisable}

`MenuStatLineDisable`

[tadsiox.h](../file/tadsiox.h.html)\[[159](../source/tadsiox.h.html#159)\]

::: desc
`(0x0004 | 0x0000)`\
*no description available*
:::

[]{#MenuStatLineEnable}

`MenuStatLineEnable`

[tadsiox.h](../file/tadsiox.h.html)\[[158](../source/tadsiox.h.html#158)\]

::: desc
`(0x0004 | 0x0008)`\
enableSystemMenuCommand() status codes. You can control the inputLine()
and inputEvent() status of a command independently - simply specify the
flags for the context you want to change, and leave the others
unspecified.

MenuStatLineEnable and MenuStatLineDisable let you control the
inputLine() status of a command. If neither is specified, the old status
is left unchagned for inputLine().

MenuStatEventEnable and MenuStatEventDisable control the inputEvent()
status of a command. If neither is specified, the old status is left
unchagned for inputEvent().
:::

[]{#PopMenuCancel}

`PopMenuCancel`

[tadsiox.h](../file/tadsiox.h.html)\[[134](../source/tadsiox.h.html#134)\]

::: desc
`2`\
Canceled: the user canceled the menu. This usually means that the user
clicked outside of the menu, or switched to a different application.
:::

[]{#PopMenuEof}

`PopMenuEof`

[tadsiox.h](../file/tadsiox.h.html)\[[140](../source/tadsiox.h.html#140)\]

::: desc
`3`\
\"End of file\": this indicates that the application is being
terminated, so it\'s not possible to obtain any further input from the
user.
:::

[]{#PopMenuFail}

`PopMenuFail`

[tadsiox.h](../file/tadsiox.h.html)\[[121](../source/tadsiox.h.html#121)\]

::: desc
`0`\
Failed: the popup menu could not be shown. This could indicate a
resource problem (low memory, for example) or another system problem.
:::

[]{#PopMenuHRef}

`PopMenuHRef`

[tadsiox.h](../file/tadsiox.h.html)\[[128](../source/tadsiox.h.html#128)\]

::: desc
`1`\
HRef: the user clicked on a hyperlink shown in the menu. The list will
contain a second element giving a string with the HREF of the hyperlink
the user selected.
:::

[]{#_Enums_}

::: mjhd
[Enums]{.hdln}  
:::

*(none)* []{#_Templates_}

::: mjhd
[Templates]{.hdln}  
:::

*(none)*

::: ftr
Adv3Lite Library Reference Manual\
Generated on 15/03/2023 from adv3Lite version 1.6.1
:::