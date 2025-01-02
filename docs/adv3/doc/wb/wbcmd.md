---
---
Help Topics \> [Table of Contents](wbcont.html)  
  
  

# TADS Workbench Command List

Build.Abort  
Interrupt the current build process (this should be used only if the
build appears to be stuck).  
<span class="sysid">TADS 3 only</span>

Build.AllPackages  
Build all packages (Release ZIP, SETUP, Web Page, Source ZIP).  
<span class="sysid">TADS 3 only</span>

Build.Clean  
Delete all of the project's "debug" compiler-output files - object
files, symbol files, and the executable file.  
<span class="sysid">TADS 3 only</span>

Build.CompileAndRun  
Compile the project in "debug" mode, and if successful, begin execution
as soon as the build completes.

Build.CompileExe  
Compile the project into a stand-alone executable that Windows users can
run without installing the TADS Interpreter.

Build.CompileForDebug  
Compile the project in "debug" mode, for execution in the integrated
debugger.

Build.CompileForDebugFull  
Compile the project in "debug" mode, recompiling all files, whether
changed or not since the last build.  
<span class="sysid">TADS 3 only</span>

Build.CompileForRelease  
Compile the project in "release" mode, for distribution to users.

Build.CompileInstaller  
Compile the project and package it into a stand-alone SETUP program for
single-file distribution to Windows users.

Build.GoToError  
Display the source code line referenced by the error message at the
current location in the Debug Log tool window.

Build.Publish  
Publish the project to the Internet: upload to the IF Archive and create
a listing on IFDB..  
<span class="sysid">TADS 3 only</span>

Build.ReleaseZIP  
Build a ZIP file for release, with the compiled game and all
"feelies".  
<span class="sysid">TADS 3 only</span>

Build.Settings  
Display the Build Settings dialog to make changes to the project's build
configuration.

Build.SourceZIP  
Build a ZIP file containing the complete source code for the game,
including the project file and all "feelies".  
<span class="sysid">TADS 3 only</span>

Build.WebPage  
Generate a web page for distributing the game.  
<span class="sysid">TADS 3 only</span>

Debug.AbortCommand  
Send an "abort" signal to the running program to terminate processing of
the current game command.

Debug.AddWatch  
Add the current text selection to the expression window.

Debug.Break  
Break into the program's execution, interrupting any command-line
editing under way.

Debug.ClearCallTrace  
Clear the call trace log.  
<span class="sysid">TADS 2 only</span>

Debug.DisableBreakpoint  
Disable the breakpoint (if any) at the current source code line.

Debug.EditBreakpoints  
Display the Breakpoints dialog.

Debug.Evaluate  
Compute and display the current value of an expression.

Debug.Go  
Start or continue execution of the program.

Debug.ReplaySession  
Restart the game and replay the input script from the current/last
session.  
<span class="sysid">TADS 3 only</span>

Debug.RunToCursor  
Start or continue execution, stopping upon reaching the current cursor
location.

Debug.SetClearBreakpoint  
Toggle the breakpoint at the current source code line.

Debug.SetNextStatement  
Move the execution point to the current source code line.

Debug.SetProgramArgs  
Display the Program Arguments dialog to enter command-line arguments to
pass to the program on each run.  
<span class="sysid">TADS 3 only</span>

Debug.ShowNextStatement  
Display the next source code line that will be executed when execution
resumes.

Debug.StepInto  
Step through one line of code, entering any function or method called.

Debug.StepOut  
Continue execution until the current function or method returns to its
caller.

Debug.StepOver  
Step through one line of code, but run any function or methods called
within the line to completion.

Debug.ToggleCallTrace  
Start/stop collecting a log of all method and function calls.  
<span class="sysid">TADS 2 only</span>

Debug.ToggleHiddenOutput  
Toggle the show/hide status for hidden command output.  
<span class="sysid">TADS 2 only</span>

Edit.BackTab  
Unindent the current line by one position.

Edit.Cancel  
Cancel any modes, and cancel the current selection.

Edit.ChangeModified  
Set or clear the "modified" status for the active window.

Edit.ChangeReadOnly  
Set or clear read-only mode for the active window.

Edit.CharLeft  
Move the cursor left one character.

Edit.CharLeftExtend  
Move the cursor left one character, extending the selection.

Edit.CharLeftRectExtend  
Move the cursor left one character, extending the rectangular selection.

Edit.CharRight  
Move the cursor right one character.

Edit.CharRightExtend  
Move the cursor right one character, extending the selection.

Edit.CharRightRectExtend  
Move the cursor right one character, extending the rectangular
selection.

Edit.CharTranspose  
Transpose the characters before and after the caret.

Edit.ClearAllBookmarks  
Remove all bookmarks throughout the project.

Edit.ClearFileBookmarks  
Remove all bookmarks in the current file.

Edit.CommentRegion  
Add or remove comment markers on each line in the selected region.

Edit.Copy  
Copy the current text selection.

Edit.Cut  
Cut the current text selection.

Edit.CutLineRight  
Cut from the caret to the end of the line.

Edit.Delete  
Delete the current selection.

Edit.DeleteBack  
Delete the previous character.

Edit.DeleteBackNotLine  
Delete the previous character, but do nothing at the start of the line.

Edit.DeleteChar  
Delete the selection, or the character at the caret if there's no
selection.

Edit.DelLineLeft  
Delete from the start of the line to the cursor.

Edit.DelLineRight  
Delete from the cursor to the end of the line.

Edit.DelWordLeft  
Delete the previous word.

Edit.DelWordRight  
Delete the word to the right of the cursor.

Edit.DocumentEnd  
Move the cursor to the end of the document.

Edit.DocumentEndExtend  
Move the cursor to the end of the document, extending the selection.

Edit.DocumentStart  
Move the cursor to the start of the document.

Edit.DocumentStartExtend  
Move the cursor to the start of the document, extending the selection.

Edit.FillParagraph  
Word-wrap the current paragraph or all of the paragraphs in the
selection range.

Edit.Find  
Search for text in the current source file.

Edit.FindDefinition  
Search the project for the definition of the symbol at the cursor.

Edit.FindNext  
Search for the next occurrence of the last search text.

Edit.Formfeed  
Insert a page break ("form feed" character) at the cursor.

Edit.GoToLine  
Go to a given line number in the current window.

Edit.Home  
Move the cursor to the start of the line.

Edit.HomeDisplay  
Move the cursor to the start of the display line.

Edit.HomeDisplayExtend  
Move the cursor to the start of the display line, extending the
selection.

Edit.HomeExtend  
Move the cursor to the start of the line, extending the selection.

Edit.HomeRectExtend  
Move the cursor to the start of the line, extending the rectangular
selection.

Edit.HomeWrap  
Move the cursor to the start of the wrapped line.

Edit.HomeWrapExtend  
Move the cursor to the start of the wrapped line, extending the
selection.

Edit.IncSearch.Backspace  
Delete the last character of the search text.

Edit.IncSearch.Cancel  
Cancel the current incremental search, returning to the position at the
start of the search.

Edit.IncSearch.Exit  
End the current incremental search, leaving the caret at the current
position.

Edit.IncSearch.Next  
Find the next occurrence of the search text.

Edit.IncSearch.Prev  
Find the previous occurrence of the search text.

Edit.IncSearch.ToggleExactCase  
Toggle exact-case matching for the current incremental search.

Edit.IncSearch.ToggleRegEx  
Toggle regular-expression matching for the current incremental search.

Edit.IncSearch.ToggleWord  
Toggle whole-word matching for the current incremental search.

Edit.IndentHome  
Move the cursor to the start of the current line's indentation.

Edit.IndentHomeExtend  
Move the cursor to the start of the current line's indentation,
extending the selection.

Edit.IndentHomeRectExtend  
Move the cursor to the start of the current line's indentation,
extending the rectangular selection.

Edit.IndentHomeWrap  
Move the cursor to the start of the current wrapped line's indentation.

Edit.IndentHomeWrapExtend  
Move the cursor to the start of the current wrapped line's indentation,
extending the selection.

Edit.JumpToNamedBookmark  
Go to a named bookmark.

Edit.JumpToNextBookmark  
Go to the next bookmark in the current file, or to the first bookmark in
the next project file.

Edit.JumpToPreviousBookmark  
Go to the previous bookmark in the current file, or to the last bookmark
in the prior project file.

Edit.LineCopy  
Copy the current line to the clipboard.

Edit.LineCut  
Cut the current line, placing it on the clipboard.

Edit.LineDelete  
Delete the current line.

Edit.LineDown  
Move the cursor to the next line.

Edit.LineDownExtend  
Move the cursor to the next line, extending the selection.

Edit.LineDownRectExtend  
Move the cursor to the next line, extending the rectangular selection.

Edit.LineDuplicate  
Insert a copy of the current line.

Edit.LineEnd  
Move the cursor to the end of the current line.

Edit.LineEndDisplay  
Move the cursor to the end of the current display line.

Edit.LineEndDisplayExtend  
Move the cursor to the end of the current display line, extending the
selection.

Edit.LineEndExtend  
Move the cursor to the end of the current line, extending the selection.

Edit.LineEndRectExtend  
Move the cursor to the end of the current line, extending the
rectangular selection.

Edit.LineEndWrap  
Move the cursor to the end of the current wrapped line.

Edit.LineEndWrapExtend  
Move the cursor to the end of the current wrapped line, extending the
selection.

Edit.LineScrollDown  
Scroll the window down one line.

Edit.LineScrollUp  
Scroll the window up one line.

Edit.LineSelectMode  
Set line selection mode: sets "mark" to here; subsequent ordinary cursor
movement selects whole lines.

Edit.LineTranspose  
Transpose the current and previous lines.

Edit.LineUp  
Move the cursor to the previous line.

Edit.LineUpExtend  
Move the cursor to the previous line, extending the selection.

Edit.LineUpRectExtend  
Move the cursor to the previous line, extending the rectangular
selection.

Edit.Lowercase  
Convert the selection to lower-case.

Edit.Newline  
Insert a newline at the cursor.

Edit.OpenLine  
Opens a new line at the cursor.

Edit.PageDown  
Move the cursor down one page.

Edit.PageDownExtend  
Move the cursor down one page, extending the selection.

Edit.PageDownRectExtend  
Move the cursor down one page, extending the rectangular selection.

Edit.PageLeft  
Scroll one window-width left.

Edit.PageRight  
Scroll one window-width right.

Edit.PageUp  
Move the cursor up one page.

Edit.PageUpExtend  
Move the cursor up one page, extending the selection.

Edit.PageUpRectExtend  
Move the cursor up one page, extending the rectangular selection.

Edit.ParaDown  
Move the curor to the start of the next paragraph.

Edit.ParaDownExtend  
Move the curor to the start of the next paragraph, extending the
selection.

Edit.ParaUp  
Move the cursor up by one paragraph.

Edit.ParaUpExtend  
Move the cursor up by one paragraph, extending the selection.

Edit.Paste  
Paste the contents of the clipboard.

Edit.PastePop  
Replace the last Paste or PastePop text with the next most recent cut or
copied text.

Edit.PopBookmark  
Go to the most recently set bookmark, and pop it off the recent bookmark
stack.

Edit.QuoteKey  
Treat the next keystroke as a literal character to insert into the
editor, not as a command key.

Edit.RectSelectMode  
Set rectangle selection mode: sets "mark" to here; subsequent cursor
movement defines a rectangular selection.

Edit.Redo  
Redo the last editing action.

Edit.RepeatCount  
Enter a number from the keyboard as a repeat count for the next editing
command.

Edit.Replace  
Search the active window for text and replace each occurrence.

Edit.ScrollLeft  
Scroll one column left.

Edit.ScrollRight  
Scroll one column right.

Edit.SearchIncremental  
Search incrementally for text entered interactively.

Edit.SearchRegexIncremental  
Incremental regular expression search.

Edit.SearchRevIncremental  
Incremental reverse search.

Edit.SearchRevRegexIncremental  
Incremental reverse regular expression search.

Edit.SelectAll  
Select everything in the current window.

Edit.SelectionDuplicate  
Insert a copy of the selection.

Edit.SelectionMode  
Set selection mode: sets "mark" to here; subsequent ordinary cursor
movement defines a selection.

Edit.SelectToMark  
Select the text between the current position and the "mark" position.

Edit.SetNamedBookmark  
Set a named bookmark at the current line.

Edit.ShowFolding  
Show the code-folding controls in text editing windows.

Edit.ShowLineNumbers  
Show line numbers in text editing windows.

Edit.SplitWindow  
Split the current window 50/50 horizontally.

Edit.StutteredPageDown  
Move the cursor to the bottom of the current page, or down a page if
already at the bottom.

Edit.StutteredPageDownExtend  
Move the cursor to the bottom of the page or down one page if already
there, extending the selection.

Edit.StutteredPageUp  
Move the cursor to the top of the current page, or up one page if
already at the top.

Edit.StutteredPageUpExtend  
Move the cursor to the top of the page or up one page if already there,
extending the selection.

Edit.SwapMark  
Swap the current position with the "mark" position.

Edit.SwitchSplitWindow  
Move focus to the other pane of a split window.

Edit.Tab  
Indent the current line by one position.

Edit.ToggleBookmark  
Set or clear a bookmark at the current line.

Edit.ToggleOvertype  
Toggle between Insert and Overtype modes.

Edit.Undo  
Undo the last editing action.

Edit.UnsplitSwitchWindow  
Switch to the other split pane and un-split the window.

Edit.UnsplitWindow  
Un-split the window to show as a single pane.

Edit.Uppercase  
Convert the selection to uppper-case.

Edit.VCenterCaret  
Scroll the window to center the caret vertically.

Edit.WindowEnd  
Move the caret to the bottom of the window.

Edit.WindowHome  
Move the caret to the top of the window.

Edit.WordLeft  
Move the cursor left by one word.

Edit.WordLeftEnd  
Move the cursor to the end of the previous word.

Edit.WordLeftEndExtend  
Move the cursor to the end of the previous word, extending the
selection.

Edit.WordLeftExtend  
Move the cursor left by one word, extending the selection.

Edit.WordPartLeft  
Move the cursor left to the prior "word part" (intercap, underscore,
etc).

Edit.WordPartLeftExtend  
Move the cursor left to the prior "word part" (intercap, underscore,
etc), extending the selection.

Edit.WordPartRight  
Move the cursor right to the next "word part" (intercap, underscore,
etc).

Edit.WordPartRightExtend  
Move the cursor right to the next "word part" (intercap, underscore,
etc), extending the selection.

Edit.WordRight  
Move the cursor right by one word.

Edit.WordRightEnd  
Move the cursor to the end of the next word.

Edit.WordRightEndExtend  
Move the cursor to the end of the next word, extending the selection.

Edit.WordRightExtend  
Move the cursor right by one word, extending the selection.

Edit.WrapChar  
Wrap long lines in the active window at any character boundary.

Edit.WrapNone  
Turn off word-wrap and character-wrap mode for the active window.

Edit.WrapWord  
Wrap long lines in the active window at word boundaries.

File.Close  
Close the current window.

File.Exit  
Exit the application.

File.New  
Create a new file.

File.NewProject  
Run the New Project Wizard to create a new project.

File.Open  
Open a file.

File.OpenProject  
Open a project (closes the current project).

File.PageSetup  
Select a printer and set up the page layout for printing.

File.Print  
Print the current document window.

File.ReloadProject  
Close the current project and reload it.

File.RestartProgram  
Terminate the running program and start it again.

File.Save  
Save the current file.

File.SaveAll  
Save all modified files.

File.SaveAs  
Save the current file under a new name.

File.SendToExternalEditor  
Open the current file in the external text editor application.

File.StopProgram  
Terminate the running program.

Help.About  
Show TADS Workbench version and copyright information.

Help.EnterDocSearch  
Move keyboard focus to the Search toolbar to enter keywords for a
documentation search.

Help.GoBack  
Go back to the previous page in the help window.

Help.GoForward  
Navigate forward to the next page in the help window.

Help.LibraryManual  
Open the on-line Library Manual.  
<span class="sysid">TADS 3 only</span>

Help.Manuals  
Open the on-line User's Manual.

Help.ParserManual  
Open the on-line Parser Manual.  
<span class="sysid">TADS 2 only</span>

Help.Refresh  
Reload the page displayed in the help window.

Help.SearchDoc  
Search the documentation for keywords.

Help.Topics  
Open the on-line Help and go to the main topic list.

Help.Tutorial  
Open the on-line Tutorial manual.  
<span class="sysid">TADS 3 only</span>

Profiler.Start  
Begin collecting "profiling" performance data, which monitors the amount
of time spent in each function and method called while profiling is
activated.  
<span class="sysid">TADS 3 only</span>

Profiler.Stop  
Stop collecting profiling data.  
<span class="sysid">TADS 3 only</span>

Project.AddActiveFile  
Add the file in the active text editor window to the project.  
<span class="sysid">TADS 3 only</span>

Project.AddExternalResource  
Add an external resource file to the project.  
<span class="sysid">TADS 3 only</span>

Project.AddFile  
Browse for a file or files to add to the project.  
<span class="sysid">TADS 3 only</span>

Project.AddFolder  
Add all files in a specified folder to the project in the selected
section.  
<span class="sysid">TADS 3 only</span>

Project.IncludeInInstall  
If an external resource file is selected in the Project window, toggle
its "included in install" status.  
<span class="sysid">TADS 3 only</span>

Project.OpenSelection  
Open the file selected in the Project window.  
<span class="sysid">TADS 3 only</span>

Project.RemoveSelection  
Remove the file selected in the Project window from the project.  
<span class="sysid">TADS 3 only</span>

Project.ScanIncludes  
Rebuild the project's list of header files by scanning the source files
for \#include directives.  
<span class="sysid">TADS 3 only</span>

Project.SearchFiles  
Search for text in the project's source files.  
<span class="sysid">TADS 3 only</span>

Project.SearchFilesReplace  
Search all project files for text and replace each occurrence.

Project.SetFileTitle  
Set the title to display in the Start Menu or Web Page for the selected
file.  
<span class="sysid">TADS 3 only</span>

Project.SetSpecial  
Select the file to use for the selected special item in the Project
list.  
<span class="sysid">TADS 3 only</span>

Script.ReplayToCursor  
Replay the current script up to (and including) the line containing the
cursor.  
<span class="sysid">TADS 3 only</span>

Tools.EditExternal  
Edit the list of external commands displayed on the Tools menu.

Tools.NewIFID  
Create an IFID (an Interative Fiction IDentifier, for use in GameInfo
metadata).

Tools.Options  
Display the Options dialog to customize the Workbench environment and
text editor.

Tools.ReadIFID  
Read the IFID from a previously released TADS game.

View.AutoFlushGameWin  
Automatically flush buffered output in the main game window every time
the debugger gets control.

View.CallTraceWindow  
Show the Trace Log tool window.  
<span class="sysid">TADS 2 only</span>

View.DebugToolbar  
Show/Hide the Debug toolbar.

View.DocSearch  
Show the Documentation Search Results tool window.

View.DocToolbar  
Show/Hide the Documentation toolbar.

View.EditToolbar  
Show/Hide the Text Editing toolbar.

View.ExprWindow  
Show the Expression tool window.

View.FileSearch  
Show the Project File Search Results tool window.

View.FlushGameWin  
Flush any buffered output in the main game window.

View.GameWindow  
Show the main game window, and bring to the front.

View.Help  
Show the Help/Documentation Viewer tool window.

View.LocalsWindow  
Show the Local Variables tool window.

View.Menu  
Show/Hide the main menu.

View.ProjectWindow  
Show the Project window.  
<span class="sysid">TADS 3 only</span>

View.ScriptWindow  
Show the Script tool window.  
<span class="sysid">TADS 3 only</span>

View.SearchToolbar  
Show/Hide the Search toolbar.

View.ShowDebugWin  
Show the Debug Log tool window.

View.StackWindow  
Show the Stack tool window.

View.Statusline  
Show/Hide the status line.

Window.Cascade  
Reposition all open windows in a staggered formation.

Window.CloseAllDocuments  
Close all document windows.

Window.Dock  
Dock the active dockable window.

Window.DockHide  
Hide the active docking window.

Window.DockingMode  
Make the current MDI tool window into a dockable tool window, or vice
versa.

Window.Maximize  
Maximize the window.

Window.Minimize  
Minimize the window.

Window.Next  
Switch to the next window.

Window.Prev  
Switch to the previous window.

Window.Restore  
Restore the current maximized window to its original size.

Window.TileHoriz  
Reposition all open windows in a horizontal tile pattern.

Window.TileVert  
Reposition all open windows in a vertical tile pattern.

Window.Undock  
Undock the active docking window, making it a floating tool window.

  
  
  
Help Topics \> [Table of Contents](wbcont.html)  
  
