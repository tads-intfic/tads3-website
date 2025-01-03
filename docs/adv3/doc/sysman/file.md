---
layout: docs
---
<img src="topbar.jpg" data-border="0" />
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> File  
<span class="navnp"><a href="dynfunc.html" class="nav"><em>Prev:</em> DynamicFunc</a>
    <a href="filename.html" class="nav"><em>Next:</em> FileName</a>    
File class can be used to read TADS "[resources](build.html#resources)."
To use File objects, you must `\#include
\<file.h\>` in your source files.
  the [byte packing](pack.html) methods, [packBytes](#packBytes) and
  directly at the byte level, via [ByteArray](bytearr.html) objects.
File objects aren't created with `new`. Instead,
`File.openTextFile(*filename*, *access*,
*charset*?)`  
`File.openDataFile(*filename*, *access*)`  
`File.openRawFile(*filename*, *access*)`

- A [FileName](filename.html) object naming the file to open.
- A [TemporaryFile](tempfile.html) object, specifying a local temporary
- `FileAccessRead` - the file is to be opened
  `FileNotFoundException`.
- `FileAccessWrite` - the file is to be opened
  `FileCreationException` is thrown.
- `FileAccessReadWriteKeep` - the file is to be
  cannot be opened, a `FileOpenException` is
- `FileAccessReadWriteTrunc` - the file is to be
`File.openTextFile(*filename*, *access*,
*charset*?)` opens a file in text format. Any access mode may be
`nil`, it must be an object of the CharacterSet
missing or `nil`, the system's default character
[`getLocalCharSet`](tadsio.html#getLocalCharSet)`(CharsetFileCont)`
`File.openDataFile(*filename*, *access*)` opens
`File.openRawFile(*filename*, *access*)` opens a
All of the "open" methods check the [file safety](terp.html#file-safety)
throws a `FileSafetyException`. The file safety
methods will throw a `FileException` subclass
- `FileNotFoundException` - indicates that the
- `FileCreationException` - indicates that the
- `FileOpenException` - indicates that the
- `FileSafetyException` - the requested access
`openTextResource(*resName*, *charset*?)`  
`openRawResource(*resName*)`


option](terp.html#-R-option) when starting the interpreter.) Note that
`openTextFile()`.
mode other than `FileAccessRead`, there's no
safety](terp.html#file-safety) level prohibits access to external disk
the [bundled resources](build.html#resources), **and** the file safety
types of exceptions as the `openFileXxx()`

in via [inputLine()](tadsio.html#inputLine), or better still, by
[inputFile()](tadsio.html#inputFile) function.
  Linux if you avoid these: `\* + ? = \[ \] / \\ & \|
  " : \< \>`
  [FileName.fromUniversal()](filename.html#fromUniversal) to create local
`openFileXxx()` methods. Here are the special
- `LibraryDefaultsFile` - this file stores
- `WebUIPrefsFile` - this file stores the
Special files aren't subject to [file safety](terp.html#file-safety)
[TemporaryFile](tempfile.html) class. A TemporaryFile object represents
```
```
safety](terp.html#file-safety) settings, so you can use them even when
  server](webdeploy.html#storageServer), rather than on a local disk.
[TadsObject](tadsobj.html) object that has one required method and one
- `getFilename()` returns a system file
- `closeFile()` is optional. When the system
`saveGame()`. When
`saveGame()` opens the file, it calls
`getFilename()` on the File Spec object, which
`saveGame()` ends up saving the current game
finished, `saveGame()` closes the file, which
calls the `closeFile()` method on the File Spec
`closeFile()` finishes the operation by sending
`closeFile()`

throw a `FileClosedException`. (This doesn't
Note that `closeFile()` can throw an error. The
`deleteFile(*filename*)`


```
```
safety](terp.html#file-safety) level would allow you to open the file
See the [FileName](filename.html) class for a more comprehensive set of
`digestMD5(*length*?)`


*length* is omitted or `nil`, the entire rest of
`getCharacterSet()`


`getFileMode()`


- `FileModeText` - text mode
  (`openTextFile()`)
- `FileModeData` - data mode
  (`openDataFile()`)
- `FileModeRaw` - raw (binary) mode
  (`openRawFile()`)


`getFileSize()`
`getPos()`



`getRootName(*filename*)`

[FileName.getBaseName()](filename.html#getBaseName) instead of this
```
```
`File.getRootName('a\\b\\c.txt')` returns
`'c.txt'`. The same program running on a Linux
machine will return `'a\\b\\c.txt'` for the same
`inputFile()` or the program startup arguments.

`packBytes(*format*, ...)`

See [Byte Packing](pack.html) for full details.

`readBytes(*byteArr*, *start*?, *cnt*?)`

`readFile()`


`nil`. If any error occurs reading the file, the
method throws a `FileIOException`.
`FileModeException` will be thrown.

`setCharacterSet(*charset*)`

- A [CharacterSet](charset.html) object.
- `nil`. This selects the local system's default
`setFileMode(*mode*, *charset*?)`


new file mode (`FileModeText`,
`FileModeData`,
`FileModeRaw`).
If the *mode* value is `FileModeText`, *charset*
[`CharacterSet`](charset.html) object, or as a
`nil` or the argument is omitted entirely, the
`setPos(*pos*)`


`getPos()`. Text and data format files have data
`setPosEnd()`


the file and then using `getPos()` to determine
Note that the warnings mentioned in `setPos()`
`setPosEnd()`. It is usually safe to go to the
`sha256(*length*?)`


If *length* is omitted or `nil`, the entire rest

`unpackBytes(*format*)`

See [Byte Packing](pack.html) for full details.

`writeBytes(*source*, *start*?, *cnt*?)`

- `ByteArray`: the specified range of bytes from
- `File`: bytes are read from the *source* file
  (the location that `getPos()` returns). *cnt*
bytes, a `FileIOException` is thrown. If the
source object is a `File`, a
`FileIOException` can also result if any errors
`FileModeException` will be thrown.

`writeFile(*val*)`

  ByteArray, or `true` value. The value is
the `writeFile()` function stores in the file.
When you use `readFile()` to read an enumerator
the method throws a `FileIOException`. If the
`FileModeException` is thrown.

creation methods (`openTextFile()`, etc.) are
`FileSyncException` if any of these operations


<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="builtins.html" class="nav">The Intrinsics</a> \> File  
<span class="navnp"><a href="dynfunc.html" class="nav"><em>Prev:</em> DynamicFunc</a>
    <a href="filename.html" class="nav"><em>Next:</em> FileName</a>    
