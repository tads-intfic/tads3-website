---
layout: docs
---
<div class="topbar">

<img src="topbar.jpg" data-border="0" />

</div>

<div class="nav">

<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="begin.html" class="nav">Opening Moves</a> \> Hello, World!  
<span class="navnp"><a href="naming.html" class="nav"><em>Prev:</em> Naming Conventions</a>
    <a href="tools.html" class="nav"><em>Next:</em> The Tools</a>    
</span>

</div>

<div class="main">

# Hello, World!

Ever since Kernighan and Ritchie published their manual on C, it's been
obligatory in programming language books to start with an example called
Hello World. Hello World is a program that simply displays the text
"hello, world!" and terminates. What you're reading now isn't exactly a
book, but Hello World is still a good place to start. So, without
further ado, here it is. Start by creating a text file called hello.t
and typing this into the file:

<div class="code">

    #include "tads.h"

    main(args)
    {
      "Hello from TADS 3!!!\b";
    }

</div>

After you've saved the file, open a command line window and change your
working directory to the directory containing the file - on Windows, for
example, use the CD command. Of course, you'll have to have installed
the TADS authoring tools at this point; that process varies by system,
so you should look for a README file or the like in your system-specific
distribution for installation instructions. If you're on Windows or
Unix, you might also have to set up the PATH variable so that it
includes the directory where you installed the TADS tools.

Once you have everything set up tool-wise, you should be able to compile
your program by typing this:

<div class="cmdline">

    t3make hello.t

</div>

This will compile and link the program, producing a file called
hello.t3. We call this an "image file" - not in the sense of a picture
or graphics, but in the sense of a copy, in this case of what's in
memory when your program is just ready to start running. The .t3 "image"
file is the executable version of your program.

If the compiler displayed any error messages (which should be fairly
clear: they'll start with the word "error:" and list a line number in
your source file), you'll need to go back and fix them before you can
run the program. If you can't figure out what an error message means,
you might try adding the "-v" option to the compiler command line:

<div class="cmdline">

    t3make -v hello.t

</div>

That will make the compiler use "verbose" error messages. By default,
the compiler shows a concise, one-line summary of each problem; in
verbose mode, each error message is about a paragraph long, and tries to
explain the nature of the problem and suggest some possible solutions.
If you still can't figure out what's going on even with verbose error
messages, go back and make sure you've typed in the program exactly as
shown above, and make sure there aren't any extraneous characters in the
file.

Once you've successfully compiled your program, you can run it, like so:

<div class="cmdline">

    t3run hello.t3

</div>

Let's briefly look at each part of the example program.

The \#include directive essentially inserts a file into your source
code. It's a simple textual insertion - it's exactly as though you'd
actually copied in the contents of the included file where the \#include
line appears. In this case, the file we're including is a system header
file. It's called a "header" file because it's meant to be used just
like this: included in the preamble of a regular source file, near the
top - the "head" - of the source file. Header files are usually
\#included near the beginning of a source file because they contain
common definitions that you want to be able to use throughout your file;
by including it near the top of the file, you ensure that the
definitions come before any of your own code, so that the compiler has
already seen them and digested them by the time it gets to your code.

In case you're wondering, that "tads.h" file is just an ordinary text
file sitting somewhere on your hard disk. In fact, you should be able to
find it within the directory where you installed TADS - it might be in
an "include" subdirectory of the main TADS directory, depending on your
system. You can browse its contents to see what it's actually doing for
you, if you're curious. In brief, it includes a few other headers, whose
main purpose is to define the names of the standard functions and types
that are built into the interpreter. Those names aren't built into the
language itself, to make the language more flexible in terms of future
additions as well as alternative specializations, so they have to be
defined explicitly by the program. But it'd be a huge hassle if you had
to write all of those definitions yourself in every file; so to save you
this hassle, the system provides these standard header files that let
you define all of the standard names with a simple \#include.

Next comes something called "main." If you've used Java or C, you'll
recognize this as a function definition, and you'll also recognize it as
the main program entrypoint, where execution begins. A function is a
block of code - that is, a series of sequential program instructions -
that's grouped together and given a name. A function can receive input
in the form of a list of named parameters - in this case we have a
single parameter, named "args" - and can produce output in the form of a
returned value.

If you're a C or Java programmer, this function definition will look
mostly familiar to you, with one important difference: there are no type
declarations, for either the function itself or its parameters. That's
because everything in TADS 3 has "run-time typing" - every value is
tagged with its actual type at run-time. There's no way to declare a
variable's type or a functon's return type statically; any variable can
hold any type of value, and each variable keeps track of exactly which
type it's actually holding at any given time.

main(), as we mentioned, is a special function. When the program starts
running, execution will start here. (Actually, execution will start in
some system library code that the compiler automatically links into the
program, but main is the part of our code where execution begins.) The
argument is a list containing a set of strings, one for each argument on
the command line that started the program running.

Inside main(), the program displays a string, by writing the string to
display inside double-quote marks. Any time a string is enclosed in
double-quotes, it's a "self-printing" string. Simply executing this line
of code displays the string, even though there's no explicit "print"
statement or the like.

(There's another kind of string that you can use as a value - store in a
variable, pass to functions, take apart, scan, combine with other
strings, and so on. TADS 3 has quite powerful string handling, and since
TADS 3 has automatic garbage collection, it's *much* easier to use for
string manipulation than a language like C - it's more on par with Java.
**Value** strings are written by enclosing them in single-quote marks;
**self-printing** strings are enclosed in double-quotes.)

## Notes for TADS 2 users

If you've used TADS 2, you might be wondering where things like the
init() function and the startroom object are. In TADS 3, these are no
longer part of the system. Similar things are defined in the standard
adventure game library, which you'd almost certainly use to write a game
with TADS 3; at the moment, though, we're talking about the system
itself, without any extensions from libraries. Whereas earlier versions
of TADS did all sorts of things automatically before your program ever
got control, the TADS 3 interpreter merely loads your program and calls
main(). When main() returns, the program is finished, and the TADS 3
interpreter terminates.

It might sound like TADS 3 is a big step backwards from TADS 2, since
TADS 2 did so much more automatically. It's true that the game program
is responsible for doing a lot more in TADS 3, but this actually makes
things better - no longer will you be forced to use the command loop
that was built in to TADS 2. Instead, the sorts of things that were
built directly into TADS 2 are implemented in the library in TADS 3; so
you still won't have to write any of those things yourself, but you can
change them if you want to, and as much as you want to, because the
library is all written in the same language as your game program is.

</div>

------------------------------------------------------------------------

<div class="navb">

*TADS 3 System Manual*  
<a href="toc.html" class="nav">Table of Contents</a> \|
<a href="begin.html" class="nav">Opening Moves</a> \> Hello, World!  
<span class="navnp"><a href="naming.html" class="nav"><em>Prev:</em> Naming Conventions</a>
    <a href="tools.html" class="nav"><em>Next:</em> The Tools</a>    
</span>

</div>
