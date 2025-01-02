---
---
TADS 3 Change History

# TADS 3 Change History

This is a list of changes to the TADS 3 core system: the language, the
built-in classes and functions, the compiler and related build tools,
the debugger, and the interpreter virtual machine. The change history is
organized by release, with the most recent release first.

(This page only covers changes to the core TADS language and Virtual
Machine engine. There are separate release notes for most operating
system install packages - HTML TADS, FrobTADS, CocoaTADS, etc. For
changes to the Adv3 library, see [Recent Library
Changes](../lib/adv3/changes.html).)

### Changes for 3.1.3 (May 16, 2013)

- The compiler now allows nested embedded "\<\< \>\>" expressions in
  strings. Nesting wasn't allowed in the past; the compiler now allows
  nesting up to a depth limit (currently 10 levels deep). For example,
  this is now valid:

         local x = 1;
         "This is the main string. <<
            "This is a nested string: x=<<x>>."
         >> Back to the main string.";

- In the past, HTML \<PRE\> blocks were problematic if you wanted to use
  \<PRE\> for precise indentation. The complication was that the output
  formatter in the VM pre-filtered the text sent to the HTML parser to
  consolidate each run of whitespace into a single space. If you wanted
  to use spaces in a \<PRE\> block for alignment purposes, you had to
  use quoted spaces (`"\ "` sequences) to make sure that all of the
  spaces were sent through to the HTML parser.

  Now, the VM formatter layer watches for \<PRE\> tags. Within a \<PRE\>
  block, the VM formatter passes spaces and newlines through to the HTML
  parser without any filtering. This change addresses [bug
  \#0000178](http://bugdb.tads.org/view.php?id=0000178).

  Note that there's another slight complication if you're writing
  multi-line preformatted blocks with spacing for indentation. The
  compiler normally removes the spaces that follow a line break within a
  string. The new compiler behavior described below gives you more
  precise control over this, as does the new
  `#pragma newline_spacing(preserve)` described later.

- In the `#pragma newline(collapse)` and `#pragma newline(delete)` modes
  (see below), you can now override the default line break handling for
  a particular line in a string by writing an explicit `\n` sequence at
  the very end of the line. When a line within a string ends in `\n`,
  followed by a line break and the continuation of the string on the
  next line, the compiler preserves the whitespace at the start of the
  next line exactly as written. For example, consider the following
  string definitions, assuming that we're in the normal "collapse" mode
  for newline spacing:

         f()
         {
           local a = 'a
                b';
           local x = 'x\n
                y';
         }

  For the first string, the compiler converts the line break after the
  letter "a" and all of the whitespace at the start of the next line
  into a single space, so the string's actual contents end up as though
  you had written `local a = 'a b';`, with just one space between the
  two letters. But in the second string, we've written an explicit `\n`
  at the end of the line, telling the compiler to put an explicit line
  break into the string and to preserve the subsequent whitespace. This
  string is equivalent to writing `local x = 'x\n     y';`, with the
  five spaces at the start of the second line kept intact.

- The `#pragma newline_spacing` directive now has three modes:
  - `collapse` mode (equivalent to the old `on` mode) collapses each
    line break within a string and any subsequent run of whitespace (at
    the start of the next line) into a single space.
  - `delete` mode (equivalent to the old `off` mode) removes each line
    break and any subsequent run of whitespace, mashing the text of the
    two lines together without any spacing.
  - `preserve` mode (new in this version) preserves spacing exactly as
    written in the source code, with the line break replaced by a `\n`
    (newline) character, and subsequent whitespace at the start of the
    next line kept intact.

  Existing code that uses the pragma will continue to work without any
  changes, because the former "on" mode is equivalent to the new
  "collapse" mode, and the former "off" mode is equivalent to "delete"
  mode. The compiler continues to accept the old names, although new
  code should use the new names for better clarity.

- The Web UI library code had a bug that prevented dialogs (such as the
  display preferences dialog) from displaying properly on Internet
  Explorer 9 and later. This has been corrected. ([bugdb.tads.org
  \#0000194](http://bugdb.tads.org/view.php?id=0000194))

- The compiler error message for a symbol token containing an accented
  letter or other non-ASCII character has been improved. In the past,
  the compiler treated a non-ASCII character as though it were a symbol
  delimiter; for example, this had the effect of splitting `naïve` into
  three tokens: `na`, `ï`, `ve`. The compiler then reported an "invalid
  character" error for the `ï` character. The compiler now assumes that
  any non-ASCII character that's adjacent to a character that's valid in
  a symbol (i.e., not separated by any spaces or punctuation marks) is
  meant to be part of the symbol token, so rather than reporting the
  invalid character in isolation, the compiler now reports the error in
  terms of the entire token containing the non-ASCII character. This
  should make it easier to pinpoint the source location of this type of
  error. The compiler also displays the numeric Unicode value of the
  non-ASCII character, in case the character can't be displayed in the
  console character set (on many systems, the command line console uses
  a limited character set, such as Latin 1, that can't display the full
  range of Unicode characters that could occur in the source).
  ([bugdb.tads.org
  \#0000185](http://bugdb.tads.org/view.php?id=0000185))

- The IANA time zone database included in the base TADS release has been
  updated to version 2013c (2013-04-20).

- On Windows, the interpreter behaved unpredictably (sometimes crashing)
  when certain Date or TimeZone operations were attempted and the
  Windows date/time locale was set to a time zone that uses standard
  time year round (i.e., the time zone doesn't currently make annual
  transitions between standard time and daylight time). This is now
  fixed. (There were actually two separate problems contributing to the
  bug, one specific to Windows and one in the portable code; both are
  fixed.) ([bugdb.tads.org
  \#0000171](http://bugdb.tads.org/view.php?id=0000171))

- In HTTPRequest.sendReply(), automatic content detection of the MIME
  type based on a file's contents didn't work properly for files shorter
  than 512 bytes. This has been fixed. ([bugdb.tads.org
  \#0000187](http://bugdb.tads.org/view.php?id=0000187))

- For Web UI mode, a bug in the HTTPServer class caused the whole server
  to shut down if any individual HTTPServer was terminated, either
  explicitly by calling its shutdown() method, or automatically when the
  object was deleted by the garbage collector. This prevented any more
  messages from being delivered via getNetEvent(), even if other server
  objects were still listening for connections. This didn't actually
  affect most games in practice, because most Web UI games create one
  HTTPServer object that listens for connections throughout the server
  lifetime, but it was still incorrect behavior. This has been
  corrected.

- The compiler crashed when presented with a "try" statement with an
  empty "finally" block. This is now fixed. ([bugdb.tads.org
  \#0000176](http://bugdb.tads.org/view.php?id=0000176))

- Starting in version 3.1.0, TADS Workbench didn't run under Windows
  2000 or earlier versions of Windows, due to a dependency on a newer
  Windows feature that didn't exist until Windows XP SP1. The dependency
  has been removed and replaced with code that should work on Win 2K as
  well as newer systems, so Workbench should once again be able to run
  on Win 2K. ([bugdb.tads.org
  \#0000186](http://bugdb.tads.org/view.php?id=0000186))

- The macro preprocessor incorrectly expanded macros containing string
  embeddings in certain complex cases. In particular, if the last macro
  argument was used within an embedded expression within a string within
  the macro expansion, and another separate embedding followed, any
  subsequent mentions of a macro argument were not expanded correctly.
  The minimal case was something like this:

      #define M(a, b) '<<b>><<>>' a

  This has been corrected. ([bugdb.tads.org
  \#0000180](http://bugdb.tads.org/view.php?id=0000180))

### Changes for 3.1.2 (August 20, 2012)

- New syntax allows defining an object within an expression. This type
  of object is known as an inline object, and is essentially the object
  analog of an anonymous function. Methods of inline objects behave like
  anonymous functions in that they can access locals from the enclosing
  scope. Inline objects are useful for a lot of the same coding patterns
  where anonymous functions are useful, but allow for more flexible
  APIs, since an object is a more general way to express context
  information. The new syntax also has the side benefit of letting you
  define new objects at run-time with the dynamic compiler: if you
  compile and evaluate an expression containing an inline object
  definition, the result will be an instance of the object defined in
  the expression.
  For full details, see [inline objects](sysman/inlineobj.html) in the
  System Manual.
- The new String method [match()](sysman/string.html#match) complements
  the [find()](sysman/string.html#find) method by checking for a match at
  a given position in the subject string rather than searching for a
  match.
- [FileName.getFileInfo()](sysman/filename.html#getFileInfo) now returns
  additional information on the file. The new fileAttrs property of the
  FileInfo object provides information on file attributes used on some
  operating systems: the "hidden" and "system" attributes, and whether
  the program has read and/or write access to the file.
- The documentation for
  [FileName.removeDirectory()](sysman/filename.html#removeDirectory) has
  been changed to specify that the method definitely fails if
  *deleteContents* is nil and the directory to be removed isn't already
  empty. In the past, the documentation stated that the behavior for a
  non-empty directory varied by platform. In fact, there was no
  variation in practice - all of the existing platforms already failed
  if a directory was non-empty and *deleteContents* was nil - so the
  warning about variable behavior was just hedging in case any future
  ports didn't work this way. However, the internal porting interface
  that implements directory removal now specifies this exact behavior,
  so there's no longer any need for the hedge.
- In the past, when `#pragma once` checked to see if the same file had
  been included previously, it was sensitive to case differences in the
  filenames as written in the \#include directives. The comparison now
  uses the local file system conventions; on Windows, for example, the
  comparison ignores case differences.
- The IANA time zone database included in the release has been updated
  to version 2012e (2012-08-03).
- In 3.1.1, the debugger crashed if a run-time error was thrown by a
  non-Adv3 program. This has been corrected. ([bugdb.tads.org
  \#0000157](http://bugdb.tads.org/view.php?id=0000157))
- The UTF-8 character output mapper produced incorrect output when
  mapping a string that ended with a non-ASCII character. This is now
  fixed. ([bugdb.tads.org
  \#0000159](http://bugdb.tads.org/view.php?id=0000159))

### Changes for 3.1.1 (July 14, 2012)

- New syntax lets you create constant regular expression values:
  `R"`*`pattern`*`"` and `R'`*`pattern`*`'` are equivalent, and define
  static, pre-compiled RexPattern objects. The compiler converts a
  string of the form `R"..."` or `R'...'` into a static RexPattern
  object, which you can then use in any context where a pattern is
  required. For example:

        local str = 'test string';
        local title = str.findReplace(R'%<%w', {x: x.toTitleCase()});

  To define a regular expression literal, the R must be capitalized, and
  there must be no spaces between the R and the open quote. "R" strings
  can't use embedded expressions (the \<\< \>\> syntax). The
  triple-quote syntax can be used with R strings, as in `R"""..."""`.

  In the past, you could achieve a similar effect by defining a static
  property and setting it to a `new RexPattern()` expression. You can
  still use that approach, of course, but the new syntax is more compact
  and eliminates the need to define an extra property just to cache the
  RexPattern object. Using the new syntax also generates slightly more
  efficient code, since it doesn't require a property lookup to retrieve
  the RexPattern object. (There might be other reasons to use the
  property approach in specific cases, though; for example, in a library
  or extension, defining the pattern via a property provides a clean way
  for users of the module to override the pattern if they need to
  replace it with a customized version.)

- The basic integer arithmetic operators (+, -, \*, /, and the
  corresponding combination operators such as ++ and +=) now check for
  overflow, and automatically promote the result to BigNumber when an
  overflow occurs. In the past, overflows were simply truncated to fit
  the 32-bit integer type. It was very difficult to detect such cases or
  to do anything sensible with the results; you really had to just be
  careful to avoid overflows, which isn't easy when working with
  external or user-entered data. The new treatment ensures that the
  results of the arithmetic operators will always be arithmetically
  correct, even when they exceed the capacity of the basic integer type.
  This is more in keeping with the TADS philosophy of providing a
  high-level environment where you don't have to worry about
  hardware-level details such as how many bits can be stored in an
  integer.

  This change should be transparent to existing programs, since (a)
  BigNumbers can for the most part be used interchangeably with
  integers, and (b) any program that encountered an integer overflow in
  the past probably misbehaved when it did, since there was no good way
  to detect or handle overflows. The effect on most existing programs
  should thus be to allow them to correctly handle a wider range of
  inputs. In some cases, the effect will be to flag a run-time error for
  a case where a value really does have to fit in an integer, where in
  the past the code would have failed somewhat more mysteriously due to
  the truncated arithmetic result. The new handling should be an
  improvement even in error cases, since the source of the error will be
  more immediately apparent than in the past.

  There's a slight impact on execution speed because of the extra checks
  required for arithmetic operations, although typical TADS programs
  aren't arithmetically intensive enough to notice any difference.
  What's more, the VM-level checking eliminates the need for extra
  program code to do bounds checking, so this could end up being a
  performance enhancement in situations where overflows are a concern.

- The compiler now automatically promotes any integer constant value
  that overflows the ordinary integer type to BigNumber. This applies to
  values that are explicitly stated (e.g., "x = 3000000000;") as well as
  to constant expressions (e.g., "x = 1000000000 \* 3;"). The compiler
  shows a warning message each time it applies such a promotion;
  BigNumber values aren't necessarily allowed in all contexts where
  integers are normally used, such as for some built-in function and
  method arguments, so the compiler wants you to be aware when it
  substitutes a BigNumber for a value you stated as an integer. You can
  remove the warning on a case-by-case basis by explicitly stating the
  value as a BigNumber constant in the first place, by including a
  decimal point in the number (e.g., "x = 3000000000.;").
  Integers specified in hex or octal notation (e.g., 0x80000000
  or 040000000000) aren't promoted if they can fit within a 32-bit
  *unsigned* integer. Hex and octal are frequently used to enter numbers
  with specific bit patterns, so the compiler assumes that's your
  intention with these formats. A hex or octal number that's over the
  32-bit unsigned limit of 4294967295 will be promoted, though, since
  there's no way to store such a large value in a 32-bit integer
  regardless of its signedness.

- The compiler now pre-calculates the results of arithmetic expressions
  involving BigNumber constant values. (This is known as "constant
  folding".) If an expression contains only constant numeric values,
  with any combination of integers and BigNumber values, the compiler
  will pre-calculate the results for the ordinary arithmetic operators
  (+ - \* / %) and the comparison operators (== != \< \> \<= \>=). In
  the past, the compiler deferred calculations involving BigNumber
  values until run-time; constant folding improves the execution speed
  of affected expressions for obvious reasons.

- You can now use [sprintf](sysman/tadsgen.html#sprintf) format codes
  directly within embedded expressions. To do this, start the expression
  with a "%" code immediately after the angle brackets, with no
  intervening spaces. For example, `"x in octal is <<%o x>>"` will
  display *x*'s contents in octal (base 8). The compiler simply converts
  this sort of expression into a sprintf() call with the given format
  code, so you can use the entire range of format code syntax that
  sprintf() accepts.

- The new [sprintf](sysman/tadsgen.html#sprintf) format codes %r and %R
  generate Roman numerals for integer values, in lower- and upper-case.

- The String methods [find()](sysman/string.html#find) and
  [findReplace()](sysman/string.html#findReplace) now accept a RexPattern
  object as the search target. An ordinary string can also still be
  used, of course. This essentially makes String.find() and
  String.findReplace() replicate the functionality of
  [rexSearch()](sysman/tadsgen.html#rexSearch) and
  [rexReplace()](sysman/tadsgen.html#rexReplace), respectively; the main
  benefit is that the syntax for the String methods is a little cleaner
  and more intuitive, since the subject string is moved out of the
  parameter list.
  This is especially convenient with the new `R'...'` syntax for
  creating static RexPattern objects. For example, `str.find(R'%w+')`
  finds the first word in a string.

- The String method [findReplace()](sysman/string.html#findReplace) and
  the [rexReplace()](sysman/tadsgen.html#rexReplace) function each now
  take an optional additional argument, *limit*, specifying the maximum
  number of replacements to perform. If the *limit* argument is omitted,
  the ReplaceOnce and ReplaceAll flags determine the limit; if *limit*
  is included in the arguments, the ReplaceOnce and ReplaceAll flags are
  ignored, and the *limit* value takes precedence. *limit* can be nil to
  specify that all occurrences are to be replaced, or an integer to set
  a limit count. Zero means that no replacements are performed, in which
  case the original subject string is returned unchanged.

- The new String function [findAll()](sysman/string.html#findAll)
  searches a string for all occurrences of a given substring or regular
  expression, and returns a list of the matches.

- Two new functions implement reverse searches in strings:
  [rexSearchLast()](sysman/tadsgen.html#rexSearchLast) and
  [String.findLast()](sysman/string.html#findLast) These functions search
  a string from right to left, allowing you to find the last (rightmost)
  match for a substring or regular expression pattern.

- The [rexGroup()](sysman/tadsgen.html#rexGroup) function can now be used
  to get information on the entire match, by passing 0 for the group
  number. rexGroup(0) returns the same format as the other groups, but
  contains the text and location of the entire match rather than of a
  parenthesized group within the match.

- TADS now has more complete support for Unicode case conversions.
  Unicode defines two levels of case conversions; the older, simpler
  level provides one-to-one character mappings between upper- and
  lower-case letters, while the newer level allows for characters that
  expand into multiple replacement characters when converting case. The
  canonical example is the German sharp S character, ß, which changes to
  "SS" when capitalized - there's no such thing as a capital sharp S in
  standard German typography. For proper case conversion of a string
  containing an ß, then, each ß character expands to the two-character
  sequence "SS". There are similar examples in other languages, some
  involving other ligatures and some involving accented characters that
  don't have upper-case equivalents.

  In past versions of TADS, only the one-to-one conversions were
  supported. Characters such as ß that required more complex handling
  were generally left unchanged in case conversions. TADS now supports
  the full one-to-N mappings. This won't affect most text, since most
  characters have simple single-character replacements when converting
  in upper or lower case.

  TADS also now supports Unicode "case folding", which is a separate
  mapping for case-insensitive string comparisons. In the past, TADS
  generally approached case-insensitive comparisons by converting each
  character to be compared to a common case (upper or lower), according
  to which character was the "reference" character in the comparison.
  Now, TADS uses the Unicode case folding tables instead, and converts
  each character to its "folded" form for comparison. The folded form of
  each character is defined individually in the Unicode character
  database tables, but in nearly all cases it's the same as converting
  the character to upper case and then back to lower case.

  The new case conversion and case-folding support affects several
  areas:

  - [Regular expressions](sysman/regex.html): when the \<nocase\> flag is
    specified, the matcher uses case folding to match each contiguous
    string of literals. (In past versions, characters were compared by
    converting to the pattern character's case using the one-to-one
    conversions only.)
  - The String methods [toUpper()](sysman/string.html#toUpper) and
    [toLower()](sysman/string.html#toLower) use the new case conversion
    tables. In the past, these used the older one-to-one case conversion
    tables.
  - The new String methods
    [toTitleCase()](sysman/string.html#toTitleCase) and
    [toFoldedCase()](sysman/string.html#toFoldedCase) use the new tables.
  - The new String method
    [compareIgnoreCase()](sysman/string.html#compareIgnoreCase) uses the
    full case folding tables to perform a case-insensitive comparison.
  - The [StringComparator](sysman/strcomp.html) class now uses full case
    folding when the comparator isn't case-sensitive. In the past,
    caseless comparisons were done by converting each input character to
    match the case of the corresponding dictionary character, using the
    one-to-one conversions only.

  The new support only includes the unconditional case mappings. The
  Unicode tables define a number of case mappings that are conditional,
  some on the language in use and some on string context. TADS doesn't
  currently support any of the conditional mappings.

- The new String method [toTitleCase()](sysman/string.html#toTitleCase)
  converts each character in the string to "title case". This is the
  same as upper case for most characters, but varies for some
  characters. For example, a character representing a ligature (e.g.,
  the 'ffi' ligature character, U+FB03) is converted to the
  corresponding series of separate letters with only the first letter
  capitalized (so U+FB03 becomes the three separate letters F, f, i).

- The new String method [toFoldedCase()](sysman/string.html#toFoldedCase)
  converts each character in the string to its case-folded equivalent,
  as defined in the Unicode standard. The point of case folding is to
  erase case differences between strings, to allow for case-insensitive
  comparisons. For most strings, the case-folded version is the same as
  the lower-case version, although not always; characters that don't
  have exact equivalents in the opposite case (e.g., the German sharp S,
  ß) are generally handled as though they were first mapped to upper
  case and then back to lower, so the result will sometimes expand one
  character to two or more characters in the folded version (e.g., ß
  turns into ss, so that 'WEISS' will match 'weiß' in a case-insensitive
  comparison).

- The new String method [compareTo()](sysman/string.html#compareTo)
  compares the target string to another string, returning a negative
  number if the target string sorts before the second string, 0 if
  they're identical, or a positive number i the target string sorts
  after the other string. C/C++ programmers will recognize this as the
  standard strcmp() behavior. You can get the same information using
  comparison operators, but compareTo() is more efficient for things
  like sorting callbacks because it determines the relative order in one
  operation. For example:

         lst = lst.sort(SortAsc, {a, b: a < b ? -1 : a > b ? 1 : 0});
         lst = lst.sort(SortAsc, {a, b: a.compareTo(b)});

  The two callbacks have the same effect, but the second is a little
  more efficient, since it always does just one string comparison per
  callback invocation.

- The new String method
  [compareIgnoreCase()](sysman/string.html#compareIgnoreCase) compares
  the target string to another string, using the case-folded version of
  each string. It returns the same type of result as compareTo() -
  negative if the target string sorts before the other string, zero if
  they're equal, and positive if the target sorts after the other
  string, in all cases ignoring case differences. This is equivalent to
  calling compareTo() using the results of calling toFoldedCase() on
  each string, but compareIgnoreCase() is more efficient since it never
  constructs the full case-folded versions of the two strings (it does
  the case folding character by character as it compares the strings).

- The new function [concat()](sysman/tadsgen.html#concat) returns a
  string with the concatenation of the argument values. This is
  essentially the same as using the "+" operator to concatenate a series
  of strings, but it's more efficient when combining three or more
  values, since the "+" operator is applied successively in pairs and so
  has to build and copy an intermediate result string at each step.

- The new function [abs()](sysman/tadsgen.html#abs) returns the absolute
  value of an integer or BigNumber value.

- The new function [sgn()](sysman/tadsgen.html#sgn) returns the SGN
  (sign) of an integer or BigNumber value. The SGN is 1 for a positive
  argument, 0 for zero, and -1 for a negative argument.

- The new t3make option -FC automatically creates the project's output
  directories. If this option is specified, the compiler creates the
  directories specified in the -Fy, -Fs, and -o options, if they don't
  already exist. This makes it simpler to move a project to a new
  directory or onto a new machine, since -FC makes it unnecessary to
  create the output directories manually.

- HTTPRequest now recognizes GIF image files when sending a reply body.
  When the caller lets HTTPRequest auto-detect the MIME type in
  sendReply() and related methods, the class will now use "image/gif"
  when it detects a GIF file. As with other binary file types, the class
  recognizes GIF files by looking for the format's standard signature
  near the start of the reply body data. ([bugdb.tads.org
  \#0000139](http://bugdb.tads.org/view.php?id=0000139))

- The new [HTTPRequest](sysman/httpreq.html) method
  [sendReplyAsync()](sysman/httpreq.html#sendReplyAsync) lets you send
  the reply to an HTTP request asynchronously, in a background thread,
  so that the main program thread can continue to service other requests
  while the reply is sent. This is useful when the reply contains a
  large content body, such as a large image or audio file. Most browsers
  use background threads on the client side to download large media
  objects, so that the UI remains responsive to user input while the
  objects are downloaded; with the TADS Web UI, this means that the
  browser can generate new XML requests while image or audio downloads
  are still in progress. The HTTPRequest sendReply() method is
  synchronous, meaning that it doesn't return until the entire data
  transfer has been completed. This means that the program can't service
  any new XML requests that the browser sends during the download until
  after the download has completed and sendReply() returns, which makes
  the UI unresponsive for the duration of the download. sendReplyAsync()
  addresses this by letting you initiate a reply and then immediately
  return to servicing other requests, without waiting for the reply data
  transfer to finish.
  The Web UI library uses the new method to send replies to requests for
  resource files, since these files are often images, sounds, and other
  media objects that can be large enough to take noticeable time to
  transfer across a network. Resource files are the mechanism that most
  games use to handle their HTML media objects, so most game authors
  shouldn't have to use sendReplyAsync() directly.

- The new class [FileName](sysman/filename.html) provides a portable way
  to manipulate file names and directory paths, and methods to operate
  on the corresponding file system objects named. Each operating system
  has its own file path syntax, so it's always been difficult to use
  ordinary strings to construct and parse filenames that involve
  directory paths. It's too easy to make assumptions that tie the
  program to a single operating system; the alternative has been to
  write a bunch of special-case code to handle the syntax for each OS
  that you want to support. The FileName class helps by providing
  methods for common filename construction and parsing operations, which
  are implemented appropriately for each operating system where TADS
  runs. TADS has always had many of these portability functions
  internally for its own use, mainly for the compiler and other tools;
  the FileName class makes them available to TADS programs. These new
  features will probably be of little direct interest to game authors,
  but could be useful to library and tool developers.
  In addition to building and parsing filenames, FileName provides
  access to a much more complete set of file system functions than was
  previously available. The new class lets you create and delete
  directories, list directory contents, retrieve file system metadata
  (file sizes, types, modification dates), and move and rename files. As
  with the previously existing file access functions, the new functions
  are subject to the file safety restrictions to reduce the risk of
  malicious use and give the user control over the scope of a program's
  file system access.

- The [inputFile()](sysman/tadsio.html#inputFile) function now returns a
  [FileName](sysman/filename.html) object to represent the file chosen by
  the user, rather than a string. Existing code shouldn't be affected
  unless it's unusually dependent upon the result being a string, since
  the FileName object can be passed to any of the functions that open
  files (including the File.openXxx methods, saveGame(), etc) in place
  of a string, and is automatically converted to a string containing the
  file name in most contexts where a string is required.
  A FileName returned by inputFile() has an internal attribute that
  marks it as a user selection, which grants special permission to use
  the file even if it wouldn't normally be accessible under the file
  safety settings. A manual selection via an inputFile() dialog
  overrides the safety settings because of the user's direct
  involvement; the user directly expresses an intention to use the file
  in the manner proposed by the dialog, which is an implicit grant of
  permission.

- Several of the system-level functions that access files are now
  subject to file safety restrictions:
  [saveGame()](sysman/tadsgen.html#saveGame),
  [restoreGame()](sysman/tadsgen.html#restoreGame),
  [setLogFile()](sysman/tadsio.html#setLogFile),
  [setScriptFile()](sysman/tadsio.html#setLogFile), and
  [logConsoleCreate()](sysman/tadsio.html#logConsoleCreate) now enforce
  the appropriate read or write permissions according to the file safety
  settings.

  In the past, these functions didn't enforce file safety settings,
  mostly for practical reasons: these functions are all used by the Adv3
  library to operate on files that are normally selected by the user, so
  it would have been confusing to deny access in cases where the user
  happened to choose a file outside the sandbox. This was balanced
  against the lower inherent risk with these functions, as compared to
  the general-purpose File methods. The game program can't use these
  functions for arbitrary read/write operations; the actual data content
  they read/write is largely under the control of the system, so there's
  probably no way to use them to do something like planting a virus or
  stealing private data. However, since some of them create new files,
  they could still be used for certain types of mischief, such as
  overwriting system files or destroying user data.

  The thing that's changed - that allows us to bring these functions
  into the file safety mechanism - is the new ability of
  [inputFile()](sysman/tadsio.html#inputFile) to mark its filename result
  as coming from a manual user selection, and the corresponding file
  safety enhancement that grants access permissions to such manually
  selected files. This ensures that user file selections for Save,
  Restore, etc. will still work properly, even when they're outside the
  sandbox.

- The new [Date](sysman/date.html) built-in class provides extensive
  functionality for parsing, formatting, and doing arithmetic with
  calendar dates and times; it works with the new
  [TimeZone](sysman/timezone.html) class to convert between universal
  time and local time anywhere in the world, correctly accounting for
  historical changes in time zone definitions and daylight savings time.
  This should be especially useful to authors writing games involving
  time travel, or set during the early morning hours on certain Sundays
  in March or November.

- The new function [makeList()](sysman/tadsgen.html#makeList) constructs
  a list consisting of a repeated value.

- The system library's main startup code (in lib/\_main.t) now allows
  the main() function to omit the argument list parameter. The library
  now simply calls main() with as many arguments as it requires,
  providing the standard "args" parameter if needed and otherwise
  omitting it. For little stand-alone programs that don't use the Adv3
  library, this simplifies the code a little by letting you omit the
  argument list parameter if you don't need it.

- Lists and vectors can now be converted to strings, explicitly with
  [toString()](sysman/tadsgen.html#toString) as well as in contexts where
  non-string values are automatically coerced to strings, such as on the
  right-hand side of a "+" operator where the left-hand side is a string
  value. The string representation of a list or vector is the
  concatenation of its elements, each first converted to a string itself
  if necessary, with commas separating elements. For example,
  toString(\[1, 2, 3\]) is the string '1,2,3'.

- In implicit string conversions, the value `true` is now acceptable,
  and is converted to the string 'true'. In the past, `true` worked this
  way with the [toString](sysman/tadsgen.html#toString) function, but not
  in implicit string conversions (such as when a value is used on the
  right-hand side of a "+" operator when the left-hand side is a string:
  `'x=' + true` caused a run-time error in the past, but now returns
  'x=true').

- The [toString](sysman/tadsgen.html#toString) function and implicit
  string conversions now accept properties, function pointers, pointers
  to built-in functions, and enum values. If the reflection services
  module (reflect.t) is included in the build, these types will be
  passed to reflectionServices.valToSymbol() so that they can be
  translated to symbols when possible. If reflect.t isn't included in
  the build, or if valToSymbol() doesn't return a string value, these
  types will be represented using a default format that indicates the
  value's type and an internal numeric identifier for the value, such as
  "property#23" or "enum#17". Any object type that doesn't have a
  specialized string conversion defined by the built-in object type is
  now handled the same way, so an object without special formatting is
  represented either by its symbolic name (if it has one and reflect.t
  is included in the build) or a generic "object#" format.

- The List method [sublist()](sysman/list.html#sublist) now accepts
  negative *length* values, for better consistency with similar methods
  (e.g., String.substr). A negative length essentially states the length
  relative to the end of the list, in that it gives the number of
  elements to omit from the end of the result list.

- The [byte packing language](sysman/pack.html) now lets you specify that
  a square-bracketed group is to be packed from/unpacked into subgroups
  per iteration for a repeated item, rather than using a single sublist
  for the whole group. The "!" modifier makes this change. For example,
  `fp.unpackBytes('[L S C]5!')` returns (when successful) a list
  containing five sublists, each of which contains the three unpacked
  elements from one group iteration (a long int, a short int, and an
  8-bit int).

- The byte packer now allows up-to counts (e.g., 'a10\*') for packing
  (not just unpacking). When packing, for a group or a non-string item,
  an up-to count packs up to the numeric limit, or up to the actual
  number of arguments; for a string, an up-to count packs up to the
  actual string length or up to the limit, truncating the string at the
  limit if it's longer.

- The regular expression language accepts several new shorthand
  character classes: %s for a space character, %S for a non-space
  character, %d for a digit, %D for a non-digit, %v for a vertical
  space, %V for a non vertical space. (These correspond to backslash
  sequences - \s, \D, etc - that are fairly standard these days in other
  languages with regex parsers, such as Javascript and php. There were
  already \<xxx\> character classes that do the same things as these new
  % codes, but these particular classes tend to be used often enough
  that it's nice to have shorthand versions.)

- The new [\_\_objref()](sysman/expr.html#__objref) operator lets you
  test for the existence of a particular object symbol, optionally
  generating a warning or error message if the symbol isn't defined or
  is defined as something other than an object. This is similar to the
  [defined()](sysman/expr.html#defined) operator, but is specialized for
  object references.

- The [randomize()](sysman/tadsgen.html#randomize) built-in function can
  do several new tricks. First, it allows you to select from three
  different RNG algorithms to use in [rand()](sysman/tadsgen.html#rand):
  the default ISAAC algorithm (the original TADS 3 RNG), a Linear
  Congruential Generator (or LCG, the long-time de facto standard for
  computer RNGs), and the Mersenne Twister (a newer algorithm that's
  become popular in other modern interpreted languages). ISAAC is still
  a good general-purpose choice, but the new options are there in case
  you have some reason to prefer the properties of one of the other
  generators. Second, you can now set a fixed seed value. This allows
  you to override the automatic startup randomization that was added in
  TADS 3.1, and further lets you start a new fixed sequence at any time.
  Third, you can now save and restore the state of the RNG, so that you
  can make the RNG repeat the same sequence of results it produced from
  the time of the saved state.

- When the interpreter is launched, any command-line arguments that
  follow the .t3 file name are passed to the program as string arguments
  to the main() function. In the past, these arguments were passed
  as-is, without any character set translation, which caused
  unpredictable results if they contained any non-ASCII characters. The
  interpreter now translates these strings from the local character set
  to Unicode, ensuring that any accented letters or other non-ASCII
  characters are interpreted properly. (Related to [bugdb.tads.org
  \#0000109](http://bugdb.tads.org/view.php?id=0000109))

- The new interpreter command-line option
  [-d](sysman/terp.html#-d-option) specifies the default directory for
  file input/output. This is the directory that the File object uses to
  open files whose names are specified with relative paths. If -d isn't
  specified, the default is the folder containing the .t3 file. (In past
  versions, there wasn't any way to set the working directory, which was
  always the .t3 file's folder. This means the behavior in the absence
  of a -d option is the same as in the past.)

  The new option [-sd](sysman/terp.html#-sd-option) lets you separately
  specify the "sandbox" directory for the file safety feature. In the
  absence of an -sd setting, the sandbox directory is the same as -d
  setting, or simply the .t3 file's containing folder if there's no -d
  option.

  (The -d option was added in part to address [bugdb.tads.org
  \#0000120](http://bugdb.tads.org/view.php?id=0000120))

- A bug in the dynamic compiler caused 'if' statements in dynamically
  compiled code (e.g., using `new DynamicFunc()`) to use the 'then'
  branch code for both true and false outcomes. This has been fixed.
  ([bugdb.tads.org
  \#0000117](http://bugdb.tads.org/view.php?id=0000117))

- A bug in the dynamic compiler sometimes caused a run-time error when
  accessing a local variable when the enclosing function also defined an
  anonymous function. This is now fixed. ([bugdb.tads.org
  \#0000118](http://bugdb.tads.org/view.php?id=0000118))

- A bug in the BigNumber class sporadically gave incorrect results for
  additions. (Specifically, results were sporadically off by one in the
  last digit.) This has been corrected.

- toInteger() caused a crash when used with values below 0.1. This has
  been corrected. ([bugdb.tads.org
  \#0000127](http://bugdb.tads.org/view.php?id=0000127))

- The compiler reported an unhelpful internal error message ("unsplicing
  invalid line") if a file ended in an unterminated string literal. The
  message is now the more explanatory "unterminated string literal".

- Consider this macro definition and usage:

      #define ERROR(msg) tadsSay(#@msg)
      ERROR({)

  In the past, the compiler treated the ERROR({) line as have a missing
  close paren. This is because the compiler previously tried to balance
  open and close curly braces and square brackets within macro
  arguments, and treated any parentheses found nested within braces or
  brackets as being part of the macro argument, rather than terminating
  the macro argument. This no longer occurs; parentheses are now treated
  independently of braces and brackets within macro arguments, so a
  close paren within a macro argument that doesn't match an earlier open
  paren in the same argument now ends the argument. The example above
  thus now compiles without error, and expands to `tadsSay('{')`. The
  balancing act for braces and brackets does still apply to commas,
  though: a comma within a pair of braces or brackets is still
  considered part of the argument. This is important for macro arguments
  that contain things like statement blocks or anonymous function
  definitions.

- The File unpackBytes() method incorrectly threw an error if an "up-to"
  format was used (e.g., 'H20\*') and the file had zero bytes left to
  read. This has been corrected; unpackBytes() now succeeds and returns
  a zero-length result for the format item.

- String.split() incorrectly returned a one-element list (consisting of
  an empty string) when used on an empty string. This now correctly
  returns an empty list.

- A bug in String.split() caused sporadic crashes when splitting at a
  delimiter and the result list had more than 10 elements. The bug was
  related to garbage collection timing, so it was unpredictable. This is
  now fixed. ([bugdb.tads.org
  \#0000156](http://bugdb.tads.org/view.php?id=0000156))

- A bug introduced in 3.1.0 caused exceptions to be caught in the wrong
  handlers under certain rare conditions. The problem happened with
  exceptions thrown from within method calls when the caller had a new
  "try" block starting immediately after the expression containing the
  method call, with no other VM instructions between the call and the
  start of the "try" block (this means, for example, that the return
  value from the method call was discarded and no other computations
  were performed as part of the same expression after the method call).
  When all of these conditions were met, the exception was incorrectly
  handled by the "catch" part of the "try" block that started just after
  the call; this was incorrect because the "try" block didn't contain
  the call and so its "catch" block shouldn't have been involved in
  handling an exception that occurred within the call. The correct
  behavior has been restored.

- A bug in the regular expression parser randomly caused bad behavior,
  including crashes, if the last character of an expression string was
  outside of the ASCII range (Unicode code points 0 to 127). The bug was
  only triggered when certain byte values happened to follow the string
  in memory, so it only showed up rarely even for expression strings
  matching the description. (It was also possible to trigger the same
  bug with a non-ASCII character within five characters of the last
  position if the string ended with an incomplete \<Xxx\> character
  class name, lacking the final "\>", but this might have been too
  improbable to have ever been observed in the wild.) This has been
  fixed.

- A compiler bug introduced in 3.1.0 made it impossible to assign to an
  indexed "self" element in a modifier method for an intrinsic class
  such as List or Vector. This has been corrected. ([bugdb.tads.org
  \#0000128](http://bugdb.tads.org/view.php?id=0000128))

- In the past, the compiler attempted to pre-evaluate any indexing
  expression it encountered ("a\[b\]") where the index value and the
  value being indexed were both constants. In such cases, it only
  recognized list indexing, which was the only valid constant indexing
  expression before operator overloading made it possible to define
  indexing on custom object classes. This made the compiler generate
  error messages for (potentially) valid code involving constant index
  values applied to object names. This has been corrected; the compiler
  now treats such expressions as valid, and defers their evaluation
  until run-time, so that any operator overloading can be properly
  applied. ([bugdb.tads.org
  \#0000142](http://bugdb.tads.org/view.php?id=0000142))

- The standard main window layout code in the Web UI library now loads
  its Flash helper object (TADS.SWF) dynamically rather than statically,
  and only does so when it detects that Flash support is already present
  in the browser. In the past, the TADS.SWF object was embedded
  statically on the page, which means that the browser saw the object
  declaration whether or not Flash support was installed. Some browsers
  attempt to be helpful in this situation by popping up a dialog or
  prompt pointing out that the page depends on Flash and offering to
  download and install a Flash plug-in. For users who intentionally omit
  Flash from their browser configurations, though, this "helpful" prompt
  is an annoyance, since it comes up every time a page with a Flash
  embedding is loaded or reloaded and the answer is always No. The
  library's new approach avoids the superfluous prompt by creating the
  TADS.SWF object embedding only after determining that Flash is already
  installed.
  (There's a trade-off, of course, in that the browsers that display the
  prompt do so for good reason. Without it, users who *un*intentionally
  omitted Flash from their configurations will never know the page makes
  use of it. This seems like a small price to pay, though, in that (a)
  most modern browsers include Flash support out of the box anyway
  (excluding those on iOS, where Flash simply isn't available), so
  practically everyone who hasn't gone out of their way to remove Flash
  already has it (or is running on iOS, where there's no need for a
  prompt since there's no way to install Flash at all); and (b) even if
  there's anyone left over after considering (a) who could benefit from
  the prompt, the Web UI only uses Flash as a very minor enhancement
  (specifically, to obtain a list of installed fonts for the Preferences
  dialog), so these presumably rare users won't suffer any really
  significant loss of functionality from the lack of Flash that we're
  preventing the browser from alerting them to.) ([bugdb.tads.org
  \#0000145](http://bugdb.tads.org/view.php?id=0000145))

- The compiler didn't generate the full string list properly when the
  -Os option was used; only strings for the first source module in the
  build were included, rather than strings for all modules being
  compiled. (What's more, when the build included many modules, the
  underlying bug sometimes caused internal memory corruptions within the
  compiler that generated spurious error messages or other unpredictable
  results.) This has been corrected. ([bugdb.tads.org
  \#0000150](http://bugdb.tads.org/view.php?id=0000150))

### Changes for 3.1.0 (December 21, 2011)

This update has three main themes: dynamic coding, greater convenience,
and network support. On the dynamic code side, it's now possible to
compile new code at run-time, and new reflection features provide more
thorough run-time access to the program's own internal structure. These
dynamic features will be especially interesting to library and extension
authors, as they open new opportunities for creating miniature languages
within the language. The convenience enhancements involve numerous,
mostly small changes that make common tasks easier and frequent coding
patterns more compact. As for the new network features, the original
motivation and initial application is to run TADS games in a
client/server configuration, where the player uses an ordinary browser
to access the game, with no need to install TADS or even download a game
file. This is just one application of the new technology, though; the
network features are actually much more generalized and extensive than
this first use might suggest. In effect, TADS is now capable of acting
as a fairly complete (if small scale) Web server programming
environment. This opens many new possibilities for networked user
interfaces and multi-player games. It also has an interesting bonus
benefit, which is that it lets you tap into the full power of the
browser to create your TADS user interfaces. Modern browsers provide a
vastly more powerful user interface platform than HTML TADS (or any
other existing IF runtime), and all of that power is now directly
available to TADS games.

Note that before this version was released, it was sometimes referred to
as 3.0.19 (e.g., in the TADS bug database and the T3 blog). If you're
looking for 3.0.19 based on something you read elsewhere, this is it. We
finally bumped the name up to 3.1 because of the substantial new
functionality it contains.

- **Compatibility Alerts:** The following changes might affect existing
  code that was originally created with an earlier version of TADS 3.
  - `operator` is now a reserved word, due to the new operator
    overloading feature. This means that the word `operator` can't used
    as a symbol name, such as for the name of an object, function, or
    local variable.
  - `method` is now a reserved word, due to the new "floating" method
    definition syntax.
  - `invokee` is now a reserved word.
  - `defined` is now a reserved word.
  - \<\< \>\> sequences are now meaningful in single-quoted strings,
    since these strings can now contain expression embeddings. This
    means that formerly inert \<\< sequences in single-quoted strings
    will now be interpreted as embeddings. This *should* be a
    compatibility issue, but as it happens a fortuitous compiler bug in
    older versions made it virtually impossible to use \<\< in
    single-quoted strings anyway, so this shouldn't affect any existing
    code.
  - Complex expressions involving compound assignment operators with
    side effects in their lvalues are now compiled with different
    (better) behavior. This probably won't affect any existing code,
    because (a) it only applies to fairly unusual expressions, and (b)
    anyone who encountered the old behavior probably would have thought
    it was a bug and changed their code to avoid it. The new behavior is
    much more predictable and much more what you'd expect, but it's
    possible that there's existing code that accidentally relies on the
    old behavior. Details [below](#compoundAsiSideEffects).
  - The regular expression character class \<space\> now explicitly
    matches only *horizontal* whitespace characters, *not* vertical
    separators (\n, \r, \b, and a few others). This is actually more
    likely to fix problems than create new ones, since the old behavior
    was inconsistent with what most people expect from other regular
    expression implementations.
  - The rand() function now evaluates only one of its arguments when
    it's called with multiple arguments. In the past, rand() evaluated
    all of its argument values first, then randomly selected one of the
    values as the result. Now, rand() makes the random selection first,
    then evaluates only the selected item, and returns the result. This
    means that side effects are only triggered for the selected
    argument, not for all arguments as in the past. This could
    conceivably affect existing code that relied on all of the
    arguments' side effects being executed, although such code tends to
    be tricky enough that most people avoid it, so the practical impact
    should be minimal to non-existent. Also, importantly, this is a
    **compiler** change only, so it only affects newly compiled code;
    existing .t3 files already in distribution won't be affected.

- It's now possible for a TADS game to be a Web server. This is
  accomplished with the new intrinsic classes
  [HTTPServer](sysman/httpsrv.html), which handles the low-level
  networking required to receive and parse HTTP requests from Web
  clients, and [HTTPRequest](sysman/httpreq.html), which represents an
  incoming HTTP request from a client; and the new intrinsic function
  set [tads-net](sysman/tadsnet.html), which contains additional support
  functions for networking operations.
  The new HTTP server support classes are designed to automatically
  handle all of the low-level necessities of a network service, while
  still giving the game program full control over how requests are
  actually processed. This makes it possible to create a wide variety of
  effects with the network server. Initially, it will be used to present
  the traditional single-player user interface in a networked
  configuration, where the game runs on a server and the client needs
  only an ordinary Web browser. This eliminates the need for clients to
  install the TADS software, while also greatly expanding the UI
  capabilities of TADS games by letting you use the full power of HTML
  DOM and Javascript. Over time, it opens up lots of other
  possibilities, such as collaborative gaming and multi-player games.

- In addition to the new ability to act as a Web server, TADS games can
  now also make HTTP requests as clients, via the new function
  [sendNetRequest()](sysman/tadsnet.html#sendNetRequest). This lets a
  game send information to and receive information from remote Internet
  servers during play.

- The interpreter has a new command-line option, `-ns##`, for setting
  the "network safety level". This is analogous to the file safety
  level, and controls the program's ability to access the network
  functions. The "##" part is two digits, the first giving the safety
  level for *client* functions, and the second giving the level for
  *server* functions. The client level controls outgoing connections
  from the program to external network services; the server level
  controls the program's ability to accept connections from external
  client programs (such as Web browsers). There are three possible
  values for each component: 0 means "no safety", which allows all
  network access without restrictions; 1 sets local access only, which
  only allows connections to or from other applications running on the
  same computer; and 2 is "maximum safety", meaning no network access is
  allowed at all. For example, `-ns02` gives the program full access as
  a client to any external network service anywhere on the network, but
  at the same time prohibits the program from setting up any network
  services of its own or accepting any connections from other processes
  or computers. The default safety level is `-ns11`, which allows the
  program to connect to and accept connections from other programs on
  the same machine only.

- The compiler now accepts "triple-quoted" strings. This *isn't* a third
  type of string beyond single- and double-quoted; it's just a new way
  of writing those two existing string types. A few other C-like
  languages have adopted this as a nicer syntax for writing strings that
  contain quote marks as part of their literal text. This is a
  particularly common need in TADS, since so many strings are part of
  the story text.

  A triple-quoted string starts and ends with *three copies* of the
  quote mark. What you gain is that you can then freely use the quote
  mark character within the string *without* worrying about "escaping"
  it with a backslash. The traditional C backslash syntax for embedded
  quotes is awkward to type and hard to read. Triple quotes make strings
  more readable by letting you use quotes directly in a string without
  any escape characters.

         desc = """The sign reads "Beware of Backslash!""""

  There are a couple of subtleties you should be aware of, so take a
  look at the [System Manual](sysman/strlit.html#tripleQuotes) for
  details.

- Single-quoted strings can now use \<\< \>\> expression embeddings
  (including all of the new embedding features, such as \<\<if\>\>). The
  single-quoted version produces a result that's equivalent to
  concatenating the embedded expressions to the surrounding string
  fragments. For example, `'one <<two>> three <<four>> five'` is
  equivalent to `'one ' + two + ' three ' + four + ' five'`. See [String
  Literals](sysman/strlit.html#embedSgl) in the System Manual for more
  details.

- A new [string embedding template](sysman/strlit.html#strtpl) syntax
  lets you create custom keywords and phrases for use inside embedded
  expressions. The compiler translates each custom template invocation
  into a function call, so this is merely a syntactic convenience, but
  it can make embeddings in strings more readable by avoiding
  expression-like syntax. For example, you could create a template that
  lets you write a string like "You currently have \<\<score in
  words\>\>" points", rather than the more techy looking "You currently
  have \<\<spellNum(score)\>\> points".

- There's a powerful new string embedding syntax for writing passages
  that vary according to run-time conditions. Traditionally, conditions
  were embedded in strings using the `?:` operator, as in:

         desc = "The door is <<isOpen ? 'open' : 'closed'>>."

  That's fine for substituting a word or two based on a simple
  true/false condition, but for anything more complex it can be hard to
  read. The new syntax improves the situation by making the varying text
  part of the string, rather than part of the expression. The conditions
  become almost like markups interposed within the text:

         desc = "The door is <<if isOpen>>open<<else>>closed<<end>>. "

  The improved readability of the new syntax is more obvious with longer
  passages:

         desc = "A massive iron door, bristling with rivets and bolts
           across its surface. <<if isOpen>>It's open a crack, leaving
           enough room for a mouse or perhaps a small hare to slip
           through, but probably not quite enough for a burly
           adventurer. "

  Another benefit of the new syntax is that, because the varying text is
  part of the string rather than part of an embedding, you can freely
  use additional embeddings within the then/else parts. (That's not
  possible with `?:` embeddings, since strings inside embedded
  expressions can't themselves contain any embeddings.) You can even
  nest \<\<if\>\> structures for more complex conditions.

  As with other embedding syntax, \<\<if\>\> can be used in
  single-quoted strings as well.

  Full details are in the [System Manual](sysman/strlit.html#embeddedIf).

- Another new embedding syntax, [\<\<one
  of\>\>](sysman/strlit.html#oneof), makes it easier to create lists of
  alternative messages to be chosen randomly or in a cycle (or a
  combination of the two). \<\<one of\>\> variations are defined for
  simple random selection, shuffling, cycling, "stop" lists, and for
  various combinations of these, such as going through a list once in
  sequence and then shuffling it.
  The traditional way to create random or sequential messages was via
  the Adv3 EventList class, which of course still works. \<\<one of\>\>
  is much more concise and readable for simple message variations,
  though, since it doesn't require a separate object declaration for the
  event list. The new syntax also has the advantage of being nestable
  inside other \<\<one of\>\> structures and \<\<if\>\> structures.

- One more new special embedding: [\<\<first
  time\>\>](sysman/strlit.html#firstTimeOnly) shows a message the first
  time the enclosing string is displayed, and omits it after that. This
  is really just a special case of \<\<one of\>\> (and, in fact, the
  compiler actually rewrites it that way), but it's such a common motif
  in IF authoring that the custom syntax seems justified.

- Speaking of string embedding, the compiler now respects parentheses
  (and square brackets and curly braces) within an embedded expression
  when determining where it ends. The compiler previously assumed an
  embedding ended at the very first \>\>, regardless of context, but
  this was problematic if you wanted to use the \>\> bit-shift operator
  within an expression. Now, the compiler counts parentheses, brackets,
  and braces, and treats \>\> as a bit-shift operator if it appears
  within a bracketed group. This means you can use the \>\> operator in
  an embedded expression simply by parenthesizing the expression.

- The new TadsObject methods getMethod() and setMethod() give you more
  dynamic control over objects and classes by letting you add new
  methods to an existing object. This makes it possible to perform
  almost any sort of transformation on an object. See the [TadsObject
  documentation](sysman/tadsobj.html) for details.

- The new `method` keyword lets you define a "floating" method. This is
  a routine that's not associated with an object, but which nonetheless
  has access to the method context variables (targetprop, targetobj,
  definingobj, and self), as well as `inherited`. This is meant
  specifically for use with TadsObject.setMethod(): it lets you create a
  method that's not intially part of any object, and then plug it in as
  an actual method of selected objects at run-time. Syntactically, a
  floating method definition looks just like an ordinary function
  definition, except that whole thing is preceded by the keyword
  `method` instead of the optional `function` keyword. See the System
  Manual for [more details](sysman/proccode.html#floatingMethods).
  The `method` keyword can also be used to create anonymous methods.
  These look and act almost the same as anonymous functions. The
  difference is that an anonymous method doesn't share its method
  context variables (self, definingobj, targetobj, targetprop) with its
  enclosing lexical scope. Instead, an anonymous method takes on the
  "live" values for those variables each time it's called. As with named
  floating methods, anonymous methods are designed for attaching to
  objects via setMethod(). [Details](sysman/anonfn.html#anonMethods) are
  in the System Manual.

- The new intrinsic class [DynamicFunc](sysman/dynfunc.html) makes it
  possible for a running program to extend itself by creating new code
  on the fly. New code is created by compiling a string that contains
  source code text, just as you'd use in the main program source code.
  This type of facility is common in modern interpreted languages,
  especially scripting languages (e.g., Javascript, PHP), where people
  have found all sorts of uses for it. It's especially interesting in
  TADS because it opens the door to new string and message processing
  capabilities.
  DynamicFunc values behave very much like ordinary function pointers.
  You can call a DynamicFunc as though it were a function pointer, and
  you can use a DynamicFunc in TadsObject.setMethod() to create a new
  method for an object.

- [GrammarProd](sysman/gramprod.html) objects can now be dynamically
  created, and the grammar rules for an existing GrammarProd can be
  modified at run-time. The new methods deleteAlt() and clearAlts()
  remove existing alternatives from a GrammarProd, and the new method
  addAlt() adds new alternatives. New rules are specified using the same
  syntax as the regular "grammar" statement.

- It's now possible to retrieve information on the preprocessor macros
  defined by the compiled program. This is handled through the existing
  function [t3GetGlobalSymbols()](sysman/t3vm.html#t3GetGlobalSymbols),
  which now takes an optional argument value that selects which type of
  symbol information to retrieve. The argument is one of the following
  constant values: T3GlobalSymbols, to retrieve the global symbol table;
  or T3PreprocMacros, to retrieve the macro symbol table. If you don't
  include an argument, the global symbol table is retrieved as in the
  past, so existing code will work unchanged. As with the symbol table,
  the macro table is available only during preinit, or during normal
  run-time if the program is compiled with debugging information.

- It's now possible to get a pointer to an intrinsic (built-in)
  function. Use the "&" operator, just like with a property name. For
  example, `&tadsSay` yields a pointer to the tadsSay() intrinsic. These
  pointers operate just like ordinary function pointers: you can use
  them to make calls, and you can even use them in
  TadsObject.setMethod().

- For syntactic consistency, the "&" operator can now be used to get a
  pointer to an ordinary function.
  (In the past this wasn't allowed, but only for nit-picky reasons. It
  was felt that, because there wasn't a *need* for an explicit
  "pointer-to" operator for functions, "&" shouldn't even be allowed for
  functions, making its function clearer by virtue of being
  single-purpose. This was seen as worthwhile because "pointer to
  property" seems to be a particularly subtle idea for new users, as
  it's rather abstract and not common in other languages. However, now
  that we have pointers to built-in functions, we *do* need an explicit
  "pointer to" operator for those, and "&" is certainly the right
  choice: it's the right parallel to C++, on which our syntax was
  originally modeled, and it's the right analogy to the existing TADS
  usage of "&" with properties. With the addition of the built-in
  function pointer type, given that "&*property*" means "pointer to
  *property*", and "&*built-in*" means "pointer to *built-in*," it would
  be confusing if "&*function*" didn't mean "pointer to function" as
  well. The only thing left out, really is "&*object*", but that would
  be going too far. The analogy with C++ would make "&*object*"
  confusing for experienced C++ users because *object* and &*object*
  have quite different meanings in that language.)

- The new "defined" operator tests at compile time to determine whether
  a symbol is defined or not. The syntax is `defined(`*symbol*`)`; this
  yields the constant value `true` if *symbol* is defined at the
  **global** level within the program (as a function, object, or
  property name), `nil` if not. You can use `defined()` in any
  expression context, such as in the condition of an `if` statement.
  This operator is particularly useful in libraries, since it makes it
  possible to write code that conditionally references objects only when
  they're actually part of the program. See the [System
  Manual](sysman/expr.html#defined) for details.
  Note that "defined" still has its separate meaning within \#if
  preprocessor expressions. There, the operator determines if the symbol
  is defined as a **preprocessor** (#define) symbol. When used outside
  of \#if expressions, "defined" has the new meaning of testing the
  symbol's presence in the compiler global symbols rather than the
  preprocessor macro symbols.

- The "new" keyword is no longer required (although it's still allowed)
  in the definition of a long-form anonymous function. For example, it's
  now valid to write code like
  `lst.mapAll(function(x) { return x+1; })`. The presence or absence of
  the "new" makes no difference to the meaning.
  The original rationale for requiring "new" was that anonymous
  functions are actually objects that are newly created on each
  evaluation, so it was felt that this should be made explicit in the
  syntax. The rationale for now relaxing the "new" requirement is that
  "closures" (as they're more technically known) have become common in
  other mainstream languages, and no one else seems to think the syntax
  should mimic object construction. (For that matter, TADS's own
  short-form syntax never had the "new".) There's also a good pragmatic
  reason: with the new Web UI, TADS programmers might find themselves
  switching back and forth between TADS and Javascript, since the Web UI
  incorporates a substantial Javascript front end. Javascript's
  anonymous function syntax is almost exactly like TADS's long-form
  syntax, except that Javascript doesn't have the "new". Such
  close-but-not-perfect similarities are particularly vexing when
  switching between languages, so it seemed best to eliminate the
  unnecessary difference.

- Short-form anonymous functions can now define their own local
  variables. Use the `local` keyword as usual, at the beginning of the
  function's expression. The syntax is analogous to defining locals
  within a `for` statement's initializer clause. See [Anonymous
  Functions](sysman/anonfn.html#shortFormLocals) in the System Manual for
  details and examples.
  This is convenient because it lets you use the short-form syntax even
  if the function requires a local variable or two. In the past, you had
  to switch to the long-form syntax to define a local, even if the rest
  of the function simply returned an expression value.

- The syntax of the `for` loop has been extended with three new
  features:
  - **for..in:**: `for (x in collection)` is now synonymous with the
    existing `foreach` syntax. This makes the syntax more uniform, which
    makes the language easier to use by eliminating the need to remember
    to use distinct keywords for the two kinds of loops.
  - **Hybrid for and for..in loops:** The "in" syntax newly allowed in
    `for` loops can also be combined with the conventional three-part
    init/condition/update syntax. This allows you to add other looping
    variables to an "in" iteration. One of the drawbacks of the
    `foreach` syntax is that any other looping variables have to be
    initialized before the `foreach` and updated and/or tested within
    the loop body. `for` loops, in contrast, can manage multiple
    variables as part of explicit loop structure within the `for`
    statement itself, which is more compact and often clearer. For
    example, to add a counter to an "in" loop, and stop after 10
    iterations even if more elements are in the list, you could write
    `for (local i = 1, local ele in list ; i < 10 ; ++i) { }`.
  - **for..in range loops:** By far the most common type of `for` loop
    is a simple iteration over a range of integers, such as over the
    index range for a list. There's now a custom syntax for this kind of
    loop: `for (`*`var`*` in `*`from`*` .. `*`to`*`)`. This syntax steps
    the variable *var* from the *from* expression's value to the *to*
    expression's value, inclusive of the limits. For example, to step
    through the index values for a list, you can write
    `for (local i in 1..list.length())`. This new syntax makes simple
    integer loops easier to write and clearer. It also makes them more
    reliable, since a common coding error is using `<` instead of `<=`
    (or vice versa) for a loop condition. The range syntax is more
    intuitive because it explicitly states the endpoints rather than
    expressing the loop condition as a value comparison. The new syntax
    also allows specifying the increment: `for (i in 0..20 step 2)`
    steps through even numbers, and `for (i in 10..1 step -1)` steps
    down from 10 to 1. As with collection loops, you can mix this syntax
    with the full three-part `for` syntax:
    `for (local i in 1..20, sum = 0 ; lst[i] != nil ; sum += lst[i])`.

  The new syntax is described in more detail in the [System
  Manual](sysman/proccode.html#for).

- A new language feature lets you pass argument values to functions and
  methods using explicit argument names. This has several important
  benefits. First, callees can retrieve argument values from callers
  without regard to the order of the values in the calling expression.
  Second, callees are free to ignore named parameters entirely, which
  allows a caller to pass extra, optional context information without
  burdening every callee's method definition syntax with unneeded extra
  parameter declarations. Third, nested callees can retrieve named
  arguments passed indirectly from a caller several levels removed, so
  intermediate functions that don't care about context information can
  ignore it without preventing nested callees from accessing it. This
  doesn't replace the traditional positional argument system, but rather
  extends it. Some other languages use named arguments primarily for
  code clarity reasons, but the TADS version is designed to address a
  particular coding problem that comes up time and again in IF library
  design. The details take a little work to explain; the new System
  Manual chapter on [Named Arguments](sysman/namedargs.html) has the full
  story.

- New syntax makes it easier to define functions and methods that take
  optional arguments. It's always been possible to do something similar
  using the "..." syntax, but "..." is really intended for cases where
  the number of additional arguments is unpredictable and has no fixed
  upper limit. The new syntax, in contrast, is for cases where you have
  a specific number of arguments, but where you wish to make one or more
  of the arguments optional, so that callers can omit them for the most
  common case where a default value would apply. This makes the calling
  syntax more convenient for the common case, while still letting
  callers specify the full details when needed. "..." isn't ideal for
  this use because it doesn't provide error checking for *too many*
  parameters, and because it requires fairly tedious extra syntax in the
  callee to check for the presence of the extra arguments and retrieve
  their values. The new syntax is described in detail in the new System
  Manual chapter on [optional parameters](sysman/optparams.html).

- The new [`invokee`](sysman/expr.html#invokee) pseudo-variable retrieves
  a pointer to the function currently executing. This is most useful for
  anonymous functions, since it provides a way for an anonymous function
  to invoke itself recursively.

- The t3GetStackTrace() function can now retrieve information on the
  local variables in effect at each stack level. The locals are
  available via the locals\_ property of the T3StackInfo object that
  represents a stack level.

  By default, locals are omitted, since they take additional time to
  retrieve. To include local variable information, supply the new
  *flags* argument with the value T3GetStackLocals. (This is a bit
  value; it's possible that future bit values will be added, in which
  case this will be combinable with other bit flags via the '\|'
  operator.)

  The locals in each stack frame are provided as a LookupTable. Each
  element of the table is keyed by a string giving the name of the
  variable, and each corresponding table value is the current value of
  the local. The table is merely a copy of the locals in the stack, a
  value in the table won't have any effect on the local variables
  themselves.

- The t3GetStackTrace() function now includes information on the named
  arguments passed to each stack frame. This is available via the
  namedArgs\_ property of the T3StackInfo object that represents each
  stack level. This property is nil for a stack level that doesn't have
  named arguments.
  Each named argument list is provided as a LookupTable. Each element of
  the table is keyed by a string giving the name of the argument, and
  each corresponding table value is the argument's value.

- The t3GetStackTrace() function now includes full information on
  "native" calls in the stack - that is, intrinsic functions and
  intrinsic class methods. In the past, native callers were recognizable
  by their complete lack of information, in that they had a nil value
  for both the calling function and object/property values.
  This change comes into play when a native routine calls bytecode via a
  function pointer you passed into the native routine, such as when
  List.forEach() invokes its callback. When the native caller is a
  built-in function, the function pointer element of the stack level
  object will contain a built-in function pointer value; when it's an
  intrinsic class method, it will contain suitable object and property
  values describing the native method. For obvious reasons, there's no
  source file information for a native routine in the stack trace.

- The new intrinsic class StackFrameDesc provides read and write access
  to the local variables in a stack frame. You obtain a StackFrameDesc
  object via t3GetStackTrace() by including the T3GetStackDesc flag. The
  object provides methods to get and set the values of local variables,
  and to retrieve the method context variables (self, targetobj,
  targetprop, definingobj). See the System Manual chapter for [more
  information](sysman/framedesc.html).

- A new language and VM feature make it possible to "overload"
  operators. This means that you can define a method on an object or
  class that's invoked using one of the algebraic operator symbols, such
  as "+" or "\*", rather than via the normal method call syntax.
  Operator overloading has many potential uses, but the two main uses
  are (1) to create an especially compact syntax for common operations
  on specialized objects, and (2) to create a custom object that mimics
  the low-level interface of one of the built-in types or classes. The
  details are described more fully in a [new
  chapter](sysman/opoverload.html) in the system manual.
  Operator overloading has three significant limitations. First, you
  can't *override* operators pre-defined by intrinsic classes. For
  example, you can't redefine the indexing operator "\[\]" for a List,
  or the concatenation operator "+" for a String. You can, however,
  *add* operators to intrinsic classes: it's legal to use "modify" to
  define an operator on an intrinsic class as long as that operator
  isn't already defined by the intrinsic class itself. Second, there's
  no way to overload operators at all for a primitive type like integer,
  whether or not the type defines it: you can't change the meaning of
  "+" when applied to integers, or add a meaning for "true + nil".
  Third, not all operators are overloadable; notably, none of the
  comparison operators (==, !=, \<, \<=, \>, \>=) are overloadable. All
  of these limitations are due to performance considerations; with these
  restrictions in place, this new feature has no performance cost to
  programs that don't use it.

- Using operator overloading, it's now possible to create "list-like"
  objects. An object is considered list-like if it has an overload for
  `operator[]` *and* it provides a `length()` method that takes zero
  arguments. If the object provides this interface, the `length()`
  method **must** return an integer value.
  The following built-in functions that formerly only accepted regular
  lists and/or vectors will now also accept list-like objects:
  inputDialog(), makeString(), rand(), Dictionary.addWord(),
  Dictionary.removeWord(), List.intersect(), List.appendUnique(), new
  LookupTable(), GrammarProd.parseTokens(), new StringComparator(),
  TadsObject.setSuperclassList(), new Vector(), Vector.appendAll(),
  Vector.appendUnique(), Vector.copyFrom(). Similarly, the "..." varying
  argument expansion operator can be applied to a list-like object as
  though it were a true list; and List and Vector comparisons with "=="
  and "!=" will compare element-by-element against a list-like value on
  the right-hand side; and the List and Vector "+" and "-" operators
  will treat right-hand operands as lists if they're list-like objects.

- New syntax lets you create a LookupTable directly from a set of
  Key/Value pairs. The syntax is similar to a list expression: write the
  list of Key-\>Value pairs in square brackets, with an arrow symbol
  '-\>' between each key and value. For example,
  `x = ['one'->1, 'two'->2, 'three'->3]` creates a LookupTable with keys
  'one', 'two', and 'three', corresponding to values 1, 2, and 3, so
  x\['one'\] yields 1, and so on. This syntax is equivalent to calling
  `new LookupTable()` and then filling in the keyed values, so this kind
  of expression creates a new LookupTable object each time it's
  evaluated.

- The LookupTable class now lets you specify the value to be returned
  when you index a table with a key that doesn't exist in the table.
  This is called the "default value" for the table; in the past, this
  was always nil. The new `setDefaultValue()` method lets you set a
  different default. You can retrieve the default value previously set
  for a table with the new `getDefaultValue()` method. The initial
  default value for a new table is nil, so the behavior is the same as
  in prior versions if you don't use the new method. You can also
  specify the default value when creating a table with the new shorthand
  syntax, by writing "`*->`*`value`*" as the last element of the list.
  (The asterisk is meant to suggest a "wildcard" matching any key not
  specifically entered in the table.)

- The Dictionary class has new built-in infrastructure support for
  spelling correctors. The new function correctSpelling() retrieves a
  list of words in the dictionary that are within a specified "edit
  distance" of a given string. This new function isn't a full-fledged
  spelling corrector, but provides a very fast version of a key
  infrastructure element for building one. Refer to the [Dictionary
  class documentation](sysman/dict.html#spellingCorrection) for details.

- The new intrinsic class [StringBuffer](sysman/strbuf.html) is a mutable
  version of the character string object. Unlike regular String objects,
  a StringBuffer's text contents can be modified in place, without
  creating new String objects. StringBuffer is designed especially for
  situations where it takes many incremental steps to build a string.
  It's much more efficient to use StringBuffer for these cases than it
  is to use regular string concatenation, because the latter makes a new
  copy of each concatenated combination. StringBuffer provides methods
  to edit the contents of the buffer: you can insert, append, delete,
  and replace parts of the text. When you've finished the build steps
  for a string buffer, you can convert it to a regular string using
  toString(). You can also extract a substring of the buffer using the
  substr() method, just like for a regular string.

- The [rexReplace()](sysman/tadsgen.html#rexReplace) function has several
  new features that make it more powerful and more convenient to use:
  - You can now specify a function to determine the replacement text to
    use for each match. If you supply a function (regular or anonymous)
    in place of the regular replacement text argument, rexReplace()
    calls the function for each match, passing as arguments the matched
    text, the index of the match within the overall subject string, and
    the original subject string. Your callback function returns a string
    value giving the text to use as the replacement. This allows for
    much more complex string manipulations, since you can test
    conditions that are beyond what can be encoded in a regular
    expression, and you can apply arbitrary transformations to the match
    string to produce the replacement text.
  - You can now specify a list of patterns to match, instead of just a
    single pattern, and each pattern can have a separate replacement
    value (which can be a string or a callback function, per the new
    callback feature above). By default, when you supply a list of
    patterns, rexReplace() searches for all of the patterns at once.
    This is similar to combining the patterns with '\|' to make a single
    pattern, but it's more powerful because it lets you specify a
    different replacement string for each pattern. If you include
    ReplaceSerial in the flags, rexReplace() instead searches "serially"
    for the patterns: it replaces each occurrence of the first pattern
    throughout the entire string, and then re-scans the updated string
    to replace all occurrences of the second pattern, and so on. The
    effect is the same as calling rexReplace() sequentially with each
    individual pattern, but it's more compact to write it this way.
  - The "flags" argument is now optional. If it's omitted, the default
    is ReplaceAll. This makes the function more convenient to use for
    the most common case. Note that if you need to specify the "index"
    argument, you must also include a "flags" value, since the arguments
    are positional.
  - The new flag ReplaceIgnoreCase makes the search insensitive to case,
    by default. A \<case\> or \<case\> directive in the regular
    expression overrides the ReplaceIgnoreCase setting. The main reason
    this flag is provided at all (given that it's largely redundant with
    the \<case\> or \<case\> directives) is for uniformity with
    String.findReplace(), but it can occasionally be useful in that lets
    you reuse an expression for both case-sensitive and case-insensitive
    searches.
  - The new flag ReplaceFollowCase makes the replacement follow the
    capitalization pattern of the matched text. Lower-case letters in
    the replacement text are capitalized (or not) as follows: if all of
    the alphabetic characters in the matched text are capitals, the
    entire replacement text is capitalized; if all of the letters in the
    match are lower-case, the replacement text is left in lower-case; if
    the match has both capitals and lower-case letters, the first
    alphabetic character of the replacement text is capitalized. This
    only applies to lower-case letters in a replacement string, and only
    to literal text: "%" group substitutions aren't affected, since they
    already copy text directly from the match anyway. The flag also has
    no effect when the replacement is a callback function rather than a
    string; we have to assume the function returns exactly what it
    wants, since it can perform similar case manipulations of its own.

- The String method [findReplace()](sysman/string.html#findReplace) has a
  few new features:
  - You can now specify a list of search strings, and a list of
    corresponding replacements. This makes it possible to perform a
    whole series of replacements with a single call.
  - You can now pass a function in place of a string as the replacement
    argument. For each match, findReplace() invokes the function,
    passing in the matched text and other information; the function
    returns a string giving the replacement text. This makes it possible
    to vary the replacement according to the actual matched text, its
    position in the subject string, or other factors.
  - The "flags" argument is now optional. If it's omitted, the default
    is ReplaceAll. This makes the most common usage more convenient.
    Note that if you need to specify an "index" value (for the starting
    position), you'll need to include a "flags" value, since the
    arguments are positional.
  - The new flag ReplaceIgnoreCase makes the search insensitive to
    capitalization.
  - The new flag ReplaceFollowCase makes the replacement text follow the
    case of the matched text, mimicking its capitalization pattern.

- The functions rexMatch(), rexSearch(), and rexReplace(), and the
  String methods toUnicode(), find(), and findReplace() now accept a
  negative values for the "index" argument. This is taken as an index
  from the end of the string: -1 is the last character, -2 the second to
  last, and so on. For the search and replace functions, a negative
  index doesn't change the left-to-right order of the search; it's
  simply a convenience for specifying the starting point. Some other
  string methods already accepted this notation, so these additions make
  the API more consistent.

- The regular expression matcher now matches \<space\> only to
  *horizontal* whitespace characters. In the past, \<space\> matched
  some vertical whitespace characters as well, but this was inconsistent
  with the usual matching rules in most other regular expression
  implementations, and was usually undesirable. The new character type
  \<vspace\> explicitly matches vertical whitespace: '\n', '\r', '\b',
  '\u2028', '\u2029', and a few ASCII control characters that the
  Unicode standard defines as line break characters ('\u0085', '\u001C',
  '\u001D', '\u001E'). To create a character class matcher that matches
  all whitespace, the way \<space\> did in the past, use
  \<space\|vspace\>.

- Look-back [assertions](sysman/regex.html#assertions) are now supported
  in the regular expression language. A look-back assertion tests a
  sub-pattern against the characters *preceding* the current match
  point, which makes it possible to apply conditions to the preceding
  context where a potential match appears. TADS follows the widely-used
  Perl-style syntax for the new assertions.

- In the past, the regular expression compiler explicitly ignored any
  closure operator (\*, +, {}) applied to an assertion, because such
  constructs are essentially meaningless and are susceptible to infinite
  loops. The compiler no longer takes this approach; instead, it does a
  thorough check for meaningless loops in the regular expression, and
  deletes them. This is an improvement because it detects all loops, no
  matter how complex, whereas the old approach only caught this one
  superficial case. This change creates one behavior difference, which
  is that it corrects the effect of the \* operator applied to an
  assertion: in the past, the \* was simply ignored, whereas it now
  correctly requires that the assertion is true zero or more times. This
  is the same as removing the assertion entirely, since a condition that
  has to be true zero or more times is really no condition at all.

- The new function [sprintf()](sysman/tadsgen.html#sprintf) creates
  formatted text from data values according to a format template string.
  This is similar to the sprintf() function in many C-like languages.
  This style of string formatting is sometimes more compact and
  convenient than the alternatives. sprintf() is also particularly
  useful for formatting numbers, since it has several style options for
  integers and floating-point values that are tedious to code by hand.

- The new String method [splice()](sysman/string.html#splice) lets you
  delete a portion of a string, insert new text into a string, or both
  at the same time. splice(idx, del, ins) deletes *del* characters
  starting at index *idx*, and then inserts the string *ins* in their
  place. The *ins* string is optional, so you can omit it if you just
  want to delete a segment of the string.

- The String method substr() now accepts a negative value for the length
  argument, which specifies a number of characters to discard from the
  end of the string.

- The new String method [split()](sysman/string.html#split) divides a
  string into substrings at a given delimiter, which can be given as
  either a string or a RexPattern (regular expression pattern). It can
  alternatively split a string into substrings of a fixed length. This
  method comes in handy for surprisingly many simple string parsing
  jobs.

- The new List method [join()](sysman/list.html#join) concatenates the
  elements of the list together into a string.
  [Vector](sysman/vector.html) has this same new method.

- The new String method
  [specialsToHtml()](sysman/string.html#specialsToHtml) converts special
  TADS characters (such as \n and \b sequences) to standard HTML
  equivalents. This is designed specifically for the Web UI, to make it
  easier to port games between the traditional console UI and the Web UI
  by providing support in the Web UI for the traditional (pre-HTML) TADS
  formatting codes.

- Another new String method,
  [specialsToText()](sysman/string.html#specialsToText), is similar to
  specialsToHtml(), but converts the string to plain text. Special TADS
  characters are converted to their plain text equivalents, the basic
  HTML "&" entities are converted to their character equivalents, a few
  basic tags (\<BR\>, \<P\>, and a few others) are converted to suitable
  plain-text equivalents, and most other tags are stripped out. This is
  designed for situations where you need a plain-text rendering of the
  way a TADS string would look as displayed on the regular output
  console.

- The new string methods [urlEncode()](sysman/string.html#urlEncode) and
  [urlDecode()](sysman/string.html#urlDecode) simplify encoding and
  decoding URL parameter strings, for use in HTTP network requests.
  urlEncode() converts special characters to "%" encodings; urlDecode()
  reverses the effect, translating "%" encodings back to the character
  equivalents.

- Two new String methods, [sha256()](sysman/string.html#sha256) and
  [digestMD5()](sysman/string.html#digestMD5), calculate standard hash
  values for the string's contents. sha256() calculates the 256-bit
  SHA-2 (Secure Hash Algorithm 2) hash, and digestMD5() calculates the
  MD5 message digest. The same methods are available on ByteArray to
  hash the byte array's contents, and on File to hash bytes from the
  file.

- It's now easier to convert between strings and ByteArray objects.
  First, a ByteArray can now be converted to a string via toString(), or
  via implicit conversions, such as a "\<\< \>\>" embedding in a string.
  The bytes in the array are simply treated as Unicode character codes.
  Second, ByteArray.mapToString() can now be called without a character
  set argument, or with nil for the character set; this performs the
  same conversion as toString(). Third, the ByteArray constructor has
  two new formats: `new ByteArray('string')` creates an array containing
  the string, treating each character as a Latin-1 character; and
  `new ByteArray('string', `*`charmap`*`)` is equivalent to
  `'string'.mapToByteArray(`*`charmap`*`)`, but is a little more
  intuitive syntactically. Similarly, String.mapToByteArray() can now be
  called without the character mapper argument, which is equivalent to
  `new ByteArray('string')`.

- ByteArray.mapToString(), the ByteArray constructor, and
  String.mapToByteArray() now accept a string giving the name of a
  character set in place of a CharacterSet object. The methods simply
  create a CharacterSet object for the given name automatically. This is
  more convenient for one-off conversions, but if you're using a
  character set repeatedly keep in mind that it's more efficient for you
  to create the object once and reuse it.

- Concatenating nil to a string with the "+" operator now simply yields
  the original string. That is, nil is treated as equivalent to an empty
  string for this operator. In the past, the literal string "nil" was
  appended instead. This was almost never useful, whereas it's often a
  convenience to have nil treated as an empty string in this situation.

- The compiler now recognizes the "\r" escape code in string literals.
  \r represents a Carriage Return character, ASCII 13, which is the same
  meaning this code has in C, C++, Java, and Javascript. \r wasn't part
  of the TADS escape set historically (although you could always code it
  numerically as \015 or \u000D), mostly because there was never much
  need for it in practice. TADS tries to smooth out newline differences
  among platforms by representing all newline sequences as \n
  characters, so it's rare for a \r to find its way into a TADS string
  in the first place. We've added \r mostly for the sake of completeness
  and familiarity for C/Java programmers.

- The built-in function makeString() now returns an empty string if the
  repeat count argument is zero, and throws an error if the count is
  less than zero. In the past, all repeat counts less than 1 were
  treated as though 1 were specified.

- The new List method [splice()](sysman/list.html#splice) lets you delete
  a portion of a List, insert new elements into the list, or both at the
  same time. splice(idx, del, ins1, ins2, ...) deletes *del* elements of
  the list starting at index *idx*, and then inserts the new elements
  *ins1*, *ins2*, etc., in their place. The new elements are optional;
  if they're omitted, the method only does the deletion. If *del* is 0,
  the method only does the insertion. The equivalent method is also now
  available for [Vector](sysman/vector.html#splice).

- The new static List method [generate()](sysman/list.html#generate)
  creates a list with a given number of elements by invoking a callback
  function to generate each element's value. This is similar to
  mapAll(), but rather than transforming an existing list, generate()
  constructs a new list from a formula. For example, for a list of the
  first ten even integers, we can write `List.generate({i: i*2}, 10)`.
  Vector.generate() works the same way to generate a new Vector.

- The Vector constructor now allows you to omit the initial allocation
  argument in most cases. You can call `new Vector()` without any
  arguments to use a default initial allocation (currently 10 elements).
  `new Vector(`*`source`*`)`, where *source* is a list or another
  Vector, creates a Vector copy of the source object using the source
  object's length as the initial allocation size. (This change is meant
  to make the Vector programming interface more consistent with the
  spirit of the class as a high-level, automatic collection manager. The
  old requirement to specify what amounts to an optimization parameter
  for every Vector was rather out of character with this spirit.)

- Most of the List and Vector methods that take an index value arguments
  now accept negative index values to count backwards from the last
  element: -1 is the last element, -2 is the second to last, and so on.
  For methods that insert elements, 0 generally counts as one past the
  last element, to insert after the last existing element. See the
  individual List and Vector method descriptions for details. Note that
  this works only with method calls, not with the `[ ]` subscript
  operator.

- The built-in functions max() and min() now accept a single list,
  vector, or other list-like object value as the argument. The result is
  the highest or lowest value in the list.

- List has four new methods for finding minimum and maximum elements,
  optionally applying a mapping function to the element values to be
  minimized or maximized. indexOfMin() returns the index of the element
  with the minimum value; minVal() returns the minimum element value;
  indexOfMax() returns the index of the element with the maximum value;
  maxVal() returns the maximum element value. With no arguments, these
  methods all simply compare the element values directly, and minVal()
  and maxVal() return the lowest/highest element value. These methods
  can all optionally take one argument giving a function pointer. If the
  function argument is supplied, the methods call the function for each
  element in the list, passing the element's value as the argument to
  the callback function, and the methods all use the return value of the
  function in place of the element value. For example, if lst is a list
  of string values, lst.maxVal({x: x.length()}) returns the length of
  the longest string in the list.
  Vector has the same four new methods.

- The File object has a new pair of methods, packBytes() and
  unpackBytes(), that make it much easier to work with raw binary files,
  especially files in third-party or standard formats such as JPEG or
  MP3. The new methods convert between bytes in a file and TADS
  datatypes in your program, using a mini-language that can express
  complex data structures very compactly. This is based on the similar
  facility in Perl and php, so if you're familiar with one of those
  you'll already know the basics. ByteArray and String have their own
  versions of the methods as well, for times when you want to prepare
  byte structures in memory rather than in a file. For details, see
  [Byte Packing](sysman/pack.html) in the System Manual.

- A new static (class-level) File method, File.getRootName(), extracts
  the "root" portion of a filename string. This is the portion of the
  filename that excludes any directory or folder path prefix. For
  example, given a string 'a/b/c.txt' while running on a Unix machine,
  the function returns 'c.txt'. The function uses the correct local
  naming rules for the OS that the program is actually running on.

- In File.openTextFile() and File.openTextResource(), if the character
  set isn't specified (because the parameter is missing or nil), the
  default is now the system's default local character set for file
  contents. This is the same character that
  getLocalCharSet(CharsetFileCont) returns. In the past, the default was
  always "us-ascii". Another small enhancement is that the character set
  parameter can now be given as nil, which explicitly selects the
  default (in the past, if you wanted the default, you had to omit the
  parameter entirely).

- A new static (class-level) File method, File.deleteFile(), lets you
  delete files. The file safety level for write mode applies to
  deletions, so you can only delete a file that you could also
  overwrite.

- File.writeBytes() now accepts a File object as the source of the data
  to write to the file. This makes it easy to copy a portion of one file
  to another file. When the source is a File object, the *start*
  parameter specifies a seek location in the source file; if *start* is
  omitted or nil, the default starting location is the current seek
  location in the file.

- A new File method, setMode(), lets you change the data mode of an open
  file.

- In the past, File.getPos() wasn't reliable when reading from text
  files. The File object internally buffers text read from the file so
  that it can perform character set conversions, and getPos() was
  incorrectly returning the position of the last byte read into the
  internal buffer, rather than the read position within the buffer. This
  made it impossible to reliably seek back to a starting location in the
  middle of a series of text reads. This is now fixed.

- Reading from a file opened in one of the read/write access modes
  (FileAccessReadWriteKeep, FileAccessReadWriteTrunc) didn't work in
  past versions; it could cause a crash. This has been corrected.

- The File methods that open resource files are now affected by the file
  safety level. If a resource isn't bundled into the .t3 file, the
  open-resource methods traditionally looked for the resource as a
  separate, unbundled file within the image file's folder. They now do
  this **only if** the file safety level would allow access to the same
  file through a regular open-file method. This makes it especially
  important for you to explicitly bundle any resources directly into the
  .t3 file, since bundled resources are always accessible, regardless of
  file safety settings.

- The new intrinsic class [TemporaryFile](sysman/tempfile.html) provides
  support for temporary files in the local file system. A temporary file
  is a file that only exists for the duration of the program's
  execution, and is automatically deleted when the program exits. You
  can manipulate temporary files even when the file safety level
  prohibits access to the local file system, because their inherent
  limitations prevent misuse by malicious programs.
  Use `new TemporaryFile()` to create a TemporaryFile object. The system
  automatically assigns the new object a unique filename in the local
  file system, typically in a special system directory designated by the
  operating system. You don't specify the name of a temporary file,
  since the system chooses the name for you to ensure uniqueness.
  Creating the TemporaryFile object doesn't actually create a file on
  disk; it merely generates a filename that you can use. You can then
  create, read, write, and otherwise manipulate the actual file using
  the File object. Pass the TemporaryFile object in place of the
  filename string to open the file. You can also use TemporaryFile
  objects in most other system functions that operate on files
  (saveGame(), restoreGame(), setLogFile(), scriptScriptFile(), and
  logConsoleCreate()).

- The file safety level is now separated into two components, one for
  reading files and the other for writing files. The safety levels have
  the same meanings as in past versions, but you can now select the read
  and write levels separately by specifying two digits in the `-s`
  option. The first digit is the read level, and the second is the write
  level. For example, `-s04` allows all read access, but blocks all
  write access. If you specify only one digit, the given level is
  applied to both read and write operations, so the option works the
  same way it used to if you use the old syntax. The default is still
  `-s2`, which allows read and write access to the directory containing
  the image file, and denies all other file access.

- The file safety levels that restrict access to the image file
  directory now consider files within subdirectories of that directory
  to be within that directory. In the past this was ambiguous, although
  most systems considered only allowed access to files directly in the
  image file directory. It makes more sense to allow subdirectory access
  than to forbid it: subdirectories are conceptually contained within
  their parent directory, so access within subdirectories is still
  effectively sandboxed to the containing directory.

- Saved game files can now include an optional "metadata" table,
  containing game-defined descriptive information about the state of the
  game at the time of creating the save file. This can include any
  information the game wishes to include, such as the current room
  location, score, number of turns, chapter number, etc. The interpreter
  and other tools can extract this information and display it to the
  user when browsing a collection of saved game files, to help jog the
  user's memory about the game position saved in the file. See
  [saveGame()](sysman/tadsgen.html#saveGame) in the System Manual for
  details.

- The setLogFile() and setScriptFile() built-in functions now return
  values, to indicate success or failure. On success, the functions
  return true; on failure, they return nil. A failure result from
  setLogFile() means that the specified file can't be created, and from
  setScriptFile() it means the file doesn't exist or can't be opened.

- The new IntrinsicClass static method isIntrinsicClass() lets you
  determine if a given object is an IntrinsicClass instance. This isn't
  possible using ofKind() or getSuperclassList(), because those methods
  work within the *inheritance* class tree for the intrinsic types. This
  new method is required to make this determination. IntrinsicClass is
  only used for the *representation* of an intrinsic class, and isn't
  involved in the inheritance structure. For more information, see the
  [IntrinsicClass](sysman/icic.html) documentation.

- You can now enter expressions containing anonymous functions
  interactively in the debugger (such as in the "Watch" list, breakpoint
  conditions, or the expression evaluation dialog). This wasn't allowed
  in the past.

- The debugger now shows the contents of a Vector in-line when you
  inspect its value, just like a list. This saves you the trouble of
  using the "+" box in the watch window every time you want to look at a
  small vector's contents. You can still use the "+" box as usual, but
  when a vector only has a few elements, the in-line display is usually
  all you'll need.

- The debugger now makes it easy to view the contents of a LookupTable.
  First, when a LookupTable value is displayed in a tooltip or in a
  watch window, the list of keys and values is displayed using the new
  `[key->value]` list notation. Second, when inspecting a lookup table
  object in a watch window, you can now click the "+" symbol to inspect
  the list of key/value pairs stored in the table.

- The debugger now shows the original pattern string in-line when
  inspecting a variable containing a RexPattern object.

- When rand() is used with multiple arguments, it now only evaluates the
  one randomly chosen argument value. This means that side effects will
  only be triggered for the chosen argument, and not for any of the
  other arguments. This is useful because it means that you can use
  rand() to intentionally trigger a randomly selected side effect. For
  example: `rand("one", "two", "three", "four", "five")` prints out a
  randomly selected number from one to five, and
  `rand(f(x), g(x), h(x))` randomly calls one of the functions f(), g(),
  or h().

- The rand() function can now generate a random string based on a
  template string. When rand() is called with a single string argument,
  the function returns a string of random characters chosen according to
  the template. See the [rand()](sysman/tadsgen.html#rand) documentation
  for details.

- The interpreter now automatically seeds the random number generator at
  the start of the run. In the past, it was up to the program to do this
  by explicitly calling the randomize() function. The reason for
  changing the default is that defaults in general should be the
  settings most people would want most of the time, and in this case
  that's clearly automatic randomizing. The only time you'd want *not*
  to randomize is during regression testing, when you want to verify
  that the program runs exactly the same way every time. When you do
  want a repeatable random number sequence, specify the new `-norand`
  interpreter option: `t3run -norand mygame.t3`

- A new BigNumber method, numType(), returns information on the type of
  value represented by the BigNumber. This allows you to identify the
  special distinguished values "Not a Number" (NaN) and positive and
  negative infinity.

- A few new BigNumber.formatString() flags have been added:
  BignumCompact (use the more compact of the regular format or
  scientific notation); BignumMaxSigDigits (count only significant
  digits against the maxDigits limit, not leading zeros);
  BignumKeepTrailingZeros (keep trailing zeros after the decimal point
  to fill out the result to maxDigits in length).

- toString() now respects the radix argument for BigNumber values that
  are whole integers.

- toString() accepts a new "isSigned" argument that lets you control
  whether a signed or unsigned interpretation should be used for integer
  values. In the past, this was tied to radix - decimal treated values
  as signed, any other radix as unsigned. The default is the same as
  before, but you can now override it to get an unsigned decimal
  representation, or a signed hex representation, for example.

- toInteger() now accepts any radix from 2 to 36. The letters A through
  Z represent digit values 10 through 35 for bases above 10, in analogy
  to hexadecimal notation. For better consistency with its name, the
  function also now converts the strings "true" and "nil" respectively
  to 1 and 0 (instead of the boolean true and nil values that it
  formerly returned), and converts the boolean values true and nil to 1
  and 0. It's also a little more liberal about parsing strings
  containing the text "true" or "nil", in that it now ignores leading
  and trailing spaces.

- The new function [toNumber()](sysman/tadsgen.html#toNumber) is similar
  to toInteger(), but also parses strings representing BigNumber values.
  If the input is a string representing a floating point value (i.e., it
  has a decimal point or uses the 'E' exponential format), or an integer
  that's too large for an ordinary 32-bit TADS integer, the value is
  returned as a BigNumber. If it's a whole number that fits in a 32-bit
  integer, it's returned as an integer. This routine can also be used to
  parse a BigNumber integer value in a non-decimal radix.

- The compiler now pays attention to resource file timestamps in
  determining whether it needs to rebuild the image file. In the past,
  merely updating a resource file didn't trigger a relink, so the image
  wouldn't be updated with a new resource until it was relinked for some
  other reason.

- The new "if-nil" operator [`??`](sysman/expr.html#ifnil) checks an
  expression to see if the value is nil, and if so yields a default
  value. `a ?? b` yields *a* if *a* is not nil, otherwise it yields *b*.
  This is a concise and efficient (in terms of code size and execution
  time) way to write a default value substitution, which is a common
  situation when using argument values from callers, property values set
  elsewhere in the code, and function and method call results.

- The new operator `>>>` performs a logical right shift. Furthermore,
  the existing `>>` operator is now explicitly defined as performing an
  arithmetic right shift. In the past, it wasn't specified whether `>>`
  performed an arithmetic or logical shift, although in practice all
  existing implementations (as far as we know) performed an arithmetic
  shift, so existing programs shouldn't see any change.

  The difference between the arithmetic and logical right shift is the
  treatment of the vacated high-order bits. A logical right shift fills
  all vacated bits with zeros, whereas an arithmetic right shift fills
  the vacated bits with the original high-order bit of the left operand.
  Arithmetic shifts are so named because copying the high-order bit
  preserves the sign of the original value.

  The `>>>` operator isn't purely a TADS invention. Java and Javascript
  define it the same way TADS does, and likewise specify that `>>`
  performs an arithmetic shift.

- Many of the standard bundled character sets now recognize a number of
  name variations, based on naming conventions used in various other
  programming languages and applications. They're meant to make the
  character mapper a little easier to use by letting you use names that
  you might be accustomed to using from other systems, rather than
  having to remember a separate naming scheme for TADS. The new
  variations (which are all insensitive to upper/lower case) are:
  - Latin-X: In the past, these had to be called "isoN", as in "iso2"
    for Latin-2. The mapper now also accepts Latin2, Latin-2, ISO-2,
    8859-2, ISO8859-2, ISO-8859-2, ISO_8859-2, ISO_8859_2, and L2.
    (Likewise for Latin-3, Latin-4, etc.)
  - Windows and DOS code pages: The old name was "cpXXX", where XXX is
    the code page number, as in "cp1252". The mapper now also accepts
    just plain 1252, as well as win1252, win-1252, windows1252,
    windows-1252, dos1252, and dos-1252.
  - UCS-2LE: The little-endian 16-bit Unicode character sets can also be
    called UCS2LE, UTF-16LE, UTF16LE, UTF_16LE, UnicodeL, Unicode-L, and
    Unicode-LE.
  - UCS-2BE: The big-endian 16-bit Unicode character sets can also be
    called UCS2BE, UTF-16BE, UTF16BE, UTF_16BE, UnicodeB, Unicode-B, and
    Unicode-BE.

- BigNumber now uses the standard "round to nearest, ties to even" rule
  whenever rounding occurs, including calculation results and explicit
  rounding requests. This is the rounding method that most computer
  floating point systems use, because it's considered the least
  statistically biased.

  The new rule is to round to the nearest digit, or to round to the
  nearest *even* digit when exactly halfway between two digits. For
  example, rounding 104.5 to integer yields 104: the value is exactly
  halfway between 104 and 105, so we round to the nearest even digit for
  a result of 104. Similarly, rounding 1.2345 to four digits yields
  1.234, since 1.2345 is exactly halfway between 1.234 and 1.235, and
  the nearest even digit in last place is 4.

  The **old** algorithm was *almost* identical: it was "round to
  nearest, ties away from zero", which rounded to the next higher
  absolute value when exactly halfway between digits. For example,
  rounding 104.5 to integer formerly yielded 105, since we formerly
  always rounded up from the halfway point. There's no change for values
  that aren't exactly halfway between digits: rounding 102.5001 or
  103.4999 to integer both yield 103 under both the new and old rules.

- The console output formatter now renders embedded null characters
  (Unicode value U+0000) as spaces. In the past, the formatter
  considered a null to be the end of a string, which isn't consistent
  with TADS string semantics.

- The compiler is less conservative than it used to be about a certain
  optimization involving anonymous functions. In the past, every
  anonymous function expression triggered the creation of an AnonFuncPtr
  object. This object contains the anonymous function's context: the
  local variables and "self" from its enclosing code block. However,
  many anonymous functions are entirely self-contained, meaning they
  don't make any reference to their enclosing contexts. These don't
  actually need a context object, since they have no dependency on
  anything that would go in it. There's a slight performance cost to
  creating the context object, so the compiler now creates one only when
  it's actually needed.
  This change should be *almost* invisible to game code. It's possible
  to detect if you're looking for it by checking the dataType() of an
  anonymous function value: it was formerly always TypeObject, but now
  it can also be TypeFuncPtr, for cases where no context object is
  needed. Other than this (and a slight speed improvement), the change
  should be transparent.

- It's now possible to break out of an infinite loop if you should
  happen to get stuck in one evaluating an expression within the
  debugger. The debugger already let you break into normal program
  execution that was stuck looping, using a platform-defined keystroke
  or other UI action (on Windows, for example, the Workbench debugger
  uses the key combination Ctrl+Break). The same thing now works if you
  evaluate a debugger expression that gets stuck in a loop. (In the
  past, the debugger ignored the "break" command while it already had
  control. It now interrupts the expression by throwing an error.)
  ([bugdb.tads.org
  \#0000093](http://bugdb.tads.org/view.php?id=0000093))

- In past versions, the StringComparator object didn't save its list of
  character equivalence mappings properly to the image file or to saved
  game files. This caused character mappings to be lost (corrupted,
  actually, but for practical purposes lost) when they were made during
  preinit, or when restoring a game where a StringComparator with
  mappings had been created dynamically. This has been corrected.
  ([bugdb.tads.org
  \#0000085](http://bugdb.tads.org/view.php?id=0000085))

- The multi-method inherited() operator didn't work properly if used
  within a function that was replaced by another function using the
  "modify" statement. This is now fixed.

- A bug in the compiler sometimes caused a crash in a rare situation
  involving a link-time symbol conflict (in particular, the same symbol
  defined as a `grammar` rule in one module and a different type in
  another module). This has been corrected.

- A bug in the regular expression search functions prevented matching
  zero-length expressions at the end of the subject string. For example,
  searching for `'x*$'` correctly matched 'uvwx' (with a match length of
  1), but not 'uvw' (which *should* match with a length of 0). This has
  been fixed.

- A regular expression bug caused incorrect results to be returned for
  capturing groups for certain complex expression types. This was
  triggered by an expression with two wildcard closures preceding a
  capturing group preceding some fixed text. This is now fixed.
  ([bugdb.tads.org
  \#0000088](http://bugdb.tads.org/view.php?id=0000088))

- In past versions of the text-only interpreters, if an \<ABOUTBOX\>
  section contained an \<IMG\> tag with an ALT attribute, the ALT text
  was displayed. It shouldn't have been, because the text-only systems
  aren't supposed to display *anything* that's within an \<ABOUTBOX\>
  section. This has been corrected. ([bugdb.tads.org
  \#0000063](http://bugdb.tads.org/view.php?id=0000063))

- The text-only interpreters now parse and translate HTML entity markups
  ("&" sequences) within \<TITLE\> tags when setting the window title.
  (In past versions, the text-only interpreters simply displayed the
  literal text of the & sequences. The HTML interpreters didn't have
  this problem, so this change doesn't affect them.) ([bugdb.tads.org
  \#0000062](http://bugdb.tads.org/view.php?id=0000062))

- The bug fix in 3.0.18 for newline translation in UTF-16 text files
  introduced another bug, which corrupted output text when calling
  writeFile() with a string containing embedded newline ('\n')
  characters. This has been corrected. ([bugdb.tads.org
  \#0000065](http://bugdb.tads.org/view.php?id=0000065))

- <span id="compoundAsiSideEffects"></span>The compiler formerly
  generated code that was arguably incorrect for a compound assignment
  expression containing side effects in the lvalue. In the past, the
  compiler effectively expanded an expression of the form *lvalue op=
  rvalue* into *lvalue = lvalue op rvalue*. For example, "a += b" became
  "a = a + b". In most cases this is fine, but when the lvalue contains
  side effects, it results in two evaluations of the side effects. For
  example, "lst\[i++\] += 1" incremented "i" twice. For a really complex
  expression like "lst\[i++\]\[j++\]\[k++\] += 2", the "i++" side effect
  was triggered even more times, because it contains multiple implied
  lvalues.

  The correct behavior is to evaluate each subexpression in the lvalue
  only once. The compiler now generates code that does just this.

  The old behavior was only *arguably* wrong, in that the correct
  behavior wasn't really specified anywhere. But to the extent that TADS
  doesn't fully specify its expression behavior, it's reasonable to
  expect that TADS should behave like C++. C++ does have well-defined
  semantics for this situation, which the new behavior matches. Plus,
  the new behavior is in line with the obvious reading of an *op*=
  expression: the lvalue is only mentioned once in such an expression,
  suggesting that it should only be evaluated once.

- A bug in the debugger caused a crash under rare circumstances. The
  problem happened when a run-time error occurred within a callback
  function being invoked from certain built-in functions or methods, and
  you then terminated the program via the debugger UI while execution
  was still suspended at the error location. This is now fixed.

- A bug in the Vector intrinsic class caused rare, random crashes under
  certain conditions when calling mapAll(). The crashes were most likely
  with very large vectors, and only when the callback function could
  trigger garbage collection (such as by creating a new object). This
  has been fixed.

- A bug in the BigNumber class caused inaccurate results for expE(),
  raiseToPower(), sinh(), cosh(), and tanh() for certain values. The
  problem only affected a limited (but difficult to characterize) range
  of input values. For affected values, the results were still correct
  to about 17 decimal places; the inaccuracy appeared starting at about
  the 18th decimal place, so it would only have been noticeable in
  applications requiring relatively high precisions. For example, a
  program that would have been happy with the standard C "double" type
  wouldn't have noticed the bug, because the typical C double provides
  only about 15 decimal digits of precision. The problem is now fixed.

- In past versions, the ByteArray object didn't save undo information
  for File.readBytes() or ByteArray.writeInt() operations. It now saves
  the undo.

- The compiler incorrectly reported internal errors for assignments to
  objects, functions, and other global symbol names. The compiler now
  shows a regular error message instead for this type of error.
  ([bugdb.tads.org
  \#0000071](http://bugdb.tads.org/view.php?id=0000071))

### Changes for 3.0.18.1 (May 5, 2009)

- The behavior of the multi-method inherited() operator has changed. The
  operator now chooses the inherited function to call based on the
  actual argument values, rather than the formal (declared) parameters
  to the current function. This is more consistent with the inherited()
  operator for regular methods.
- A bug in the compiler, versions 3.0.17, 3.0.17.1, and 3.0.18, caused
  incorrect (too small) stack size requests to be generated for some
  functions and methods. This generally had no noticeable effect on
  valid programs, but it made it possible for an errant program (with
  infinite recursion, for example) to cause a stack overflow that the
  interpreter doesn't detect immediately, which could conceivably crash
  the interpreter. An actual crash would require an unlikely combination
  of factors, even with an errant program compiled with this bug, so
  you'll probably never notice it. Even so, if you distributed any .t3
  files compiled with t3make versions 3.0.17 through 3.0.18, we
  recommend recompiling with the current t3make version and replacing
  your previously distributed files, if it's easy for you to do so.

### Changes for 3.0.18 (April 28, 2009)

- The `inherited` operator can now be used within a multi-method to
  inherit an overridden version of the method. The new syntax
  `inherited<`*`type-list`*`>(`*`arg-list`*`)` lets you inherit a
  specific version of the multi-method, while the basic syntax
  `inherited(`*`arg-list`*`)` automatically selects the next more
  general version of the multi-method. See the System Manual section on
  multi-methods for documentation.
- The compiler pre-defines the new preprocessor symbol (i.e., macro)
  \_\_TADS3, which expands simply to the number 1. This provides an easy
  way to detect that the compiler is a TADS 3 compiler (as opposed to a
  TADS 2 compiler) for conditional compilation purposes. (This might
  seem redundant with the existing symbol \_\_TADS_SYSTEM_MAJOR, but
  \_\_TADS3 can be used in one way that \_\_TADS_SYSTEM_MAJOR can't. If
  for some reason you wanted to create a single source file that could
  be compiled under TADS 2 or TADS 3, using conditional compilation to
  handle the syntax differences between the language versions, you
  couldn't do it with \_\_TADS_SYSTEM_MAJOR. This is because TADS 2
  doesn't support \#if, which is the only way you could use
  \_\_TADS_SYSTEM_MAJOR to conditionally compile based on compiler
  version (e.g., `#if __TADS_SYSTEM_MAJOR == 3`). Since TADS 2 and 3
  both support \#ifdef, though, you can use the presence or absence of
  the \_\_TADS3 symbol to conditionally include or omit code based on
  language version. Of course, since older versions of the TADS 3
  compiler also lack this symbol, this approach requires using 3.0.17.2
  or later on the TADS 3 side.)
- In past versions, writing to text files with a UTF-16 encoding
  generated incorrect newline sequences when running on Windows. The
  problem had to do with the two-character representation of a newline
  in Windows. This has been corrected.
- In the past, multi-methods defined in one source file and called from
  another resulted in an "undefined symbol" error. This has been
  corrected.

### Changes for 3.0.17.1 (8/12/2008)

- A compiler bug introduced in 3.0.17 caused Workbench (and the
  stand-alone interpreter) to crash when loading certain games when
  compiled for debugging. The compiler was mis-calculating some internal
  data structure sizes, which effectively corrupted the .t3 file; this
  happened when the byte code for a function plus its debug symbols was
  over a certain threshold size. This has been corrected.

### Changes for 3.0.17 (8/9/2008)

- The compiler has a new feature called "multi-methods." This implements
  a relatively new object-oriented programming technique known as
  multiple dispatch, in which the types of *multiple* arguments can be
  used to determine which of several possible functions to call. The
  traditional TADS method call uses a *single-dispatch* system: when you
  write "x.foo(3)", you're invoking the method foo as defined on the
  object x, or as inherited from the nearest superclass of x that
  defines that method. This is known as single dispatch because a single
  value (x) controls the selection of which definition of foo will be
  invoked. With multiple dispatch, this notion is extended so that
  multiple values can be considered when selecting which method to
  invoke. For example, you could write one version of a function
  "putIn()" that operates on a Thing and a Container, and another
  version of the same function that operates on a Liquid and a Vessel,
  and the system will automatically choose the correct version at
  run-time based on the types of *both* arguments. This new system is
  described more fully in the *System Manual*.

- The compiler can now generate information in each object about the
  source file where the object was defined. This new information is
  stored in a new property, sourceTextGroup; this supplements the
  existing sourceTextOrder property. Since the new information takes up
  extra space in the compiled file, it's not generated by default. To
  generate it, include the new compiler option "-Gstg" in your makefile
  or command line, *or* place the directive
  `#pragma sourceTextGroup(on)` directive in each source module where
  you wish to generate the information. The \#pragma lets you
  selectively generate the information in specific source files, or even
  in specific portions of specific source files: the corresponding
  directive `#pragma sourceTextGroup(off)` lets you turn off the
  information in a section where you don't need it.

  When you turn on sourceTextGroup generation, the compiler
  automatically adds a sourceTextGroup property to each object, just as
  it automatically adds a sourceTextOrder value. The sourceTextGroup
  value is a reference to an anonymous object that the compiler
  automatically creates. One such object is generated per source module
  for which sourceTextGroup generation is activated. This object
  contains two properties: sourceTextGroupName is a string giving the
  name of the module, as it appeared in the compiler command line,
  makefile (.t3m), or library (.tl) file; sourceTextGroupOrder is an
  integer giving the relative order of the module among the list of
  modules comprising the overall program.

  sourceTextGroup is useful in cases where you want to establish the
  order of appearance in source files among objects in multiple modules.
  For a given object `x`, `x.sourceTextGroup.sourceTextGroupOrder` gives
  you the relative order within the overall build of the module where
  `x` was defined, and `x.sourceTextOrder` gives you the relative order
  of `x` among the objects defined within that module. Between the two
  values, you can establish a linear ordering for all of the statically
  defined objects in the entire program.

- The compiler now stores "links" to resource files in the .t3 file when
  compiling in Debug mode. This makes it easier to test a game that uses
  multimedia resources, by making the Build environment match the
  Release environment more precisely.

  In the past, when building in Debug mode, the compiler completely
  ignored multimedia resource files listed in the "-res" section of the
  command line or makefile. This was by design; the reasoning was that
  when you're compiling in Debug mode, you'll only be running that copy
  on your development machine, within your build environment, where all
  of the resource files are available as local files; and since the
  files are all available as separate local files anyway, we can make
  the compilation go faster by skipping the step where we copy those
  files into the .t3 file.

  This worked fine *most* of the time, but it didn't work in the
  occasional case where the resource name is different from the
  corresponding local file's name in the file system. One example is the
  Cover Art file, which is always stored in the game under the resource
  name ".system/CoverArt.jpg", which is usually *not* the same name the
  file has locally. This meant that if you tried to refer to such a
  resource via HTML (such as with an \<IMG\> tag), the resource was
  reported as missing when running the debug build.

  The new arrangement fixes this problem without giving up the time
  savings. With the new scheme, the compiler stores a **link** for each
  resource in the .t3 file: this simply records the mapping from
  resource name to local file name. The HTML renderer can then look up
  the appropriate local file for each resource, including any resources
  that have special names. As before, the actual contents of the
  resources are not copied.

  Note that none of this affects Release builds. The compiler has always
  copied the full contents of all resources into the .t3 file when doing
  a Release build, and continues to do so. Release builds continue to be
  fully self-contained, so that you only have to distribute the .t3 file
  to players, *not* the individual graphics and sound files it refers
  to.

- The compiler's status output didn't add a line break after each
  resource files being added to the project, resulting in poorly
  formatted displays. This has been corrected.

### Changes for 3.0.16 (4/10/2008)

- The Author's Kit installer now gives you an option to skip creating
  the Windows file type associations for Workbench (specifically,
  project (.t3m) files).
- The main startup routine in the library now performs an explicit
  garbage collection pass just before performing pre-initialization. In
  most cases, this is unnecessary (and harmless, obviously, apart from
  the added execution time required to perform the GC pass). However,
  under a certain combination of conditions, it can be important. In
  particular, it's important when a program is compiled so that preinit
  is performed at run-time rather than compile-time (this is normally
  the case for a "debug mode" build, but can be explicitly selected for
  a release build as well), *and* the program has pre-initialization
  code that performs global object loops. In such a program, a RESTART
  would re-run preinit, which could then encounter garbage objects still
  around from before the RESTART. The explicit GC pass just before
  preinit ensures that preinit sees only reachable objects in any global
  object loops it performs.
- A bug in the ByteArray intrinsic class caused an interpreter crash
  when copying exactly the full bounds of an array onto itself. This has
  been corrected.
- The rexReplace() intrinsic function got stuck in an infinite loop when
  the pattern to be replaced matched zero characters of the subject
  string. For example, a match pattern of "x\*" is able to match any
  number of "x" characters in a row, *including* zero of them. The
  problem was that the function simply spun its wheels, repeatedly
  finding the same zero-character match and replacing it over and over.
  This no longer occurs: the function will apply each zero-character
  replacement once only, and then move on to the next character of the
  subject string before attempting a new match.
- The rexSearch() and rexReplace() functions didn't properly take into
  account "^" (start-of-string) pattern specifiers when a starting
  offset for the search was explicitly specified. The functions
  incorrectly considered "^" to match the start of the substring
  starting at the given starting offset, whereas it should have only
  matched the start of the entire string. In other words, "^" should
  never match when the starting offset is greater than 1. This has been
  corrected.
- A bug in the t3DebugTrace() intrinsic function sometimes caused the
  debugger to stop execution at the second line after the t3DebugTrace()
  function, rather than at the next line. This happened if you used the
  "Go" command to resume execution from the point where t3DebugTrace()
  stopped, then encountered the same t3DebugTrace() call without any
  intervening debugger activity. This has been corrected.
- Comparing another object value to "self" in a global breakpoint
  expression sometimes caused the debugger to crash in past versions.
  This has been corrected.
- In the past, the compiler returned a "success" indication to the
  operating system shell as long as no error messages were displayed
  during the compilation. This was incorrect in cases where the "treat
  warnings as errors" option was enabled and one or more warning
  messages were displayed; in these cases, the compiler should have
  returned a "failure" indication to reflect the fact that warnings
  count as full-fledged errors under this option setting. This has been
  corrected.
- Applying toInteger() to BigNumber values near the capacity limits of
  the 32-bit integer type, but not exceeding them, sometimes produced
  spurious "numeric overflow" errors. In particular, values over
  2147483640 or under -2147483640 that needed to be rounded up in their
  fractional parts (e.g., 2147483640.9) produced this spurious error.
  This has been corrected.

### Changes for 3.0.15.3 (11/2/2007)

- A bug in the compiler made it impossible to refer to items in global
  scope (such as enum values or objects) in constant expressions within
  anonymous functions. For example, it was impossible to use an enum
  value or object name as a 'case' label in a 'switch' statement within
  an anonymous function. This has been corrected.
- A bug in the GrammarProd intrinsic class caused incorrect results in
  some cases for an empty production (i.e., a grammar rule consisting of
  no tokens). The problem had to do with the way the empty production
  figured its position in the input token list; since enclosing levels
  in the match tree find their positions relative to child nodes, the
  problem typically manifested itself by giving incorrect token list
  positions for one or more match levels enclosing an empty match. This
  is now fixed.

### Changes for 3.0.15.2 (9/13/2007)

- The inputFile() function now makes some additional checks when the
  filename is supplied by an active event script file. If the dialog
  type is InFileOpen, the function checks to make sure the filename read
  from the script refers to an existing file. If the dialog type is
  InFileSave, and the named file doesn't already exist, the function
  tries to create a dummy copy of the file; if that succeeds, the
  function immediately deletes the dummy copy. The function also still
  tests, as it did before, to make sure the file *doesn't* already exist
  for InFileSave dialogs. If any of these tests fail, the function warns
  the user about the problem and offers the same options it did in the
  past for the save-overwrite case: use the filename as given in the
  script, choose a different file, or cancel the script playback.
- A bug in the VM caused sporadic, unpredictable errors when finalizers
  were used. The problem affected one opcode (OPCGETPROPR0); if a
  finalizer invocation happened to interrupt this particular opcode, the
  result was unpredictable, but could include spurious run-time errors
  or corruptions of calculated results. This has been corrected.

### Changes for 3.0.15.1 (7/19/2007)

- The keyword `replaced` can now be used within anonymous functions that
  are nested in modifier functions (i.e., functions defined with
  `modify `*`funcname`*` ...`). In the past, the compiler only allowed
  `replaced` to be used **directly** within a modifier function - not in
  nested anonymous functions defined within a modifier function. There's
  no inherent reason for disallowing this construct; it was simply a
  limitation of the compiler, which has now been lifted.
- In the system library, the several internal convenience macros defined
  with the Tokenizer class (tokRuleName, tokRulePat, tokRuleType, etc)
  have been moved from the tok.t class file to the tok.h header file.
  The macros are unchanged, so this change won't affect existing code.
  The macros were formerly defined in tok.t rather than in the header
  because they were meant as private macros for internal use within the
  Tokenizer class itself, not for client code that uses the Tokenizer
  class. However, they're also useful in subclasses of Tokenizer, so
  it's desirable to have them defined in a header - that way, user code
  implementing Tokenizer subclasses can access the macros simply by
  \#including tok.h.
- The compiler is now stricter about interpreting tokens as BigNumber
  constants. In the past, the compiler treated an "E" following a
  numeric constant as an exponent signifier, even if no digits followed.
  For example, "3E-a" was taken to be the BigNumber constant "3E-0",
  followed by a separate token "a". The compiler now treats an "E" as
  the start of a separate token if no digits follow it (or the
  optional + or - sign after the "E"), so "3E-a" would now be treated as
  four tokens: "3", "E", "-", and "a".
- The compiler now displays a specific error if it finds a decimal digit
  within an octal constant value. In the past, the compiler simply
  assumed that a decimal digit terminated the octal constant token and
  started a new token. This typically led to a confusing parsing error,
  since the compiler saw two consecutive numeric constant tokens where
  the user almost always intended one. The compiler now flags a specific
  error about the ill-formed octal value, and skips any decimal digits
  following the octal constant, which makes the error much easier to
  pinpoint.
- The compiler is now strict about disallowing the old TADS 2 "\<\>"
  (unequal-to) operator. This variation was not documented, but has up
  to now been allowed.
- The compiler no longer treats `delete` as a reserved word. (It did so
  in the past as a hold-over from TADS 2, where `delete` is indeed
  reserved.)

### Changes for 3.0.15 (3/8/2007)

- When an input event script is being played back, the inputFile()
  function now prompts the user if the result would likely overwrite an
  existing file. inputFile() in this case prompts the user
  interactively, momentarily halting script playback until the user
  responds. This is described more fully in the Input Scripts section of
  the System Manual.
- The compiler reported an internal error ("too much unsplicing") in
  certain complex expressions involving multi-line string literals as
  macro arguments in embedded \<\< \>\> expressions. This has been
  corrected.

### Changes for 3.0.14 (2/9/2007)

- The raiseToPower() method of the BigNumber class incorrectly returned
  1 as the result of raising 0 to a non-zero exponent. The correct
  result should, of course, be 0 for any positive exponent, and an
  exception for any non-positive exponent (as 0^0 is undefined, and 0^n
  with n\<0 is effectively division by zero). The method now yields
  these results.

### Changes for 3.0.13 (1/19/2007)

- A new t3make option, -we, tells the compiler to treat warnings as
  though they were errors, for the purposes of determining whether or
  not to proceed with compilation after a warning occurs. When the
  compiler finds an error within a source file, it stops the build
  process after finishing with that compilation unit, requiring you to
  fix the error before continuing. In contrast, warnings do not, by
  default, interrupt the build. This is because a warning message
  indicates a situation that's *technically* correct, but which contains
  a common pitfall. Compiler warnings tend to be right often enough to
  warrant close inspection, so many programmers adhere to the discipline
  of insisting on "clean" builds every time - that is, with no warning
  messages. The -we option is a convenient way of enforcing that
  discipline. When you specify the -we option, the compiler will stop
  the build after finishing with any module that generates any warning
  messages, just as it does for error messages. If you want to
  explicitly set the default mode, where warnings do not interrupt the
  build, use the -we- option.
- A new interpreter (t3run) option, -I, runs a command script in "echo"
  mode. This works almost the same as the existing -i option, but -I
  causes all output to be displayed to the console as the script is
  read; in contrast, -i reads the script in "quiet" mode, meaning that
  no output is displayed while the script is running.
- The command script recorder and player can now handle virtually any
  input event type, not just command lines. The script mechanism can now
  handle keyboard input, hyperlinks, ad hoc dialogs, and file dialogs;
  the functions inputKey(), inputEvent(), inputFile(), and inputDialog()
  can now take their input from a script. (inputLine() and
  inputLineTimeout() have always been able to read from scripts.) To
  handle the greater range of event types, a new script file format has
  been added; files written in new format are called Event Scripts.
  Event scripts are identified by a special signature: the first line of
  the file must read `<eventscript>`, with nothing else on the line (not
  even spaces). If a script doesn't start with this signature, the
  script reader will interpret it as the original script format, which
  is now called the Command-line Script. This allows old scripts to work
  without changes; of course, Command-line Scripts can only contain line
  input events, as they always have. When you create a script with
  RECORD or the with the Interpreter's -o option, the script is now
  recorded in the new Event Script format, and the recorder will
  automatically include all event types in the script. (There's no
  option with RECORD or -o to record an old-style Command-line Script
  instead - there wouldn't seem to be much call for this, as the
  functionality in Event Scripts is a superset of that of Command-line
  Scripts.) The new scripting functionality is described in the "Input
  Scripts" chapter of the System Manual.
- The setScriptFile() intrinsic function now accepts a new type code,
  LogTypeEvent. This type signifies that a new-style Event Script should
  be created. The code LogTypeCommand, which was present in previous
  versions, continues to signify that an old-style Command-line Script
  should be created.
- Input scripts now nest during playback. In the past, reading from a
  new input script terminated reading from any input script already in
  effect. Now, the console suspends the original script, and resumes
  reading from it upon reaching the end of the new script. Scripts can
  be nested to any depth. This allows an input script to "include"
  another by using, for example, the REPLAY command within the script.
- In the past, the getFuncParams() intrinsic function didn't accept an
  anonymous function as its argument. Anonymous functions are now
  accepted.
- The inputLine() intrinsic function (in the 'tads-io' function set)
  didn't correctly map non-ASCII characters (such as accented letters)
  from the user's input to Unicode. This has been corrected.
- A compiler bug caused a crash if a "modify" or "replace" statement in
  one source module referred to a symbol that was actually defined in a
  source module that was included in the build after the first source
  file. This is an error condition anyway - a symbol has to be defined
  in the build before it can be modified or replaced, so the original
  definition has to occur in a source module listed earlier than the
  modifying module. However, the compiler now handles such an error
  properly, by displaying the appropriate error message and halting the
  build.
- A bug in File.writeBytes() caused unpredictable results, sometimes
  including an interpreter crash, if a zero or negative value was passed
  for the starting index. The starting index is now checked for range.
- Some internal changes to the portable VM and compiler code have been
  made to improve portability to 64-bit architectures.

### Changes for 3.0.12 (9/15/2006)

**This is the TADS 3.0 General Release version.**

- A couple of compiler error messages were internally mis-numbered,
  which could have caused the compiler to report the wrong error message
  for the affected error codes. These have been corrected.

### Changes for 3.0.11 (9/8/2006)

- The % operator now accepts only integer operands. (In the past, it
  failed to throw an error if a BigNumber operand was used, and instead
  produced a meaningless result.)

- A comparison of the form "a==b", where a is an integer value and b is
  a BigNumber value, now coerces the integer to a BigNumber before
  comparing it. In the past, this type of comparison coerced the integer
  to a BigNumber only when the BigNumber was the left-hand operand. This
  correction ensures that "a==b" and "b==a" yield the same results when
  comparing integers and BigNumber values. The same change applies to
  the != operator.

- In the past, the compiler reserved the names `void`, `int`, `string`,
  `list`, `boolean`, and `any`. These names are no longer reserved and
  thus can now be used freely as symbol names (for local variables,
  object names, etc). (These names were originally reserved in
  anticipation of the eventual introduction of optional static type
  declarations. Reserving the keywords ensured that no one would write
  code that would be incompatible if the feature had ever been added.
  The static typing feature will definitely not appear in the official
  3.0 release, and at this point it seems very unlikely to be in any
  future version, so there's no longer any good reason to reserve these
  names.)

- A compiler bug caused invalid code to be generated in the following
  situation:

         x: object
           m(p) { }
           n = (p)  // bad code generated here
           p = nil
         ;

  The bad code resulted from the compiler mistakenly using the local
  symbol table from the method m(p) while generating the code for n; so
  the compiler incorrectly treated p as a parameter variable in n, even
  though n has no parameters. This has been corrected.

  The local-to-Unicode character set mapper now converts any unmappable
  character found in a source string to Unicode U+FFFD, the standard
  Unicode "replacement character." In the past, the mapper converted
  unmappable characters to question marks, "?". Converting to question
  marks was undesirable because of the ambiguity it created. When
  compiling source code, for example, it led the compiler to think that
  the source file literally contained a question mark where the
  unmappable character was found; the diagnostics the compiler reported
  in these cases were thus confusing and misleading. Unicode defines the
  character U+FFFD specifically for the purpose of replacing source
  characters that cannot be mapped to Unicode; this gives the compiler
  and other consumers of mapped characters an unambiguous indication
  that the original input character was unmappable. The compiler uses
  this new information to report a specific diagnostic message when it
  finds a U+FFFD in the input stream.

### Changes for 3.0.10 (8/17/2006)

- Libraries (".tl" files) can now easily include their own multimedia
  resources in a build. In the past, there was no direct support for
  multimedia resources in libraries; an author using a library that
  included multimedia resources would have had to copy the library
  resources into the game's directory tree and then explicitly add those
  resources to the build. This is no longer necessary. Two new features
  support library resources:
  - First, Workbench for Windows now automatically adds each top-level
    library's directory path to the search list for individual resource
    files (.jpg, .png, .ogg, etc). Note that a "top-level" library is a
    library included directly in the Project window; a library included
    from within another library isn't top-level, so it's directory won't
    be included in the search list. When running the game under the
    debugger, this allows individual resources to be found under any
    library's directory tree.
  - Second, the compiler accepts a new "resource:" keyword in library
    (.tl) files. After this keyword, list one individual resource file,
    or one directory containing resource files. You can use this keyword
    as many times as you like to include multiple files or directories.
    As usual for library files, the file or directory mentioned after
    the "resource:" keyword is given with a URL-style relative path,
    relative to the library containing the library file.

  These new features allow a library to include multimedia resources
  with complete transparency to game authors using the library - game
  authors won't have to do anything extra to use the library multimedia
  resources. Library authors only have to perform a few easy extra
  steps. First, create a subdirectory of your library directory to
  contain the resources. For example, if your library is called
  mylib.tl, create a "mylibres" subdirectory under the directory
  containing mylib.tl. (The name isn't important, but it's desirable to
  pick a unique enough name that there won't be any conflict with other
  libraries that game authors might also be including. Your resources
  will be named relative to the subdirectory name, so don't pick a
  generic name like "resources" - it's best to use a name that
  incorporates your library name.) Second, put all of your library's
  resources (.jpg files, .png files, etc.) in your new subdirectory.
  Third, add the line "resource: mylibres" to your .tl file; this will
  tell the compiler to bundle all of the files in the "mylibres"
  subdirectory into the compiled .t3 file when a game includes your
  library. Finally, in the HTML that your library generates to reference
  your resources, refer to them using your subdirectory path - for
  example, you'd write \<IMG SRC="mylibres/compass.png"\> to refer to an
  image resource file.
- The [t3GetStackTrace()](sysman/t3vm.html) function (in the 't3vm'
  function set) has a new optional argument that lets you get
  information on a single stack level. This provides more efficient
  access to stack trace information in cases where you only want
  information on a specific level, such as the immediate caller.
- When a game is compiled into a stand-alone executable (on systems
  where this is implemented, such as Windows), it's now possible to pass
  command-line arguments to the embedded .t3 program. To do this, use a
  dash ("-") to separate the interpreter arguments from the program
  arguments. The stand-alone version of the interpreter is also now
  strict about not accepting an image file argument; this means that you
  can't use a bundled stand-alone game to run a different .t3 image
  file.
- You can now write directly to the main game window's log file, if one
  is open. (This is the log file that's opened via the setLogFile()
  function - the one that the library creates when the player types the
  SCRIPT command.) There are two ways to write to the log file. The
  simple way is to use the new \<LOG\> tag - this tag is simply the
  complement of the \<NOLOG\> tag: any text enclosed between \<LOG\> and
  \</LOG\> will be included only in the log file, and hidden in the game
  window. This approach is usually the right one, because you can mix
  your log-only text directly with other output text, ensuring that it's
  processed through the usual stack of output filters and the like.
  However, on occasion it's useful to be able to bypass the usual output
  stream mechanism, which brings us to the second way: you can use
  logConsoleSay(), passing in the special handle value
  MainWindowLogHandle as the handle. Using this approach bypasses
  mainOutputStream and all of its filters, and goes directly to the log
  file.
- The compiler now warns on nested block comment ("/\* ... \*/"
  comments). If the compiler finds a "/\*" sequence within a block
  comment, it generates a warning. (Nested block comments aren't
  allowed, so a "/\*" within a block comment usually indicates that a
  previous comment wasn't terminated properly. The warning makes it
  easier to notice such cases.)
- The compiler now automatically word-wraps error messages to 80 columns
  when the "verbose" error message option is selected. This makes the
  long error messages much easier to read, especially in Workbench,
  which has an essentially infinitely wide message window - the
  word-wrapping saves you the trouble of manually scrolling horizontally
  to see the full message text.
- A bug in the compiler sometimes caused a crash if a 'foreach'
  statement was used in a source file which never \#included the system
  headers. The compiler correctly flagged the error, but didn't always
  recover properly. The compiler now handles this situation gracefully.
- A bug in the compiler caused the compiler to ignore the last line of a
  library (.tl) file when the last line didn't end in a newline
  character of some sort. The same bug affected Workbench on Windows.
  This has been corrected.
- A bug in the compiler caused incorrect results when a 'grammar'
  statement's token list started with an empty alternative. For example,
  the token list "( \| 'x')" was compiled incorrectly. This problem only
  occurred when the empty alternative was the *first* element of the
  entire token list. This has been corrected.
- In the past, the TadsObject type didn't retain 'undo' information when
  the superclass list was changed with setSuperclassList(). This meant
  that if an object's superclass was changed, an 'undo' operation didn't
  properly restore the original superclass list. This has been
  corrected; this undo information is now properly retained and applied.
- A bug introduced in 3.0.9 caused the interpreter to misinterpret
  certain Unicode characters outside of the plain ASCII range when
  entered on a command line. This has been fixed.
- A bug in TadsObject.setSuperclassList() caused sporadic problems. The
  bug was most likely to manifest itself as a stack overflow error when
  a call to self.setSuperclassList() was the first (or nearly the first)
  executable code within a method. The bug is now fixed.
- The regular expression parser didn't accept the special character
  pattern \<tab\>, which is documented as matching the character '\t'
  (or, equivalently, '\u0009'). This has been corrected.
- The regular expression parser didn't formerly classify as whitespace
  several control characters that are conventionally considered
  whitespace. This was due to a strict interpretation of the character
  properties defined in the Unicode character database, which defines
  all of the ASCII control characters as class "Other" rather than
  "Separator." The Unicode database has some additional property
  information, though, that does mark the appropriate control characters
  as whitespace, and the character classifier now takes this extra
  information into account. This means that characters \u0009 (tab),
  \u000A (line feed), \u000B (line tab), \u000C (form feed), \u000D
  (carriage return), \u001c (IS4), \u001d (IS3), \u001e (IS2), and
  \u001f (IS1) are now considered whitespace, and thus match the
  \<space\> character class pattern in regular expressions.
- In the past, the compiler always assumed it was running under a DOS
  box, so it used the DOS box code page for any messages it displayed.
  On most systems, depending on localization, the DOS box uses a
  different code page from the Windows code page used by native Windows
  applications; this is because the DOS box is designed for
  compatibility with old MS-DOS applications, which sometimes rely upon
  the DOS line-drawing characters and so forth. This occasionally caused
  odd character mapping problems in error messages when compiling from
  Workbench, because Workbench uses the standard Windows code page
  instead of the DOS code page. This has been corrected, as follows: the
  compiler now checks to see if it's associated with a DOS box window,
  and uses the DOS box code page for its error messages if so, or the
  regular Windows code page if not.

### Changes for 3.0.9 (8/29/2005)

- The banner API has a new pair of style flags: BannerStyleHStrut
  ("horizontal strut") and BannerStyleVStrut ("vertical strut"). These
  style flags let you specify that bannerSetSize() should take a child
  banner's width (horizontal strut) and/or height (vertical strut) into
  account when figuring the parent banner's content size. By default,
  only the contents of the parent banner are considered, but these new
  styles let you include a child's contents in the parent banner's size
  calculation.
- The File intrinsic class has a new feature in its various "open"
  methods. The filename passed to an "open" method can now be one of a
  set of distinguished values (defined in file.h) that identify
  "special" files. These are files that are meant to be used for
  particular purposes. Rather than opening these files by name, you open
  them by specifying their special identifiers. The interpreter
  determines the actual name and location of a special file in the local
  file system. This allows the interpreter to use different names of
  paths on different systems, to better conform to local conventions.
  Currently, there's only one special file defined: LibraryDefaultsFile,
  which is a text file that's used to store the library's global
  settings.
- The new GrammarProd method [getGrammarInfo()](sysman/gramprod.html)
  provides programmatic access to information on GrammarProd objects,
  which allows the game to retrieve full information on the 'grammar'
  statements in the source code. Sample code demonstrating how to use
  the new method to display a production's internal information in
  human-readable format is included in the samples directory, in the
  file gramdisp.t.
- The interpreter now uses the default file-contents character set
  rather than the display character set as the default for log file
  output. On most systems, this change won't have any noticeable effect,
  as the default display and file-contents character sets are usually
  the same anyway. However, on a few systems, the display and
  file-contents character sets can differ; it makes more sense on these
  systems to use the file-contents character set for log files than it
  does to use the display character set, since it's usually desirable to
  treat log files as ordinary text files.
- The new interpreter option "-csl *charset*" lets you explicitly
  specify the character set for log files, overriding the default. (The
  default log file character set is the file-contents character set, as
  described above.)
- The logConsoleCreate() function now accepts nil for the character set
  argument. This chooses the default log file character set.
- In tadsio.h, the constant InEvtNotimeout has been renamed to
  InEvtNoTimeout (that is, the "T" in "Timeout" has been capitalized).
  This change is simply cosmetic, for better consistency with the naming
  convention that each word in a symbol name starts with a capital
  letter. (The "o" in "Timeout" is still a minuscule, and this is
  consistent with the naming convention: in computerese, "timeout" is
  usually considered a single word.) To avoid breaking compatibility
  with code based on previous versions, the old name is still defined as
  a synonym for the new name.
- The Vector class's constructor now throws an error ("value out of
  range") if the maximum-length argument exceeds 65535, which is the
  maximum number of elements that a Vector can have. (In the past,
  attempting to create a vector with a maximum length of more than 65535
  appeared to succeed, but didn't really; it actually created a vector
  with a maximum of *n* mod 65536, where *n* was the given length.)
- The compiler incorrectly considered the statement following a
  'do-while' loop reachable if the loop's condition wasn't a constant
  'true' expression, even if the condition itself was never reachable
  and the loop contained no 'break' statements. This caused the compiler
  to issue spurious warnings in certain obscure situations, such as when
  such a 'do-while' was at the end of a function that had returned
  values elsewhere; it also caused the compiler to fail to generate an
  "unreachable statement" warning when a statement followed such a loop.
  The compiler now correctly realizes that the statement following such
  a loop is unreachable, and generates control flow warnings
  accordingly.
- A compiler bug sometimes caused problems when generating code
  involving a nested anonymous function (that is, an anonymous function
  defined within another anonymous function), which was defined within
  an object method, *and* which made reference to local variables
  defined within two or more enclosing lexical contexts. The problem
  only affected code with all of these attributes, and then only showed
  up some of the time. The problem manifested itself as a spurious
  run-time error ("invalid index operation - this type of value cannot
  be indexed") when the nested anonymous function was invoked. This has
  been corrected.
- A bug in the compiler caused sporadic problems that sometimes included
  crashing the compiler when source code contained a constant expression
  involving a list indexed by a value exactly one greater than the
  number of elements in the list, as in "\[1,2\]\[3\]". The problem only
  occurred when everything in the expression - all of the list elements,
  as well as the index value - was a constant. This has been fixed.
- Due to a bug, the compiler didn't recognize the "^=" (XOR-and-assign)
  operator. This has been corrected.
- A bug in the rexGroup() function caused the interpreter to crash in a
  particular, rare situation: specifically, when rexGroup() was called
  immediately after a call to rexSearch() or rexMatch() that caused a
  run-time error. This has been corrected.
- A bug in the interpreter sometimes caused unpredictable behavior,
  including crashes, when t3SetSay() was used to set a property pointer
  handler, and a double-quoted string was then displayed from within a
  function (not an object method). This has been fixed.
- A bug in the interpreter's console-output subsystem's HTML mini-parser
  caused subtle problems in some rare cases with the full multimedia
  interpreters (but not in text-only interpreters). For the most part,
  in the full HTML interpreters, the console subsystem just passes HTML
  markups directly through to the HTML renderer. It does, however, keep
  track of HTML sequences for its own purposes. One of these is to apply
  the "\\" and "\v" (capitalize and un-capitalize) flags to actual text
  rather than to HTML markups. The bug caused the HTML tracker to lose
  track of where it was in an HTML sequence when a tag included quoted
  attribute values. The only known symptom of the bug was that a "\\" or
  "\v" flag that appeared immediately before an HTML tag that contained
  quoted attribute values was sometimes misapplied to text within the
  HTML tag, effectively losing the effect of the flag. This has now been
  fixed.
- A bug in the Dictionary class caused problems when setting a string
  comparator object that wasn't a StringComparator object. The
  Dictionary allowed setting the new comparator, but would then generate
  a spurious error (usually "invalid type") on calling any of the
  methods that called comparator methods (addWord, findWord, etc). This
  has been corrected.
- The Vector.copyFrom() method had a bug that caused the wrong number of
  elements to be copied in some cases. In particular, when the
  destination vector had to be expanded to hold the new elements, the
  method copied one fewer element than was requested. This has been
  fixed.
- A compiler bug caused duplicate "unreachable statement" to be
  displayed when a 'switch' contained a case with an unreachable 'break'
  statement. The duplicate messages no longer occur.
- Due to a bug, the compiler sometimes crashed if a 'switch' statement
  contained an unreachable 'break' statement in one of its cases, *and*
  the statement immediately after the 'switch' was also unreachable.
  This has been fixed.
- The compiler is now more consistent about where double-quoted strings
  are allowed and not allowed. First, superficial parentheses are now
  accepted around double-quoted strings wherever the strings would
  otherwise be legal. Second, the comma operator can now be used to
  juxtapose two or more double-quoted strings; the effect is simply to
  display the strings in the order given, as though they had been
  concatenated into a single string. Third, the compiler formerly
  accepted double-quoted strings, incorrectly, if they were used within
  the 'true' or 'false' operands of a '?:' operator that was embedded
  within any larger expression. The compiler now correctly flags this as
  an error.
- The compiler is now stricter about flagging errors for a few
  syntactically invalid constructs that were formerly accepted. It's
  probably counterintuitive that more error messages are a good thing,
  but, really, they are in cases like this - if a construct is invalid,
  you're better off if the compiler catches it and tells you about it,
  because otherwise the compiler is going to do something poorly defined
  with the input. Without an error message, it won't be obvious that
  anything is amiss until the program starts behaving unexpectedly at
  run-time. The compiler now properly flags errors when it detects these
  constructs. Specifically, the compiler now enforces the following
  grammar rules:
  - Each formal parameter in a 'propertyset' declaration, including the
    "\*" parameter, must be separated by exactly one comma from adjacent
    parameters.
  - 'transient' cannot be used in the definition of a new template -
    that is, "transient *class* template ..." is illegal.
  - Empty templates ("*class* template;") are illegal.
  - Parentheses are required around the condition expression of a
    do-while statement.
- The compiler now allows "local" declarations to be labeled (via
  regular labels as well as "case" and "default" labels). In the past,
  the compiler didn't allow labeled local declarations. There wasn't any
  good reason for this restriction; it was just a quirk of the way the
  compiler's grammar was defined.
- The toString() function formerly failed on conversions to base 2 of a
  value over 262143, with a run-time exception. This has been corrected,
  so the function should now properly convert any 32-bit integer value
  to a base 2 string representation.
- The toInteger() function now accepts base 2 as the input format.
- The compiler is now more tolerant of different newline formats in
  library (.tl) files. In the past, the compiler generally expected .tl
  files to conform to local newline conventions; this made it more
  difficult to re-use libraries on different operating systems, since it
  was sometimes necessary to convert newlines first. Source code files
  (.t and .h files) were never affected by this, but the part of the
  compiler that read .tl files wasn't as flexible. The compiler's .tl
  file reader now accepts essentially any newline format: it will accept
  newlines consisting of CR-LF sequences, LF-CR sequences, simple CR
  newlines, and simple LF newlines. It doesn't matter what your
  computer's native newline conventions are - every port of the compiler
  will now accept any of these formats.
- Due to a bug, the compiler's macro preprocessor didn't properly expand
  macros that included the \#ifempty or \#ifnempty operators. In
  particular, any text in the macro's definition prior to the \#ifempty
  or \#ifnempty was effectively discarded; the text wasn't included in
  the expansion. This is now fixed.

### Changes for 3.0.8 (9/12/2004)

- The compiler now enforces unique naming for all of the modules in a
  project. Using the same name for two (or more) modules can cause
  problems, mostly because both modules would have the same filename for
  their object files and thus one would overwrite the other. In the
  past, when a module name conflict caused this kind of problem, the
  compiler reported the errors caused by the name collision, but it
  wasn't always easy to figure out that the name collision was the root
  cause. To avoid this potential source of confusion, the compiler now
  checks the entire project for module name collisions, and flags an
  error if any collisions are found.
- The "file safety" levels have changed slightly to provide better
  security against malicious game programs. First, level 2, which
  formerly provided global read access but no write access, now instead
  provides read/write access to the current working directory only (the
  game isn't allowed any access to files outside of the working
  directory). Second, the default safety level is now level 2. In the
  past, level 1 (read from any file/write to current directory only) was
  the default, which left open the possibility that a game could access
  data outside of the working directory. A malicious game could
  conceivably have exploited this by, for example, secretly copying
  sensitive data to the game directory for later use by a coordinating
  network worm, or by encoding the data in a hyperlink (displayed in an
  HTML-enabled game) that takes the player to a spyware site when
  clicked. The new default setting should effectively eliminate these
  risks by barring access to any files outside of the working directory.
- Several of the system headers formerly lacked \#include directives for
  other headers they depended upon. This didn't cause problems most of
  the time, since the necessary headers were usually included from
  somewhere else anyway, but it meant that you had to include system
  headers in the right order to avoid compiler errors. Each of the
  system headers now explicitly includes any other headers it depends
  upon, which ensures that each system header can be included in
  isolation, and in any order with respect to other headers.
- The saveGame(), restoreGame(), and restartGame() intrinsic functions
  can now be called from recursive VM invocations (that is, from
  contexts where a call to an intrinsic function or method has invoked a
  byte-code callback function, such as an anonymous function passed to
  an iteration method on a collection object). This restriction was
  needed in the distant past, but it's been vestigial since version
  3.0.5a (when the save/restore mechanism was overhauled to exlude the
  call stack and execution context from the saved state information).
  Since the restriction is no longer necessary, it's now been removed.
- In the intrinsic function getLocalCharSet(), the new constant
  CharsetFileCont can be used to retrieve the name of the character set
  typically used for the contents of text files on the local system.
  (Note that this is only the *typical* character set for text files on
  the local system; there's no guarantee that any particular file uses
  this character set. The actual character set of a given text file is
  determined by the user and application that created the file.)
- In tadsio.h, the constant CharsetFile (for use with the
  getLocalCharSet() function) has been renamed to CharsetFileName. The
  name change is to emphasize that the constnat refers to the character
  set used in the local file system for *names* of files, as opposed to
  the *contents* of text files.
- The compiler sometimes incorrectly complained about a missing option
  argument when a "-x" option (with a valid argument supplied) was used
  at the very end of a command line. This has been corrected.
- A bug in the compiler occasionally caused floating point constants
  that included exponential ("E" suffixes) to be mis-parsed. When this
  happened, one or more spurious, random extra digits of precision were
  added to the end of the number's mantissa. This has been corrected.

### Changes for 3.0.7 (6/12/2004)

*There are no changes to the compiler or interpreter core in this
release. The only changes in the adv3 library and the Windows HTML TADS
interpreter.*

### Changes for 3.0.6q (5/9/2004)

*There are no changes to the compiler or interpreter core in this
release. The only changes are in the adv3 library and the Windows HTML
TADS interpreter.*

### Changes for 3.0.6p (4/25/2004)

- The regular expression parser now accepts the special character codes
  \<lbrace\> and \<rbrace\> for left and right "curly" braces, "{" and
  "}", respectively. Since curly braces are special characters in
  regular expressions, it's convenient to have named character codes for
  them.

- In the past, the regular expression parser accepted a closure modifier
  (a "\*", for example) directly following an assertion expression.
  Since assertions don't consume any input text, repeating one with a
  closure doesn't change the meaning of an expression, so a closure
  following an assertion is meaningless. However, doing so had the
  undesirable effect of creating an infinite loop, as the regular
  expression matcher tried pointlessly to find out how many times a
  successful assertion could be successful (the answer is always: as
  many times as you try). The regular expression parser now avoids such
  infinite loops by simply ignoring any closure modifier that's applied
  to an assertion. (Note, however, that you can still trick the parser
  into building an infinite loop with a more complex expression. For
  example, you can enclose one or more assertions in parentheses, and
  then apply a closure to the parenthesized group. The regexp parser
  isn't sophisticated enough to detect these more subtle infinite loops;
  it can only detect the obvious kind where a closure is applied
  directly to an assertion.)

- A bug in the compiler caused incorrect results when an anonymous
  function referred to a property of "self," when the function was
  defined within a list value of a property. The property evaluation
  within the anonymous function typically yielded nil in these cases,
  even when that property had a non-nil value in the object containing
  the property with the list value containing the anonymous function.
  The same problem showed up whether the property containing the list
  value was defined with the ordinary "prop = val" syntax or with a
  template. This has been corrected; properties of self will now yield
  correct results in these cases. To be more concrete, in the example
  below, evaluating testObj.prop1\[1\]() should display "hello!" on the
  console, and now does this correctly; but in the past, this example
  displayed nothing, because the evaluation of prop2 within the
  anonymous function yielded nil.

        testObj: object 
          prop1 = [ {: say(prop2) } ] 
          prop2 = 'hello!'  
        ;

- A bug in the compiler caused the compiler to crash in some cases when
  presented with an anonymous function within a list value of an object
  property defined with a template. The problem has been corrected.

- The compiler incorrectly reported a standard-level warning when a
  function or method "list parameter" was unused within the function or
  method. (A list parameter is a formal parameter defined in square
  brackets to indicate that it receives a list containing the actual
  parameters, which can vary in number, when the method is called.) The
  compiler also incorrectly reported the warning as an assigned but
  unused value; it should have reported it as an unused parameter
  instead. The compiler now reports the correct warning, and only
  reports it at "pedantic" level; this makes the handling of list
  parameters consistent with the treatment of ordinary formal
  parameters.

### Changes for 3.0.6o (3/14/2004)

- The MIME type for saved position files has been changed to
  "application/x-t3vm-state". The Windows installers have been updated
  to reflect the new MIME type.

### Changes for 3.0.6n (3/6/2004)

- The debugger now automatically includes "self" in the local variable
  list whenever examining a frame in which "self" is valid.
- On Windows, the installers now add the MIME type for the compiled game
  file type (.t3) and the saved position file type (.t3v) to the system
  registry. This information can be helpful to applications,
  particularly those that perform file transfers. (The MIME type for a
  compiled game is "application/x-t3vm-image", and the type for saved
  position files is "application/x-t3vm-save".)
- A compiler bug caused the compiler to crash when certain obscure kinds
  of syntax errors occurred inside nested object definitions. This has
  been corrected.
- A bug in the compiler caused the compiler to crash when it was
  attempting to parse a one-line function or method that contained an
  unclosed anonymous function. The problem was most likely to be seen
  when the errant one-liner was the last thing in a source file. The
  compiler now generates appropriate error messages and terminates
  normally.
- A bug in the ByteArray class caused the VM to crash when a ByteArray
  was used as a key in a LookupTable. This has been corrected.
- A bug in the BigNumber class caused the VM to crash in some cases when
  a string was used as the source value to construct a new BigNumber.
  This should now work reliably.
- A bug in the debugger caused a crash when execution stopped inside an
  anonymous function with no 'self' context. The most common place to
  encounter this problem was at a run-time error in an anonymous
  function defined inside a list, such as in an EventList object. The
  problem has been corrected.
- On Windows, the Author's Kit installer failed to create the
  samples\obj subdirectory. That subdirectory is required to build the
  sample game (sample.t3m) included in the kit, so you had to manually
  create the directory before you could compile the game. The installer
  now automatically creates the directory.
- The BigNumber class incorrectly returned a result of zero when
  dividing zero by zero. (This only happened when the dividend was zero;
  for other dividend values, a divide-by-zero exception was correctly
  thrown.) This now throws a divide-by-zero exception.

### Changes for 3.0.6m (11/15/2003)

*Note: 3.0.6l was a library-only release, so there was no system release
called 3.0.6l.*

- The propNotDefined mechanism is now invoked when 'inherited' fails to
  find a base class implementation of the method being inherited. This
  works almost exactly the same way it does when propNotDefined is
  invoked during a normal method/property call, with only one
  difference: when 'inherited' fails to find a base class property, it
  searches for a 'propNotDefined' using the same search pattern it used
  to seek the original inherited property. For example, consider this
  code:

        export propNotDefined;

        class A: object
          propNotDefined(prop, [args]) { "This is A.propNotDefined\n"; }
        ;

        class B: A
          propNotDefined(prop, [args]) { "This is B.propNotDefined\n"; }
          p1() { inherited(); }
        ;

        main(args)
        {
          local x = new B();
          x.p1();
        }

  When this program is run, the result displayed will be "This is
  A.propNotDefined". B.p1() attempts to inherit the base class
  definition of p1(); when it doesn't find an inherited definition, it
  searches for propNotDefined() using the same search pattern it used to
  find the inherited p1(). That is, the search starts with B's
  superclass, because that's where the search for the inherited p1()
  started from.

- The t3SetSay() intrinsic function now returns the previous default
  output function or method. (The return value corresponds to the
  argument value: if the argument sets a new function pointer, the
  return value is the old function pointer; if the argument is a new
  property ID, the return value is the old property ID.) This allows
  code to save the old value for later restoration, if desired. In
  addition, the new special argument values T3SetSayNoFunc and
  T3SetSayNoMethod can be specified to cancel any existing default
  output function or method, respectively, and the function returns
  these values when needed to indicate the absence of a previous
  setting.

- The t3SetSay() function now accepts an anonymous function as the
  default output function. (In the past, only a regular named function
  was acceptable.)

- When propNotDefined() is invoked, the interpreter now sets
  'targetprop' to &propNotDefined. In the past, the interpreter
  incorrectly set 'targetprop' to the property originally invoked. This
  was incorrect; one important consequence was that it didn't allow
  propNotDefined() itself to use 'inherited' to invoke the base class's
  implementation.

- The compiler now automatically adds a property called
  'sourceTextOrder' to each non-class object defined in a source file.
  The value of the property is an integer giving the object's order in
  the source file in which it's defined. This value is defined to
  increase monotonically throughout a source file, so you can use it to
  sort a collection of objects into the same order in which they appear
  in the source text. This property is useful when you want to create an
  initialized structure of objects (such as a list or a tree), and you
  want objects within the structure to have the same order at run-time
  that they have in the source text. In the past, there was no
  straightforward way to guarantee source text ordering, because the
  compiler and linker assign object ID's in arbitrary order. This new
  property is guaranteed to reflect the original source text order, so
  you can use it to initialize the run-time order. Note that a 'modify'
  statement doesn't assign a new sourceTextOrder to the underlying
  object; the original sourceTextOrder is retained for a modified
  object. Note also that sourceTextOrder only tells you the relative
  order of objects within a single source file; the compiler resets the
  counter at the start of each new source file, so it's not meaningful
  to compare sourceTextOrder values for objects in different source
  modules.

- The toInteger() function now accepts an integer value as its first
  argument. If the first argument is an integer, the function simply
  returns the same value; the optional second argument (the radix value)
  is ignored if present.

- The BigNumber constructor now accepts another BigNumber as the source
  value. This creates a new BigNumber with the given source value at an
  optional new precision, rounding the original value if the new
  precision is less than that of the source value.

- The BigNumber method formatString() incorrectly returned an empty
  string when formatting a fractional number if the maximum digit count
  for formatting was insufficient to reach the first non-zero digit of
  the fractional value. For example, 0.0001.formatString(3) returned an
  empty string. The method now returns '0' for these cases.

- In most of the character-mode interpreters, if a line of highlighted
  or colored text appeared just before a "MORE" prompt, subsequent text
  was incorrectly highlighted or colored like the line before the "MORE"
  prompt. This has been fixed.

- The character-mode interpreters very occasionally crashed on exit, due
  to a bug in the termination code. This has been corrected.

- In most of the character-mode interpreters that support the "-plain"
  mode, the interpreter is now more thorough about flushing the standard
  output before stopping to read input. This makes the plain mode
  interoperate better with other programs using "pipes" and similar
  OS-specific input/output redirection. This change pertains to the
  MS-DOS and Unix versions, and to any other platforms based on the
  common character-mode layer (known technically as "osgen3").

- The rand() function now accepts a Vector as its argument. A vector
  argument behaves the same as a list argument: the function randomly
  chooses one of the elements of the vector and returns it.

- A bug in the TadsObject.createInstanceOf() method caused an incorrect
  value to be left on the VM stack during creation of the new object.
  This showed up as an incorrect argument value if a method was invoked
  on the new object as part of the createInstanceOf() expression. This
  has been corrected.

- The text-only interpreters incorrectly paid attention to a \<BODY\>
  tag within an \<ABOUTBOX\> tag, setting any color scheme specified in
  the \<BODY\> tag. This improperly set the main text window to the
  color scheme intended only for use inside the about-box. This no
  longer occurs.

- The forEachAssoc() method of the List and Vector intrinsic classes
  incorrectly passed a zero-based index for the 'key' parameter to the
  callback (that is, the first element was identified by index 0, the
  second by index 1, etc., C-style). This should have been a one-based
  index for consistency with all of the other indexing operations for
  List and Vector. This is now fixed.

- Vector.setLength() will now throw an error if the given length is less
  than zero. (In the past, it accepted an invalid length, leading to
  unpredictable results.)

- Under certain conditions, the debugger didn't stop in response to a
  "Break" key (Ctrl-C, Ctrl+Break, or whatever key is appropriate to
  local convention). In particular, if a single line of code contained
  an infinite loop, and the user ran the program, broke into the loop
  once, and then resumed execution, the debugger ignored subsequent
  break keys. This has been corrected.

- The compiler incorrectly reported errors in the branches of an 'if'
  statement at the line of the 'if' itself if the branches were bare
  statements (not enclosed in braces). The same applied to 'while',
  'for', and 'do while' statements when their bodies were bare
  statements. The compiler now reports these errors at the sub-statement
  locations.

- The compiler generated an incorrect debugger line number record under
  certain obscure circumstances: if the source file contained an object
  or class based on multiple superclasses, and the class didn't define
  an explicit constructor, then the compiler generated an incorrect line
  record for the last executable line of code in the file. This is now
  fixed.

- The compiler now shows Unicode escape sequences when displaying an
  error message containing characters from the source file that can't be
  represented in the compiler console character set. For example, if
  you're running the compiler in a terminal window on Unix, and your
  terminal window is set up to display Latin-1 (ISO-8859-1) characters,
  and you're compiling a source file prepared in Latin-2, your terminal
  window would be unable to correctly display some of the characters in
  the source file, because Latin-2 has characters that aren't part of
  Latin-1. In the past, if any of these "unmappable" characters were
  shown as part of a compiler error message, the compiler showed them as
  question marks. Now, the compiler shows them as "backslash" escape
  sequences. For exampe, Latin-2 character 171, "T with caron," would be
  displayed as "\u0164", since its Unicode code is 0x164. This change
  doesn't affect the display of compatible characters - all mappable
  characters will still be displayed in the local character set. This
  only affects characters that were formerly displayed as question
  marks.

- The default "file safety level" is now 1, which allows reading from
  any file and writing only to the current working directory. This
  default setting provides games with reasonable flexibility, but helps
  prevent the possibility that a malicious author can modify important
  files on your hard disk by limiting writing operations to the game's
  working directory only. You can override this using the "-s" option if
  you want to set a more permissive or more restrictive safety level.

- In Workbench for Windows, the "Build for Release" command didn't
  properly invoke the "t3res" command for building external resource
  files (.3r0, etc). This now works properly.

- A problem in the debugger caused sporadic bad behavior when a
  finalizer method threw an exception (out of the finalize() method;
  throwing around exceptions within a finalizer was fine, as long as the
  exception was caught entirely within the finalizer). This manifested
  itself in numerous different ways, ranging from no visible effects to
  full Workbench crashes. The problem only occurred in the debugger; the
  regular non-debug VM didn't have the problem. This has now been
  corrected.

- The VM now recovers more gracefully from stack overflow exceptions. In
  the past, stack overflows tended to be unrecoverable because the VM
  would usually encounter a second stack overflow in the course of
  trying to create an exception object to represent the original stack
  overflow, forcing the VM to terminate the game summarily to avoid an
  infinite loop of exceptions thrown while handling exceptions thrown
  while handling exceptions, ad infinitum. The VM now keeps a small
  emergency reserve of stack space for handling stack overflow errors,
  which should in most cases allow an exception object to be created
  normally, which in turn allows the game to catch and handle the
  exception just like any other run-time error.

- The debugger now gives you more flexibility in recovering from stack
  overflow errors. In the past, if your program caused a stack overflow
  (due to infinite recursion, for example), the debugger itself was
  unable to evaluate expressions without itself encountering stack
  overflows, since the debugger shares the stack with the VM. The
  debugger now holds some of the stack in reserve specifically for
  handling stack overflows; when a stack overflow occurs, the debugger
  uses the reserve for its own purposes, allowing you to evaluate
  expressions and carry on normally within the debugger. This makes it
  easier to figure out why the stack overflow occurred. Note that you
  can often use the debugger to recover from a stack overflow by
  manually moving the execution pointer to a 'return' statement (or the
  end of the method), breaking off the infinite recursion that caused
  the overflow.

- The debugger now shows anonymous functions more descriptively in stack
  traces. In the past, these showed a string like
  "\[1234\].prop#0(5,6)"; now, the debugger shows "{anonfn:1234}(5,6)"
  instead. The "1234" is an internal object identifier for the anonymous
  function; this conveys no specific human-readable meaning other than
  to distinguish one function from another. The corresponding change has
  also been made in reflect.t, in reflectionServices.formatStackFrame().

### Changes for 3.0.6k (8/17/2003)

- The debugger now supports stop-on-change conditional breakpoints. When
  you create a breakpoint with a condition expression, the debugger now
  offers a choice between stopping when the expression evaluates to true
  or stopping when the expression's value changes. In the past, there
  was no choice, and only stop-when-true conditions were supported.
  Stop-on-change is now the default when creating a new global
  breakpoint.
- The system.tl library now includes the default system startup module,
  \_main.t. In addition, it sets the new library flag, "nodef", to
  indicate that the library replaces the default system modules that the
  compiler would otherwise include in the build automatically. This
  change primarily benefits users of Workbench for Windows, in that it
  causes Workbench to include \_main.t explicitly in the list of source
  files. This makes it more convenient to view the file within
  Workbench, set breakpoints inside it, and trace into it. (This change
  will have no effect on most existing games. The only games affected
  would be those that include system.tl *and* include a non-standard
  startup module, using the "-nodef" compiler flag to suppress the
  default inclusion of \_main.t. This is an unlikely scenario, but if it
  applies, here's what to do: drop the "-nodef" compiler flag from your
  project file, and instead add "-x \_main" immediately after the "-lib
  system" inclusion.)
- The new directive "nodef" can appear within a library (.tl) file. This
  instructs the compiler that the library includes the same modules that
  the compiler would include by default, or replacements for the
  standard modules. If a library includes the "nodef" directive, then
  including that library in the build has the same effect as including
  the "-nodef" option on the compiler command line or in the project
  (.t3m) file.
- In the past, the text-only interpreters didn't properly handle banner
  size settings that exceeded the available screen size. The text-only
  interpreters will now limit a banner's size to the available space on
  the screen when the requested size is too large.
- The AnonFuncPtr intrinsic class now correctly identifies itself as a
  subclass of Vector (via ofKind and getSuperclassList).
- The AnonFuncPtr intrinsic class now compares and hashes by reference,
  rather than by value as its Vector base class does.
- The banner function bannerSetSize(), when applied to a text window
  (BannerTypeText), now takes into account the space used for margins
  and borders when sizing in "absolute" units. This ensures that if you
  ask for a height of five rows, for example, then the window will
  actually be large enough to display five rows in the default font,
  without any scrolling. In the past, the margins weren't taken into
  account, so the actual capacity of a banner wasn't necessarily the
  same as the requested nominal size in absolute units.
- The run-time symbol table now omits "intrinsic class modifier"
  objects. These objects have been filtered out of firstObj/nextObj
  iterations since 3.0.6c; they're now filtered out of the symbol table
  for the same reasons, and for consistency with firstObj/nextObj. (In
  the past, these objects appeared as symbols of type object, with names
  of the form " 99", and with no superclasses. These are internal
  implementation objects that are meaningless to the game program, so
  there's no reason for the symbol table to include them.)
- A problem in the List and String classes caused the VM to crash in
  certain very rare cases when evaluating properties of constant list or
  string values. This has been corrected.
- A bug in the Dictionary intrinsic class's findWord() method sometimes
  caused strange behavior, most noticeably as corruptions in the values
  of local variables in the invoking code. The problem only occurred
  when the method was called in its single-argument form. The problem
  has been fixed.

### Changes for 3.0.6j (8/2/2003)

- The new TadsObject method setSuperclassList() enables the game program
  to change an object's superclass list dynamically. The method takes a
  list giving the new superclass list for the object.
- It's now legal to explicitly define a 'location' property in an object
  definition that also uses the '+' notation to set the object's
  location. The compiler specifically treats an explicit 'location'
  property setting as overriding the value set with the '+' notation,
  rather than considering the redefinition a conflict as it did in the
  past. This allows logically related object definitions to be kept
  close together in the source code even when some of the objects are
  part of a location tree and others are not; this happens fairly
  frequently, because simulation objects sometimes have abstract helper
  objects that don't participate in the normal location hierarchy.
- Templates can now include alternative groups that are optional. If any
  element of an alternative group is marked as optional, then the whole
  group of alternatives is optional.
- The new macro perInstance(expr), defined in the system header file
  tads.h, can be used to define a property in a class such that the
  property will be set to the value of the expression 'expr' separately
  for each instance of the class. For each instance, the expression is
  evaluated the first time that instance's value of the property is
  accessed, and then stored with that instance.
- The compiler now has the ability to bundle resource files into the
  image (.t3) file as part of the main compilation ("t3make") step,
  without running the "t3res" utility as a separate step. This lets you
  include resource files in your project's makefile (the .t3m file),
  which means the makefile can now specify the entire build procedure
  for most types of projects. To add resources with t3make, add the new
  "-res" option *after* all of your source and library modules in the
  .t3m file, and list your resource files after the "-res" option. The
  syntax for the resource list following the "-res" option is the same
  as the "t3res" utility, except that the "-add" option is not allowed
  (as adding resources is the only possibility).
- Workbench for Windows now allows you to add a resource file to a
  project before the resource file exists. To add a resource file that
  you haven't yet created, use the usual menu command to add a resource
  file, then type the name of the file into the file selector dialog.
  The dialog will allow you to type the name of a file that doesn't yet
  exist. This is handy when you want to include a resource file that
  won't be created until your pre-initialization code runs, such as the
  "gameinfo.txt" file.
- The compiler is now able to determine automatically if relinking is
  needed due to a change in the set of modules included in the build.
  This is accomplished by checking a small bit of additional data in the
  .t3 about the set of object modules involved in the build. (The new
  information is simply a 32-bit "checksum" of the module source file
  list, so it adds only four bytes to the image file. It's not enough
  information to allow a user to recover a list of your source files by
  reverse-engineering the image file, so you don't have to worry about
  any possibility that a user could obtain "hints" this way. Because
  only a checksum is stored, there's a very small possibility that a
  change to the source file list could result in an identical checksum,
  in which case the compiler would not notice that relinking is
  required. The probability of this happening is extremely small, but if
  you ever suspect it, you can always use the "-al" option to force a
  relink.) Note that this doesn't affect the compiler's use of file
  timestamps to determine build dependencies; this is simply an
  additional check the compiler makes to detect when a new module is
  added to the build or an old module is removed.
- The ByteArray intrinsic class has two new methods, readInt() and
  writeInt(), that make it easy to translate between integer values and
  byte representations of those values. This is especially useful for
  reading and writing binary files. The new methods let you read and
  write integers in 8-bit, 16-bit, and 32-bit sizes, signed or unsigned,
  and in little-endian or big-endian format.
- The File intrinsic class has a new method, getFileSize(), which
  returns the size in bytes of the file.
- A bug in the File intrinsic class sometimes caused the VM to crash
  when a read operation was attempted after a seek operation. This has
  been corrected.
- The starter game templates now include startup handling for
  startup-and-restore. When the player launches the interpreter using a
  saved-game file, the interpreter invokes the startup-and-restore code,
  which the game must provide in a routine called mainRestore(). The
  starter templates now include a mainRestore() routine, and handle
  main() and mainRestore() using a common subroutine called
  mainCommon(). This change will make it much simpler for authors to
  include proper startup-and-restore support in their games, by
  providing a ready-made framework with the necessary code.
- Fixed a bug in Workbench for Windows: checkboxes in the Project window
  didn't work for nested libraries; clicking on the checkbox for a
  nested library simply had no effect. These checkboxes now work
  properly; clicking on a library checkbox checks or unchecks the
  library and all of the files within the library.
- The Win32 character-mode interpreter (t3run.exe) now includes a
  desktop icon in the executable file. This allows you to use the
  "-icon" option with maketrx32 to add your own custom icons to games
  you bundle as executables using the console-mode interpreter.
- A bug in the regular expression matcher failed to handle the
  shortest-match closure modifier (specified with a '?' suffix to a '\*'
  or '?' operator) properly. This bug was introduced in the regular
  expression processor rework in 3.0.6h, and has now been corrected.
- In certain unusual cases, the debugger incorrectly included a property
  in property enumerations when the property was actually a method. This
  happened when a method overrode a property defined as a simple data
  value in a superclass. The debugger isn't meant to show methods in
  property enumerations, since invoking a method will naturally invoke
  any side effects of the method. This has been corrected.
- In Workbench for Windows, projects created in the root directory of a
  disk (C:\\ D:\\ etc) caused a number of problems, including crashes
  during compilation. These problems have been corrected, so creating a
  project in a root directory is now safe.
- In Workbench for Windows, the compiler incorrectly wrote the object
  files to the working object directory when compiling for release,
  overwriting the object files for the debug build. This didn't do any
  harm apart from requiring a full recompile for debugging after any
  release build, which the compiler automatically sensed and performed,
  but it caused an unnecessary delay. The compiler now correctly sends
  release build object files to a temporary directory, so that the debug
  build object files are retained through a release build.
- The new-project wizard in Workbench for Windows will no longer accept
  a source filename that ends in an extension reserved for makefiles or
  compiler-generated files (.t3m, .t3, .t3o, .t3s). This makes it more
  difficult to accidentally create a source file that will be
  overwritten by the compiler or by Workbench with generated files.
- The compiler will now recompile an object file if the symbol file is
  more recent. Compilations that fail due to a syntax error can leave a
  project partially compiled, so that all of the symbol files but not
  all of the object files have been recompiled. In the past, correcting
  such an error and then recompiling did not always compile all of the
  necessary modules. This change ensures that all modules noted as
  requiring compilation on the first attempt will be noted again on
  subsequent attempts, even if the first attempt fails part-way through.
- Due to a bug in the VM, throwing exceptions out of a native-code
  callback context (such as out of the callback to a Vector or
  LookupTable iteration method) sometimes caused the VM to lose track of
  the calling exception handlers; this caused symptoms such as sending
  the exception to a "catch" block other than the innermost eligible
  one. This problem tended to show up when an exception was thrown out
  of a callback context, and then the same exception was thrown again on
  a later invocation. This has been corrected.
- If a Vector contains a reference to itself, or to a Vector containing
  a reference to the first Vector, indirectly to any depth, then an
  attempt to compare the Vector to another Vector, or an attempt to use
  the Vector as a key in a LookupTable, will fail with a run-time
  exception ("maximum equality test/hash recursion depth exceeded").
  Since Vector equality comparisons and hash calculations are defined
  recursively by value, Vectors with direct or indirect self-references
  cause the equality and hash calculations to recurse infinitely; the
  Vector class avoids this infinite recursion by throwing the exception
  when the recursion becomes too deep. Note that this also effectively
  limits the depth of a Vector tree when used in an equality test or
  hash value calculation, even if the tree is acyclic; the limit is 256
  levels.
- When reading input from a script (using the REPLAY command, for
  example), the interpreter now ignores morePrompt() calls. This allows
  script replay to proceed unattended, without unnecessary interactive
  pauses.
- In the debugger, if the game was interrupted by a real-time event
  while the player was editing a command line, and the debugger took
  control (via a breakpoint, for example) inside the real-time event,
  and the game was then terminated from within the debugger (while still
  stepping through the real-time event code) and then later restarted, a
  bug in the console manager caused strange behavior, sometimes
  including crashing the debugger. This has been corrected.

### Changes for 3.0.6i (6/15/2003)

- Due to a compiler bug, when a template was defined using the "\|"
  symbol to list a set of alternatives for a token position, object
  definitions using the template failed to match the last alternative of
  a set. All alternatives in a set are now properly recognized.
- The gameinfo.t module has been removed. In its place is a new
  mechanism in the library that writes the GameInfo file automatically
  during pre-initialization, based on the definitions in the game's
  GameID object.
- The Tokenizer class now gives each rule a name, which is simply a
  string value by which the rule can be identified. This changes the
  format of the rule list entries - each rule list entry has the new
  name value as its first element. Any subclasses or modifications of
  Tokenizer must use the new rule format.
- The Tokenizer class has some new methods that allow rules to be added
  or removed. insertRule(rule, curName, after) inserts the new rule
  given by 'rule' before or after the existing rule named 'curName'; the
  new rule is inserted before the existing rule if 'after' is nil, after
  the existing rule if 'after' is true. insertRuleAt(rule, idx) inserts
  the new rule given by 'rule' at the index given by 'idx' in the rule
  list. deleteRule(name) deletes the existing rule with the given name,
  and deleteRuleAt(idx) deletes the existing rule at the given index in
  the rule list.

### Changes for 3.0.6h (6/7/2003)

- The "modify" keyword can now be used to define functions. Modifying a
  function works just like replacing a function with the "replace"
  keyword, except that the new function can invoke the previous version
  of the function by using the "replaced" keyword. Refer to the
  [Procedural Code](sysman/proccode.html) section of the documentation
  for details.
- Two new TadsObject methods, createInstanceOf() and
  createTransientInstanceOf(), enable a program to dynamically
  instantiate an object based on multiple superclasses. Refer to the
  [TadsObject reference](sysman/tadsobj.html) for details of the new
  methods.
- The [object template](sysman/objdef.html) syntax has been extended to
  include optional elements and alternative elements. An element is
  marked optional by placing a question mark after it; alternative
  elements are separated by '\|' tokens.
- Several string search and regular expression intrinsics accept a new
  optional argument specifying the starting index in the string for the
  search. If the index argument is specified, then the search will start
  from the given character index; the index value 1 indicates that the
  search starts from the first character of the string, which is the
  default if the index parameter is omitted. This change allows
  algorithms that search for repeated occurrences of a substring or
  pattern to be written more efficiently, since they won't have to split
  up the source string to continue searching for additional occurrences.
  - String.find(str, index?)
  - String.findReplace(origStr, newStr, flags, index?)
  - rexMatch(pat, str, index?)
  - rexSearch(pat, str, index?)
  - rexReplace(pat, str, replacement, flags, index?)
- A new banner style flag, BannerStyleMoreMode, causes a banner window
  to use "MORE" mode. This means that any time text displayed to the
  banner fills the available vertical space in the banner window, the
  interpreter will display some sort of prompt to the user, and then
  wait for the user to acknowledge the prompt. The exact nature of the
  prompt and acknowledgment varies by platform; usually, the interpreter
  displays a prompt like "\[MORE\]" at the bottom of the overflowing
  window, and waits for the user to press a key. The purpose of MORE
  mode is to ensure that the user always has a chance to read all of the
  displayed text before it scrolls off the screen. Note that
  BannerStyleMoreMode implies BannerStyleAutoVScroll, since it only
  makes sense to pause for a MORE prompt when new text would cause old
  text to scroll away, and this only happens when the auto-vscroll style
  is used.
- The forEachInstance() function now allows the callback to break out of
  the iteration loop by throwing a BreakLoopSignal exception. Throwing
  this exception simply terminates the loop and returns to the caller of
  forEachInstance(). You can conveniently throw the exception using the
  "breakLoop" macro (defined in tads.h).
- A new utility function has been added to the base library (in
  \_main.t): instanceWhich(*cls*, *func*). This function iterates over
  instances of the given class *cls*, and calling *func* on each
  instance; *func* is a pointer to a function taking one parameter,
  which is the current instance in the iteration. instanceWhich()
  returns the first instance for which the callback function *func*
  returns a non-nil and non-zero value. Note that the function iterates
  instances in arbitrary order, so if there are multiple instances of
  *cls* for which *func* returns true, the return value will simple be
  the first of these visited in the arbitrary iteration order. If *func*
  doesn't return a non-nil/non-zero value for any instance of *cls*, the
  function returns nil.
- The setLogFile() function now takes an optional second parameter
  specifying the type of log file to open or close. The possible values
  are LogTypeTranscript, to create a transcript of all input and output;
  and LogTypeCommand, to create a record of only the input commands. The
  default, if the parameter is omitted, is LogTypeTranscript.
- The character mapper now accepts the IANA standard names for the
  various Unicode encodings supported in TADS 3: "UTF-8", "UTF-16BE"
  (for the 16-bit big-endian encoding), and "UTF-16LE" (for the 16-bit
  little-endian encoding). These names are case-insensitive, and can be
  used anywhere a character encoding name is required (#charset, new
  Charset(), etc). The old non-standard names for the same character
  sets ("utf8", "unicodeb", and "unicodel") are still accepted as well.
- The compiler now accepts source files that start with a Unicode UTF-16
  byte-order marker (i.e., the "FF FE" or "FE FF" byte sequences) and
  *also* specify a \#charset directive. The \#charset directive in such
  cases must (1) itself be encoded in the 16-bit Unicode encoding
  implied by the byte-order marker, and (2) designate the character set
  name that matches the byte-order marker (so a file encoded in
  big-endian UTF-16 must have a \#charset "utf-16be" directive, and a
  file encoded in little-endian UTF-16 must have a \#charset "utf-16le"
  directive). The \#charset directive is optional in these cases, since
  the compiler can correctly infer the encoding based on the byte-order
  marker alone.
- The compiler now accepts source files that start with a Unicode UTF-8
  byte-order marker. The compiler infers that the file is encoded in
  UTF-8 if it sees this sequence. Note that there is only one valid
  UTF-8 encoding, so the UTF-8 byte order marker is always the same
  (i.e., there is no "big-endian" or "little-endian" flavor of UTF-8;
  there's only UTF-8). A \#charset "utf-8" directive is allowed but not
  required immediately after the UTF-8 three-byte byte-order marker
  sequence. This change is required because some text editors that save
  in UTF-8 format write the byte-order marker character at the start of
  the file.
- A new compiler option, -quotefname, tells the compiler to quote
  filenames when reporting the source file location of an error. If this
  option is specified, the compiler encloses these filenames in double
  quotes, and "stutters" any double-quote characters that are part of
  the filenames themselves (that is, each double-quote character that's
  actually part of a filename is shown as two double-quote characters in
  a row). This change is intended to make it easier for automated tools
  to parse the compiler's error message output, by ensuring that
  filenames can be predictably parsed regardless of any special
  characters that might appear within.
- The compiler now displays an initial status message indicating the
  number of files it will need to build. This is designed for use by
  automated tools, to give them an estimate of the amount of work to be
  done; this can be used, for example, to show a progress bar indicator
  as the compilation proceeds.
- In the compiler options file (the .t3m file), certain options (-I, -o,
  -Os, -FL, -FI, -Fs, -Fy, -Fo, -source, -lib) can be specified using
  URL-style notation, to ensure portability of the .t3m file across
  different operating systems. In the past, the compiler didn't properly
  translate these options to local conventions when they contained '/'
  characters to separate path elements. The compiler now properly
  converts URL-style paths to local conventions.
- When an object is defined with an undefined or invalid superclass
  name, and the object definition uses a template to define property
  values, the compiler now reports an "undefined superclass" error
  rather than an error with the template format. In cases where a
  superclass name is merely misspelled, the compiler will naturally fail
  to find a matching template for the object, since the misspelled
  superclass name probably doesn't have any templates associated with
  it; thus, the template error is secondary to the true problem, which
  is the misspelled superclass name. This change should make the
  diagnostics more useful by reporting the true problem rather than the
  missing-template side effect.
- Text Grid windows no longer consolidate runs of whitespace; instead,
  all whitespace written to a text grid window is treated literally.
- Text Grid windows incorrectly interpreted HTML markups in the
  text-only interpreters. This has been corrected; text displayed to
  text grids is now treated literally on all interpreters.
- Workbench now automatically saves the project (.t3m) file settings
  upon starting execution of the game in the debugger, and also saves
  the recent game order whenever a new game is loaded. These measures
  help reduce the chance of data loss in the event that Workbench
  crashes while the game is running (which it ideally *should* never do
  at all, but until the glorious day when it's perfectly bug-free, this
  extra saving will at least make crashes a little less painful).
- Due to a bug, Workbench on Windows did not start up correctly when it
  was started by double-clicking on a .t3m file from the Windows
  desktop. (Workbench started with a blank interpreter window, but
  didn't show the main Workbench IDE window at all.) This has been
  corrected.
- A bug in the debugger caused the debugger to crash under certain
  obscure circumstances. In particular, the crash occurred if the game
  caused a stack overflow, and the overflow happened to occur on a
  recursive VM invocation from an intrinsic method (such as when an
  intrinsic class method invokes an anonymous function callback). This
  has been corrected.
- In the past, the compiler generated an output function call for the
  intial empty portion of a double-quoted string of the form
  "\<\<expr\>\>..." (in other words, a string with an embedded
  expression immediately after the open quote). The compiler no longer
  generates this superfluous empty string output operation, slightly
  reducing code size and execution time.
- The String intrinsic class failed to enforce the 64k length limit for
  an individual string in some cases; exceeding the limit caused
  problems ranging from corrupted string text to crashes. This has been
  corrected; the interpreter now throws a run-time exception ("string is
  too long") if creating a string (via concatenation, for example) would
  exceed this limit. The List intrinsic class is likewise more assertive
  now about enforcing its 64k limit as well.
- The regular expression functions (rexMatch, rexSearch, rexReplace)
  were capable of causing the interpreter to crash (with a system stack
  overflow) when asked to match a pattern to an extremely long string.
  The exact limits varied by platform according to the amount of system
  stack space available; on Windows, the problem started occurring with
  strings about 5,000 characters long, although the exact length was
  also a function of the complexity of the regular expression pattern.
  This has been corrected; the regular expression matcher no longer uses
  a recursive algorithm, so its consumption of system stack space is now
  fixed and small. The matcher still consumes memory that scales
  according to the length of the input string and the complexity of the
  regular expression, since such memory consumption is inherent in the
  task; but the memory consumed is no longer in the system stack, which
  means among other things that the matcher can now recover gracefully
  (by throwing an "out of memory" run-time exception) if it should
  exhaust available memory while working.
- In the DOS/Windows version, the executable file bundler (maketrx32)
  didn't look for the character map library file (cmaplib.t3r) in the
  correct location; it looked in the directory containing the original
  interpreter executable rather than the "charmap" subdirectory of the
  interpreter directory; since the installer puts cmaplib.t3r in the
  subdirectory, the bundler failed to find the file and omitted it from
  the bundled executable. The program now looks in the "charmap"
  subdirectory.
- A bug caused the compiler to crash on certain types of syntax errors.
  If a long string (around 1,000 bytes or longer) was misplaced in a few
  specific contexts, the error message generator overflowed an internal
  buffer trying to include the text of the string in the error message.
  This should no longer occur.
- The compiler now flags an error if a grammar production defines more
  than 65,535 alternatives. This limit is imposed by the .t3 file format
  for grammar rules, but it's undesirable to get anywhere close to the
  limit because of performance cost. It's possible to exceed the limit
  with relatively concise grammar rule definitions, because the compiler
  expands the permutations of rules defined with '\|' alternatives.
  Grammar rules that contain complex sets of permutations using '\|'
  alternatives should generally be rewritten using sub-productions,
  which will allow equally complex rules without the overhead of
  expanding the permutations.
- In reflect.t, reflectionServices.valToSymbol() can now correctly
  identify the reflectionServices object itself. (Due to a bug, this
  caused a run-time error in the past.)
- In reflect.t, reflectionServices.valToSymbol(), looking up an unnamed
  object now returns a string giving the superclass list of the object,
  if the superclass names are available. The format of the return value
  is now '(obj:sc1,sc2)', where 'sc1' and 'sc2' are the names of the
  superclasses (naturally, more or fewer superclass names will appear
  according to the actual number of superclasses of the object). The
  string 'obj' is literally present. If none of the superclasses have
  names, then the traditional result, '(obj)', is returned. If some
  superclasses have names but others don't, then the full list will be
  returned, with '(anonymous)' used for any unnamed superclass.

### Changes for 3.0.6g (4/12/2003)

- The new interpreter option -R lets you specify the root folder for
  individual resources. By default, the root resource folder is the
  folder that contains the image (.t3) file. If -R is specified, then
  the interpreter will look for resources in the given folder when they
  can't be found in the image file itself or in a resource bundle file.
  Note that this isn't a search list; only one -R option can be in
  effect.
- Added a new method, isRoundTripMappable(), to the [CharacterSet
  intrinsic class](sysman/charset.html). This new method provides an easy
  way to determine if a set of characters has an exact, one-to-one
  mapping in a given local character set.
- The compiler now warns when a grammar rule ends with an empty
  alternative, or is completely empty. Empty rules at the top level of a
  grammar rule are uncommon, and it's easy to accidentally leave a '\|'
  at the end of a rule, especially while actively defining new rules. To
  eliminate this new warning, you can use an empty pair of parentheses,
  "()", to explicitly indicate an empty rule. This warning only applies
  to the outermost grouping level of a rule; empty rules within
  parenthesized portions of rules are not flagged.
- Fixed a problem in the console formatter that caused command lines
  read from a command input file to be copied into a script output file
  twice.
- Fixed a problem in the Dictionary class that caused dynamic vocabulary
  to be forgotten if you saved a game to a file, ended the interpreter
  session, started a new interpreter session, restored the file saved
  earlier, saved again to a second file, and then later restored the
  second file. (The problem was that the Dictionary object was not being
  marked as being in need of being saved again after it was restored in
  the new session, so the second save didn't include the dynamic
  vocabulary entries. The Dictionary object is now properly marked as
  being in need of saving after being restored.)
- Fixed a problem that caused the Object.propDefined() method to yield
  incorrect results when called on an intrinsic class object to retrieve
  information on methods added to the intrinsic class with 'modify'. The
  information returned was inconsistent with that returned from
  getPropList(). This has been corrected; the returned information
  should now be fully consistent.
- Fixed a problem that caused sporadic crashes in the Windows debugger
  when an expression including the '&' operator applied to an undefined
  symbol was evaluated interactively. This crashiness should no longer
  occur.
- Fixed two problems in the text-only interpreters relating to "&"
  entities. First, a few valid entity names were not recognized at all,
  causing the interpreter to show the entity source text (i.e., the "&"
  code itself). Second, entities whose names weren't properly terminated
  (with a semicolon, ";") had the last letter of their name incorrectly
  added to the display after the entity itself. These problems have been
  corrected.
- Fixed a couple of bugs that caused interpreter crashes when running
  with "unicodeb" or "unicodel" character set mappings.
- The versions of the interpreters that run in a Windows command prompt
  window now correctly remove the console window's scrollbars in all
  cases on Windows NT, 2000, and XP. In the past, the interpreters
  *usually* did this, but in some cases missed the scrollbars and left
  them intact. (Console scrollbars appear when the console properties
  are set so that the console has a "screen buffer" larger than the
  actual console window. This feature isn't available on the Windows 9x
  platforms, only on the NT branch, which includes 2000 and XP.) Leaving
  the scrollbars active created the confusing situation that the area of
  the console containing the interpreter window could be scrolled off
  the screen. The scrollbars are now correctly removed under all
  conditions. This affects t3run.exe and tr32.exe.

### Changes for 3.0.6f (3/23/2003)

- Fixed a problem in the regular expression parser that misinterpreted
  character class expressions involving single Unicode characters
  outside of the plain ASCII range (for example: '\<\u2019\|\u201D\>').
  The regular expression compiler treated such expressions as invalid;
  it now handles them correctly.
- Added a couple of new compiler options to allow more control over
  special system paths:
  - `-FI `*`path`*: overrides the standard system include directory with
    the given path. The compiler normally uses a path that depends on
    the operating system and installation configuration. Note that this
    option doesn't set up a search list the way -I does; there's only a
    single system include directory in effect at any given time.
  - i\>`-FL `*`path`*: overrides the standard system library source
    directory with the given path. The standard library path depends on
    the operating system and installation configuration. As with -FI,
    there's only a single system library directory in effect at one
    time.

### Changes for 3.0.6e (3/16/2003)

- A new HTML tag is now recognized: \<NOLOG\>. This is a container tag
  (so each \<NOLOG\> must have a corresponding \</NOLOG\> tag); it
  delimits text that is to be displayed only on the interactive console,
  not in any log file (transcript) being made. The tag has no effect on
  the display.
- The getPropList() method previously only returned static methods when
  called on intrinsic class objects (such as TadsObject or BigNumber).
  This has been changed so that the method now returns both static and
  non-static methods. This change clarifies the meaning of getPropList()
  when called on an intrinsic class object: the method returns the full
  set of properties that the class defines for **instances** of the
  intrinsic class, which may not necessarily be methods that are
  meaningful when called on the intrinsic class object itself. This
  change is necessary for consistency throughout the class hierarchy for
  the reflection mechanism, so that a program can traverse a class tree
  to create an exhaustive list of properties on a class, including those
  inherited from intrinsic superclasses.
- In the output formatter, the effects of the "\\" and "\v" sequences
  are now limited to the plain text outside of HTML markups. In the
  past, if an HTML tag or entity appeared after a "\\" or "\v" sequence
  and before any alphabetic character, the case conversion effect was
  applied to the first character of the tag or entity name. Entity names
  are case-sensitive, so this had the potential to invalidate an entity
  name; in addition, whether a tag or entity name interceded, the case
  conversion effect was effectively lost, since it was misapplied to the
  HTML markup. Now, with this output formatter change, the case
  conversion effect of "\\" and "\v" sequences skips past any HTML
  markups, so the case conversion is applied to the next plain text.
- Fixed a problem in the console output formatter that caused explicit
  blank line sequences to be ignored in some cases immediately after
  reading input.
- Fixed a compiler problem that caused spurious syntax errors in any
  object definition that used a template in which a list element
  followed a single-quoted string element.
- Fixed a compiler bug that caused spurious syntax error reports in
  certain cases involving multi-line strings as macro arguments. If code
  involving a macro spanned multiple lines, and the macro arguments
  included a string spanning multiple lines, and the string was part of
  a larger expression that started with a non-string token, the compiler
  sometimes misinterpreted the string as ending before its actual
  terminating quote. This resulted in spurious syntax errors, as the
  compiler thought some of the string's continuation lines were
  non-string tokens. This has been corrected.
- Fixed a bug in the console output formatter that allowed too many
  lines to be displayed between "MORE" prompts in some cases, which
  caused text to scroll off the top of the screen before the player
  could read it. (The problem was introduced with the typographical
  spaces in 3.0.6b.)

### Changes for 3.0.6d (2/23/2003)

- Fixed a problem that caused the debugger to crash when attempting to
  stop a running game when the game was suspended in the debugger at a
  run-time exception that was thrown from within a callback invoked from
  a system intrinsic method (for example, from a callback invoked by the
  List.forEach() method). This has been corrected.
- The inputKey() intrinsic function didn't return the correct
  square-bracket code for special keys (arrow keys, function keys, and
  so on) due to a bug introduced in an earlier patch release (3.0.6a).
  This is now fixed.
- Fixed a problem in several methods of the Dictionary intrinsic class
  (addWord, removeWord, forEachWord) that sometimes caused stack
  overflows when calling these methods. Fixed the same problem in some
  File methods (setCharacterSet, closeFile, setPos, setPosEnd).

### Changes for 3.0.6c (2/1/2003)

- Defining a template for an object class no longer creates an external
  reference to the object, so it's now legal to define templates for
  objects that are never defined in any of the modules linked into a
  program. In the past, merely defining a template for an object created
  a reference to the object. This change makes it easier to create more
  modular subsystems whose components can be linked a la carte, since
  templates included in a header for the subsystem won't by themselves
  drag in the modules where the template objects are defined. An object
  mentioned in a template will now be required at link time only if the
  template is actually used to create instances of the mentioned object.
- The 'modify grammar' statement now accepts an empty grammar rule list
  to indicate that the rules defined in the base grammar definition are
  to be retained. This change makes it possible to modify the properties
  and/or methods of a grammar rule in isolation, without changing the
  syntax for the rule. In the past, to modify only properties or methods
  of a grammar rule, it was necessary to repeat the entire rule list
  from the base grammar definition, since the rule list in the 'modify
  grammar' statement always superseded the base object's rule list.
- The firstObj/nextObj object iteration functions now filter out
  "intrinsic class modifier" objects. These are purely internal
  implementation objects in the VM; they serve as the repositories of
  properties and methods attached via the "modify" keyword to intrinsic
  classes, and are for all intents and purposes parts of the intrinsic
  classes they modify. There is no benefit in enumerating them as
  separate objects, and doing so created some confusing special cases
  for code using the reflection mechanisms, so they've been eliminated
  from the firstObj/nextObj results.
- The "intrinsic class" declaration syntax now allows the superclass of
  the intrinsic class to be specified. This information is largely for
  documentary purposes; intrinsic classes are built into the VM, so the
  "intrinsic class" syntax doesn't actually define intrinsic classes but
  merely tells the compiler about the interfaces of the intrinsic
  classes being used. The system header files have been changed to take
  advantage of this new feature to provide superclass information for
  the intrinsic classes they declare. The one immediate effect of this
  change is that the compiler is now able to enforce the rule against
  using "modify" with intrinsic methods of intrinsic classes, and can do
  so for the entire inheritance tree; in the past, the compiler was
  unable to enforce this rule for inherited intrinsic methods, since it
  didn't have information on the inheritance relationships among
  intrinsic classes.
- Workbench for Windows had a problem that, under certain circumstances,
  caused the same directory to be added to the "include" path in the
  build settings every time a project was opened. This happened when a
  file in the "include files" section of the project had a
  parent-relative path (a path starting with ".."). This should no
  longer occur.
- Workbench for Windows had a problem that failed to recognize the
  library-relative path of a header file associated with a nested
  library (that is, a library referenced from within another library;
  for example, en_us.tl is nested within adv3.tl in the standard library
  configuration). This sometimes caused such header files to be listed
  in the "include files" section of the project window with absolute or
  parent-relative paths, when they should have been listed without any
  path prefix, since Workbench automatically looks for header files in
  the directories associated with libraries included in the build. The
  unnecessary path prefixes caused other undesirable side effects, such
  as including superfluous include paths in the build settings.
  Workbench should now correctly identify headers associated with nested
  libraries.
- Workbench for Windows did not properly initialize the "recent
  projects" menu when configured to load the most recent game at
  startup. On the initial load at startup, the list of recent projects
  was always shown with full, absolute directory paths, rather than with
  paths relative to the initially loaded project's directory. (This was
  purely cosmetic, but was inconsistent, since the recent projects were
  always shown with paths relative to the active project after opening
  another project subsequently.) This has been corrected.
- A problem in the command-line option parser prevented some combined
  TADS 2/3 interpreters from accepting the "-cs" (character set) option
  for TADS 3 games. This is now fixed.

### Changes for 3.0.6b (12/15/2002)

- This version substantially overhauls the output formatter's
  word-wrapping rules. The changes are designed to give the game much
  greater control over the way that text lines are wrapped to fit the
  available horizontal space. The changes should be relatively
  transparent to existing code, because the new features mostly add
  optional new controls, but use defaults that provide roughly the old
  TADS 2 behavior. The changes are implemented in both the text-only and
  HTML interpreters. The new text-wrapping rules are described in detail
  in the [Formatting](sysman/fmt.html) documentation, but here's a
  summary of the changes:
  - The game can switch at any between "word-wrap" and "character-wrap"
    modes. In word-wrap mode, text can be broken only at word
    boundaries; in character-wrap mode, text can be broken between
    almost any two characters. The modes are selected with the new tag
    \<WRAP\>: \<WRAP WORD\> sets word-wrap mode, and \<WRAP CHAR\> sets
    character-wrap mode.
  - The formatter recognizes the Unicode character \uFEFF (HTML entity
    "&zwnbsp;"), the zero-width non-breaking space. This character
    doesn't show up on the display, but it tells the formatter not to
    break the line between the two adjacent characters, even if the
    text-wrapping rules would otherwise permit it.
  - The formatter recognizes the Unicode character \u200B ("&zwsp;"),
    the zero-width space. This character doesn't show up on the display,
    but it tells the formatter that it can break the line between the
    two adjacent characters, even if the wrapping rules wouldn't
    ordinarily allow a line break there.
  - The formatter recognizes several of the Unicode special-width space
    characters (en space, em space, etc). All of these are treated as
    quoted space, in that they don't combine with adjacent runs of
    ordinary whitespace. These spaces allow finer control over visual
    spacing, which facilitates a more typographical appearance in the
    HTML interpreters.
  - The "soft hyphen" character, \u00AD (HTML "&shy;") is now accepted
    by the formatter. This is invisible in most cases, but it tells the
    formatter that it can break the line by hyphenating. If the
    formatter does break a line at a soft hyphen, it displays the soft
    hyphen as an ordinary visible hyphen.
- Added the new "log file console." This is a special kind of console
  object that has no display, but simply captures all of its output to a
  log file. This can be used to capture game output to a file, using the
  standard output formatting (including HTML interpretation and word
  wrapping), without displaying anything to the player. Refer to the
  [tads-io function set documentation](sysman/tadsio.html) for details.

### Changes for 3.0.6a (11/23/2002)

- The new `#pragma newline_spacing(on|off)` directive lets the program
  control the treatment of newlines in strings. By default, newline
  spacing is set to "on": when a newline character is found within a
  string, the compiler converts the newline plus any whitespace that
  immediately follows to a single space character. When newline spacing
  is set to "off", the compiler instead simply strips out the newline
  and any immediately following whitespace. Setting newline spacing to
  "off" is desirable in some languages, such as Chinese, where
  whitespace isn't conventionally used as a token separator in ordinary
  text; turning off newline spacing can make it easier to write code in
  these cases, because it allows strings to be split over several lines
  without introducing unwanted whitespace.
- The compiler now allows macro substitutions in library (.tl) files. In
  a library file, the value of a preprocessor symbol defined with the -D
  option can be substituted into the text of the library file using the
  notation "\$(VARNAME)": the variable name is enclosed in parentheses
  preceded by a dollar sign. The adv3 library (adv3.tl) uses this
  capability to parameterize the language-specific library and message
  file selection. See [Compiling and Linking](sysman/build.html) for more
  information.
- The text-only interpreters now treat "&nbsp;" as a true non-breaking
  space. (In the past, "&nbsp;" was treated the same as "\\ ", the
  quoted space: the formatter did not combine such a space with other
  adjacent whitespace, or remove it from the start of a line, but *did*
  allow a line break to occur at an "&nbsp;" character.)
- On Workbench for Windows, the Build Settings dialog has a new page
  that lets you set the directory paths to use for object files and
  symbol files. This new page's tab is labeled "Temp Files," as the
  symbol and object files are intermediate files that the compiler
  produces and reads during compilation. (These settings correspond to
  the -Fy and -Fs compiler options.)
- When Workbench for Windows creates a new project, it automatically
  creates a subfolder (of the folder containing the project file) to
  store the project's object and symbol files. The new subfolder is
  called "obj". Workbench initializes the new project's object file and
  source file path options to the new subfolder. The purpose of using
  the subfolder is to keep the compiler-generated intermediate files
  separate from the project's source files, to make it easier to manage
  the files associated with the project.
- A portability bug that caused interpreter crashes on some platforms
  (notably Solaris) has been fixed. (This bug only occurred when the
  interpreter was compiled with certain C++ compilers, and prevented the
  interpreter from running any games.)
- The 'inherited' operator did not work properly to inherit a modified
  intrinsic class method from the intrinsic base class of a modified
  intrinsic class. For example, if a method defined with "modify
  TadsObject" used 'inherited' to inherit, and a method of the same name
  was defined with "modify Object", the Object modifier method was not
  properly inherited. This has been corrected.
- The new compiler option "-errnum" causes the compiler to display the
  numeric error code for each warning or error message. By default, the
  compiler does not display the numeric codes for errors, because the
  code is mostly for the compiler's own use; however, the new option
  allows the user to show these codes if desired, for purposes such as
  cross-referencing with documentation.
- The new compiler option "-w-*nnn*" causes the compiler to suppress the
  warning message identified by *nnn*, which is the compiler's internal
  numeric code for the warning. When this option is used, the compiler
  will not display any warnings of the given type, and will not include
  any such warnings in its summary error count. This option can be
  repeated to suppress multiple types of warning messages. Only warnings
  (and pedantic warnings) can be disabled with this option; specifying
  codes for errors of severity greater than warnings will have no
  effect. The complementary option "-w+*nnn*" can be used to explicitly
  enable a warning; by default, all warnings are enabled, so the only
  reason this option would be needed is to enable a warning previously
  removed with "-w-*nnn*" on the same command line, which might
  sometimes be useful with shell aliases or command scripts. Note also
  that the "-w+*nnn*" option **cannot** be used to selectively enable
  certain pedantic warnings without enabling pedantic mode; pedantic
  warnings are an entirely separate class of messages from regular
  warning, and can only be enabled as a group using the "-w2" option.
  Once pedantic warnings are generally enabled, you can use "-w-*nnn*"
  to disable specific pedantic warnings you wish to suppress. +
- When searching for an external resource file (.3r0, .3r1, etc.), the
  interpreter now looks for a file with both a lower-case and upper-case
  version of each suffix. This is intended to make the naming convention
  more flexible on case-sensitive file systems, such as Unix; on systems
  with case-insensitive file naming, such as Windows or Mac, this change
  has no effect.
- Added support for mixed multi-byte character sets to the character
  mapper; this allows the compiler to read source files encoded in
  multi-byte character sets, and allows the interpreters to use local
  system character sets with multi-byte encodings, both for displaying
  text on the screen and reading text from the keyboard. A number of
  widely-used character sets for Asian languages use this type of
  character set (Windows systems localized for Chinese and Japanese use
  multi-byte character sets, for example). Such character sets have
  always been supported in the character map compiler (mkchrtab), but
  the character mapper used in the compiler and VM did not implement the
  mapping logic for these types of character sets. Double-byte character
  sets are now fully supported; the character mapper can now handle any
  character set that uses two-byte sequences for all of its characters
  (usually called double-byte character sets), or that uses a mixture of
  one-byte and two-byte sequences (usually known as multi-byte or
  mixed-multi-byte character sets).
- In Workbench for Windows, the Debug Log window displayed its contents
  using the same color settings as in the main game window. The Debug
  Log window now uses the color settings from the Workbench "options"
  dialog, the same as source file windows.
- In the Build Settings dialog in Workbench for Windows, on the
  Installer page, a new field allows overriding the default character
  mapping library (cmaplib.t3r) with a custom mapping library. This is
  especially useful for authors working in Asian languages; the default
  character map library includes mappings for the common character sets
  for most European languages, but does not include the Asian character
  sets because of the large size of these sets. Authors working in
  languages which require character sets not included in the default
  mapping library can create their own mapping file or files (see the
  [character mapping documentation](sysman/charmap.html)), then bundle
  the file(s) into a custom library (a .t3r file) using the `t3res`
  tool. Specify this .t3r file in the new Character Map Library field,
  and the installer will automatically bundle this file into your game's
  executable file when building the install set.
- Fixed a problem in Workbench for Windows that caused Workbench to
  reload a library (.tl) file every time Workbench became the foreground
  application (i.e., its main window was activated after another
  application had been in the foreground), if the library was ever
  modified after being loaded in Workbench in that session.
- Fixed a problem in the UTF-8 character mapper that could have caused
  problems in rare cases when reading from a text file encoded in UTF-8.
  The mapper did not correctly figure the byte length of the last
  character when reading a three-byte character at the end of the buffer
  and the first two of the three bytes was read into the buffer. (This
  problem was extremely unlikely to actually occur in practice, but in
  any case it's now fixed.)
- Fixed a problem in the GrammarProd class that caused interpreter
  crashes under certain circumstances. In particular, if a grammar rule
  was matched with a '\*' element in the rule, and the matched input
  string had exactly six tokens, an internal memory corruption led to an
  interpreter crash. This has been corrected.
- Fixed the t3make error message "error creating image file" to properly
  show the image file name as part of the message. This message
  incorrectly showed the filename as "s", regardless of the actual name
  of the image.
- Fixed a problem in the DOS character-mode interpreters (t3run and
  tr32) that caused start-up error messages (in particular, errors
  relating to loading the .t3 file, such as a "game file not found"
  error) to be cleared from the display before the user had a chance to
  see them.

### Changes for 3.0.5 (09/22/2002)

- The \<BANNER\> tag is no longer allowed for T3 HTML programs. T3 games
  should use the banner API instead. (The \<BANNER\> tag has been
  removed entirely because it interacts poorly with the banner API. The
  adv3 library uses the banner API for the status line, so this
  essentially forces programs using the library to do likewise. To
  reduce the potential for any confusion that could result from games
  inadvertantly mixing banner API calls and banner tags, we simply
  disallow banner tags entirely, to ensure that all T3 programs use the
  banner API uniformly.) For the moment, \<BANNER\> tags are actually
  disallowed only when the banner API is supported by an HTML
  interpreter; for HTML interpreters that don't yet support the banner
  API, the tags are still allowed. This support will be withdrawn soon,
  though; we're just waiting until we're sure that banner API support is
  available on all HTML interpreters.
- The compiler now assumes that each filename and folder name specified
  in a ".t3m" file (a compiler makefile) is given relative to the folder
  location of the .t3m file itself. This makes the compiler essentially
  independent of the working directory when using a .t3m file, because
  the location of the .t3m file effectively becomes the working
  directory for any file and folder paths specified within. This
  treatment naturally does not apply to any filename given in a .t3m
  file with an absolute path (for example, a Unix path that starts with
  "/", an MS-DOS path that starts with "\\ or a drive letter, or a
  Macintosh path that starts with a volume name), since an absolute path
  is already independent of the working directory.
- The compiler now keeps information on the compiler version that was
  used to compile a module. The compiler checks this information and
  automatically rebuilds a module that was built by an older version of
  the compiler. This ensures that all components of a program are
  rebuilt whenever a new version of the compiler is installed. (In the
  past, the compiler did not consider itself to be a dependency of the
  derived files, which occasionally led to confusing link-time errors
  caused by mismatched object file information.)

### Changes for 3.0.5h (09/14/2002)

- Some slight additional performance optimizations in the VM should
  improve execution speed by another 10% or so (vs. release 3.0.5g).
- Fixed a problem in the Dictionary class that caused spurious run-time
  error when restoring games (particularly when restoring after a
  RESTART operation had been previously performed).
- Fixed a problem in the regular expression parser: the counted-repeat
  operator ({n,m}) did not nest properly with closures.
- Fixed a debugger problem that caused the debugger to fail to take
  control (i.e., pause the game program and enter the debugger UI) when
  a run-time error occurred under certain conditions when using the
  "Step Out" or "Step Over" commands.
- Fixed a problem in the console-based text-only interpreters that
  caused the \[More\] prompt to be displayed at the wrong place (at the
  end of a line of text, rather than at the beginning) under certain
  rare conditions.

### Changes for 3.0.5g (09/08/2002)

- The [Dictionary](sysman/dict.html) intrinsic class has been
  substantially altered. The central change is that the caller can now
  specify a "comparator" object that defines how strings in the
  dictionary are compared to input strings; this allows the game to
  customize the rules for looking up dictionary words. Related to this,
  all methods related to truncation length have been removed; instead,
  truncation, if desired, is now handled through the comparator.
  Finally, the methods that look up words in the dictionary (findWord
  and isWordDefined) have changed slightly to provide additional
  information from the comparator about how an input word matches a
  dictionary word.
- Added the [StringComparator](sysman/strcomp.html) intrinsic class. This
  class works with the [Dictionary](sysman/dict.html) intrinsic class to
  specify customized rules for matching input words to dictionary words.
  StringComparator provides options that specify whether or not upper-
  and lower-case letters are distinguished; whether words can be
  truncated (abbreviated) on input, and to what minimum length; and a
  set of equivalence mappings that allow alternative spellings on input,
  such as using unaccented equivalents of accented characters.
- The [GrammarProd](sysman/gramprod.html) intrinsic class method
  parseTokens() now uses the supplied Dictionary to perform comparisons
  to literal tokens. Each input token is compared to literal tokens in
  the grammar rules using the Dictionary's current comparator. Literal
  tokens in grammar rules thus are matched using the same rules as
  dictionary words. The matchValues() results are stored in the match
  tree objects in the new property tokenMatchList: this property is set
  in each object in the match tree, and contains a list of the
  matchValues() results corresponding to the token list elements.

### Changes for 3.0.5f (09/02/2002)

- Added the new method findReplace() to the [String](sysman/string.html)
  intrinsic class. This new method is similar to the
  [rexReplace()](sysman/tadsgen.html) function, but is slightly more
  efficient for situations where the text to be replaced is a simple
  constant string rather than a regular expression pattern. It's also
  slightly simpler to use, since it's not necessary to worry about any
  special regular expression interpretation of the search string.
- Added the new intrinsic class [RexPattern](sysman/rexpat.html). This
  new class encapsulates a "compiled" regular expression pattern, which
  can be used in place of a pattern string in the regular expression
  functions. Compiling an expression converts it from a string into an
  internal representation. When a particular pattern is used repeatedly
  in many searches, it's much more efficient to use a RexPattern object
  to conduct searches with the pattern, because the regular expression
  functions have to compile their search patterns internally anyway; by
  using a RexPattern, you perform the compilation for a particular
  pattern only once, in advance, rather than each time you use the
  pattern. Compilation takes a non-trivial amount of time, so if a
  pattern is used frequently, pre-compiling it to a RexPattern can make
  a difference in execution performance.

### Changes for 3.0.5e (08/25/2002)

- This release has a number of VM, compiler, and intrinsic class changes
  intended to make programs run faster. The compiler now generates more
  optimized code (especially when compiling with no debug information),
  and VM executes code faster. The changes should be entirely
  transparent in terms of functionality, although a few new VM
  instructions have been added, so code compiled with this new version
  of the compiler will not run with older VM versions.
- Added two new [LookupTable](sysman/lookup.html) methods: keysToList(),
  which returns a list consisting of all of the keys in the table; and
  valsToList(), which returns a list consisting of all of the values in
  the table. In both cases, the lists are in arbitrary order.
- The compiler left out a final newline after the error/warning count
  summary at the end of a compilation that generated error or warning
  messages. This is now fixed.
- Fixed a couple of dialog messages in Workbench for Windows that
  referred to ".t3x" files (the old version of the ".t3" extension).
- Fixed a problem in Workbench for Windows that caused an unparseable
  compiler command line to be generated if an option argument (such as
  an Include path) ended with a backslash. The problem had to do with
  DOS's odd command-line quoting rules; the trailing backslash was
  treated as "quoting" the quote mark at the end of the option argument.
  This has been corrected.
- The compiler's command line error diagnostics are now somewhat
  improved, to help pinpoint the source of an error. In the past, the
  compiler always simply showed its usage message if the command line
  had a problem, which didn't help much in identifying which argument
  was causing the problem. The compiler now shows the usage message only
  when the command line is empty (or when the argument "-help" is
  given); in case of error, the compiler now shows a message explaining
  the specific problem, and shows the particular option causing the
  problem if appropriate.
- In Workbench for Windows, the folder selector dialog was started with
  an empty current folder, which made the entire dialog appear empty, in
  some cases (such as when adding a directory to the "Include" list in
  the Build Settings dialog). The dialog should now always start with a
  valid initial directory.

### Changes for 3.0.5d (08/04/2002)

- Workbench for Windows now has a primitive but usable "profiling"
  feature. Profiling is a technique in which the programmer collects
  data on where the running program is spending its time. The purpose is
  to identify any areas where the program spends a disproportionate
  amount of time; this sometimes reveals obvious bottlenecks where the
  code can be sped up with simple improvements, and in any case usually
  reveals the areas where optimization efforts will yield the greatest
  results. Workbench collects profiling data with function/method
  granularity: each time the program enters or exits a function or
  method, Workbench can track the time spent in that code. The user can
  turn profiling on and off using the new "Profiler" menu; when
  profiling is turned on, Workbench collects profiling data until the
  profiler is turned off, at which point the system asks for a file to
  which to write the collected data. Workbench writes the data as a
  tab-delimited text file: the first column is the name of the function
  or method; the second is the number of microseconds spent **directly**
  in that code; the third is the number of microseconds spent in
  functions or methods **called by** that code (which excludes the time
  spent directly in the code itself); and the fourth is the number of
  times the function or method was invoked. This format can be easily
  loaded into an external analysis tool (such as a spreadsheet
  application) for inspection. (The profiling facility is designed
  mostly for use by library authors, so we probably won't go to great
  lengths in the area of ease of use; and we don't expect to build any
  integrated analysis tools, as a spreadsheet is more than adequate to
  analyze the data.)
- Fixed some problems in the DOS interpreter's display management (these
  are generic character-mode interpreter fixes that will also take care
  of the same problems on Unix and other character-mode systems). The
  problems affected resizing the terminal window, interaction with
  "More" prompts in some situations, and cursor placement under certain
  conditions. In addition, the "review mode" status bar is back (it was
  missing from the first versions with the banner API); note, though,
  that the mode bar is now displayed at the top of the main game window
  rather than taking over the status line, which is necessary because of
  the possibility the banner API creates of non-standard status line
  layouts.
- Fixed a problem in the VM that could conceivably have caused crashes
  or other misbehavior under certain extremely improbable conditions
  involving stack overflows.

### Changes for 3.0.5c (07/28/2002)

- The banner creation function bannerCreate() has a slightly modified
  interface. The new interface allows the initial size of the banner to
  be set in terms of the natural sizing units of the window; in
  addition, percentage-based sizing is still possible as well.
- Percentage-based banner sizing now behaves slightly differently than
  it used to. In the past, the percentage size was based on the size of
  the complete application window. The percentage size is now based
  instead on the "remaining space" at the point at which a banner is
  laid out during the screen layout process.
- The new banner function bannerSetSize() complements
  bannerSizeToContents() by adding the ability to set a banner's size in
  terms of the natural sizing units of the window or a new
  percentage-based size.

### Changes for 3.0.5b (07/20/2002)

- Fixed a bug in the interpreter that caused sporadic crashes in
  situations involving adding lots of new properties to an object (of
  class TadsObject).

### Changes for 3.0.5a (07/14/2002)

- A new set of functions, collectively called the [banner
  API](sysman/banners.html), provides more direct programmatic control
  over the appearance of the user interface than was available in past
  versions of TADS. The new API allows the program to divide the display
  into multiple "banners," which are non-overlapping windows, each with
  its own independent output stream. The banner API provides
  functionality based on the HTML TADS \<BANNER\> tag, but offers more
  power, and is also supported on many text-only interpreters.
- Any time a nested object is defined, the compiler now automatically
  defines the property `lexicalParent` in the nested object, setting the
  property to a reference to the lexically enclosing object.
- The main text window's output stream is now **always** in HTML mode.
  The "\\" and "\\" sequences have likewise been removed, since these
  are no longer useful now that HTML mode cannot be switched on and off.
- The "\H+" and "\H-" output control sequences have been removed. These
  are no longer useful now that HTML mode switching has been removed.
- The "\\" and "\\" output control sequences have been removed. The HTML
  markups \<B\> and \</B\> should be used instead. The "\\" and "\\"
  sequences are now redundant with the HTML \<B\> markup, since text
  output streams are now always in HTML mode.
- A new system information code, SysInfoInterpClass, retrieves
  information on the broad "class" of the interpreter. This returns one
  of the following:
  - SysInfoIClassText: a text-only character-mode interpreter, such as
    MS-DOS TADS or Unix TADS. This type of interpreter uses a single
    fixed-pitch font to show all text, cannot show any graphics, and
    uses the text-only HTML subset.
  - SysInfoIClassTextGUI: a text-only interpreter running on a graphical
    platform, such as MacTADS or WinTADS. This type of interpreter might
    use proportionally-spaced fonts, and might use multiple fonts. These
    interpreters cannot show graphics using HTML, but they might use
    some graphics of their own for things like window borders. This type
    of interpreter recognizes the text-only HTML subset. Note that this
    code isn't indicative of the type of OS, but rather of the type of
    interpreter: MS-DOS TADS **always** returns SysInfoIClassText, even
    when it's running in a DOS box under Windows, because it still acts
    like a character-mode interpreter even when running on a Windows
    machine.
  - SysInfoIClassHTML: a full HTML interpreter, such as HTML TADS on
    Windows, or HyperTADS on Macintosh.
- The SysInfoHtml and SysInfoHtmlMode system information codes have been
  eliminated. The former is superseded by SysInfoInterpClass, and the
  latter has been rendered obsolete by the elimination of HTML mode
  switching.
- The TADS 3 character-mode interpreters now support the \<TAB\> tag, if
  the underlying OS code allows. This tag is supported on all full HTML
  interpreters, plus most character-mode text-only platforms. The GUI
  text-only interpreters do not support this currently. The full
  complement of \<TAB\> features is supported; see the HTML TADS
  documentation (specifically, the TADS-specific markup extensions) for
  details.
- The compiler and VM support "transient" objects, which are objects
  that do not participate in any of the VM's built-in persistence
  mechanisms (save, restore, undo, restart). A transient object is not
  saved to a saved state file, and isn't affected by restore, undo, or
  restart operations. This is described more fully in the [Object
  Definitions](sysman/objdef.html) section of the documentation.
- The [saveGame](sysman/tadsgen.html) function works differently than it
  used to. The function no longer saves the execution context, so it no
  longer has the "setjmp" behavior.
- The [restoreGame](sysman/tadsgen.html) function works differently as
  well. Because saveGame no longer saves the execution context,
  restoreGame no longer restores it, so the function simply returns on
  successful completion - it doesn't have the "longjmp" behavior any
  more. This new design is much more flexible, because it allows
  arbitrary session information to be retained across the Restore
  operation, via local variables on the stack as well as with transient
  objects, and gives the program complete control over execution flow
  throughout the operation.
- The [restartGame](sysman/tadsgen.html) function also has a new design.
  The function no longer requires a function to jump to, but simply
  resets object state and returns. As with the restoreGame changes, this
  allows the program complete control over execution flow and allows any
  amount of session information to be retained across the Restart
  operation.
- All instances of the [File](sysman/file.html) intrinsic class are now
  transient. The static creation methods of the File class always return
  transient objects.
- It is now possible to open "resources" as though they were files, and
  read their data using the [File intrinsic class](sysman/file.html). Two
  new static construction methods make this possible: openTextResource()
  and openRawResource().
- The option flags for the String.htmlify() method have been renamed, to
  make the names of the flags more descriptive of their functions. The
  flags formerly were of the form HtmlifyKeepXxx, but now use names of
  the form HtmlifyTranslateXxx. The change of terms to "translate" is a
  better match for what the flags actually mean, since the flags specify
  that certain characters are to be translated into HTML markup
  equivalents.
- In Workbench for Windows, when the status line is displayed, the
  messages from the compiler showing the build progress are not
  displayed to the debug log window, but rather to the status line. This
  makes it much easier to read the results in the log window, and
  especially makes it easier to see the error messages, since the error
  messages aren't mixed in with lots of build progress messages. When
  the status line is hidden, build progress messages are still shown in
  the log window so that the compiler's progress can be seen.
- The internal character encoding that the T3 software was using in past
  versions was not in conformance with the T3 specification, which calls
  for the standard UTF-8 encoding. The software was using an older
  encoding that had been obsoleted in the spec but was never changed in
  the software. This has been corrected; note that this change requires
  recompiling any existing games.
- Due to a bug, Workbench for Windows did not properly store directory
  paths (such as for the Include path list) in the project file when the
  paths included a colon (":") character. This has been fixed.
- A bug in Workbench for Windows caused the Window menu to display
  incorrect entries for Windows 95 and NT 4 (actually, this is more due
  to a bug in Windows 95 and NT 4, but Workbench didn't work around the
  bug, so in a sense it was a Workbench bug). This has been corrected.
- A compiler bug caused the compiler to crash (with an access violation
  or equivalent) when given a source file whose very first object
  definition started with a template containing a double-quoted string
  with an embedded expression. This problem is now fixed.

### Changes for version 3.0.4 - 06/01/2002

- Fixed a problem in the Vector intrinsic class that caused interpreter
  crashes under certain circumstances. (The exact conditions were not
  entirely predictable, because the problem had to do with an
  interaction between the Vector class, the garbage collector, and the
  undo mechanism, and only occurred when garbage collection was
  triggered after certain operations in the Vector class.)
- Added a status line to Workbench for Windows. The status line is
  optional; it can be displayed or hidden, as desired, using the "View"
  menu. When displayed, the status line shows whether or not the program
  being debugged is running, and shows the line and column number of the
  current cursor position when a source file window is active.
- Fixed a problem in Workbench that prevented parts of the window layout
  from being saved in the project configuration file when the main
  Workbench application window was closed while the program being
  debugged was still running.

### Changes for 05/19/2002

- The DOS text-mode interpreter now supports setting text colors. Text
  colors can be set through HTML, as follows:
  - The \<FONT COLOR=xxx BGCOLOR=yyy\> tag can be used to set the and
    background colors of the text. The basic set of HTML colors is
    recognized, although the effective set of available colors is
    limited to the eight ANSI colors that DOS character mode can
    display: white, black, red, green, blue, yellow, cyan, and magenta.
    Hex RGB values (for example, \<FONT COLOR='#C080E0'\> are accepted,
    but these are simply mapped to the nearest available color from the
    ANSI set. Note that if a FONT tag specifies both COLOR and BGCOLOR,
    the text will be displayed exactly as specified; if the FONT tag
    specifies only COLOR, then the background color will be inherited
    from the enclosing text, and ultimately from the \<BODY\> color if
    no enclosing text has a specific background color.
  - The \<BODY\> tag can be used to set the foreground and background
    color of the window. The TEXT attribute sets the foreground text
    color, and the BGCOLOR attribute sets the background color of the
    window. The background color affects the entire window, just as in
    the HTML interpreters, so the entire window will be redisplayed in
    its new color whenever a \<BODY BGCOLOR=xxx\> tag is displayed.
  - The parameterized color names (TEXT, BGCOLOR, STATUSTEXT, STATUSBG)
    are accepted and map to the current settings of those colors, as set
    by the TRCOLOR program.
- The new system information code SysInfoTextColors can be used to
  determine the level of color support available on the platform. The
  return value is a code indicating the level of support:
  - SysInfoTxcNone - no color support
  - SysInfoTxcParam - parameterized color names only
  - SysInfoTxcAnsiFg - The eight ANSI colors are available for text, but
    there is no capability to set the background color
  - SysInfoTxcAnsiFgBg - the ANSI colors are available for text and
    background colors (this is the code the DOS interpreter returns)
  - SysInfoTxcRGB - full RGB text color support is available (this is
    the code the Windows HTML interpreter returns)
- The new system information code SysInfoTextHilite can be used to
  determine whether or not text highlighting is available. This returns
  true if a distinctive appearance for \<B\> text is available, nil if
  not. The HTML interpreters return true for this; the text-only
  interpreters generally return true, unless running in "plain" ASCII
  mode or with a terminal or display device that cannot render anything
  special for highlighted text.

### Changes for 05/05/2002

- Fixed a problem in Workbench for Windows with libraries (.tl files)
  found via the library search path. In some cases, the files within a
  library could not be opened; in addition, the library itself was not
  always properly scanned on opening the project, so no files within the
  library were visible in the Project window. Libraries found via the
  search path should work properly now.
- Workbench for Windows now uses small (8x8-pixel) icons in the left
  margin of debugger source windows when the selected source window font
  is smaller than the standard (16x16-pixel) icons. (These are the icons
  that show the location of the current line, breakpoints, and so on
  during a debugging session.) This allows more lines to be displayed
  vertically in a source window when a small font is selected.
- When quitting out of Workbench, if a build is still running, the
  Workbench displays a dialog indicating that Workbench is waiting for
  the build to complete. In the past, there was no way to force
  Workbench to exit if the build process had become stuck. Now, the
  "waiting for build" dialog offers an "Abort" button; clicking this
  button will forcibly terminate the build, allowing Workbench to
  terminate immediately. This button is useful when the build process
  becomes stuck (which ideally should never happen, but has happened at
  times due to compiler bugs). The build process should not normally be
  aborted forcibly unless the build appears stuck, because forcibly
  terminating a process on Windows can occasionally cause Windows to
  become unstable.
- Fixed a compiler bug that made it possible for the linking step to get
  stuck in an infinite loop if the data associated with a particular
  "grammar" production became too large. This should no longer occur.
- Fixed a debugger bug that caused sporadic crashes when running games
  in Workbench.
- Added new systemInfo() codes for MNG display:
  - SysInfoMng - can the system display MNG images?
  - SysInfoMngTrans - can the system display MNG's with transparency?
  - SysInfoMngAlpha - can the system display MNG's with alpha channels
    (i.e., partial transparency)?

### Changes for 04/28/2002

- Renamed numerous macros in the system and adv3 header files to achieve
  more consistency in the naming scheme. Here's a table of the changes.
  (Sorry this isn't a Perl script or something.)
  Old Name
  New Name
  BIGNUM_SIGN
  BignumSign
  BIGNUM_EXP
  BignumExp
  BIGNUM_EXP_SIGN
  BignumExpSign
  BIGNUM_LEADING_ZERO
  BignumLeadingZero
  BIGNUM_POINT
  BignumPoint
  BIGNUM_COMMAS
  BignumCommas
  BIGNUM_POS_SPACE
  BignumPosSpace
  BIGNUM_EUROSTYLE
  BignumEuroStyle
  TYPE_NIL
  TypeNil
  TYPE_TRUE
  TypeTrue
  TYPE_OBJECT
  TypeObject
  TYPE_PROP
  TypeProp
  TYPE_INT
  TypeInt
  TYPE_SSTRING
  TypeSString
  TYPE_DSTRING
  TypeDString
  TYPE_LIST
  TypeList
  TYPE_CODE
  TypeCode
  TYPE_FUNCPTR
  TypeFuncPtr
  TYPE_NATIVE_CODE
  TypeNativeCode
  TYPE_ENUM
  TypeEnum
  PROPDEF_ANY
  PropDefAny
  PROPDEF_DIRECTLY
  PropDefDirectly
  PROPDEF_INHERITS
  PropDefInherits
  PROPDEF_GET_CLASS
  PropDefGetClass
  STR_HTML_KEEP_SPACES
  HtmlifyKeepSpaces
  STR_HTML_KEEP_NEWLINES
  HtmlifyKeepNewlines
  STR_HTML_KEEP_TABS
  HtmlifyKeepTabs
  STR_HTML_KEEP_WHITESPACE
  HtmlifyKeepWhitespace
  T3DBG_CHECK
  T3DebugCheck
  T3DBG_BREAK
  T3DebugBreak
  OBJ_INSTANCES
  ObjInstances
  OBJ_CLASSES
  ObjClasses
  OBJ_ALL
  ObjAll
  REPLACE_ONCE
  ReplaceOnce
  REPLACE_ALL
  ReplaceAll
  GETTIME_DATE_AND_TIME
  GetTimeDateAndTime
  GETTIME_TICKS
  GetTimeTicks
  INEVT_KEY
  InEvtKey
  INEVT_TIMEOUT
  InEvtTimeout
  INEVT_HREF
  InEvtHref
  INEVT_NOTIMEOUT
  InEvtNotimeout
  INEVT_EOF
  InEvtEof
  INEVT_LINE
  InEvtLine
  INEVT_END_QUIET_SCRIPT
  InEvtEndQuietScript
  INDLG_OK
  InDlgOk
  INDLG_OKCANCEL
  InDlgOkcancel
  INDLG_YESNO
  InDlgYesNo
  INDLG_YESNOCANCEL
  InDlgYesNoCancel
  INDLG_ICON_NONE
  InDlgIconNone
  INDLG_ICON_WARNING
  InDlgIconWarning
  INDLG_ICON_INFO
  InDlgIconInfo
  INDLG_ICON_QUESTION
  InDlgIconQuestion
  INDLG_ICON_ERROR
  InDlgIconError
  INDLG_LBL_OK
  InDlgLblOk
  INDLG_LBL_CANCEL
  InDlgLblCancel
  INDLG_LBL_YES
  InDlgLblYes
  INDLG_LBL_NO
  InDlgLblNo
  INFILE_OPEN
  InFileOpen
  INFILE_SAVE
  InFileSave
  INFILE_SUCCESS
  InFileSuccess
  INFILE_FAILURE
  InFileFailure
  INFILE_CANCEL
  InFileCancel
  FILETYPE_LOG
  FileTypeLog
  FILETYPE_DATA
  FileTypeData
  FILETYPE_CMD
  FileTypeCmd
  FILETYPE_TEXT
  FileTypeText
  FILETYPE_BIN
  FileTypeBin
  FILETYPE_UNKNOWN
  FileTypeUnknown
  FILETYPE_T3IMAGE
  FileTypeT3Image
  FILETYPE_T3SAVE
  FileTypeT3Save
  SYSINFO_VERSION
  SysInfoVersion
  SYSINFO_OS_NAME
  SysInfoOsName
  SYSINFO_HTML
  SysInfoHtml
  SYSINFO_JPEG
  SysInfoJpeg
  SYSINFO_PNG
  SysInfoPng
  SYSINFO_WAV
  SysInfoWav
  SYSINFO_MIDI
  SysInfoMidi
  SYSINFO_WAV_MIDI_OVL
  SysInfoWavMidiOvl
  SYSINFO_WAV_OVL
  SysInfoWavOvl
  SYSINFO_PREF_IMAGES
  SysInfoPrefImages
  SYSINFO_PREF_SOUNDS
  SysInfoPrefSounds
  SYSINFO_PREF_MUSIC
  SysInfoPrefMusic
  SYSINFO_PREF_LINKS
  SysInfoPrefLinks
  SYSINFO_MPEG
  SysInfoMpeg
  SYSINFO_MPEG1
  SysInfoMpeg1
  SYSINFO_MPEG2
  SysInfoMpeg2
  SYSINFO_MPEG3
  SysInfoMpeg3
  SYSINFO_HTML_MODE
  SysInfoHtmlMode
  SYSINFO_LINKS_HTTP
  SysInfoLinksHttp
  SYSINFO_LINKS_FTP
  SysInfoLinksFtp
  SYSINFO_LINKS_NEWS
  SysInfoLinksNews
  SYSINFO_LINKS_MAILTO
  SysInfoLinksMailto
  SYSINFO_LINKS_TELNET
  SysInfoLinksTelnet
  SYSINFO_PNG_TRANS
  SysInfoPngTrans
  SYSINFO_PNG_ALPHA
  SysInfoPngAlpha
  STATMODE_NORMAL
  StatModeNormal
  STATMODE_STATUS
  StatModeStatus
  SCRFILE_QUIET
  ScriptFileQuiet
  SCRFILE_NONSTOP
  ScriptFileNonstop
  CHARSET_DISPLAY
  CharsetDisplay
  CHARSET_FILE
  CharsetFile
  firstPerson
  FirstPerson
  secondPerson
  SecondPerson
  thirdPerson
  ThirdPerson
  spellIntTeenHundreds
  SpellIntTeenHundreds
  spellIntAndTens
  SpellIntAndTens
  spellIntCommas
  SpellIntCommas
  Logical
  logical
  LogicalRank
  logicalRank
  LogicalRankOrd
  logicalRankOrd
  Dangerous
  dangerous
  NonObvious
  nonObvious
  IllogicalNow
  illogicalNow
  Illogical
  illogical
  Inaccessible
  inaccessible
  DefaultReport
  defaultReport
  MainReport
  mainReport
  ReportBefore
  reportBefore
  ReportAfter
  reportAfter
  ReportFailure
  reportFailure
  IsNonDefaultReport
  gIsNonDefaultReport
  SingleDobj
  singleDobj
  SingleIobj
  singleIobj
  DobjList
  dobjList
  IobjList
  iobjList
  NumberPhrase
  singleNumber
  TopicPhrase
  singleTopic
  LiteralPhrase
  singleLiteral
  DirPhrase
  singleDir
- Added Phil Lewis's new Adv3 Reference Help to Workbench for Windows.
  This new Windows Help file is a reference to the classes in the adv3
  library; Phil created it for his own use but has graciously offered it
  for inclusion in the Author's Kit distribution. Phil says the
  reference isn't complete, but it has a wealth of information all the
  same. The Adv3 Help can be reached from the "TADS 3 Library" item on
  the Workbench "Help" menu.
- The compiler can now search for source files using a user-specified
  list of directories. This allows makefiles (.t3m files) to specify
  source files using only relative filename paths, eliminating any
  dependency in a makefile on the local system's directory structure and
  thus allowing the project to be easily used on other systems. The
  compiler searches for its files by looking in the following locations,
  in order:
  - The current working directory (for Workbench users, this is the
    directory containing the .t3m file for the project).
  - The directories specified with "-Fs" compiler options, in the order
    of the options.
  - The directories specified with the new "user library" mechanism.
  - The "system library" directory. This is the special directory
    containing the compiler's own libraries. This directory varies by
    system, but it is normally set up automatically when TADS is
    installed and requires no user action to configure.

  The "user library" list is specified using a system-dependent
  mechanism:
  - For the DOS/Windows command-line compiler (i.e., run from a command
    prompt), set the environment variable TADSLIB to a list of
    directories, separated by semicolons (";").
  - For Workbench for Windows, enter the list of directories in the
    "Libraries" page of the Workbench preferences dialog, reachable from
    the "Options" item on the "View" menu.
  - The mechanisms for other systems are yet to be determined, but in
    all likelihood Unix will use the same TADSLIB environment variable
    as the DOS version.
- Workbench for Windows has a new option to automatically load the most
  recent project when Workbench is started. To set the start-up mode,
  use the "Start-Up" page of the Workbench preferences dialog, reachable
  from the "Options" item on the "View" menu.
- Added the new systemInfo() code SysInfoOgg, which senses whether or
  not the interpreter supports Ogg Vorbis audio playback.
- Changed `inputEvent()` so that it accepts a nil timeout argument
  value, for consistency with `inputLine()`. A nil value for the timeout
  is equivalent to omitting the timeout argument entirely: it indicates
  that the input should be allowed to proceed indefinitely.
- The compiler now stores preprocessor symbol (macro) definitions with
  the debugger records of the compiled program, when compiling for
  source-level debugging (i.e., using the "-d" compiler command-line
  option). The debugger uses the preprocessor symbols when parsing
  expressions during the debugging session, so it is now possible to
  interactively evaluate expressions involving macros. Note that the
  compiler keeps debugging records for a macro only if the macro (1) is
  never undefined (using \#undef) or redefined with a different
  expansion within a given module, and (2) has the exact same expansion
  in every module in which it is defined; these restrictions mean that
  only macros with consistent "global" meanings across the entire
  program are visible in the debugger.
- Fixed a problem in Workbench for Windows that caused an incorrect name
  to be stored for the game's initial source file when creating a new
  project.
- Fixed a compiler problem that caused the compiler to crash when
  confronted with a constant index expression where the indexed value
  was not a list (e.g., `1[1]`).
- Fixed a problem in the Windows HTML interpreter that prevented
  interrupted command lines from continuing correctly. When a command
  line input was interrupted by a timeout, the command line that was
  under construction when the timeout occurred was not properly restored
  for further editing. This has been corrected.
- Fixed a problem in the VM that caused the VM to crash under rare
  circumstances. The problem was particularly likely to occur when
  stepping through large amounts of code with the debugger.
- Fixed a problem in the character map compiler (mkchrtab) that
  generated corrupted character map files when the source file had
  duplicated display mapping entries.
- The distributions (including the installer kits and the source code
  distribution) now include a full set of character mapping files that
  should cover most users on most platforms. For a listing of the
  included codings, see charmap/README.txt. (The full set adds only
  about 25k to the compressed distribution files, which seems a small
  cost for the simplicity of having an essentially universal set of
  mappings available with the default install.)
- The Windows Author's Kit installer now associates .t3m files with
  Workbench, so that double-clicking on a .t3m file from Windows
  Explorer will open the file in Workbench. (The 4/7/2002 version still
  set the association for .t3c files instead, despite Workbench's switch
  to .t3c files for storing project configuration information.)
- Fixed a problem that caused the compiler to display the incorrect text
  for invalid tokens in certain error messages related to 'grammar'
  statement syntax.

### Changes for 04/07/2002

- Workbench for Windows now uses the compiler makefile (.t3m) file
  format to store its project information. This means that a Workbench
  project file can be used directly as a compiler makefile, using the
  compiler's "-f" option. For the moment, Workbench is still capable of
  loading
- Workbench on Windows now monitors for Ctrl+Break, and breaks into the
  debugger when this key combination is detected. This allows easily
  breaking into the debugger if the .t3 program enters an infinite loop.
- The 'replace' and 'modify' keywords can now be used to change
  'grammar' definitions. Refer to the [Grammar
  Rules](sysman/gramprod.html) documentation for details.
- A grammar production object can now be declared without creating any
  rules associated with the production. The new syntax is simply
  "grammar *production_name*;" (that is, a "grammar" statement that
  simply ends after the name of the production). This can be useful for
  libraries that want to define rules that refer to productions for
  which the library itself provides no rules, so that games based on the
  library can fill in the grammar definitions for the productions. In
  the past, if a production was referenced as a subproduction from one
  or more rules but had no rules of its own defined, the linker
  generated an error, because it is likely in such cases that the rules
  referring to the undeclared production were misspelled and meant to
  refer to a declared production; this new syntax gives the author a way
  to tell the compiler explicitly that a production name was used
  intentionally, even if the production has no rules.
- Added new syntax that allows multiple part-of-speech properties (such
  as "noun" or "adjective") to be used as a single token matcher in a
  grammar rule. The new syntax uses a list of properties in angle
  brackets: `<noun adjective plural>`. When this syntax is used, an
  input token matching any of the part-of-speech properties in the list
  matches the rule token position.
- Moved the "build configuration" information that was formerly stored
  in object (.t3o) files into the symbol (.t3s) files instead. The
  compiler uses the build configuration data stored in these files to
  determine if recompilation of a given source file is necessitated by
  build configuration changes since the last time the file was compiled.
  In the past, when the information was stored in the object files, the
  compiler unnecessarily regenerated symbol files repeatedly when
  compilations failed due to syntax errors, because compilation didn't
  get far enough to store the build data. Moving the information to the
  symbol files allows the compiler to skip symbol table generation when
  a previous compilation generated a valid symbol file for a given
  module. This saves time in the build-edit-build cycle when a program
  is initially compiled and contains syntax errors.
- Added two new pseudo-variable keywords: `targetobj` and `definingobj`.
  These pseudo-variables are similar to `self` and `targetobj`, in that
  they act like read-only variables (i.e., you cannot assign values to
  them), and they are automatically maintained by the interpreter to
  keep track of the current method context. `targetobj` returns the
  "original target object" of the current method; this is the object
  that was targeted by the method call that reached the current method.
  The target object is set each time a method is called normally or via
  `delegated`, and remains the same as methods are invoked via
  `inherited`. `definingobj` is the object that defines the currently
  executing method; this is normally simply the object where the method
  was actually defined in the program's source code.
- Removed the `getMethodDefiner()` intrinsic function from the
  "tads-gen" function set. This function has been replaced by the new
  pseudo-variable `definingobj`.
- Changed the interface of the Object.propInherited() intrinsic class
  method. The method now takes an additional argument (positionally the
  second argument in the new interface) giving the original target
  object of the call. In cases where the caller wishes to know if the
  currently active method can inherit a base class method, the value for
  the new argument should simply be `targetobj`.
- Changed the way `inherited` behaves after `delegated` is used. In the
  past, the inheritance mechanism tried to find the defining object of
  the method with the `inherited` operator in the inheritance tree of
  "self". After `delegated`, the defining object is normally not related
  by inheritance to "self", so the old search pattern normally failed to
  find any inherited instance of the method. Now, the interpreter keeps
  track internally of the "original target" object in addition to the
  "self" object; the original target is always the target of the last
  explicit method call or the target of the most recent `delegated`
  operator. The `inherited` operator uses the original target object as
  the starting point of the inheritance tree search, rather than "self";
  this allows `inherited` to find methods inherited from base classes of
  the delegatee when appropriate.
- Fixed a compiler bug that caused incorrect code to be generated for
  statements like this:
  `if (`*`constant_expr`*` && `*`non_constant_expr`*`)` - that is, an
  "if" whose condition expression consists of a constant expression
  (i.e., an expression whose value can be determined at compile-time)
  and a non-constant expression joined by the "&&" operator. The code
  that the compiler generated caused unpredictable results at run-time,
  and was able to crash the interpreter in some cases. This has been
  corrected.
- Increased the standard VM stack size to 4096 stack slots (from 1024).
- Expanded the compiler's maximum symbol length to 80 characters, to
  accomodate the longer symbols generated by the new treatment of
  production match object tagged names as actual compiler symbols.
- Fixed a problem that caused a sporadic interpreter crash when using
  restartGame(). This crash occurred only rarely, and was related to
  memory management during program re-initialization. This should no
  longer occur.
- Fixed a problem with restoreGame() that caused modifications to
  intrinsic classes to be lost in some cases. This problem occurred
  rarely, and should no longer occur.
- Changed the character mapping input file format slightly. The
  "unicode_to_local" keyword has been renamed to "display_mappings", and
  has a slightly different effect: in the "display_mappings" section,
  each character mapping gives the **Unicode** expansion of a Unicode
  code point; that is, each mapping specifies a set of Unicode
  characters to substitute for the Unicode character being mapped. The
  expansion is then further translated automatically by the character
  mapper to the local character set. Each expansion **must** map to
  characters defined in the one-to-one mapping section (i.e., the set of
  mappings before the "display_mappings" keyword). Note in particular
  that an expansion **cannot** map to characters that are themselves
  further expanded. The purpose of this change is to allow the
  interpreter to perform expansion mappings - that is, mappings that can
  translate one Unicode character to several display characters - while
  still in the Unicode domain, and hence to perform operations such as
  word-wrapping on the expansions. The console output formatter uses
  this to properly word-wrap lines with expanded display mappings.

### Changes for 03/16/2002

- Fixed script-reading mode in the interpreter. Past versions did not
  correctly read input scripts (using the command-line interpreter's
  "-i" option, for example).
- Added the new input event code INEVT_END_QUIET_SCRIPT, which is
  described in the documentation for the
  [inputLineTimeout](sysman/tadsio.html) intrinsic function.
- Added a couple of small usabilty enhancements to Workbench for
  Windows:
  - Pushing the Return/Enter key when keyboard focus is in the Project
    window opens the selected module in a source file window, if a
    module is selected. This allows easier keyboard navigation of the
    Project file list.
  - Double-clicking on a module in the Project window now moves keyboard
    focus to the newly-opened source file window. In the past, focus
    stayed on the Project window, so context-sensitive commands (such as
    "Find") did not apply to the newly-opened source window until
    manually clicking on the window to activate it.
- Fixed a bug in `mkchrtab` (the character map compiler) that caused
  incorrect mappings in some compiled mapping files having display
  (from_unicode_to_local) mappings that expanded to more than one byte.
- Fixed a problem in the Windows interpreter that made it incompatible
  with Windows 95. The interpreter should once again be compatible with
  Windows 95.

### Changes for 03/10/2002

- Added the new method removeElement() to the [Vector intrinsic
  class](sysman/vector.html). This new method removes an element by
  value, modifying the vector in-place.
- Added the new method forEachWord() to the [Dictionary intrinsic
  class](sysman/dict.html). This new method provides a way of enumerating
  all of the entries in a Dictionary object.
- Added information to the LICENSE.TXT file making it clear that derived
  versions of the library are permitted with few restrictions.
- The "!" operator can now take an object reference as its operand; when
  applied to a non-nil object reference, "!" yields nil. This means that
  constructs such as "if (!obj)" are now treated as equivalent to "if
  (obj == nil)"; such constructs formerly generated a run-time error. In
  addition, property ID's, single-quoted strings, lists, and function
  pointers can all be used as operands of "!", and "!" applied to any of
  these types yields nil.
- Fixed a compiler bug that caused the compiler to crash in some cases
  when confronted with an empty pair of parentheses within a grammar
  rule, such as `grammar myProd: ('mytoken' ())`.
- Fixed a compiler bug that caused the compiler to crash in some cases
  when given a method definition with no code body and the end of the
  object immediately following.
- Fixed a compiler bug that caused incorrect code generation for an 'if'
  with a constant controlling expression that evaluated to true and no
  'else' clause. In such cases, the true branch of the 'if' was not
  generated; this has been corrected.
- The project file extension for Workbench for Windows is now ".t3c" (it
  was formerly ".tdc", the same as it was for the TADS 2 Workbench). The
  extension has been changed to allow the Windows desktop to launch the
  appropriate version of Workbench when the user double-clicks a project
  file from the desktop and both TADS 2 and ADS 3 Workbench versions are
  installed.
- Fixed a problem in the VM that caused repeated "terminate game"
  dialogs to appear in Workbench for Windows when the user attempted to
  compile the game after the debugger intercepted a run-time error.
- Fixed a problem in the character map compiler (mkchrtab) that caused
  invalid map files to be generated if the source file had more than one
  symmetric (bidirectional) mapping assigned to the same Unicode code
  point. The character map compiler now generates a warning when these
  collisions occur, and generates valid map files even when collisions
  are present by ignoring redundant mappings.

### Changes for 02/17/2002

- The compiler now shows a summary count of warnings and errors at the
  end of the compiler console output when either count is non-zero, to
  make it more obvious that messages were generated during the
  compilation. If many modules are included in a compilation, the status
  messages that the compiler generates as it works through the module
  list can make it easy to miss an error or warning mixed in among all
  the status messages. The new summary at the end of the compilation
  should make it easier to notice when something requires attention. No
  summary counts are displayed when there are no warnings or errors;
  this is intended to make it even easier to notice when something is
  wrong, since authors will not be accustomed to seeing a summary count
  at all when everything is well.
- The [Iterator intrinsic class](sysman/iter.html) has the new methods
  getCurVal() and getCurKey(), which return the value and key of the
  current element of the iteration, respectively. For indexed
  collections, the "key" is the index of the current element.
- LookupTable.forEach() no longer passes the key argument to the
  callback. If the key is desired, use the new method forEachAssoc()
  instead. This allows LookupTable to be used more interchangeably with
  other Collection subclasses, since its forEach() method has the same
  interface as the corresponding method of other Collection subclasses.
- LookupTable, List, and Vector now have the additional method
  forEachAssoc(func), which calls func(key,val) for each element of the
  collection. For List and Vector, the "key" is the index of the
  element; for LookupTable, it is the key for the entry.
- The Array intrinsic class has been deleted; Vector should be used
  instead. The Array class was too similar to the Vector class to
  justify its existence as a separate type, so the functionality of
  Array and Vector are now combined into the single Vector class.
- When a Vector is used as the left-hand side of a '+' or '-' operation,
  in the past, the VM modified the left-hand side Vector object
  directly. This has been changed so that a new Vector is created, and
  the original left-hand Vector is left unchanged. The old behavior was
  confusing in that it gave the '+' and '-' operators side effects,
  which is inconsistent with the behavior of the operators in other
  situations.
- A new Vector method, appendAll(), allows appending the individual
  elements of a List or Vector to another Vector in-place (i.e., without
  creating a new Vector object, as the '+' operator does).
- The Vector methods getUnique() and subset() now return a new Vector to
  store the result of the operation. In the past, these methods modified
  the original Vector in place.
- In the past, when a Vector was used as the right-hand side of a '+'
  operator whose left-hand side was a List or Vector, the List or Vector
  on the right was the single new element concatenated to the left-hand
  collection. This was inconsistent with the handling of List values; a
  List value concatenates its elements individually when used as the
  right-hand side of a '+' operator. For consistency, Vector now
  concatenates its elements individually when used on the right side of
  a '+' operator. Similarly, Vector values now subtract their elements
  from the left-hand side collection when used as the right-hand side of
  a '-' operator, also for consistency with the List type's behavior.
- Fixed a problem in the VM that caused the VM to lose track of
  intrinsic class modifiers after a RESTORE operation. Intrinsic class
  modifiers will now properly survive RESTORE operations.

### Changes for 02/09/2002

- Changed `inputLineTimeout` so that it accepts a nil timeout argument
  value. A nil value for the timeout is equivalent to omitting the
  timeout argument entirely: it indicates that the input should be
  allowed to proceed indefinitely.
- Improved `inputLineTimeout`'s interaction with the OS layer so that
  the portable code can handle complete non-implementation of
  input-with-timeout by the OS layer.
- Changed `getTime(GETTIME_TICKS)` so that the function always chooses
  the zero point of the system clock as the time of the first call to
  the function. This reduces the likelihood that a game will encounter a
  roll-over of the system clock, which could lead to confusion in
  interpreting time differences and the ordering of events.
- Changed the names of two methods in the LookupTable intrinsic class.
  The method formerly called countBuckets() is now getBucketCount(), and
  the method formerly called countEntries() is now getEntryCount().
  These names match the names as given in the documentation, but the
  header file (lookup.h) had the old names.
- Added the compiler option "-clean", which causes the compiler to skip
  ordinary compilation and instead simply remove all derived files that
  the compilation would have produced; in particular, this removes the
  symbol (.t3s), object (.t3o), and image (.t3) files that the
  compilation would have produced.
- Added the compiler option "-Pi", which causes the compiler to skip
  ordinary compilation and instead write to the standard output a list
  of files included with `#include` directives throughout the program.
  The compiler runs the normal preprocessing, and shows only files
  included in conditional compilation sections that are selected in the
  compilation (in other words, the list does not include any files
  included from within the false branches of `#if` or other conditional
  compilation directives). In the generated list, the files are listed
  one file per line, and each line specifying a file consists of the
  characters "`#include`", followed by a single space, followed by the
  name of the included file, followed by a newline sequence. The name of
  the included file isn't enclosed in any quote marks or other
  delimiters. This format is intended to simplify automatic processing
  of the list by clearly marking each line in the output that names an
  included file. Note that the list of included files might include a
  given file more than once, because each file is listed as it's
  included, and it is possible to include a given file more than once.
- When the compiler is run with the "-P" option (which writes the
  preprocessed version of the source to standard output), the compiler
  now prefixes the generated source with the directive `#charset "utf8"`
  to indicate the character set of the preprocessed source.
- Added a compiler warning message when the preprocessor finds a line
  that ends with a backslash followed by whitespace. While this format
  is legal (because it could be useful in defining a macro that is later
  "stringized"), it is highly unusual. Since trailing spaces are not
  usually visible in a text editor, the programmer might not be aware of
  their presence; and since the presence of the trailing spaces
  materially changes the meaning of the program, the compiler warns
  about them. Note that the warning can be suppressed by adding a
  comment at the end of the line; this doesn't change the meaning of the
  program but does make the spaces visually evident in a text editor, so
  the compiler recognizes that the warning isn't necessary in this case.
- Fixed a VM problem that caused the garbage collector to incorrectly
  delete intrinsic class objects under certain unusual circumstances.
  When an intrinsic class is used implicitly but never specifically
  declared in the compiled program, the VM creates an object to
  represent the intrinsic class during the initial program load. In the
  past, it was possible for the garbage collector to regard such an
  object as unreachable even though it is always reachable via the
  native code implementing its corresponding intrinsic class. This
  problem sometimes led to VM crashes. The problem should no longer
  occur.
- Fixed a compiler problem that caused incorrect compilation for a
  grammar rule specified with an alternation (two or more sub-rules,
  each separated by an "\|" symbol) and an empty final sub-rule. In such
  cases, the compiler incorrectly generated two copies of the empty
  sub-rule, leading to two match objects being created at run-time each
  time the empty sub-rule was matched. This has been corrected.
- Changed `inherited` so that it searches for the next inherited
  definition of the property as though the currently active method (and
  any overriding definitions) had simply never been defined. This makes
  `inherited` work roughly the same way as the `inheritNext` method that
  was formerly defined in the `MixIn` class in the adventure game
  library (adv3).
- Added a new `Object` method, `propInherited`, which determines if a
  method is inherited, using the new rules of the `inherited` operator.
  This provides functionality equivalent to the `canInheritNext` method
  formerly defined in the `MixIn` class in the adventure game library.

### Changes for 01/13/2002

- The compiler can now read ["library" files](sysman/build.html), which
  are lists of source files to be included in the compilation. Library
  files can be used to simplify compiler command lines and makefiles
  when including sets of source files that usually act as a group, such
  as the standard adventure library sources.
- Workbench can now show library files in the project window. You can
  add a library file to the project window's source file list in the
  same way as you can add a source file; the library shows its contained
  source files as a subtree. Each source file within a library is shown
  with a checkbox, indicating whether or not the file is included in
  compilations; if you want to exclude a file within a library from
  compilation, click on the checkbox to remove the checkmark. The
  checkbox settings are stored with the project and don't affect the
  library itself, so you can use the same library in a different
  project, and include and exclude different sets of files.
- The debugger no longer uses a RuntimeError exception to terminate the
  program being debugged. In the past, when the user terminated the
  running program using the debugger "Stop" button, or by starting a new
  compilation of the program while the program was still running, the
  debugger attempted to terminate the program by throwing a RuntimeError
  with system error code 2390. This approach wasn't completely reliable,
  because it allowed the running program to catch the exception and keep
  running; programs sometimes inadvertantly caught the error as part of
  an inclusive "catch" handler, causing strange interactions with the
  debugger user interface. The debugger now halts the program by telling
  the VM not to execute any more program instructions, which guarantees
  that the program stops immediately. This new approach should be much
  more robust and should avoid the strange effects that sometimes
  occurred with the old mechanism.
- Fixed a problem in the compiler that caused the compiler to hang when
  given a makefile (a .t3m file) that didn't end with a newline
  character.
- Fixed a compiler problem that generated an incorrect set of grammar
  rule patterns for grammars involving nested alternatives (i.e.,
  parenthesized "\|" expressions). In the past, the compiler incorrectly
  generated multiple copies of the top-level expressions in such rules,
  leading to run-time generation of multiple redundant matches for these
  expressions. This has been corrected; the compiler now generates only
  one copy of each top-level rule in an alternation.
- Fixed an interpreter problem that caused the interpreter to crash when
  an HTML \<TITLE\> tag was displayed.
- Fixed a problem in the debugger that caused memory leaks and other
  incorrect behavior when the user attempted to run the program, but the
  program had not been compiled (or had not been compiled with debugging
  information).
- When Workbench needs to find a source file during program tracing in
  the debugger, it now scans the project list to find the file. In the
  past, the debugger used only the source path to find files, leading to
  annoying interactive requests to locate files that were in plain view
  in the project window.

### Changes for 01/05/2002

- Added the new intrinsic functions
  [`inputLineTimeout()`](sysman/tadsio.html), which allows reading a line
  of text with an optional timeout. This function can be used to combine
  command-line input with real-time effects, because it allows a command
  line to be interrupted if the command isn't completed before a
  real-time interval elapses.
- Fixed a problem in the Dictionary class: the `isWordDefinedTrunc()`
  method used the wrong truncation length in its comparison - it
  required the string to be matched to be at least one character longer
  than the dictionary's truncation length. It now uses the correct
  truncation length.

### Changes for 12/30/2001

- The compiler now parses a `delegated` expression so that the object
  expression is taken to exclude function or method calls. That is, if
  parentheses follow the expression giving the target object of the
  delegation, these are taken to give the argument list of the
  delegation call itself, rather than of the expression giving the
  target object value. This change makes `delegated` syntactically
  parallel to `inherited` in that the target property can be omitted
  from the expression, in which case the delegation target property is
  the same as the property being evaluated in the caller. (If a function
  or method call is desired in the object expression itself, this can be
  easily accomplished by enclosing the entire object expression in
  parentheses.)
- Workbench now stores its project configuration files so that the
  absolute file system path to "system" files is not stored; instead,
  system files are flagged as system files, and their locations are
  stored relative to the system directory. A "system" file is simply a
  file that is stored in the Workbench install directory or any of its
  subdirectories; the system directory is the directory containing the
  Workbench program executable. This change makes project configurations
  more readily moveable from one system to another, because it
  eliminates any dependency in the project configuration on the
  particular directory in which Workbench is installed.
- The compiler now treats the symbol and object path options as
  overriding all module source paths, even when the filenames are given
  with "absolute" (as opposed to relative) path names.

### Changes for 12/23/2001

- Added a checksum to the saved game format. This allows the interpreter
  to validate a saved state file, to ensure the file wasn't corrupted
  (such as by a text-mode ftp transfer), before attempting to load the
  file.
- Fixed a problem in the Vector intrinsic class that prevented two
  equivalent vectors from comparing equal.
- Fixed a compiler problem that caused the compiler to crash in some
  cases when a symbol was redefined from function to another type.
- Fixed a compiler problem that caused incorrect initialization of
  Dictionary objects in the image file in certain cases when
  preinitialization ran (i.e., when compiling with the -d option).

### Changes for 12/09/2001

- The compiler now accepts URL-style portable path names in \#include
  directives, and in fact prefers them. Refer to the [preprocessor
  chapter](sysman/preproc.html) for details.
- Added a new method, [createClone](sysman/tadsobj.html), to the
  TadsObject intrinsic class. This method returns a newly-created object
  that is an identical copy of the original object.

### Changes for 12/02/2001

- Changed the tokenizer interface (in tok.t) to return a list of token
  elements, rather than parallel value/type lists. Each token element in
  the token list is a sublist, consisting of the following values:
  - \[1\] = token value, as set by the matched rule
  - \[2\] = token type enum, as set by the matched rule
  - \[3\] = original source text matched by the rule that matched the
    token

  The tok.h header defines macros that extract these elements of a
  token; these should be used rather than direct list elements to make
  your code more readable. The macros are getTokVal(tok),
  getTokType(tok), and getTokOrig(tok). So, if `lst` is a variable
  containing the result of calling Tokenizer.tokenize(), and you want to
  retrieve the type enum for the third token, you'd write
  `getTokType(lst[3])`.
- Changed the tokenizer's rule specifications for greater power and
  symmetry in creating rules:
  - The "flags" entry has been eliminated. The functionality of the only
    flag that was defined, TOKFLAG_SKIP, has been replaced with the
    improved behavior of the rule processor. Since the processor
    method's interface is now powerful enough to subsume the
    functionality of the "skip" flag, the special case embodied in the
    flag is no longer needed.

  - The processor method (element \[3\] in the sublist defining a rule)
    has a new interface. In the past, this method took a text match and
    returned a token value. This interface meant that a given rule was
    limited to generating exactly one token. The new interface takes
    three arguments, and returns no value:

            self.(processorProp)(txt, typ, toks)
          

    *txt* is the text that matched the rule (this is the same as the
    lone argument to the old interface). *typ* is the token type from
    the rule (i.e., element \[2\] of the sublist defining the rule).
    *toks* is a Vector containing the token list under construction. The
    method must append the appropriate set of tokens to the Vector in
    *toks*. The method is not required to append any tokens; the rule in
    the default tokenizer rule set that matches whitespace, for example,
    doesn't generate any tokens, since whitespace characters have no
    significance other than separating tokens in the default rule set.
    The rule is also allowed to generate more than one token; this is
    useful for rules that generate certain tokens types only if they
    immediately follow particular text patterns. Note that the processor
    method is not required to use the *typ* value given, since each new
    token the method adds to the result Vector can be of whatever type
    is appropriate; the type information is included so that a single
    processor method can be re-used for similar types of processing that
    produce different token types.
- Changed the intrinsic GrammarProd.parseTokens() method to accept
  tokens in the new format returned by the tokenizer. The method now
  takes only two arguments, not three: the second argument that formerly
  gave the token type list has been eliminated, since each element of
  the token list now includes the type information along with the token
  value information.
- Changed the Dictionary and GrammarProd intrinsic classes to use
  case-sensitive matching exclusively. Case sensitivity in the past was
  inconsistent; all functions are now case-sensitive for consistency.
- The template inheritance mechanism is somewhat altered from its first
  implementation. The 'inherited' keyword can now go anywhere a
  template; the inherited token lists are treated as substitutions for
  'inherited' at the point at which it appears in the list. Furthermore,
  the compiler now treats each template involving inheritance as a macro
  defining all possible inherited templates; when a template is used, it
  is matched based on the entire expansion of the template, not on the
  partial superclass template. The net effect is that a template
  definition involving an 'inherited' token is identical to the implied
  set of fully expanded template definitions.
- The -Fs option can now be used to specify a search path for source
  files, rather than a single path for all sources as it did in the
  past. Multiple -Fs options can be specified; each one adds one
  directory to the source search path. When a source file name is
  specified in "relative" form (as defined by local filename
  conventions), the compiler first looks for the file in the working
  directory, then searches the directories specified with -Fs options,
  in the order in which the options were specified. The compiler uses
  the first instance of the file it finds.
- The compiler automatically adds the system-dependent default system
  library directory to the source search path. This directory is always
  searched *after* all directories specified by the user with -Fs
  options. In effect, the compiler adds an extra -Fs option for the
  default system library directory after all user-specified -Fs options.
  This allows library sources (such as reflect.t or gameinfo.t) to be
  included in a build configuration (in a .t3m file, for example)
  without any path information; the compiler will automatically find
  these system files using the implied -Fs setting.
- The compiler's default system library and include directories are now
  system-dependent. On DOS and Windows systems, the default system
  header and library directories are the same as the compiler
  executable's directory (this is the main directory where the TADS 3
  tools are installed). Check your platform-specific release notes for
  details on the locations of these directories on other platforms.
- Fixed a problem that allowed objects to be deleted by the garbage
  collector when they were referenced as superclasses of other objects.
  This caused unpredictable behavior, including interpreter crashes.
- Fixed a problem that affected the results of t3GetStackTrace() in the
  non-debug interpreter when a run-time error occurred. In such cases,
  the stack trace incorrectly omitted the innermost level, where the
  error actually occurred. This has been corrected.
- Fixed a compiler problem that sometimes caused the compiler to crash
  after attempting a link that involved unresolved external symbol
  references.
- Fixed a GrammarProd parsing problem that caused incorrect token index
  information to be returned in certain cases involving productions with
  no tokens.

### Changes for 11/17/2001

- Extended the [object template](sysman/objdef.html) syntax to allow
  template inheritance. A template definition can now include the
  keyword "`inherited`" as its final token; this indicates that the
  template "inherits" the templates of its class's superclasses.
- The compiler now detects and reports circular class definitions (that
  is, class definitions where the class being defined is a subclass of
  one or more its purported superclasses). In the past, the compiler did
  not detect such definitions and could get stuck in infinite loops or
  unbounded recursion when they were made.
- Fixed a compiler problem that sometimes caused crashes when an actual
  parameter list in a macro expansion was not properly terminated (with
  a closing parenthesis) in the source file.
- Fixed a problem that affected a few Vector methods by incorrectly
  returning an empty vector. This affected the appendUnique, getUnique,
  and mapAll methods.
- Fixed a compiler problem that caused a modified intrinsic class to
  show a spurious extra property in its getPropList() result list. This
  property had an undefined type (type code 16).
- Fixed a problem in the Vector class that caused unpredictable results,
  including crashes, when adding a large list to a vector.
- Fixed a problem in the debugger that caused unpredictable results,
  including crashes, when interrupting the program in mid-statement in
  certain circumstances. The problem occurred sporadically in such cases
  when the garbage collector happened to run while the debugger had
  control, but didn't appear until after returning control to the
  program. This problem only manifested itself rarely, but could cause
  crashes when it did appear.
- Fixed a compiler problem that caused incorrect code to be generated
  for calls to operator `new` where the actual parameters included one
  or more "..." expressions (i.e., expanded variable argument lists).
  This affected the *calling* end, not the receiving end. The problem
  caused the caller to send one fewer argument than it should have.
- Fixed a problem in the output formatter that caused log files to be
  generated without proper line wrapping in the HTML version of the
  interpreter.
- Changed the output formatter so that \<BANNER\> contents (everything
  from a \<BANNER\> tag to the corresponding \</BANNER\> close tag) are
  not included in the output log. The contents of a banner are not
  logically part of the main text stream so are not appropriate for
  inclusion in a log file. This ensures that HTML-based status lines and
  other special display effects do not interfere with the log file
  contents.

### Changes for 10/21/2001

- Fixed a problem that made it impossible to use anonymous functions
  that referenced "self" or properties of "self" within property values
  defined as simple value expressions (as opposed to methods).
- Changed the compiler to allow using short-form anonymous functions
  (i.e., using the "`{args: }`" notation, rather than the
  "`new function`" notation) as list elements without enclosing the
  functions in parentheses. In the past, the compiler considered an open
  brace at the start of a list element expression as an error; this was
  an heuristic intended to catch unterminated list expressions, but its
  utility as a diagnostic tool was not sufficient to justify the
  superfluous syntax requirement it imposed for this case.

### Changes for 10/07/2001

- Added special character sequences '\\' and '\\'. These are used to
  group a set of output formatter setting changes: any changes to the
  formatter settings made after a '\\' sequence are undone at the
  corresponding '\\' sequence. In particular, the following state
  changes are affected:
  - \H+
  - \H-
  - \H

  These new sequences can be used to isolate a run of text from the
  enclosing text's formatter settings, so that the text within the '\\
  \\' pair doesn't have to worry about the enclosing settings and has no
  effect on the enclosing settings. This can be useful, for example, if
  a run of text wants to output an HTML-significant character, but
  doesn't know if it will be called with HTML interpretation turned on
  or off. In such cases, the text can turn HTML interpretation off
  within the brackets without affecting its caller: "\\\H-&\\" would
  display an ampersand, regardless of whether HTML mode was in effect
  before the text was displayed, but will have no effect on subsequent
  text's HTML mode.
- Fixed problems in several intrinsic classes related to saving and
  restoring. These bugs caused crashes in some cases when restoring
  saved positions.
- Changes the restartGame() behavior slightly. The function invoked
  after the restart is now passed the original command line arguments to
  the program; the arguments are passed as a list in the second
  parameter to the function. This allows the function to invoke the
  normal main program entrypoint as though the program were being
  started normally.
- If a saved position file is found to be corrupted in the course of
  being restored, the interpreter will now force an exit. There is no
  way for the program to retain control in such cases. If a saved
  position file is corrupted, the partially restored machine state at
  the point at which the corruption is detected must be considered
  invalid, so the VM cannot safely pass control back to the program. In
  such cases, the VM terminates the program to avoid the high likelihood
  that the program would crash the VM due to the program's partially
  corrupted internal state.
- Fixed some problems in the "undo" mechanism that caused unpredictable
  behavior (including VM crashes) under some circumstances.
- Fixed a problem in the debugger that caused, in some cases, the
  incorrect error code to be reported in the RuntimeError object
  representing a VM exception. This only occurred when the program was
  being run in the debugger, and only then when certain types of
  expressions were evaluated. This has been corrected.

### Changes for 09/30/2001

- Changed the symbol file format to allow inclusion of intrinsic
  function and intrinsic class registration lists. This is an internal
  change only; its purpose is to make the compiler more flexible in
  correlating the internal linkage identifiers of intrinsics across
  object modules to eliminate the possibility of certain confusing
  linking errors. In the past, it was necessary to keep intrinsic
  definitions in a consistent order across separately compiled modules,
  which was problematic for library developers and especially for
  library extension developers. Adding the information to the symbol
  files allows the compiler to build an intrinsic identifier list
  globally across modules to ensure a consistent ordering, even when the
  individual modules have conflicting orderings. This change should not
  be visible to users except to the extent that it eliminates certain
  errors relating to intrinsic class and intrinsic function inclusion
  order.

### Changes for 09/09/2001

- Added a new function to the ["tads-io" function
  set](sysman/tadsio.html): `flushOutput()`, which immediately flushes
  text output to the display and updates the window, if possible.
- Fixed a compiler bug that caused incorrect code to be generated for
  implicit constructors for classes with multiple superclasses. This
  code generation error did not manifest itself frequently, but when it
  did show up caused problems ranging from data value corruption to
  interpreter crashes.
- The debugger now includes an ampersand prefix when displaying property
  pointer values.

### Changes for 08/26/2001

- Added new syntax that provides a short-hand notation for defining a
  group of properties with similar names and parameters: the new
  ["propertyset" syntax](sysman/objdef.html).
- Added a new keyword, "targetprop", a pseudo-variable that evaluates to
  the current target property pointer. The target property is the
  property that was invoked to reach the current method; this new
  pseudo-variable complements "self" with information on the property
  being evaluated in the current "self" object. The "targetprop" keyword
  can only be used in contexts where "self" is valid.
- The "inherited" and "delegated" keywords can be used with new syntax
  that omits the target property. If the target property is omitted,
  then the current target property is implied. The target property can
  be omitted from any of the previously-allowed forms of the "inherited"
  and "delegated" expressions, as shown here ("delegated" syntax is
  parallel to "inherited", so only "inherited" is shown):
  - `inherited` is equivalent to `inherited.targetprop`
  - `inherited(`*`arguments`*`)` is equivalent to
    `inherited.targetprop(`*`arguments`*`)`
  - `inherited `*`superclass_name`* is equivalent to
    `inherited `*`superclass_name`*`.targetprop`
  - `inherited `*`superclass_name`*`(`*`arguments`*`)` is equivalent to
    `inherited `*`superclass_name`*`.targetprop(`*`arguments`*`)`
- Added a new library module, reflect.t, that provides higher-level
  reflection services. This module is optional, but if it is included,
  the \_main.t module uses reflection to show stack trace listings for
  unhandled runtime exceptions.
- Added [t3GetStackTrace()](sysman/t3vm.html) to the 't3vm' intrinsic
  function set. This function returns information on the call stack.
- The RuntimeException object defined in \_main.t now stores a stack
  trace (in the form returned by t3GetStackTrace()) in its stack\_
  property. The VM no longer stores an explicit stringized form of the
  stack trace when setting the exception message, since the new stack
  trace format is more powerful.
- Fixed a bug in the TadsObject intrinsic class that sometimes caused a
  given property to appear more than once in the getPropList() method's
  returned list. Any given property now appears at most once in the
  result list.
- The TadsObject intrinsic class now supports createInstance() as a
  static method on the intrinsic class. The expression
  TadsObject.createInstance() returns a new instance of TadsObject,
  which is the same as defining an object statically like so: "myobj:
  object;" - that is, using the "object" keyword rather than a
  superclass list.
- Fixed a bug in the getPropList() method when called on any intrinsic
  class object (e.g., Object, TadsObject, BigNumber). In the past, this
  method returned a list of all of the methods that were valid on
  *instances* of the intrinsic class, not the methods that were
  necessarily valid on the intrinsic class object itself. This method
  now returns a list consisting only of the "static" methods of the
  intrinsic class, which is to say the methods that can be called
  directly on the intrinsic class object itself.
- Fixed a bug in the Object intrinsic class's propType() method. When
  the property in question was undefined, the method returned TYPE_NIL,
  whereas it should have returned nil. The method now returns nil for
  these cases, as documented.
- Fixed a bug in the compiler that caused incorrect code generation when
  a variable argument list parameter variable was referenced from within
  an anonymous function within the function or method with the variable
  argumetn list parameter.
- The compiler now specifially flags code using '=' to define a method.
  Since this was valid TADS 2 syntax, and has been gratuitously changed
  in TADS 3, users are likely to use the old syntax accidentally,
  especially while transitioning to the new language. The compiler
  catches these cases so that it can generate specific and clear error
  messages; this should help ease the transition to the new syntax by
  spelling out plainly the new syntax requirement.

### Changes for 08/12/2001

- Fixed a compiler problem that caused incorrect code to be generated
  for expressions of the form `obj.(prop)(args)`, where `prop` is a
  property of `self` whose value is a property pointer. An expressions
  of this form is equivalent to the form `obj.(self.prop)(args)`, but
  the compiler in the past incorrectly interpreted this as equivalent to
  `obj.prop(args)` - that is, rather than evaluating `(self.prop)` and
  then calling the property of `obj` given by the resulting property
  pointer value with the given argument list `args`, the compiler
  generated code that called the property `prop` of `obj` with arguments
  `args`. This has been corrected - the compiler now correctly
  interprets `obj.(prop)(args)` as equivalent to
  `obj.(self.prop)(args)`.
- Fixed a compiler problem that caused incorrect code to be generated
  for `delegated` expressions involving variable argument lists.
- Fixed a compiler problem that caused a spurious warning under certain
  circumstances. If a property was used only in an address expression
  ("&prop") in a module, and no object ever defined a value for the
  property, a call to the property in a separate module incorrectly
  generated a warning indicating a call to a possibly undefined property
  name. This warning was spurious because the use of the property name
  in an address expression is enough to definitively establish the
  symbol as a property.
- Fixed an output formatter problem that caused the text-mode
  interpreter to hang (in an infinite loop internally) in response to
  certain "&" entities in HTML mode.
- Fixed a problem in the GrammarProd intrinsic class that caused
  productions that matched zero tokens to indicate invalid token index
  values for firstTokenIndex and lastTokenIndex. These now always
  indicate zero in such case, to indicate that the production is
  associated with no tokens.

### Changes for 08/05/2001

- Added file safety level checking to the File intrinsic class. The
  initial implementation of File did not check the safety level set in
  the user preferences; the File class now correctly checks to ensure
  each open-file operation is allowed by the user's safety level
  settings. On a safety level violation, the "open" functions throw the
  new exception FileSafetyException.
- Text files can now be opened in FileAccessReadWriteKeep and
  FileAccessReadWriteTrunc modes. In the past, only "data" and "raw"
  files could be opened in read/write modes, which made it impossible to
  append to an existing text file.

### Changes for 07/22/2001

- Fixed a problem with using 'modify' with intrinsic classes. In the
  past, if more than one 'modify' statement was applied to an intrinsic
  class, only the last of the 'modify' statements was actually taken
  into account at run-time. This has been corrected.
- Fixed a compiler bug: the compiler did not report an error if a
  'replace' statement replaced an object but did not specify a
  superclass list for the new object. The compiler misinterpreted such a
  statement as a new anonymous object definition. This has been
  corrected; the compiler now flags the missing superclass list as an
  error.

### Changes for 07/16/2001

- Fixed a problem in the List class that could cause an object to be
  improperly deleted by the garbage collector under certain obscure
  circumstances. (In particular, if an object was being assigned to a
  list element, and the garbage collector ran in the course of the
  creation of the new list for the result of the assignment, the object
  on the right-hand side of the assignment was lost if not otherwise
  referenced.)
- Fixed a problem that occurred with
  `propDefined(prop, PROPDEF_GET_CLASS)` when the property of interest
  was an intrinsic method (i.e., a TYPE_NATIVE_CODE value). In these
  cases, the return value of the method was an invalid value, which
  caused problems if used, including interpreter crashes. In such cases,
  `propDefined()` now properly returns the intrinsic class object where
  the intrinsic method is defined.
- Extended the [object template](sysman/objdef.html) mechanism to allow
  class-specific templates to be defined.
- Extended the [firstObj()](sysman/tadsgen.html) and
  [nextObj()](sysman/tadsgen.html) intrinsic functions to take a new
  *flags* argument, which allows the caller to specify whether to
  enumerate instances only, classes only, or both.
- Changed the TadsObject class to allow use of the `new` operator with
  no arguments. In the past, at least one argument (giving the immediate
  superclass of the new object) was required; now a `new TadsObject`
  with no arguments is understood to create a base TadsObject.
- Added the [File intrinsic class](sysman/file.html), which provides a
  new interface to external file input/output. This replaces the
  file-related functions in the ["tads-io" intrinsic function
  set](sysman/tadsio.html), which have been removed. Specifically, the
  following functions have been removed:
  - `fileClose`
  - `fileGetPos`
  - `fileOpen`
  - `fileRead`
  - `fileSeek`
  - `fileSeekEnd`
  - `fileWrite`

  **Important note: This change is not upwardly compatible.** All
  existing code must be recompiled for this change, and any code using
  the fileXxx functions must be modified to use the new File intrinsic
  class. The necessary code changes are relatively straightforward,
  since the names of the new File methods are similar to those of the
  old functions.
- The compiler now generates an implicit constructor for each object or
  class that inherits from multiple base classes and does not provide an
  explicit constructor. The implicit constructor simply invokes each
  base class's constructor, in the same order in which the base classes
  are listed in the superclass list.
- Added grouped sub-alternatives to rules in the [`grammar`
  statement](sysman/gramprod.html). This allows portions of an
  alternative in a rule definition to be grouped for alternation; for
  example, a rule can be defined as
  "`('take' | 'get' | 'pick' 'up') nounList->lst_`", which is more
  concise than flattening out the grouped alternation manually.
- Added the [`#ifempty` and `#ifnempty`](sysman/preproc.html)
  variable-arguments expansion operators, which allow conditional
  expansion in a varargs macro depending on whether or not the varargs
  part is empty.
- Added the -P option to t3make: this preprocesses the source file,
  writing the expanded results on standard output. When -P is specified,
  no compilation or linking is performed, so no object or image files
  are created.
- Added new [String intrinsic class](sysman/string.html) methods:
  `startsWith()`, `endsWith()`, and `mapToByteArray`.
- Added a feature to the `substr()` method of the [String intrinsic
  class](sysman/string.html): if the starting index (the first argument)
  is negative, it indicates an offset from the end of the string: -1 is
  the last character of the string, -2 the second-to-last, and so on.
- Added a new function to the ["tads-io" function
  set](sysman/tadsio.html): `getLocalCharSet`, which returns the name of
  one of the active local character sets on the current system.
- Added new functionality to the ["tads-io" function
  set](sysman/tadsio.html) for files. Files can now be opened in "raw"
  mode, which allows reading and writing byte arrays. Bytes written to
  and read from a file in raw mode are not translated or modified in any
  way; this mode offers direct access to external files, for purposes
  such as manipulating files in formats defined by other applications.
  The `fileRead()` and `fileWrite()` functions in this mode take
  ByteArray arguments.
- Added new functionality to the ["tads-io" function
  set](sysman/tadsio.html): the `fileOpen()` routine can now take an
  object of intrinsic class [CharacterSet](sysman/charset.html) instead
  of a character set name. If you've already instantiated a CharacterSet
  object for other reasons, it is more efficient to re-use the same
  object by reference in this manner than to pass the name of the
  character set to `fileOpen()`, since `fileOpen()` has to create
  another mapping object when given only a character set name.
- Added the new [CharacterSet](sysman/charset.html) intrinsic class.
- Added the new [ByteArray](sysman/bytearr.html) intrinsic class.
- In the [Object intrinsic class](sysman/objic.html), method formerly
  known as `isClass()` has been renamed to `ofKind()`. x.ofKind(y)
  returns true if x is an instance or subclass or y. In addition, this
  method has been changed so that x.ofKind(x) returns true for any x.
- Added a built-in character set mapping for ISO 8859-1 (Latin-1). This
  character set is in widespread use because of its status as the
  default HTTP character set, and has an especially simple mapping to
  Unicode, so it seemed worthwhile to add as a built-in set not
  requiring an external mapping file. The assigned name of the set is
  "iso-8859-1".
- Changed the compiler's former `-r` option to `-a`, and the former
  `-rl` to `-al`. (The `-a` option forces recompilation of all involved
  modules even when not out of date with respect to the source files,
  and `-al` forces relinking even when the image file isn't out of date
  with respect to the object files; these options effectively override
  the compiler's normal dependency analysis for cases when the automatic
  analysis is incorrect for some reason.) This change is gratuitous and
  cosmetic, but makes the compiler's option names more closely resemble
  that of traditional "make" programs.
- Fixed a compiler bug: the compiler reported a spurious "symbol already
  defined" warning when a particular grammar production had rules
  defined in multiple modules. This has been corrected.
- Fixed a preprocessor bug: if the argument of a \#message was missing
  its closing right parenthesis, the preprocessor got stuck in an
  infinite loop. This has been corrected.
- Fixed a bug in the [Vector intrinsic class](sysman/vector.html) (and,
  by inheritance, in the Array intrinsic class): if the `insertAt`
  method was called on an empty vector, a crash occurred. This has been
  corrected.
- Fixed a compiler bug that caused the compiler to crash if confronted
  with a `foreach` statement in the absence of the definition of the
  Collection and Iterator classes. This has been corrected; the compiler
  now generates the appropriate error message and recovers gracefully.
- Fixed a problem with the grammar production object that caused new
  match tree objects to bypass constructors on creation. The match tree
  constructors are now invoked as for any other object instantiation.
- Fixed a problem in the debugger that prevented the debugger from
  taking control on a run-time exception being thrown when another
  run-time exception had previously occurred at the same place twice in
  a row with no intervening debugger activity.
- Fixed a problem that caused the debugger to crash under some unusual
  conditions when an entry in the local-variables window was selected
  and later automatically removed due to an execution context change.
- Improved the robustness of the debugger when the program being
  debugged caused a stack-overflow exception.
- Updated the calc.t example to the new GrammarProd.parseTokens()
  interface.
- Fixed a bug that caused comparisons of any two function pointers to
  yield unequal, even for equivalent function pointers. This bug had
  numerous subtle manifestations; for example, a function pointer key in
  a LookupTable could never be found, since a test for equality to the
  key would never succeed.
- Fixed a compiler bug that caused the incorrect error message to be
  reported when a replace/modify of an extern object was out of order in
  a link (the message reported that a function rather than object was
  involved).
- Removed a spurious warning that was generated when a dictionary was
  imported from multiple symbol files.
- Fixed a bug in the GrammarProd intrinsic class that caused "\*" tokens
  in subproductions to be misinterpreted. In the past, the "\*" token
  only worked properly in top-level productions (i.e., a production on
  which parseTokens() was called); this has been corrected so that "\*"
  works properly at any level.

### Changes for 05/05/2001

- **Incompatible intrinsic class API change:** The return value of the
  `parseTokens()` method in the [GrammarProd intrinsic
  class](sysman/gramprod.html) has been changed. In the past, this method
  returned a list, each of whose elements was a sublist of two elements.
  Each sublist described one successful match tree; the first element of
  each sublist was the number of tokens matched, and the second was the
  root object of the match tree. The 4/29/2001 version added the
  firstTokenIndex and lastTokenIndex properties to the match objects;
  since the number of tokens matched in a tree can be inferred from the
  firstTokenIndex and lastTokenIndex values, the token counts in the
  return sublists were redundant. Therefore, to simplify the API, the
  sublists have been eliminated, and `parseTokens()` now returns simply
  a list of match tree root objects. To obtain the token count for a
  match, simply calculate
  `(match.lastTokenIndex - match.firstTokenIndex - 1)`, where `match` is
  the root object in the match tree. Since the root object in a tree
  encompasses the entire match, its token range necessarily encompasses
  the range of tokens for the entire match.
- Added [variable-argument macros](sysman/preproc.html).
- Fixed a problem in the [GrammarProd intrinsic
  class](sysman/gramprod.html) that prevented a rule from being matched
  when it ended with the special '\*' token and was used as a
  subproduction in another rule. This now works correctly.
- Fixed a problem in the compiler that caused a spurious warning message
  indicating that a dictionary symbol had been imported multiple times.
  This warning was generated whenever the dictionary was declared in
  more than one source file but not in *all* source files; each file
  that did *not* declare the dictionary displayed the warning. This has
  been corrected.
- Added the [`delegated` keyword](sysman/expr.html), which allows
  delegating a method call to an unrelated object.
- Added the [`getMethodDefiner()` intrinsic
  function](sysman/tadsgen.html), which returns the object that defines
  the currently executing method.
- Changed the default name of the ASCII character set mapping to
  "us-ascii" for better readability. The old name ("asc7dflt") is still
  accepted, but is now obsolescent and should not be used in new code.
  All of the \#charset directives in the system headers provided with
  the compiler have been updated to use the new "us-ascii" name.

### Changes for 04/29/2001

- Fixed a problem in the [GrammarProd intrinsic
  class](sysman/gramprod.html) that caused incorrect results to be
  returned with productions that matched exactly zero tokens.

- Extended the `grammar` syntax to allow the "`->`" notation to be used
  with literal tokens. In the past, the arrow was only allowed with
  symbol-match tokens (subproductions and token classes), but it is
  often desirable to be able to retrieve the matching token even for a
  literal match. There are two cases in particular where a literal's
  matching token is needed to reconstruct the original input: when the
  literal is matched with truncation; and when a production has several
  alternatives with different literals.

- Modified the [GrammarProd intrinsic class](sysman/gramprod.html) so
  that each match object now includes more direct information on the
  tokens involved in the match. The parser now sets the firstTokenIndex
  and lastTokenIndex properties of each match object to indicate the
  index of the first token and of the last token, respectively, that are
  involved in matching the rule corresponding to the match object. This
  is a simple range, so all of the tokens from the first to the last,
  inclusive, constitute the match's original text. In addition, the
  parser sets the tokenList property of each match tree item to the
  original token list passed into parseTokens() (this doesn't take up
  nearly as much memory as it might at first appear, since all of the
  match objects reference a single shared copy of the token list). The
  exported properties firstTokenIndex, lastTokenIndex, and tokenList are
  defined in gramprod.h.

- The compiler now creates a dictionary entry in the default dictionary,
  if one is defined, for each literal string that appears in a
  ["grammar"](sysman/gramprod.html) statement's rule list. If no default
  dictionary is defined when a "grammar" statement is encountered, the
  statement's literals are not entered into any dictionary. Each literal
  string is associated with the production object and the property
  "miscVocab". Since these strings are now stored in the dictionary, it
  is simple to determine if a word is defined in any context; without
  the grammar literal dictionary entries, it was not possible to
  determine if a given string, when entered by a user at run-time, was
  known in the context of a grammar literal.

- The ["grammar"](sysman/gramprod.html) syntax has been extended to allow
  a "tag" to be associated with each "grammar" statement. To specify a
  tag, specify any symbol or number in parentheses after the production
  name. For example:

          grammar nounPhrase(1): adjective->adj_ : object ;

  The tag's only purpose is to provide an identifying name for the new
  "grammarInfo" method, described below.

- The compiler now automatically creates a method for each
  [grammar](sysman/gramprod.html) match object that makes it possible to
  traverse match trees without knowing their internal structure in
  advance. The new method is called "grammarInfo," and it returns a
  list. The list's first element is a string giving the name of the
  production, with the optional tag (see above) enclosed in parentheses
  after the production's symbolic name. Each subsequent element is the
  value of a property appearing after an arrow ("-\>") in the
  production's rule list.

- Modified the [grammar](sysman/gramprod.html) production matching
  algorithm so that \[badness\] matches are examined as a group rather
  than individually. In particular, when a number of \[badness\]
  alternatives arise simultaneously, the parser had in the past examined
  only one such alternative at a time once determining that no better
  matches were available. Now, all \[badness\] alternatives with the
  lowest badness value are examined in parallel. This is important in
  some cases for the same reasons that parallel consideration of regular
  alternatives is necessary.

- Fixed a compiler problem that caused spurious "variable assigned but
  not used" warnings in certain situations. In particular, if a local
  variable was defined in a nested scope within a method, and the
  variable was used only within the lexical confines of an anonymous
  function within the nested scope, the compiler did not correctly mark
  the variable as having been used and thus incorrectly reported the
  warning. This problem did not affect code generation; its only effect
  was the unnecessary warning.

- Enhanced the Dictionary intrinsic class's findWord() and
  findWordTrunc() methods so that the property argument in each can be
  omitted or specified as nil, in which case all objects with vocabulary
  matching given text, for any part-of-speech property, will be
  returned.

- Fixed a debugger problem that caused a crash in some obscure cases
  involving opening a file during a debugger session when the debugger
  had never taken control since the beginning of program execution, and
  a similar problem that occurred when the VM threw a run-time error
  exception under similar circumstances.

### Changes for 04/15/2001

- A new mechanism allows capturing calls to undefined methods and
  properties. When a call is made to an undefined method, the VM now
  calls a new property, [`propNotDefined()`](sysman/undef.html), on the
  target object. The new method receives as arguments the the undefined
  property ID and the arguments to the original method call. If
  `propNotDefined` is itself not defined, the VM simply returns nil for
  the undefined method call, as it did in the past.
- Added some new [regular expression](sysman/regex.html) features:
  - Character classes can now be combined with '\|', as in
    \<upper\|digit\> (matches any upper-case letter or any digit).
  - Character classes can now be complemented with '^', as in \<^upper\>
    (matches anything *except* upper-case letters).
  - Added some [named character expressions](sysman/regex.html), which
    look similar to character-class expressions, and which can be
    combined with character-class expressions via '\|': \<upper\|star\>
    matches any upper-case letter or an asterisk.
- Renamed the t23run.exe executable to simply tr32.exe, so the combined
  TADS 2+3 interpreter is now the default interpreter. The separate
  interpreters are now called t2r32.exe (for TADS 2) and t3run.exe (for
  TADS 3). For the most part, users will not need to run the
  version-specific interpreters at all; the only time these should be
  needed is when bundling a game into an executable, in which case it is
  desirable for the sake of minimizing file sizes to include only the
  version of the interpreter actually needed.

### Changes for 3/28/2001

- The object definition syntax has been extended to allow an object's
  property list to be enclosed in braces. Refer to the [Object
  Definitions documentation](sysman/objdef.html) for details.
- The object definition syntax now provides ["nested"
  objects](sysman/objdef.html). A nested object is an anonymous object
  defined in-line within another object, with a property of the
  enclosing object initialized with a reference to the nested object;
  this syntax is convenient for defining certain types of small helper
  objects.
- The language now has a [static property
  initialization](sysman/objdef.html) syntax, which allows a property to
  be initialized with a non-constant value computed at compile-time.
- Changed the behavior of the '+' property. The new behavior is much
  simpler than the previous behavior: if an object is defined with *N*
  plus signs, its '+' property is initialized to the most recent object
  defined with *N*-1 plus signs. Explicitly setting the '+' property in
  an object list is now irrelevant. Refer to the
  [documentation](sysman/objdef.html) for details.
- Changed the default filename suffix for image files to ".t3" (it was
  formerly ".t3x") to make image filenames somewhat more friendly
  looking.
- Added the new executable "t23run" - this is a 32-bit console-mode
  combined TADS 2 and TADS 3 interpreter. You can use this single
  application to run games compiled for TADS 2 or TADS 3. This version
  of the interpreter is *not* designed for bundling single-file games
  for distribution, since this would unnecessarily increase the size of
  bundled games; use the appropriate single-version interpreter
  executable for bundling.
- Added the new executable "html23" - this is a combined TADS 2 and TADS
  3 version of the HTML interpreter.
- For anyone interested in porting the combined command-line interpreter
  on another platform, the code that implements this should be easily
  portable to other command-line operating systems. See the target
  't23run.exe' in win32/makefile.vc5; you can find the source code for
  the main program entrypoint in vmcl23.cpp. For systems that don't use
  Unix-style command lines, the command line code itself won't be
  portable, but portable code for sensing the engine version needed to
  run a given game file can be found in vmmain.cpp.
- Fixed a bug that caused problems with certain "reflection" methods
  when the program used `modify` to extend the `TadsObject` intrinsic
  class. If the program modified `TadsObject`, then traversed the object
  tree (using the `getSuperclassList()` method), or used the
  `propDefined()` method, the behavior was incorrect, and could lead to
  VM crashes. This has been corrected.
- Added [documentation](sysman/charmap.html) on the `#charset` directive
  and using source files encoded in Unicode UCS-2.
- Added a `#charset "asc7dflt"` directive to each system source and
  header file included with the compiler distribution. This directive
  ensures that the compiler interprets the contents of the system files
  correctly, in case the user wants to specify a default character set
  for the compilation with the `-cs` compiler option.
- The compiler now accepts Unicode character 0x2028 ("line separator")
  as equivalent to a newline in source files that use of the Unicode
  encodings the compiler accepts (UCS-2 big-endian, UCS-2 little-endian,
  or UTF-8).
- In text mode, the `fileRead()` function now properly translates input
  characters according to the character set selected when the file was
  opened. (In the past, the character set was ignored, and the
  characters from the file were not properly translated to Unicode.) In
  addition, the `fileRead()` function accepts Unicode character 0x2028
  (the Unicode line separator character) as equivalent to a newline (but
  note that, as always, the text returned from `readLine()` represents
  each end-of-line with a single '\n' character, regardless of the type
  of line termination in the underlying file).

### Changes for February 24, 2001

- Added the [`t3AllocProp()`](sysman/t3vm.html) intrinsic function, which
  allocates a new property ID.
- Added the [`Object.getPropList()`](sysman/objic.html) method, which
  returns a list of properties directly defined by an object.
- Added the [`Object.getPropParams(`*`prop`*`)`](sysman/objic.html)
  method, which returns information on the parameters taken by a
  property or method.
- Added the [`getFuncParams(`*`funcptr`*`)`](sysman/tadsgen.html)
  intrinsic function, which returns information ont he parameters taken
  by a function.

### Changes for February 10, 2001

- The new [`property` statement](sysman/proccode.html) allows a program
  to explicitly declare property symbols. This is optional, but can be
  useful in certain cases in library code.
- Added the [LookupTable intrinsic class](sysman/lookup.html), which
  implements a general-purpose associative array type. A LookupTable is
  similar to a Vector, but whereas a Vector can use only integers as
  indices, a Hashtable can use any value as an index.
- Added the new [`t3GetGlobalSymbols()`](sysman/reflect.html) intrinsic
  function, which provides programmatic access to the compile-time names
  of objects, properties, functions, intrinsic classes, and enumerators.
- The preprocessor now treats square brackets ("\[ \]") and braces ("{
  }") as grouping symbols when parsing macro arguments. In the past,
  only parentheses were counted. This allows list constants and
  anonymous functions to be used more easily as macro arguments.
- In `_main.t`, added a new function, `initAfterLoad()`. The main
  program entrypoint in `_main.t` (function `_main()`) calls this new
  routine to perform initialization. This routine sets up the default
  display function, performs pre-initialization if necessary, then
  performs regular load-time initialization. All of these operations
  were previously carried out in `_main()`; the reason they've been
  separated into a new function is to allow the same operations to be
  called after a `restartGame` operation. Since a `restartGame`
  effectively re-loads the image file and starts the game over from
  scratch, the same initialization that `_main()` performs at initial
  load must be performed immediately after a restart; this function
  makes this common code easy to re-use.
- Added a new method to the TadsObject intrinsic class:
  createInstance(), which creates an instance of the object. This method
  passes its arguments to the new object's constructor, if any, and
  returns a reference to the new object.
- Added `execAfterMe` to `ModuleExecObject` in `_main.t`. User code can
  initialize this property in a given `ModuleExecObject` instance to
  contain a list of other `ModuleExecObject` instances that are to be
  initialized **after** the given instance; this is analogous to the
  `execBeforeMe` list, but allows an object to specify things that are
  to come after it. It is sometimes desirable to be able to specify
  initialization order dependencies by specifying what must follow
  rather than what must precede initialization of a given object, and
  this new property provides the flexibility to specify order
  dependencies either way.
- A makefile for DJGPP (the definitive port of Gnu C/C++ for MS-DOS) is
  now included in the source distribution. This makefile can be used to
  create a 32-bit version of the interpreter that will run on MS-DOS on
  PC's with 386 or later processors.
- Fixed a VM problem that caused modification of the root intrinsic
  object (i.e., `modify Object`) to fail. In the past, the VM simply
  failed to execute code added to the root intrinsic object with
  `modify`. This has been corrected; code added to `Object` is now
  properly inherited from the other intrinsic classes.
- The String and List intrinsic classes can now be extended with the
  `modify` mechanism. In the past, the VM did not correctly handle code
  extensions to the String and List intrinsic classes.
- Fixed a compiler bug that caused incorrect code generation when adding
  a constant zero value to a local variable which, at run-time, ends up
  containing a vector, list, or other non-integer value.
- The Vector intrinsic class can now be used with the `foreach` keyword
  to loop over the elements in a vector. (In previous versions, the
  Vector class incorrectly omitted support for `foreach`.)
- The "Frames" version of the documentation should now work correctly
  with Netscape and other browsers that had trouble with past versions.
  (The frames page had some ill-formed HTML, which some browsers
  rejected, but this page has now been corrected.)
- Changed the text of the VM error message that results from applying an
  index to a type that cannot be indexed (nil\[3\], for example). In the
  past, the message read "invalid type for indexing - value cannot be
  index," which incorrectly signified that there was something wrong
  with the index value, when in fact the value being indexed was the
  problem. The message has been changed to read "invalid index
  operation - this type of value cannot be indexed."
- Fixed a problem in the Vector intrinsic class that caused a vector's
  data to be corrupted by certain operations that should have, but did
  not, increase the internal storage space allocated for the Vector
  object.
- Fixed a compiler problem with object templates. The compiler did not
  properly parse object templates that included list tokens; this has
  been corrected.
- Fixed a bug in the `rand()` intrinsic function. In the past, this
  function crashed the interpreter if the argument was a list with no
  elements. This has been corrected; the function now returns `nil` when
  the argument is a list with no elements.
- Fixed a problem with the `Vector` intrinsic class that caused
  pre-initialized data to be loaded incorrectly.
- Corrected the documentation (the [expressions
  chapter](sysman/expr.html)) to reflect the correct precedence of the
  "`[]`" and "`.`" operators, which should be above the unary operators.
- Added four new methods to the [List intrinsic class](sysman/list.html):
  `prepend(`*`val`*`)`, which inserts a new value at the start of a
  list; `insertAt(`*`index, val1, val2, ...`*`)`, which inserts one or
  more values into a list at a given position;
  `removeElementAt(`*`index`*`)`, which deletes the element at the given
  index; and `removeRange(`*`startIndex, endIndex`*`)`, which removes
  the elements in the given range of indices.
- Added a new method to the [Vector intrinsic class](sysman/vector.html):
  `prepend(`*`val`*`)`, which inserts a new value at the start of a
  vector.
- It is no longer legal to apply the unary "`&`" operator to an object
  symbol. In the past, "`&`*`objectName`*" was the same as simply
  "*`objectName`*"; this is no longer legal. "`&`*`objectName`*" was
  never a meaningful construct, since an object symbol yields a
  reference to the object to begin with, but past versions of the
  compiler accepted it without complaint and treated it as equivalent to
  the unadorned object symbol; the compiler now rejects this construct.
- It is no longer legal to apply the unary "`&`" operator to a function
  name symbol. In the past, "`&`*`functionName`*" yielded a reference to
  the function. This has been changed so that the function name used by
  itself yields a reference to the function, just as an object name
  does.
- Because the "`&`" operator can no longer be used with any symbol types
  other than properties, there is no longer a warning when using the
  operator with an otherwise undefined symbol name. "`&`*`symbol`*" now
  unambiguously defines the symbol as a property name.
- Fixed a compiler bug that caused a spurious warning message when
  compiling certain types of expressions involving property pointers.
  The warning did not affect code generation, but it was incorrect and
  has been removed.

### Changes for version 3.0.2 (September 27, 2000)

- Fixed a compiler problem that caused the compiler to go into an
  infinite loop (and therefore freeze up) when confronted with a
  'switch' statement containing code before the first 'case' or
  'default' label. This has been corrected; the compiler now reports an
  error (such code is unreachable) and continues with the compilation.
- Fixed a minor compiler problem that generated a spurious warning
  message in a certain situation. Specifically, if none of a 'switch'
  statement's 'case' labels led to code paths that could reach the next
  statement after the 'switch' (for example, if every code path
  reachable from a 'case' label led to a 'return' statement), but the
  'switch' had no 'default' label, the compiler generated the warning
  message "unreachable statement" at the next executable statement after
  the 'switch'. This warning was incorrect because, in most cases, it is
  not safe to assume that every possible value of a switch's controlling
  expression is included in the list of explicit cases, hence the next
  statement following a 'switch' with no 'default' is reachable any time
  the controlling expression's value is not in the list of explicit
  'case' labels. Note that this problem merely caused the spurious
  warning and did not affect code generation.

### Changes for June 24, 2000

- Fixed a compiler problem with try/catch statements. The compiler did
  not correctly generate handlers for any catch block past the first for
  a given try statement; this has been corrected.

### Changes for version 3.0.1 (June 17, 2000)

- The meaning of the syntax `x.y` and `&y` have changed slightly, in a
  way that will be transparent to most code. In the past, if `y` was a
  local variable, then `x.y` evaluated the local, then called the method
  on `x` specified by the property pointer value in the local; `&y`
  simply generated a compilation error because a local's address cannot
  be evaluated. This behavior has changed. Now, `x.y` and `&y` both
  ignore the local definition of `y` and interpreter `y` as a property
  name. This change is important because it allows code to refer to a
  property explicitly, even when a local of the same name has been
  defined in the code block. For example:

         myObject: object
           obj = nil
           setObj(obj) { self.obj = obj; }
         ;

  In the past, the code above would have had to use a different name for
  the formal parameter variable `obj`, because it would not have been
  able to refer to the property of the same name. With the new
  interpretation, the code can distinguish between the local and the
  property by referring to the property explicitly using `self.obj`.

  Note that it is still simple to obtain the old behavior of evaluating
  the local variable and calling a method via the resulting property
  pointer. To do this, simply enclose the local in parentheses: `x.(y)`.

### Changes for 5/21/2000

- Add a new [Vector](sysman/vector.html) intrinsic class, a subclass of
  Array that combines the reference semantics of an Array with the
  dynamic sizing capabilities of a List. Vector is substantially more
  efficient than List when constructing a collection iteratively.
- Added some new List methods: [sort](sysman/list.html),
  [append](sysman/list.html), [appendUnique](sysman/list.html).
- Added new Array methods: sort, appendUnique.
- Added an [error message translation mechanism](sysman/errtrans.html),
  which allows non-English versions of the interpreter's and compiler's
  error messages to be substituted at run-time. Messages can be loaded
  from an external file, so there is no need to recompile the system to
  switch languages. (At the moment, of course, only an English set of
  messages actually comes with the system, but it is hoped that a few
  translated versions will be contributed so that more languages will be
  supported "out of the box" in the future.)
- Fixed a bug that reversed the order of arguments in calls to anonymous
  functions while running in the debugger.

### Changes for 5/11/2000

- Changed the name of the `say` function in the "tads-io" intrinsic
  function set to [`tadsSay`](sysman/tadsio.html). This allows the
  library to define its own higher-level function called `say`; since
  user code should almost always call the library's function rather than
  the low-level direct console output function, it is desirable to give
  the library version the shorter, more convenient name.
- Added the `appendUnique()` method to the [List](sysman/list.html) and
  Array intrinsic classes.

### Changes for 4/24/2000

- Fixed a bug in the compiler that caused lost properties on objects
  under certain very complicated circumstances (the problem occurred
  when dictionaries and other objects were defined in a particular
  order).

### Changes for 4/22/2000

- Added the [`foreach` statement](sysman/proccode.html).
- Added the [Collection](sysman/collect.html) and
  [Iterator](sysman/iter.html) classes. [List](sysman/list.html) and Array
  are now subclasses of Collection, so these classes can create Iterator
  objects to visit their elements.
- The Windows HTML interpreter now supports PNG transparency (this is a
  generic change to the Windows HTML renderer that will also be in HTML
  TADS 2.5.4). Note that only simple transparency is supported; full
  alpha blending is still not supported. PNG transparency now has its
  own systemInfo() capability code, SYSINFO_PNG_TRANS.

### Changes for 4/16/2000

- Fixed a bug that caused a compiler crash when a source file was
  completely empty (or contained only comments).
- Fixed a bug that caused a compiler crash in certain situations
  involving multiple initializers in a single 'local' statement.

### Changes since 3.0.0

- Added the [htmlify()](sysman/string.html) method to the String class.
  This method converts any HTML markup-significant characters in the
  string to their HTML equivalents; in particular, it converts an
  ampersand ("&") to "&amp;" and a less-than sign ("\<") to "&lt;", and
  can also optionally quote spaces, tabs, and newlines to ensure display
  fidelity for these whitespace characters as well.
- Added a [shortest-match modifier](sysman/regex.html) to the regular
  expression closure operators ("\*", "+", and "?"). This feature
  provides precise control over how matches are allocated in expressions
  involving multiple closures.
- Added the [non-capturing modifier](sysman/regex.html) to the regular
  expression group syntax; this allows a parenthesized group to be
  omitted from the counted groups.
- Added [look-ahead assertions](sysman/regex.html) to the regular
  expression syntax.
- Added the regular expression [interval operator](sysman/regex.html),
  which provides a compact notation for specifying a specific number of
  repetitions of a sub-expression.
- Renamed a few [list methods](sysman/list.html) and array methods, and
  expanded both sets for greater consistency and more complete
  functionality:
  - indexOf
  - indexWhich
  - valWhich
  - lastIndexOf
  - lastIndexWhich
  - lastValWhich
  - countOf
  - countWhich
  - mapAll
  - applyAll (arrays only)
  - forEach
  - getUnique
- When the default start-up module (\_main.t) is automatically included
  in a build, \_main.t is linked in first. It was formerly linked in
  last, which didn't allow 'modify' or 'replace' to be used with objects
  defined in the module.
- When running under the debugger, RuntimeError exceptions now include
  stack trace information (with source line information) in the
  exceptionMessage string associated with the exception object. This
  makes it easier to track down where a run-time error occurred. Note
  that this information is available only when running under the
  debugger, because this is the only time the system has access to the
  necessary source line information.
- Added a "character map library" mechanism to the [stand-alone
  interpreter](sysman/alone.html). This new feature allows a set of
  character map (.tcm) files to be bundled with a stand-alone game,
  eliminating the need to distribute separate .tcm files with a
  stand-alone game. (Having to distribute .tcm files seemed to defeat
  the purpose of building a stand-alone executable. The new bundling
  feature still allows users with localizations that aren't included in
  the standard character map set to add their own .tcm files, but it
  makes character mappings entirely invisible for most users.)
- Added CP1250.TCM (a character set mapping for the Windows
  Eastern/Central European code page), CP850.TCM (DOS OEM Latin 1), and
  CP852.TCM (DOS OEM Latin 2) to the default character map set for
  Windows.

### Changes since 03/30/2000

- Slightly changed the `InitObject` mechanism. The class formerly known
  as `InitObject` is now called `PreinitObject`, and a new class
  `InitObject` has been added. The new `InitObject` does the same thing
  that `PreinitObject` does, but does it at regular program start-up
  rather than pre-initialization. This change makes the
  pre-initialization and regular initialization mechanisms work the same
  way. In addition, to make this mechanism more generic, both
  `InitObject` and `PreinitObject` now descend from a base class called
  `ModuleExecObject`; this class should be usable as the base class for
  other types of modular execution objects, such as perhaps a
  post-restore initializer sequence, a command parsing initializer
  sequence, and so on. Refer to the [library
  pre-initialization](sysman/init.html) documentation for details.
- Added the `-r` option to the interpreter, allowing games to be
  restored directly from the command. The saved state files now include
  information on the image file that created them, so if you're
  restoring a game, you don't have to specify the image file; this
  particular feature also allows double-clicking on a saved state from
  the desktop to start the interpreter, load the image file, and restore
  the saved state.
- The GrammarProd intrinsic class's parseTokens() method now includes
  truncated matches to dictionary words (according to the dictionary's
  truncation length setting) in its structural analysis. The method also
  includes truncated matches (again, using the dictionary setting) for
  literal tokens in the grammar. If you don't want to allow truncated
  matches, simply change the dictionary's truncation length setting to
  zero.

### Changes since 03/26/2000

- Added a new [library pre-initialization](sysman/init.html) mechanism
  based on "initialization objects" rather than a simple preinit()
  method. This new mechanism should be especially useful for library
  developers, since new initialization objects can be plugged in without
  touching any library or user code
- It is now possible to [extend intrinsic classes](t3icext.html) with
  user-defined methods.

### Changes since 03/21/2000

- The method-based API to certain functions that were formerly
  implemented as intrinsics is now official. The trailing underscores on
  the interim method names have been removed, and the corresponding
  functions have been removed from the intrinsic function sets.
  - getSuperclassList() is now Object.getSuperclassList()
  - isClass() is now Object.isClass()
  - propDefined() is now Object.propDefined()
  - propType() is now Object.propType()
  - length() is now List.length() and String.length()
  - sublist() is now List.sublist()
  - intersect() is now List.intersect()
  - car() and cdr() are now List.car() and List.cdr()
  - substr() is now String.substr()
  - toUpper() is now String.toUpper()
  - toLower() is now String.toLower()
  - find() is now List.find() and String.find()
  - toUnicode() is now String.toUnicode()

  This change will, of course, necessitate recompiling all code, and
  will require changing code that calls any of the functions that have
  been migrated to methods. The sample code included in the distribution
  has been updated to reflect the changes, and the documentation has
  also been updated.
- Renamed the `getSize()` method in the Array class to `length()`, for
  consistency with List and String.
- Added the 'is in' and 'not in' operators. See the ["is in" and "not
  in" expressions](sysman/expr.html) section.
- The debugger now has "program arguments" settings. You can access
  these settings via a dialog, which you can open using the "Program
  Arguments" item on the "Debug" menu. You can use the program arguments
  to control script file reading, output logging, and the argument
  string that is passed to your program's "\_main()" entrypoint
  procedure.
- Added several new regular expression features: \<Case\> and
  \<NoCase\>, \<Alpha\>, \<Upper\>, \<Lower\>, \<Digit\>, \<AlphaNum\>,
  \<Space\>, \<Punct\>. Refer to the new [regular expressions
  section](sysman/regex.html) of the documentation for details.
- Enhanced the regular expression parser to detect and remove cycles in
  compiled patterns. It is possible (pretty easy, actually) to introduce
  "infinite loops" into a pattern; the easiest way to do this is to put
  a zero-or-more closure inside another closure, as in "(.\*)+" (this
  has an infinite loop because the expression in parentheses can match
  zero characters, and that match can be repeated any number of times),
  but much more complex and subtle types of cycles are possible and can
  be inadvertantly constructed. Eliminating the infinitely repeating
  zero-length matches obviously doesn't change the meaning of the
  expression, since one repetition of a zero-length match is as good as
  a million, so the regular expression matcher simply detects and
  removes these loops and then carries on as normal.
- Updated StartI3.t and StartA3.t (the starter games in the Workbench
  kit) to work with \_main.t, so you don't have to compile them with
  -nodef. (This also has the benefit of making the files a whole lot
  simpler.) Also updated them to use method calls rather than intrinsic
  function calls where appropriate.
- Updated the sample files to use the standard \_main.t startup and new
  property functions.

### Changes since 03/12/2000

- Added [default display methods](t3dispfn.html), which allow string
  display to be routed through a method of the active "self" object in
  effect each time a string is displayed and each time an expression
  embedded in a string via the \<\< \>\> syntax is displayed. This
  powerful new feature allows for per-object output filtering, and
  allows for "stateful" filtering (in that the filtering function is a
  method of the object that initiated the filtering, and can therefore
  look at properties of "self" to perform its work).
- Added the ["short form" anonymous function](t3anonfn.html#shortForm)
  syntax, which is much more compact than the long form, but can only be
  used to define functions that consist solely of a single expression.
- Added the `subset()` and `applyAll()` methods to the
  [array](t3array.html) and [list](sysman/list.html) intrinsic classes.
- Added [documentation for the List intrinsic class](sysman/list.html).
- Added the `-cs` interpreter option, which allows the user to specify a
  character set to use for the display and keyboard. Refer to the new
  [interpreter section](t3run.html) in the documentation.
- As mentioned above, there is a [new section on the
  interpreter](t3run.html) in the documentation.
- The TADS 3 HTML interpreter and debugger for Windows now use a
  separate registry key for storing their preference settings. In
  addition, the TADS 3 debugger's global preferences file is now called
  HTMLTDB3.TDC. These changes should allow TADS 2 and TADS 3
  installations to co-exist independently on a single system, without
  affecting one another's stored configuration settings.
- Anonymous function objects are now represented by their own intrinsic
  class. This is a mostly internal change, but does have the benefit of
  enabling the debugger to display the type of an anonymous function
  object (before, the debugger only knew that they were objects).
- Made some internal changes to the way anonymous function context
  objects are implemented to make them more efficient. (In particular,
  context objects are now arrays, not TADS objects; array index lookup
  is faster than TADS object property lookup.)
- Moved the code to Visual C++ 6 (which involved no changes, not
  surprisingly, although the new C++ compiler caught a few dubious
  constructs and generated helpful warnings, all of which have been
  cleaned up).
