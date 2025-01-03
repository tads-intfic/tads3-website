---
layout: docs
---


<img src="../topbar.jpg" data-border="0" />
<a href="../toc.html" class="nav">Table of Contents</a> \|
<a href="../t3spec.html" class="nav">T3 VM Technical Documentation</a> \>
TADS Special Characters  
<span class="navnp"><a href="save.html" class="nav"><em>Prev:</em> Saving and Restoring
State</a>     </span>
## TADS Special Characters

The TADS Host Environment for the T3 VM, when displaying character
strings, interprets certain characters as special control sequences.
When one of these characters is encountered in an output stream, the
TADS Host Environment does not render the character directly, but
instead modifies the way subsequent characters are displayed.

The special characters are listed below. Compilers are free to choose
their own source-code representations for these characters, but are
encouraged to use the encodings shown in the table to ensure
source-level compatibility with other compilers.

Note that the special characters below are special only to the TADS Host
Environment. The T3 VM itself attaches no special meanings to any of
these.

Source

Encoding

Meaning

\n

0x000A

New Line. Start a new line; has no effect at the start of a line (hence
multiple New Line characters have the same effect as a single Newline
character).

\b

0x000B

Blank Line. If at the start of a new line, skip one line. If not at the
start of a new line, end the line, then skip another line.

\t

0x0009

Tab. Skip ahead to the next tab stop. Character-mode renderers add an
appropriate number of spaces to reach the next tab stop; graphical
renderers add whitespace to the next tab stop.

\\

0x000F

Caps. Convert the next single character displayed to upper-case.
Overrides an Uncaps sequence.

\v

0x000E

Uncaps. Convert the next single character displayed to lower-case.
Overrides a Caps sequence.

\\ *(backslash-space)*

0x0015

Non-breaking Space. Render a space, but do not allow a line break at
this character.



Copyright © 2001, 2006 by Michael J. Roberts.  
Revision: September, 2006
------------------------------------------------------------------------



*TADS 3 Technical Manual*  
<a href="../toc.html" class="nav">Table of Contents</a> \|
<a href="../t3spec.html" class="nav">T3 VM Technical Documentation</a> \>
TADS Special Characters  
<span class="navnp"><a href="save.html" class="nav"><em>Prev:</em> Saving and Restoring
State</a>     </span>


