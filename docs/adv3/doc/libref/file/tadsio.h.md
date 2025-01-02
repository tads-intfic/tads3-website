---
layout: docs
---
<span class="title">tadsio.h</span><span class="type">file</span>

[source file](../source/tadsio.h.html)

**Classes**  
[Summary](#_ClassSummary_)  
 

**Functions**  
[Summary](#_FunctionSummary_)  
[Details](#_Functions_)

**Macros**  
[Summary](#_MacroSummary_)  
[Details](#_Macros_)

**Enums**  
[Summary](#_EnumSummary_)  
[Details](#_Enums_)

**Templates**  
[Summary](#_TemplateSummary_)  
[Details](#_Templates_)



This header defines the tads-io intrinsic function set.

The TADS input/output function set provides access to the user
interface. This lets you read input from the keyboard and display output
on the monitor or terminal. It also provides access to windowing
features (via the "banner" functions) on systems that support multiple
display windows (which doesn't necessarily mean GUI-type systems: many
character-mode systems support the banner operations as well, simply by
dividing up the character-mode screen into rectangular regions).



<span id="_ClassSummary_"></span>



<span class="hdln">Summary of Classes</span>  



*(none)* <span id="FunctionSummary_"></span>



<span class="hdln">Summary of Global Functions</span>  



[`bannerClear`](#bannerClear) [`bannerCreate`](#bannerCreate) [`bannerDelete`](#bannerDelete) [`bannerFlush`](#bannerFlush) [`bannerGetInfo`](#bannerGetInfo) [`bannerGoTo`](#bannerGoTo) [`bannerSay`](#bannerSay) [`bannerSetScreenColor`](#bannerSetScreenColor) [`bannerSetSize`](#bannerSetSize) [`bannerSetTextColor`](#bannerSetTextColor) [`bannerSizeToContents`](#bannerSizeToContents) [`clearScreen`](#clearScreen) [`flushOutput`](#flushOutput) [`getLocalCharSet`](#getLocalCharSet) [`inputDialog`](#inputDialog) [`inputEvent`](#inputEvent) [`inputFile`](#inputFile) [`inputKey`](#inputKey) [`inputLine`](#inputLine) [`inputLineCancel`](#inputLineCancel) [`inputLineTimeout`](#inputLineTimeout) [`logConsoleClose`](#logConsoleClose) [`logConsoleCreate`](#logConsoleCreate) [`logConsoleSay`](#logConsoleSay) [`logInputEvent`](#logInputEvent) [`morePrompt`](#morePrompt) [`resExists`](#resExists) [`setLogFile`](#setLogFile) [`setScriptFile`](#setScriptFile) [`statusMode`](#statusMode) [`statusRight`](#statusRight) [`systemInfo`](#systemInfo) [`tadsSay`](#tadsSay) [`timeDelay`](#timeDelay)

<span id="_MacroSummary_"></span>



<span class="hdln">Summary of Macros</span>  



[`BannerAfter`](#BannerAfter) [`BannerAlignBottom`](#BannerAlignBottom) [`BannerAlignLeft`](#BannerAlignLeft) [`BannerAlignRight`](#BannerAlignRight) [`BannerAlignTop`](#BannerAlignTop) [`BannerBefore`](#BannerBefore) [`BannerFirst`](#BannerFirst) [`BannerLast`](#BannerLast) [`BannerSizeAbsolute`](#BannerSizeAbsolute) [`BannerSizePercent`](#BannerSizePercent) [`BannerStyleAutoHScroll`](#BannerStyleAutoHScroll) [`BannerStyleAutoVScroll`](#BannerStyleAutoVScroll) [`BannerStyleBorder`](#BannerStyleBorder) [`BannerStyleHScroll`](#BannerStyleHScroll) [`BannerStyleHStrut`](#BannerStyleHStrut) [`BannerStyleMoreMode`](#BannerStyleMoreMode) [`BannerStyleTabAlign`](#BannerStyleTabAlign) [`BannerStyleVScroll`](#BannerStyleVScroll) [`BannerStyleVStrut`](#BannerStyleVStrut) [`BannerTypeText`](#BannerTypeText) [`BannerTypeTextGrid`](#BannerTypeTextGrid) [`CharsetDisplay`](#CharsetDisplay) [`CharsetFileCont`](#CharsetFileCont) [`CharsetFileName`](#CharsetFileName) [`CloseCommand`](#CloseCommand) [`ColorAqua`](#ColorAqua) [`ColorBlack`](#ColorBlack) [`ColorBlue`](#ColorBlue) [`ColorCyan`](#ColorCyan) [`ColorFuchsia`](#ColorFuchsia) [`ColorGray`](#ColorGray) [`ColorGreen`](#ColorGreen) [`ColorInput`](#ColorInput) [`ColorLime`](#ColorLime) [`ColorMagenta`](#ColorMagenta) [`ColorMaroon`](#ColorMaroon) [`ColorNavy`](#ColorNavy) [`ColorOlive`](#ColorOlive) [`ColorPurple`](#ColorPurple) [`ColorRed`](#ColorRed) [`ColorRGB`](#ColorRGB) [`ColorSilver`](#ColorSilver) [`ColorStatusBg`](#ColorStatusBg) [`ColorStatusText`](#ColorStatusText) [`ColorTeal`](#ColorTeal) [`ColorText`](#ColorText) [`ColorTextBg`](#ColorTextBg) [`ColorTransparent`](#ColorTransparent) [`ColorWhite`](#ColorWhite) [`ColorYellow`](#ColorYellow) [`FileTypeBin`](#FileTypeBin) [`FileTypeCmd`](#FileTypeCmd) [`FileTypeData`](#FileTypeData) [`FileTypeLog`](#FileTypeLog) [`FileTypeT3Image`](#FileTypeT3Image) [`FileTypeT3Save`](#FileTypeT3Save) [`FileTypeText`](#FileTypeText) [`FileTypeUnknown`](#FileTypeUnknown) [`HelpCommand`](#HelpCommand) [`InDlgIconError`](#InDlgIconError) [`InDlgIconInfo`](#InDlgIconInfo) [`InDlgIconNone`](#InDlgIconNone) [`InDlgIconQuestion`](#InDlgIconQuestion) [`InDlgIconWarning`](#InDlgIconWarning) [`InDlgLblCancel`](#InDlgLblCancel) [`InDlgLblNo`](#InDlgLblNo) [`InDlgLblOk`](#InDlgLblOk) [`InDlgLblYes`](#InDlgLblYes) [`InDlgOk`](#InDlgOk) [`InDlgOkCancel`](#InDlgOkCancel) [`InDlgYesNo`](#InDlgYesNo) [`InDlgYesNoCancel`](#InDlgYesNoCancel) [`InEvtEndQuietScript`](#InEvtEndQuietScript) [`InEvtEndScript`](#InEvtEndScript) [`InEvtEof`](#InEvtEof) [`InEvtHref`](#InEvtHref) [`InEvtKey`](#InEvtKey) [`InEvtLine`](#InEvtLine) [`InEvtNoTimeout`](#InEvtNoTimeout) [`InEvtNotimeout`](#InEvtNotimeout) [`InEvtSysCommand`](#InEvtSysCommand) [`InEvtTimeout`](#InEvtTimeout) [`InFileCancel`](#InFileCancel) [`InFileFailure`](#InFileFailure) [`InFileOpen`](#InFileOpen) [`InFileSave`](#InFileSave) [`InFileSuccess`](#InFileSuccess) [`LogTypeCommand`](#LogTypeCommand) [`LogTypeScript`](#LogTypeScript) [`LogTypeTranscript`](#LogTypeTranscript) [`MainWindowLogHandle`](#MainWindowLogHandle) [`QuitCommand`](#QuitCommand) [`RestoreCommand`](#RestoreCommand) [`SaveCommand`](#SaveCommand) [`ScriptFileEvent`](#ScriptFileEvent) [`ScriptFileNonstop`](#ScriptFileNonstop) [`ScriptFileQuiet`](#ScriptFileQuiet) [`ScriptReqGetStatus`](#ScriptReqGetStatus) [`StatModeNormal`](#StatModeNormal) [`StatModeStatus`](#StatModeStatus) [`SysInfoAudioCrossfade`](#SysInfoAudioCrossfade) [`SysInfoAudioFade`](#SysInfoAudioFade) [`SysInfoBanners`](#SysInfoBanners) [`SysInfoFadeMIDI`](#SysInfoFadeMIDI) [`SysInfoFadeMPEG`](#SysInfoFadeMPEG) [`SysInfoFadeOGG`](#SysInfoFadeOGG) [`SysInfoFadeWAV`](#SysInfoFadeWAV) [`SysInfoIClassHTML`](#SysInfoIClassHTML) [`SysInfoIClassText`](#SysInfoIClassText) [`SysInfoIClassTextGUI`](#SysInfoIClassTextGUI) [`SysInfoInterpClass`](#SysInfoInterpClass) [`SysInfoJpeg`](#SysInfoJpeg) [`SysInfoLinksFtp`](#SysInfoLinksFtp) [`SysInfoLinksHttp`](#SysInfoLinksHttp) [`SysInfoLinksMailto`](#SysInfoLinksMailto) [`SysInfoLinksNews`](#SysInfoLinksNews) [`SysInfoLinksTelnet`](#SysInfoLinksTelnet) [`SysInfoMidi`](#SysInfoMidi) [`SysInfoMng`](#SysInfoMng) [`SysInfoMngAlpha`](#SysInfoMngAlpha) [`SysInfoMngTrans`](#SysInfoMngTrans) [`SysInfoMpeg`](#SysInfoMpeg) [`SysInfoMpeg1`](#SysInfoMpeg1) [`SysInfoMpeg2`](#SysInfoMpeg2) [`SysInfoMpeg3`](#SysInfoMpeg3) [`SysInfoOgg`](#SysInfoOgg) [`SysInfoOsName`](#SysInfoOsName) [`SysInfoPng`](#SysInfoPng) [`SysInfoPngAlpha`](#SysInfoPngAlpha) [`SysInfoPngTrans`](#SysInfoPngTrans) [`SysInfoPrefImages`](#SysInfoPrefImages) [`SysInfoPrefLinks`](#SysInfoPrefLinks) [`SysInfoPrefMusic`](#SysInfoPrefMusic) [`SysInfoPrefSounds`](#SysInfoPrefSounds) [`SysInfoTextColors`](#SysInfoTextColors) [`SysInfoTextHilite`](#SysInfoTextHilite) [`SysInfoTxcAnsiFg`](#SysInfoTxcAnsiFg) [`SysInfoTxcAnsiFgBg`](#SysInfoTxcAnsiFgBg) [`SysInfoTxcNone`](#SysInfoTxcNone) [`SysInfoTxcParam`](#SysInfoTxcParam) [`SysInfoTxcRGB`](#SysInfoTxcRGB) [`SysInfoVersion`](#SysInfoVersion) [`SysInfoWav`](#SysInfoWav) [`SysInfoWavMidiOvl`](#SysInfoWavMidiOvl) [`SysInfoWavOvl`](#SysInfoWavOvl) [`UndoCommand`](#UndoCommand)

<span id="_EnumSummary_"></span>



<span class="hdln">Summary of Enums</span>  



*(none)* <span id="_TemplateSummary_"></span>



<span class="hdln">Summary of Templates</span>  



*(none)* <span id="_Functions_"></span>



<span class="hdln">Global Functions</span>  



<span id="bannerClear"></span>

`bannerClear (handle)`

[tadsio.h](../file/tadsio.h.html)\[[350](../source/tadsio.h.html#350)\]



Clear the contents of a banner window. 'color' is the color to use for
the screen color after clearing the window, given as a ColorXxx value
(see below).



<span id="bannerCreate"></span>

`bannerCreate (parent, where, other, windowType, align, size, sizeUnits, styleFlags)`

[tadsio.h](../file/tadsio.h.html)\[[336](../source/tadsio.h.html#336)\]



Create a banner window. Returns the "handle" of the new window, which is
used to identify the window in subsequent bannerXxx() functions. Not all
interpreters support banner windows; if the interpreter does not support
this feature, the return value is nil.

'parent' is the handle of the parent window; if this is nil, the banner
is split off from the main display window. 'where' is a BannerXxx value
giving the list position; if this is BannerBefore or BannerAfter,
'other' is the handle of an existing banner window child of the same
parent. 'windowType' is a BannerTypeXxx value giving the type of window
to create. 'align' is a BannerAlignXxx value giving the alignment - that
is, the edge of the parent window to which the new banner window
attaches. 'size' is the size of the window, in the units given by
'sizeUnits', which is a BannerSizeXxx value. 'styleFlags' is a
combination of BannerStyleXxx bit flags that specifies the desired
combination of visual styles and UI behavior for the new window.



<span id="bannerDelete"></span>

`bannerDelete (handle)`

[tadsio.h](../file/tadsio.h.html)\[[343](../source/tadsio.h.html#343)\]



Delete a banner window. 'handle' is the handle to the window to be
removed.



<span id="bannerFlush"></span>

`bannerFlush (handle)`

[tadsio.h](../file/tadsio.h.html)\[[368](../source/tadsio.h.html#368)\]



Flush all buffers for a banner window. This ensures that any text
written with bannerSay() is actually displayed for the user to see
(rather than being held in internal buffers).



<span id="bannerGetInfo"></span>

`bannerGetInfo (handle)`

[tadsio.h](../file/tadsio.h.html)\[[418](../source/tadsio.h.html#418)\]



Get information on the banner. This returns a list giving a detailed set
of information describing the banner.



<span id="bannerGoTo"></span>

`bannerGoTo (handle, row, col)`

[tadsio.h](../file/tadsio.h.html)\[[393](../source/tadsio.h.html#393)\]



Go to to an output position. This is meaningful only for
BannerTypeTextGrid windows. This sets the next text output position to
the given row and column in the text grid; the next call to bannerSay()
will display its output starting at this position.



<span id="bannerSay"></span>

`bannerSay (handle, ...)`

[tadsio.h](../file/tadsio.h.html)\[[361](../source/tadsio.h.html#361)\]



Write text to a banner window. The text is displayed in the given
banner. For a BannerTypeText window, HTML tags in the text are
interpreted; for a BannerTypeTextGrid window, the text is written
exactly as given, without any HTML interpretation.

The value list is handled the same way as the arguments to tadsSay() in
terms of type conversions.



<span id="bannerSetScreenColor"></span>

`bannerSetScreenColor (handle, color)`

[tadsio.h](../file/tadsio.h.html)\[[412](../source/tadsio.h.html#412)\]



Set the "screen color" in the banner window. This is the color used to
fill parts of the window that aren't displaying any text, and as the
background color for all text displayed when the text background color
is ColorTransparent. Setting the screen color immediately sets the color
for the entire window - even text previously displayed in the window is
affected by this change.



<span id="bannerSetSize"></span>

`bannerSetSize (handle, size, sizeUnits, isAdvisory)`

[tadsio.h](../file/tadsio.h.html)\[[432](../source/tadsio.h.html#432)\]



Set the size of a banner. This explicitly sets the banner's height (for
a top or bottom banner) or width (for a left or right) banner to the
'size', which is specified in units given by 'sizeUnits', which is a
BannerSizeXxx constant. If 'isAdvisory' is true, the caller is
indicating that this call will be followed soon by a call to
bannerSizeToContents(). On systems that support sizing to contents, an
"advisory" call to bannerSetSize() will simply be ignored in
anticipation of the upcoming call to bannerSizeToContents(). On systems
that don't support sizing to contents, an advisory call will actually
resize the window.



<span id="bannerSetTextColor"></span>

`bannerSetTextColor (handle, fg, bg)`

[tadsio.h](../file/tadsio.h.html)\[[402](../source/tadsio.h.html#402)\]



Set text foreground and background colors. This affects the color of
subsequently displayed text; text displayed previously is not affected.
The colors are given as ColorXxx values (see below). If 'bg' is
ColorTransparent, then text is shown with the current screen color in
the window.



<span id="bannerSizeToContents"></span>

`bannerSizeToContents (handle)`

[tadsio.h](../file/tadsio.h.html)\[[385](../source/tadsio.h.html#385)\]



Size a banner to fit its contents. This resizes the banner such that the
contents just fit. In the case of a top- or bottom-aligned banner, the
height is set just high enough to hold all of the text currently
displayed. In the case of a left- or right-aligned banner, the width is
set just wide enough to hold the widest single word that can't be broken
across lines. In all cases, the size includes any fixed margin space, to
ensure that all of the text in the window is actually visible without
scrolling.

Note that not all systems support this function. On systems where the
function is not supported, this call has no effect. Because of this, you
should always use this function in conjunction with an "advisory" call
to bannerSetSize().



<span id="clearScreen"></span>

`clearScreen ( )`

[tadsio.h](../file/tadsio.h.html)\[[48](../source/tadsio.h.html#48)\]



Clear the display. This clears the main window.



<span id="flushOutput"></span>

`flushOutput ( )`

[tadsio.h](../file/tadsio.h.html)\[[265](../source/tadsio.h.html#265)\]



Flush text output and update the main display window. This ensures that
any text displayed with tadsSay() is actually displayed, for the user to
see (rather than being held in internal buffers).



<span id="getLocalCharSet"></span>

`getLocalCharSet (which)`

[tadsio.h](../file/tadsio.h.html)\[[258](../source/tadsio.h.html#258)\]



Get the local default character set. 'which' is a CharsetXxx value
giving which local character set to retrieve. Returns a string giving
the name of the given local character set.



<span id="inputDialog"></span>

`inputDialog (icon, prompt, buttons, defaultButton, cancelButton)`

[tadsio.h](../file/tadsio.h.html)\[[123](../source/tadsio.h.html#123)\]



Display a simple "message box" dialog (known on some systems as an
"alert" dialog). This displays a dialog that includes a short message
for the user to read, an icon indicating the general nature of the
condition that gave rise to the dialog (an error, a warning, a choice
for the user to make, etc.), and a set of push-buttons that dismiss the
dialog and (in some cases) let the user choose among options. 'icon' is
an InDlgIconXxx value giving the type of icon to show, if any; 'prompt'
is the message string to display; 'buttons' gives the set of buttons to
display; 'defaultButton' is the index (starting at 1) among the buttons
of the default button; and 'cancelButton' is the index of the
cancellation button.

'buttons' can be given as an InDlgXxx constant (InDlgOk, InDlgOkCancel,
etc.) to select one of the standard sets of buttons. Or, it can be a
list giving a custom set of buttons, in which case each element of the
list is either a string giving a custom label for the button, or one of
the InDlgLblXxx values to select a standard label. The standard labels
should be used when possible, as these will be automatically localized;
labels given explicitly as strings will be used exactly as given. If a
list of custom button labels is given, the buttons are displayed in the
dialog in the order of the list (usually left to right, but this could
vary according to system conventions and localization).

Each custom button label string can incorporate an ampersand ("&"). The
letter immediately following the ampersand, if provided, is used as the
keyboard shortcut for the button. This is particularly important on
character-mode systems, where the "dialog" is typically shown merely as
a text prompt, and the user responds by selecting the letter of the
desired option. Typically, you should use the first character of a
button label as its keyboard shortcut, but this obviously won't work
when two button labels have the same first letter; in these cases, you
should choose another letter from the button label, preferably something
like the first letter of the second word of the button label, or the
first letter of the stressed syllable of the most important word of the
label.

The return value is the index among the buttons of the button that the
user selects to dismiss the dialog. The function doesn't return until
the user selects one of the buttons.



<span id="inputEvent"></span>

`inputEvent (timeout?)`

[tadsio.h](../file/tadsio.h.html)\[[79](../source/tadsio.h.html#79)\]



Read a single input event. Waits until an input event is available, then
returns the event as a list. The first element of the list is an
InEvtXxx value indicating the type of the event; the remainder of the
list varies according to the event type. If 'timeout' is provided, it
gives the maximum waiting interval in milliseconds; if no input event
occurs within this interval, the function returns an InEvtTimeout event.



<span id="inputFile"></span>

`inputFile (prompt, dialogType, fileType, flags)`

[tadsio.h](../file/tadsio.h.html)\[[183](../source/tadsio.h.html#183)\]



Display a file selector dialog. This prompts the user to select a file.
On GUI systems, this will typically display the standard system file
selection dialog; on character-mode systems, it might simply display the
prompt string and let the user type the name of a file directly.

'prompt' is the message string to display in the dialog to let the user
know what type of file is being requested. 'dialogType' is one of the
InFileXxx constants specifying whether the request is to select an
existing file or to specify the name for a new file. 'fileType' is a
FileTypeXxx constant giving the format of the file being requested; this
is used on some systems to filter the displayed list of existing files
so that only files of the same format are included, to reduce clutter.
'flags' is reserved for future use and should simply be set to zero.

The return value is a list. The first element is an integer giving the
status: InFileSuccess indicates that the user successfully selected a
file, whose name is given as a string in the second element of the
result list; InFileFailure indicates a system error of some kind showing
the dialog; and InFileCancel indicates that the user explicitly canceled
the dialog.

On success (return list\[1\] == InFileSuccess), the list contains the
following additional elements:

  
\[2\] = the selected filename  
\[3\] = nil (reserved for future use)  
\[4\] = script warning message, or nil if no warning

The warning message is a string to be displayed to the user to warn
about a possible error condition in the script input. The script reader
checks the file specified in the script to see if it's valid; if the
dialog type is Open, the script reader verifies that the file exists,
and for a Save dialog the reader warns if the file \*does\* already
exist or is not writable. In the conventional UI, the script reader
displays these warnings directly to the user through the console UI, but
this isn't possible in the Web UI since the user might be running on a
remote browser. Instead, the script reader still checks for the possible
errors, but rather than displaying any warnings, it returns them here.
The caller is responsible for displaying the warning and asking the user
for confirmation.

For localization purposes, the warning message starts with a two-letter
code indicating the specific error, followed by a space, followed by the
English text of the warning. The codes are:

  
OV - the script might overwrite an existing file (Save dialog)  
WR - the file can't be created/written (Save dialog)  
RD - the file doesn't exist/can't be read (Open dialog)

Note that the warning message will always be nil if the script reader
displayed the warning message itself. This means that your program can
unconditionally display this message if it's non-nil - there's no danger
that the script reader will have redundantly displayed the message.



<span id="inputKey"></span>

`inputKey ( )`

[tadsio.h](../file/tadsio.h.html)\[[68](../source/tadsio.h.html#68)\]



Read a single keystroke from the keyboard. Waits until the user presses
a key, then returns the keystroke as a string.



<span id="inputLine"></span>

`inputLine ( )`

[tadsio.h](../file/tadsio.h.html)\[[62](../source/tadsio.h.html#62)\]



Read a line of text from the keyboard. Pauses to let the user edit and
enter a command line, then returns the entered text as a string.



<span id="inputLineCancel"></span>

`inputLineCancel (reset)`

[tadsio.h](../file/tadsio.h.html)\[[315](../source/tadsio.h.html#315)\]



Cancel an input line that was interrupted by timeout. This function must
be called after an inputLineTimeout() returns with an InEvtTimeout
status indication and before any subsequent output function that
displays anything in the main window, or any input fucntion other than
inputLineTimeout().

This function updates the UI to reflect that command line editing is no
longer in progress. If 'reset' is true, it also resets the internal
memory of the command editing session, so that a subsequent call to
inputLineTimeout() will start from scratch with an empty command line.
If 'reset' is nil, this function merely adjusts the UI, but does not
clear the internal memory; the next call to inputLineTimeout() will
automatically restore the editing status, re-displaying what the user
had typed so far on the interrupted command line and restoring the
cursor position to its position when the timeout occurred.

Note that it's not necessary (or desirable) to call this function after
a timed-out input line if the next input/output function that affects
the main window is simply another call to inputLineTimeout(). In this
case, inputLineTimeout() simply picks up where it left off, without any
indication to the user that the input editing was ever interrupted.



<span id="inputLineTimeout"></span>

`inputLineTimeout (timeout?)`

[tadsio.h](../file/tadsio.h.html)\[[288](../source/tadsio.h.html#288)\]



Read a line of text from the keyboard. Waits for the user to edit and
enter a command line. If a 'timeout' value is specified, it gives the
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



<span id="logConsoleClose"></span>

`logConsoleClose (handle)`

[tadsio.h](../file/tadsio.h.html)\[[449](../source/tadsio.h.html#449)\]



Close a log console. This closes the file associated with the log
console and deletes the console object. The given console handle is no
longer valid after this function is called.



<span id="logConsoleCreate"></span>

`logConsoleCreate (filename, charset, width)`

[tadsio.h](../file/tadsio.h.html)\[[442](../source/tadsio.h.html#442)\]



Create a log file console. This creates a console that has no display,
but simply captures its output to the given log file. Writing to a log
console is different from writing to a regular text file in that we
apply all of the normal formatting (including text-only-mode HTML
interpretation) to the output sent to this console.



<span id="logConsoleSay"></span>

`logConsoleSay (handle, ...)`

[tadsio.h](../file/tadsio.h.html)\[[456](../source/tadsio.h.html#456)\]



Write text to a log console. This works the same as tadsSay(), but
writes the output to the given log console rather than to the main
output window.



<span id="logInputEvent"></span>

`logInputEvent (evt)`

[tadsio.h](../file/tadsio.h.html)\[[479](../source/tadsio.h.html#479)\]



Log an input event that's obtained externally - i.e., from a source
other than the system input APIs (inputLine, inputKey, inputEvent, etc).
This adds the event to any command or event log that the system is
currently writing, as set with setLogFile().

It's only necessary to call this function when obtaining user input from
custom code that bypasses the system input APIs. The system input
functions all log events automatically, so you must not call this for
input obtained from them (doing so would write each input twice, since
it's already being written once by the input functions). For example,
this is useful for the Web UI, since it obtains input via network
transactions with the javascript client.

'evt' is a list describing the event, using the same format that
inputEvent() returns. Note one special extension: if the first element
of the list is a string, the string is used as the tag name if we're
writing an event script. This can be used to write custom events or
events with no InEvtXxx type code, such as \<dialog\> input events.



<span id="morePrompt"></span>

`morePrompt ( )`

[tadsio.h](../file/tadsio.h.html)\[[56](../source/tadsio.h.html#56)\]



Show the "more" prompt, if supported on the platform. This causes a
"more" prompt to be displayed, according to local system conventions, as
though consecutive text output had exceeded the screen/window height.



<span id="resExists"></span>

`resExists (fname)`

[tadsio.h](../file/tadsio.h.html)\[[220](../source/tadsio.h.html#220)\]



Determine if a multimedia resource exists. 'fname' is the name of a
resource (a JPEG image file, PNG image file, etc), given in URL-style
path notation. Returns true if the resource is available, nil if not.



<span id="setLogFile"></span>

`setLogFile (fname, logType?)`

[tadsio.h](../file/tadsio.h.html)\[[43](../source/tadsio.h.html#43)\]



Set the output log file (which records the output transcript) or the
command log file (which records command lines the user enters). 'fname'
is the name of the file to open, and 'logType' gives the type of log to
open, as a LogTypeXxx value.



<span id="setScriptFile"></span>

`setScriptFile (filename, flags?)`

[tadsio.h](../file/tadsio.h.html)\[[251](../source/tadsio.h.html#251)\]



Set the script input file. This opens the given file as the script input
file. 'filename' is a string giving the name of the file to open, and
'flags' is a combination of ScriptFileXxx bit flags giving the mode to
use to read the file. When a script file is active, the system reads
command-line input from the file rather than from the keyboard. This
lets the program replay an input script.

Note that the ScriptFileEvent flag is ignored if included in the 'flags'
parameter. The script reader automatically determines the script type by
examining the file's contents, so you can't set the type using flags.
This flag is used only in "get status" requests (ScriptReqGetStatus) -
it's included in the returned flags if applicable. The purpose of this
flag is to let you determine what the script reader decided about the
script, rather than telling the script reader how to interpret the
script.

If 'filename' is nil, this cancels the current script. If the script was
invoked from an enclosing script, this resumes the enclosing script,
otherwise it resumes reading input from the keyboard. The 'flags'
argument is ignored in this case.

New in 3.0.17: if 'filename' is one of the ScriptReqXxx constants, this
performs a special script request. See the ScriptReqXxx constants for
details. Note that calling this function with a ScriptReqXxx constant on
an VM prior to 3.0.17 will result in a run-time error, so you can use
try-catch to detect whether the request is supported.



<span id="statusMode"></span>

`statusMode (mode)`

[tadsio.h](../file/tadsio.h.html)\[[203](../source/tadsio.h.html#203)\]



Set the status-line display mode. This is meaningful only with text-only
interpreters that don't support banner windows; other interpreters
ignore this. 'mode' is a StatModeXxx constant giving the new mode.



<span id="statusRight"></span>

`statusRight (txt)`

[tadsio.h](../file/tadsio.h.html)\[[212](../source/tadsio.h.html#212)\]



Write text on the right half of the status line. This is meaningful only
for text-only interpreters that don't support banner windows; other
interpreters ignore this. On non-banner interpreters, this sets the
right half of the status line to display the given text,
right-justified.



<span id="systemInfo"></span>

`systemInfo (infoType, ...)`

[tadsio.h](../file/tadsio.h.html)\[[195](../source/tadsio.h.html#195)\]



Retrieve local system information. 'infoType' is a SysInfoXxx constant
giving the type of information to retrieve. Additional arguments and the
return value vary according to the infoType value.



<span id="tadsSay"></span>

`tadsSay (val, ...)`

[tadsio.h](../file/tadsio.h.html)\[[35](../source/tadsio.h.html#35)\]



Display values on the console. One or more values can be displayed. Each
value can be a string, in which case the string is displayed as given
(with HTML interpretation); an integer, in which case it's converted to
a string, using a decimal (base 10) radix and displayed; a BigNumber, in
which case it's converted to a string using the default formatting; or
nil, in which case nothing is displayed.



<span id="timeDelay"></span>

`timeDelay (delayMilliseconds)`

[tadsio.h](../file/tadsio.h.html)\[[188](../source/tadsio.h.html#188)\]



Pause for the given number of milliseconds.



<span id="_Macros_"></span>



<span class="hdln">Macros</span>  



<span id="BannerAfter"></span>

`BannerAfter`

[tadsio.h](../file/tadsio.h.html)\[[659](../source/tadsio.h.html#659)\]



`4`  
*no description available*



<span id="BannerAlignBottom"></span>

`BannerAlignBottom`

[tadsio.h](../file/tadsio.h.html)\[[671](../source/tadsio.h.html#671)\]



`1`  
*no description available*



<span id="BannerAlignLeft"></span>

`BannerAlignLeft`

[tadsio.h](../file/tadsio.h.html)\[[672](../source/tadsio.h.html#672)\]



`2`  
*no description available*



<span id="BannerAlignRight"></span>

`BannerAlignRight`

[tadsio.h](../file/tadsio.h.html)\[[673](../source/tadsio.h.html#673)\]



`3`  
*no description available*



<span id="BannerAlignTop"></span>

`BannerAlignTop`

[tadsio.h](../file/tadsio.h.html)\[[670](../source/tadsio.h.html#670)\]



`0`  
banner alignment types



<span id="BannerBefore"></span>

`BannerBefore`

[tadsio.h](../file/tadsio.h.html)\[[658](../source/tadsio.h.html#658)\]



`3`  
*no description available*



<span id="BannerFirst"></span>

`BannerFirst`

[tadsio.h](../file/tadsio.h.html)\[[656](../source/tadsio.h.html#656)\]



`1`  
banner insertion point specifies (for 'where' in bannerCreate)



<span id="BannerLast"></span>

`BannerLast`

[tadsio.h](../file/tadsio.h.html)\[[657](../source/tadsio.h.html#657)\]



`2`  
*no description available*



<span id="BannerSizeAbsolute"></span>

`BannerSizeAbsolute`

[tadsio.h](../file/tadsio.h.html)\[[679](../source/tadsio.h.html#679)\]



`2 /* size is in natural units of window type */`  
*no description available*



<span id="BannerSizePercent"></span>

`BannerSizePercent`

[tadsio.h](../file/tadsio.h.html)\[[678](../source/tadsio.h.html#678)\]



`1 /* size is a percentage of available space */`  
banner size unit types



<span id="BannerStyleAutoHScroll"></span>

`BannerStyleAutoHScroll`

[tadsio.h](../file/tadsio.h.html)\[[688](../source/tadsio.h.html#688)\]



`0x0010 /* automatic horizontal scrolling */`  
*no description available*



<span id="BannerStyleAutoVScroll"></span>

`BannerStyleAutoVScroll`

[tadsio.h](../file/tadsio.h.html)\[[687](../source/tadsio.h.html#687)\]



`0x0008 /* automatic vertical scrolling */`  
*no description available*



<span id="BannerStyleBorder"></span>

`BannerStyleBorder`

[tadsio.h](../file/tadsio.h.html)\[[684](../source/tadsio.h.html#684)\]



`0x0001 /* banner has a visible border */`  
banner style flags



<span id="BannerStyleHScroll"></span>

`BannerStyleHScroll`

[tadsio.h](../file/tadsio.h.html)\[[686](../source/tadsio.h.html#686)\]



`0x0004 /* horizontal scrollbar */`  
*no description available*



<span id="BannerStyleHStrut"></span>

`BannerStyleHStrut`

[tadsio.h](../file/tadsio.h.html)\[[691](../source/tadsio.h.html#691)\]



`0x0080 /* include in parent's auto width */`  
*no description available*



<span id="BannerStyleMoreMode"></span>

`BannerStyleMoreMode`

[tadsio.h](../file/tadsio.h.html)\[[690](../source/tadsio.h.html#690)\]



`0x0040 /* use MORE mode */`  
*no description available*



<span id="BannerStyleTabAlign"></span>

`BannerStyleTabAlign`

[tadsio.h](../file/tadsio.h.html)\[[689](../source/tadsio.h.html#689)\]



`0x0020 /* alignment support */`  
*no description available*



<span id="BannerStyleVScroll"></span>

`BannerStyleVScroll`

[tadsio.h](../file/tadsio.h.html)\[[685](../source/tadsio.h.html#685)\]



`0x0002 /* vertical scrollbar */`  
*no description available*



<span id="BannerStyleVStrut"></span>

`BannerStyleVStrut`

[tadsio.h](../file/tadsio.h.html)\[[692](../source/tadsio.h.html#692)\]



`0x0100 /* include in parent's auto height */`  
*no description available*



<span id="BannerTypeText"></span>

`BannerTypeText`

[tadsio.h](../file/tadsio.h.html)\[[664](../source/tadsio.h.html#664)\]



`1 /* ordinary text stream window */`  
banner types



<span id="BannerTypeTextGrid"></span>

`BannerTypeTextGrid`

[tadsio.h](../file/tadsio.h.html)\[[665](../source/tadsio.h.html#665)\]



`2 /* text grid window */`  
*no description available*



<span id="CharsetDisplay"></span>

`CharsetDisplay`

[tadsio.h](../file/tadsio.h.html)\[[649](../source/tadsio.h.html#649)\]



`1 /* the display/keyboard character set */`  
selectors for getLocalCharSet



<span id="CharsetFileCont"></span>

`CharsetFileCont`

[tadsio.h](../file/tadsio.h.html)\[[651](../source/tadsio.h.html#651)\]



`3 /* default file contents character set */`  
*no description available*



<span id="CharsetFileName"></span>

`CharsetFileName`

[tadsio.h](../file/tadsio.h.html)\[[650](../source/tadsio.h.html#650)\]



`2 /* the file system character set */`  
*no description available*



<span id="CloseCommand"></span>

`CloseCommand`

[tadsio.h](../file/tadsio.h.html)\[[517](../source/tadsio.h.html#517)\]



`0x0005 /* close the game window */`  
*no description available*



<span id="ColorAqua"></span>

`ColorAqua`

[tadsio.h](../file/tadsio.h.html)\[[736](../source/tadsio.h.html#736)\]



`ColorRGB(0x00, 0xFF, 0xFF)`  
*no description available*



<span id="ColorBlack"></span>

`ColorBlack`

[tadsio.h](../file/tadsio.h.html)\[[729](../source/tadsio.h.html#729)\]



`ColorRGB(0x00, 0x00, 0x00)`  
some specific colors by name, for convenience



<span id="ColorBlue"></span>

`ColorBlue`

[tadsio.h](../file/tadsio.h.html)\[[732](../source/tadsio.h.html#732)\]



`ColorRGB(0x00, 0x00, 0xFF)`  
*no description available*



<span id="ColorCyan"></span>

`ColorCyan`

[tadsio.h](../file/tadsio.h.html)\[[735](../source/tadsio.h.html#735)\]



`ColorRGB(0x00, 0xFF, 0xFF)`  
*no description available*



<span id="ColorFuchsia"></span>

`ColorFuchsia`

[tadsio.h](../file/tadsio.h.html)\[[742](../source/tadsio.h.html#742)\]



`ColorRGB(0xFF, 0x00, 0xFF)`  
*no description available*



<span id="ColorGray"></span>

`ColorGray`

[tadsio.h](../file/tadsio.h.html)\[[739](../source/tadsio.h.html#739)\]



`ColorRGB(0x80, 0x80, 0x80)`  
*no description available*



<span id="ColorGreen"></span>

`ColorGreen`

[tadsio.h](../file/tadsio.h.html)\[[733](../source/tadsio.h.html#733)\]



`ColorRGB(0x00, 0x80, 0x00)`  
*no description available*



<span id="ColorInput"></span>

`ColorInput`

[tadsio.h](../file/tadsio.h.html)\[[726](../source/tadsio.h.html#726)\]



`0x06000000`  
*no description available*



<span id="ColorLime"></span>

`ColorLime`

[tadsio.h](../file/tadsio.h.html)\[[743](../source/tadsio.h.html#743)\]



`ColorRGB(0x00, 0xFF, 0x00)`  
*no description available*



<span id="ColorMagenta"></span>

`ColorMagenta`

[tadsio.h](../file/tadsio.h.html)\[[737](../source/tadsio.h.html#737)\]



`ColorRGB(0xFF, 0x00, 0xFF)`  
*no description available*



<span id="ColorMaroon"></span>

`ColorMaroon`

[tadsio.h](../file/tadsio.h.html)\[[740](../source/tadsio.h.html#740)\]



`ColorRGB(0x80, 0x00, 0x00)`  
*no description available*



<span id="ColorNavy"></span>

`ColorNavy`

[tadsio.h](../file/tadsio.h.html)\[[745](../source/tadsio.h.html#745)\]



`ColorRGB(0x00, 0x00, 0x80)`  
*no description available*



<span id="ColorOlive"></span>

`ColorOlive`

[tadsio.h](../file/tadsio.h.html)\[[744](../source/tadsio.h.html#744)\]



`ColorRGB(0x80, 0x80, 0x00)`  
*no description available*



<span id="ColorPurple"></span>

`ColorPurple`

[tadsio.h](../file/tadsio.h.html)\[[741](../source/tadsio.h.html#741)\]



`ColorRGB(0x80, 0x00, 0x80)`  
*no description available*



<span id="ColorRed"></span>

`ColorRed`

[tadsio.h](../file/tadsio.h.html)\[[731](../source/tadsio.h.html#731)\]



`ColorRGB(0xff, 0x00, 0x00)`  
*no description available*



<span id="ColorRGB"></span>

`ColorRGB (r, g, b)`

[tadsio.h](../file/tadsio.h.html)\[[719](../source/tadsio.h.html#719)\]



`((((r) & 0xff) << 16) + (((g) & 0xff) << 8) + ((b) & 0xff))`  
Color codes. A color can be specified with explicit RGB (red-green-blue)
component values, or can be "parameterized," which means that the color
uses a pre-defined color for a particular purpose.

RGB colors are specified with each component given in the range 0 to
255; the color (0,0,0) is pure black, and (255,255,255) is pure white.

The special value "transparent" is not a color at all, but rather
specifies that the current screen color should be used.

The "Text" and "TextBg" colors are the current default text and text
background colors. The actual colors displayed for these values depend
on the system, and on some systems these colors might be configurable by
the user through a preferences selection. These are the same colors
selected by the HTML parameterized color names 'text' and 'bgcolor'.

The "StatusText" and "StatusBg" colors are the current default
statusline text and background colors, which depend on the system and
may be user-configurable on some systems. These are the same colors
selected by the HTML parameterized color names 'statustext' and
'statusbg'.

The "input" color is the current default input text color.



<span id="ColorSilver"></span>

`ColorSilver`

[tadsio.h](../file/tadsio.h.html)\[[738](../source/tadsio.h.html#738)\]



`ColorRGB(0xC0, 0xC0, 0xC0)`  
*no description available*



<span id="ColorStatusBg"></span>

`ColorStatusBg`

[tadsio.h](../file/tadsio.h.html)\[[725](../source/tadsio.h.html#725)\]



`0x05000000`  
*no description available*



<span id="ColorStatusText"></span>

`ColorStatusText`

[tadsio.h](../file/tadsio.h.html)\[[724](../source/tadsio.h.html#724)\]



`0x04000000`  
*no description available*



<span id="ColorTeal"></span>

`ColorTeal`

[tadsio.h](../file/tadsio.h.html)\[[746](../source/tadsio.h.html#746)\]



`ColorRGB(0x00, 0x80, 0x80)`  
*no description available*



<span id="ColorText"></span>

`ColorText`

[tadsio.h](../file/tadsio.h.html)\[[722](../source/tadsio.h.html#722)\]



`0x02000000`  
*no description available*



<span id="ColorTextBg"></span>

`ColorTextBg`

[tadsio.h](../file/tadsio.h.html)\[[723](../source/tadsio.h.html#723)\]



`0x03000000`  
*no description available*



<span id="ColorTransparent"></span>

`ColorTransparent`

[tadsio.h](../file/tadsio.h.html)\[[721](../source/tadsio.h.html#721)\]



`0x01000000`  
*no description available*



<span id="ColorWhite"></span>

`ColorWhite`

[tadsio.h](../file/tadsio.h.html)\[[730](../source/tadsio.h.html#730)\]



`ColorRGB(0xff, 0xff, 0xff)`  
*no description available*



<span id="ColorYellow"></span>

`ColorYellow`

[tadsio.h](../file/tadsio.h.html)\[[734](../source/tadsio.h.html#734)\]



`ColorRGB(0xFF, 0xFF, 0x00)`  
*no description available*



<span id="FileTypeBin"></span>

`FileTypeBin`

[tadsio.h](../file/tadsio.h.html)\[[561](../source/tadsio.h.html#561)\]



`8 /* binary data file */`  
*no description available*



<span id="FileTypeCmd"></span>

`FileTypeCmd`

[tadsio.h](../file/tadsio.h.html)\[[559](../source/tadsio.h.html#559)\]



`5 /* command input file */`  
*no description available*



<span id="FileTypeData"></span>

`FileTypeData`

[tadsio.h](../file/tadsio.h.html)\[[558](../source/tadsio.h.html#558)\]



`4 /* arbitrary data file */`  
*no description available*



<span id="FileTypeLog"></span>

`FileTypeLog`

[tadsio.h](../file/tadsio.h.html)\[[557](../source/tadsio.h.html#557)\]



`2 /* a transcript (log) file */`  
constants for inputFile() file type codes



<span id="FileTypeT3Image"></span>

`FileTypeT3Image`

[tadsio.h](../file/tadsio.h.html)\[[563](../source/tadsio.h.html#563)\]



`12 /* T3 executable image (game) file */`  
*no description available*



<span id="FileTypeT3Save"></span>

`FileTypeT3Save`

[tadsio.h](../file/tadsio.h.html)\[[564](../source/tadsio.h.html#564)\]



`15 /* T3 saved state file */`  
*no description available*



<span id="FileTypeText"></span>

`FileTypeText`

[tadsio.h](../file/tadsio.h.html)\[[560](../source/tadsio.h.html#560)\]



`7 /* text file */`  
*no description available*



<span id="FileTypeUnknown"></span>

`FileTypeUnknown`

[tadsio.h](../file/tadsio.h.html)\[[562](../source/tadsio.h.html#562)\]



`11 /* unknown file type */`  
*no description available*



<span id="HelpCommand"></span>

`HelpCommand`

[tadsio.h](../file/tadsio.h.html)\[[518](../source/tadsio.h.html#518)\]



`0x0006 /* show game HELP */`  
*no description available*



<span id="InDlgIconError"></span>

`InDlgIconError`

[tadsio.h](../file/tadsio.h.html)\[[533](../source/tadsio.h.html#533)\]



`4`  
*no description available*



<span id="InDlgIconInfo"></span>

`InDlgIconInfo`

[tadsio.h](../file/tadsio.h.html)\[[531](../source/tadsio.h.html#531)\]



`2`  
*no description available*



<span id="InDlgIconNone"></span>

`InDlgIconNone`

[tadsio.h](../file/tadsio.h.html)\[[529](../source/tadsio.h.html#529)\]



`0`  
*no description available*



<span id="InDlgIconQuestion"></span>

`InDlgIconQuestion`

[tadsio.h](../file/tadsio.h.html)\[[532](../source/tadsio.h.html#532)\]



`3`  
*no description available*



<span id="InDlgIconWarning"></span>

`InDlgIconWarning`

[tadsio.h](../file/tadsio.h.html)\[[530](../source/tadsio.h.html#530)\]



`1`  
*no description available*



<span id="InDlgLblCancel"></span>

`InDlgLblCancel`

[tadsio.h](../file/tadsio.h.html)\[[536](../source/tadsio.h.html#536)\]



`2`  
*no description available*



<span id="InDlgLblNo"></span>

`InDlgLblNo`

[tadsio.h](../file/tadsio.h.html)\[[538](../source/tadsio.h.html#538)\]



`4`  
*no description available*



<span id="InDlgLblOk"></span>

`InDlgLblOk`

[tadsio.h](../file/tadsio.h.html)\[[535](../source/tadsio.h.html#535)\]



`1`  
*no description available*



<span id="InDlgLblYes"></span>

`InDlgLblYes`

[tadsio.h](../file/tadsio.h.html)\[[537](../source/tadsio.h.html#537)\]



`3`  
*no description available*



<span id="InDlgOk"></span>

`InDlgOk`

[tadsio.h](../file/tadsio.h.html)\[[524](../source/tadsio.h.html#524)\]



`1`  
constants for inputDialog()



<span id="InDlgOkCancel"></span>

`InDlgOkCancel`

[tadsio.h](../file/tadsio.h.html)\[[525](../source/tadsio.h.html#525)\]



`2`  
*no description available*



<span id="InDlgYesNo"></span>

`InDlgYesNo`

[tadsio.h](../file/tadsio.h.html)\[[526](../source/tadsio.h.html#526)\]



`3`  
*no description available*



<span id="InDlgYesNoCancel"></span>

`InDlgYesNoCancel`

[tadsio.h](../file/tadsio.h.html)\[[527](../source/tadsio.h.html#527)\]



`4`  
*no description available*



<span id="InEvtEndQuietScript"></span>

`InEvtEndQuietScript`

[tadsio.h](../file/tadsio.h.html)\[[507](../source/tadsio.h.html#507)\]



`10000`  
*no description available*



<span id="InEvtEndScript"></span>

`InEvtEndScript`

[tadsio.h](../file/tadsio.h.html)\[[508](../source/tadsio.h.html#508)\]



`10003`  
*no description available*



<span id="InEvtEof"></span>

`InEvtEof`

[tadsio.h](../file/tadsio.h.html)\[[504](../source/tadsio.h.html#504)\]



`5`  
*no description available*



<span id="InEvtHref"></span>

`InEvtHref`

[tadsio.h](../file/tadsio.h.html)\[[501](../source/tadsio.h.html#501)\]



`3`  
*no description available*



<span id="InEvtKey"></span>

`InEvtKey`

[tadsio.h](../file/tadsio.h.html)\[[499](../source/tadsio.h.html#499)\]



`1`  
constants for the event codes returned by the inputEvent() and
inputLineTimeout() intrinsic functions



<span id="InEvtLine"></span>

`InEvtLine`

[tadsio.h](../file/tadsio.h.html)\[[505](../source/tadsio.h.html#505)\]



`6`  
*no description available*



<span id="InEvtNoTimeout"></span>

`InEvtNoTimeout`

[tadsio.h](../file/tadsio.h.html)\[[502](../source/tadsio.h.html#502)\]



`4`  
*no description available*



<span id="InEvtNotimeout"></span>

`InEvtNotimeout`

[tadsio.h](../file/tadsio.h.html)\[[503](../source/tadsio.h.html#503)\]



`4 /* (note minor capitalization variation) */`  
*no description available*



<span id="InEvtSysCommand"></span>

`InEvtSysCommand`

[tadsio.h](../file/tadsio.h.html)\[[506](../source/tadsio.h.html#506)\]



`0x100`  
*no description available*



<span id="InEvtTimeout"></span>

`InEvtTimeout`

[tadsio.h](../file/tadsio.h.html)\[[500](../source/tadsio.h.html#500)\]



`2`  
*no description available*



<span id="InFileCancel"></span>

`InFileCancel`

[tadsio.h](../file/tadsio.h.html)\[[552](../source/tadsio.h.html#552)\]



`2 /* player canceled the file selector */`  
*no description available*



<span id="InFileFailure"></span>

`InFileFailure`

[tadsio.h](../file/tadsio.h.html)\[[551](../source/tadsio.h.html#551)\]



`1 /* an error occurred asking for a file */`  
*no description available*



<span id="InFileOpen"></span>

`InFileOpen`

[tadsio.h](../file/tadsio.h.html)\[[543](../source/tadsio.h.html#543)\]



`1 /* open an existing file for reading */`  
inputFile() dialog types



<span id="InFileSave"></span>

`InFileSave`

[tadsio.h](../file/tadsio.h.html)\[[544](../source/tadsio.h.html#544)\]



`2 /* save to the file */`  
*no description available*



<span id="InFileSuccess"></span>

`InFileSuccess`

[tadsio.h](../file/tadsio.h.html)\[[550](../source/tadsio.h.html#550)\]



`0 /* success - 2nd list element is filename */`  
inputFile() return codes - these are returned in the first element of
the list returned from inputFile()



<span id="LogTypeCommand"></span>

`LogTypeCommand`

[tadsio.h](../file/tadsio.h.html)\[[484](../source/tadsio.h.html#484)\]



`2 /* log only command-line input */`  
*no description available*



<span id="LogTypeScript"></span>

`LogTypeScript`

[tadsio.h](../file/tadsio.h.html)\[[485](../source/tadsio.h.html#485)\]



`3 /* log all input events */`  
*no description available*



<span id="LogTypeTranscript"></span>

`LogTypeTranscript`

[tadsio.h](../file/tadsio.h.html)\[[483](../source/tadsio.h.html#483)\]



`1 /* log all input and output to a transcript */`  
log file types



<span id="MainWindowLogHandle"></span>

`MainWindowLogHandle`

[tadsio.h](../file/tadsio.h.html)\[[493](../source/tadsio.h.html#493)\]



`(-1)`  
The special log console handle for the main console window's transcript.
This can be used as the handle in logConsoleSay(), to write text
directly to the main console's log file, if any. Note that this console
cannot be closed via logConsoleClose(); use setLogFile(nil) instead.



<span id="QuitCommand"></span>

`QuitCommand`

[tadsio.h](../file/tadsio.h.html)\[[516](../source/tadsio.h.html#516)\]



`0x0004 /* QUIT the game */`  
*no description available*



<span id="RestoreCommand"></span>

`RestoreCommand`

[tadsio.h](../file/tadsio.h.html)\[[514](../source/tadsio.h.html#514)\]



`0x0002 /* RESTORE a saved position */`  
*no description available*



<span id="SaveCommand"></span>

`SaveCommand`

[tadsio.h](../file/tadsio.h.html)\[[513](../source/tadsio.h.html#513)\]



`0x0001 /* SAVE the current position */`  
Command codes for InEvtSysCommand



<span id="ScriptFileEvent"></span>

`ScriptFileEvent`

[tadsio.h](../file/tadsio.h.html)\[[632](../source/tadsio.h.html#632)\]



`4 /* this is an event script (query only) */`  
*no description available*



<span id="ScriptFileNonstop"></span>

`ScriptFileNonstop`

[tadsio.h](../file/tadsio.h.html)\[[631](../source/tadsio.h.html#631)\]



`2 /* turn off MORE prompt while reading script */`  
*no description available*



<span id="ScriptFileQuiet"></span>

`ScriptFileQuiet`

[tadsio.h](../file/tadsio.h.html)\[[630](../source/tadsio.h.html#630)\]



`1 /* do not display output while reading script */`  
flags for setScriptFile



<span id="ScriptReqGetStatus"></span>

`ScriptReqGetStatus`

[tadsio.h](../file/tadsio.h.html)\[[644](../source/tadsio.h.html#644)\]



`0x7000`  
Script Request - get current script status. In 3.0.17+, passing this
constant as the 'filename' argument to getScriptFile() will perform a
"get script status" request. If there's no script file in progress, the
function returns nil. If a script file is being read, the function
returns an integer value giving a combination of ScriptFileXxx flag
values indicating the current script status. Note that a return value of
0 (zero) means that a script is running but none of the ScriptFileXxx
flags are applicable.



<span id="StatModeNormal"></span>

`StatModeNormal`

[tadsio.h](../file/tadsio.h.html)\[[624](../source/tadsio.h.html#624)\]



`0 /* displaying normal text */`  
constants for statusMode



<span id="StatModeStatus"></span>

`StatModeStatus`

[tadsio.h](../file/tadsio.h.html)\[[625](../source/tadsio.h.html#625)\]



`1 /* display status line text */`  
*no description available*



<span id="SysInfoAudioCrossfade"></span>

`SysInfoAudioCrossfade`

[tadsio.h](../file/tadsio.h.html)\[[601](../source/tadsio.h.html#601)\]



`36`  
*no description available*



<span id="SysInfoAudioFade"></span>

`SysInfoAudioFade`

[tadsio.h](../file/tadsio.h.html)\[[600](../source/tadsio.h.html#600)\]



`35`  
*no description available*



<span id="SysInfoBanners"></span>

`SysInfoBanners`

[tadsio.h](../file/tadsio.h.html)\[[598](../source/tadsio.h.html#598)\]



`33`  
*no description available*



<span id="SysInfoFadeMIDI"></span>

`SysInfoFadeMIDI`

[tadsio.h](../file/tadsio.h.html)\[[619](../source/tadsio.h.html#619)\]



`0x0008`  
*no description available*



<span id="SysInfoFadeMPEG"></span>

`SysInfoFadeMPEG`

[tadsio.h](../file/tadsio.h.html)\[[616](../source/tadsio.h.html#616)\]



`0x0001`  
SysInfoAudioFade and SysInfoAudioCrossfade result codes



<span id="SysInfoFadeOGG"></span>

`SysInfoFadeOGG`

[tadsio.h](../file/tadsio.h.html)\[[617](../source/tadsio.h.html#617)\]



`0x0002`  
*no description available*



<span id="SysInfoFadeWAV"></span>

`SysInfoFadeWAV`

[tadsio.h](../file/tadsio.h.html)\[[618](../source/tadsio.h.html#618)\]



`0x0004`  
*no description available*



<span id="SysInfoIClassHTML"></span>

`SysInfoIClassHTML`

[tadsio.h](../file/tadsio.h.html)\[[613](../source/tadsio.h.html#613)\]



`3`  
*no description available*



<span id="SysInfoIClassText"></span>

`SysInfoIClassText`

[tadsio.h](../file/tadsio.h.html)\[[611](../source/tadsio.h.html#611)\]



`1`  
SysInfoInterpClass codes



<span id="SysInfoIClassTextGUI"></span>

`SysInfoIClassTextGUI`

[tadsio.h](../file/tadsio.h.html)\[[612](../source/tadsio.h.html#612)\]



`2`  
*no description available*



<span id="SysInfoInterpClass"></span>

`SysInfoInterpClass`

[tadsio.h](../file/tadsio.h.html)\[[599](../source/tadsio.h.html#599)\]



`34`  
*no description available*



<span id="SysInfoJpeg"></span>

`SysInfoJpeg`

[tadsio.h](../file/tadsio.h.html)\[[571](../source/tadsio.h.html#571)\]



`5`  
*no description available*



<span id="SysInfoLinksFtp"></span>

`SysInfoLinksFtp`

[tadsio.h](../file/tadsio.h.html)\[[586](../source/tadsio.h.html#586)\]



`21`  
*no description available*



<span id="SysInfoLinksHttp"></span>

`SysInfoLinksHttp`

[tadsio.h](../file/tadsio.h.html)\[[585](../source/tadsio.h.html#585)\]



`20`  
*no description available*



<span id="SysInfoLinksMailto"></span>

`SysInfoLinksMailto`

[tadsio.h](../file/tadsio.h.html)\[[588](../source/tadsio.h.html#588)\]



`23`  
*no description available*



<span id="SysInfoLinksNews"></span>

`SysInfoLinksNews`

[tadsio.h](../file/tadsio.h.html)\[[587](../source/tadsio.h.html#587)\]



`22`  
*no description available*



<span id="SysInfoLinksTelnet"></span>

`SysInfoLinksTelnet`

[tadsio.h](../file/tadsio.h.html)\[[589](../source/tadsio.h.html#589)\]



`24`  
*no description available*



<span id="SysInfoMidi"></span>

`SysInfoMidi`

[tadsio.h](../file/tadsio.h.html)\[[574](../source/tadsio.h.html#574)\]



`8`  
*no description available*



<span id="SysInfoMng"></span>

`SysInfoMng`

[tadsio.h](../file/tadsio.h.html)\[[593](../source/tadsio.h.html#593)\]



`28`  
*no description available*



<span id="SysInfoMngAlpha"></span>

`SysInfoMngAlpha`

[tadsio.h](../file/tadsio.h.html)\[[595](../source/tadsio.h.html#595)\]



`30`  
*no description available*



<span id="SysInfoMngTrans"></span>

`SysInfoMngTrans`

[tadsio.h](../file/tadsio.h.html)\[[594](../source/tadsio.h.html#594)\]



`29`  
*no description available*



<span id="SysInfoMpeg"></span>

`SysInfoMpeg`

[tadsio.h](../file/tadsio.h.html)\[[581](../source/tadsio.h.html#581)\]



`15`  
*no description available*



<span id="SysInfoMpeg1"></span>

`SysInfoMpeg1`

[tadsio.h](../file/tadsio.h.html)\[[582](../source/tadsio.h.html#582)\]



`16`  
*no description available*



<span id="SysInfoMpeg2"></span>

`SysInfoMpeg2`

[tadsio.h](../file/tadsio.h.html)\[[583](../source/tadsio.h.html#583)\]



`17`  
*no description available*



<span id="SysInfoMpeg3"></span>

`SysInfoMpeg3`

[tadsio.h](../file/tadsio.h.html)\[[584](../source/tadsio.h.html#584)\]



`18`  
*no description available*



<span id="SysInfoOgg"></span>

`SysInfoOgg`

[tadsio.h](../file/tadsio.h.html)\[[592](../source/tadsio.h.html#592)\]



`27`  
*no description available*



<span id="SysInfoOsName"></span>

`SysInfoOsName`

[tadsio.h](../file/tadsio.h.html)\[[570](../source/tadsio.h.html#570)\]



`3`  
*no description available*



<span id="SysInfoPng"></span>

`SysInfoPng`

[tadsio.h](../file/tadsio.h.html)\[[572](../source/tadsio.h.html#572)\]



`6`  
*no description available*



<span id="SysInfoPngAlpha"></span>

`SysInfoPngAlpha`

[tadsio.h](../file/tadsio.h.html)\[[591](../source/tadsio.h.html#591)\]



`26`  
*no description available*



<span id="SysInfoPngTrans"></span>

`SysInfoPngTrans`

[tadsio.h](../file/tadsio.h.html)\[[590](../source/tadsio.h.html#590)\]



`25`  
*no description available*



<span id="SysInfoPrefImages"></span>

`SysInfoPrefImages`

[tadsio.h](../file/tadsio.h.html)\[[577](../source/tadsio.h.html#577)\]



`11`  
*no description available*



<span id="SysInfoPrefLinks"></span>

`SysInfoPrefLinks`

[tadsio.h](../file/tadsio.h.html)\[[580](../source/tadsio.h.html#580)\]



`14`  
*no description available*



<span id="SysInfoPrefMusic"></span>

`SysInfoPrefMusic`

[tadsio.h](../file/tadsio.h.html)\[[579](../source/tadsio.h.html#579)\]



`13`  
*no description available*



<span id="SysInfoPrefSounds"></span>

`SysInfoPrefSounds`

[tadsio.h](../file/tadsio.h.html)\[[578](../source/tadsio.h.html#578)\]



`12`  
*no description available*



<span id="SysInfoTextColors"></span>

`SysInfoTextColors`

[tadsio.h](../file/tadsio.h.html)\[[597](../source/tadsio.h.html#597)\]



`32`  
*no description available*



<span id="SysInfoTextHilite"></span>

`SysInfoTextHilite`

[tadsio.h](../file/tadsio.h.html)\[[596](../source/tadsio.h.html#596)\]



`31`  
*no description available*



<span id="SysInfoTxcAnsiFg"></span>

`SysInfoTxcAnsiFg`

[tadsio.h](../file/tadsio.h.html)\[[606](../source/tadsio.h.html#606)\]



`2`  
*no description available*



<span id="SysInfoTxcAnsiFgBg"></span>

`SysInfoTxcAnsiFgBg`

[tadsio.h](../file/tadsio.h.html)\[[607](../source/tadsio.h.html#607)\]



`3`  
*no description available*



<span id="SysInfoTxcNone"></span>

`SysInfoTxcNone`

[tadsio.h](../file/tadsio.h.html)\[[604](../source/tadsio.h.html#604)\]



`0`  
SysInfoTextColors support level codes



<span id="SysInfoTxcParam"></span>

`SysInfoTxcParam`

[tadsio.h](../file/tadsio.h.html)\[[605](../source/tadsio.h.html#605)\]



`1`  
*no description available*



<span id="SysInfoTxcRGB"></span>

`SysInfoTxcRGB`

[tadsio.h](../file/tadsio.h.html)\[[608](../source/tadsio.h.html#608)\]



`4`  
*no description available*



<span id="SysInfoVersion"></span>

`SysInfoVersion`

[tadsio.h](../file/tadsio.h.html)\[[569](../source/tadsio.h.html#569)\]



`2`  
constants for systemInfo information type codes



<span id="SysInfoWav"></span>

`SysInfoWav`

[tadsio.h](../file/tadsio.h.html)\[[573](../source/tadsio.h.html#573)\]



`7`  
*no description available*



<span id="SysInfoWavMidiOvl"></span>

`SysInfoWavMidiOvl`

[tadsio.h](../file/tadsio.h.html)\[[575](../source/tadsio.h.html#575)\]



`9`  
*no description available*



<span id="SysInfoWavOvl"></span>

`SysInfoWavOvl`

[tadsio.h](../file/tadsio.h.html)\[[576](../source/tadsio.h.html#576)\]



`10`  
*no description available*



<span id="UndoCommand"></span>

`UndoCommand`

[tadsio.h](../file/tadsio.h.html)\[[515](../source/tadsio.h.html#515)\]



`0x0003 /* UNDO one turn */`  
*no description available*



<span id="_Enums_"></span>



<span class="hdln">Enums</span>  



*(none)* <span id="_Templates_"></span>



<span class="hdln">Templates</span>  



*(none)*



TADS 3 Library Manual  
Generated on 5/16/2013 from TADS version 3.1.3


