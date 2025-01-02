<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.htm" class="nav">Table of Contents</a> \|
<a href="builtins.htm" class="nav">The Intrinsics</a> \> TemporaryFile  
<span class="navnp"><a href="tadsobj.htm" class="nav"><em>Prev:</em> TadsObject</a>
    <a href="timezone.htm" class="nav"><em>Next:</em> TimeZone</a>    
</span>

</div>

<div class="main">

# TemporaryFile

A TemporaryFile object represents the name of a temporary file in the
local file system. Since it represents a filename, you can use a
TemporaryFile object in place of a filename string when calling the
"open" methods of the [File](file.htm) object.

A temporary file is a file that only exists for as long as the program
is running. This is useful for things like storing data too large to fit
conveniently in memory, or data that you don't need to access frequently
but wish to keep around for reference purposes.

A temporary file is mostly the same as an ordinary file, but has a few
special properties:

- A temporary file is automatically deleted when the program exits.
  (That's the reason it's called "temporary".)
- The file's name is assigned by the system, not by your program or by
  the user. When you create a TemporaryFile object, the system
  automatically assigns the object a unique name that doesn't refer to
  any existing file on the system.
- The file's directory location is determined by the system, not by your
  program or by the user. Most operating systems have special
  directories designated to store temporary files. This lets the system
  delete old temporary files from time to time in case the programs that
  create them fail to clean them up themselves.
- Temporary files bypass the file safety settings, so you can use
  temporary files even when the safety level prohibits other access to
  the file system.

To use the TemporaryFile class, you should \#include the system header
file <span class="code">file.h</span> in your source files.

TemporaryFile objects are always transient. This means that they're not
saved or restored as part of saved game files. Saving a TemporaryFile
would be meaningless because it represents a filename that's only valid
for as long as the program is running; restoring such a name from a
saved session wouldn't be usable anyway, since the name only applied to
that previous session.

## Creation

To create a TemporaryFile object, use the <span class="code">new</span>
operator:

<div class="code">

    local temp = new TemporaryFile();

</div>

There are no arguments. The system automatically assigns the new object
a unique filename in the local file system directory designated by the
operating system for temporary files. For example, on Linux systems,
this will usually be the /tmp directory.

## Accessing temporary files

Creating a TemporaryFile object **doesn't** actually create a file on
disk. It merely assigns a unique name that you can use to create a file.
To create the file itself, you can use any of the "open" methods of the
[File](file.htm) object, passing the TemporaryFile in place of the
filename:

<div class="code">

    local f = File.openTextFile(temp, FileAccessWrite, 'ascii');

</div>

After you open a temporary file, you can use it just like an ordinary
file.

You can also pass a TemporaryFile object in place of a filename string
to the following built-in functions:

- [logConsoleCreate()](tadsio.htm#logConsoleCreate) (create a log file
  console)
- [setLogFile()](tadsio.htm#setLogFile) (set a transcript or command log
  file)
- [setScriptFile()](tadsio.htm#setScriptFile) (read commands from a
  command transcript)
- [restoreGame()](tadsgen.htm#restoreGame) (restore the game state from
  a file)
- [saveGame()](tadsgen.htm#saveGame) (save the game state to a file)

## Methods

<span id="deleteFile"></span>

<span class="code">deleteFile()</span>

<div class="fdef">

Explicitly deletes the local file corresponding to the TemporaryFile
object. There's no error if the local file doesn't exist or if it exists
but can't be deleted.

The purpose of this method is to explicitly release the temporary file
early. The system automatically deletes the underlying file system file,
either when the garbage collector deletes the TemporaryFile object, or
when the program exits, whichever is earlier. This method lets you
delete the underlying file even earlier, if you know that you won't have
any further use for it. This is never necessary, since the automatic
deletion will eventually do the same thing anyway. However, if you make
heavy use of temporary files in a program that you expect to run for a
long time continuously, it might help reduce your total disk usage if
you use this method to delete temporary files immediately when you're
done with them, rather than waiting for the garbage collector to get
around to it.

This method has no arguments and no return value.

</div>

<span id="getFilename" <="" a=""></span>

<span class="code">getFilename()</span>

<div class="fdef">

Returns a string giving the name of the file in the local file system.
This is a fully-qualified path on most systems.

This method is mostly for debugging purposes or for displaying to the
user. **Don't** use the returned filename to try to open the file with
one of the File "open" methods - in most cases, the file safety settings
will prohibit access to this file by name, since it's usually in a
system directory outside of the program's home folder.

</div>

## Automatic deletion

TADS automatically deletes any file you create in the local file system
using a TemporaryFile object when your program exits, or when the
TemporaryFile object itself is deleted by the garbage collector.

When the TemporaryFile object is deleted by the garbage collector, it
means that your program no longer has any references to it. Without the
TemporaryFile object, it's not possible for your program to open the
file again, since opening it requires a reference to the TemporaryFile
object. So the system knows that you won't be able to access the
underlying file any longer, and automatically deletes it. If the
TemporaryFile object is never deleted during routine garbage collection,
the system will automatically delete the file when the program exits.

(Note that if you open the temporary file for access via a File object,
the File object creates its own reference to the TemporaryFile. This
means that as long as a temporary file is open, it won't be deleted:
since the File object has a reference to the TemporaryFile object, the
garbage collector won't delete the TemporaryFile object as long as the
File object exists.)

You can also explicitly delete the temporary file. You're not required
to do this, since the system will eventually delete the file
automatically. However, you might occasionally have a reason to delete a
temporary file immediately when you're done with it, rather than waiting
for the system to clean it up automatically. For example, if you're
writing a server program that might run for a long time continuously,
and you make heavy use of temporary files, cleaning up temp files as
soon as you're done with them might help avoid spikes in disk usage. To
delete a temporary file manually, use the [deleteFile()](#deleteFile)
method.

## File safety level bypass

Temporary files bypass the file safety settings. You can create, read,
and write temporary files even if the safety level prohibits access to
other local files.

This exception to the file safety restrictions is allowed because
TemporaryFile objects are inherently protected against the sorts of
misuse that the file safety mechanism protects against for ordinary
files. The purpose of the file safety settings is to let the user set
limits on the program's access to the local file system, to protect
against errant or malicious software. In particular, file safety
prevents programs from reading the user's private data, altering or
deleting private data, or planting viruses or other malware in
privileged directories. Temporary files are designed to be secure
against these misuses separately from the file safety settings. It's not
possible to access or alter existing data via a TemporaryFile object,
since the underlying filename is assigned by the system and is always a
new, unused name (i.e., never the name of an existing file). It's not
possible to create files in system or program directories, since
temporary files are always placed in the designated temporary file
folder. Finally, it's not possible to leave any data on the system at
all with a temporary file, since a temporary file is deleted
automatically when the program exits (if not sooner).

This safety level override feature is the reason that you shouldn't
attempt to use the string version of the filename (as returned by
<span class="code">getFilename</span>) to open or delete the file. The
File class grants the special exception only to the TemporaryFile object
itself, not to the underlying filename.

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.htm" class="nav">Table of Contents</a> \|
<a href="builtins.htm" class="nav">The Intrinsics</a> \> TemporaryFile  
<span class="navnp"><a href="tadsobj.htm" class="nav"><em>Prev:</em> TadsObject</a>
    <a href="timezone.htm" class="nav"><em>Next:</em> TimeZone</a>    
</span>

</div>
