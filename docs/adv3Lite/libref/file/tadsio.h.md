[tadsio.h]{.title}[file]{.type}

[source file](../source/tadsio.h.html)

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
This header defines the tads-io intrinsic function set.

The TADS input/output function set provides access to the user
interface. This lets you read input from the keyboard and display output
on the monitor or terminal. It also provides access to windowing
features (via the \"banner\" functions) on systems that support multiple
display windows (which doesn\'t necessarily mean GUI-type systems: many
character-mode systems support the banner operations as well, simply by
dividing up the character-mode screen into rectangular regions).
:::

[]{#_ClassSummary_}

::: mjhd
[Summary of Classes]{.hdln}  
:::

*(none)* []{#FunctionSummary_}

::: mjhd
[Summary of Global Functions]{.hdln}  
:::

` `[`bannerClear`](#bannerClear)`  `[`bannerCreate`](#bannerCreate)`  `[`bannerDelete`](#bannerDelete)`  `[`bannerFlush`](#bannerFlush)`  `[`bannerGetInfo`](#bannerGetInfo)`  `[`bannerGoTo`](#bannerGoTo)`  `[`bannerSay`](#bannerSay)`  `[`bannerSetScreenColor`](#bannerSetScreenColor)`  `[`bannerSetSize`](#bannerSetSize)`  `[`bannerSetTextColor`](#bannerSetTextColor)`  `[`bannerSizeToContents`](#bannerSizeToContents)`  `[`clearScreen`](#clearScreen)`  `[`flushOutput`](#flushOutput)`  `[`getLocalCharSet`](#getLocalCharSet)`  `[`inputDialog`](#inputDialog)`  `[`inputEvent`](#inputEvent)`  `[`inputFile`](#inputFile)`  `[`inputKey`](#inputKey)`  `[`inputLine`](#inputLine)`  `[`inputLineCancel`](#inputLineCancel)`  `[`inputLineTimeout`](#inputLineTimeout)`  `[`logConsoleClose`](#logConsoleClose)`  `[`logConsoleCreate`](#logConsoleCreate)`  `[`logConsoleSay`](#logConsoleSay)`  `[`logInputEvent`](#logInputEvent)`  `[`morePrompt`](#morePrompt)`  `[`resExists`](#resExists)`  `[`setLogFile`](#setLogFile)`  `[`setScriptFile`](#setScriptFile)`  `[`statusMode`](#statusMode)`  `[`statusRight`](#statusRight)`  `[`systemInfo`](#systemInfo)`  `[`tadsSay`](#tadsSay)`  `[`timeDelay`](#timeDelay)`  `

[]{#_MacroSummary_}

::: mjhd
[Summary of Macros]{.hdln}  
:::

` `[`BannerAfter`](#BannerAfter)`  `[`BannerAlignBottom`](#BannerAlignBottom)`  `[`BannerAlignLeft`](#BannerAlignLeft)`  `[`BannerAlignRight`](#BannerAlignRight)`  `[`BannerAlignTop`](#BannerAlignTop)`  `[`BannerBefore`](#BannerBefore)`  `[`BannerFirst`](#BannerFirst)`  `[`BannerLast`](#BannerLast)`  `[`BannerSizeAbsolute`](#BannerSizeAbsolute)`  `[`BannerSizePercent`](#BannerSizePercent)`  `[`BannerStyleAutoHScroll`](#BannerStyleAutoHScroll)`  `[`BannerStyleAutoVScroll`](#BannerStyleAutoVScroll)`  `[`BannerStyleBorder`](#BannerStyleBorder)`  `[`BannerStyleHScroll`](#BannerStyleHScroll)`  `[`BannerStyleHStrut`](#BannerStyleHStrut)`  `[`BannerStyleMoreMode`](#BannerStyleMoreMode)`  `[`BannerStyleTabAlign`](#BannerStyleTabAlign)`  `[`BannerStyleVScroll`](#BannerStyleVScroll)`  `[`BannerStyleVStrut`](#BannerStyleVStrut)`  `[`BannerTypeText`](#BannerTypeText)`  `[`BannerTypeTextGrid`](#BannerTypeTextGrid)`  `[`CharsetDisplay`](#CharsetDisplay)`  `[`CharsetFileCont`](#CharsetFileCont)`  `[`CharsetFileName`](#CharsetFileName)`  `[`CloseCommand`](#CloseCommand)`  `[`ColorAqua`](#ColorAqua)`  `[`ColorBlack`](#ColorBlack)`  `[`ColorBlue`](#ColorBlue)`  `[`ColorCyan`](#ColorCyan)`  `[`ColorFuchsia`](#ColorFuchsia)`  `[`ColorGray`](#ColorGray)`  `[`ColorGreen`](#ColorGreen)`  `[`ColorInput`](#ColorInput)`  `[`ColorLime`](#ColorLime)`  `[`ColorMagenta`](#ColorMagenta)`  `[`ColorMaroon`](#ColorMaroon)`  `[`ColorNavy`](#ColorNavy)`  `[`ColorOlive`](#ColorOlive)`  `[`ColorPurple`](#ColorPurple)`  `[`ColorRed`](#ColorRed)`  `[`ColorRGB`](#ColorRGB)`  `[`ColorSilver`](#ColorSilver)`  `[`ColorStatusBg`](#ColorStatusBg)`  `[`ColorStatusText`](#ColorStatusText)`  `[`ColorTeal`](#ColorTeal)`  `[`ColorText`](#ColorText)`  `[`ColorTextBg`](#ColorTextBg)`  `[`ColorTransparent`](#ColorTransparent)`  `[`ColorWhite`](#ColorWhite)`  `[`ColorYellow`](#ColorYellow)`  `[`FileTypeBin`](#FileTypeBin)`  `[`FileTypeCmd`](#FileTypeCmd)`  `[`FileTypeData`](#FileTypeData)`  `[`FileTypeLog`](#FileTypeLog)`  `[`FileTypeT3Image`](#FileTypeT3Image)`  `[`FileTypeT3Save`](#FileTypeT3Save)`  `[`FileTypeText`](#FileTypeText)`  `[`FileTypeUnknown`](#FileTypeUnknown)`  `[`HelpCommand`](#HelpCommand)`  `[`InDlgIconError`](#InDlgIconError)`  `[`InDlgIconInfo`](#InDlgIconInfo)`  `[`InDlgIconNone`](#InDlgIconNone)`  `[`InDlgIconQuestion`](#InDlgIconQuestion)`  `[`InDlgIconWarning`](#InDlgIconWarning)`  `[`InDlgLblCancel`](#InDlgLblCancel)`  `[`InDlgLblNo`](#InDlgLblNo)`  `[`InDlgLblOk`](#InDlgLblOk)`  `[`InDlgLblYes`](#InDlgLblYes)`  `[`InDlgOk`](#InDlgOk)`  `[`InDlgOkCancel`](#InDlgOkCancel)`  `[`InDlgYesNo`](#InDlgYesNo)`  `[`InDlgYesNoCancel`](#InDlgYesNoCancel)`  `[`InEvtEndQuietScript`](#InEvtEndQuietScript)`  `[`InEvtEndScript`](#InEvtEndScript)`  `[`InEvtEof`](#InEvtEof)`  `[`InEvtHref`](#InEvtHref)`  `[`InEvtKey`](#InEvtKey)`  `[`InEvtLine`](#InEvtLine)`  `[`InEvtNoTimeout`](#InEvtNoTimeout)`  `[`InEvtNotimeout`](#InEvtNotimeout)`  `[`InEvtSysCommand`](#InEvtSysCommand)`  `[`InEvtTimeout`](#InEvtTimeout)`  `[`InFileCancel`](#InFileCancel)`  `[`InFileFailure`](#InFileFailure)`  `[`InFileOpen`](#InFileOpen)`  `[`InFileSave`](#InFileSave)`  `[`InFileSuccess`](#InFileSuccess)`  `[`LogTypeCommand`](#LogTypeCommand)`  `[`LogTypeScript`](#LogTypeScript)`  `[`LogTypeTranscript`](#LogTypeTranscript)`  `[`MainWindowLogHandle`](#MainWindowLogHandle)`  `[`QuitCommand`](#QuitCommand)`  `[`RestoreCommand`](#RestoreCommand)`  `[`SaveCommand`](#SaveCommand)`  `[`ScriptFileEvent`](#ScriptFileEvent)`  `[`ScriptFileNonstop`](#ScriptFileNonstop)`  `[`ScriptFileQuiet`](#ScriptFileQuiet)`  `[`ScriptReqGetStatus`](#ScriptReqGetStatus)`  `[`StatModeNormal`](#StatModeNormal)`  `[`StatModeStatus`](#StatModeStatus)`  `[`SysInfoAudioCrossfade`](#SysInfoAudioCrossfade)`  `[`SysInfoAudioFade`](#SysInfoAudioFade)`  `[`SysInfoBanners`](#SysInfoBanners)`  `[`SysInfoFadeMIDI`](#SysInfoFadeMIDI)`  `[`SysInfoFadeMPEG`](#SysInfoFadeMPEG)`  `[`SysInfoFadeOGG`](#SysInfoFadeOGG)`  `[`SysInfoFadeWAV`](#SysInfoFadeWAV)`  `[`SysInfoIClassHTML`](#SysInfoIClassHTML)`  `[`SysInfoIClassText`](#SysInfoIClassText)`  `[`SysInfoIClassTextGUI`](#SysInfoIClassTextGUI)`  `[`SysInfoInterpClass`](#SysInfoInterpClass)`  `[`SysInfoJpeg`](#SysInfoJpeg)`  `[`SysInfoLinksFtp`](#SysInfoLinksFtp)`  `[`SysInfoLinksHttp`](#SysInfoLinksHttp)`  `[`SysInfoLinksMailto`](#SysInfoLinksMailto)`  `[`SysInfoLinksNews`](#SysInfoLinksNews)`  `[`SysInfoLinksTelnet`](#SysInfoLinksTelnet)`  `[`SysInfoMidi`](#SysInfoMidi)`  `[`SysInfoMng`](#SysInfoMng)`  `[`SysInfoMngAlpha`](#SysInfoMngAlpha)`  `[`SysInfoMngTrans`](#SysInfoMngTrans)`  `[`SysInfoMpeg`](#SysInfoMpeg)`  `[`SysInfoMpeg1`](#SysInfoMpeg1)`  `[`SysInfoMpeg2`](#SysInfoMpeg2)`  `[`SysInfoMpeg3`](#SysInfoMpeg3)`  `[`SysInfoOgg`](#SysInfoOgg)`  `[`SysInfoOsName`](#SysInfoOsName)`  `[`SysInfoPng`](#SysInfoPng)`  `[`SysInfoPngAlpha`](#SysInfoPngAlpha)`  `[`SysInfoPngTrans`](#SysInfoPngTrans)`  `[`SysInfoPrefImages`](#SysInfoPrefImages)`  `[`SysInfoPrefLinks`](#SysInfoPrefLinks)`  `[`SysInfoPrefMusic`](#SysInfoPrefMusic)`  `[`SysInfoPrefSounds`](#SysInfoPrefSounds)`  `[`SysInfoTextColors`](#SysInfoTextColors)`  `[`SysInfoTextHilite`](#SysInfoTextHilite)`  `[`SysInfoTxcAnsiFg`](#SysInfoTxcAnsiFg)`  `[`SysInfoTxcAnsiFgBg`](#SysInfoTxcAnsiFgBg)`  `[`SysInfoTxcNone`](#SysInfoTxcNone)`  `[`SysInfoTxcParam`](#SysInfoTxcParam)`  `[`SysInfoTxcRGB`](#SysInfoTxcRGB)`  `[`SysInfoVersion`](#SysInfoVersion)`  `[`SysInfoWav`](#SysInfoWav)`  `[`SysInfoWavMidiOvl`](#SysInfoWavMidiOvl)`  `[`SysInfoWavOvl`](#SysInfoWavOvl)`  `[`UndoCommand`](#UndoCommand)`  `

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

[]{#bannerClear}

`bannerClear (handle)`

[tadsio.h](../file/tadsio.h.html)\[[350](../source/tadsio.h.html#350)\]

::: desc
Clear the contents of a banner window. \'color\' is the color to use for
the screen color after clearing the window, given as a ColorXxx value
(see below).
:::

[]{#bannerCreate}

`bannerCreate (parent, where, other, windowType, align, size, sizeUnits, styleFlags)`

[tadsio.h](../file/tadsio.h.html)\[[336](../source/tadsio.h.html#336)\]

::: desc
Create a banner window. Returns the \"handle\" of the new window, which
is used to identify the window in subsequent bannerXxx() functions. Not
all interpreters support banner windows; if the interpreter does not
support this feature, the return value is nil.

\'parent\' is the handle of the parent window; if this is nil, the
banner is split off from the main display window. \'where\' is a
BannerXxx value giving the list position; if this is BannerBefore or
BannerAfter, \'other\' is the handle of an existing banner window child
of the same parent. \'windowType\' is a BannerTypeXxx value giving the
type of window to create. \'align\' is a BannerAlignXxx value giving the
alignment - that is, the edge of the parent window to which the new
banner window attaches. \'size\' is the size of the window, in the units
given by \'sizeUnits\', which is a BannerSizeXxx value. \'styleFlags\'
is a combination of BannerStyleXxx bit flags that specifies the desired
combination of visual styles and UI behavior for the new window.
:::

[]{#bannerDelete}

`bannerDelete (handle)`

[tadsio.h](../file/tadsio.h.html)\[[343](../source/tadsio.h.html#343)\]

::: desc
Delete a banner window. \'handle\' is the handle to the window to be
removed.
:::

[]{#bannerFlush}

`bannerFlush (handle)`

[tadsio.h](../file/tadsio.h.html)\[[368](../source/tadsio.h.html#368)\]

::: desc
Flush all buffers for a banner window. This ensures that any text
written with bannerSay() is actually displayed for the user to see
(rather than being held in internal buffers).
:::

[]{#bannerGetInfo}

`bannerGetInfo (handle)`

[tadsio.h](../file/tadsio.h.html)\[[418](../source/tadsio.h.html#418)\]

::: desc
Get information on the banner. This returns a list giving a detailed set
of information describing the banner.
:::

[]{#bannerGoTo}

`bannerGoTo (handle, row, col)`

[tadsio.h](../file/tadsio.h.html)\[[393](../source/tadsio.h.html#393)\]

::: desc
Go to to an output position. This is meaningful only for
BannerTypeTextGrid windows. This sets the next text output position to
the given row and column in the text grid; the next call to bannerSay()
will display its output starting at this position.
:::

[]{#bannerSay}

`bannerSay (handle, ...)`

[tadsio.h](../file/tadsio.h.html)\[[361](../source/tadsio.h.html#361)\]

::: desc
Write text to a banner window. The text is displayed in the given
banner. For a BannerTypeText window, HTML tags in the text are
interpreted; for a BannerTypeTextGrid window, the text is written
exactly as given, without any HTML interpretation.

The value list is handled the same way as the arguments to tadsSay() in
terms of type conversions.
:::

[]{#bannerSetScreenColor}

`bannerSetScreenColor (handle, color)`

[tadsio.h](../file/tadsio.h.html)\[[412](../source/tadsio.h.html#412)\]

::: desc
Set the \"screen color\" in the banner window. This is the color used to
fill parts of the window that aren\'t displaying any text, and as the
background color for all text displayed when the text background color
is ColorTransparent. Setting the screen color immediately sets the color
for the entire window - even text previously displayed in the window is
affected by this change.
:::

[]{#bannerSetSize}

`bannerSetSize (handle, size, sizeUnits, isAdvisory)`

[tadsio.h](../file/tadsio.h.html)\[[432](../source/tadsio.h.html#432)\]

::: desc
Set the size of a banner. This explicitly sets the banner\'s height (for
a top or bottom banner) or width (for a left or right) banner to the
\'size\', which is specified in units given by \'sizeUnits\', which is a
BannerSizeXxx constant. If \'isAdvisory\' is true, the caller is
indicating that this call will be followed soon by a call to
bannerSizeToContents(). On systems that support sizing to contents, an
\"advisory\" call to bannerSetSize() will simply be ignored in
anticipation of the upcoming call to bannerSizeToContents(). On systems
that don\'t support sizing to contents, an advisory call will actually
resize the window.
:::

[]{#bannerSetTextColor}

`bannerSetTextColor (handle, fg, bg)`

[tadsio.h](../file/tadsio.h.html)\[[402](../source/tadsio.h.html#402)\]

::: desc
Set text foreground and background colors. This affects the color of
subsequently displayed text; text displayed previously is not affected.
The colors are given as ColorXxx values (see below). If \'bg\' is
ColorTransparent, then text is shown with the current screen color in
the window.
:::

[]{#bannerSizeToContents}

`bannerSizeToContents (handle)`

[tadsio.h](../file/tadsio.h.html)\[[385](../source/tadsio.h.html#385)\]

::: desc
Size a banner to fit its contents. This resizes the banner such that the
contents just fit. In the case of a top- or bottom-aligned banner, the
height is set just high enough to hold all of the text currently
displayed. In the case of a left- or right-aligned banner, the width is
set just wide enough to hold the widest single word that can\'t be
broken across lines. In all cases, the size includes any fixed margin
space, to ensure that all of the text in the window is actually visible
without scrolling.

Note that not all systems support this function. On systems where the
function is not supported, this call has no effect. Because of this, you
should always use this function in conjunction with an \"advisory\" call
to bannerSetSize().
:::

[]{#clearScreen}

`clearScreen ( )`

[tadsio.h](../file/tadsio.h.html)\[[48](../source/tadsio.h.html#48)\]

::: desc
Clear the display. This clears the main window.
:::

[]{#flushOutput}

`flushOutput ( )`

[tadsio.h](../file/tadsio.h.html)\[[265](../source/tadsio.h.html#265)\]

::: desc
Flush text output and update the main display window. This ensures that
any text displayed with tadsSay() is actually displayed, for the user to
see (rather than being held in internal buffers).
:::

[]{#getLocalCharSet}

`getLocalCharSet (which)`

[tadsio.h](../file/tadsio.h.html)\[[258](../source/tadsio.h.html#258)\]

::: desc
Get the local default character set. \'which\' is a CharsetXxx value
giving which local character set to retrieve. Returns a string giving
the name of the given local character set.
:::

[]{#inputDialog}

`inputDialog (icon, prompt, buttons, defaultButton, cancelButton)`

[tadsio.h](../file/tadsio.h.html)\[[123](../source/tadsio.h.html#123)\]

::: desc
Display a simple \"message box\" dialog (known on some systems as an
\"alert\" dialog). This displays a dialog that includes a short message
for the user to read, an icon indicating the general nature of the
condition that gave rise to the dialog (an error, a warning, a choice
for the user to make, etc.), and a set of push-buttons that dismiss the
dialog and (in some cases) let the user choose among options. \'icon\'
is an InDlgIconXxx value giving the type of icon to show, if any;
\'prompt\' is the message string to display; \'buttons\' gives the set
of buttons to display; \'defaultButton\' is the index (starting at 1)
among the buttons of the default button; and \'cancelButton\' is the
index of the cancellation button.

\'buttons\' can be given as an InDlgXxx constant (InDlgOk,
InDlgOkCancel, etc.) to select one of the standard sets of buttons. Or,
it can be a list giving a custom set of buttons, in which case each
element of the list is either a string giving a custom label for the
button, or one of the InDlgLblXxx values to select a standard label. The
standard labels should be used when possible, as these will be
automatically localized; labels given explicitly as strings will be used
exactly as given. If a list of custom button labels is given, the
buttons are displayed in the dialog in the order of the list (usually
left to right, but this could vary according to system conventions and
localization).

Each custom button label string can incorporate an ampersand (\"&\").
The letter immediately following the ampersand, if provided, is used as
the keyboard shortcut for the button. This is particularly important on
character-mode systems, where the \"dialog\" is typically shown merely
as a text prompt, and the user responds by selecting the letter of the
desired option. Typically, you should use the first character of a
button label as its keyboard shortcut, but this obviously won\'t work
when two button labels have the same first letter; in these cases, you
should choose another letter from the button label, preferably something
like the first letter of the second word of the button label, or the
first letter of the stressed syllable of the most important word of the
label.

The return value is the index among the buttons of the button that the
user selects to dismiss the dialog. The function doesn\'t return until
the user selects one of the buttons.
:::

[]{#inputEvent}

`inputEvent (timeout?)`

[tadsio.h](../file/tadsio.h.html)\[[79](../source/tadsio.h.html#79)\]

::: desc
Read a single input event. Waits until an input event is available, then
returns the event as a list. The first element of the list is an
InEvtXxx value indicating the type of the event; the remainder of the
list varies according to the event type. If \'timeout\' is provided, it
gives the maximum waiting interval in milliseconds; if no input event
occurs within this interval, the function returns an InEvtTimeout event.
:::

[]{#inputFile}

`inputFile (prompt, dialogType, fileType, flags)`

[tadsio.h](../file/tadsio.h.html)\[[183](../source/tadsio.h.html#183)\]

::: desc
Display a file selector dialog. This prompts the user to select a file.
On GUI systems, this will typically display the standard system file
selection dialog; on character-mode systems, it might simply display the
prompt string and let the user type the name of a file directly.

\'prompt\' is the message string to display in the dialog to let the
user know what type of file is being requested. \'dialogType\' is one of
the InFileXxx constants specifying whether the request is to select an
existing file or to specify the name for a new file. \'fileType\' is a
FileTypeXxx constant giving the format of the file being requested; this
is used on some systems to filter the displayed list of existing files
so that only files of the same format are included, to reduce clutter.
\'flags\' is reserved for future use and should simply be set to zero.

The return value is a list. The first element is an integer giving the
status: InFileSuccess indicates that the user successfully selected a
file, whose name is given as a string in the second element of the
result list; InFileFailure indicates a system error of some kind showing
the dialog; and InFileCancel indicates that the user explicitly canceled
the dialog.

On success (return list\[1\] == InFileSuccess), the list contains the
following additional elements:

\
\[2\] = the selected filename\
\[3\] = nil (reserved for future use)\
\[4\] = script warning message, or nil if no warning

The warning message is a string to be displayed to the user to warn
about a possible error condition in the script input. The script reader
checks the file specified in the script to see if it\'s valid; if the
dialog type is Open, the script reader verifies that the file exists,
and for a Save dialog the reader warns if the file \*does\* already
exist or is not writable. In the conventional UI, the script reader
displays these warnings directly to the user through the console UI, but
this isn\'t possible in the Web UI since the user might be running on a
remote browser. Instead, the script reader still checks for the possible
errors, but rather than displaying any warnings, it returns them here.
The caller is responsible for displaying the warning and asking the user
for confirmation.

For localization purposes, the warning message starts with a two-letter
code indicating the specific error, followed by a space, followed by the
English text of the warning. The codes are:

\
OV - the script might overwrite an existing file (Save dialog)\
WR - the file can\'t be created/written (Save dialog)\
RD - the file doesn\'t exist/can\'t be read (Open dialog)

Note that the warning message will always be nil if the script reader
displayed the warning message itself. This means that your program can
unconditionally display this message if it\'s non-nil - there\'s no
danger that the script reader will have redundantly displayed the
message.
:::

[]{#inputKey}

`inputKey ( )`

[tadsio.h](../file/tadsio.h.html)\[[68](../source/tadsio.h.html#68)\]

::: desc
Read a single keystroke from the keyboard. Waits until the user presses
a key, then returns the keystroke as a string.
:::

[]{#inputLine}

`inputLine ( )`

[tadsio.h](../file/tadsio.h.html)\[[62](../source/tadsio.h.html#62)\]

::: desc
Read a line of text from the keyboard. Pauses to let the user edit and
enter a command line, then returns the entered text as a string.
:::

[]{#inputLineCancel}

`inputLineCancel (reset)`

[tadsio.h](../file/tadsio.h.html)\[[315](../source/tadsio.h.html#315)\]

::: desc
Cancel an input line that was interrupted by timeout. This function must
be called after an inputLineTimeout() returns with an InEvtTimeout
status indication and before any subsequent output function that
displays anything in the main window, or any input fucntion other than
inputLineTimeout().

This function updates the UI to reflect that command line editing is no
longer in progress. If \'reset\' is true, it also resets the internal
memory of the command editing session, so that a subsequent call to
inputLineTimeout() will start from scratch with an empty command line.
If \'reset\' is nil, this function merely adjusts the UI, but does not
clear the internal memory; the next call to inputLineTimeout() will
automatically restore the editing status, re-displaying what the user
had typed so far on the interrupted command line and restoring the
cursor position to its position when the timeout occurred.

Note that it\'s not necessary (or desirable) to call this function after
a timed-out input line if the next input/output function that affects
the main window is simply another call to inputLineTimeout(). In this
case, inputLineTimeout() simply picks up where it left off, without any
indication to the user that the input editing was ever interrupted.
:::

[]{#inputLineTimeout}

`inputLineTimeout (timeout?)`

[tadsio.h](../file/tadsio.h.html)\[[288](../source/tadsio.h.html#288)\]

::: desc
Read a line of text from the keyboard. Waits for the user to edit and
enter a command line. If a \'timeout\' value is specified, it gives the
maximum interval to wait for the user to finish entering the input, in
milliseconds. If the timeout expires before the user finishes entering
the line, the function stops waiting and returns.

The return value is a list. The first element is an InEvtXxx code giving
the status. If the status is InEvtLine, the second element is a string
giving the command line the user entered. If the status is InEvtTimeout,
the second element is a string giving the text of the command line so
far - that is, the text that the user had typed up to the point when the
timeout expired. Other status codes have no additional list elements.

When an InEvtTimeout status is returned, the caller must either cancel
the interrupted input line with inputLineCancel(), or must make another
call to inputLineTimeout() without any intervening call to any output
function that displays anything in the main window, or any input
function other than inputLineTimeout().
:::

[]{#logConsoleClose}

`logConsoleClose (handle)`

[tadsio.h](../file/tadsio.h.html)\[[449](../source/tadsio.h.html#449)\]

::: desc
Close a log console. This closes the file associated with the log
console and deletes the console object. The given console handle is no
longer valid after this function is called.
:::

[]{#logConsoleCreate}

`logConsoleCreate (filename, charset, width)`

[tadsio.h](../file/tadsio.h.html)\[[442](../source/tadsio.h.html#442)\]

::: desc
Create a log file console. This creates a console that has no display,
but simply captures its output to the given log file. Writing to a log
console is different from writing to a regular text file in that we
apply all of the normal formatting (including text-only-mode HTML
interpretation) to the output sent to this console.
:::

[]{#logConsoleSay}

`logConsoleSay (handle, ...)`

[tadsio.h](../file/tadsio.h.html)\[[456](../source/tadsio.h.html#456)\]

::: desc
Write text to a log console. This works the same as tadsSay(), but
writes the output to the given log console rather than to the main
output window.
:::

[]{#logInputEvent}

`logInputEvent (evt)`

[tadsio.h](../file/tadsio.h.html)\[[479](../source/tadsio.h.html#479)\]

::: desc
Log an input event that\'s obtained externally - i.e., from a source
other than the system input APIs (inputLine, inputKey, inputEvent, etc).
This adds the event to any command or event log that the system is
currently writing, as set with setLogFile().

It\'s only necessary to call this function when obtaining user input
from custom code that bypasses the system input APIs. The system input
functions all log events automatically, so you must not call this for
input obtained from them (doing so would write each input twice, since
it\'s already being written once by the input functions). For example,
this is useful for the Web UI, since it obtains input via network
transactions with the javascript client.

\'evt\' is a list describing the event, using the same format that
inputEvent() returns. Note one special extension: if the first element
of the list is a string, the string is used as the tag name if we\'re
writing an event script. This can be used to write custom events or
events with no InEvtXxx type code, such as \<dialog\> input events.
:::

[]{#morePrompt}

`morePrompt ( )`

[tadsio.h](../file/tadsio.h.html)\[[56](../source/tadsio.h.html#56)\]

::: desc
Show the \"more\" prompt, if supported on the platform. This causes a
\"more\" prompt to be displayed, according to local system conventions,
as though consecutive text output had exceeded the screen/window height.
:::

[]{#resExists}

`resExists (fname)`

[tadsio.h](../file/tadsio.h.html)\[[220](../source/tadsio.h.html#220)\]

::: desc
Determine if a multimedia resource exists. \'fname\' is the name of a
resource (a JPEG image file, PNG image file, etc), given in URL-style
path notation. Returns true if the resource is available, nil if not.
:::

[]{#setLogFile}

`setLogFile (fname, logType?)`

[tadsio.h](../file/tadsio.h.html)\[[43](../source/tadsio.h.html#43)\]

::: desc
Set the output log file (which records the output transcript) or the
command log file (which records command lines the user enters).
\'fname\' is the name of the file to open, and \'logType\' gives the
type of log to open, as a LogTypeXxx value.
:::

[]{#setScriptFile}

`setScriptFile (filename, flags?)`

[tadsio.h](../file/tadsio.h.html)\[[251](../source/tadsio.h.html#251)\]

::: desc
Set the script input file. This opens the given file as the script input
file. \'filename\' is a string giving the name of the file to open, and
\'flags\' is a combination of ScriptFileXxx bit flags giving the mode to
use to read the file. When a script file is active, the system reads
command-line input from the file rather than from the keyboard. This
lets the program replay an input script.

Note that the ScriptFileEvent flag is ignored if included in the
\'flags\' parameter. The script reader automatically determines the
script type by examining the file\'s contents, so you can\'t set the
type using flags. This flag is used only in \"get status\" requests
(ScriptReqGetStatus) - it\'s included in the returned flags if
applicable. The purpose of this flag is to let you determine what the
script reader decided about the script, rather than telling the script
reader how to interpret the script.

If \'filename\' is nil, this cancels the current script. If the script
was invoked from an enclosing script, this resumes the enclosing script,
otherwise it resumes reading input from the keyboard. The \'flags\'
argument is ignored in this case.

New in 3.0.17: if \'filename\' is one of the ScriptReqXxx constants,
this performs a special script request. See the ScriptReqXxx constants
for details. Note that calling this function with a ScriptReqXxx
constant on an VM prior to 3.0.17 will result in a run-time error, so
you can use try-catch to detect whether the request is supported.
:::

[]{#statusMode}

`statusMode (mode)`

[tadsio.h](../file/tadsio.h.html)\[[203](../source/tadsio.h.html#203)\]

::: desc
Set the status-line display mode. This is meaningful only with text-only
interpreters that don\'t support banner windows; other interpreters
ignore this. \'mode\' is a StatModeXxx constant giving the new mode.
:::

[]{#statusRight}

`statusRight (txt)`

[tadsio.h](../file/tadsio.h.html)\[[212](../source/tadsio.h.html#212)\]

::: desc
Write text on the right half of the status line. This is meaningful only
for text-only interpreters that don\'t support banner windows; other
interpreters ignore this. On non-banner interpreters, this sets the
right half of the status line to display the given text,
right-justified.
:::

[]{#systemInfo}

`systemInfo (infoType, ...)`

[tadsio.h](../file/tadsio.h.html)\[[195](../source/tadsio.h.html#195)\]

::: desc
Retrieve local system information. \'infoType\' is a SysInfoXxx constant
giving the type of information to retrieve. Additional arguments and the
return value vary according to the infoType value.
:::

[]{#tadsSay}

`tadsSay (val, ...)`

[tadsio.h](../file/tadsio.h.html)\[[35](../source/tadsio.h.html#35)\]

::: desc
Display values on the console. One or more values can be displayed. Each
value can be a string, in which case the string is displayed as given
(with HTML interpretation); an integer, in which case it\'s converted to
a string, using a decimal (base 10) radix and displayed; a BigNumber, in
which case it\'s converted to a string using the default formatting; or
nil, in which case nothing is displayed.
:::

[]{#timeDelay}

`timeDelay (delayMilliseconds)`

[tadsio.h](../file/tadsio.h.html)\[[188](../source/tadsio.h.html#188)\]

::: desc
Pause for the given number of milliseconds.
:::

[]{#_Macros_}

::: mjhd
[Macros]{.hdln}  
:::

[]{#BannerAfter}

`BannerAfter`

[tadsio.h](../file/tadsio.h.html)\[[659](../source/tadsio.h.html#659)\]

::: desc
`4`\
*no description available*
:::

[]{#BannerAlignBottom}

`BannerAlignBottom`

[tadsio.h](../file/tadsio.h.html)\[[671](../source/tadsio.h.html#671)\]

::: desc
`1`\
*no description available*
:::

[]{#BannerAlignLeft}

`BannerAlignLeft`

[tadsio.h](../file/tadsio.h.html)\[[672](../source/tadsio.h.html#672)\]

::: desc
`2`\
*no description available*
:::

[]{#BannerAlignRight}

`BannerAlignRight`

[tadsio.h](../file/tadsio.h.html)\[[673](../source/tadsio.h.html#673)\]

::: desc
`3`\
*no description available*
:::

[]{#BannerAlignTop}

`BannerAlignTop`

[tadsio.h](../file/tadsio.h.html)\[[670](../source/tadsio.h.html#670)\]

::: desc
`0`\
banner alignment types
:::

[]{#BannerBefore}

`BannerBefore`

[tadsio.h](../file/tadsio.h.html)\[[658](../source/tadsio.h.html#658)\]

::: desc
`3`\
*no description available*
:::

[]{#BannerFirst}

`BannerFirst`

[tadsio.h](../file/tadsio.h.html)\[[656](../source/tadsio.h.html#656)\]

::: desc
`1`\
banner insertion point specifies (for \'where\' in bannerCreate)
:::

[]{#BannerLast}

`BannerLast`

[tadsio.h](../file/tadsio.h.html)\[[657](../source/tadsio.h.html#657)\]

::: desc
`2`\
*no description available*
:::

[]{#BannerSizeAbsolute}

`BannerSizeAbsolute`

[tadsio.h](../file/tadsio.h.html)\[[679](../source/tadsio.h.html#679)\]

::: desc
`2 /* size is in natural units of window type */`\
*no description available*
:::

[]{#BannerSizePercent}

`BannerSizePercent`

[tadsio.h](../file/tadsio.h.html)\[[678](../source/tadsio.h.html#678)\]

::: desc
`1 /* size is a percentage of available space */`\
banner size unit types
:::

[]{#BannerStyleAutoHScroll}

`BannerStyleAutoHScroll`

[tadsio.h](../file/tadsio.h.html)\[[688](../source/tadsio.h.html#688)\]

::: desc
`0x0010 /* automatic horizontal scrolling */`\
*no description available*
:::

[]{#BannerStyleAutoVScroll}

`BannerStyleAutoVScroll`

[tadsio.h](../file/tadsio.h.html)\[[687](../source/tadsio.h.html#687)\]

::: desc
`0x0008 /* automatic vertical scrolling */`\
*no description available*
:::

[]{#BannerStyleBorder}

`BannerStyleBorder`

[tadsio.h](../file/tadsio.h.html)\[[684](../source/tadsio.h.html#684)\]

::: desc
`0x0001 /* banner has a visible border */`\
banner style flags
:::

[]{#BannerStyleHScroll}

`BannerStyleHScroll`

[tadsio.h](../file/tadsio.h.html)\[[686](../source/tadsio.h.html#686)\]

::: desc
`0x0004 /* horizontal scrollbar */`\
*no description available*
:::

[]{#BannerStyleHStrut}

`BannerStyleHStrut`

[tadsio.h](../file/tadsio.h.html)\[[691](../source/tadsio.h.html#691)\]

::: desc
`0x0080 /* include in parent's auto width */`\
*no description available*
:::

[]{#BannerStyleMoreMode}

`BannerStyleMoreMode`

[tadsio.h](../file/tadsio.h.html)\[[690](../source/tadsio.h.html#690)\]

::: desc
`0x0040 /* use MORE mode */`\
*no description available*
:::

[]{#BannerStyleTabAlign}

`BannerStyleTabAlign`

[tadsio.h](../file/tadsio.h.html)\[[689](../source/tadsio.h.html#689)\]

::: desc
`0x0020 /* alignment support */`\
*no description available*
:::

[]{#BannerStyleVScroll}

`BannerStyleVScroll`

[tadsio.h](../file/tadsio.h.html)\[[685](../source/tadsio.h.html#685)\]

::: desc
`0x0002 /* vertical scrollbar */`\
*no description available*
:::

[]{#BannerStyleVStrut}

`BannerStyleVStrut`

[tadsio.h](../file/tadsio.h.html)\[[692](../source/tadsio.h.html#692)\]

::: desc
`0x0100 /* include in parent's auto height */`\
*no description available*
:::

[]{#BannerTypeText}

`BannerTypeText`

[tadsio.h](../file/tadsio.h.html)\[[664](../source/tadsio.h.html#664)\]

::: desc
`1 /* ordinary text stream window */`\
banner types
:::

[]{#BannerTypeTextGrid}

`BannerTypeTextGrid`

[tadsio.h](../file/tadsio.h.html)\[[665](../source/tadsio.h.html#665)\]

::: desc
`2 /* text grid window */`\
*no description available*
:::

[]{#CharsetDisplay}

`CharsetDisplay`

[tadsio.h](../file/tadsio.h.html)\[[649](../source/tadsio.h.html#649)\]

::: desc
`1 /* the display/keyboard character set */`\
selectors for getLocalCharSet
:::

[]{#CharsetFileCont}

`CharsetFileCont`

[tadsio.h](../file/tadsio.h.html)\[[651](../source/tadsio.h.html#651)\]

::: desc
`3 /* default file contents character set */`\
*no description available*
:::

[]{#CharsetFileName}

`CharsetFileName`

[tadsio.h](../file/tadsio.h.html)\[[650](../source/tadsio.h.html#650)\]

::: desc
`2 /* the file system character set */`\
*no description available*
:::

[]{#CloseCommand}

`CloseCommand`

[tadsio.h](../file/tadsio.h.html)\[[517](../source/tadsio.h.html#517)\]

::: desc
`0x0005 /* close the game window */`\
*no description available*
:::

[]{#ColorAqua}

`ColorAqua`

[tadsio.h](../file/tadsio.h.html)\[[736](../source/tadsio.h.html#736)\]

::: desc
`ColorRGB(0x00, 0xFF, 0xFF)`\
*no description available*
:::

[]{#ColorBlack}

`ColorBlack`

[tadsio.h](../file/tadsio.h.html)\[[729](../source/tadsio.h.html#729)\]

::: desc
`ColorRGB(0x00, 0x00, 0x00)`\
some specific colors by name, for convenience
:::

[]{#ColorBlue}

`ColorBlue`

[tadsio.h](../file/tadsio.h.html)\[[732](../source/tadsio.h.html#732)\]

::: desc
`ColorRGB(0x00, 0x00, 0xFF)`\
*no description available*
:::

[]{#ColorCyan}

`ColorCyan`

[tadsio.h](../file/tadsio.h.html)\[[735](../source/tadsio.h.html#735)\]

::: desc
`ColorRGB(0x00, 0xFF, 0xFF)`\
*no description available*
:::

[]{#ColorFuchsia}

`ColorFuchsia`

[tadsio.h](../file/tadsio.h.html)\[[742](../source/tadsio.h.html#742)\]

::: desc
`ColorRGB(0xFF, 0x00, 0xFF)`\
*no description available*
:::

[]{#ColorGray}

`ColorGray`

[tadsio.h](../file/tadsio.h.html)\[[739](../source/tadsio.h.html#739)\]

::: desc
`ColorRGB(0x80, 0x80, 0x80)`\
*no description available*
:::

[]{#ColorGreen}

`ColorGreen`

[tadsio.h](../file/tadsio.h.html)\[[733](../source/tadsio.h.html#733)\]

::: desc
`ColorRGB(0x00, 0x80, 0x00)`\
*no description available*
:::

[]{#ColorInput}

`ColorInput`

[tadsio.h](../file/tadsio.h.html)\[[726](../source/tadsio.h.html#726)\]

::: desc
`0x06000000`\
*no description available*
:::

[]{#ColorLime}

`ColorLime`

[tadsio.h](../file/tadsio.h.html)\[[743](../source/tadsio.h.html#743)\]

::: desc
`ColorRGB(0x00, 0xFF, 0x00)`\
*no description available*
:::

[]{#ColorMagenta}

`ColorMagenta`

[tadsio.h](../file/tadsio.h.html)\[[737](../source/tadsio.h.html#737)\]

::: desc
`ColorRGB(0xFF, 0x00, 0xFF)`\
*no description available*
:::

[]{#ColorMaroon}

`ColorMaroon`

[tadsio.h](../file/tadsio.h.html)\[[740](../source/tadsio.h.html#740)\]

::: desc
`ColorRGB(0x80, 0x00, 0x00)`\
*no description available*
:::

[]{#ColorNavy}

`ColorNavy`

[tadsio.h](../file/tadsio.h.html)\[[745](../source/tadsio.h.html#745)\]

::: desc
`ColorRGB(0x00, 0x00, 0x80)`\
*no description available*
:::

[]{#ColorOlive}

`ColorOlive`

[tadsio.h](../file/tadsio.h.html)\[[744](../source/tadsio.h.html#744)\]

::: desc
`ColorRGB(0x80, 0x80, 0x00)`\
*no description available*
:::

[]{#ColorPurple}

`ColorPurple`

[tadsio.h](../file/tadsio.h.html)\[[741](../source/tadsio.h.html#741)\]

::: desc
`ColorRGB(0x80, 0x00, 0x80)`\
*no description available*
:::

[]{#ColorRed}

`ColorRed`

[tadsio.h](../file/tadsio.h.html)\[[731](../source/tadsio.h.html#731)\]

::: desc
`ColorRGB(0xff, 0x00, 0x00)`\
*no description available*
:::

[]{#ColorRGB}

`ColorRGB (r, g, b)`

[tadsio.h](../file/tadsio.h.html)\[[719](../source/tadsio.h.html#719)\]

::: desc
`((((r) & 0xff) << 16) + (((g) & 0xff) << 8) + ((b) & 0xff))`\
Color codes. A color can be specified with explicit RGB (red-green-blue)
component values, or can be \"parameterized,\" which means that the
color uses a pre-defined color for a particular purpose.

RGB colors are specified with each component given in the range 0 to
255; the color (0,0,0) is pure black, and (255,255,255) is pure white.

The special value \"transparent\" is not a color at all, but rather
specifies that the current screen color should be used.

The \"Text\" and \"TextBg\" colors are the current default text and text
background colors. The actual colors displayed for these values depend
on the system, and on some systems these colors might be configurable by
the user through a preferences selection. These are the same colors
selected by the HTML parameterized color names \'text\' and \'bgcolor\'.

The \"StatusText\" and \"StatusBg\" colors are the current default
statusline text and background colors, which depend on the system and
may be user-configurable on some systems. These are the same colors
selected by the HTML parameterized color names \'statustext\' and
\'statusbg\'.

The \"input\" color is the current default input text color.
:::

[]{#ColorSilver}

`ColorSilver`

[tadsio.h](../file/tadsio.h.html)\[[738](../source/tadsio.h.html#738)\]

::: desc
`ColorRGB(0xC0, 0xC0, 0xC0)`\
*no description available*
:::

[]{#ColorStatusBg}

`ColorStatusBg`

[tadsio.h](../file/tadsio.h.html)\[[725](../source/tadsio.h.html#725)\]

::: desc
`0x05000000`\
*no description available*
:::

[]{#ColorStatusText}

`ColorStatusText`

[tadsio.h](../file/tadsio.h.html)\[[724](../source/tadsio.h.html#724)\]

::: desc
`0x04000000`\
*no description available*
:::

[]{#ColorTeal}

`ColorTeal`

[tadsio.h](../file/tadsio.h.html)\[[746](../source/tadsio.h.html#746)\]

::: desc
`ColorRGB(0x00, 0x80, 0x80)`\
*no description available*
:::

[]{#ColorText}

`ColorText`

[tadsio.h](../file/tadsio.h.html)\[[722](../source/tadsio.h.html#722)\]

::: desc
`0x02000000`\
*no description available*
:::

[]{#ColorTextBg}

`ColorTextBg`

[tadsio.h](../file/tadsio.h.html)\[[723](../source/tadsio.h.html#723)\]

::: desc
`0x03000000`\
*no description available*
:::

[]{#ColorTransparent}

`ColorTransparent`

[tadsio.h](../file/tadsio.h.html)\[[721](../source/tadsio.h.html#721)\]

::: desc
`0x01000000`\
*no description available*
:::

[]{#ColorWhite}

`ColorWhite`

[tadsio.h](../file/tadsio.h.html)\[[730](../source/tadsio.h.html#730)\]

::: desc
`ColorRGB(0xff, 0xff, 0xff)`\
*no description available*
:::

[]{#ColorYellow}

`ColorYellow`

[tadsio.h](../file/tadsio.h.html)\[[734](../source/tadsio.h.html#734)\]

::: desc
`ColorRGB(0xFF, 0xFF, 0x00)`\
*no description available*
:::

[]{#FileTypeBin}

`FileTypeBin`

[tadsio.h](../file/tadsio.h.html)\[[561](../source/tadsio.h.html#561)\]

::: desc
`8 /* binary data file */`\
*no description available*
:::

[]{#FileTypeCmd}

`FileTypeCmd`

[tadsio.h](../file/tadsio.h.html)\[[559](../source/tadsio.h.html#559)\]

::: desc
`5 /* command input file */`\
*no description available*
:::

[]{#FileTypeData}

`FileTypeData`

[tadsio.h](../file/tadsio.h.html)\[[558](../source/tadsio.h.html#558)\]

::: desc
`4 /* arbitrary data file */`\
*no description available*
:::

[]{#FileTypeLog}

`FileTypeLog`

[tadsio.h](../file/tadsio.h.html)\[[557](../source/tadsio.h.html#557)\]

::: desc
`2 /* a transcript (log) file */`\
constants for inputFile() file type codes
:::

[]{#FileTypeT3Image}

`FileTypeT3Image`

[tadsio.h](../file/tadsio.h.html)\[[563](../source/tadsio.h.html#563)\]

::: desc
`12 /* T3 executable image (game) file */`\
*no description available*
:::

[]{#FileTypeT3Save}

`FileTypeT3Save`

[tadsio.h](../file/tadsio.h.html)\[[564](../source/tadsio.h.html#564)\]

::: desc
`15 /* T3 saved state file */`\
*no description available*
:::

[]{#FileTypeText}

`FileTypeText`

[tadsio.h](../file/tadsio.h.html)\[[560](../source/tadsio.h.html#560)\]

::: desc
`7 /* text file */`\
*no description available*
:::

[]{#FileTypeUnknown}

`FileTypeUnknown`

[tadsio.h](../file/tadsio.h.html)\[[562](../source/tadsio.h.html#562)\]

::: desc
`11 /* unknown file type */`\
*no description available*
:::

[]{#HelpCommand}

`HelpCommand`

[tadsio.h](../file/tadsio.h.html)\[[518](../source/tadsio.h.html#518)\]

::: desc
`0x0006 /* show game HELP */`\
*no description available*
:::

[]{#InDlgIconError}

`InDlgIconError`

[tadsio.h](../file/tadsio.h.html)\[[533](../source/tadsio.h.html#533)\]

::: desc
`4`\
*no description available*
:::

[]{#InDlgIconInfo}

`InDlgIconInfo`

[tadsio.h](../file/tadsio.h.html)\[[531](../source/tadsio.h.html#531)\]

::: desc
`2`\
*no description available*
:::

[]{#InDlgIconNone}

`InDlgIconNone`

[tadsio.h](../file/tadsio.h.html)\[[529](../source/tadsio.h.html#529)\]

::: desc
`0`\
*no description available*
:::

[]{#InDlgIconQuestion}

`InDlgIconQuestion`

[tadsio.h](../file/tadsio.h.html)\[[532](../source/tadsio.h.html#532)\]

::: desc
`3`\
*no description available*
:::

[]{#InDlgIconWarning}

`InDlgIconWarning`

[tadsio.h](../file/tadsio.h.html)\[[530](../source/tadsio.h.html#530)\]

::: desc
`1`\
*no description available*
:::

[]{#InDlgLblCancel}

`InDlgLblCancel`

[tadsio.h](../file/tadsio.h.html)\[[536](../source/tadsio.h.html#536)\]

::: desc
`2`\
*no description available*
:::

[]{#InDlgLblNo}

`InDlgLblNo`

[tadsio.h](../file/tadsio.h.html)\[[538](../source/tadsio.h.html#538)\]

::: desc
`4`\
*no description available*
:::

[]{#InDlgLblOk}

`InDlgLblOk`

[tadsio.h](../file/tadsio.h.html)\[[535](../source/tadsio.h.html#535)\]

::: desc
`1`\
*no description available*
:::

[]{#InDlgLblYes}

`InDlgLblYes`

[tadsio.h](../file/tadsio.h.html)\[[537](../source/tadsio.h.html#537)\]

::: desc
`3`\
*no description available*
:::

[]{#InDlgOk}

`InDlgOk`

[tadsio.h](../file/tadsio.h.html)\[[524](../source/tadsio.h.html#524)\]

::: desc
`1`\
constants for inputDialog()
:::

[]{#InDlgOkCancel}

`InDlgOkCancel`

[tadsio.h](../file/tadsio.h.html)\[[525](../source/tadsio.h.html#525)\]

::: desc
`2`\
*no description available*
:::

[]{#InDlgYesNo}

`InDlgYesNo`

[tadsio.h](../file/tadsio.h.html)\[[526](../source/tadsio.h.html#526)\]

::: desc
`3`\
*no description available*
:::

[]{#InDlgYesNoCancel}

`InDlgYesNoCancel`

[tadsio.h](../file/tadsio.h.html)\[[527](../source/tadsio.h.html#527)\]

::: desc
`4`\
*no description available*
:::

[]{#InEvtEndQuietScript}

`InEvtEndQuietScript`

[tadsio.h](../file/tadsio.h.html)\[[507](../source/tadsio.h.html#507)\]

::: desc
`10000`\
*no description available*
:::

[]{#InEvtEndScript}

`InEvtEndScript`

[tadsio.h](../file/tadsio.h.html)\[[508](../source/tadsio.h.html#508)\]

::: desc
`10003`\
*no description available*
:::

[]{#InEvtEof}

`InEvtEof`

[tadsio.h](../file/tadsio.h.html)\[[504](../source/tadsio.h.html#504)\]

::: desc
`5`\
*no description available*
:::

[]{#InEvtHref}

`InEvtHref`

[tadsio.h](../file/tadsio.h.html)\[[501](../source/tadsio.h.html#501)\]

::: desc
`3`\
*no description available*
:::

[]{#InEvtKey}

`InEvtKey`

[tadsio.h](../file/tadsio.h.html)\[[499](../source/tadsio.h.html#499)\]

::: desc
`1`\
constants for the event codes returned by the inputEvent() and
inputLineTimeout() intrinsic functions
:::

[]{#InEvtLine}

`InEvtLine`

[tadsio.h](../file/tadsio.h.html)\[[505](../source/tadsio.h.html#505)\]

::: desc
`6`\
*no description available*
:::

[]{#InEvtNoTimeout}

`InEvtNoTimeout`

[tadsio.h](../file/tadsio.h.html)\[[502](../source/tadsio.h.html#502)\]

::: desc
`4`\
*no description available*
:::

[]{#InEvtNotimeout}

`InEvtNotimeout`

[tadsio.h](../file/tadsio.h.html)\[[503](../source/tadsio.h.html#503)\]

::: desc
`4 /* (note minor capitalization variation) */`\
*no description available*
:::

[]{#InEvtSysCommand}

`InEvtSysCommand`

[tadsio.h](../file/tadsio.h.html)\[[506](../source/tadsio.h.html#506)\]

::: desc
`0x100`\
*no description available*
:::

[]{#InEvtTimeout}

`InEvtTimeout`

[tadsio.h](../file/tadsio.h.html)\[[500](../source/tadsio.h.html#500)\]

::: desc
`2`\
*no description available*
:::

[]{#InFileCancel}

`InFileCancel`

[tadsio.h](../file/tadsio.h.html)\[[552](../source/tadsio.h.html#552)\]

::: desc
`2 /* player canceled the file selector */`\
*no description available*
:::

[]{#InFileFailure}

`InFileFailure`

[tadsio.h](../file/tadsio.h.html)\[[551](../source/tadsio.h.html#551)\]

::: desc
`1 /* an error occurred asking for a file */`\
*no description available*
:::

[]{#InFileOpen}

`InFileOpen`

[tadsio.h](../file/tadsio.h.html)\[[543](../source/tadsio.h.html#543)\]

::: desc
`1 /* open an existing file for reading */`\
inputFile() dialog types
:::

[]{#InFileSave}

`InFileSave`

[tadsio.h](../file/tadsio.h.html)\[[544](../source/tadsio.h.html#544)\]

::: desc
`2 /* save to the file */`\
*no description available*
:::

[]{#InFileSuccess}

`InFileSuccess`

[tadsio.h](../file/tadsio.h.html)\[[550](../source/tadsio.h.html#550)\]

::: desc
`0 /* success - 2nd list element is filename */`\
inputFile() return codes - these are returned in the first element of
the list returned from inputFile()
:::

[]{#LogTypeCommand}

`LogTypeCommand`

[tadsio.h](../file/tadsio.h.html)\[[484](../source/tadsio.h.html#484)\]

::: desc
`2 /* log only command-line input */`\
*no description available*
:::

[]{#LogTypeScript}

`LogTypeScript`

[tadsio.h](../file/tadsio.h.html)\[[485](../source/tadsio.h.html#485)\]

::: desc
`3 /* log all input events */`\
*no description available*
:::

[]{#LogTypeTranscript}

`LogTypeTranscript`

[tadsio.h](../file/tadsio.h.html)\[[483](../source/tadsio.h.html#483)\]

::: desc
`1 /* log all input and output to a transcript */`\
log file types
:::

[]{#MainWindowLogHandle}

`MainWindowLogHandle`

[tadsio.h](../file/tadsio.h.html)\[[493](../source/tadsio.h.html#493)\]

::: desc
`(-1)`\
The special log console handle for the main console window\'s
transcript. This can be used as the handle in logConsoleSay(), to write
text directly to the main console\'s log file, if any. Note that this
console cannot be closed via logConsoleClose(); use setLogFile(nil)
instead.
:::

[]{#QuitCommand}

`QuitCommand`

[tadsio.h](../file/tadsio.h.html)\[[516](../source/tadsio.h.html#516)\]

::: desc
`0x0004 /* QUIT the game */`\
*no description available*
:::

[]{#RestoreCommand}

`RestoreCommand`

[tadsio.h](../file/tadsio.h.html)\[[514](../source/tadsio.h.html#514)\]

::: desc
`0x0002 /* RESTORE a saved position */`\
*no description available*
:::

[]{#SaveCommand}

`SaveCommand`

[tadsio.h](../file/tadsio.h.html)\[[513](../source/tadsio.h.html#513)\]

::: desc
`0x0001 /* SAVE the current position */`\
Command codes for InEvtSysCommand
:::

[]{#ScriptFileEvent}

`ScriptFileEvent`

[tadsio.h](../file/tadsio.h.html)\[[632](../source/tadsio.h.html#632)\]

::: desc
`4 /* this is an event script (query only) */`\
*no description available*
:::

[]{#ScriptFileNonstop}

`ScriptFileNonstop`

[tadsio.h](../file/tadsio.h.html)\[[631](../source/tadsio.h.html#631)\]

::: desc
`2 /* turn off MORE prompt while reading script */`\
*no description available*
:::

[]{#ScriptFileQuiet}

`ScriptFileQuiet`

[tadsio.h](../file/tadsio.h.html)\[[630](../source/tadsio.h.html#630)\]

::: desc
`1 /* do not display output while reading script */`\
flags for setScriptFile
:::

[]{#ScriptReqGetStatus}

`ScriptReqGetStatus`

[tadsio.h](../file/tadsio.h.html)\[[644](../source/tadsio.h.html#644)\]

::: desc
`0x7000`\
Script Request - get current script status. In 3.0.17+, passing this
constant as the \'filename\' argument to getScriptFile() will perform a
\"get script status\" request. If there\'s no script file in progress,
the function returns nil. If a script file is being read, the function
returns an integer value giving a combination of ScriptFileXxx flag
values indicating the current script status. Note that a return value of
0 (zero) means that a script is running but none of the ScriptFileXxx
flags are applicable.
:::

[]{#StatModeNormal}

`StatModeNormal`

[tadsio.h](../file/tadsio.h.html)\[[624](../source/tadsio.h.html#624)\]

::: desc
`0 /* displaying normal text */`\
constants for statusMode
:::

[]{#StatModeStatus}

`StatModeStatus`

[tadsio.h](../file/tadsio.h.html)\[[625](../source/tadsio.h.html#625)\]

::: desc
`1 /* display status line text */`\
*no description available*
:::

[]{#SysInfoAudioCrossfade}

`SysInfoAudioCrossfade`

[tadsio.h](../file/tadsio.h.html)\[[601](../source/tadsio.h.html#601)\]

::: desc
`36`\
*no description available*
:::

[]{#SysInfoAudioFade}

`SysInfoAudioFade`

[tadsio.h](../file/tadsio.h.html)\[[600](../source/tadsio.h.html#600)\]

::: desc
`35`\
*no description available*
:::

[]{#SysInfoBanners}

`SysInfoBanners`

[tadsio.h](../file/tadsio.h.html)\[[598](../source/tadsio.h.html#598)\]

::: desc
`33`\
*no description available*
:::

[]{#SysInfoFadeMIDI}

`SysInfoFadeMIDI`

[tadsio.h](../file/tadsio.h.html)\[[619](../source/tadsio.h.html#619)\]

::: desc
`0x0008`\
*no description available*
:::

[]{#SysInfoFadeMPEG}

`SysInfoFadeMPEG`

[tadsio.h](../file/tadsio.h.html)\[[616](../source/tadsio.h.html#616)\]

::: desc
`0x0001`\
SysInfoAudioFade and SysInfoAudioCrossfade result codes
:::

[]{#SysInfoFadeOGG}

`SysInfoFadeOGG`

[tadsio.h](../file/tadsio.h.html)\[[617](../source/tadsio.h.html#617)\]

::: desc
`0x0002`\
*no description available*
:::

[]{#SysInfoFadeWAV}

`SysInfoFadeWAV`

[tadsio.h](../file/tadsio.h.html)\[[618](../source/tadsio.h.html#618)\]

::: desc
`0x0004`\
*no description available*
:::

[]{#SysInfoIClassHTML}

`SysInfoIClassHTML`

[tadsio.h](../file/tadsio.h.html)\[[613](../source/tadsio.h.html#613)\]

::: desc
`3`\
*no description available*
:::

[]{#SysInfoIClassText}

`SysInfoIClassText`

[tadsio.h](../file/tadsio.h.html)\[[611](../source/tadsio.h.html#611)\]

::: desc
`1`\
SysInfoInterpClass codes
:::

[]{#SysInfoIClassTextGUI}

`SysInfoIClassTextGUI`

[tadsio.h](../file/tadsio.h.html)\[[612](../source/tadsio.h.html#612)\]

::: desc
`2`\
*no description available*
:::

[]{#SysInfoInterpClass}

`SysInfoInterpClass`

[tadsio.h](../file/tadsio.h.html)\[[599](../source/tadsio.h.html#599)\]

::: desc
`34`\
*no description available*
:::

[]{#SysInfoJpeg}

`SysInfoJpeg`

[tadsio.h](../file/tadsio.h.html)\[[571](../source/tadsio.h.html#571)\]

::: desc
`5`\
*no description available*
:::

[]{#SysInfoLinksFtp}

`SysInfoLinksFtp`

[tadsio.h](../file/tadsio.h.html)\[[586](../source/tadsio.h.html#586)\]

::: desc
`21`\
*no description available*
:::

[]{#SysInfoLinksHttp}

`SysInfoLinksHttp`

[tadsio.h](../file/tadsio.h.html)\[[585](../source/tadsio.h.html#585)\]

::: desc
`20`\
*no description available*
:::

[]{#SysInfoLinksMailto}

`SysInfoLinksMailto`

[tadsio.h](../file/tadsio.h.html)\[[588](../source/tadsio.h.html#588)\]

::: desc
`23`\
*no description available*
:::

[]{#SysInfoLinksNews}

`SysInfoLinksNews`

[tadsio.h](../file/tadsio.h.html)\[[587](../source/tadsio.h.html#587)\]

::: desc
`22`\
*no description available*
:::

[]{#SysInfoLinksTelnet}

`SysInfoLinksTelnet`

[tadsio.h](../file/tadsio.h.html)\[[589](../source/tadsio.h.html#589)\]

::: desc
`24`\
*no description available*
:::

[]{#SysInfoMidi}

`SysInfoMidi`

[tadsio.h](../file/tadsio.h.html)\[[574](../source/tadsio.h.html#574)\]

::: desc
`8`\
*no description available*
:::

[]{#SysInfoMng}

`SysInfoMng`

[tadsio.h](../file/tadsio.h.html)\[[593](../source/tadsio.h.html#593)\]

::: desc
`28`\
*no description available*
:::

[]{#SysInfoMngAlpha}

`SysInfoMngAlpha`

[tadsio.h](../file/tadsio.h.html)\[[595](../source/tadsio.h.html#595)\]

::: desc
`30`\
*no description available*
:::

[]{#SysInfoMngTrans}

`SysInfoMngTrans`

[tadsio.h](../file/tadsio.h.html)\[[594](../source/tadsio.h.html#594)\]

::: desc
`29`\
*no description available*
:::

[]{#SysInfoMpeg}

`SysInfoMpeg`

[tadsio.h](../file/tadsio.h.html)\[[581](../source/tadsio.h.html#581)\]

::: desc
`15`\
*no description available*
:::

[]{#SysInfoMpeg1}

`SysInfoMpeg1`

[tadsio.h](../file/tadsio.h.html)\[[582](../source/tadsio.h.html#582)\]

::: desc
`16`\
*no description available*
:::

[]{#SysInfoMpeg2}

`SysInfoMpeg2`

[tadsio.h](../file/tadsio.h.html)\[[583](../source/tadsio.h.html#583)\]

::: desc
`17`\
*no description available*
:::

[]{#SysInfoMpeg3}

`SysInfoMpeg3`

[tadsio.h](../file/tadsio.h.html)\[[584](../source/tadsio.h.html#584)\]

::: desc
`18`\
*no description available*
:::

[]{#SysInfoOgg}

`SysInfoOgg`

[tadsio.h](../file/tadsio.h.html)\[[592](../source/tadsio.h.html#592)\]

::: desc
`27`\
*no description available*
:::

[]{#SysInfoOsName}

`SysInfoOsName`

[tadsio.h](../file/tadsio.h.html)\[[570](../source/tadsio.h.html#570)\]

::: desc
`3`\
*no description available*
:::

[]{#SysInfoPng}

`SysInfoPng`

[tadsio.h](../file/tadsio.h.html)\[[572](../source/tadsio.h.html#572)\]

::: desc
`6`\
*no description available*
:::

[]{#SysInfoPngAlpha}

`SysInfoPngAlpha`

[tadsio.h](../file/tadsio.h.html)\[[591](../source/tadsio.h.html#591)\]

::: desc
`26`\
*no description available*
:::

[]{#SysInfoPngTrans}

`SysInfoPngTrans`

[tadsio.h](../file/tadsio.h.html)\[[590](../source/tadsio.h.html#590)\]

::: desc
`25`\
*no description available*
:::

[]{#SysInfoPrefImages}

`SysInfoPrefImages`

[tadsio.h](../file/tadsio.h.html)\[[577](../source/tadsio.h.html#577)\]

::: desc
`11`\
*no description available*
:::

[]{#SysInfoPrefLinks}

`SysInfoPrefLinks`

[tadsio.h](../file/tadsio.h.html)\[[580](../source/tadsio.h.html#580)\]

::: desc
`14`\
*no description available*
:::

[]{#SysInfoPrefMusic}

`SysInfoPrefMusic`

[tadsio.h](../file/tadsio.h.html)\[[579](../source/tadsio.h.html#579)\]

::: desc
`13`\
*no description available*
:::

[]{#SysInfoPrefSounds}

`SysInfoPrefSounds`

[tadsio.h](../file/tadsio.h.html)\[[578](../source/tadsio.h.html#578)\]

::: desc
`12`\
*no description available*
:::

[]{#SysInfoTextColors}

`SysInfoTextColors`

[tadsio.h](../file/tadsio.h.html)\[[597](../source/tadsio.h.html#597)\]

::: desc
`32`\
*no description available*
:::

[]{#SysInfoTextHilite}

`SysInfoTextHilite`

[tadsio.h](../file/tadsio.h.html)\[[596](../source/tadsio.h.html#596)\]

::: desc
`31`\
*no description available*
:::

[]{#SysInfoTxcAnsiFg}

`SysInfoTxcAnsiFg`

[tadsio.h](../file/tadsio.h.html)\[[606](../source/tadsio.h.html#606)\]

::: desc
`2`\
*no description available*
:::

[]{#SysInfoTxcAnsiFgBg}

`SysInfoTxcAnsiFgBg`

[tadsio.h](../file/tadsio.h.html)\[[607](../source/tadsio.h.html#607)\]

::: desc
`3`\
*no description available*
:::

[]{#SysInfoTxcNone}

`SysInfoTxcNone`

[tadsio.h](../file/tadsio.h.html)\[[604](../source/tadsio.h.html#604)\]

::: desc
`0`\
SysInfoTextColors support level codes
:::

[]{#SysInfoTxcParam}

`SysInfoTxcParam`

[tadsio.h](../file/tadsio.h.html)\[[605](../source/tadsio.h.html#605)\]

::: desc
`1`\
*no description available*
:::

[]{#SysInfoTxcRGB}

`SysInfoTxcRGB`

[tadsio.h](../file/tadsio.h.html)\[[608](../source/tadsio.h.html#608)\]

::: desc
`4`\
*no description available*
:::

[]{#SysInfoVersion}

`SysInfoVersion`

[tadsio.h](../file/tadsio.h.html)\[[569](../source/tadsio.h.html#569)\]

::: desc
`2`\
constants for systemInfo information type codes
:::

[]{#SysInfoWav}

`SysInfoWav`

[tadsio.h](../file/tadsio.h.html)\[[573](../source/tadsio.h.html#573)\]

::: desc
`7`\
*no description available*
:::

[]{#SysInfoWavMidiOvl}

`SysInfoWavMidiOvl`

[tadsio.h](../file/tadsio.h.html)\[[575](../source/tadsio.h.html#575)\]

::: desc
`9`\
*no description available*
:::

[]{#SysInfoWavOvl}

`SysInfoWavOvl`

[tadsio.h](../file/tadsio.h.html)\[[576](../source/tadsio.h.html#576)\]

::: desc
`10`\
*no description available*
:::

[]{#UndoCommand}

`UndoCommand`

[tadsio.h](../file/tadsio.h.html)\[[515](../source/tadsio.h.html#515)\]

::: desc
`0x0003 /* UNDO one turn */`\
*no description available*
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
