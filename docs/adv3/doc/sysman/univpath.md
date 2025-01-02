---
layout: docs
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="tools.html" class="nav">The Tools</a> \> Universal Paths  
<span class="navnp"><a href="build.html" class="nav"><em>Prev:</em> Compiling and Linking</a>
    <a href="aloneexe.html" class="nav"><em>Next:</em> Stand-Alone
Executables</a>     </span>

</div>

<div class="main">

# Universal Paths

TADS has a "universal" syntax for file names that include directory
paths. TADS translates from the universal notation to the local file
system syntax automatically, so you don't have to worry about whether
your Windows "X:\Y\Z" paths will work on a Linux machine, or vice versa.

TADS accepts the universal path syntax in several places:

- `\#include` directives in TADS source files
- File names in [.t3m project files](build.html#projects)
- File and directory option arguments in .t3m files (-I, -o, -Os, -FL,
  -FI, -Fs, -Fy, -Fo, -Fa)
- [File.universalToLocal()](file.html#universalToLocal)

In all of these situations, when you specify a directory path to a file,
you should use the universal notation instead of your local system's
file path syntax. TADS will translate for you, using the appropriate
local conventions. This will make your code work the same way everywhere
TADS runs, without having to make changes when moving the code to a new
system.

## Universal path rules

**Path separators:** "/" is the path separator. For example, to include
a file `defs.h` from subdirectory
`inc`, you'd write `\#include
"inc/defs.h"`.

**Relative paths:** For portability, use relative paths whenever
possible. "Relative" means that the path is interpreted starting from
the current working directory or some other context. In the case of
`\#include`, relative paths are relative to the
folder containing the source file with the
`\#include` directive; for .t3m files, paths are
relative to the .t3m file's location.

Relative paths improve portability because they adapt automatically to
different machines' directory structures. If you move the program to a
new machine, you only have to reproduce the subdirectories of the main
program folder - everything is relative to that folder, so it's all
self-contained. Importantly, it doesn't matter where that main folder is
situated within the system's overall directory structure. If you keep
the project in `C:\My Documents\games\tads` on
your Windows machine, and you send it to someone who puts it in
`/home/projects` on her Linux machine, the
difference in absolute location doesn't matter; it's only what's inside
that directory that matters.

**Current and parent paths:** The universal notation defines "." and
".." to have the same meanings they do on Unix and Windows. "." is the
current directory; as part of a path, it just reiterates the preceding
element, and as the first element of a path it explicitly refers to the
current directory. ".." is the parent of the preceding path element, or
the parent of the current directory when ".." appears at the start of a
path.

For example, `../games/deep.gam` in the
universal path notation will translate on classic Mac OS to
`::games:deep.gam`.

**Absolute paths:** In some cases it's not possible to use a relative
path. You should use relative paths when you can, but when you can't,
the universal notation can also accommodate "absolute" paths. An
absolute path specifies an exact, fixed location in the local file
system.

In the universal notation, an absolute path always starts with "/". On
systems like Windows that use a volume prefix (e.g., "C:"), write the
volume prefix as the first path element. Include the full local syntax -
in the case of a Windows drive letter, include the colon. For example,
the Windows path `C:\games\deep.gam` becomes
`/C:/games/deep.gam` in the universal notation.

The reason you should avoid absolute paths is that they're inherently
non-portable - not just between operating systems, but even between two
machines running the same OS. An absolute path is dependent upon the
exact disk layout of your machine; if you take a file containing an
absolute path to someone else's machine, chances are that their disk
layout will be slightly different, so you'll probably have to rewrite
the absolute path to match their directory structure. That largely
defeats the purpose of using the universal path syntax in the first
place.

## Examples

| System | Local Path | Universal Path |
|----|----|----|
| Windows | games\deep\deep.gam | games/deep/deep.gam |
| Linux | games/deep/deep.gam | games/deep/deep.gam |
| Windows | ..\deep.gam | ../deep.gam |
| Classic Mac OS | ::deep.gam | ../deep.gam |
| Classic Mac OS | :: | .. |
| Classic Mac OS | ::: | ../.. |
| VMS | \[-.DOCS\]DEEP.GAM | ../DOCS/DEEP.GAM |
| Linux | /home/games/deep.gam | /home/games/deep.gam |
| Windows | c:\user\games\deep\deep.gam | /c:/user/games/deep/deep.gam |
| Windows | \\SERVER\SHARE\games\deep.gam | /\\SERVER/SHARE/games/deep.gam |
| Classic Mac OS | Mac HD:games:deep.gam | /Mac HD:/games/deep.gam |
| VMS | SYS\$DISK:\[USER.DOCS\]DEEP.GAM | /SYS\$DISK:/USER/DOCS/DEEP.GAM |

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="tools.html" class="nav">The Tools</a> \> Universal Paths  
<span class="navnp"><a href="build.html" class="nav"><em>Prev:</em> Compiling and Linking</a>
    <a href="aloneexe.html" class="nav"><em>Next:</em> Stand-Alone
Executables</a>     </span>

</div>
