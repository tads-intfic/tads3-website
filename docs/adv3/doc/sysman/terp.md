---
layout: docs
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="tools.html" class="nav">The Tools</a> \> Running Programs: The
Interpreter  
<span class="navnp"><a href="aloneexe.html" class="nav"><em>Prev:</em> Stand-Alone
Executables</a>    
<a href="langsec.html" class="nav"><em>Next:</em> The Language</a>    
</span>

</div>

<div class="main">

# Running Programs: The Interpreter

The TADS 3 Interpreter is the application that executes a TADS 3
program.

The name of the interpreter varies by platform, and some platforms might
have more than one interpreter. On Windows systems, for example, there
are two versions: t3run, a plain-text version that runs in an MS-DOS
console window; and htmlt3, a graphical version that includes support
for full HTML display, including pictures and sounds. In the examples
below, we'll show the name of the DOS interpreter; you should substitute
the appropriate name for your platform.

## Interpreter Command Syntax

For systems with a graphical user interface, you will usually start the
TADS 3 interpreter by selecting an image file program in your system's
desktop or other graphical interface. The exact method varies by system,
so you should check your system-specific release notes for details.

For command-line systems, the interpreter accepts this command syntax:

<div class="cmdline">

    t3run options imageName imageParams

</div>

The options, if present, let you modify the interpreter's default
behavior. You don't have to specify any options, and options you do
specify can be listed in any order, as long as they all preceded the
name of the image file you want to run.

The imageName is the name of the program you want to run.

The imageParams are additional parameters that you wish to send to the
image file program itself. The interpreter doesn't do anything with
these parameters except pass them to the image file. The image file
program interprets these parameters, so what you specify here depends
entirely on the program you're running.

The interpreter options are:

- -banner - show the interpreter's name and version banner. By default,
  the interpreter doesn't show its own banner unless there's an error in
  the command-line syntax, so that the image file program has more
  complete control over what appears on the display. You can use this
  option if you want to check the interpreter version (which might be
  useful information if you're reporting a bug, for example, or if
  you're encountering a problem running a program and suspect that the
  problem is due to a version incompatibility).

- -cs *xxx* - use *xxx* as the keyboard and display character set. By
  default, the interpreter will attempt to determine the correct
  character set automatically, so in most cases you will not need to
  specify this option. However, in some cases, it might not be possible
  for the operating system to determine the correct character set; for
  example, if you're connected via a remote terminal, the operating
  system might not be able to read the terminal's configuration, in
  which case the OS would not know what character set the terminal is
  using. You can use this option in such cases to specify the correct
  character set. Note that this option only selects the "mapping" that
  the interpreter uses to convert text between your terminal's character
  set and the interpreter's internal Unicode characters; this option
  does not change your terminal's character set. If you want to change
  your terminal's character set, you must use whatever method that your
  operating system or terminal provides for making this change. Refer to
  the section on [character sets](cmap.html) for more details.

- -csl *xxx* - use *xxx* as the log file character set. By default, the
  interpreter uses a suitable default that depends on local conventions.
  This option lets you override the default to choose a specific
  character set for log file output.

- <span id="-d-option">-d *path*</span> - use *path* as the default
  working directory. The default if this option isn't specified is the
  directory containing the .t3 file. The File object uses this directory
  as the default when the program opens files specified with relative
  paths. This directory also becomes the base directory for the purposes
  of the file safety settings, so if a restrictive setting is in effect,
  reads and/or writes will be limited to *path* and its subdirectories.
  Note that the -d option doesn't affect the path for resource files;
  that's specified separately with [-R](#-R-option).

- -i *file* - read command-line input from *file*, rather than reading
  from the keyboard. If you specify this option, the interpreter will
  read commands from the given file whenever the inputLine() method (in
  the ["tads-io" function set](tadsio.html)) is invoked. This option
  reads the script in "quiet" mode, meaning that no output is displayed
  on the console while the script is running. See [Script
  Files](scripts.html) for information on how input scripts are
  interpreted.

- -I *file* - read command-line input from *file*. This is similar to
  the `-i` option, but `-I` reads the script in "echo" mode, meaning
  that output is displayed to the console while the script is being
  read, just as though the user were actually sitting at the keyboard
  typing the input.

- -l *file* - log all console input and output to *file*. Text will also
  be shown on the display. The -i and -l options are useful for creating
  test scripts, because you can read a set of pre-written commands from
  an input file with -i, and capture the resulting output to another
  file with -l. You can later compare the logging file with a reference
  copy to check for changes.

- -norand - do not "seed" the random number generator. By default, at
  startup, the interpreter automatically scrambles the starting point of
  the built-in `rand()` function using some
  truly random data obtained from the operating system. This ensures
  that `rand()` generates different random
  number sequences on each run. However, it's sometimes desirable for
  the "random" sequence to be predictable, such as when you're testing a
  program. If you use the `-norand` option, the system will use a fixed
  starting point for the `rand()` sequence. This
  means that `rand()` will return the same
  sequence of numbers every time you run the program, which is good for
  situations like testing because it makes the results repeatable on
  every run. Note that `-norand` doesn't make the
  `rand()` results *appear* any less random -
  rather, it makes the sequence repeatable, so that you get the same
  apparently random sequence of numbers on each run.

- <span id="network-safety">-ns*level* **or** -ns*CS*</span> - set the
  network safety levels for *Client* and *Server* network features. This
  lets you limit the ability of the game program to access network
  functions. You can specify the *Client* and *Server* levels
  separately, or, if you supply just one digit, the same level applies
  to both client and server. Each level is given as a digit from 0 to 2;
  higher digits mean higher safety, or more restrictions on the program.
  - The *client* setting controls the program's ability to access
    network services as a client. This controls *outgoing* connections,
    from the program to other services or other computers on the
    network. For example, the program might want to download information
    from a Web server via HTTP.
    - 0 - Minimum safety. The program will be allowed to access any site
      on the network as a client.
    - 1 - Local access only. The program will only be allowed to access
      network services on the *same machine* that the program is running
      on. No access will be allowed to other machines.
    - 2 - No network access. The program will not be allowed to access
      network services as a client at all.
  - The *server* setting controls the program's ability to create
    network services that accept network connections from other
    processes or other machines. This controls *incoming* connections,
    where the program provides a network service that other applications
    can access. For example, the program could create an HTTP server
    that allows other machines to access Web pages served by the
    program.
    - 0 - Minimum safety. The program will be allowed to create network
      services that accept connections from any machine on the network.
    - 1 - Local access only. The program will only be allowed to create
      servers that are accessible from other applications running on the
      *same machine* that the program is running on. For example, you
      could open a Web browser in another window to access the program's
      Web server, but you won't be able to access it from another
      machine on the network.
    - 2 - No network access. The program will not be allowed to create
      network services or accept network connections at all.

  For example, to allow the program to make outgoing connections to any
  other machine, but prohibit it from setting up any servers of its own,
  you'd specify `-ns02` (minimum client safety,
  no server access). To allow local access for both client and server
  functions, use `-ns1`.

- -o *file* - log all console input (but not output) to *file*. This
  option lets you easily prepare a command file for later use with -i.

- -plain - run in "plain" mode, which displays text without any cursor
  positioning, highlighting, terminal control sequences, or other
  non-text operations. The exact behavior of plain mode varies by
  platform, and some interpreters ignore this mode entirely. Here are
  some examples:
  - The DOS interpreter normally uses BIOS calls to display characters,
    position the cursor, and change text colors. In plain mode, it uses
    standard DOS output instead, and does not attempt to position the
    cursor or change colors.
  - The Unix interpreter normally uses terminal escape sequences and
    control characters to position the cursor and control output. In
    plain mode, the Unix interpreter does not generate any control
    characters or escape sequences.
  - The Windows HTML interpreter ignores plain mode, because it's
    meaningless for a native Windows GUI application to run in "text"
    mode.
  - Macintosh interpreters generally ignore plain mode, because there's
    no such thing as "text" mode on the Macintosh.

  Note that plain mode has nothing to do with character sets: plain mode
  isn't "ASCII" mode or "7-bit" mode, and doesn't affect how accented
  characters are displayed. Rather, plain mode makes the interpreter
  treat the display as a simple character stream, preventing it from
  using any special display features like cursor positioning and text
  colors. This lets you pipe the interpreter's text output to a file or
  to a another program; for example, sight-impaired users can use this
  to pipe the interpreter's output through a text-to-speech device.
  Plain mode makes this easier by eliminating cursor control sequences
  and the like that could confuse other programs reading the output.

- -r *file* - restore the saved state from *file* and resume execution.
  If this is specified, the image file's main entrypoint will never be
  called; instead, the program will begin execution as though it had
  just returned from the call to the save() function that created the
  saved state file. If this option is specified, the image file need not
  be specified, because the interpreter can automatically determine the
  image file to load from the saved state file (each saved state file
  records the name of the image file that created it). However, if the
  image file name is specified, the image filename information stored in
  the saved state file is ignored and the specified image file is used
  instead.

- <span id="-R-option">-R *folder*</span> - set the root folder for
  individual resources. When a resource (such as a JPEG image or a sound
  file) is needed, and the resource can't be found in the compiled game
  file or in any resource bundle file, the interpreter will look for the
  resource as a separate file. By default, the interpreter looks for
  these files in the directory containing the compiled game file, but if
  the -R option is specified, then the interpreter will look in this
  folder instead. (Note that this option doesn't establish a "search
  path"; only one -R option can be in effect. Also, this option only
  affects the individual resources; it doesn't affect resource bundle
  (.3rN) files.)

- <span id="file-safety"></span>-s*level* set the "file safety" level.
  This sets restrictions on the .t3 program's access to your file
  system, to protect your local disk against malicious or errant
  programs. *level* is a digit from 0 to 4, **or** you can specify two
  digits, the first for read access and the second for write access. If
  you use only one digit, the same level is used for both read and write
  access.

  Higher safety levels are more restrictive. By default, the interpreter
  uses level 2, which limits read/write access to the "sandbox"
  directory (and its subdirectories). The sandbox is normally the same
  as the working directory set with [-d](#-d-option), but you can
  override it with [-sd](#-sd-option). If you know the program comes
  from a trustworthy source, and it needs to access files outside of its
  sandbox directory, you can manually give it full access to all files
  with `-s0`. If the source of the program is
  dubious, you can prohibit all file access with
  `-s4`.

  The possible safety level settings are:

  - 0 - Minimum safety. The program is allowed to read and write files
    anywhere on your system.
  - 1 - The program is allowed to read files from anywhere on your
    system, but it can only write to files contained in the
    [sandbox](#-sd-option) directory (or its subdirectories).
  - 2 - The program is allowed to read and write files only in the
    [sandbox](#-sd-option) directory (or its subdirectories). This is
    the default setting, because it gives the program the flexibility to
    create and read files, but only within the restricted sandbox area.
  - 3 - The program is allowed to read files only from the default
    working directory (or its subdirectories), and it won't be allowed
    to write files at all.
  - 4 - The program is denied all access to files: it's not allowed to
    read or write files anywhere on your system.

  Certain files are exempt from the file safety restrictions:

  - Temporary files, created through the [TemporaryFile](tempfile.html)
    object. These aren't subject to file safety restrictions because
    they're inherently sandboxed; they can only be created through the
    TemporaryFile class, which imposes its own limits that are more
    restrictive than the normal file safety rules.
  - [Special files](file.html#specialFiles), which are also controlled by
    the system and thus inherently sandboxed.
  - [Resource files](build.html#resources), since these are restricted to
    read access and are limited to the program's own data.
  - <span id="filename.html">FileName</span> objects representing names
    manually chosen by the user via the
    [inputFile()](tadsio.html#inputFile) function. These FileName objects
    are marked with an internal attribute that allows them to bypass the
    file safety settings for the selected access mode only (that is, a
    file selected through an Open dialog can be read, and one selected
    via a Save dialog can be written). The manual interaction with the
    user establishes the user's explicit intent to operate on the
    selected file in the manner proposed by the dialog. The core goal of
    the file safety mechanism is to give the user the final say over
    which files the program may access, so this extension of permissions
    for a manual selection is a straightforward way of giving the user
    that final say on a file-by-file basis.

- <span id="-sd-option">-sd *dir*</span> - set the sandbox directory for
  the [file safety](#file-safety) feature. The default sandbox directory
  is the same as the working directory set with [-d](#-d-option), or
  simply the folder containing the .t3 file if there's no -d option.

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="tools.html" class="nav">The Tools</a> \> Running Programs: The
Interpreter  
<span class="navnp"><a href="aloneexe.html" class="nav"><em>Prev:</em> Stand-Alone
Executables</a>    
<a href="langsec.html" class="nav"><em>Next:</em> The Language</a>    
</span>

</div>
